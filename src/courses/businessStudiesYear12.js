// Business Studies — NSW Stage 6, HSC (Year 12) COURSE ONLY
// ============================================================
// Lighter than the Year 11 course by design — 2 modules per HSC topic
// (Role & Influences, then Process & Strategies) instead of a dot-point
// breakdown, since the Preliminary course already carries most of the
// foundational depth. `prerequisites` points back at the Year 11 course
// id, which CourseDetail already reads to show a met/not-met checklist.

const businessStudiesYear12 = {
  id: "business-studies-year-12",
  title: "Business Studies (Year 12)",
  tagline: "NSW HSC Course — Stage 6 syllabus",
  icon: "line-chart",
  accent: "#2E5FD1",
  ink: "#17213A",
  topic: "Reddam Curriculum",
  difficulty: "Advanced",
  prerequisites: ["business-studies-year-11"],

  modules: [
    // ============== SECTION: OPERATIONS ==============
    {
      id: "bs12-m1", number: 1, section: "Operations",
      title: "Role & Influences on Operations",
      description: "Why operations matters strategically, and what shapes how it's managed.",
      lessons: [],
      lessonPreview: [
        { id: "1.1", title: "The Strategic Role of Operations Management" },
        { id: "1.2", title: "Goods and Services Across Different Industries" },
        { id: "1.3", title: "Key Influences on Operations Management" },
        { id: "1.4", title: "Corporate Social Responsibility in Operations" },
      ],
    },
    {
      id: "bs12-m2", number: 2, section: "Operations",
      title: "Operations Processes & Strategies",
      description: "How inputs become outputs, and the strategies businesses use to compete on operations.",
      lessons: [],
      lessonPreview: [
        { id: "2.1", title: "Inputs and the Transformation Process" },
        { id: "2.2", title: "Outputs — Customer Service & Warranties" },
        { id: "2.3", title: "Performance Objectives & New Product Design" },
        { id: "2.4", title: "Supply Chain, Outsourcing & Technology" },
        { id: "2.5", title: "Quality Management & Overcoming Resistance to Change" },
      ],
    },

    // ============== SECTION: MARKETING ==============
    {
      id: "bs12-m3", number: 3, section: "Marketing",
      title: "Role & Influences on Marketing",
      description: "The strategic role of marketing, the markets businesses sell into, and what shapes customer choice.",
      lessons: [],
      lessonPreview: [
        { id: "3.1", title: "The Strategic Role of Marketing" },
        { id: "3.2", title: "Types of Markets" },
        { id: "3.3", title: "Factors Influencing Customer Choice" },
        { id: "3.4", title: "Consumer Law & Ethics in Marketing" },
      ],
    },
    {
      id: "bs12-m4", number: 4, section: "Marketing",
      title: "The Marketing Process & Strategies",
      description: "From market research to the marketing mix, and how it changes at a global scale.",
      lessons: [],
      lessonPreview: [
        { id: "4.1", title: "Situational Analysis & Market Research" },
        { id: "4.2", title: "Market Segmentation & the Marketing Mix — Product & Price" },
        { id: "4.3", title: "Promotion Strategies" },
        { id: "4.4", title: "Place, Distribution & Physical Evidence" },
        { id: "4.5", title: "Global Marketing Strategies" },
      ],
    },

    // ============== SECTION: FINANCE ==============
    {
      id: "bs12-m5", number: 5, section: "Finance",
      title: "Role & Influences on Financial Management",
      description: "What financial management is trying to achieve, and where a business's finance actually comes from.",
      lessons: [],
      lessonPreview: [
        { id: "5.1", title: "The Strategic Role & Objectives of Financial Management" },
        { id: "5.2", title: "Sources of Finance — Debt & Equity" },
        { id: "5.3", title: "Financial Institutions & Government Influence" },
        { id: "5.4", title: "Global Market Influences on Finance" },
      ],
    },
    {
      id: "bs12-m6", number: 6, section: "Finance",
      title: "Financial Management Processes & Strategies",
      description: "Planning, monitoring, and interpreting financial performance through ratios and reports.",
      lessons: [],
      lessonPreview: [
        { id: "6.1", title: "Planning, Budgeting & Financial Controls" },
        { id: "6.2", title: "Financial Statements & Monitoring Performance" },
        { id: "6.3", title: "Financial Ratios & Comparative Analysis" },
        { id: "6.4", title: "Cash Flow & Profitability Management Strategies" },
        { id: "6.5", title: "Global Financial Management" },
      ],
    },

    // ============== SECTION: HUMAN RESOURCES ==============
    {
      id: "bs12-m7", number: 7, section: "Human Resources",
      title: "Role & Influences on Human Resource Management",
      description: "HR's strategic role, its key stakeholders, and the legal framework it operates within.",
      lessons: [],
      lessonPreview: [
        { id: "7.1", title: "The Strategic Role of Human Resource Management" },
        { id: "7.2", title: "Key HR Stakeholders" },
        { id: "7.3", title: "The Legal Framework & Employment Contracts" },
        { id: "7.4", title: "Economic, Technological & Social Influences on HR" },
      ],
    },
    {
      id: "bs12-m8", number: 8, section: "Human Resources",
      title: "HR Processes, Strategies & Effectiveness",
      description: "The HR lifecycle, core strategies, and how businesses measure whether HR is actually working.",
      lessons: [],
      lessonPreview: [
        { id: "8.1", title: "Acquisition, Development, Maintenance & Separation" },
        { id: "8.2", title: "HR Strategies — Leadership, Recruitment & Training" },
        { id: "8.3", title: "Rewards & Performance Management" },
        { id: "8.4", title: "Workplace Disputes & Resolution" },
        { id: "8.5", title: "Measuring HR Effectiveness" },
      ],
    },
  ],
};

export default businessStudiesYear12;
