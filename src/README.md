# Learning Academy

A self-hosted learning platform. The engine (`src/App.jsx`) is generic —
all subject content lives in separate data files under `src/courses/`.

## Run it locally

```
npm install
npm run dev
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to vercel.com → **Add New Project** → import that repo.
3. Vercel auto-detects Vite — leave the defaults (build command
   `npm run build`, output directory `dist`) and click **Deploy**.
4. Every time you push a new commit (e.g. after adding lessons), Vercel
   rebuilds and redeploys automatically. No extra config needed.

## How to add lessons — this is the part that matters

**You never touch the engine.** `src/App.jsx` renders whatever course
data it's given — it has no sleep-specific content in it at all. Content
lives entirely in `src/courses/`.

To add lessons to an existing module (say, Module 4), open
`src/courses/sleepScience.js`, find the module with `id: "m4"`, and
replace its `lessons: []` with real lesson objects, following the shape
already used in Modules 1–3. Each lesson looks like this:

```js
{
  id: "4.1",
  title: "The Two-Process Model",
  blocks: [
    { type: "p", text: "Plain paragraph. **Bold** with double-asterisks." },
    { type: "h", text: "A subheading — also starts a new step in the lesson flow" },
    { type: "list", items: ["Bullet one", "Bullet two"] },
    { type: "callout", text: "A highlighted takeaway box." },
    { type: "term", term: "Some Term", definition: "Its definition — renders as a tap-to-flip flashcard." },
    { type: "diagram", kind: "hypnogram" }, // or "cycle" — see Diagram() in App.jsx to add more
    { type: "check", q: "A mid-lesson question?", options: ["A", "B", "C"], correct: 1, explain: "Why B is right." },
    // question types — omit qtype (on a check) / type (in a quiz item) for a normal single-choice question.
    // Four supported values: "mcq" (default), "truefalse", "multi", "type".
    { type: "check", qtype: "multi", q: "Select all that apply", options: ["A", "B", "C", "D"], correct: [0, 2], explain: "Why A and C." },
    { type: "check", qtype: "truefalse", q: "True or false: ...", correct: true, explain: "Why." },
    { type: "check", qtype: "type", q: "Type the term for X.", accepted: ["term", "the term", "alt phrasing"] }, // matches any string in accepted, case-insensitive
  ],
  quiz: [
    { q: "End-of-lesson question?", options: ["A", "B", "C", "D"], correct: 2 },
    // Quiz items use `type` (not `qtype`) for the same four values: "mcq" (default), "truefalse", "multi", "type".
    // e.g. { type: "truefalse", q: "...", correct: false, explain: "..." }
    // Vary length and type lesson to lesson — 3 is typical, more is fine; mixing types keeps it interesting.
  ],
}
```

Save the file, commit, push — Vercel redeploys with the new lesson live.
That's the entire workflow for updating Sleep Science.

## How to add a whole new course (e.g. Psychology)

1. Create `src/courses/psychology.js`, exporting an object shaped exactly
   like `sleepScience.js` (`id`, `title`, `tagline`, `accent`, `ink`,
   `modules: [...]`).
2. Open `src/courses/index.js` and add one line:
   ```js
   import { psychology } from "./psychology.js";
   export const COURSES = [sleepScience, psychology];
   ```
3. Done — it appears on the home hub automatically, with its own colour
   and its own progress tracking. Nothing else changes.

## Accounts & progress storage

Accounts are live: `src/AuthGate.jsx` wraps the whole app with a sign-in
screen (Google or email/password) before anything else renders, and
`src/storage.js` saves progress to Firestore, keyed by the signed-in
user's account ID (`users/{uid}/progress/{courseId}`) instead of the
browser. See `FIREBASE_SETUP.md` for how the Firebase project itself was
configured (auth providers, Firestore rules, environment variables) —
useful if you ever set this up again for a second project.

Nothing in the course data files needed to change for this — `App.jsx`
only ever calls `loadProgress(courseId)` / `saveProgress(courseId, p)`,
so the storage backend stays swappable without touching lesson content.
