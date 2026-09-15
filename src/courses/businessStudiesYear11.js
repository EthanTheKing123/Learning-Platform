// Business Studies — NSW Stage 6, PRELIMINARY (Year 11) COURSE ONLY
// ============================================================
// Same 100 lessons as before, but restructured into many smaller
// modules grouped under the 3 syllabus topics as `section`s — same
// pattern as the economics course (a topic isn't one giant module,
// it's several focused modules of ~4-10 lessons each). CourseMap
// renders a new "level" banner whenever `section` changes between
// consecutive modules, so these 3 sections become 3 visual levels.
// All lessons are placeholders (lessons: [] + lessonPreview) — fill
// in `lessons` on a module with real blocks/quiz content the same
// way your other courses do; its preview list disappears automatically.

const businessStudiesYear11 = {
  id: "business-studies-year-11",
  title: "Business Studies (Year 11)",
  tagline: "NSW Preliminary Course — Stage 6 syllabus",
  icon: "line-chart",
  accent: "#2E5FD1",
  ink: "#17213A",
  topic: "Reddam Curriculum",
  difficulty: "Advanced",

  modules: [
    // ============== SECTION: NATURE OF BUSINESS (24 lessons) ==============
    {
      id: "bs11-m1", number: 1, section: "Nature of Business",
      title: "Role of Business",
      description: "What a business actually is, and why businesses exist in the first place.",
      lessons: [],
      lessonPreview: [
        { id: "1.1", title: "The Nature of a Business" },
        { id: "1.2", title: "Producing Goods and Services" },
        { id: "1.3", title: "Why Businesses Exist — Profit, Employment, Incomes & Choice" },
        { id: "1.4", title: "Innovation, Entrepreneurship & Risk" },
        { id: "1.5", title: "Wealth and Quality of Life" },
      ],
    },
    {
      id: "bs11-m2", number: 2, section: "Nature of Business",
      title: "Types of Businesses",
      description: "How businesses are classified by size, location, industry and legal structure.",
      lessons: [],
      lessonPreview: [
        { id: "2.1", title: "Classifying Businesses by Size" },
        { id: "2.2", title: "Classifying Businesses by Location — Local, National, Global" },
        { id: "2.3", title: "Classifying Businesses by Industry Sector" },
        { id: "2.4", title: "Legal Structures — Sole Trader & Partnership" },
        { id: "2.5", title: "Legal Structures — Private & Public Companies" },
        { id: "2.6", title: "Legal Structures — Government Enterprises" },
        { id: "2.7", title: "Choosing a Legal Structure" },
      ],
    },
    {
      id: "bs11-m3", number: 3, section: "Nature of Business",
      title: "Influences on Business",
      description: "The internal and external forces that shape how a business operates, and who has a stake in it.",
      lessons: [],
      lessonPreview: [
        { id: "3.1", title: "External Influences on Business" },
        { id: "3.2", title: "Internal Influences on Business" },
        { id: "3.3", title: "Identifying Stakeholders" },
      ],
    },
    {
      id: "bs11-m4", number: 4, section: "Nature of Business",
      title: "Business Growth & Decline",
      description: "The business life cycle, from establishment through to decline or liquidation.",
      lessons: [],
      lessonPreview: [
        { id: "4.1", title: "The Business Life Cycle — Establishment" },
        { id: "4.2", title: "The Business Life Cycle — Growth" },
        { id: "4.3", title: "The Business Life Cycle — Maturity & Post-Maturity" },
        { id: "4.4", title: "Responding to Life Cycle Challenges" },
        { id: "4.5", title: "Business Decline and Liquidation" },
      ],
    },
    {
      id: "bs11-m5", number: 5, section: "Nature of Business",
      title: "Contemporary Issues in Business",
      description: "Applying the topic to real business expansion, industry change, and liquidation case studies.",
      lessons: [],
      lessonPreview: [
        { id: "5.1", title: "Case Study — An Australian Business Going Global" },
        { id: "5.2", title: "Case Study — A Global Business Expanding into Australia" },
        { id: "5.3", title: "The Growth of Tertiary, Quaternary & Quinary Industries" },
        { id: "5.4", title: "Stakeholder Problems in Liquidation" },
      ],
    },

    // ============== SECTION: BUSINESS MANAGEMENT (38 lessons) ==============
    {
      id: "bs11-m6", number: 6, section: "Business Management",
      title: "Nature of Management",
      description: "What effective management looks like, the skills it demands, and the goals it's working toward.",
      lessons: [],
      lessonPreview: [
        { id: "6.1", title: "What Makes Management Effective" },
        { id: "6.2", title: "Interpersonal & Communication Skills" },
        { id: "6.3", title: "Strategic Thinking & Vision" },
        { id: "6.4", title: "Problem-Solving & Decision-Making" },
        { id: "6.5", title: "Flexibility & Adaptability to Change" },
        { id: "6.6", title: "Reconciling Conflicting Stakeholder Interests" },
        { id: "6.7", title: "Achieving Business Goals — Profit, Market Share & Growth" },
        { id: "6.8", title: "Achieving Social & Environmental Goals" },
        { id: "6.9", title: "Staff Involvement — Innovation & Motivation" },
        { id: "6.10", title: "Staff Involvement — Mentoring & Training" },
      ],
    },
    {
      id: "bs11-m7", number: 7, section: "Business Management",
      title: "Management Approaches",
      description: "Classical, behavioural and contingency approaches to management, compared.",
      lessons: [],
      lessonPreview: [
        { id: "7.1", title: "The Classical Approach to Management" },
        { id: "7.2", title: "Hierarchical Structures & Autocratic Leadership" },
        { id: "7.3", title: "The Behavioural Approach to Management" },
        { id: "7.4", title: "Teams & Participative Leadership" },
        { id: "7.5", title: "The Contingency Approach" },
        { id: "7.6", title: "Comparing Management Approaches" },
      ],
    },
    {
      id: "bs11-m8", number: 8, section: "Business Management",
      title: "Coordinating Business Functions I — Operations, Marketing & Finance",
      description: "How management coordinates operations, marketing and finance as interdependent functions.",
      lessons: [],
      lessonPreview: [
        { id: "8.1", title: "Coordinating Key Business Functions — Overview" },
        { id: "8.2", title: "Operations — Goods, Services & the Production Process" },
        { id: "8.3", title: "Quality Management in Operations" },
        { id: "8.4", title: "Marketing — Identifying the Target Market" },
        { id: "8.5", title: "The Marketing Mix" },
        { id: "8.6", title: "Finance — The Cash Flow Statement" },
        { id: "8.7", title: "Finance — The Income Statement" },
        { id: "8.8", title: "Finance — The Balance Sheet" },
        { id: "8.9", title: "Effective Cash Flow Management (Case Study)" },
      ],
    },
    {
      id: "bs11-m9", number: 9, section: "Business Management",
      title: "Coordinating Business Functions II — Human Resources & Ethics",
      description: "Human resources as a business function, and the ethical dimension of management decisions.",
      lessons: [],
      lessonPreview: [
        { id: "9.1", title: "Human Resources — Recruitment & Training" },
        { id: "9.2", title: "Human Resources — Employment Contracts & Separation" },
        { id: "9.3", title: "Ethical Business Behaviour in Management" },
        { id: "9.4", title: "Coordinating Functions in an SME (Case Study)" },
        { id: "9.5", title: "Benefits of Quality Management Practices (Case Study)" },
      ],
    },
    {
      id: "bs11-m10", number: 10, section: "Business Management",
      title: "Management and Change",
      description: "How management identifies the need for change and manages it effectively.",
      lessons: [],
      lessonPreview: [
        { id: "10.1", title: "Responding to Internal & External Influences" },
        { id: "10.2", title: "Identifying the Need for Change" },
        { id: "10.3", title: "Business Information Systems" },
        { id: "10.4", title: "Setting Achievable Goals for Change" },
        { id: "10.5", title: "Overcoming Resistance to Change" },
        { id: "10.6", title: "The Role of Management Consultants" },
        { id: "10.7", title: "How SMEs Manage Change Effectively (Case Study)" },
        { id: "10.8", title: "Qualities of Ethical Managers (Case Study)" },
      ],
    },

    // ============== SECTION: BUSINESS PLANNING (38 lessons) ==============
    {
      id: "bs11-m11", number: 11, section: "Business Planning",
      title: "SME Basics",
      description: "What a small to medium enterprise is, and its role and contribution to the economy.",
      lessons: [],
      lessonPreview: [
        { id: "11.1", title: "What Is a Small to Medium Enterprise?" },
        { id: "11.2", title: "The Role of SMEs in the Economy" },
        { id: "11.3", title: "The Economic Contribution of SMEs" },
        { id: "11.4", title: "Why SMEs Succeed or Fail" },
      ],
    },
    {
      id: "bs11-m12", number: 12, section: "Business Planning",
      title: "Establishing an SME",
      description: "The personal, market, financial, legal and human resource factors involved in starting a business.",
      lessons: [],
      lessonPreview: [
        { id: "12.1", title: "Personal Qualities of an Entrepreneur" },
        { id: "12.2", title: "Sources of Information for Starting a Business" },
        { id: "12.3", title: "Developing the Business Idea & Assessing Competition" },
        { id: "12.4", title: "Establishment Options — New, Existing or Franchise" },
        { id: "12.5", title: "Market Considerations — Goods, Price & Location" },
        { id: "12.6", title: "Sourcing Finance & Its Cost" },
        { id: "12.7", title: "Legal Requirements — Business Name, Zoning & Regulations" },
        { id: "12.8", title: "Human Resources — Skills Needed to Start a Business" },
        { id: "12.9", title: "Wage and Non-Wage Costs" },
        { id: "12.10", title: "Taxation for New Businesses" },
      ],
    },
    {
      id: "bs11-m13", number: 13, section: "Business Planning",
      title: "The Business Planning Process I — Vision, Goals & Resources",
      description: "Turning a business idea into a plan: situational analysis, vision, goals and organising resources.",
      lessons: [],
      lessonPreview: [
        { id: "13.1", title: "Where Business Planning Ideas Come From" },
        { id: "13.2", title: "Conducting a Situational Analysis" },
        { id: "13.3", title: "Setting a Vision for the Business" },
        { id: "13.4", title: "Setting Business Goals & Objectives" },
        { id: "13.5", title: "Planning for Long-Term Growth" },
        { id: "13.6", title: "Organising Operations Resources" },
        { id: "13.7", title: "Organising Marketing Resources" },
        { id: "13.8", title: "Organising Finance Resources" },
        { id: "13.9", title: "Organising Human Resources" },
      ],
    },
    {
      id: "bs11-m14", number: 14, section: "Business Planning",
      title: "The Business Planning Process II — Forecasting & Monitoring",
      description: "Forecasting revenue and costs, and monitoring a plan once it's in action.",
      lessons: [],
      lessonPreview: [
        { id: "14.1", title: "Forecasting Revenue & Costs" },
        { id: "14.2", title: "Break-Even Analysis" },
        { id: "14.3", title: "Cash Flow Projections" },
        { id: "14.4", title: "Monitoring Sales, Budgets & Profit" },
        { id: "14.5", title: "Taking Corrective Action" },
      ],
    },
    {
      id: "bs11-m15", number: 15, section: "Business Planning",
      title: "Critical Success Factors",
      description: "The factors that most often separate a successful small business from a failed one.",
      lessons: [],
      lessonPreview: [
        { id: "15.1", title: "Why a Business Plan Matters" },
        { id: "15.2", title: "Staffing & Building Effective Teams" },
        { id: "15.3", title: "Using Trend Analysis in Planning" },
        { id: "15.4", title: "Identifying & Sustaining Competitive Advantage" },
        { id: "15.5", title: "Avoiding Over-Extension of Resources" },
        { id: "15.6", title: "Using Technology in Business Planning" },
        { id: "15.7", title: "Economic Conditions & Business Planning" },
      ],
    },
    {
      id: "bs11-m16", number: 16, section: "Business Planning",
      title: "Applying Business Planning",
      description: "Government influence, going global, and pulling it all together into a real business plan.",
      lessons: [],
      lessonPreview: [
        { id: "16.1", title: "How Government Influences SMEs (Case Study)" },
        { id: "16.2", title: "How SMEs Enter the Global Market (Case Study)" },
        { id: "16.3", title: "Writing a Business Plan (Applied Task)" },
      ],
    },
  ],
};

export default businessStudiesYear11;
