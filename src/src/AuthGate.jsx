import React, { useState, useEffect } from "react";
import { GraduationCap, LogOut } from "lucide-react";
import { auth } from "./firebase.js";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18">
      <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62z" />
      <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.81.54-1.85.87-3.04.87-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 0 0 9 18z" />
      <path fill="#FBBC05" d="M3.97 10.73A5.4 5.4 0 0 1 3.68 9c0-.6.1-1.19.28-1.73V4.94H.96A9 9 0 0 0 0 9c0 1.45.35 2.83.96 4.06l3.01-2.33z" />
      <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.94l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58z" />
    </svg>
  );
}

function SignInScreen() {
  const [mode, setMode] = useState("signin"); // "signin" | "signup"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const friendlyError = (err) => {
    const code = err.code || "";
    if (code.includes("auth/invalid-credential") || code.includes("auth/wrong-password") || code.includes("auth/user-not-found")) return "That email/password combination doesn't match an account.";
    if (code.includes("auth/email-already-in-use")) return "An account already exists for that email — try signing in instead.";
    if (code.includes("auth/weak-password")) return "Password should be at least 6 characters.";
    if (code.includes("auth/popup-closed-by-user")) return "Sign-in was closed before finishing — try again.";
    return err.message.replace("Firebase: ", "");
  };

  const handleGoogle = async () => {
    setError("");
    setBusy(true);
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (err) {
      setError(friendlyError(err));
    } finally {
      setBusy(false);
    }
  };

  const handleEmail = async (e) => {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      if (mode === "signup") await createUserWithEmailAndPassword(auth, email, password);
      else await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(friendlyError(err));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF", fontFamily: '"Nunito", ui-rounded, "Segoe UI", sans-serif', padding: 20 }}>
      <div style={{ width: "100%", maxWidth: 380, textAlign: "center" }}>
        <div style={{ width: 56, height: 56, borderRadius: 16, background: "#17213A", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>
          <GraduationCap size={26} color="#fff" />
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: "#17213A", marginBottom: 6, fontFamily: '"Baloo 2", "Nunito", sans-serif' }}>Learning Academy</h1>
        <p style={{ fontSize: 15, color: "#6B7080", marginBottom: 28, fontWeight: 600 }}>Sign in to save your progress across devices.</p>

        <button
          onClick={handleGoogle}
          disabled={busy}
          style={{ width: "100%", padding: "13px 0", borderRadius: 14, border: "2px solid #EAEAF2", background: "#fff", color: "#17213A", fontWeight: 800, fontSize: 15.5, cursor: busy ? "default" : "pointer", marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}
        >
          <GoogleIcon /> Continue with Google
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "4px 0 18px" }}>
          <div style={{ flex: 1, height: 1, background: "#EAEAF2" }} />
          <span style={{ fontSize: 12.5, color: "#B0AEC4", fontWeight: 800 }}>OR</span>
          <div style={{ flex: 1, height: 1, background: "#EAEAF2" }} />
        </div>

        <form onSubmit={handleEmail}>
          <input
            type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", boxSizing: "border-box", padding: "13px 16px", borderRadius: 14, border: "2px solid #EAEAF2", fontSize: 15, marginBottom: 10, outline: "none", fontWeight: 600 }}
          />
          <input
            type="password" required placeholder="Password" value={password} minLength={6} onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", boxSizing: "border-box", padding: "13px 16px", borderRadius: 14, border: "2px solid #EAEAF2", fontSize: 15, marginBottom: 12, outline: "none", fontWeight: 600 }}
          />
          {error && <p style={{ color: "#D8465F", fontSize: 13.5, marginBottom: 12, fontWeight: 700 }}>{error}</p>}
          <button
            type="submit" disabled={busy}
            style={{ width: "100%", padding: "14px 0", borderRadius: 14, border: "none", background: "#2E7FD1", color: "#fff", fontWeight: 800, fontSize: 15.5, cursor: busy ? "default" : "pointer", boxShadow: "0 4px 0 #1F5C99", fontFamily: '"Baloo 2", sans-serif' }}
          >
            {mode === "signup" ? "Create account" : "Sign in"}
          </button>
        </form>

        <button
          onClick={() => { setMode(mode === "signup" ? "signin" : "signup"); setError(""); }}
          style={{ background: "none", border: "none", color: "#6B7080", fontSize: 14, marginTop: 18, cursor: "pointer", fontWeight: 700 }}
        >
          {mode === "signup" ? "Already have an account? Sign in" : "New here? Create an account"}
        </button>
      </div>
    </div>
  );
}

export default function AuthGate({ children }) {
  const [user, setUser] = useState(undefined); // undefined = checking, null = signed out, object = signed in

  useEffect(() => onAuthStateChanged(auth, setUser), []);

  if (user === undefined) {
    return <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "#B0AEC4", fontSize: 14, fontWeight: 700, fontFamily: "sans-serif" }}>Loading…</div>;
  }
  if (!user) return <SignInScreen />;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "10px 16px 0" }}>
        <button
          onClick={() => signOut(auth)}
          style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "#8A8FA0", fontSize: 13, fontWeight: 700, cursor: "pointer" }}
        >
          <LogOut size={14} /> Sign out{user.email ? ` (${user.email})` : ""}
        </button>
      </div>
      {React.cloneElement(children, { user })}
    </div>
  );
}
