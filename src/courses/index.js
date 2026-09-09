// Registers every course the platform offers.
// To add a new course (e.g. Psychology): create src/courses/psychology.js
// exporting a course object shaped like sleepScience.js, then add it here.
import { sleepScience } from "./sleepScience.js";
export const COURSES = [sleepScience];
