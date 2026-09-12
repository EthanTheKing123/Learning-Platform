// Usernames, public profiles, and friends — kept separate from storage.js
// (which stays focused on per-course lesson progress) since this is a
// different concern: social/identity data rather than learning progress.
//
// Data shape (see firestore.rules for the matching security rules):
//   usernames/{lowercaseName}                -> { uid }
//   users/{uid}/publicProfile/info            -> { username, displayName, photoURL }
//   users/{uid}/friendRequests/{senderUid}    -> { at, fromUsername, fromDisplayName, fromPhotoURL }
//   users/{uid}/friends/{friendUid}           -> { since, username, displayName, photoURL }
//
// Note what's absent: email is never written to publicProfile, so a
// friend's profile view is "everything except email" by construction —
// there's simply nothing to filter at read time.
import { db } from "./firebase.js";
import { doc, getDoc, getDocs, collection, setDoc, deleteDoc } from "firebase/firestore";

const USERNAME_PATTERN = /^[a-z0-9_]{3,20}$/;

export function normalizeUsername(raw) {
  return (raw || "").trim().toLowerCase().replace(/^@/, "");
}

export function isValidUsername(name) {
  return USERNAME_PATTERN.test(name);
}

// Throws a plain Error with a message safe to show the user directly.
export async function claimUsername(user, rawUsername) {
  const name = normalizeUsername(rawUsername);
  if (!isValidUsername(name)) {
    throw new Error("Usernames must be 3-20 characters: lowercase letters, numbers, or underscore.");
  }
  const nameRef = doc(db, "usernames", name);
  try {
    // Plain setDoc on a not-yet-existing path is evaluated as a Firestore
    // "create" by the security rules, which reject it outright if the
    // document already exists (see firestore.rules) — so this is safe
    // even if two people try to claim the same name at the same instant;
    // whichever write actually lands first wins, the second is rejected.
    await setDoc(nameRef, { uid: user.uid });
  } catch {
    throw new Error(`@${name} is already taken — try another.`);
  }
  const profileRef = doc(db, "users", user.uid, "publicProfile", "info");
  await setDoc(profileRef, {
    username: name,
    displayName: user.displayName || name,
    photoURL: user.photoURL || null,
  });
  return name;
}

export async function getMyUsername(uid) {
  const snap = await getDoc(doc(db, "users", uid, "publicProfile", "info"));
  return snap.exists() ? snap.data().username : null;
}

export async function getPublicProfile(uid) {
  const snap = await getDoc(doc(db, "users", uid, "publicProfile", "info"));
  return snap.exists() ? snap.data() : null;
}

// Resolves "@someone" to their uid + public profile in one call, or null
// if that username doesn't exist. Never throws on a plain "not found".
export async function findUserByUsername(rawUsername) {
  const name = normalizeUsername(rawUsername);
  const nameSnap = await getDoc(doc(db, "usernames", name));
  if (!nameSnap.exists()) return null;
  const uid = nameSnap.data().uid;
  const profile = await getPublicProfile(uid);
  return { uid, ...profile };
}

export async function getFriends(uid) {
  const snap = await getDocs(collection(db, "users", uid, "friends"));
  return snap.docs.map((d) => ({ uid: d.id, ...d.data() }));
}

export async function getIncomingRequests(uid) {
  const snap = await getDocs(collection(db, "users", uid, "friendRequests"));
  return snap.docs.map((d) => ({ uid: d.id, ...d.data() }));
}

// Null if no request exists in either direction; otherwise "incoming"
// (they asked you), "outgoing" (you asked them), or "friends".
export async function getRelationship(myUid, otherUid) {
  const [friendSnap, incomingSnap, outgoingSnap] = await Promise.all([
    getDoc(doc(db, "users", myUid, "friends", otherUid)),
    getDoc(doc(db, "users", myUid, "friendRequests", otherUid)),
    getDoc(doc(db, "users", otherUid, "friendRequests", myUid)),
  ]);
  if (friendSnap.exists()) return "friends";
  if (incomingSnap.exists()) return "incoming";
  if (outgoingSnap.exists()) return "outgoing";
  return null;
}

export async function sendFriendRequest(fromUser, toUid) {
  const myProfile = await getPublicProfile(fromUser.uid);
  await setDoc(doc(db, "users", toUid, "friendRequests", fromUser.uid), {
    at: Date.now(),
    fromUsername: myProfile?.username || null,
    fromDisplayName: myProfile?.displayName || fromUser.displayName || "Someone",
    fromPhotoURL: myProfile?.photoURL || fromUser.photoURL || null,
  });
}

export async function cancelFriendRequest(fromUid, toUid) {
  await deleteDoc(doc(db, "users", toUid, "friendRequests", fromUid));
}

export async function declineFriendRequest(myUid, fromUid) {
  await deleteDoc(doc(db, "users", myUid, "friendRequests", fromUid));
}

// Accepting writes the mutual edge on both sides, then removes the
// original request. `myProfile` / `theirRequest` are passed in so this
// doesn't need extra reads beyond what the Requests screen already has.
export async function acceptFriendRequest(myUid, myProfile, theirRequest) {
  const otherUid = theirRequest.uid;
  await setDoc(doc(db, "users", myUid, "friends", otherUid), {
    since: Date.now(),
    username: theirRequest.fromUsername || null,
    displayName: theirRequest.fromDisplayName || "Learner",
    photoURL: theirRequest.fromPhotoURL || null,
  });
  await setDoc(doc(db, "users", otherUid, "friends", myUid), {
    since: Date.now(),
    username: myProfile?.username || null,
    displayName: myProfile?.displayName || "Learner",
    photoURL: myProfile?.photoURL || null,
  });
  await deleteDoc(doc(db, "users", myUid, "friendRequests", otherUid));
}

export async function removeFriend(myUid, otherUid) {
  await Promise.all([
    deleteDoc(doc(db, "users", myUid, "friends", otherUid)),
    deleteDoc(doc(db, "users", otherUid, "friends", myUid)),
  ]);
}
