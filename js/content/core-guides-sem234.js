/**
 * Core subject guides: Semester 2–4.
 */
(function () {
  const S = window.CHAPTER_SECTIONS;
  if (!S) return;

  function afterLessons(id, ...sections) {
    if (!S[id]) return;
    let at = 0;
    for (let i = 0; i < S[id].length; i++) {
      if (S[id][i].title.startsWith("Lesson ")) at = i + 1;
    }
    S[id].splice(at, 0, ...sections);
  }

  afterLessons("dsndadk221", {
    title: "Core subject guide: interactive design project completely",
    subsections: [
      {
        title: "What \"interactive design\" means at AAU",
        paragraphs: [
          "Interactive means the user changes system state through input and gets feedback. Static websites with no user-specific behaviour are weak for this module. The bar is a product-shaped artefact: coherent UI, domain logic, persistence or realistic stub, and evidence users shaped it.",
        ],
      },
      {
        title: "Integration rubric (self-grade before exam)",
        table: {
          headers: ["Course", "Must appear in project"],
          rows: [
            ["DSNIDAK223 HCI", "Research, prototype, usability test"],
            ["DSNIDAK224 OOP", "Classes, encapsulation, GUI events"],
            ["DSNIDAK222 Systems", "UML use case + class or sequence"],
            ["DSNIDAK124/122 SE", "Requirements, tests, Git, README"],
          ],
        },
      },
      {
        title: "External examination dynamics",
        paragraphs: [
          "External examiner compares your project to industry and academic standards from other universities. They probe weak claims. Prepare honest limitations slide: what you cut, what broke under time, what you would do with four more weeks.",
        ],
      },
      {
        title: "Minimum viable evidence pack",
        bullets: [
          "5 interview quotes with analysis.",
          "Before/after UI for one major change.",
          "Class diagram matching code package names.",
          "One sequence diagram for core flow.",
          "Three automated tests green in CI or local script.",
          "Demo script timed under 5 minutes.",
        ],
      },
    ],
  });

  afterLessons("dsnidak224", {
    title: "Core subject guide: OOP completely",
    subsections: [
      {
        title: "Why OOP won enterprise development",
        paragraphs: [
          "Large systems need modules with boundaries. OOP packages data and behaviour together so invariants stay local. Teams own classes or packages. Polymorphism lets frameworks call your code through interfaces without knowing concrete types.",
        ],
      },
      {
        title: "Design process for student projects",
        steps: [
          "List domain nouns and verbs from requirements.",
          "Assign methods using Information Expert (data lives with behaviour).",
          "Draw class diagram; implement bottom-up: domain first, GUI last.",
          "Refactor when God class exceeds ~200 lines or two reasons to change.",
        ],
      },
      {
        title: "GUI and thread basics",
        paragraphs: [
          "Event dispatch thread runs UI. Long computation on UI thread freezes window. Pattern: compute in background, update UI on completion. Semester 2: keep handlers thin; semester 3 async patterns deepen.",
        ],
      },
      {
        title: "Testing OOP",
        paragraphs: [
          "Test public interface of domain classes without launching GUI. Mock dependencies with interfaces. If you cannot test without GUI, architecture needs split.",
        ],
      },
    ],
  });

  afterLessons("dsnidak223", {
    title: "Core subject guide: HCI completely",
    subsections: [
      {
        title: "Discipline roots",
        paragraphs: [
          "HCI draws on cognitive psychology (attention, memory, errors), design (layout, typography), and computer science (input devices, response time). Goal: systems that match human capabilities and limitations.",
        ],
      },
      {
        title: "Full UCD cycle in one paragraph each",
        bullets: [
          "<strong>Understand context</strong>: observe users in real environment.",
          "<strong>Specify requirements</strong>: tasks, frequency, errors tolerated.",
          "<strong>Design solutions</strong>: iterate fidelity levels.",
          "<strong>Evaluate</strong>: test with users, measure, fix.",
          "<strong>Deploy & monitor</strong>: support and feedback loops (industry).",
        ],
      },
      {
        title: "Quantitative vs qualitative in HCI",
        paragraphs: [
          "Qualitative: interviews, think-aloud, thematic analysis, rich quotes. Quantitative: task time, error rate, A/B, SUS scores. Choose based on question: \"why\" vs \"how much faster.\" Mixed methods common in thesis.",
        ],
      },
      {
        title: "Common design anti-patterns",
        bullets: [
          "Mystery meat navigation (icons without labels).",
          "Destructive actions without confirm.",
          "Same colour for link and heading.",
          "Error messages blaming user (\"illegal input\").",
          "Hidden system status during long operations.",
        ],
      },
    ],
  });

  afterLessons("dsnidak222", {
    title: "Core subject guide: systems development completely",
    subsections: [
      {
        title: "Modelling is about agreement",
        paragraphs: [
          "UML reduces misunderstanding between developer, customer, and teammates. A use case argument saves weeks building wrong feature. Sequence diagram helps when debugger shows unexpected call order.",
        ],
      },
      {
        title: "Which diagram when",
        bullets: [
          "Scope arguments → use case.",
          "Data structure → class.",
          "One scenario debug → sequence.",
          "Lifecycle states → state machine.",
          "Business process with branches → activity.",
        ],
      },
      {
        title: "From analysis to design patterns",
        paragraphs: [
          "When many objects need notify on change → Observer. When algorithm varies → Strategy. When object creation is complex → Factory. Patterns name conversations teams already have; learn problem-solution pairs, not 23 names by heart.",
        ],
      },
      {
        title: "Agile vs models",
        paragraphs: [
          "Agile welcomes changing requirements; models are not frozen forever. Update diagrams when architecture pivots, or archive old diagram with date. Outdated diagram worse than no diagram.",
        ],
      },
    ],
  });

  afterLessons("dsndadk311", {
    title: "Core subject guide: full-stack development completely",
    subsections: [
      {
        title: "Three-tier mental model",
        paragraphs: [
          "Presentation tier (browser/app), application tier (business rules, auth), data tier (database). Calls flow down; data flows up as DTOs/JSON. Never skip application tier logic in SQL or client only.",
        ],
      },
      {
        title: "REST API design student checklist",
        bullets: [
          "Nouns in URLs (/users not /getUsers).",
          "HTTP verbs match action (GET read, POST create, PUT/PATCH update, DELETE remove).",
          "Status codes: 200 OK, 201 created, 400 bad input, 401 unauth, 403 forbidden, 404 missing, 500 server bug.",
          "JSON body schema consistent; document in README or OpenAPI if possible.",
        ],
      },
      {
        title: "Database in the loop",
        paragraphs: [
          "ORM saves time but hides SQL. Log slow queries. Migrations in Git. Seed script for demo data. Foreign keys enforce integrity examiners ask about.",
        ],
      },
      {
        title: "Team workflows",
        paragraphs: [
          "Feature branches, pull requests, code review checklist (tests, no secrets, authorisation checked). Definition of Done includes staging deploy.",
        ],
      },
    ],
  });

  afterLessons("dsndadk321", {
    title: "Core subject guide: research on interactive systems completely",
    subsections: [
      {
        title: "What counts as contribution",
        bullets: [
          "New empirical findings about users and systems.",
          "New framework or design implications from synthesis.",
          "Validated artefact evaluation with clear limits.",
          "Replication or extension of prior HCI study in new context.",
        ],
      },
      {
        title: "Method rigour at master's door",
        paragraphs: [
          "Document recruitment, exclusion, consent. Describe analysis procedure so another researcher could follow. Discuss reflexivity in qualitative work (your bias). Report negative findings.",
        ],
      },
      {
        title: "Writing results vs discussion",
        paragraphs: [
          "Results: what you found without interpretation overload. Discussion: what it means, how it compares to literature, limitations, implications for designers. Keep claims in discussion bounded by method.",
        ],
      },
      {
        title: "Bridge to thesis",
        paragraphs: [
          "Semester 3 theory track is thesis prototype: narrower RQ, smaller n, supervisor feedback on method chapter. Reuse citation library and writing habits.",
        ],
      },
    ],
  });

  afterLessons("dsnidak312", {
    title: "Core subject guide: agile software engineering completely",
    subsections: [
      {
        title: "History and motivation",
        paragraphs: [
          "1990s plan-driven projects delivered late with obsolete requirements. Agile manifesto 2001 emphasises people, working software, collaboration, change. Scrum and XP are concrete frameworks; Kanban is flow-based alternative.",
        ],
      },
      {
        title: "Scrum roles clarified",
        bullets: [
          "<strong>Product Owner</strong>: prioritises backlog, accepts stories.",
          "<strong>Scrum Master</strong>: facilitates process, removes blockers.",
          "<strong>Developers</strong>: deliver increment; self-organising.",
        ],
      },
      {
        title: "Quality practices",
        paragraphs: [
          "Continuous integration, code review, pair programming (XP), test-driven development where appropriate. Technical debt tracked in backlog; refactor sprints occasionally.",
        ],
      },
      {
        title: "When agile hurts",
        paragraphs: [
          "Fixed-price fixed-scope contracts, safety-critical certification, teams without access to users, organisations that punish changing plans. Then hybrid or plan-driven elements appear.",
        ],
      },
    ],
  });

  afterLessons("dsnidak314", {
    title: "Core subject guide: databases completely",
    subsections: [
      {
        title: "Relational model intuition",
        paragraphs: [
          "Codd's idea: store facts in tables; relationships are values (foreign keys), not pointers in application memory. SQL is declarative: you say what you want, optimiser picks how. Indexes trade write cost for read speed.",
        ],
      },
      {
        title: "Normal forms without memorisation only",
        paragraphs: [
          "1NF: atomic cells, no repeating groups. 2NF: no partial dependency on composite key. 3NF: no non-key depends on non-key. Denormalise for read-heavy analytics with documented redundancy.",
        ],
      },
      {
        title: "Concurrency",
        paragraphs: [
          "Two transactions updating same row need isolation. Lost update, dirty read, phantom read are exam concepts. Default isolation in PostgreSQL is usually READ COMMITTED; know why transfer uses explicit transaction.",
        ],
      },
      {
        title: "App integration patterns",
        bullets: [
          "Repository pattern hides SQL behind interface.",
          "Migration tools version schema.",
          "Connection pooling in production.",
          "Never string-concatenate user input into SQL.",
        ],
      },
    ],
  });

  afterLessons("valgfag", {
    title: "Core subject guide: electives completely",
    subsections: [
      {
        title: "Entrepreneurship deep core",
        paragraphs: [
          "Entrepreneurship teaches hypothesis-driven business building. Customer segment must be specific enough to find people this week. Value proposition states outcome. Channels reach customers. Revenue model names who pays. Cost structure prevents fantasy margins. Lean Startup adds build-measure-learn loops: smallest experiment to kill bad ideas cheaply.",
        ],
        bullets: [
          "Problem interview before solution pitch.",
          "MVP is experiment, not miniature full product.",
          "Pivot when evidence contradicts hypothesis.",
          "Intellectual property and contracts (basic awareness).",
        ],
      },
      {
        title: "AI + HCI deep core",
        paragraphs: [
          "Machine learning components are uncertain. Interfaces must communicate uncertainty, support correction, and avoid automation bias. Amershi guidelines give actionable patterns. EU AI Act categorises risk; high-risk systems face stricter obligations. Evaluation must include wrong predictions, not only accuracy on benchmark.",
        ],
        bullets: [
          "Explainability vs transparency (show data vs show model).",
          "Human-in-the-loop for high-stakes decisions.",
          "Dataset bias and representativeness.",
          "Design for opt-out and manual fallback.",
        ],
      },
      {
        title: "Choosing and integrating elective",
        paragraphs: [
          "Pick entrepreneurship if you might found or join early startup and need business vocabulary. Pick AI+HCI if thesis or job touches ML products. Write one elective-informed section in semester 3 report linking course reading to a design or business decision in main project.",
        ],
      },
    ],
  });

  afterLessons("dsnidafk412", {
    title: "Core subject guide: master's thesis completely",
    subsections: [
      {
        title: "Thesis is not a long project report",
        paragraphs: [
          "Project report proves you can deliver system with team. Thesis proves you can formulate knowledge gap, select method, execute independently, and argue contribution within limits. Literature share is larger; originality bar higher.",
        ],
      },
      {
        title: "Contribution types unpacked",
        bullets: [
          "<strong>Empirical</strong>: new data about phenomena.",
          "<strong>Artefact</strong>: new system + evaluation insight.",
          "<strong>Conceptual</strong>: framework synthesising literature (harder alone).",
          "<strong>Methodological</strong>: new protocol or replication (rarer at MSc).",
        ],
      },
      {
        title: "Supervision and milestones",
        paragraphs: [
          "Agree milestone dates in writing. Send drafts with specific questions. If supervisor silent, escalate politely via programme rules. Keep research log weekly: what read, what tried, what failed.",
        ],
      },
      {
        title: "Defence preparation",
        paragraphs: [
          "Anticipate attacks on method (\"why not survey?\") and scope (\"why only Denmark?\"). Answer with trade-offs, not defensiveness. Know one related paper deeply. Demo only if reliable.",
        ],
      },
      {
        title: "Ethics and data management",
        paragraphs: [
          "Personal data: GDPR, secure storage, deletion after project. Interview data: anonymisation, transcription accuracy. Open science: consider what can be shared without violating privacy.",
        ],
      },
    ],
  });
})();
