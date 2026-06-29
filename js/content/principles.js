/**
 * Core principles per discipline: CS, SE, maths, IT, app development.
 * Written for grasp first, academic precision second.
 */
(function () {
  const S = window.CHAPTER_SECTIONS;
  if (!S) return;

  function insertAfterAau(id, section) {
    if (!S[id]) return;
    const idx = S[id].findIndex((s) => s.title.includes("AAU"));
    if (idx >= 0) S[id].splice(idx + 1, 0, section);
    else S[id].unshift(section);
  }

  function append(id, ...sections) {
    if (!S[id]) S[id] = [];
    S[id].push(...sections);
  }

  insertAfterAau("overview", {
    title: "Recommended study path (semesters 1–4)",
    paragraphs: [
      "You do not read this book cover-to-cover in one week. Use it as a <strong>companion</strong> to MOODLE and your project. When a module starts, read that chapter's <em>Start here</em> and glossary before the first group meeting.",
    ],
    table: {
      headers: ["When", "Read in textbook", "Do in practice"],
      rows: [
        ["Week 1 of module", "Start here + AAU objectives + glossary", "Align group problem with learning objectives"],
        ["Mid-project", "Theory + worked example", "Apply one method (test, diagram, SQL) to your artefact"],
        ["Before exam", "Grasp checks + Further reading links", "Explain choices aloud without slides"],
      ],
    },
  });

  insertAfterAau("dsnidak121", {
    title: "Principles: modelling before coding",
    paragraphs: [
      "<strong>Principle 1: All models are wrong; some are useful</strong> (Box). Your simulation simplifies reality on purpose. Academic honesty means stating what you left out (continuous space, heterogeneity, learning) and why the model still answers your question.",
      "<strong>Principle 2: Same behaviour, many representations</strong>. A grid, a graph, or a differential equation can describe related phenomena. Computational thinking includes picking a representation that makes your question tractable on a laptop in one semester.",
      "<strong>Principle 3: Reproducibility</strong>. Document random seeds, parameter files, and version of code. Science and SE both reject \"it worked on my machine once\" as evidence.",
    ],
    subsections: [
      {
        title: "Mini maths: discrete time steps",
        paragraphs: [
          "Most ABM projects use discrete time: <em>t = 0, 1, 2, …</em>. Each step applies rules to all agents (synchronous) or one random agent (asynchronous). The choice affects results; note it in your report.",
          "If <em>p</em> is probability an event happens per step, the expected number of events over <em>T</em> steps is not always simply <em>p × T</em> when events exclude each other; for independent trials on many agents, expectations add. When in doubt, simulate and compare to intuition.",
        ],
      },
    ],
  });

  insertAfterAau("dsnidak122", {
    title: "Principles: engineering the semester project",
    paragraphs: [
      "Official AAU competence: you must <strong>describe, plan, and reflect</strong> on project work, not only ship code. That is software engineering culture, not bureaucracy.",
      "<strong>Principle: Working software is the primary measure</strong> (Agile Manifesto), but in academia it must be <em>argued</em>: requirements met, tests passed, limitations stated.",
      "<strong>Principle: Version control is non-negotiable</strong>. Git history shows how the team thought. Examiners may ask what changed between demos and why.",
    ],
  });

  insertAfterAau("dsnidak123", {
    title: "Principles: IT value is organisational",
    paragraphs: [
      "<strong>Principle: Technology follows strategy</strong>. IT investments should connect to business or public-service goals (efficiency, quality, compliance, citizen service). A technically superb system that fights workflow creates shadow IT.",
      "<strong>Principle: Data is an asset and a liability</strong>. GDPR and security turn data governance into IS design, not only legal checkbox.",
    ],
  });

  insertAfterAau("dsnidak124", {
    title: "Principles: programs as mathematical objects",
    paragraphs: [
      "<strong>Principle: Programs manipulate state</strong>. Every bug is wrong state at wrong time. Debugging is finding when state diverged from your mental model.",
      "<strong>Principle: Types and tests are specifications</strong>. Types catch nonsense early; tests encode examples of correct behaviour. Both support reliability as programs grow.",
      "<strong>Principle: Clarity beats cleverness</strong> (Kernighan). Readable code is maintained code; your future self is a collaborator.",
    ],
    subsections: [
      {
        title: "Truth tables (logic foundation)",
        paragraphs: [
          "Conditions in <code>if</code> statements are Boolean expressions. Knowing AND, OR, NOT prevents subtle bugs.",
        ],
        table: {
          headers: ["A", "B", "A AND B", "A OR B", "NOT A"],
          rows: [
            ["true", "true", "true", "true", "false"],
            ["true", "false", "false", "true", "false"],
            ["false", "true", "false", "true", "true"],
            ["false", "false", "false", "false", "true"],
          ],
        },
      },
    ],
  });

  insertAfterAau("dsnidak224", {
    title: "Principles: object-oriented design",
    paragraphs: [
      "<strong>SOLID at a glance</strong> (Martin): Single responsibility, Open/closed, Liskov substitution, Interface segregation, Dependency inversion. You will not apply all perfectly in semester 2, but SRP and encapsulation prevent most group-project pain.",
      "<strong>Principle: Tell, don't ask</strong>. Objects should do work, not expose internals for others to manipulate field by field.",
    ],
  });

  insertAfterAau("dsnidak223", {
    title: "Principles: design for humans",
    paragraphs: [
      "<strong>Principle: Errors are normal</strong> (Norman). Design for recovery (undo, clear messages), not only happy path.",
      "<strong>Principle: Consistency reduces cognitive load</strong>. Same action, same place, same label across screens.",
      "<strong>Principle: Evaluation beats opinion</strong>. Aesthetic preference is not usability evidence unless tied to task performance or user quotes.",
    ],
  });

  insertAfterAau("dsnidak222", {
    title: "Principles: model-driven development",
    paragraphs: [
      "<strong>Principle: Models are for communication</strong>. UML fails when it diverges from code; it succeeds when it aligns developers and domain experts before integration hell.",
      "<strong>Principle: Problem domain vs application domain</strong>. Problem domain concepts (Book, Loan) differ from application concepts (DatabaseConnection, LoginSession). Mixing them in one diagram confuses both.",
    ],
  });

  insertAfterAau("dsndadk221", {
    title: "Principles: interactive product delivery",
    paragraphs: [
      "<strong>Principle: End-to-end slices</strong>. One working user journey beats three half-finished screens.",
      "<strong>Principle: Evidence chain</strong>. User quote → design change → implementation → re-test. That chain is what external examiners reward.",
    ],
  });

  insertAfterAau("dsndadk311", {
    title: "Principles: application architecture",
    paragraphs: [
      "<strong>Principle: Separation of concerns</strong>. UI, business rules, and persistence change for different reasons; keep them in separate modules/layers.",
      "<strong>Principle: Security by design</strong>. Auth, input validation, and secrets management are architecture decisions, not last-week patches.",
      "<strong>Principle: 12-factor app</strong> (Heroku): config in environment, logs as streams, dev/prod parity. Useful checklist even for student deployments.",
    ],
  });

  insertAfterAau("dsndadk321", {
    title: "Principles: empirical inquiry",
    paragraphs: [
      "<strong>Principle: Method follows question</strong>. \"What do users feel?\" → interviews. \"Which design is faster?\" → controlled task timing. Wrong method weakens the whole thesis.",
      "<strong>Principle: Saturation and sample size</strong>. Qualitative studies seek thematic saturation, not statistical n=1000. State who you studied and avoid over-generalising.",
    ],
  });

  insertAfterAau("dsnidak312", {
    title: "Principles: professional software process",
    paragraphs: [
      "<strong>Principle: Conway's Law</strong>. System structure mirrors communication structure. Bad team boundaries → bad module boundaries.",
      "<strong>Principle: Fail fast</strong>. Cheap failures in tests and CI beat expensive failures at demo or in production.",
    ],
  });

  insertAfterAau("dsnidak314", {
    title: "Principles: data integrity",
    paragraphs: [
      "<strong>Principle: Single source of truth</strong>. Each fact stored once in one place; other tables reference it by key.",
      "<strong>Principle: Constraints enforce rules</strong>. NOT NULL, FOREIGN KEY, CHECK: the DB helps when application code forgets.",
      "<strong>Principle: Query clarity</strong>. SQL you cannot explain may hide Cartesian products or missing JOIN conditions.",
    ],
    subsections: [
      {
        title: "Set intuition for relational algebra",
        paragraphs: [
          "A table is a set of rows (no duplicate rows in a relation). JOIN is like combining two spreadsheets on a matching column, but mathematically it is a filtered cartesian product. Understanding that prevents accidental row explosion (100 × 100 = 10,000 rows).",
        ],
      },
    ],
  });

  append("valgfag", {
    title: "Principles: elective lenses",
    paragraphs: [
      "<strong>Entrepreneurship</strong>: a technology without a paying or funding user is a hobby. Validate problem before scaling features.",
      "<strong>AI + HCI</strong>: model accuracy ≠ user trust. Design for understanding, control, and failure cases when the model is wrong.",
    ],
  });

  insertAfterAau("dsnidafk412", {
    title: "Principles: master's-level scholarship",
    paragraphs: [
      "<strong>Principle: One clear contribution</strong>. Examiners prefer a bounded claim defended well over a vague grand survey.",
      "<strong>Principle: Related work is argument</strong>, not decoration. Group papers by theme and show the gap you fill.",
      "<strong>Principle: Reproducibility and ethics</strong> as at AAU: consent, data handling, and honest limitations strengthen trust.",
    ],
  });

  // Canonical textbooks quick reference (overview appendix)
  append("overview", {
    title: "Canonical textbooks by discipline (starting points)",
    paragraphs: [
      "You are not expected to buy all of these. Use library access and module reading lists. These are standard references that align with this programme's disciplines.",
    ],
    table: {
      headers: ["Discipline", "Starter text", "Why it matters here"],
      rows: [
        ["Computer science / algorithms", "Sedgewick & Wayne, <em>Algorithms</em>", "Complexity, data structures, precise thinking"],
        ["Programming", "Abelson & Sussman, <em>SICP</em> (free online)", "Programs as abstraction and interpretation"],
        ["Software engineering", "Sommerville, <em>Software Engineering</em>", "Lifecycle, requirements, quality, process"],
        ["Databases", "Elmasri & Navathe", "Relational model, SQL, normalisation (DSNIDAK314)"],
        ["HCI", "Dix, Finlay, Abowd & Beale", "UCD, evaluation (DSNIDAK223)"],
        ["Design patterns", "Gamma et al. (GoF)", "MVC, Observer (DSNIDAK222)"],
        ["Information systems", "Laudon & Laudon", "TPS/ERP/CRM, strategy (DSNIDAK123)"],
        ["Research methods", "Booth, Colomb & Williams, <em>Craft of Research</em>", "Thesis and DSNDADK321 track"],
      ],
    },
  });
})();
