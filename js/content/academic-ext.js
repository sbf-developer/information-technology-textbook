/**
 * Academic depth: AAU alignment, theory, methods, mathematics.
 * Appended/prepended to chapter sections after sem1–sem4 load.
 */
(function () {
  const S = window.CHAPTER_SECTIONS;
  if (!S) return;

  function prepend(id, section) {
    if (!S[id]) S[id] = [];
    S[id].unshift(section);
  }

  function append(id, ...sections) {
    if (!S[id]) S[id] = [];
    S[id].push(...sections);
  }

  // ─── Overview ─────────────────────────────────────────────
  append("overview",
    {
      title: "Disciplinary foundations (how the subjects connect)",
      paragraphs: [
        "The Cand.it. programme sits at the intersection of <strong>computer science (CS)</strong>, <strong>software engineering (SE)</strong>, <strong>information systems (IS)</strong>, and <strong>human-computer interaction (HCI)</strong>. You do not need a maths degree, but you will meet formal thinking: logic, data structures, complexity, relational algebra, and research methods.",
        "Think of four layers that stack: (1) <strong>computational thinking</strong> and programming, (2) <strong>modelling and design</strong> (UML, patterns, UX), (3) <strong>engineering process</strong> (agile, testing, architecture), (4) <strong>evidence</strong> (evaluation, thesis method). Each semester adds a layer.",
      ],
      table: {
        headers: ["Discipline", "What it asks", "Example in this programme"],
        rows: [
          ["Computer science", "What can be computed efficiently?", "Algorithms in simulations; SQL query plans"],
          ["Software engineering", "How do teams build reliable systems?", "Sprints, tests, traceability"],
          ["Information systems", "How does IT create value in organisations?", "ERP/CRM fit, governance"],
          ["HCI / interaction design", "Can people accomplish tasks?", "Usability tests, heuristics"],
          ["Mathematics (applied)", "Can we state claims precisely?", "Big-O, normal forms, probability in ABM"],
        ],
      },
    },
    {
      title: "How to read academically (and still learn as a beginner)",
      bullets: [
        "When you see a formal term, ask: <em>what problem does this concept solve?</em>",
        "Separate <strong>definition</strong> (what authors mean) from <strong>example</strong> (one instance) from <strong>application</strong> (your project)",
        "Use module pages on moduler.aau.dk as the exam contract; textbooks and papers explain depth",
        "If a proof or equation looks dense, rewrite it in plain language first, then map symbols back",
      ],
    },
  );

  // ─── DSNIDAK121 Computational Thinking ───────────────────
  prepend("dsnidak121", {
    title: "AAU learning objectives (DSNIDAK121, official)",
    paragraphs: [
      "Source: <a href=\"https://moduler.aau.dk/course/2025-2026/DSNIDAK121?lang=en-GB\">moduler.aau.dk</a>. The module is 10 ECTS project work with integrated PBL workshop (1 ECTS). Oral exam, pass/fail.",
    ],
    table: {
      headers: ["Category", "You must be able to"],
      rows: [
        ["Knowledge", "Apply CT concepts: algorithm design, automation, abstraction; agent-based formalisation and simulation; decomposition, pattern recognition, data representation"],
        ["Skills", "Read and evaluate computational structures; decompose problems into ordered steps; read/modify agent-based models; use abstraction and patterns to re-represent problems"],
        ["Competences", "Formulate domain problems suitable for CT; design computational models using CT techniques"],
      ],
    },
  });

  append("dsnidak121",
    {
      title: "Theory: computational thinking in CS literature",
      paragraphs: [
        "<strong>Jeannette Wing (2006)</strong> argues CT is fundamental for all disciplines: reformulating problems so solutions can be executed by information-processing agents. It complements but differs from <strong>programming</strong> (syntax) and <strong>computer science theory</strong> (complexity, computability).",
        "<strong>Peter Denning</strong> and colleagues emphasise CT as multiple practices: algorithms, data structures, machine learning, systems. For your project, the relevant slice is <em>modelling + simulation + evaluation</em>.",
      ],
      subsections: [
        {
          title: "Core vocabulary (definitions you can reuse in reports)",
          bullets: [
            "<strong>Decomposition</strong>: divide a system into parts with clear interfaces",
            "<strong>Abstraction</strong>: suppress detail that does not affect the question you study",
            "<strong>Automation</strong>: repeat steps without manual intervention (simulation loop)",
            "<strong>Algorithm</strong>: finite, unambiguous sequence of steps terminating on valid inputs",
            "<strong>Formalisation</strong>: map a real situation to states, variables, and update rules",
          ],
        },
      ],
    },
    {
      title: "Agent-based modelling: theory and method",
      paragraphs: [
        "ABM belongs to <strong>complex systems</strong> research: macro behaviour emerges from micro interactions (Schelling segregation; Reynolds flocking; epidemiological SIR models). Standard reference for rigorous ABM practice: <strong>Railsback & Grimm, <em>Agent-Based and Individual-Based Modeling</em></strong> (ODD protocol for documenting models).",
        "Wilensky's NetLogo and related educational work show how students learn by experimenting with parameters. Your AAU project should document: purpose, entities, state variables, process overview, and design concepts (ODD-style), even if you use Python/Java instead of NetLogo.",
      ],
      callout:
        "<strong>Emergence</strong> means the whole shows patterns not obvious from one agent's rule. You must show evidence (plots, multiple runs), not only claim emergence because the visual looks interesting.",
    },
    {
      title: "Mathematics you actually use in CT projects",
      paragraphs: [
        "You rarely need calculus on day one, but you need <strong>precise notation</strong>. A simulation state at time step <em>t</em> can be written as a vector or set of agent states. An update rule is a function <em>S(t+1) = f(S(t), θ)</em> where <em>θ</em> are parameters (probabilities, thresholds).",
        "<strong>Probability</strong> appears when agents act stochastically (move with probability <em>p</em>). Run many replications and report distributions, not only one lucky run.",
        "<strong>Complexity intuition</strong>: if each tick scans all agents and all neighbours, cost grows roughly with agents × neighbourhood size. That matters for scalability discussion in your report.",
      ],
      table: {
        headers: ["Math idea", "Plain meaning", "Project example"],
        rows: [
          ["Set / state space", "All possible configurations", "Every grid placement of 100 agents"],
          ["Parameter θ", "A knob you tune", "Infection rate 0.05 vs 0.15"],
          ["Expected value", "Average over many runs", "Mean infected count after 50 ticks"],
          ["Sensitivity", "Output change when θ changes", "Does epidemic die out if θ drops 10%?"],
        ],
      },
    },
  );

  // ─── DSNIDAK122 Software development ─────────────────────
  prepend("dsnidak122", {
    title: "AAU learning objectives (DSNIDAK122, official)",
    paragraphs: [
      "10 ECTS project, 7-step scale, oral exam. Source: <a href=\"https://moduler.aau.dk/course/2025-2026/DSNIDAK122?lang=en-GB\">moduler.aau.dk</a>.",
    ],
    table: {
      headers: ["Category", "You must demonstrate"],
      rows: [
        ["Knowledge", "Foundational programming for CT/problem-solving; experience programming, testing, and evaluating software for a well-defined problem"],
        ["Skills", "Build runnable system from requirements; argue programming choices and link to computational thinking; describe, plan, reflect on project work"],
        ["Competences", "Analyse own and group learning process; explain results and process clearly in writing, models, and speech"],
      ],
    },
  });

  append("dsnidak122",
    {
      title: "Software engineering principles (IEEE / SWEBOK view)",
      paragraphs: [
        "Software engineering is the application of engineering discipline to software: requirements, design, construction, testing, maintenance, configuration management. The <strong>SWEBOK Guide</strong> (IEEE) defines knowledge areas; introductory projects focus on requirements, design, construction, and testing.",
        "<strong>Verification</strong> asks: did we build the product right? (matches spec). <strong>Validation</strong> asks: did we build the right product? (solves the real user problem). Both matter at exam.",
      ],
      subsections: [
        {
          title: "Classic lifecycle models (know the trade-offs)",
          table: {
            headers: ["Model", "Idea", "Risk"],
            rows: [
              ["Waterfall", "Phases in sequence", "Late discovery of wrong requirements"],
              ["Incremental", "Deliver slices", "Integration debt if slices poorly defined"],
              ["Spiral", "Risk-driven iterations", "Heavy process for small teams"],
              ["Agile (sem. 3)", "Short feedback loops", "Needs discipline on testing/docs"],
            ],
          },
        },
      ],
    },
    {
      title: "Quality attributes (ISO 25010, simplified)",
      bullets: [
        "<strong>Functional suitability</strong>: features match needs",
        "<strong>Performance efficiency</strong>: time and resource use",
        "<strong>Compatibility</strong>: works with other systems",
        "<strong>Usability</strong>: users can learn and operate it",
        "<strong>Reliability</strong>: available, fault-tolerant",
        "<strong>Security</strong>: confidentiality, integrity",
        "<strong>Maintainability</strong>: can you fix and extend it?",
      ],
      callout:
        "Pick 2–3 quality attributes central to your project and argue how you tested them. \"We tested functionality\" alone is minimal.",
    },
  );

  // ─── DSNIDAK123 Information og organisering ────────────────
  prepend("dsnidak123", {
    title: "AAU focus: information systems in context",
    paragraphs: [
      "The course connects IT artefacts to organisational structure, strategy, and change. Exams typically combine classification of systems with argument about implementation and value.",
    ],
  });

  append("dsnidak123",
    {
      title: "Theory: information systems and socio-technical design",
      paragraphs: [
        "<strong>Laudon & Laudon</strong> (<em>Management Information Systems</em>) organise IS by organisational level and function (TPS → MIS → DSS → ERP/CRM). Use this taxonomy to explain <em>where</em> a system sits, not as a buzzword list.",
        "The <strong>socio-technical systems</strong> tradition (Trist, Emery; later Mumford) insists that work systems combine people, tasks, technology, and structure. Optimising software alone fails if roles and incentives stay unchanged.",
      ],
    },
    {
      title: "Strategy and value of IT",
      paragraphs: [
        "<strong>Porter's value chain</strong> and later IS strategy work ask whether IT is strategic (differentiating) or infrastructural (table stakes). <strong>Carr's \"IT doesn't matter\"</strong> debate (2003) is a useful counterpoint: commoditised IT may not yield competitive advantage unless paired with unique processes.",
        "<strong>Technology acceptance</strong> models (e.g. Davis's TAM: perceived usefulness and ease of use) explain why intended users adopt or reject systems. Link this to HCI in semester 2.",
      ],
    },
  );

  // ─── DSNIDAK124 Programming ──────────────────────────────
  prepend("dsnidak124", {
    title: "AAU learning objectives (DSNIDAK124, official)",
    paragraphs: [
      "Module taught in English. 5 ECTS, 7-step scale. Source: <a href=\"https://moduler.aau.dk/course/2025-2026/DSNIDAK124?lang=en-GB\">moduler.aau.dk</a>.",
    ],
    table: {
      headers: ["Category", "You must be able to"],
      rows: [
        ["Knowledge", "Link algorithmic thinking to programming; types and structures; intro encapsulation and memory; web basics; good vs bad practices"],
        ["Skills", "Read, evaluate, modify, create code; systematic testing of small programs"],
        ["Competences", "Design, implement, evaluate solutions and small web applications"],
      ],
    },
  });

  append("dsnidak124",
    {
      title: "Computer science foundations: execution and memory",
      paragraphs: [
        "Programs run on the <strong>von Neumann model</strong>: instructions and data live in memory; the CPU fetches and executes instructions sequentially (with jumps for control flow). High-level languages hide this, but bugs often come from misunderstanding <strong>state</strong>: what values exist in memory right now?",
        "<strong>Variables</strong> name storage locations. <strong>Types</strong> constrain operations (you do not add a string to a boolean). Static vs dynamic typing is a language design choice; Java and TypeScript differ from Python's dynamic typing with optional hints.",
      ],
    },
    {
      title: "Logic and algorithms (introductory mathematics)",
      paragraphs: [
        "Programming rests on <strong>propositional logic</strong>: AND, OR, NOT, implications in conditions. <strong>Boolean algebra</strong> underpins bitwise operations and circuit design (relevant if you later study hardware or low-level code).",
        "An <strong>algorithm</strong> must be finite, definite, and effective. <strong>Correctness</strong> often argued via invariants in loops: a statement true before/after each iteration (e.g. \"sum contains sum of first i elements\").",
        "<strong>Big-O notation</strong> describes growth rate: O(1) constant, O(n) linear scan, O(n²) nested loops over n items. You do not need formal proofs yet, but you should recognise when doubling input size quadruples runtime.",
      ],
      table: {
        headers: ["Notation", "Meaning", "Example"],
        rows: [
          ["O(1)", "Constant time", "Array index access"],
          ["O(n)", "Linear", "Find max in unsorted list"],
          ["O(n log n)", "Efficient sort", "Merge sort average case"],
          ["O(n²)", "Quadratic", "Naive all-pairs comparison"],
        ],
      },
    },
    {
      title: "Web architecture (W3C / browser model)",
      paragraphs: [
        "The web is <strong>client-server</strong>: browser (client) requests resources; server responds with HTML, CSS, JS, JSON. The <strong>DOM</strong> is an tree API for HTML; <strong>events</strong> implement interactive GUIs. Separation of structure (HTML), presentation (CSS), and behaviour (JS) scales to frameworks (React/Vue) in later semesters.",
        "Security basics from OWASP: treat all input as untrusted; encode output; never store secrets in client-side code.",
      ],
    },
  );

  // ─── Semester 2 ────────────────────────────────────────────
  prepend("dsndadk221", {
    title: "Integration project: academic criteria",
    paragraphs: [
      "15 ECTS external exam. Examiners assess whether you can synthesise HCI methods, object-oriented implementation, and systems development documentation into one coherent interactive product with evidence-based design choices.",
    ],
  });

  append("dsndadk221",
    {
      title: "Engineering interactive products (ISO 9241-210)",
      paragraphs: [
        "ISO 9241-210 describes human-centred design for interactive systems: understand context of use, specify user requirements, produce design solutions, evaluate against requirements. Map your semester report sections to these activities explicitly.",
      ],
    },
  );

  prepend("dsnidak224", {
    title: "AAU: object-oriented programming objectives",
    bullets: [
      "Model domain concepts as classes; use encapsulation, inheritance, polymorphism appropriately",
      "Build event-driven GUI applications with separation of concerns",
      "Test logic independently of presentation where possible",
    ],
  });

  append("dsnidak224",
    {
      title: "Theory: objects, types, and design by contract",
      paragraphs: [
        "OOP combines <strong>data abstraction</strong> (hide representation) with <strong> procedural abstraction</strong> (methods). Meyer’s <strong>Design by Contract</strong> (preconditions, postconditions, invariants) formalises expectations on methods; unit tests approximate this in practice.",
        "<strong>Subtype polymorphism</strong> (Liskov): subclasses must honour the behavioural contract of the superclass. Violations (e.g. square/rectangle problem) break substitutability.",
      ],
      subsections: [
        {
          title: "Composition vs inheritance",
          paragraphs: [
            "Prefer <strong>composition</strong> (has-a) when behaviour is combined from parts; use <strong>inheritance</strong> (is-a) when the subtype truly substituts for the supertype. Deep inheritance hierarchies often signal modelling error.",
          ],
        },
      ],
    },
  );

  prepend("dsnidak223", {
    title: "AAU learning objectives (DSNIDAK223, official)",
    paragraphs: [
      "Source: <a href=\"https://moduler.aau.dk/course/2025-2026/DSNIDAK223?lang=en-GB\">moduler.aau.dk</a>. 5 ECTS, 7-step scale.",
    ],
    table: {
      headers: ["Topic area", "What AAU expects"],
      rows: [
        ["Interaction design process", "UCD, contextual/participatory design, lifecycle models"],
        ["Understanding users", "Interviews, observation, questionnaires, task analysis, personas, scenarios"],
        ["Interface design", "Visual principles, Gestalt laws, sketching, prototyping, conceptual/physical design"],
        ["Usability evaluation", "Plan activities, roles, identify usability problems with evidence"],
        ["Competence", "Design and evaluate a system for a well-defined task; relate methods to theory"],
      ],
    },
  });

  append("dsnidak223",
    {
      title: "HCI theory: cognition, affordances, and evaluation",
      paragraphs: [
        "<strong>Don Norman</strong>: affordances (action possibilities), signifiers (cues), feedback, constraints. Users build <strong>mental models</strong> of how systems work; mismatches cause errors.",
        "<strong>Fitts's Law</strong> (movement time vs target size/distance) and <strong>Hick-Hyman Law</strong> (choice reaction time vs number of options) give quantitative HCI intuition for layout and menus.",
        "<strong>Usability</strong> (ISO 9241-11): effectiveness, efficiency, satisfaction in a specified context of use.",
      ],
      table: {
        headers: ["Method", "What it tells you", "Limitation"],
        rows: [
          ["Heuristic evaluation", "Cheap expert pass on UI", "Experts ≠ your users"],
          ["Usability test", "Real tasks, real errors", "Small sample, lab bias"],
          ["Survey (SUS)", "Comparable satisfaction score", "Not diagnostic alone"],
          ["Analytics", "Behaviour at scale", "Shows what, not always why"],
        ],
      },
    },
  );

  prepend("dsnidak222", {
    title: "AAU learning objectives (DSNIDAK222, official)",
    table: {
      headers: ["Area", "Content at AAU"],
      rows: [
        ["Analysis patterns", "Object-descriptor, hierarchy, stepwise-role, materials, procedure"],
        ["Design patterns", "Collection, layered, observer, client-server, MVC"],
        ["Methods", "Waterfall/model-driven vs iterative/prototype-driven; strengths and weaknesses"],
        ["Skills", "Model requirements, context, components; explain using discipline concepts"],
      ],
    },
  });

  append("dsnidak222",
    {
      title: "UML as formal sketch language",
      paragraphs: [
        "UML 2.x diagrams are semi-formal: precise enough for teams, not always executable. <strong>Use case diagrams</strong> scope actor goals; <strong>class diagrams</strong> show structure; <strong>sequence diagrams</strong> show message passing over time; <strong>state machines</strong> model lifecycle.",
        "The <strong>GRASP</strong> principles (Information Expert, Creator, Controller, etc.) guide responsibility assignment before reaching for GoF patterns.",
      ],
    },
    {
      title: "Design patterns (Gamma et al.) in plain language",
      table: {
        headers: ["Pattern", "Problem it solves"],
        rows: [
          ["Model-View-Controller", "Separate UI from domain logic"],
          ["Observer", "Notify dependents when state changes"],
          ["Strategy", "Swap algorithms at runtime"],
          ["Factory Method", "Defer instantiation to subclasses"],
          ["Layered architecture", "Isolate persistence, domain, presentation"],
        ],
      },
    },
  );

  // ─── Semester 3 ────────────────────────────────────────────
  prepend("dsndadk311", {
    title: "Capstone development track",
    paragraphs: [
      "External exam on a complex interactive system integrating persistence, backend logic, frontend UX, and team engineering practices from Agil SE and Databaseudvikling.",
    ],
  });

  append("dsndadk311",
    {
      title: "Software architecture (Shaw & Garlan; Bass et al.)",
      paragraphs: [
        "Architecture is the set of principal design decisions about structure, behaviour, and interaction. Common styles: <strong>layered</strong>, <strong>client-server</strong>, <strong>microservices</strong> (later elective), <strong>event-driven</strong>. Quality attributes (performance, security, modifiability) drive choices.",
        "Document architecture with <strong>C4 model</strong> (context, containers, components, code) or equivalent: examiners should see boundaries and data flow clearly.",
      ],
    },
    {
      title: "REST and HTTP (fielding-style APIs)",
      bullets: [
        "Resources identified by URLs; standard methods (GET, POST, PUT, PATCH, DELETE)",
        "Stateless server: each request carries needed context (auth tokens, etc.)",
        "Status codes communicate outcome (200 OK, 404 not found, 401 unauthorised)",
        "JSON as common representation; OpenAPI for contract documentation",
      ],
    },
  );

  prepend("dsndadk321", {
    title: "Research-oriented project track",
    paragraphs: [
      "Emphasis on research question, literature, method, and valid argument rather than production-ready deployment. Prepares directly for Kandidatspeciale writing standards.",
    ],
  });

  append("dsndadk321",
    {
      title: "Research methods in HCI and IT",
      paragraphs: [
        "<strong>Qualitative</strong>: interviews, ethnography, thematic analysis (Braun & Clarke). <strong>Quantitative</strong>: controlled experiments, surveys, descriptive/inferential statistics at intro level. <strong>Mixed methods</strong> combine both when one lens is insufficient.",
        "Report threats to validity (internal, external, construct, reliability) explicitly. AAU PBL expects you to connect method choice to research question.",
      ],
    },
  );

  prepend("dsnidak312", {
    title: "AAU learning objectives (DSNIDAK312, official)",
    paragraphs: [
      "5 ECTS, <strong>external examination</strong>. Source: <a href=\"https://moduler.aau.dk/course/2025-2026/DSNIDAK312?lang=en-GB\">moduler.aau.dk</a>.",
    ],
    table: {
      headers: ["Category", "You must be able to"],
      rows: [
        ["Skills", "Explain SE concepts with discipline terminology; compare paradigms; describe theories/methods for software-intensive systems"],
        ["Competences", "Select, justify, and apply appropriate paradigms, methods, and techniques in development contexts"],
      ],
    },
  });

  append("dsnidak312",
    {
      title: "Agile and plan-driven methods (Sommerville; Boehm)",
      paragraphs: [
        "The <strong>Agile Manifesto</strong> (2001) values working software and responding to change. <strong>Scrum</strong> provides roles (Product Owner, Scrum Master, Developers), events (Sprint, Daily Scrum, Review, Retrospective), and artefacts (Product Backlog, Sprint Backlog, Increment).",
        "<strong>Technical debt</strong> (Cunningham): shortcuts that speed now but cost later. Retrospectives exist partly to pay debt down. <strong>Continuous integration</strong> runs automated tests on each merge.",
      ],
      subsections: [
        {
          title: "Testing theory (Myers/Barr et al.)",
          bullets: [
            "<strong>Unit test</strong>: smallest testable unit in isolation",
            "<strong>Integration test</strong>: interfaces between modules",
            "<strong>System / acceptance test</strong>: whole behaviour vs requirements",
            "Tests cannot prove absence of bugs; they increase confidence",
          ],
        },
      ],
    },
  );

  prepend("dsnidak314", {
    title: "AAU learning objectives (DSNIDAK314, official)",
    table: {
      headers: ["Category", "You must be able to"],
      rows: [
        ["Skills", "Construct/evaluate database design and schema; relational model; complex SQL; transactions; argue design quality via redundancy and 1NF/3NF"],
        ["Competences", "Use a DBMS; embed SQL in application code"],
      ],
    },
  });

  append("dsnidak314",
    {
      title: "Relational theory (Codd; Elmasri & Navathe)",
      paragraphs: [
        "E.F. <strong>Codd's relational model</strong> (1970) represents data as relations (tables) with mathematical foundation in set theory. SQL is the dominant practical language; relational algebra (select, project, join) underpins query semantics.",
        "<strong>Functional dependencies</strong> X → Y motivate normalisation: eliminate update anomalies by decomposing schemas.",
      ],
      subsections: [
        {
          title: "Normal forms (informal but exam-relevant)",
          bullets: [
            "<strong>1NF</strong>: atomic cells (no repeating groups)",
            "<strong>2NF</strong>: no partial dependency on composite key",
            "<strong>3NF</strong>: no transitive dependency of non-keys on non-keys",
            "BCNF stricter; denormalise consciously for read performance with known trade-offs",
          ],
        },
        {
          title: "Transactions (ACID) and concurrency",
          paragraphs: [
            "A transaction groups operations into one logical unit. <strong>Isolation</strong> prevents interleaved reads/writes from seeing inconsistent states; DBMS uses locking or MVCC. <strong>Durability</strong> via write-ahead logging.",
          ],
        },
      ],
    },
    {
      title: "Relational algebra intuition",
      paragraphs: [
        "Join combines related rows (cartesian product + filter). Projection selects columns; selection filters rows. Every SQL query has an algebra interpretation, which helps explain why certain indexes speed up joins.",
      ],
    },
  );

  append("valgfag",
    {
      title: "Entrepreneurship track (Osterwalder)",
      paragraphs: [
        "<strong>Business Model Canvas</strong> maps nine blocks: customer segments, value propositions, channels, customer relationships, revenue streams, key resources, key activities, key partners, cost structure. Use it to stress-test whether your semester project solves a problem someone would pay for (or fund).",
      ],
    },
    {
      title: "AI + HCI track (trustworthy ML interaction)",
      paragraphs: [
        "Human-centred AI draws on <strong>explainable AI (XAI)</strong>, <strong>human-in-the-loop</strong> systems, and fairness/transparency research. EU AI Act and GDPR inform deployment constraints in European contexts. Link to usability: explanations must be understandable to the target user, not only technically correct.",
      ],
    },
  );

  prepend("dsnidafk412", {
    title: "AAU master's thesis (30 ECTS)",
    paragraphs: [
      "Independent work (~900 hours), external examination. Must demonstrate research and/or development competence at master's level in HCI and application development, with clear problem, method, and contribution.",
    ],
  });

  append("dsnidafk412",
    {
      title: "Academic writing and argumentation",
      paragraphs: [
        "Follow IMRaD structure adapted to your contribution type. Every claim in discussion must trace to results or cited literature. Distinguish <strong>contribution</strong> (what you add) from <strong>summary</strong> (what others did).",
        "Use reference managers (Zotero, Mendeley) and a consistent style (APA/IEEE as required by supervisor).",
      ],
    },
    {
      title: "Ethics and data protection",
      bullets: [
        "GDPR for personal data: lawful basis, minimisation, storage limitation",
        "Informed consent for user studies; anonymisation in quotes",
        "AI-assisted writing: follow AAU/MOODLE rules on permitted aids",
      ],
    },
  );
})();
