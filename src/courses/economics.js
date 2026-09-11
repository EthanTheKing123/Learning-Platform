// Economics course data — full curriculum structure, content not yet written.
// Every module below is a placeholder: modules have no lessons yet, just a
// lessonPreview list so the full curriculum is visible and browsable while
// content gets built out lesson by lesson. This is the exact same pattern
// Sleep Science uses for its own not-yet-built modules (see modules m4+ in
// sleepScience.js) — the app already knows how to render this state.
//
// To start writing real content for a module: replace its `lessons: []`
// with actual lesson objects (see sleepScience.js or psychology.js for the
// full block/quiz format), and lessonPreview becomes unnecessary for that
// module once lessons has real entries.
//
// Based on: NSW Economics 11–12 Syllabus (2025).

export const economics = {
  id: "economics",
  title: "Economics",
  tagline: "The full NSW Economics 11–12 syllabus, section by section — nothing skipped.",
  icon: "line-chart",
  accent: "#1878A0",       // teal — distinct from every other course's accent
  ink: "#17213A",
  modules: [
    {
      id: "m1", number: 1, section: "Section 1: Introduction to Economics",
      title: "Economic Thinking",
      description: "Scarcity, decision-making, opportunity cost, incentives, models, and behavioural economics as the foundation for everything else.",
      lessons: [],
      lessonPreview: [{ id: "1.1.1", title: "What Is Economics? Scarcity & the Economic Problem" }, { id: "1.1.2", title: "Economic Agents & Decision-Making" }, { id: "1.1.3", title: "Opportunity Cost & Trade-offs" }, { id: "1.1.4", title: "The Cost–Benefit Principle (marginal costs/benefits, short vs long term)" }, { id: "1.1.5", title: "Incentives & Disincentives (intended vs unintended consequences)" }, { id: "1.1.6", title: "The Role of Data in Economic Decisions" }, { id: "1.1.7", title: "Economic Models & Their Key Assumptions" }, { id: "1.1.8", title: "Behavioural Economics: Challenging Rational Choice (cognitive biases, ethics)" }, { id: "1.1.9", title: "Microeconomics vs Macroeconomics + Why Economics Matters" }],
    },
    {
      id: "m2", number: 2, section: "Section 1: Introduction to Economics",
      title: "Operation of an Economy",
      description: "How an economy actually functions — factors of production, factor incomes, the four key questions, and different economic systems.",
      lessons: [],
      lessonPreview: [{ id: "1.2.1", title: "Factors of Production (land, labour, capital, entrepreneurship)" }, { id: "1.2.2", title: "Factor Incomes (rent, wages, interest, profit)" }, { id: "1.2.3", title: "The Four Key Economic Questions" }, { id: "1.2.4", title: "Economic Systems Compared (pre-industrial, planned, free market, mixed)" }, { id: "1.2.5", title: "The Role & Functions of Money" }],
    },
    {
      id: "m3", number: 3, section: "Section 1: Introduction to Economics",
      title: "Economic Model: Production Possibilities",
      description: "The production possibility frontier — building it, shifting it, and reading efficiency and opportunity cost from the curve.",
      lessons: [],
      lessonPreview: [{ id: "1.3.1", title: "Building & Reading the PPF" }, { id: "1.3.2", title: "Shifts of the PPF (growth, decline)" }, { id: "1.3.3", title: "Opportunity Cost on the PPF" }, { id: "1.3.4", title: "Assumptions of the Model" }, { id: "1.3.5", title: "Efficiency: On, Inside & Outside the PPF (underemployment, tech advances)" }, { id: "1.3.6", title: "Consumer vs Capital Goods Trade-offs" }],
    },
    {
      id: "m4", number: 4, section: "Section 1: Introduction to Economics",
      title: "Economic Model: Circular Flow of Income",
      description: "The circular flow of income model — the five sectors, injections and leakages, and equilibrium in the flow of income and spending.",
      lessons: [],
      lessonPreview: [{ id: "1.4.1", title: "The Five Sectors & Their Roles" }, { id: "1.4.2", title: "Injections & Leakages (I, G, X, S, T, M)" }, { id: "1.4.3", title: "Interpreting Circular Flow Diagrams" }, { id: "1.4.4", title: "Equilibrium & Disequilibrium" }, { id: "1.4.5", title: "Effects of Changing Injections/Leakages" }],
    },
    {
      id: "m5", number: 5, section: "Section 1: Introduction to Economics",
      title: "Economic Model: Business Cycle",
      description: "GDP, economic growth, and the business cycle — its stages and how it connects to unemployment and inflation.",
      lessons: [],
      lessonPreview: [{ id: "1.5.1", title: "GDP & Why Economies Pursue Growth" }, { id: "1.5.2", title: "Aboriginal & Torres Strait Islander Business Contributions to GDP" }, { id: "1.5.3", title: "Stages of the Business Cycle (expansion, contraction, peak, trough)" }, { id: "1.5.4", title: "The Business Cycle, Unemployment & Inflation" }, { id: "1.5.5", title: "Causes & Effects of Business Cycle Fluctuations" }],
    },
    {
      id: "m6", number: 6, section: "Section 2: Markets",
      title: "Role of Markets",
      description: "Why markets exist and how the price mechanism signals, incentivises, and rations scarce resources.",
      lessons: [],
      lessonPreview: [{ id: "2.1.1", title: "The Price Mechanism: Signalling, Incentive, Rationing Functions" }, { id: "2.1.2", title: "Self-Interest, Institutions & Property Rights" }, { id: "2.1.3", title: "Factor Markets vs Product Markets" }],
    },
    {
      id: "m7", number: 7, section: "Section 2: Markets",
      title: "Demand",
      description: "Individual and market demand, the law of demand, and the difference between a movement along and a shift of the curve.",
      lessons: [],
      lessonPreview: [{ id: "2.2.1", title: "Individual & Market Demand" }, { id: "2.2.2", title: "The Law of Demand" }, { id: "2.2.3", title: "Movements Along vs Shifts of the Demand Curve" }, { id: "2.2.4", title: "Constructing & Interpreting Demand Graphs" }],
    },
    {
      id: "m8", number: 8, section: "Section 2: Markets",
      title: "Supply",
      description: "Individual and market supply, the law of supply, and movements versus shifts of the supply curve.",
      lessons: [],
      lessonPreview: [{ id: "2.3.1", title: "Individual & Market Supply" }, { id: "2.3.2", title: "The Law of Supply" }, { id: "2.3.3", title: "Movements Along vs Shifts of the Supply Curve" }, { id: "2.3.4", title: "Constructing & Interpreting Supply Graphs" }],
    },
    {
      id: "m9", number: 9, section: "Section 2: Markets",
      title: "Market Equilibrium",
      description: "How equilibrium price and quantity are set, and what happens to the market when conditions change.",
      lessons: [],
      lessonPreview: [{ id: "2.4.1", title: "How Equilibrium Price & Quantity Are Set" }, { id: "2.4.2", title: "Graphing Changes to Equilibrium" }, { id: "2.4.3", title: "Market Equilibrium & Efficiency" }],
    },
    {
      id: "m10", number: 10, section: "Section 2: Markets",
      title: "Price Elasticity of Demand",
      description: "Price elasticity of demand — degrees, reading it off a graph, calculating it, and why it matters for pricing decisions.",
      lessons: [],
      lessonPreview: [{ id: "2.5.1", title: "Degrees of PED" }, { id: "2.5.2", title: "Reading PED on Demand Graphs" }, { id: "2.5.3", title: "Calculating PED (Percentage Method)" }, { id: "2.5.4", title: "Factors Affecting PED" }, { id: "2.5.5", title: "Why PED Matters for Business Pricing" }],
    },
    {
      id: "m11", number: 11, section: "Section 2: Markets",
      title: "Price Elasticity of Supply",
      description: "Price elasticity of supply — degrees, graphing it, and the factors that make supply more or less responsive to price.",
      lessons: [],
      lessonPreview: [{ id: "2.6.1", title: "Degrees of PES" }, { id: "2.6.2", title: "Reading PES on Supply Graphs" }, { id: "2.6.3", title: "Factors Affecting PES" }, { id: "2.6.4", title: "Why PES Matters for Business" }],
    },
    {
      id: "m12", number: 12, section: "Section 2: Markets",
      title: "Market Structures & Competition",
      description: "Market structures from perfect competition to monopoly, market concentration, and competition in digital platforms.",
      lessons: [],
      lessonPreview: [{ id: "2.7.1", title: "The Role & Degrees of Competition" }, { id: "2.7.2", title: "Perfect Competition & Monopolistic Competition" }, { id: "2.7.3", title: "Oligopolies & Monopolies" }, { id: "2.7.4", title: "Market Concentration & Its Effects" }, { id: "2.7.5", title: "Digital Platforms: First-Mover Advantage & Network Effects" }],
    },
    {
      id: "m13", number: 13, section: "Section 2: Markets",
      title: "Market Failure",
      description: "Where the price mechanism breaks down — externalities, public goods, market power abuse, asymmetric information, and inequality.",
      lessons: [],
      lessonPreview: [{ id: "2.8.1", title: "Limitations of the Price Mechanism" }, { id: "2.8.2", title: "Aboriginal & Torres Strait Islander Businesses: Barriers to Capital & Markets" }, { id: "2.8.3", title: "Externalities: Positive & Negative (private/social costs & benefits)" }, { id: "2.8.4", title: "Graphing Externalities" }, { id: "2.8.5", title: "Public Goods & the Free Rider Problem" }, { id: "2.8.6", title: "Market Power Abuse: Predatory Pricing & Collusion" }, { id: "2.8.7", title: "Asymmetric Information & Adverse Selection" }, { id: "2.8.8", title: "Income & Wealth Inequality as Market Failure" }],
    },
    {
      id: "m14", number: 14, section: "Section 2: Markets",
      title: "Government Intervention in Market Failure",
      description: "How governments respond to market failure — taxes, subsidies, regulation, price controls, nudges, and the limits of intervention.",
      lessons: [],
      lessonPreview: [{ id: "2.9.1", title: "Rationale for Intervention" }, { id: "2.9.2", title: "Taxes, Subsidies & Direct Provision" }, { id: "2.9.3", title: "Regulations, Price Controls & Quantity Controls" }, { id: "2.9.4", title: "Graphing Taxes & Price Controls" }, { id: "2.9.5", title: "Nudges as a Policy Tool" }, { id: "2.9.6", title: "Limitations of Government Intervention" }, { id: "2.9.7", title: "Government Failure & Rent-Seeking" }],
    },
    {
      id: "m15", number: 15, section: "Section 3: Household and Business Sector",
      title: "Households: Consumption",
      description: "Households as consumers — utility maximisation, marginal utility, consumption and saving decisions, and different types of goods.",
      lessons: [],
      lessonPreview: [{ id: "3.1.1", title: "The Role of Households & Utility Maximisation" }, { id: "3.1.2", title: "Diminishing Marginal Utility" }, { id: "3.1.3", title: "Consumers as Social & Ethical Agents" }, { id: "3.1.4", title: "Consumption, Savings & Income (MPC, MPS)" }, { id: "3.1.5", title: "Calculating the Marginal Propensity to Consume" }, { id: "3.1.6", title: "Dissaving & the Paradox of Thrift" }, { id: "3.1.7", title: "Consumer Sovereignty & Sludges" }, { id: "3.1.8", title: "Normal, Inferior & Veblen Goods" }, { id: "3.1.9", title: "Consumption, Income & Wellbeing" }],
    },
    {
      id: "m16", number: 16, section: "Section 3: Household and Business Sector",
      title: "Households: Provision of Labour",
      description: "What determines how much labour households are willing to supply, and what discourages workforce participation.",
      lessons: [],
      lessonPreview: [{ id: "3.2.1", title: "Factors Affecting Labour Supply" }, { id: "3.2.2", title: "Disincentives to Workforce Participation" }],
    },
    {
      id: "m17", number: 17, section: "Section 3: Household and Business Sector",
      title: "Businesses: Production",
      description: "Businesses as producers — profit maximisation, classifying businesses, and what drives productivity and living standards.",
      lessons: [],
      lessonPreview: [{ id: "3.3.1", title: "The Role of Businesses & Profit Maximisation" }, { id: "3.3.2", title: "Economic Profit vs Accounting Profit" }, { id: "3.3.3", title: "Classifying Businesses (public/private enterprises, industries)" }, { id: "3.3.4", title: "Production, Productivity & Living Standards" }, { id: "3.3.5", title: "Factors Affecting Business Productivity" }, { id: "3.3.6", title: "Reading Long-Run Average Cost (LRAC) Curves" }],
    },
    {
      id: "m18", number: 18, section: "Section 3: Household and Business Sector",
      title: "Businesses: Provision of Income",
      description: "How businesses provide income to households through wages, and the debate over how equitably that income is distributed.",
      lessons: [],
      lessonPreview: [{ id: "3.4.1", title: "Wages, Non-Wage Benefits & the Minimum Wage" }, { id: "3.4.2", title: "Equity of Income Distribution: Arguments For & Against" }, { id: "3.4.3", title: "Factors Affecting Demand for Labour (incl. AI & Automation)" }],
    },
    {
      id: "m19", number: 19, section: "Section 4: Financial Sector",
      title: "Role of the Financial Sector",
      description: "The role the financial sector plays in channelling savings into investment, and the institutions that make that happen.",
      lessons: [],
      lessonPreview: [{ id: "4.1.1", title: "Facilitating Savings & Investment" }, { id: "4.1.2", title: "Types of Financial Intermediaries" }, { id: "4.1.3", title: "Superannuation in the Australian Economy" }],
    },
    {
      id: "m20", number: 20, section: "Section 4: Financial Sector",
      title: "Equity Markets",
      description: "How equity (share) markets work, and the difference between primary and secondary trading.",
      lessons: [],
      lessonPreview: [{ id: "4.2.1", title: "Characteristics of Equity Markets" }, { id: "4.2.2", title: "Primary vs Secondary Share Markets" }],
    },
    {
      id: "m21", number: 21, section: "Section 4: Financial Sector",
      title: "Debt Markets & Interest Rates",
      description: "Debt markets, bond trading, and how interest rates are set by the supply and demand for loanable funds.",
      lessons: [],
      lessonPreview: [{ id: "4.3.1", title: "Characteristics of Debt Markets" }, { id: "4.3.2", title: "Primary vs Secondary Bond Markets" }, { id: "4.3.3", title: "The Role of Interest Rates" }, { id: "4.3.4", title: "Factors Affecting Demand for Funds" }, { id: "4.3.5", title: "Factors Affecting Supply of Funds" }, { id: "4.3.6", title: "Reading a Loanable Funds Graph" }, { id: "4.3.7", title: "Interest Rates & Housing Affordability" }],
    },
    {
      id: "m22", number: 22, section: "Section 5: Government Sector",
      title: "Role of Government",
      description: "What governments do in an economy — redistribution, stabilisation, correcting market failure, and the federal budget.",
      lessons: [],
      lessonPreview: [{ id: "5.1.1", title: "Redistribution, Reallocation, Stabilisation & Correction of Market Failure" }, { id: "5.1.2", title: "Aboriginal & Torres Strait Islander Advisory Bodies" }, { id: "5.1.3", title: "Government as a Welfare-Maximising Agent" }, { id: "5.1.4", title: "The Federal Budget & Tax-Transfer System" }, { id: "5.1.5", title: "Regulation as an Economic Tool" }, { id: "5.1.6", title: "Government Nudges & Incentives" }, { id: "5.1.7", title: "Privatisation vs Nationalisation" }],
    },
    {
      id: "m23", number: 23, section: "Section 5: Government Sector",
      title: "Taxation",
      description: "Why governments tax, where revenue comes from, the different tax bases and types, and what makes a tax 'good'.",
      lessons: [],
      lessonPreview: [{ id: "5.2.1", title: "Purposes of Taxation" }, { id: "5.2.2", title: "Major Sources of Government Revenue" }, { id: "5.2.3", title: "The Tax Base: Income, Wealth & Consumption" }, { id: "5.2.4", title: "Types of Taxation" }, { id: "5.2.5", title: "Direct vs Indirect Tax & Incidence" }, { id: "5.2.6", title: "Features of a Good Tax" }, { id: "5.2.7", title: "Rationale for Tax Reform" }],
    },
    {
      id: "m24", number: 24, section: "Section 5: Government Sector",
      title: "Government Spending",
      description: "How government spending is categorised, where it goes, and the case for reforming it.",
      lessons: [],
      lessonPreview: [{ id: "5.3.1", title: "Recurrent vs Non-Recurrent Spending" }, { id: "5.3.2", title: "Major Areas of Government Expenditure" }, { id: "5.3.3", title: "Rationale for Spending Reform" }],
    },
    {
      id: "m25", number: 25, section: "Section 6: International Sector",
      title: "International Trade",
      description: "Why countries trade, Australia's trade patterns, and the difference between a trade surplus and a trade deficit.",
      lessons: [],
      lessonPreview: [{ id: "6.1.1", title: "Basis of International Trade (voluntary exchange, efficient allocation)" }, { id: "6.1.2", title: "Australia's Trade: Value, Direction & Composition" }, { id: "6.1.3", title: "Aboriginal & Torres Strait Islander Trade History" }, { id: "6.1.4", title: "Trade Outcomes: Balanced, Surplus & Deficit" }],
    },
    {
      id: "m26", number: 26, section: "Section 6: International Sector",
      title: "International Investment",
      description: "Foreign debt and foreign equity, and Australia's position as an international investor and borrower.",
      lessons: [],
      lessonPreview: [{ id: "6.2.1", title: "Foreign Debt & Foreign Equity" }, { id: "6.2.2", title: "Australia's International Investment" }],
    },
    {
      id: "m27", number: 27, section: "Section 6: International Sector",
      title: "Exchange Rates",
      description: "What exchange rates are, what moves them, and how the Australian dollar is measured against other currencies.",
      lessons: [],
      lessonPreview: [{ id: "6.3.1", title: "The Role of Exchange Rates" }, { id: "6.3.2", title: "Measuring the AUD: Bilateral Exchange Rates" }],
    },
    {
      id: "m28", number: 28, section: "Section 6: International Sector",
      title: "Balance of Payments",
      description: "What the balance of payments records and why it matters for understanding a country's international transactions.",
      lessons: [],
      lessonPreview: [{ id: "6.4.1", title: "Purpose of the Balance of Payments" }],
    },
  ],
};
