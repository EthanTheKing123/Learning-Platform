// Progress storage — now per-account via Firestore, keyed by the signed-in
// user's ID. App.jsx and the course files don't know or care that this
// changed; they just call loadProgress(courseId) / saveProgress(courseId, p).
import { auth, db } from "./firebase.js";
import { doc, getDoc, setDoc } from "firebase/firestore";

const localKey = (courseId) => `progress:${courseId}`;

function readLocal(courseId) {
  try {
    const raw = localStorage.getItem(localKey(courseId));
    return raw ? JSON.parse(raw) : { completedLessons: [] };
  } catch {
    return { completedLessons: [] };
  }
}

export async function loadProgress(courseId) {
  const uid = auth.currentUser?.uid;
  // Shouldn't normally happen — AuthGate blocks the app until signed in —
  // but fall back to local storage rather than crash if it ever does.
  if (!uid) return readLocal(courseId);

  try {
    const ref = doc(db, "users", uid, "progress", courseId);
    const snap = await getDoc(ref);
    if (snap.exists()) return snap.data();

    // First time this account has opened this course: if there's leftover
    // progress from before accounts existed (same browser), carry it over
    // once instead of silently losing it.
    const migrated = readLocal(courseId);
    await setDoc(ref, migrated);
    return migrated;
  } catch (err) {
    console.error("Failed to load progress from Firestore", err);
    return readLocal(courseId);
  }
}

export async function saveProgress(courseId, progress) {
  const uid = auth.currentUser?.uid;
  if (!uid) {
    try { localStorage.setItem(localKey(courseId), JSON.stringify(progress)); } catch { /* best-effort */ }
    return;
  }
  try {
    const ref = doc(db, "users", uid, "progress", courseId);
    await setDoc(ref, progress);
  } catch (err) {
    console.error("Failed to save progress to Firestore", err);
  }
}

// Read-only lookup of someone ELSE's progress for one course — used for
// viewing a friend's profile. Deliberately separate from loadProgress
// above: no localStorage fallback and no migration (that only makes sense
// for your own account), and it returns null rather than an empty
// progress object when access is denied, so the caller can tell "they
// have zero progress" apart from "I'm not allowed to see this" (e.g. not
// actually friends yet — firestore.rules is what actually enforces this;
// this null just lets the UI react to it sensibly).
export async function loadFriendProgress(friendUid, courseId) {
  try {
    const snap = await getDoc(doc(db, "users", friendUid, "progress", courseId));
    return snap.exists() ? snap.data() : { completedLessons: [] };
  } catch {
    return null;
  }
}
