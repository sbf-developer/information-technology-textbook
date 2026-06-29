/**
 * Annotated further reading: why each source matters and how to use it.
 * Patches chapter.refs after curriculum.js loads.
 */
(function () {
  const NOTES = {
    "AAU: Digitalisering og applikationsudvikling":
      "Official programme page: admission, structure, and links to the studieordning. Start here to confirm module names and ECTS.",
    "Curriculum (studieordning 2022)":
      "Legal document listing every module, exam form, and elective options. Use it when you need the authoritative Danish module title or pass/fail rules.",
    "IEEE SWEBOK Guide":
      "Software Engineering Body of Knowledge: a map of SE topics (requirements, design, testing, maintenance). Useful vocabulary when writing reports or comparing your project to industry practice.",
    "ACM/IEEE Computing Curricula (CC2020)":
      "How universities worldwide structure CS/IT degrees. Helps you see where AAU modules sit relative to computer science, software engineering, and information systems.",
    "MIT 6.042J Mathematics for Computer Science":
      "Free MIT course on proofs, graphs, probability, and structures underlying CS. Use alongside the overview chapter's logic and Big-O section.",
    "Rosen: Discrete Mathematics and Its Applications":
      "Standard discrete maths text: sets, logic, relations, combinatorics. Reference when database keys or algorithm analysis feel mysterious.",

    "Module DSNIDAK121 (AAU)":
      "Learning objectives, exam type, and project expectations for Computational Thinking. Align your simulation report with what examiners assess.",
    "Wing (2006): Computational Thinking":
      "Foundational paper defining computational thinking as reformulating problems so a computer (or human with rules) can help solve them. Read for the four pillars: decomposition, pattern recognition, abstraction, algorithms.",
    "Denning: Great Principles of Computing":
      "Places CT in a broader CS tradition (computation, communication, coordination). Good for oral exam when you must explain why CT is not just programming.",
    "Railsback & Grimm: Agent-Based Modeling":
      "Standard textbook for ODD (Overview, Design concepts, Details) documentation of simulations. Match your project report structure to their checklist.",
    "Schelling (1971): Dynamic Models of Segregation":
      "Classic minimal model: simple local rules produce macro segregation. Read the idea, not every proof, to understand emergent behaviour in your own model.",
    "NetLogo (Wilensky)":
      "Free agent-based modelling environment used in many CT courses. Run bundled models to see how parameters change outcomes before building your own.",

    "Module DSNIDAK122 (AAU)":
      "Project brief and assessment criteria for your first major software deliverable. Check what counts as MVP and how traceability is graded.",
    "Sommerville: Software Engineering (Pearson)":
      "Mainstream SE textbook: lifecycle, requirements, architecture, testing. Chapters on requirements engineering and quality match this module directly.",
    "ISO/IEC/IEEE 12207 (software lifecycle)":
      "International standard naming phases from concept to retirement. Use it to label your process in the report (even if your team is agile in practice).",
    "ISO/IEC 25010 (quality model)":
      "Defines quality characteristics (functional suitability, reliability, usability, etc.). Helps you write non-functional requirements with precise terms.",
    "Pressman & Maxim: Software Engineering":
      "Practitioner-oriented alternative to Sommerville; strong on testing and project management examples.",

    "Module DSNIDAK123 (AAU)":
      "Course plan for Information og organisering: which IS types and cases the exam emphasises.",
    "Laudon & Laudon: Management Information Systems":
      "Standard MIS text: ERP, CRM, supply chain, and digital strategy in organisations. Read the chapter matching your assignment case.",
    "Bostrom & Heinen: Socio-technical perspective":
      "Seminal argument that IT success depends on people and processes, not technology alone. Core theory for explaining implementation failure.",
    "Porter: Competitive Advantage (value chain)":
      "Value chain analysis links IT investment to business activities. Use when arguing why an organisation adopts a system.",
    "Davis (1989): Technology Acceptance Model":
      "TAM: perceived usefulness and ease of use predict adoption. Cite when discussing why users accept or reject a system.",

    "Module DSNIDAK124 (AAU)":
      "Syllabus for Grundlæggende programmering: language choice, assignment topics, and exam format (often written + code).",
    "MDN Web Docs":
      "Authoritative, free reference for HTML, CSS, JavaScript, and web APIs. Prefer this over random blog posts when learning DOM and fetch.",
    "Abelson & Sussman: SICP (MIT Press)":
      "Classic MIT text on programs as abstraction and interpretation. Deepens understanding of functions, recursion, and state beyond syntax drills.",
    "Sedgewick & Wayne: Algorithms (Princeton)":
      "Free online book and exercises for algorithms and data structures. Use when you need Big-O notation and basic complexity explained clearly.",
    "OWASP Top Ten":
      "Most critical web application security risks (injection, XSS, etc.). Read the short list so you recognise vulnerabilities in your own web exercises.",
    "Knuth: Big-O (Art of Computer Programming)":
      "Historical reference for asymptotic complexity. You do not need the full multi-volume set; know that Big-O describes growth rate as input size increases.",
    "MIT OCW 6.0001 Introduction to CS (Python)":
      "Free MIT lectures, notes, and problem sets. Extra practice for variables, loops, and debugging alongside AAU exercises.",

    "Module DSNDADK221 (AAU)":
      "Semester 2 project specification: deliverables, external exam, and integration of HCI + OOP + systems development.",
    "ISO 9241-210: Human-centred design":
      "International standard for UCD process (understand context, specify requirements, design solutions, evaluate). Frame your project report stages using this language.",
    "Cooper et al.: About Face (interaction design)":
      "Interaction design patterns and goal-directed design. Strong on personas, scenarios, and behaviour before pixels.",
    "Nielsen: Usability testing (NN/g)":
      "Practical article series on running lightweight usability tests with five users. Apply directly before your project demo.",
    "Fowler: Patterns of Enterprise Application Architecture":
      "Layering, domain model, and data access patterns for real applications. Helps you justify architecture choices in the semester project.",
    "Martin: Clean Architecture":
      "Dependency rule and separating UI from business logic. Connects to MVC and prepares you for full-stack work in semester 3.",

    "Module DSNIDAK224 (AAU)":
      "Learning goals for OOP: classes, GUI basics, and exam tasks. Check which language the course uses this year.",
    "Bloch: Effective Java":
      "Best practices for Java OOP (immutability, equals/hashCode, interfaces). Even if you use another language, the design principles transfer.",
    "Meyer: Object-Oriented Software Construction":
      "Rigorous treatment of OOP: contracts, inheritance discipline, and Design by Contract. Academic depth for oral defence of your class design.",
    "Liskov & Wing: Behavioral subtyping":
      "Liskov Substitution Principle: subtypes must behave consistently. Essential when you use inheritance in project code.",

    "Module DSNIDAK223 (AAU)":
      "HCI course objectives: methods taught, assignment types, and how evaluation is graded.",
    "Dix et al.: Human-Computer Interaction (hcibook.com)":
      "Comprehensive HCI textbook: cognition, design methods, evaluation. Online companion site matches university HCI courses.",
    "Norman: The Design of Everyday Things":
      "Affordances, signifiers, and feedback in plain language. Read early to build intuition before heuristics and metrics.",
    "Nielsen: 10 usability heuristics":
      "Quick inspection checklist for interfaces. Use in heuristic evaluation assignments and project critique.",
    "Brooke: System Usability Scale (SUS)":
      "Standardised 10-item questionnaire with published benchmarks. Use after usability tests to report a comparable score.",
    "ISO 9241-11: Usability definitions":
      "Formal definition: effectiveness, efficiency, satisfaction in context of use. Cite when defining usability in reports.",

    "Module DSNIDAK222 (AAU)":
      "Systemudvikling syllabus: which UML diagrams and pattern topics appear on the exam.",
    "Gamma et al.: Design Patterns (GoF)":
      "Original 23 patterns (Factory, Observer, Strategy, etc.). Learn the problem–solution–structure template, not memorisation of all names.",
    "Larman: Applying UML and Patterns":
      "Iterative development with UML and GRASP. Bridges diagrams to code; matches AAU-style project documentation.",
    "Fowler: UML Distilled":
      "Short, opinionated guide to useful UML (not every diagram). Keep at hand while drawing use cases and class diagrams.",
    "GRASP principles (Larman)":
      "General Responsibility Assignment Patterns (Information Expert, Creator, Controller, etc.). Explains why a method belongs on a class.",

    "Module DSNDADK311 (AAU)":
      "Development-track project requirements for semester 3: scope, exam, and technical expectations.",
    "Bass et al.: Software Architecture in Practice":
      "Quality attributes (performance, security, modifiability) and architectural tactics. Use when arguing for your stack and structure.",
    "Fielding: REST architectural style":
      "PhD dissertation defining REST constraints. Read the summary chapters if your project exposes HTTP APIs.",
    "C4 model for architecture docs":
      "Simple layered diagrams (context, container, component, code). Good for thesis and project reports without UML overload.",
    "OWASP Application Security":
      "ASVS checklist for application security requirements. Use in semester 3 when handling login and user data.",

    "Module DSNDADK321 (AAU)":
      "Theory-track project: emphasis on research question, method, and validity rather than product polish.",
    "Creswell: Research Design (mixed methods)":
      "Framework for choosing qualitative, quantitative, or mixed methods. Match your method chapter to his templates.",
    "Braun & Clarke: Thematic Analysis":
      "Step-by-step thematic analysis for interview data. Standard citation in HCI qualitative projects.",
    "Shneiderman et al.: Research methods in HCI":
      "Empirical methods tailored to interactive systems. Complements hcibook.com for the research track.",

    "Module DSNIDAK312 (AAU)":
      "Agile course: Scrum/XP topics, oral exam themes, and link to semester project process.",
    "Agile Manifesto":
      "Four values and twelve principles. Quote sparingly; examiners want you to explain trade-offs, not slogans.",
    "Scrum Guide":
      "Official definition of Scrum roles, events, and artefacts. Single short document; read before describing your sprint process.",
    "Beck: Extreme Programming Explained":
      "XP practices: TDD, pair programming, continuous integration. Grounds agile in engineering discipline.",
    "Martin: Clean Code":
      "Readable code, naming, functions, and tests. Applies agile quality to daily commits and code review.",
    "Myers et al.: The Art of Software Testing":
      "Test design techniques and the fault hypothesis. Supports test pyramid discussion in reports.",

    "Module DSNIDAK314 (AAU)":
      "Database course: SQL skills assessed, normalisation depth, and pass/fail criteria.",
    "Elmasri & Navathe: Database Systems":
      "Standard database textbook: ER modelling, relational algebra, normal forms, transactions. Match chapter to weekly topics.",
    "Codd (1970): Relational model":
      "Original paper defining the relational data model. Read abstract and core ideas to understand why SQL tables look as they do.",
    "PostgreSQL documentation":
      "Free, high-quality SQL and PostgreSQL specifics. Use for hands-on exercises and correct syntax.",
    "Use The Index, Luke (SQL performance)":
      "How indexes and query plans work. Read after you can write JOINs; prevents naive performance mistakes in projects.",

    "Curriculum: electives (studieordning)":
      "Confirms which electives are offered this cohort (Entreprenørskab, AI + HCI, etc.) and ECTS rules.",
    "Osterwalder: Business Model Generation":
      "Business Model Canvas for entrepreneurship elective. Template for value proposition and customer segments.",
    "Ries: The Lean Startup":
      "Build–measure–learn and MVP thinking for startups. Pairs with entrepreneurship module assignments.",
    "EU AI Act (Regulation)":
      "EU risk-based rules for AI systems. Reference when discussing responsible AI and transparency in the AI + HCI elective.",
    "Amershi et al.: Guidelines for Human-AI Interaction":
      "Microsoft research guidelines for designing AI interfaces (initial trust, feedback, etc.). Core reading for human-centred AI design.",

    "Module DSNIDAFK412 (AAU)":
      "Thesis regulations: deadlines, supervision, exam form, and length expectations at AAU.",
    "AAU: Writing the thesis":
      "Local guidance on structure, submission, and academic integrity. Check alongside your supervisor's expectations.",
    "Booth et al.: Craft of Research":
      "How to turn a topic into a research question and argument. Essential for chapter 1 and 2 of the thesis.",
    "Wieringa: Design Science Methodology":
      "For theses that build an artefact plus evaluate it: problem investigation, design, evaluation cycle.",
    "GDPR (EU Regulation 2016/679)":
      "Legal baseline for personal data in empirical and software projects. Required when your thesis collects user data.",
  };

  const EXTRA_REFS = {
    dsndadk221: [
      {
        label: "Nielsen: Usability testing (NN/g)",
        url: "https://www.nngroup.com/articles/usability-testing-101/",
      },
      {
        label: "Fowler: Patterns of Enterprise Application Architecture",
        url: "https://martinfowler.com/books/eaa.html",
      },
      {
        label: "Martin: Clean Architecture",
        url: "https://www.pearson.com/en-us/subject-catalog/p/clean-architecture-a-craftsmans-guide-to-software-structure-and-design/P200000003380",
      },
    ],
    dsnidak124: [
      {
        label: "MIT OCW 6.0001 Introduction to CS (Python)",
        url: "https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/",
      },
    ],
  };

  if (!window.CURRICULUM?.chapters) return;

  window.CURRICULUM.chapters.forEach((ch) => {
    if (EXTRA_REFS[ch.id]) {
      ch.refs = ch.refs.concat(EXTRA_REFS[ch.id]);
    }
    ch.refs.forEach((r) => {
      if (NOTES[r.label]) r.note = NOTES[r.label];
    });
  });
})();
