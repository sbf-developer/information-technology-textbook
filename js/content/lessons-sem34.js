/**
 * Progressive lessons: Semester 3–4 modules.
 */
(function () {
  const S = window.CHAPTER_SECTIONS;
  if (!S) return;

  function insertLessons(id, ...sections) {
    if (!S[id]) return;
    const idx = S[id].findIndex((s) => s.title.includes("From zero (4/4)"));
    const at = idx >= 0 ? idx + 1 : 0;
    S[id].splice(at, 0, ...sections);
  }

  const lesson = (n, title, body) => ({
    title: `Lesson ${n}: ${title}`,
    ...body,
  });

  insertLessons("dsndadk311",
    lesson(1, "What \"full stack\" means", {
      paragraphs: [
        "Full stack means you own the journey from browser button to row in database and back. Frontend renders UI; backend validates and applies rules; database persists. Any layer missing = toy project, not semester 3 bar.",
      ],
    }),
    lesson(2, "HTTP request lifecycle", {
      steps: [
        "Browser sends GET /api/plans with cookie or token.",
        "Server middleware authenticates user.",
        "Controller loads plans for user id only (authorisation).",
        "Repository runs SQL SELECT with WHERE user_id = ?",
        "JSON response → frontend renders list.",
      ],
    }),
    lesson(3, "Schema first, features second", {
      paragraphs: [
        "Agree tables and keys before sprint 1 ends. Migrations version schema. Changing schema late is painful; getting keys wrong duplicates data or orphans rows.",
      ],
    }),
    lesson(4, "Security checklist", {
      bullets: [
        "Hash passwords (bcrypt, argon2).",
        "Parameterised SQL only.",
        "HTTPS in production.",
        "Authorisation on every mutating route.",
        "Secrets in environment variables.",
        "Rate limit login.",
      ],
    }),
    lesson(5, "Deployment story", {
      paragraphs: [
        "Staging environment mirrors production enough to catch \"works locally\" issues. Demo from staging or production URL impresses external examiners. Document deploy steps in README.",
      ],
    }),
    lesson(6, "Check yourself", {
      callout:
        "<strong>Answers sketch:</strong> REST uses resources and HTTP verbs. JWT vs session: trade-offs in statelessness and XSS. CORS: browser security on cross-origin API calls.",
    }),
    lesson(7, "Integration debugging playbook", {
      paragraphs: [
        "When full stack breaks, divide the problem: (1) Does API return correct JSON in Postman/curl? (2) Does DB contain expected rows? (3) Does frontend call correct URL with credentials? (4) Browser console network tab shows 401, 404, or 500? Fix layer by layer; never change three layers at once.",
      ],
      table: {
        headers: ["Symptom", "Likely layer", "First check"],
        rows: [
          ["Blank page", "Frontend", "Console errors, build output"],
          ["401 Unauthorized", "Auth", "Cookie domain, token expiry"],
          ["500 server error", "Backend", "Server logs, stack trace"],
          ["Wrong data shown", "SQL / logic", "Run query in psql directly"],
          ["CORS error", "Deployment", "API allowed origins config"],
        ],
      },
    }),
    lesson(8, "What semester 4 expects from this project", {
      bullets: [
        "Reusable domain knowledge (health, education, logistics…).",
        "Git discipline and architecture you can explain.",
        "One usability or performance lesson documented.",
        "Honest limitations section you can reuse in thesis intro.",
      ],
    }),
  );

  insertLessons("dsndadk321",
    lesson(1, "Knowledge vs product", {
      paragraphs: [
        "Research track optimises for defensible claims about people and systems. A prototype may support study but polished launch is not the goal. Ask: what do we know after this project we did not know before?",
      ],
    }),
    lesson(2, "Literature search that finds gaps", {
      steps: [
        "Pick keywords from RQ.",
        "Search ACM, IEEE, Scopus via library.",
        "Read abstracts; keep 20 relevant papers.",
        "Group by theme in spreadsheet.",
        "Write gap paragraph: \"Prior work does X; none address Y in context Z.\"",
      ],
    }),
    lesson(3, "Interview skills", {
      bullets: [
        "Open questions; avoid leading.",
        "Silence is OK; let participant think.",
        "Do not teach your product mid-interview.",
        "Record with consent; transcribe accurately.",
        "Anonymise in report.",
      ],
    }),
    lesson(4, "Thematic analysis in six moves", {
      paragraphs: [
        "Familiarise with data → code → search themes → review themes → define/name → write results with quotes. Software (NVivo, etc.) optional; Excel works for student scale.",
      ],
    }),
    lesson(5, "Writing discussion without overclaiming", {
      paragraphs: [
        "Structure: answer RQ → relate to literature → implications for design/practice → limitations → future work. \"All users\" is almost always wrong; say \"participants in this sample.\"",
      ],
    }),
    lesson(6, "Check yourself", {
      callout:
        "<strong>Answers:</strong> Internal validity = study design matches RQ. External = generalisability. Saturation = new interviews stop adding themes.",
    }),
    lesson(7, "Reading papers efficiently", {
      steps: [
        "Read abstract and conclusion first.",
        "Skim headings and figures.",
        "Read method if similar to yours.",
        "One paragraph summary: RQ, method, finding, limitation.",
        "Store in Zotero/Mendeley with tags by theme.",
      ],
    }),
    lesson(8, "Prototype as research instrument", {
      paragraphs: [
        "Sometimes you build a rough prototype not to ship but to provoke reactions in interviews or think-aloud sessions. Document it as a probe: \"We showed mock AI explanations; participants wanted source links.\" That is valid contribution without production-quality code.",
      ],
    }),
  );

  insertLessons("dsnidak312",
    lesson(1, "Why process exists", {
      paragraphs: [
        "Three developers without process duplicate work, merge conflicts, and untested demos. Agile makes work visible: backlog, board, done column, retros. Plan-driven fits when requirements are fixed by contract; agile fits learning and change.",
      ],
    }),
    lesson(2, "Scrum events in calendar", {
      table: {
        headers: ["Event", "When", "Output"],
        rows: [
          ["Sprint planning", "Day 1 of sprint", "Sprint backlog"],
          ["Daily Scrum", "Every day 15 min", "Plan, blockers surfaced"],
          ["Sprint review", "Last day", "Demo to stakeholders"],
          ["Retrospective", "After review", "One process improvement"],
        ],
      },
    }),
    lesson(3, "Testing vocabulary", {
      paragraphs: [
        "Unit test: one function. Integration: API + DB. E2E: browser automation through journey. Regression: full suite on CI before merge. Definition of Done includes tests passing.",
      ],
    }),
    lesson(4, "Brooks and Conway (exam favourites)", {
      bullets: [
        "Brooks: adding people to late project can delay more (communication overhead).",
        "Conway: architecture mirrors communication structure; fix teams to fix modules.",
      ],
    }),
    lesson(5, "Writing a retrospective", {
      paragraphs: [
        "Start / Stop / Continue format. One actionable item for next sprint (e.g. \"Stop merging without review\"). Vague \"communicate better\" fails; specific time-boxed action succeeds.",
      ],
    }),
    lesson(6, "Check yourself", {
      callout:
        "<strong>Answers:</strong> INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable. DoD = shared checklist for \"done.\" Velocity = completed story points per sprint for planning only.",
    }),
  );

  insertLessons("dsnidak314",
    lesson(1, "Why files are not enough", {
      paragraphs: [
        "JSON file on disk works for one user demo. Ten concurrent users writing orders corrupt files. Databases give concurrent access, queries, constraints, and transactions. That is why semester 3 requires SQL.",
      ],
    }),
    lesson(2, "Keys and relationships", {
      paragraphs: [
        "Primary key uniquely identifies row. Foreign key enforces reference: every order.user_id must exist in users.id. Without FK, orphan orders appear and reports lie.",
      ],
    }),
    lesson(3, "JOIN intuition", {
      paragraphs: [
        "JOIN matches rows on condition. INNER keeps matches only; LEFT keeps all left rows plus matches or NULL. Accidental missing ON clause multiplies rows (Cartesian product). Always check row counts after JOIN.",
      ],
    }),
    lesson(4, "Normalisation story", {
      paragraphs: [
        "Store each fact once. Customer name in one place; orders reference id. Update anomaly disappears. Denormalise later for read speed with eyes open.",
      ],
    }),
    lesson(5, "Transactions", {
      code: {
        lang: "sql",
        caption: "Transfer money atomically.",
        source: `
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
-- ROLLBACK if any step fails
`.trim(),
      },
    }),
    lesson(6, "Check yourself", {
      callout:
        "<strong>Answers:</strong> ACID: Atomicity, Consistency, Isolation, Durability. 3NF: no transitive dependency on non-key attributes. Parameterised query prevents SQL injection.",
    }),
  );

  insertLessons("valgfag",
    lesson(1, "Why an elective exists", {
      paragraphs: [
        "Core track makes you a developer/researcher. Elective tilts toward startup skills or AI+user design. Neither removes programming; they change what you emphasise in reports and thesis.",
      ],
    }),
    lesson(2, "Entrepreneurship: problem first", {
      paragraphs: [
        "Fall in love with problem and customer segment, not solution. Interview 10 potential users before building features. Canvas forces explicit assumptions about who pays and how you reach them.",
      ],
    }),
    lesson(3, "Entrepreneurship: metrics", {
      bullets: [
        "Conversion rate on landing page.",
        "Cost to acquire customer.",
        "Retention week 2.",
        "Revenue or signed LOI (letter of intent).",
      ],
    }),
    lesson(4, "AI + HCI: trust calibration", {
      paragraphs: [
        "Users over-trust or under-trust AI. Design shows confidence, sources, and edit paths. Evaluate tasks when AI is wrong, not only when right.",
      ],
    }),
    lesson(5, "AI + HCI: responsible limits", {
      bullets: [
        "Consent for data used in models.",
        "Bias check on training data (intro level).",
        "Human override for high stakes.",
        "EU AI Act awareness for risk categories.",
      ],
    }),
    lesson(6, "Check yourself", {
      callout:
        "<strong>Answers sketch:</strong> Value proposition = outcome for customer. Wizard-of-Oz = human simulates automation to learn. Automation bias = trusting machine too much.",
    }),
    lesson(7, "Entrepreneurship pitch (2 minutes)", {
      steps: [
        "Problem in one sentence with real person example.",
        "Solution demo or screenshot.",
        "Why now / why you.",
        "Business model: who pays how much.",
        "Ask: pilots, intro, feedback.",
      ],
    }),
    lesson(8, "AI feature design checklist", {
      bullets: [
        "User can see input data model used.",
        "User can reject or edit output.",
        "System states confidence or uncertainty.",
        "Fallback when model unavailable.",
        "Logged consent if personal data trains model.",
      ],
    }),
  );

  insertLessons("dsnidafk412",
    lesson(1, "Thesis is one big argument", {
      paragraphs: [
        "Every chapter supports a single claim: \"We answer RQ by method M and find F, within limits L.\" If a paragraph does not support that, cut or move to appendix.",
      ],
    }),
    lesson(2, "Finding a feasible RQ", {
      paragraphs: [
        "Too big: \"Improve healthcare with AI.\" Feasible: \"How do nurses prioritise alerts on a ward tablet during morning rounds?\" Feasible has population, context, and observable data.",
      ],
    }),
    lesson(3, "Supervisor relationship", {
      bullets: [
        "Come with drafts, not blank pages.",
        "Ask specific questions: \"Is this RQ testable in 4 months?\"",
        "Respond to feedback in tracked document.",
        "Escalate scope creep early.",
      ],
    }),
    lesson(4, "Ethics and GDPR", {
      paragraphs: [
        "If humans participate: inform consent, storage, anonymisation, right to withdraw. Register personal data processing where required. Ethics committee at AAU when applicable.",
      ],
    }),
    lesson(5, "Defence presentation", {
      steps: [
        "Problem (30 s)",
        "RQ (20 s)",
        "Method (60 s)",
        "Key finding (60 s)",
        "Contribution + limitation (40 s)",
        "Demo or figure if applicable",
      ],
    }),
    lesson(6, "Check yourself", {
      callout:
        "<strong>Answers:</strong> Contribution = what's new. Gap = what's missing in literature. Design science = build artefact + evaluate for knowledge. Reproducibility = enough detail to repeat study.",
    }),
    lesson(7, "Related work chapter that argues", {
      paragraphs: [
        "Do not list papers alphabetically. Use themed headings: \"2.1 Trust in automation\" then summarise 4 papers and tension between them. End section with gap: \"Few studies examine X in Danish municipal contexts.\" Your thesis fills that gap.",
      ],
    }),
    lesson(8, "When to narrow scope (supervisor conversation)", {
      bullets: [
        "Too many methods → pick one primary.",
        "Too broad population → one role or one system type.",
        "Too large artefact → vertical slice with evaluation.",
        "Swap \"and\" for \"which comes first\" in RQ.",
      ],
      callout:
        "A finished narrow thesis beats an abandoned broad one. Examiners reward defensible claims, not ambition alone.",
    }),
  );
})();
