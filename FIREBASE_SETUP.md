# Firebase project setup (reference)

This documents how the current Firebase project (used by `src/firebase.js`
and `src/AuthGate.jsx`) was configured, in case you ever need to recreate
it, add a teammate, or set up a second environment.

## Providers enabled (Firebase console → Authentication → Sign-in method)
- Google
- Email/Password

## Firestore
Production mode, with these rules (also saved in `firestore.rules`):

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/progress/{courseId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Environment variables
Six `VITE_FIREBASE_...` variables (API key, auth domain, project ID,
storage bucket, messaging sender ID, app ID) — pulled from Firebase
console → Project settings → Your apps → SDK config. Set in:
- Locally: `.env.local` (git-ignored, never commit real values)
- Vercel: Settings → Environment Variables, all three environments

## Authorized domains
Firebase console → Authentication → Settings → Authorized domains needs
your live Vercel domain added, or Google sign-in will fail on the
deployed site (localhost is allowed by default).

## Data shape
`users/{uid}/progress/{courseId}` → `{ completedLessons: [...], scores: { [lessonId]: { score, total, at } } }`
