window.CURRICULUM = {
  ui: {
    coreConcepts: "At a glance",
    plainLanguage: "Start here (plain language)",
    plainWhat: "What is this?",
    plainWhy: "Why does it matter?",
    plainExample: "A concrete example",
    plainRemember: "One thing to remember",
    readingGuide: "How this chapter is organised",
    readingGuideText:
      "1) Start here · 2) From zero (1–4) · 3) Lessons 1–6 · 4) Core subject guide · 5) Tutorials & theory · 6) Glossary",
    onThisPage: "On this page",
    goingDeeper: "Going deeper (academic level)",
    downloadPdf: "Download full book (PDF)",
    generatingPdf: "Building PDF…",
    pdfError:
      "PDF export failed. Check your internet connection (the PDF library loads from CDN) and try again. You can also use the browser Print dialog on any page.",
    pdfCoverNote:
      "Auto-generated from the live textbook content in didaktisk-lærebog. Verify module details on moduler.aau.dk before exams.",
    curriculumLinks: "How it fits the programme",
    references: "Further reading",
    footerNote:
      "Extend theory and examples in <code>didaktisk-lærebog/js/content/</code>. Module metadata in <code>curriculum.js</code>. Verify against moduler.aau.dk before exams.",
    semesterOverview: "Semesters 1–4 (Cand.it.)",
    thematicTracks: "Thematic tracks",
    officialSources: "Official sources",
  },

    program: {
    title: "Study textbook",
    subtitle: "Cand.it. Digitalisering og applikationsudvikling · AAU",
    description:
      "Companion textbook for semesters 1–4: IT, computer science, software engineering, mathematics, and app development. Aligned with moduler.aau.dk, with plain-language explanations, theory, worked examples, and academic references.",
    links: [
      {
        label: "Programme page (AAU)",
        url: "https://www.aau.dk/uddannelser/kandidat/digitalisering-og-applikationsudvikling",
      },
      {
        label: "Curriculum 2022 (2026)",
        url: "https://studieordninger.aau.dk/2026/59/6408",
      },
      {
        label: "moduler.aau.dk",
        url: "https://moduler.aau.dk/",
      },
    ],
  },

  chapters: [
    {
      id: "overview",
      group: "Start",
      title: "Overview",
      code: null,
      ects: null,
      type: "Cand.it. · 120 ECTS",
      summary:
        "Your roadmap for the degree. In plain terms: two years of learning to design, build, and evaluate apps and systems, mostly by doing group projects rather than only reading textbooks.",
      concepts: [
        "Programming and computational thinking from day one",
        "Software engineering, system design, and databases",
        "HCI: user interfaces and usability",
        "Agile development, teams, and quality assurance",
        "Master's thesis: research + application development",
      ],
      connections:
        "The programme builds in layers: foundational code (sem. 1) → OOP, UML, and HCI (sem. 2) → architecture, databases, and process (sem. 3) → independent thesis (sem. 4).",
      refs: [
        { label: "AAU: Digitalisering og applikationsudvikling", url: "https://www.aau.dk/uddannelser/kandidat/digitalisering-og-applikationsudvikling" },
        { label: "Curriculum (studieordning 2022)", url: "https://studieordninger.aau.dk/2026/59/6408" },
        { label: "IEEE SWEBOK Guide", url: "https://www.computer.org/education/bodies-of-knowledge/software-engineering" },
        { label: "ACM/IEEE Computing Curricula (CC2020)", url: "https://www.acm.org/binaries/content/assets/education/curricula-recommendations/cc2020.pdf" },
        { label: "MIT 6.042J Mathematics for Computer Science", url: "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/" },
        { label: "Rosen: Discrete Mathematics and Its Applications", url: "https://www.mheducation.com/highered/product/discrete-mathematics-applications-rosen/9781259676512.html" },
      ],
    },

    {
      id: "dsnidak121",
      group: "Semester 1",
      title: "Computational Thinking",
      code: "DSNIDAK121",
      ects: 10,
      type: "Project · pass/fail",
      summary:
        "Learn to think in steps before you code. You break problems apart, spot patterns, simplify what matters, and often build a small simulation where simple rules create surprising group behaviour.",
      concepts: [
        "Agent-based models and emergent patterns",
        "Data representation: graphs, states, parameters",
        "Simulation algorithms and sensitivity analysis",
        "Abstraction: what the model includes and deliberately ignores",
        "Oral exam on the project and its assumptions",
      ],
      connections:
        "Foundation for all later software work: problems are broken into testable units. Tied to Udvikling af software (same semester) and Grundlæggende programmering (implementing models in code).",
      refs: [
        { label: "Module DSNIDAK121 (AAU)", url: "https://moduler.aau.dk/course/2025-2026/DSNIDAK121?lang=en-GB" },
        { label: "Wing (2006): Computational Thinking", url: "https://www.cs.cmu.edu/~15110-s13/Wing06-public.pdf" },
        { label: "Denning: Great Principles of Computing", url: "https://dl.acm.org/doi/10.1145/948383.948400" },
        { label: "Railsback & Grimm: Agent-Based Modeling", url: "https://press.princeton.edu/books/paperback/9780691136745/agent-based-and-individual-based-modeling" },
        { label: "Schelling (1971): Dynamic Models of Segregation", url: "https://doi.org/10.1086/257397" },
        { label: "NetLogo (Wilensky)", url: "https://ccl.northwestern.edu/netlogo/" },
      ],
    },
    {
      id: "dsnidak122",
      group: "Semester 1",
      title: "Udvikling af software",
      code: "DSNIDAK122",
      ects: 10,
      type: "Project · 7-step scale",
      summary:
        "Your first major build: create software that actually works, document how you made it, and demo it at exam. Think of it as proving you can go from idea to running program.",
      concepts: [
        "Requirements → design → code → test → demo",
        "Functional vs. non-functional requirements",
        "MVP and scope control",
        "Traceability: requirement → code → test",
        "PBL reflection on process and teamwork",
      ],
      connections:
        "Runs in parallel with Computational Thinking, often the same group and theme. Uses syntax and techniques from Grundlæggende programmering.",
      refs: [
        { label: "Module DSNIDAK122 (AAU)", url: "https://moduler.aau.dk/course/2025-2026/DSNIDAK122?lang=en-GB" },
        { label: "Sommerville: Software Engineering (Pearson)", url: "https://www.pearson.com/en-us/subject-catalog/p/software-engineering/P200000003380" },
        { label: "ISO/IEC/IEEE 12207 (software lifecycle)", url: "https://www.iso.org/standard/63712.html" },
        { label: "ISO/IEC 25010 (quality model)", url: "https://www.iso.org/standard/35733.html" },
        { label: "Pressman & Maxim: Software Engineering", url: "https://www.mheducation.com/college/product/software-engineering-a-practitioner-s-approach/9781260548006.html" },
      ],
    },
    {
      id: "dsnidak123",
      group: "Semester 1",
      title: "Information og organisering",
      code: "DSNIDAK123",
      ects: 5,
      type: "Course · 7-step scale",
      summary:
        "Why companies buy IT and why projects fail anyway. You learn how payroll systems, CRM, ERP, and the like fit into organisations, and why people sometimes ignore good software.",
      concepts: [
        "IS types: TPS, MIS, DSS, ERP, CRM",
        "Socio-technical system: people, processes, technology",
        "Implementation, governance, and change management",
        "System value: efficiency, quality, integration",
        "Stakeholder and fit analysis for IT choices",
      ],
      connections:
        "Context for why software must fit the organisation and users. Leads into HCI (sem. 2) and agile processes (sem. 3).",
      refs: [
        { label: "Module DSNIDAK123 (AAU)", url: "https://moduler.aau.dk/course/2025-2026/DSNIDAK123?lang=en-GB" },
        { label: "Laudon & Laudon: Management Information Systems", url: "https://www.pearson.com/en-us/subject-catalog/p/management-information-systems/P200000003380" },
        { label: "Bostrom & Heinen: Socio-technical perspective", url: "https://dl.acm.org/doi/10.1145/358790.358791" },
        { label: "Porter: Competitive Advantage (value chain)", url: "https://www.hbs.edu/faculty/Pages/item.aspx?num=193" },
        { label: "Davis (1989): Technology Acceptance Model", url: "https://doi.org/10.1287/mnsc.35.8.982" },
      ],
    },
    {
      id: "dsnidak124",
      group: "Semester 1",
      title: "Grundlæggende programmering",
      code: "DSNIDAK124",
      ects: 5,
      type: "Course · 7-step scale · taught in English",
      summary:
        "Learn to program from scratch: variables, loops, functions, and a simple website. No prior coding assumed; this is where the computer stops being a black box.",
      concepts: [
        "Types, scope, and the execution model",
        "Debugging: reproduce, isolate, fix",
        "Functions, collections, and edge cases",
        "Web: DOM, events, client-side logic",
        "Basic security (injection, XSS) and unit tests",
      ],
      connections:
        "Core skill for the rest of the degree. Used directly in both semester-1 projects; leads to OOP (sem. 2) and database integration (sem. 3).",
      refs: [
        { label: "Module DSNIDAK124 (AAU)", url: "https://moduler.aau.dk/course/2025-2026/DSNIDAK124?lang=en-GB" },
        { label: "MDN Web Docs", url: "https://developer.mozilla.org/" },
        { label: "Abelson & Sussman: SICP (MIT Press)", url: "https://mitpress.mit.edu/9780262510875/structure-and-interpretation-of-computer-programs/" },
        { label: "Sedgewick & Wayne: Algorithms (Princeton)", url: "https://algs4.cs.princeton.edu/" },
        { label: "OWASP Top Ten", url: "https://owasp.org/www-project-top-ten/" },
        { label: "Knuth: Big-O (Art of Computer Programming)", url: "https://www-cs-faculty.stanford.edu/~knuth/taocp.html" },
      ],
    },

    {
      id: "dsndadk221",
      group: "Semester 2",
      title: "Udvikling af et interaktivt design",
      code: "DSNDADK221",
      ects: 15,
      type: "Project · external examination",
      summary:
        "The big semester 2 project: build something people can click through and use. You combine coding, design, and user testing in one product your group can show to external examiners.",
      concepts: [
        "End-to-end interactive system",
        "User research, prototyping, iteration",
        "Implementation + usability evaluation",
        "Report, demo, and external examination",
        "Integration of courses from semesters 1 and 2",
      ],
      connections:
        "Brings together Design og evaluering af brugergrænseflader (DSNIDAK223), Grundlæggende objektorienteret programmering (DSNIDAK224), and Systemudvikling (DSNIDAK222): a prototype for the semester-3 project.",
      refs: [
        { label: "Module DSNDADK221 (AAU)", url: "https://moduler.aau.dk/course/2025-2026/DSNDADK221?lang=en-GB" },
        { label: "ISO 9241-210: Human-centred design", url: "https://www.iso.org/standard/77520.html" },
        { label: "Cooper et al.: About Face (interaction design)", url: "https://www.oreilly.com/library/view/about-face-4th/9781491911962/" },
      ],
    },
    {
      id: "dsnidak224",
      group: "Semester 2",
      title: "Grundlæggende objektorienteret programmering",
      code: "DSNIDAK224",
      ects: 5,
      type: "Course · 7-step scale",
      summary:
        "Organise code like real software: objects with data and behaviour, plus simple windows and buttons. If basic programming is sentences, OOP is paragraphs with structure.",
      concepts: [
        "Class, object, attribute, method",
        "Encapsulation and public interface",
        "Inheritance and polymorphism",
        "GUI events and model/view separation",
        "Testing business logic independently of the UI",
      ],
      connections:
        "Builds on Grundlæggende programmering. UML classes from Systemudvikling become real code here. The MVC pattern reappears in web and larger projects.",
      refs: [
        { label: "Module DSNIDAK224 (AAU)", url: "https://moduler.aau.dk/course/2025-2026/DSNIDAK224?lang=en-GB" },
        { label: "Bloch: Effective Java", url: "https://www.oracle.com/java/technologies/effective-java.html" },
        { label: "Meyer: Object-Oriented Software Construction", url: "https://se.inf.ethz.ch/~meyer/publications/" },
        { label: "Liskov & Wing: Behavioral subtyping", url: "https://dl.acm.org/doi/10.1145/197093.197114" },
      ],
    },
    {
      id: "dsnidak223",
      group: "Semester 2",
      title: "Design og evaluering af brugergrænseflader",
      code: "DSNIDAK223",
      ects: 5,
      type: "Course · 7-step scale",
      summary:
        "Make interfaces people can actually use. You learn to ask users what they need, sketch screens, test whether tasks work, and fix what confuses them.",
      concepts: [
        "UCD, contextual design, participatory design",
        "Interviews, observation, personas, task analysis",
        "Wireframes, prototyping, usability tests",
        "Nielsen heuristics, gestalt principles, visual hierarchy",
        "SUS and measuring user experience",
      ],
      connections:
        "Methods applied directly in the semester project (DSNDADK221). Prepares the AI/HCI elective (sem. 3) and empirical work in the thesis.",
      refs: [
        { label: "Module DSNIDAK223 (AAU)", url: "https://moduler.aau.dk/course/2025-2026/DSNIDAK223?lang=en-GB" },
        { label: "Dix et al.: Human-Computer Interaction (hcibook.com)", url: "https://www.hcibook.com/" },
        { label: "Norman: The Design of Everyday Things", url: "https://jnd.org/books/" },
        { label: "Nielsen: 10 usability heuristics", url: "https://www.nngroup.com/articles/ten-usability-heuristics/" },
        { label: "Brooke: System Usability Scale (SUS)", url: "https://doi.org/10.1080/01449298908924282" },
        { label: "ISO 9241-11: Usability definitions", url: "https://www.iso.org/standard/63500.html" },
      ],
    },
    {
      id: "dsnidak222",
      group: "Semester 2",
      title: "Systemudvikling",
      code: "DSNIDAK222",
      ects: 5,
      type: "Course · 7-step scale",
      summary:
        "Plan before you code: diagrams that show who does what in the system and how code pieces connect. Shared drawings so your group agrees before anyone writes a class.",
      concepts: [
        "Application vs. problem domain",
        "UML: class, sequence, state, and use case diagrams",
        "Design patterns and SOLID (intro)",
        "Component architecture",
        "Communication between developers and domain experts",
      ],
      connections:
        "Bridge from idea to code: diagrams here are implemented in OOP and the semester project. Reused for larger architecture in sem. 3.",
      refs: [
        { label: "Module DSNIDAK222 (AAU)", url: "https://moduler.aau.dk/course/2025-2026/DSNIDAK222?lang=en-GB" },
        { label: "Gamma et al.: Design Patterns (GoF)", url: "https://www.pearson.com/en-us/subject-catalog/p/design-patterns/P200000003380" },
        { label: "Larman: Applying UML and Patterns", url: "https://www.pearson.com/en-us/subject-catalog/p/applying-uml-and-patterns/P200000003380" },
        { label: "Fowler: UML Distilled", url: "https://martinfowler.com/books/uml.html" },
        { label: "GRASP principles (Larman)", url: "https://en.wikipedia.org/wiki/GRASP_(object-oriented_design)" },
      ],
    },

    {
      id: "dsndadk311",
      group: "Semester 3",
      title: "Udvikling af interaktive systemer",
      code: "DSNDADK311",
      ects: 15,
      type: "Project · external examination (track A)",
      summary:
        "Semester 3 build track: a larger app with frontend, backend, and database that still feels good to use. Closer to what a small startup or dev team would ship.",
      concepts: [
        "Full-stack or client–server architecture",
        "Database, backend, and frontend integration",
        "Team process and code review",
        "Deployment and demo under pressure",
        "System-level quality assurance",
      ],
      connections:
        "Requires Databaseudvikling, Agil Software Engineering, and everything from sem. 1–2. Alternative track B: Teoretisk undersøgelse af interaktive systemer (DSNDADK321).",
      refs: [
        { label: "Module DSNDADK311 (AAU)", url: "https://moduler.aau.dk/course/2025-2026/DSNDADK311?lang=en-GB" },
        { label: "Bass et al.: Software Architecture in Practice", url: "https://www.sei.cmu.edu/our-work/software-architecture/" },
        { label: "Fielding: REST architectural style", url: "https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm" },
        { label: "C4 model for architecture docs", url: "https://c4model.com/" },
        { label: "OWASP Application Security", url: "https://owasp.org/www-project-application-security-verification-standard/" },
      ],
    },
    {
      id: "dsndadk321",
      group: "Semester 3",
      title: "Teoretisk undersøgelse af interaktive systemer",
      code: "DSNDADK321",
      ects: 15,
      type: "Project · external examination (track B)",
      summary:
        "Semester 3 research track: study how interactive systems work in the real world using literature and empirical methods, rather than mainly building a product.",
      concepts: [
        "Research question and literature review",
        "Empirical methods (qualitative/quantitative)",
        "Analysis of interactive systems in context",
        "Argumentation and validity",
        "Less product delivery, more knowledge contribution",
      ],
      connections:
        "Prepares method and writing for Kandidatspeciale (sem. 4). Choose between this and Udvikling af interaktive systemer (theory vs. development).",
      refs: [
        { label: "Module DSNDADK321 (AAU)", url: "https://moduler.aau.dk/course/2025-2026/DSNDADK321?lang=en-GB" },
        { label: "Creswell: Research Design (mixed methods)", url: "https://us.sagepub.com/en-us/nam/research-design-qualitative-quantitative-and-mixed-methods-approaches/book270296" },
        { label: "Braun & Clarke: Thematic Analysis", url: "https://doi.org/10.1016/j.ijer.2006.09.003" },
        { label: "Shneiderman et al.: Research methods in HCI", url: "https://www.hcibook.com/" },
      ],
    },
    {
      id: "dsnidak312",
      group: "Semester 3",
      title: "Agil Software Engineering",
      code: "DSNIDAK312",
      ects: 5,
      type: "Course · external examination",
      summary:
        "How professional teams ship software: sprints, user stories, testing, and retrospectives. Less about syntax, more about not drowning in chaos when several people code together.",
      concepts: [
        "Agile Manifesto, user stories, sprints, backlog",
        "Definition of Done, retrospective",
        "Requirements management and handling change",
        "Test pyramid: unit, integration, acceptance",
        "Process improvement and team dynamics",
      ],
      connections:
        "Processes used in the semester-3 project and later in industry. Complements technical skills from databases and programming.",
      refs: [
        { label: "Module DSNIDAK312 (AAU)", url: "https://moduler.aau.dk/course/2025-2026/DSNIDAK312?lang=en-GB" },
        { label: "Agile Manifesto", url: "https://agilemanifesto.org/" },
        { label: "Scrum Guide", url: "https://scrumguides.org/" },
        { label: "Beck: Extreme Programming Explained", url: "https://www.pearson.com/en-us/subject-catalog/p/extreme-programming-explained/P200000003380" },
        { label: "Martin: Clean Code", url: "https://www.pearson.com/en-us/subject-catalog/p/clean-code/P200000003380" },
        { label: "Myers et al.: The Art of Software Testing", url: "https://www.wiley.com/en-us/The+Art+of+Software+Testing%2C+3rd+Edition-p-9781118031964" },
      ],
    },
    {
      id: "dsnidak314",
      group: "Semester 3",
      title: "Databaseudvikling",
      code: "DSNIDAK314",
      ects: 5,
      type: "Course · pass/fail",
      summary:
        "How apps remember data: tables, SQL queries, and rules so information stays correct when many users save things at once.",
      concepts: [
        "Primary/foreign keys, joins, aggregation",
        "Normalisation and data integrity",
        "DDL, DML, SELECT, WHERE, JOIN, GROUP BY",
        "Transactions and ACID",
        "Database access from applications (ORM/API)",
      ],
      connections:
        "Persistent layer in the semester-3 project and thesis. Builds on data structures from programming; parallels system architecture.",
      refs: [
        { label: "Module DSNIDAK314 (AAU)", url: "https://moduler.aau.dk/course/2025-2026/DSNIDAK314?lang=en-GB" },
        { label: "Elmasri & Navathe: Database Systems", url: "https://www.pearson.com/en-us/subject-catalog/p/fundamentals-of-database-systems/P200000003380" },
        { label: "Codd (1970): Relational model", url: "https://doi.org/10.1145/362384.362685" },
        { label: "PostgreSQL documentation", url: "https://www.postgresql.org/docs/" },
        { label: "Use The Index, Luke (SQL performance)", url: "https://use-the-index-luke.com/" },
      ],
    },
    {
      id: "valgfag",
      group: "Semester 3",
      title: "Valgfag",
      code: "DSNDADFK311 / DSNDADFK333",
      ects: 5,
      type: "Elective (choose one)",
      summary:
        "Pick one 5 ECTS elective: entrepreneurship (business models, startups) or human-centred AI (trust, explainability, design when machines make suggestions).",
      concepts: [
        "Entrepreneurship: value proposition, canvas, go-to-market",
        "AI + HCI: explainability, transparency",
        "Human-in-the-loop and user-centred AI design",
        "Ethics and responsible AI (intro)",
        "Product vs. technology focus",
      ],
      connections:
        "The AI elective extends HCI skills toward modern systems. Entreprenørskab adds product and business to a technical profile.",
      refs: [
        { label: "Curriculum: electives (studieordning)", url: "https://studieordninger.aau.dk/2026/59/6408" },
        { label: "Osterwalder: Business Model Generation", url: "https://www.strategyzer.com/library/the-business-model-canvas" },
        { label: "Ries: The Lean Startup", url: "https://theleanstartup.com/" },
        { label: "EU AI Act (Regulation)", url: "https://artificialintelligenceact.eu/" },
        { label: "Amershi et al.: Guidelines for Human-AI Interaction", url: "https://doi.org/10.1145/3351095.3372873" },
      ],
    },

    {
      id: "dsnidafk412",
      group: "Semester 4",
      title: "Kandidatspeciale",
      code: "DSNIDAFK412",
      ects: 30,
      type: "Thesis · external examination",
      summary:
        "Your master's thesis: one semester where you pick your own question, read research, do empirical or development work, write it up, and defend it orally.",
      concepts: [
        "Problem formulation and research gap",
        "Literature review and method choice",
        "Empirics: qualitative, quantitative, or mixed methods",
        "System design/development as part of the contribution",
        "Ethics, validity, communication, and defence",
      ],
      connections:
        "Integrates the full programme: programming, design, method, and engineering. Builds on the semester-3 project (development or theory track).",
      refs: [
        { label: "Module DSNIDAFK412 (AAU)", url: "https://moduler.aau.dk/course/2025-2026/DSNIDAFK412?lang=en-GB" },
        { label: "AAU: Writing the thesis", url: "https://www.studieguide.aau.dk/" },
        { label: "Booth et al.: Craft of Research", url: "https://www.press.uchicago.edu/ucp/books/book/chicago/C/bo19000768.html" },
        { label: "Wieringa: Design Science Methodology", url: "https://doi.org/10.1007/978-3-662-43839-8" },
        { label: "GDPR (EU Regulation 2016/679)", url: "https://gdpr-info.eu/" },
      ],
    },
  ],
};
