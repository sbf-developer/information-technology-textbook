/**
 * Tutorial depth: Semester 3–4 modules.
 */
(function () {
  const S = window.CHAPTER_SECTIONS;
  if (!S) return;

  function afterFromZero(id, ...sections) {
    if (!S[id]) return;
    const idx = S[id].findIndex((s) => s.title.includes("From zero (4/4)"));
    const at = idx >= 0 ? idx + 1 : S[id].length;
    S[id].splice(at, 0, ...sections);
  }

  afterFromZero("dsndadk311",
    {
      title: "Concept encyclopedia: full-stack development terms",
      table: {
        headers: ["Term", "Definition", "Typical mistake"],
        rows: [
          ["Frontend", "Browser or mobile UI", "Business rules only in JS"],
          ["Backend", "Server logic + API", "No validation on server"],
          ["REST API", "HTTP resources + verbs", "Random URL naming"],
          ["JSON", "Data interchange format", "No schema documentation"],
          ["ORM", "Object-relational mapping", "N+1 query performance blind spot"],
          ["Migration", "Versioned DB schema changes", "Manual SQL on prod only"],
          ["AuthN / AuthZ", "Who you are / what you may do", "Confusing the two"],
          ["Session / JWT", "Stateless vs stateful login", "JWT in localStorage XSS risk"],
          ["CI/CD", "Automated build/test/deploy", "Tests only on laptop"],
          ["Environment", "dev/staging/prod config", "Secrets in Git"],
          ["CORS", "Browser cross-origin rules", "Works in Postman, fails in browser"],
          ["12-factor app", "Cloud-native practices", "Ignoring config parity"],
        ],
      },
    },
    {
      title: "Tutorial walkthrough: build a course planner (reference architecture)",
      paragraphs: [
        "Use this as a mental template for semester 3. You might choose another domain; the layers stay the same.",
      ],
      subsections: [
        {
          title: "Features (MVP)",
          bullets: [
            "Register / login",
            "Create course plan (title, courses, credits)",
            "List and edit plans",
            "Data persists after logout and server restart",
          ],
        },
        {
          title: "Stack example (one of many valid choices)",
          bullets: [
            "Frontend: React or plain HTML/JS",
            "Backend: Node/Express or Java/Spring",
            "DB: PostgreSQL",
            "Auth: session cookie or JWT with httpOnly cookie",
          ],
        },
        {
          title: "Schema (first draft)",
          code: {
            lang: "sql",
            caption: "Users own many plans; plans have many plan_courses.",
            source: `
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE plans (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id),
  title VARCHAR(200) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE plan_courses (
  plan_id INT REFERENCES plans(id) ON DELETE CASCADE,
  course_code VARCHAR(20) NOT NULL,
  credits INT NOT NULL CHECK (credits > 0),
  PRIMARY KEY (plan_id, course_code)
);
`.trim(),
          },
        },
        {
          title: "API sketch",
          bullets: [
            "POST /api/auth/register, POST /api/auth/login",
            "GET /api/plans, POST /api/plans, GET /api/plans/:id",
            "PUT /api/plans/:id, DELETE /api/plans/:id",
            "All plan routes check user owns plan (authorisation)",
          ],
        },
        {
          title: "Sprint plan",
          steps: [
            "Sprint 1: register/login + empty plans list UI",
            "Sprint 2: CRUD plans + DB migrations",
            "Sprint 3: plan_courses + validation + tests",
            "Sprint 4: polish, deploy, usability fixes, report",
          ],
        },
      ],
    },
    {
      title: "Practice: full-stack readiness",
      bullets: [
        "Draw C4 context + container diagram for your project.",
        "Write one integration test: API creates plan, GET returns it.",
        "Explain where password is hashed and where it is never logged.",
        "Demo from fresh git clone on teammate laptop.",
        "Document one OWASP risk you mitigated (injection, XSS, etc.).",
      ],
    },
  );

  afterFromZero("dsndadk321",
    {
      title: "Concept encyclopedia: research terms",
      table: {
        headers: ["Term", "Meaning", "Thesis link"],
        rows: [
          ["Research question (RQ)", "What you answer empirically", "One main RQ"],
          ["Literature gap", "What prior work missed", "Chapter 2 argument"],
          ["Conceptual framework", "Lens for analysis", "Theory section"],
          ["Operationalisation", "Measure abstract concept", "Survey items, codes"],
          ["Coding (qualitative)", "Label segments of data", "Thematic analysis"],
          ["Theme", "Pattern across interviews", "Results section"],
          ["Saturation", "No new themes appearing", "Sample size argument"],
          ["Internal validity", "Design answers RQ", "Method defence"],
          ["External validity", "Generalise to whom?", "Limitations"],
          ["Reliability", "Repeatable measurement", "Inter-rater agreement"],
          ["Informed consent", "Participants agree knowingly", "Ethics appendix"],
          ["Mixed methods", "Qual + quant combined", "Triangulation"],
        ],
      },
    },
    {
      title: "Tutorial: from interest to study (worked example)",
      paragraphs: [
        "<strong>Interest</strong>: students use ChatGPT for assignments.",
        "<strong>Focus</strong>: trust in AI-generated feedback on drafts.",
        "<strong>RQ</strong>: How do first-year students decide whether to accept AI feedback on essay structure?",
        "<strong>Method</strong>: 8 semi-structured interviews, thematic analysis.",
        "<strong>Contribution</strong>: themes about authority, plagiarism fear, and need for explanations.",
        "<strong>Not claiming</strong>: all students everywhere; only this sample in this context.",
      ],
      subsections: [
        {
          title: "Interview guide (excerpt)",
          bullets: [
            "Walk me through the last time you used AI on an assignment.",
            "What made you trust or distrust the suggestion?",
            "What would ideal AI feedback look like?",
          ],
        },
        {
          title: "Analysis steps (Braun & Clarke)",
          steps: [
            "Transcribe; read all transcripts twice.",
            "Code interesting segments.",
            "Group codes into candidate themes.",
            "Review themes against data; define and name.",
            "Write results with quotes (anonymised).",
          ],
        },
      ],
    },
    {
      title: "Practice: research drills",
      bullets: [
        "Write one RQ and mark it good/bad with reasons.",
        "Draft 5 interview questions without leading language.",
        "Create a simple codebook with 3 codes and definitions.",
        "Write limitations paragraph for n=8 interviews.",
      ],
    },
  );

  afterFromZero("dsnidak312",
    {
      title: "Concept encyclopedia: agile & SE process terms",
      table: {
        headers: ["Term", "Definition", "Team use"],
        rows: [
          ["User story", "User-valued slice of work", "Backlog item"],
          ["Epic", "Large story split later", "Semester theme"],
          ["INVEST", "Good story checklist", "Independent, testable…"],
          ["Velocity", "Story points done per sprint", "Planning aid not KPI weapon"],
          ["Burndown", "Remaining work over sprint", "Are we on track?"],
          ["Technical debt", "Deferred quality cost", "Retrospective topic"],
          ["Refactoring", "Improve code without behaviour change", "Continuous"],
          ["Pair programming", "Two at one keyboard", "Knowledge sharing"],
          ["Code review", "Peer check before merge", "Quality gate"],
          ["CI", "Automated build/test on commit", "GitHub Actions"],
          ["XP", "Extreme Programming practices", "TDD, CI, on-site customer"],
          ["Plan-driven", "Phased, fixed scope emphasis", "Regulated domains"],
        ],
      },
    },
    {
      title: "Tutorial: plan two sprints for a 4-person team",
      paragraphs: [
        "Product: internal tool to log group meeting decisions. Backlog already has: login, create meeting, add decision, assign owner, email reminder, export PDF.",
      ],
      subsections: [
        {
          title: "Sprint 1 (2 weeks) — goal: log one decision",
          bullets: [
            "Stories: login (3 pts), create meeting (5 pts), add decision (5 pts).",
            "DoD: code reviewed, unit tests, on staging, README updated.",
            "Not in sprint: PDF, email (defer).",
          ],
        },
        {
          title: "Sprint 2 — goal: assign and list",
          bullets: [
            "Stories: assign owner (3 pts), filter by owner (3 pts), basic export CSV (5 pts).",
            "Retro action from sprint 1: daily standup at fixed time.",
          ],
        },
      ],
      code: {
        lang: "text",
        caption: "Example user story with acceptance tests spelled out.",
        source: `
Story: As a group member, I want to assign an owner to a decision
so that everyone knows who follows up.

Acceptance:
- Dropdown of group members on decision row
- Owner saved in database
- Owner visible on meeting summary page
- Cannot assign non-member

DoD: unit test for assign API, reviewed, deployed staging
`.trim(),
      },
    },
    {
      title: "Practice: agile drills",
      bullets: [
        "Write 3 user stories from your semester 3 backlog with INVEST check.",
        "Facilitate a 15-minute retro: start/stop/continue.",
        "Explain test pyramid with your project's actual test counts.",
        "Describe one time velocity should NOT be compared between teams.",
      ],
    },
  );

  afterFromZero("dsnidak314",
    {
      title: "Concept encyclopedia: database terms",
      table: {
        headers: ["Term", "Definition", "Example"],
        rows: [
          ["Relation / table", "Rows of same structure", "users"],
          ["Tuple / row", "One record", "one user"],
          ["Attribute / column", "One field", "email"],
          ["Primary key (PK)", "Unique row id", "user id"],
          ["Foreign key (FK)", "Reference to other table", "order.user_id"],
          ["JOIN", "Combine tables on key", "users + orders"],
          ["Cartesian product", "All row pairs", "Accidental without ON"],
          ["Normalisation", "Reduce redundancy", "1NF, 2NF, 3NF"],
          ["Transaction", "Atomic unit of work", "Transfer A→B"],
          ["ACID", "Transaction guarantees", "Banking"],
          ["Index", "Speed lookup", "On email column"],
          ["View", "Saved query", "active_users"],
          ["ORM", "Map tables to objects", "Prisma, Hibernate"],
        ],
      },
    },
    {
      title: "Tutorial: design schema for a blog (ER → SQL)",
      subsections: [
        {
          title: "Requirements",
          bullets: [
            "Users write posts; posts have title, body, published date.",
            "Posts have many tags; tags reused across posts (many-to-many).",
            "Comments on posts; comment has author name and text (guest comments allowed).",
          ],
        },
        {
          title: "ER decisions",
          bullets: [
            "users (id, email, display_name)",
            "posts (id, user_id FK, title, body, published_at)",
            "tags (id, name unique)",
            "post_tags (post_id, tag_id) junction",
            "comments (id, post_id FK, author_name, body, created_at)",
          ],
        },
        {
          title: "Queries to practice",
          code: {
            lang: "sql",
            caption: "Three queries every project needs.",
            source: `
-- Latest 10 published posts with author name
SELECT p.title, u.display_name, p.published_at
FROM posts p
JOIN users u ON u.id = p.user_id
WHERE p.published_at IS NOT NULL
ORDER BY p.published_at DESC
LIMIT 10;

-- Tags for one post
SELECT t.name
FROM tags t
JOIN post_tags pt ON pt.tag_id = t.id
WHERE pt.post_id = 42;

-- Comment count per post
SELECT post_id, COUNT(*) AS comments
FROM comments
GROUP BY post_id;
`.trim(),
          },
        },
      ],
    },
    {
      title: "Tutorial: transaction failure story",
      paragraphs: [
        "Transfer 100 from account A to B: UPDATE A SET balance = balance - 100; UPDATE B SET balance = balance + 100. If power fails between statements, money vanishes. Wrap in BEGIN … COMMIT so both apply or neither. Isolation level matters when two transfers run concurrently; exam level: know why transactions exist.",
      ],
    },
    {
      title: "Practice: SQL drills",
      bullets: [
        "Write CREATE TABLE for blog schema above.",
        "Insert 3 users, 5 posts, link tags.",
        "Find users with zero posts (LEFT JOIN + WHERE NULL).",
        "Explain anomaly if author name is duplicated on every post row.",
        "Rewrite unsafe query: \"SELECT * FROM users WHERE email = '\" + input + \"'\"",
      ],
    },
  );

  afterFromZero("valgfag",
    {
      title: "Track A deep dive: entrepreneurship",
      subsections: [
        {
          title: "Business Model Canvas (block by block)",
          paragraphs: [
            "<strong>Customer segments</strong>: who exactly? \"Small Danish cafés with 1–3 staff\" beats \"restaurants.\"",
            "<strong>Value proposition</strong>: outcome, not feature. \"Fewer no-shows\" not \"has SMS API.\"",
            "<strong>Channels</strong>: how they hear and buy (Instagram, POS vendor partnership).",
            "<strong>Customer relationships</strong>: self-service vs dedicated support.",
            "<strong>Revenue streams</strong>: subscription, per-seat, transaction fee; who pays.",
            "<strong>Key resources</strong>: dev team, brand, data, partnerships.",
            "<strong>Key activities</strong>: build, sell, support, comply.",
            "<strong>Key partners</strong>: payment provider, distributors.",
            "<strong>Cost structure</strong>: hosting, salaries, marketing, legal.",
          ],
        },
        {
          title: "Lean validation experiments",
          bullets: [
            "Landing page + waitlist before building features.",
            "Wizard-of-Oz: human behind \"automated\" demo.",
            "Concierge MVP: manual service for 5 customers to learn workflow.",
            "Measure conversion, not vanity downloads.",
          ],
        },
      ],
    },
    {
      title: "Track B deep dive: human-centred AI",
      subsections: [
        {
          title: "When AI fails (design for it)",
          bullets: [
            "Show confidence or \"I am not sure\" when appropriate.",
            "Let users edit or reject suggestions; log corrections.",
            "Never hide that output is AI-generated in high-stakes contexts.",
            "Fallback when model offline: manual path still works.",
          ],
        },
        {
          title: "Amershi guidelines (summary)",
          table: {
            headers: ["Guideline idea", "UI implication"],
            rows: [
              ["Scope capability", "Onboarding explains what AI can/cannot do"],
              ["Show context", "Display inputs model used"],
              ["Support correction", "One-click fix flow"],
              ["Learn from user", "Improve from edits where ethical"],
              ["Global controls", "Turn off AI features"],
            ],
          },
        },
      ],
    },
    {
      title: "Practice: elective application",
      bullets: [
        "Entrepreneurship: Canvas for your semester 3 app; identify riskiest assumption.",
        "AI+HCI: sketch UI for wrong recommendation + user correction.",
        "Both: one paragraph in project report linking elective to design choice.",
      ],
    },
  );

  afterFromZero("dsnidafk412",
    {
      title: "Concept encyclopedia: thesis terms",
      table: {
        headers: ["Term", "Meaning", "Where in thesis"],
        rows: [
          ["Contribution", "What new thing you offer", "Intro + conclusion"],
          ["Related work", "Prior research synthesis", "Chapter 2"],
          ["Gap", "Missing knowledge you fill", "End of related work"],
          ["Methodology", "How you produce knowledge", "Method chapter"],
          ["Empirical material", "Data you collected", "Results"],
          ["Analysis", "Structured interpretation", "Results/discussion"],
          ["Limitations", "What constrains claims", "Discussion"],
          ["Design science", "Build + evaluate artefact", "Alternative thesis type"],
          ["Triangulation", "Multiple sources/methods", "Stronger validity"],
          ["Anonymisation", "Remove identifying details", "Ethics"],
          ["Reproducibility", "Others could repeat", "Appendix, open data"],
        ],
      },
    },
    {
      title: "Tutorial: thesis types in this programme",
      subsections: [
        {
          title: "Type A: Empirical HCI study",
          paragraphs: [
            "RQ about people using systems; interviews/experiments; contribution = findings + implications for design.",
          ],
        },
        {
          title: "Type B: Design + evaluation",
          paragraphs: [
            "Build prototype addressing problem from literature; evaluate with users; contribution = artefact + evaluation insights (design science).",
          ],
        },
        {
          title: "Type C: Technical system + evaluation",
          paragraphs: [
            "Strong engineering component (novel tool, integration); evaluate performance or usability; justify technical and user claims separately.",
          ],
        },
      ],
    },
    {
      title: "Tutorial: 30-week timeline with gates",
      table: {
        headers: ["Gate", "Week", "Pass criteria"],
        rows: [
          ["RQ approved", "4", "Supervisor agrees scope is feasible"],
          ["Related work draft", "8", "Gap argument clear"],
          ["Method approved", "10", "Ethics submitted if needed"],
          ["Pilot study / prototype", "14", "Feasibility proven"],
          ["Data complete", "20", "No new collection needed"],
          ["Full draft", "26", "All chapters present"],
          ["Defence", "30", "Presentation rehearsed"],
        ],
      },
    },
    {
      title: "Practice: thesis prep (semester 3)",
      bullets: [
        "Write 3 candidate RQs; pick one; explain why others rejected.",
        "Annotate 5 papers with one-sentence takeaway each.",
        "Outline method chapter headings only (fill later).",
        "List ethical issues if your study involves users.",
        "Schedule standing weekly writing block (same time as future thesis semester).",
      ],
    },
  );
})();
