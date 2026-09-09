# What changed this round

Only these 6 files changed — everything else in the zip is your existing
code, untouched, just included so you can re-upload the whole thing at
once without hunting for individual files.

## Changed
- **`package.json`** — moved `firebase` from `devDependencies` to
  `dependencies`. This was your actual build failure: Vercel's production
  install skips `devDependencies` entirely, so `firebase` was never being
  installed on the server even though the code needed it. This one-line
  move fixes the `Rollup failed to resolve import "firebase/auth"` error.
- **`index.html`** — added the Google Fonts `<link>` for Baloo 2/Nunito
  (it was never actually there, so both the sign-in page and the rest of
  the app were silently falling back to your system font this whole
  time — now they'll both render the real rounded font consistently).
  Also added a global `box-sizing: border-box` reset. This is the likely
  real cause of your mobile "goes to the edge of the screen" issue: this
  app has buttons/cards all over that set `width: 100%` *plus* padding —
  without `border-box`, padding gets added on top of that 100%, so those
  elements render wider than their container. One CSS rule fixes it
  everywhere at once rather than needing 40 individual edits. Also
  renamed the page `<title>` to "Learning Academy".
- **`src/App.jsx`** — three changes:
  1. The module path no longer cycles through a 5-colour rainbow
     (blue/green/red/orange/yellow) for whichever module you're currently
     on — it's now a consistent 3-state system: grey = locked, your
     course's own accent colour = available/current, green = done. This
     was the biggest contributor to the "busy/inconsistent" feel next to
     the plain sign-in page.
  2. Removed the decorative blurred colour blobs behind the home screen
     header — same reasoning, they were the most "decorated" element in
     an otherwise clean app.
  3. Container widths tuned so a laptop-width screen gets a bit more
     breathing room on the lesson/quiz view (was capped fairly tight)
     while the card grids (home, module list) are capped independently
     so 1–2 cards don't stretch into oversized panels on a wide screen —
     extra space becomes side margin instead.
- **`src/AuthGate.jsx`** — "Sleep Academy" → "Learning Academy" in the
  sign-in heading.
- **`README.md`** — renamed title; fixed two things that were actually
  wrong and would've bitten you later: the lesson-writing example showed
  `qtype: "text"` / `accept: [...]` for a typed-answer question, but the
  real code only recognizes `qtype: "type"` / `accepted: [...]` — following
  the old example would've crashed that lesson. Also updated the
  "progress storage" section, which still described the old
  localStorage-only setup as if accounts didn't exist yet.
- **`FIREBASE_SETUP.md`** — new file, documents how your Firebase project
  is configured (providers, Firestore rules, env vars) so it's saved
  somewhere real instead of only existing in old chat messages.

## Not touched, on purpose
`src/storage.js`, `src/firebase.js`, `src/main.jsx`, `src/courses/*`,
`vite.config.js`, `firestore.rules` — these were all correct already
(the Firebase/Firestore integration, the per-question-type components,
the lesson-key bug fix, the "welcome back" recap screen) and didn't need
any changes for what you asked this round.

## What this does NOT do
This wasn't a full visual rebuild — no new components, no restructured
layouts, no new fonts/colours beyond what's described above. The goal
was: fix the real bugs (build failure, font loading, mobile overflow),
and tone down the specific things that made it feel inconsistent next
to the sign-in page (the rainbow path colours, the decorative blobs),
without touching anything that was already working.
