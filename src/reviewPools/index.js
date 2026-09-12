// Registers each course's review-question pools. To add pools for a course:
// create src/reviewPools/yourCourseReviews.js exporting an object shaped like
// { "1.1": [ {q, options, correct, explain?}, ... 4 questions ], "1.2": [...] },
// then import it and add one line below. A lesson with no entry here just
// falls back to reusing its own end-of-lesson quiz for review (see
// pickReviewQuestion in App.jsx) — nothing breaks if a course has no file yet.

import { appliedNutritionReviews } from "./appliedNutritionReviews.js";

export const REVIEW_POOLS = {
  "sleep-science": sleepScienceReviews,
};
