# What changed

Replace these 5 files in your `src/` folder with the ones in this zip
(same paths, just drag them into GitHub's "Add files via upload" — it'll
show as a diff/new commit, so your history is untouched):

- src/App.jsx
- src/courses/sleepScience.js
- src/courses/index.js  (unchanged, included for completeness)
- src/storage.js         (unchanged, included for completeness)
- src/main.jsx           (unchanged, included for completeness)

## 1. The quiz "auto-correct" bug — fixed

The question card wasn't getting a unique `key` when moving from one
question to the next, so React was reusing the same component instance
instead of resetting it — meaning the *previous* question's answer/confirmed
state leaked into the next question, which is why it looked like it was
skipping straight to an answer. Every question step now gets a unique key
so its state always starts fresh.

## 2. Question variety

Quiz (and mid-lesson "quick pause") questions can now be one of four types.
Just set `type` (in a quiz item) or `qtype` (in a check block) — leave it
out and it defaults to the old single-choice style:

```js
// single choice (default)
{ q: "...", options: ["A","B","C"], correct: 1 }

// true/false
{ type: "truefalse", q: "...", correct: true, explain: "..." }

// select all that apply
{ type: "multi", q: "...", options: [...], correct: [0,2], explain: "..." }

// typed answer
{ type: "type", q: "...", accepted: ["delta waves", "delta"], explain: "..." }
```

`sleepScience.js` now has a mix of all four sprinkled through Module 1–3,
and a few lessons have 4 questions instead of 3 — that's all just data, so
you can keep mixing types/lengths freely as you write new lessons.

## 3. Lesson-complete screen

Finishing a lesson now shows a proper summary: a star rating, your score,
and three ways forward — **Next lesson** (auto-picked, and it also marks
the lesson complete for you), **Back to modules**, and **Back to home**.
If there's no next lesson yet (end of what's built), it tells you that
instead of showing a dead button.

## 4. Design pass

- Switched to a rounded, friendlier display font (Baloo 2 for headings,
  Nunito for body text) instead of the serif headers — closer to a
  Duolingo feel. **You need to add this line inside `<head>` in your
  `index.html`** for the fonts to actually load (otherwise it silently
  falls back to your system font, which still looks fine, just less punchy):

  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;700;800&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
  ```

- Background is pure white now instead of the cream tone, with a few soft
  blurred colour blobs behind the home screen header for personality.
- Buttons got a chunky "3D" bottom shadow (press down on click) — closer
  to the reference screenshots.
- Home and the module/curriculum lists now use a wider, responsive
  container on desktop/laptop screens (grows up to ~1040px), while the
  lesson reading view and the course map path stay narrower since those
  read better at a fixed width even on a big screen — that's intentional,
  Duolingo/Cognito do the same.
- Home page is back to a single progress bar per course — unchanged from
  last time, just confirming it's still correct.
