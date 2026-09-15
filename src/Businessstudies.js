// Business Studies — NSW Stage 6 Syllabus (Preliminary + HSC)
// ============================================================
// Structure mirrors the syllabus directly:
//   - 3 Preliminary topics (Nature of business, Business management,
//     Business planning) — 20%/40%/40% of Preliminary course time
//   - 4 HSC topics (Operations, Marketing, Finance, Human resources) —
//     25% each of HSC course time
// Each topic's "Students learn about" sub-headings became one lesson.
// All lessons are placeholders for now (lessons: [] + lessonPreview),
// same pattern ModuleView/CurriculumView already use to render a
// "coming soon" list — fill in `lessons` on each module with real
// blocks/quiz content the same way the other courses do, and the
// preview list disappears automatically once lessons.length > 0.

const businessStudies = {
  id: "business-studies-hsc",
  title: "Business Studies",
  tagline: "NSW Stage 6 syllabus — Preliminary & HSC",
  icon: "line-chart",
  accent: "#2E5FD1",
  ink: "#17213A",
  topic: "Reddam Curriculum",
  difficulty: "Advanced",

  modules: [
    // ---------------- PRELIMINARY COURSE ----------------
    {
      id: "bs-p1",
      number: 1,
      section: "Preliminary Course",
      title: "Nature of Business",
      description: "The focus of this topic is the role and nature of business in a changing business environment.",
      lessons: [],
      lessonPreview: [
        { id: "1.1", title: "Role of Business" },
        { id: "1.2", title: "Types of Businesses" },
        { id: "1.3", title: "Influences in the Business Environment" },
        { id: "1.4", title: "Business Growth and Decline" },
      ],
    },
    {
      id: "bs-p2",
      number: 2,
      section: "Preliminary Course",
      title: "Business Management",
      description: "The focus of this topic is the nature and responsibilities of management in the business environment.",
      lessons: [],
      lessonPreview: [
        { id: "2.1", title: "Nature of Management" },
        { id: "2.2", title: "Management Approaches" },
        { id: "2.3", title: "The Management Process" },
        { id: "2.4", title: "Management and Change" },
      ],
    },
    {
      id: "bs-p3",
      number: 3,
      section: "Preliminary Course",
      title: "Business Planning",
      description: "The focus of this topic is the processes of establishing and planning a small to medium enterprise.",
      lessons: [],
      lessonPreview: [
        { id: "3.1", title: "Small to Medium Enterprises" },
        { id: "3.2", title: "Influences in Establishing an SME" },
        { id: "3.3", title: "The Business Planning Process" },
        { id: "3.4", title: "Critical Issues in Business Success and Failure" },
      ],
    },

    // ---------------- HSC COURSE ----------------
    {
      id: "bs-h1",
      number: 4,
      section: "HSC Course",
      title: "Operations",
      description: "The focus of this topic is the strategies for effective operations management in large businesses.",
      lessons: [],
      lessonPreview: [
        { id: "4.1", title: "Role of Operations Management" },
        { id: "4.2", title: "Influences on Operations" },
        { id: "4.3", title: "Operations Processes" },
        { id: "4.4", title: "Operations Strategies" },
      ],
    },
    {
      id: "bs-h2",
      number: 5,
      section: "HSC Course",
      title: "Marketing",
      description: "The focus of this topic is the main elements involved in the development and implementation of successful marketing strategies.",
      lessons: [],
      lessonPreview: [
        { id: "5.1", title: "Role of Marketing" },
        { id: "5.2", title: "Influences on Marketing" },
        { id: "5.3", title: "The Marketing Process" },
        { id: "5.4", title: "Marketing Strategies" },
      ],
    },
    {
      id: "bs-h3",
      number: 6,
      section: "HSC Course",
      title: "Finance",
      description: "The focus of this topic is the role of interpreting financial information in the planning and management of a business.",
      lessons: [],
      lessonPreview: [
        { id: "6.1", title: "Role of Financial Management" },
        { id: "6.2", title: "Influences on Financial Management" },
        { id: "6.3", title: "Processes of Financial Management" },
        { id: "6.4", title: "Financial Management Strategies" },
      ],
    },
    {
      id: "bs-h4",
      number: 7,
      section: "HSC Course",
      title: "Human Resources",
      description: "The focus of this topic is the contribution of human resource management to business performance.",
      lessons: [],
      lessonPreview: [
        { id: "7.1", title: "Role of Human Resource Management" },
        { id: "7.2", title: "Key Influences on HR" },
        { id: "7.3", title: "Processes of Human Resource Management" },
        { id: "7.4", title: "Strategies in Human Resource Management" },
        { id: "7.5", title: "Effectiveness of Human Resource Management" },
      ],
    },
  ],
};

export default businessStudies;
