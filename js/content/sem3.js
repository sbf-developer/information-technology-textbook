(function () {
  const S = (window.CHAPTER_SECTIONS = window.CHAPTER_SECTIONS || {});

  S.dsndadk311 = [
    {
      title: "Complex interactive systems (development track)",
      paragraphs: [
        "Full-stack sounds intimidating. It only means: what users see, the server that decides rules, and the database that remembers data. Three layers, talking over the network.",
        "<strong>Udvikling af interaktive systemer</strong> (15 ECTS, track A) is a capstone-style project before the thesis. You deliver a <strong>complex interactive system</strong>, typically client–server or full-stack, integrating database, backend API, frontend UI, and documented process (agile, reviews, tests). External examination: demo under scrutiny, architecture questions, teamwork reflection.",
        "Choose this track if your strength and career aim lean toward building and shipping systems. Track B (DSNDADK321) emphasises theoretical/empirical investigation instead.",
      ],
    },
    {
      title: "Reference architecture",
      table: {
        headers: ["Layer", "Responsibility", "Technologies (examples)"],
        rows: [
          ["Presentation", "UI, routing, client validation", "React, Vue, vanilla JS + HTML"],
          ["Application / API", "Use cases, auth, orchestration", "Node/Express, Spring, ASP.NET"],
          ["Domain", "Business rules, entities", "Plain classes, services"],
          ["Persistence", "Storage, transactions", "PostgreSQL, SQLite + ORM"],
        ],
      },
    },
    {
      title: "Engineering practices at scale",
      bullets: [
        "Feature branches + pull requests; definition of done includes tests and docs",
        "Environment separation: dev / staging / prod configuration",
        "API contract first (OpenAPI) when frontend and backend split across teammates",
        "Logging and error handling: demos fail; show you can diagnose",
        "Security basics: authn/authz, HTTPS, secrets not in Git",
      ],
    },
    {
      title: "Code example: REST endpoint + JSON",
      code: {
        lang: "javascript",
        caption: "Minimal Express route: pattern for backend layer in many semester-3 projects.",
        source: `
import express from "express";
const app = express();
app.use(express.json());

const items = new Map(); // replace with DB in real project

app.get("/api/items/:id", (req, res) => {
  const item = items.get(req.params.id);
  if (!item) return res.status(404).json({ error: "Not found" });
  res.json(item);
});

app.post("/api/items", (req, res) => {
  const id = crypto.randomUUID();
  const item = { id, ...req.body };
  items.set(id, item);
  res.status(201).json(item);
});

app.listen(3000);
`.trim(),
      },
    },
    {
      title: "Deployment and demo readiness",
      paragraphs: [
        "Reproducible deployment (Docker, platform-as-a-service, or documented install script) reduces exam-day risk. Seed database with realistic data. Prepare a fallback video only as backup; live demo is preferred.",
      ],
    },
  ];

  S.dsndadk321 = [
    {
      title: "Theoretical investigation track",
      paragraphs: [
        "Research here does not mean you must become a professor. It means: ask a clear question, find what others wrote, collect evidence, and argue an answer honestly.",
        "<strong>Teoretisk undersøgelse af interaktive systemer</strong> (15 ECTS, track B) focuses on <strong>research questions</strong> about interactive systems: literature review, chosen method, empirical or analytical work, and argued contribution. The artefact may be a probe, prototype for study, or analysis framework, not necessarily a production product.",
        "Choose this track if you aim at thesis-style work, HCI research, or roles heavy on analysis and user studies.",
      ],
    },
    {
      title: "Research design building blocks",
      bullets: [
        "<strong>Problem & gap</strong>: what is unknown or contested in the literature?",
        "<strong>Research question</strong>: precise, answerable within one semester",
        "<strong>Method</strong>: qualitative (interviews, thematic analysis), quantitative (experiment, survey), or mixed",
        "<strong>Validity</strong>: internal (design controls bias), external (generalisation limits)",
        "<strong>Ethics</strong>: consent, data storage, anonymisation",
      ],
    },
    {
      title: "Validity (exam favourites)",
      table: {
        headers: ["Type", "Question", "Threat example"],
        rows: [
          ["Internal", "Does the study support causal/explanatory claims?", "Confounding variables, leading questions"],
          ["External", "To whom/settings does it generalise?", "Student-only sample, lab task unlike real work"],
          ["Construct", "Do measures match concepts?", "SUS alone for \"engagement\""],
          ["Reliability", "Would repetition give similar results?", "Small n, coder disagreement in qualitative coding"],
        ],
      },
    },
    {
      title: "Reporting structure",
      paragraphs: [
        "Follow IMRaD-like structure adapted to AAU PBL: introduction (problem, RQ), theory (concepts, related work), method (protocol, participants, analysis plan), results, discussion (answer RQ, limitations, implications). Tie every claim to evidence: screenshots, quotes, statistics, or traced observations.",
      ],
      callout:
        "A thin literature review is the most common weakness. Synthesise papers (compare methods and findings), don't only summarise one paragraph per source.",
    },
  ];

  S.dsnidak312 = [
    {
      title: "Software engineering and agile methods",
      paragraphs: [
        "You can write good code alone and still fail in a team if nobody agrees what to build next week. This course is the \"how we work together\" layer.",
        "Agil Software Engineering (5 ECTS, external exam) covers how teams deliver software reliably: requirements, planning, testing, quality, and improvement. You contrast <strong>plan-driven</strong> (fixed scope, phases, heavy upfront design) with <strong>agile</strong> ( iterative delivery, responding to change). Neither is universally \"best\"; context (regulation, team size, requirement stability) drives choice.",
      ],
    },
    {
      title: "Agile Manifesto (2001): values",
      bullets: [
        "Individuals and interactions over processes and tools",
        "Working software over comprehensive documentation",
        "Customer collaboration over contract negotiation",
        "Responding to change over following a plan",
      ],
      paragraphs: [
        "Note: the manifesto says \"over\", not \"instead of\". Documentation and process still matter; priority shifts toward delivery and feedback.",
      ],
    },
    {
      title: "Scrum framework",
      table: {
        headers: ["Element", "Purpose"],
        rows: [
          ["Product backlog", "Ordered list of all known work"],
          ["Sprint backlog", "Commitment for current sprint"],
          ["Sprint (timebox)", "1–4 weeks of incremental delivery"],
          ["Daily Scrum", "15 min sync: plan next 24h, surface blockers"],
          ["Sprint review", "Demo to stakeholders, gather feedback"],
          ["Retrospective", "Improve process: start/stop/continue"],
        ],
      },
    },
    {
      title: "User stories and Definition of Done",
      code: {
        lang: "text",
        caption: "INVEST-style user story + explicit DoD reduces \"almost done\" features.",
        source: `
As a library member, I want to renew a loan online
so that I avoid late fees without visiting the branch.

Acceptance criteria:
- Shows active loans with due dates
- Renews only if no holds and under renewal limit
- Confirmation email within 60 seconds

Definition of Done:
- Code reviewed, unit + integration tests pass
- Documented in README, deployed to staging
`.trim(),
      },
    },
    {
      title: "Testing pyramid",
      bullets: [
        "<strong>Unit</strong>: fast, many; isolate functions/classes",
        "<strong>Integration</strong>: modules together (API + DB)",
        "<strong>Acceptance / E2E</strong>: few, slow; whole user journeys",
        "Shift left: catch defects early; automate regression before demos",
      ],
    },
    {
      title: "Team dynamics",
      paragraphs: [
        "Brooks's Law reminds us that adding people to a late project can slow it further (onboarding, communication overhead). Sustainable pace, clear roles (Scrum Master, Product Owner, Developers), and psychological safety in retros improve outcomes more than tooling alone.",
      ],
    },
  ];

  S.dsnidak314 = [
    {
      title: "Relational databases",
      paragraphs: [
        "Without a database, your app forgets everything when it restarts. A database is organised storage with rules so data stays consistent when many people use the system.",
        "Databaseudvikling (5 ECTS, pass/fail) introduces the <strong>relational model</strong>: data in tables (relations), linked by keys, queried with SQL, protected by integrity constraints and transactions. Applications treat the DB as source of truth for persistent state (users, orders, simulations saved, etc.).",
      ],
    },
    {
      title: "Entity-relationship → tables",
      bullets: [
        "Entity → table; attribute → column",
        "1:N relationship → foreign key on \"many\" side",
        "M:N → junction/associative table with two FKs",
        "Choose primary keys: surrogate (id) vs. natural (ISBN); consistency matters",
      ],
    },
    {
      title: "Normalisation (why it matters)",
      paragraphs: [
        "Normal forms reduce redundancy and update anomalies. <strong>1NF</strong>: atomic values. <strong>2NF</strong>: no partial dependency on composite key. <strong>3NF</strong>: no transitive dependency (non-key → non-key). Denormalise deliberately for read performance, but know what you trade away.",
      ],
    },
    {
      title: "SQL essentials",
      code: {
        lang: "sql",
        caption: "Join + aggregation: patterns used in almost every project report appendix.",
        source: `
SELECT u.name, COUNT(o.id) AS order_count
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
WHERE u.created_at >= '2025-01-01'
GROUP BY u.id, u.name
HAVING COUNT(o.id) > 0
ORDER BY order_count DESC;
`.trim(),
      },
    },
    {
      title: "Transactions and ACID",
      table: {
        headers: ["Property", "Meaning"],
        rows: [
          ["Atomicity", "All or nothing: no half-applied transfer"],
          ["Consistency", "Constraints hold before and after"],
          ["Isolation", "Concurrent transactions don't corrupt each other"],
          ["Durability", "Committed data survives crash"],
        ],
      },
    },
    {
      title: "Application integration",
      code: {
        lang: "javascript",
        caption: "Parameterised query: never concatenate user input into SQL.",
        source: `
// pg library example
const result = await pool.query(
  "SELECT * FROM items WHERE owner_id = $1 AND status = $2",
  [userId, "active"]
);
`.trim(),
      },
      callout:
        "ORMs (Prisma, Hibernate, EF Core) speed development but you still need to understand SQL for debugging slow queries and writing reports.",
    },
  ];

  S.valgfag = [
    {
      title: "Elective module (5 ECTS)",
      paragraphs: [
        "You choose one specialisation tilt for semester 3. Neither option replaces coding; they add either business thinking or AI-and-users thinking.",
        "Semester 3 includes one <strong>valgfag</strong>. Typical options in the curriculum: <strong>Entreprenørskab</strong> (DSNDADFK311) or <strong>Brugercentreret interaktion med kunstig intelligens</strong> (DSNDADFK333). Confirm current offerings in the studieordning, as titles and codes can be updated.",
      ],
    },
    {
      title: "Track A: Entreprenørskab",
      bullets: [
        "<strong>Business Model Canvas</strong>: nine blocks: value proposition, segments, channels, revenue, costs, etc.",
        "<strong>Problem–solution fit</strong> before scaling: interviews beat assumptions",
        "<strong>MVP & pivot</strong>: learn cheaply; metrics over vanity",
        "<strong>Go-to-market</strong>: who pays, why now, what moat exists",
      ],
      callout:
        "Useful if you might spin a project into a startup or work in product roles. Connect technical choices to customer value, not only cool stack.",
    },
    {
      title: "Track B: AI + HCI",
      bullets: [
        "<strong>Explainability</strong>: users need grounds for AI outputs (especially high-stakes)",
        "<strong>Human-in-the-loop</strong>: when to automate vs. confirm vs. override",
        "<strong>Trust & calibration</strong>: over-trust and automation bias are real risks",
        "<strong>Responsible AI</strong>: fairness, transparency, privacy (intro level)",
      ],
      paragraphs: [
        "Extends DSNIDAK223 into systems with ML components: design for uncertainty, show confidence, allow correction. Evaluation combines usability methods with task performance when AI is wrong.",
      ],
    },
    {
      title: "Choosing between electives",
      table: {
        headers: ["Choose entrepreneurship if…", "Choose AI + HCI if…"],
        rows: [
          ["You care about product/market and business models", "Your thesis/project involves ML, recommender, or chat UI"],
          ["You may found or join an early-stage startup", "You want research-oriented HCI + AI literacy"],
          ["You need canvas/pitch skills for external stakeholders", "You focus on trust, ethics, and interaction design for AI"],
        ],
      },
    },
  ];
})();
