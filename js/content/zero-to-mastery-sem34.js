/**
 * From zero to mastery: Semester 3–4 modules.
 */
(function () {
  const S = window.CHAPTER_SECTIONS;
  if (!S) return;

  function prepend(id, ...sections) {
    if (!S[id]) S[id] = [];
    S[id] = [...sections, ...S[id]];
  }

  prepend("dsndadk311",
    {
      title: "From zero (1/4): What is the semester 3 development project?",
      paragraphs: [
        "Semester 3 development track (15 ECTS, external exam) is a <strong>larger interactive system</strong> than semester 2: typically <strong>frontend + backend + database</strong>, team workflow, and deployment you can demo reliably. Data must survive refresh and server restart.",
        "You apply Databaseudvikling (SQL, persistence), Agil Software Engineering (sprints, tests, retros), and everything from semesters 1–2. Think small startup MVP or internal tool a company would pilot, not a homework exercise.",
        "Alternative track is DSNDADK321 (theory/research); you choose one. Development track graduates as someone who can ship integrated systems.",
      ],
    },
    {
      title: "From zero (2/4): Full-stack concepts you must understand",
      subsections: [
        {
          title: "Client–server",
          paragraphs: [
            "Browser or app (client) sends HTTP requests; server responds with data or HTML. Server holds business rules and talks to database. Never trust the client for security.",
          ],
        },
        {
          title: "API",
          paragraphs: [
            "Contract between frontend and backend: GET /users/42 returns JSON. REST is a common style (resources, HTTP verbs). Fielding's dissertation is the academic reference; practically, use consistent URLs and status codes.",
          ],
        },
        {
          title: "Persistence",
          paragraphs: [
            "PostgreSQL/MySQL/SQLite stores users, orders, etc. ORM (Prisma, Hibernate) maps tables to objects; you still need SQL for debugging.",
          ],
        },
        {
          title: "Authentication & authorisation",
          paragraphs: [
            "Auth: who are you? (login). Authorisation: what may you do? (roles). Sessions or JWT; passwords hashed; OWASP checklist for exams.",
          ],
        },
        {
          title: "Architecture documentation",
          paragraphs: [
            "C4 or layered diagram: context (users + system), containers (web app, API, DB), components. Examiners want to see deliberate structure.",
          ],
        },
      ],
    },
    {
      title: "From zero (3/4): Team project rhythm",
      steps: [
        "Sprint 0: repo, CI, env setup, architecture sketch, DB schema v1.",
        "Sprint 1: auth + one core entity CRUD end-to-end.",
        "Sprint 2: main user journeys + integration tests.",
        "Sprint 3: polish, security pass, performance smoke test.",
        "Sprint 4: usability fix, deployment, report, demo rehearsal.",
        "Every sprint: review demo, retrospective, updated backlog.",
      ],
    },
    {
      title: "From zero (4/4): External exam bar",
      bullets: [
        "Demo after server restart: data still there.",
        "Explain schema: tables, keys, one JOIN query you use.",
        "Explain one security decision (password hash, parameterised SQL).",
        "Show Git history and test run in CI.",
        "One user-tested change from semester 2 carried forward or new test.",
      ],
    },
  );

  prepend("dsndadk321",
    {
      title: "From zero (1/4): What is the theory/research track?",
      paragraphs: [
        "Not everyone wants to ship a product in semester 3. The <strong>theory track</strong> (15 ECTS, external exam) focuses on <strong>investigating</strong> interactive systems: literature review, empirical method, analysis, and argument. You may build a small prototype to study behaviour, but the contribution is <strong>knowledge</strong>, not a polished launch.",
        "Choose this if you prefer interviews, experiments, and writing toward a thesis. Choose development track if you prefer integration engineering. Both are valid paths to Kandidatspeciale.",
      ],
    },
    {
      title: "From zero (2/4): Research core (from zero)",
      subsections: [
        {
          title: "Research question",
          paragraphs: [
            "One clear question: \"How do nurses use tablets during ward rounds?\" not \"Technology in hospitals.\" Sub-questions map to results sections.",
          ],
        },
        {
          title: "Literature review",
          paragraphs: [
            "Synthesise prior work by theme; show gap your study fills. Not a list of summaries.",
          ],
        },
        {
          title: "Method",
          paragraphs: [
            "Qualitative (interviews, thematic analysis), quantitative (tasks, timing, surveys), or mixed. Method must fit question.",
          ],
        },
        {
          title: "Validity",
          paragraphs: [
            "Internal: does design answer question? External: generalise to whom? Construct: measuring what you claim? Report limitations honestly.",
          ],
        },
      ],
    },
    {
      title: "From zero (3/4): Project phases",
      steps: [
        "Weeks 1–3: RQ, search strategy, annotated bibliography.",
        "Weeks 4–5: Method protocol, ethics/consent if people involved.",
        "Weeks 6–10: Data collection (interviews/logs/prototype study).",
        "Weeks 11–14: Analysis (themes, stats, figures).",
        "Weeks 15–18: Report, discussion, defence prep.",
      ],
    },
    {
      title: "From zero (4/4): Mastery signs",
      bullets: [
        "State contribution in one sentence: \"We show X about Y in context Z.\"",
        "Defend why interview was better than survey for your RQ.",
        "Explain saturation or sample size limits without overclaiming.",
        "Relate findings to 3+ papers in related work.",
        "Acknowledge what you cannot conclude from your data.",
      ],
    },
  );

  prepend("dsnidak312",
    {
      title: "From zero (1/4): What is agile software engineering?",
      paragraphs: [
        "Writing code is solo-friendly; real products need teams, changing requirements, and deadlines. <strong>Agil Software Engineering</strong> (5 ECTS, external exam) teaches how professional teams deliver: user stories, sprints, testing, retrospectives, and when agile beats plan-driven methods.",
        "Agile does not mean chaos. It means <strong>short feedback loops</strong>: build a slice, show users, adjust. You will use these practices in the semester 3 project and in industry (Scrum is common in Denmark).",
      ],
    },
    {
      title: "From zero (2/4): Scrum in plain language",
      table: {
        headers: ["Term", "Meaning", "Student mistake"],
        rows: [
          ["Product backlog", "Ordered todo list for whole product", "Unordered wish list nobody prioritises"],
          ["Sprint backlog", "Commitment for this 2-week sprint", "Adding work mid-sprint without trade-off"],
          ["Increment", "Done, usable slice at sprint end", "\"Almost done\" with no tests"],
          ["Daily Scrum", "15 min sync, not status meeting to manager", "Long technical debate"],
          ["Definition of Done", "Checklist before story is finished", "Different for each developer secretly"],
          ["Retrospective", "Improve how team works", "Skipped because \"no time\""],
        ],
      },
    },
    {
      title: "From zero (3/4): Testing as engineering discipline",
      paragraphs: [
        "Test pyramid: many fast unit tests, fewer integration tests, few end-to-end tests. Tests are documentation of expected behaviour. CI runs them on every push. \"We will test at the end\" fails under exam pressure.",
      ],
      bullets: [
        "Unit: one function/class in isolation (mock dependencies).",
        "Integration: API + database together.",
        "Acceptance: user story verified end-to-end.",
        "Regression: old bugs stay fixed when you add features.",
      ],
    },
    {
      title: "From zero (4/4): Oral exam readiness",
      bullets: [
        "Explain Agile Manifesto values without reading slides.",
        "Write a user story with acceptance criteria and Definition of Done.",
        "Explain Conway's Law with your group structure example.",
        "Describe one retrospective action your team actually took.",
        "Compare when you would use Scrum vs more plan-driven approach.",
      ],
    },
  );

  prepend("dsnidak314",
    {
      title: "From zero (1/4): What is a database?",
      paragraphs: [
        "Variables in a program vanish when the program stops. A <strong>database</strong> is software that stores data on disk so it survives restarts, can be queried by many users at once, and enforces rules (no duplicate emails, orders must reference real users).",
        "This course (5 ECTS, pass/fail) teaches the <strong>relational model</strong>: tables, rows, columns, keys, SQL, normalisation, transactions. Almost every semester 3 app needs this. Banks, universities, and shops run on relational DBs (often PostgreSQL, MySQL, SQL Server).",
      ],
    },
    {
      title: "From zero (2/4): Relational concepts (learn in this order)",
      steps: [
        "<strong>Table</strong>: one kind of entity (users, products).",
        "<strong>Row</strong>: one record (one user).",
        "<strong>Column</strong>: one attribute (email).",
        "<strong>Primary key</strong>: unique row identifier (user_id).",
        "<strong>Foreign key</strong>: link to another table (order.user_id → users.id).",
        "<strong>SQL SELECT</strong>: ask questions; JOIN combines tables.",
        "<strong>Transaction</strong>: group changes all succeed or all rollback (ACID).",
        "<strong>Normalisation</strong>: avoid storing same fact twice inconsistently.",
      ],
    },
    {
      title: "From zero (3/4): SQL you must write by hand",
      code: {
        lang: "sql",
        caption: "Read top to bottom: filter, join, aggregate, sort.",
        source: `
-- Who ordered more than once in 2025?
SELECT u.name, COUNT(o.id) AS order_count
FROM users u
JOIN orders o ON o.user_id = u.id
WHERE o.created_at >= '2025-01-01'
GROUP BY u.id, u.name
HAVING COUNT(o.id) > 1
ORDER BY order_count DESC;
`.trim(),
      },
      paragraphs: [
        "Practice: SELECT with WHERE; INSERT; UPDATE with WHERE (never update all rows by accident); DELETE with WHERE; JOIN two tables; GROUP BY + HAVING. Use PostgreSQL locally or DB Fiddle.",
      ],
    },
    {
      title: "From zero (4/4): Mastery checklist",
      bullets: [
        "Draw ER diagram for a shop (users, products, orders, order_lines) and convert to CREATE TABLE.",
        "Explain why email should not repeat in users table.",
        "Explain ACID with money transfer example.",
        "Spot SQL injection risk in string concatenation; fix with parameters.",
        "Explain when you might denormalise for read speed and what you risk.",
      ],
    },
  );

  prepend("valgfag",
    {
      title: "From zero (1/4): What is the elective?",
      paragraphs: [
        "Semester 3 includes one <strong>5 ECTS valgfag</strong> (elective). Typical options: <strong>Entreprenørskab</strong> (entrepreneurship) or <strong>Brugercentreret interaktion med kunstig intelligens</strong> (AI + HCI). Check the current studieordning for exact titles and codes.",
        "The elective does not replace programming. It adds a lens: either <strong>business and startups</strong> or <strong>designing AI systems people can trust</strong>. Pick based on thesis direction and career interest.",
      ],
    },
    {
      title: "From zero (2/4): Two tracks explained",
      subsections: [
        {
          title: "Entrepreneurship track",
          paragraphs: [
            "Learn Business Model Canvas, value proposition, customer segments, channels, revenue. Lean Startup: build-measure-learn, MVP experiments, pivot vs persevere. Useful for product roles and founding startups.",
          ],
        },
        {
          title: "AI + HCI track",
          paragraphs: [
            "ML accuracy is not enough. Users need appropriate trust, explainability, control when AI errs. Covers guidelines for human-AI interaction, ethics intro, EU AI Act awareness. Extends HCI methods to probabilistic systems.",
          ],
        },
      ],
    },
    {
      title: "From zero (3/4): Choose wisely",
      table: {
        headers: ["Pick entrepreneurship if…", "Pick AI + HCI if…"],
        rows: [
          ["You want product/business skills", "Your project uses ML, chat, or recommendations"],
          ["You might start a company", "Thesis on trust, transparency, or AI UX"],
          ["You like market validation", "You like evaluation studies with AI components"],
        ],
      },
    },
    {
      title: "From zero (4/4): Mastery for either track",
      bullets: [
        "Entrepreneurship: fill a Canvas for your semester project idea; name payer and channel.",
        "AI + HCI: design UI for wrong prediction + user override; cite Amershi guidelines.",
        "Both: connect elective insight to main semester 3 project in report.",
      ],
    },
  );

  prepend("dsnidafk412",
    {
      title: "From zero (1/4): What is the master's thesis?",
      paragraphs: [
        "The <strong>Kandidatspeciale</strong> (30 ECTS, ~one semester full-time) is independent work: you choose a problem in HCI and application development, study literature, apply a method, produce results (study and/or artefact), write ~80–120 pages, and defend orally before external examiners.",
        "No weekly assignments. You manage scope with a supervisor. Semester 3 project is the runway: reuse domain knowledge, not copy-paste. The thesis must show <strong>master's-level</strong> reasoning: clear question, justified method, bounded claims.",
      ],
    },
    {
      title: "From zero (2/4): Thesis anatomy",
      subsections: [
        {
          title: "Introduction",
          paragraphs: ["Problem, motivation, RQ, scope, contribution preview. Reader knows why anyone should care."],
        },
        {
          title: "Related work",
          paragraphs: ["Themed synthesis, not annotated list. Gap you fill."],
        },
        {
          title: "Method",
          paragraphs: ["Design, participants/data, instruments, analysis, ethics (GDPR if people)."],
        },
        {
          title: "Results / artefact",
          paragraphs: ["Evidence aligned to RQ. Figures, tables, quotes, or system evaluation."],
        },
        {
          title: "Discussion & conclusion",
          paragraphs: ["Answer RQ, implications, limitations, future work. No new claims in conclusion."],
        },
      ],
    },
    {
      title: "From zero (3/4): Month-by-month survival guide",
      table: {
        headers: ["Month", "Focus", "Deliverable"],
        rows: [
          ["1", "Scope + literature search", "RQ draft, reading list"],
          ["2", "Related work + method", "Chapter 2 draft, ethics approval if needed"],
          ["3", "Build / collect data", "Working prototype or dataset"],
          ["4", "Analysis + full draft", "Draft to supervisor"],
          ["5", "Revise + defence", "Final PDF, demo, presentation"],
        ],
      },
    },
    {
      title: "From zero (4/4): You are thesis-ready when…",
      bullets: [
        "One-sentence contribution you can defend for 10 minutes.",
        "Three papers you can discuss in depth without notes.",
        "Clear answer to \"what can you not claim?\"",
        "Demo or data appendix reproducible from README.",
        "Supervisor feedback incorporated on method, not only grammar.",
      ],
    },
  );
})();
