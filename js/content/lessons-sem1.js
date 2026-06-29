/**
 * Progressive lessons (0→100 spine). Inserted right after From zero (4/4).
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

  insertLessons("overview",
    lesson(1, "What you are actually studying", {
      paragraphs: [
        "Cand.it. at AAU is not a bootcamp and not a pure CS degree. You learn to <strong>build software</strong>, <strong>design for users</strong>, and <strong>understand organisations</strong> that use IT. Every semester adds a layer until you can run your own thesis project.",
        "If you feel lost, that is normal. Semester 1 starts from zero on purpose. By semester 3 you are expected to integrate frontend, backend, database, and process. The graph is steep but each module repeats ideas in new contexts until they stick.",
      ],
    }),
    lesson(2, "How PBL projects work", {
      paragraphs: [
        "Problem-based learning means your group owns a problem for weeks. Courses feed the project; the project forces you to apply course ideas. Examiners ask <em>why</em> you made choices, not only whether the code compiles.",
      ],
      steps: [
        "Form group norms early: meeting time, Git rules, who takes notes.",
        "Split reading: each person summarises one module page for the group.",
        "Build something runnable early, even ugly.",
        "Write report sections as you go, not the night before.",
      ],
    }),
    lesson(3, "The skill stack (visual mental model)", {
      table: {
        headers: ["Semester", "You add", "You can now…"],
        rows: [
          ["1", "Think in steps, code basics, first system, org context", "Build small tools; explain CT models"],
          ["2", "OOP, UML, HCI, big interactive project", "Ship a user-tested prototype"],
          ["3", "DB, agile, full stack or research track", "Persist data; work like a dev team"],
          ["4", "Thesis", "Independent question + method + defence"],
        ],
      },
    }),
    lesson(4, "Study habits that work for this programme", {
      bullets: [
        "Code every week even when the project is \"documentation phase.\"",
        "Explain one concept aloud per week (rubber duck or roommate).",
        "Keep a personal glossary: term → your own one-sentence definition.",
        "After each group meeting, write three bullet decisions.",
        "Use MOODLE deadlines; use this book for understanding.",
      ],
    }),
    lesson(5, "Check yourself (answers in callout)", {
      bullets: [
        "What is the difference between CS and software engineering?",
        "What is PBL in one sentence?",
        "Name two deliverables typical in a semester project exam.",
        "Which semester introduces databases formally?",
        "What is external examination?",
      ],
      callout:
        "<strong>Answers:</strong> CS = computation/algorithms; SE = team delivery/process. PBL = learn by solving real problems in groups. Typical: report + demo/oral. Databases in semester 3 (DSNIDAK314). External = examiner from outside AAU assesses project.",
    }),
  );

  insertLessons("dsnidak121",
    lesson(1, "Problems computers help you think about", {
      paragraphs: [
        "Some questions are too big or unethical to test in real life: \"What if everyone only talks to similar neighbours?\" or \"How fast does gossip spread?\" A <strong>model</strong> is a simplified world where you control rules and measure results.",
        "Computational thinking is the craft of designing that world: choosing agents, rules, time steps, and metrics. Programming implements the model; CT is the reasoning before and during implementation.",
      ],
    }),
    lesson(2, "Decomposition with a concrete example", {
      paragraphs: [
        "Problem: traffic jam on a single-lane bridge. Decompose into: (1) cars as agents, (2) bridge as one-lane grid, (3) rule: move forward if cell ahead empty, (4) parameter: arrival rate, (5) metric: average wait time.",
        "Each piece becomes a variable or function in code or a paragraph in your report. Without decomposition you get a vague simulation nobody can reproduce.",
      ],
    }),
    lesson(3, "Time and randomness", {
      paragraphs: [
        "Discrete time: the world updates in ticks t = 0, 1, 2, … Most AAU ABMs use this. Continuous time exists in advanced maths; you rarely need it in semester 1.",
        "Randomness: a rule \"with probability 0.3\" means different runs differ. Run many seeds and report distributions, not one lucky run. Always log the seed for debugging.",
      ],
      code: {
        lang: "python",
        caption: "Seed makes random runs reproducible.",
        source: `
import random
random.seed(42)
print([random.random() for _ in range(3)])  # same every time with seed 42
`.trim(),
      },
    }),
    lesson(4, "Reading and defending emergence", {
      paragraphs: [
        "Emergence: the crowd does something no single agent planned. Schelling showed simple \"happiness with similar neighbours\" can segregate cities. Your job is not to moralise the output but to explain which micro-rules produced which macro pattern.",
        "Oral exam skill: point at one rule, one metric, one plot. \"When p > 0.25, clusters form by tick 40 because agents who are unhappy move until local similarity exceeds threshold T.\"",
      ],
    }),
    lesson(5, "ODD report skeleton", {
      steps: [
        "<strong>Overview</strong>: purpose, entities, state variables, scale.",
        "<strong>Design concepts</strong>: theories or hypotheses motivating rules.",
        "<strong>Details</strong>: algorithms, parameters, schedules, initialization.",
        "<strong>Experiments</strong>: sweeps, plots, sensitivity.",
        "<strong>Discussion</strong>: limitations, relation to real world (careful claims).",
      ],
    }),
    lesson(6, "Check yourself", {
      bullets: [
        "Name the four CT pillars.",
        "What is an agent? A parameter?",
        "Why run multiple random seeds?",
        "What is sensitivity analysis?",
        "Give one limitation sentence examiners expect.",
      ],
      callout:
        "<strong>Answers:</strong> Decomposition, patterns, abstraction, algorithms. Agent = autonomous entity with rules; parameter = tunable number. Multiple seeds show stability vs luck. Sensitivity = vary one parameter, watch output change. Example limitation: \"We use a static network; real friendships change over time.\"",
    }),
  );

  insertLessons("dsnidak122",
    lesson(1, "Software as a promise", {
      paragraphs: [
        "When you deliver software, you promise: given these inputs, the system behaves as documented, reliably enough for the user. The semester project tests whether your group can make and keep that promise with evidence.",
        "Documentation is not extra work. It is how examiners verify traceability from user need to running code.",
      ],
    }),
    lesson(2, "Writing requirements that do not lie", {
      paragraphs: [
        "Bad: \"The system shall be fast and easy.\" Good: \"Search returns first 20 results within 2 seconds on test laptop X for dataset Y.\"",
        "Each requirement gets an ID. Tests reference IDs. Demo script references IDs. This triangle is software engineering literacy.",
      ],
      table: {
        headers: ["ID", "Requirement", "Test idea"],
        rows: [
          ["R1", "User saves simulation parameters to file", "Load file → same parameters restored"],
          ["R2", "Invalid parameter shows error, no crash", "p = -1 → error message, state unchanged"],
        ],
      },
    }),
    lesson(3, "Vertical slices beat horizontal layers", {
      paragraphs: [
        "Horizontal: team A builds all UI, team B all logic, integrate week 8 → pain. Vertical: one complete user journey week 3 → learning early. AAU projects reward working end-to-end slices even if UI is plain.",
      ],
    }),
    lesson(4, "Git and professional minimum", {
      bullets: [
        "Main branch always demoable.",
        "Commit messages explain why, not only \"fix\".",
        "README: install steps, run command, test command.",
        "Tag commit used at exam.",
      ],
    }),
    lesson(5, "Demo script (write this before exam)", {
      steps: [
        "Open README; clone if showing fresh setup (optional).",
        "Start app with one command.",
        "Show requirement R1 live.",
        "Show error handling R2.",
        "Show one test passing in terminal.",
        "Stop; invite questions.",
      ],
    }),
    lesson(6, "Check yourself", {
      callout:
        "<strong>Answers sketch:</strong> Functional = behaviour; non-functional = quality attributes. MVP = smallest proof of core value. Traceability = req ↔ code ↔ test. PBL reflection = analyse group process against objectives.",
    }),
  );

  insertLessons("dsnidak123",
    lesson(1, "Why organisations buy software", {
      paragraphs: [
        "Organisations use information systems to process transactions, coordinate work, and decide. IT spending is justified by efficiency, quality, compliance, or revenue, not by \"new technology is cool.\"",
        "Your role as application developer later: build systems that fit how people actually work, or adoption fails regardless of code quality.",
      ],
    }),
    lesson(2, "Walk through a day at a shop (systems map)", {
      steps: [
        "Morning: register sales → <strong>TPS</strong>.",
        "Manager checks weekly totals → <strong>MIS</strong> report from TPS data.",
        "Owner models holiday staffing → spreadsheet or <strong>DSS</strong>.",
        "If chain grows: inventory + finance integrated → <strong>ERP</strong>.",
        "Marketing emails repeat customers → <strong>CRM</strong>.",
      ],
    }),
    lesson(3, "Socio-technical failure story", {
      paragraphs: [
        "Hospital installs electronic records. Doctors type more, see patients less. Nurses create paper shadow lists for quick handovers. System is \"live\" but workflow regressed. Fix is training, UI change, and role redesign, not only faster servers.",
      ],
    }),
    lesson(4, "TAM in practice", {
      paragraphs: [
        "Technology Acceptance Model: users adopt if perceived usefulness and ease of use are high. A useful but impossible-to-login system fails on ease of use. A easy but pointless app fails on usefulness. Address both in case studies.",
      ],
    }),
    lesson(5, "Exam answer template (4 paragraphs)", {
      steps: [
        "Describe organisation and problem.",
        "Name system type and stakeholders.",
        "Analyse socio-technical fit and risks.",
        "Recommend with trade-offs and implementation steps.",
      ],
    }),
    lesson(6, "Check yourself", {
      bullets: ["Define TPS vs CRM.", "Two non-technical failure reasons.", "What is shadow IT?", "One GDPR concern for customer data."],
      callout:
        "<strong>Answers:</strong> TPS records transactions; CRM manages customer relationships. Failures: poor training, change resistance. Shadow IT = unofficial tools staff use. GDPR: lawful basis, consent, data minimisation, security.",
    }),
  );

  insertLessons("dsnidak124",
    lesson(1, "The computer as a strict reader", {
      paragraphs: [
        "Code is read literally. <code>if x = 5</code> in many languages assigns 5 to x; <code>if x == 5</code> compares. Small symbol errors cause big confusion. Slow down; read error messages; they point to line numbers.",
      ],
    }),
    lesson(2, "Variables and memory picture", {
      paragraphs: [
        "A variable name attaches to a value in memory. Assignment replaces the value. Two names can refer to the same object (aliasing). Drawing boxes and arrows on paper for 5 lines of code builds intuition exams assume.",
      ],
      code: {
        lang: "python",
        caption: "Trace this on paper before running.",
        source: `
a = [1, 2]
b = a
b.append(3)
print(a)  # what prints?
`.trim(),
      },
    }),
    lesson(3, "Control flow is how programs decide", {
      paragraphs: [
        "if/else encodes business rules. Loops encode repetition. Together they implement almost every small program. Master edge cases: empty list, zero, negative, null/None.",
      ],
    }),
    lesson(4, "Functions as contracts", {
      paragraphs: [
        "A function has a name, parameters, return value, and sometimes errors it throws. Good functions do one job. Document preconditions: \"score must be 0–100.\" Callers rely on that contract.",
      ],
    }),
    lesson(5, "Web: three languages, one page", {
      paragraphs: [
        "HTML structure, CSS presentation, JavaScript behaviour. Browser loads HTML, builds DOM, runs JS. Events connect user to code. This is the seed of all interactive apps you build later.",
      ],
    }),
    lesson(6, "Check yourself", {
      bullets: [
        "What prints in Lesson 2 code?",
        "Difference between loop and function?",
        "Three steps of debugging?",
        "Why validate input on server, not only browser?",
      ],
      callout:
        "<strong>Answers:</strong> Prints [1,2,3] (same list). Loop repeats; function bundles reusable logic. Reproduce, isolate, fix. Client can be bypassed; server is trusted boundary.",
    }),
  );
})();
