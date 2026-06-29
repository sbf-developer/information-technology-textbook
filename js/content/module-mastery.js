/**
 * Module mastery guides: narrative textbook sections per course.
 * Goal: reader gains grasp of principles, methods, theory, and math.
 */
(function () {
  const S = window.CHAPTER_SECTIONS;
  if (!S) return;

  function afterAau(id, section) {
    if (!S[id]) return;
    const idx = S[id].findIndex((s) => s.title.includes("AAU"));
    const at = idx >= 0 ? idx + 1 : 0;
    S[id].splice(at, 0, section);
  }

  afterAau("dsnidak121", {
    title: "Master the subject: computational thinking",
    paragraphs: [
      "Computational thinking is the discipline of making problems precise enough that a computer, a simulation, or a person with a checklist could solve them. At AAU you prove this by building a model, usually agent-based, and defending every simplification at oral exam.",
      "The hard part is not syntax. It is choosing <strong>state</strong> (what variables describe the world), <strong>dynamics</strong> (how state changes each step), and <strong>outputs</strong> (what you measure to answer your question). A rumour model tracks who has heard the rumour; a segregation model tracks where agents live; an traffic model tracks density on edges.",
      "From computer science you borrow <strong>algorithmic thinking</strong>: finite steps, clear termination, handling edge cases (empty grid, zero agents). From mathematics you borrow <strong>probability</strong> when rules are stochastic and <strong>analysis of dynamics</strong> when you ask whether a pattern is stable or transient.",
      "From software engineering you borrow <strong>experimental discipline</strong>: change one parameter at a time, record seeds, plot results, and distinguish robust findings from one-off visuals. A report that shows only one screenshot rarely convinces examiners.",
    ],
    bullets: [
      "<strong>Method</strong>: ODD-style documentation (Overview, Design concepts, Details)",
      "<strong>Theory</strong>: Wing (CT); complex systems / emergence literature",
      "<strong>Math</strong>: discrete time steps, parameters θ, descriptive statistics over runs",
      "<strong>IT link</strong>: same modelling mindset later used in data dashboards and simulations in industry",
    ],
  });

  afterAau("dsnidak122", {
    title: "Master the subject: software development project",
    paragraphs: [
      "This module is your first proof that you can deliver <strong>working software</strong>, not only explain ideas. AAU explicitly requires you to programme from requirements to a demonstrable system and to relate your choices to computational thinking.",
      "Software engineering here means a traceable chain: stakeholder need → written requirement → design sketch → code → test → demo. Internal quality (readable structure, tests) supports external quality (users accomplish tasks).",
      "Reflection is part of the product. Groups that only write what they built, without analysing what failed in teamwork or scope, miss competence objectives. Honest reflection is academic strength, not weakness.",
    ],
  });

  afterAau("dsnidak123", {
    title: "Master the subject: information and organisation",
    paragraphs: [
      "Information systems (IS) are socio-technical: databases and UI plus people, rules, and incentives. AAU expects you to evaluate IS impact under organisational constraints, not as abstract technology shopping.",
      "Start from <strong>value</strong>: does the system shorten process time, reduce errors, improve decisions, or comply with law? Then ask <strong>fit</strong>: do staff have time, skills, and motivation to use it? A CRM nobody logs into is not an IS success because the licence was installed.",
      "Implementation is a process: selection, configuration, migration, training, go-live, post-go-live support. Research in IS documents high failure rates when governance and change management are ignored. Your exam answers should sound like someone who has read that literature, not like a product brochure.",
    ],
    bullets: [
      "<strong>Methods</strong>: case comparison, stakeholder analysis, fit–gap analysis",
      "<strong>Theory</strong>: Laudon taxonomy; socio-technical systems; TAM for adoption",
      "<strong>IT</strong>: ERP, CRM, TPS as integrated platforms vs best-of-breed SaaS",
    ],
  });

  afterAau("dsnidak124", {
    title: "Master the subject: programming",
    paragraphs: [
      "Programming is the craft of describing computation precisely. The AAU module links algorithmic thinking to code, web basics, testing, and early ideas of encapsulation that become full OOP next semester.",
      "Every program transforms input state to output state through a series of instructions. Variables name memory; types restrict valid operations; control flow selects paths; functions bundle reusable logic. Bugs appear when your mental model of state diverges from actual state.",
      "Web development at this level introduces the <strong>client-server</strong> pattern that dominates app development: HTML/CSS for structure and style, JavaScript for behaviour, browser as runtime. You are already learning architecture, not only syntax.",
      "Mathematics enters through logic (Boolean conditions), invariants in loops, and Big-O intuition for scalability. You do not need proofs yet, but you need to recognise when an algorithm slows dramatically as data grows.",
    ],
  });

  afterAau("dsndadk221", {
    title: "Master the subject: interactive design project",
    paragraphs: [
      "This 15 ECTS external project integrates OOP, multi-layer architecture, HCI evaluation, and requirements argumentation. AAU requires a <strong>running interactive design</strong> that solves a user problem, with systematic testing of both code and interface.",
      "<strong>Internal quality</strong> means modular code, tests on domain logic, sensible class structure. <strong>External quality</strong> means users can complete tasks with acceptable errors and satisfaction. Both must appear in the report with evidence.",
      "Architecture is typically layered: presentation (UI), application logic, domain model, persistence. The MVC pattern from Systemudvikling is the conceptual spine. Every screen action should trace to a requirement and a test or usability finding.",
    ],
    bullets: [
      "<strong>App development</strong>: event-driven UI, iterative prototyping, demo-ready vertical slices",
      "<strong>SE</strong>: requirements traceability, test plan, reflection on process",
      "<strong>HCI</strong>: evaluation protocol, severity-rated findings, design iteration",
    ],
  });

  afterAau("dsnidak224", {
    title: "Master the subject: object-oriented programming",
    paragraphs: [
      "OOP organises code around objects that combine data and behaviour. The goal is maintainability when several people extend the same codebase, which describes every semester project from here onward.",
      "Encapsulation protects invariants (a bank balance does not go negative through public fields). Inheritance and polymorphism express specialisation when subtypes truly substitute for supertypes. Composition often beats deep inheritance trees for flexibility.",
      "Event-driven GUIs connect human action to object methods. Keeping domain rules out of button handlers preserves testability: the same logic can be tested without clicking.",
    ],
  });

  afterAau("dsnidak223", {
    title: "Master the subject: HCI and interface evaluation",
    paragraphs: [
      "HCI is an empirical design discipline. You form hypotheses about users and tasks, produce interfaces, and evaluate with evidence. AAU lists interviews, task analysis, prototyping, heuristics, and usability activities explicitly in learning objectives.",
      "Theory gives you vocabulary: affordances, mental models, feedback, error recovery, gestalt grouping. Methods give you procedure: recruit participants, write tasks, observe, analyse, prioritise fixes.",
      "Quantitative laws (Fitts, Hick) are not exams in themselves but sharpen design intuition: big targets close to cursor are faster; huge menus slow choice.",
    ],
  });

  afterAau("dsnidak222", {
    title: "Master the subject: systems development",
    paragraphs: [
      "Systems development at AAU is model-driven in the best sense: you learn analysis patterns, design patterns, and when to use waterfall-style documentation vs iterative prototyping. UML is the shared language between you, teammates, and examiners.",
      "Analysis models capture the <strong>problem domain</strong>. Design models add <strong>application structure</strong> (layers, MVC, client-server). The gap between them is where many student projects stumble: jumping from user story to code without a domain model.",
      "Knowing patterns by name is insufficient. You must say which problem each pattern solves in your system: Observer for live UI updates, Layered for separating SQL from business rules.",
    ],
  });

  afterAau("dsndadk311", {
    title: "Master the subject: complex interactive systems",
    paragraphs: [
      "The development track capstone adds persistence, APIs, deployment, and team process at scale. You are building something closer to industry app development: frontend framework, backend service, database, auth, and documented architecture.",
      "Computer science concepts reappear: data structures in memory vs on disk, algorithmic cost of queries, client-server protocol design. Software engineering adds CI, code review, and backlog discipline from Agil SE.",
      "Users still matter. A fast API with a confusing UI fails the interactive systems brief. Plan usability verification alongside load testing.",
    ],
  });

  afterAau("dsndadk321", {
    title: "Master the subject: theoretical investigation",
    paragraphs: [
      "This track trains you to produce knowledge, not only software. You pose a research question, review literature critically, choose method, collect and analyse data, and argue conclusions with explicit validity limits.",
      "The same academic standards apply as in the master's thesis, compressed into one semester. Examiners look for synthesis in related work, not a list of summaries, and for alignment between question, method, and claims.",
    ],
  });

  afterAau("dsnidak312", {
    title: "Master the subject: agile software engineering",
    paragraphs: [
      "Software engineering is the body of knowledge about building software in teams: requirements, architecture, construction, verification, maintenance, configuration management, process. Agile methods are one family; plan-driven methods remain relevant for regulated or fixed-contract contexts.",
      "AAU external exam expects precise vocabulary: backlog, increment, DoD, technical debt, test levels. You must compare paradigms and justify what your team used in the semester project.",
    ],
  });

  afterAau("dsnidak314", {
    title: "Master the subject: database development",
    paragraphs: [
      "Relational databases implement theory from Codd: data as relations, manipulated with relational algebra operations expressed in SQL. Normalisation reduces redundancy using functional dependencies; transactions provide ACID guarantees when many users write concurrently.",
      "Application developers must think in both objects and tables: ORMs bridge the gap but do not remove the need to understand JOINs, indexes, and migration scripts. A slow query can undermine an otherwise polished app.",
      "AAU pass/fail exam often asks you to design a schema, write non-trivial SQL, and argue normal form informally.",
    ],
  });

  afterAau("dsnidafk412", {
    title: "Master the subject: master's thesis",
    paragraphs: [
      "The thesis demonstrates that you can work independently at master's level in IT/HCI/application development. You combine literature, method, empirical and/or development work, and written argument into one coherent contribution defended orally.",
      "Pick a question narrow enough to answer in one semester. Integrate programming or design when it supports the research question; do not bolt on an unrelated app. Ethics and GDPR matter whenever people participate.",
    ],
  });
})();
