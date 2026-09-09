// Registers every course the platform offers.
// To add a new course: create src/courses/yourCourse.js exporting a course
// object shaped like sleepScience.js, then add it here.
import { sleepScience } from "./sleepScience.js";
import { boostPerformance } from "./boostPerformance.js";
import { studyLearning } from "./studyskills.js";
import { chemistry } from "./chemistryoutcomes.js";
import { psychologyLevel1 } from "./psychology.js";
import { appliedNutrition } from "./appliednutrition.js";
export const COURSES = [sleepScience, boostPerformance, studyLearning, chemistry, psychologyLevel1, appliedNutrition];
