// Registers every course the platform offers.
// To add a new course: create src/courses/yourCourse.js exporting a course
// object shaped like sleepScience.js, then add it here.
import { sleepScience } from "./sleepScience.js";
import { boostPerformance } from "./boostPerformance.js";
import { studyskills } from "./studyskills.js";
export const COURSES = [sleepScience, boostPerformance, studyskills];
