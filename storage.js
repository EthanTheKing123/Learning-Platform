// Progress storage — currently browser-local (per-device, no login).
//
// When you're ready to add accounts (see README.md), this is the ONLY file
// that needs to change: swap the two functions below for Firestore calls
// keyed by the signed-in user's ID instead of just the course ID. Nothing
// in App.jsx or the course files needs to know the difference.
export async function loadProgress(courseId) {
  try {
    const raw = localStorage.getItem(`progress:${courseId}`);
    return raw ? JSON.parse(raw) : { completedLessons: [] };
  } catch {
    return { completedLessons: [] };
  }
}
export async function saveProgress(courseId, progress) {
  try {
    localStorage.setItem(`progress:${courseId}`, JSON.stringify(progress));
  } catch {
    // best-effort; UI state is already updated optimistically
  }
}
