/**
 * Core subject guides: long-form 0→100 explanations per module.
 * Placed after the Lesson block.
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

  afterLessons("overview", {
    title: "Core subject guide: the whole programme explained",
    paragraphs: [
      "Read this once when you start semester 1. Return when you feel lost about how modules connect. The goal is a single mental map of what you are becoming: someone who can analyse a problem, design a system, implement it, evaluate it with users, and argue for choices in academic and professional language.",
    ],
    subsections: [
      {
        title: "What kind of graduate you become",
        paragraphs: [
          "You are trained as a <strong>digital application developer</strong> with AAU's PBL profile. That means you are not only a coder. You can sit in a meeting with a nurse, a shop owner, or a product owner and translate between their problem and a technical solution. You can also read research, run a usability test, model data in SQL, and work in a Scrum team. The breadth is the degree; depth grows in electives, semester 3 track, and thesis.",
        ],
      },
      {
        title: "The repeating pattern in every semester project",
        paragraphs: [
          "Every large project follows the same skeleton: (1) understand people and problem, (2) define scope and requirements, (3) design structure and interface, (4) implement incrementally, (5) test with users or data, (6) document and defend. Semester 1 might skip formal HCI but still has users implicitly (examiner, group). Semester 2 makes users explicit. Semester 3 adds persistence and team process. Semester 4 adds research method and original contribution.",
        ],
      },
      {
        title: "Programming is necessary but not sufficient",
        paragraphs: [
          "Without programming you cannot build. Without software engineering your group collapses in merge conflicts. Without HCI users hate the product. Without IS perspective you build features nobody adopts in the organisation. Without computational thinking you model the wrong problem. The degree rotates these lenses until you use them together without being told.",
        ],
      },
      {
        title: "How exams differ by module",
        table: {
          headers: ["Module type", "Typical exam", "What proves understanding"],
          rows: [
            ["5 ECTS course", "Written or oral + exercises", "Correct use of concepts on paper"],
            ["10 ECTS project", "Report + demo + oral", "Working software + traceability"],
            ["15 ECTS project", "External exam common", "Integration + user evidence + architecture"],
            ["Thesis 30 ECTS", "Thesis + defence", "RQ answered with method and limits"],
          ],
        },
      },
      {
        title: "Language and official sources",
        paragraphs: [
          "Module titles on this site are Danish as in the studieordning; teaching may be English (e.g. DSNIDAK124). Always verify exam forms on <a href=\"https://moduler.aau.dk/\" target=\"_blank\" rel=\"noopener\">moduler.aau.dk</a> for your academic year. This textbook teaches concepts; MOODLE assigns what is graded this semester.",
        ],
      },
    ],
  });

  afterLessons("dsnidak121", {
    title: "Core subject guide: computational thinking completely",
    subsections: [
      {
        title: "The central question CT answers",
        paragraphs: [
          "CT answers: <strong>How do I turn a vague real-world question into a procedure I can execute, simulate, or analyse?</strong> Example vague question: \"Do neighbourhoods segregate?\" CT version: \"I represent households as agents on a grid; each tick unhappy agents move if less than 30% neighbours share their type; I measure segregation index over 200 ticks for density 0.5 and 0.8.\"",
        ],
      },
      {
        title: "Relationship to mathematics",
        paragraphs: [
          "You use graphs (networks of agents), sequences (time steps), functions (rule from state to new state), and probability (stochastic rules). You do not need calculus for most AAU projects. You need clarity: if probability is 0.3 per neighbour per tick, write exactly when the draw happens and whether trials are independent.",
        ],
      },
      {
        title: "Relationship to programming",
        paragraphs: [
          "Code is one notation for the update rule. Pseudocode or NetLogo is fine for learning. The exam cares that your rule matches your report. A common mistake: report describes one rule, code implements another. Keep a single source of truth in ODD Details section.",
        ],
      },
      {
        title: "What makes a strong AAU project",
        bullets: [
          "Clear research question with measurable output.",
          "Documented simplifications with reasons.",
          "Experiments varying at least one parameter.",
          "Plots, not single screenshots.",
          "Oral defence linking rule to pattern.",
        ],
      },
      {
        title: "Classic models to understand (read about, do not copy blindly)",
        bullets: [
          "<strong>Schelling segregation</strong>: tolerance thresholds → spatial clusters.",
          "<strong>SIR / rumour spread</strong>: states S-I-R or heard/not-heard on network.",
          "<strong>Boids flocking</strong>: alignment, separation, cohesion → flock patterns.",
          "<strong>Cellular automata</strong>: grid rules like Conway's Game of Life.",
        ],
      },
    ],
  });

  afterLessons("dsnidak122", {
    title: "Core subject guide: software development completely",
    subsections: [
      {
        title: "What \"development\" means here",
        paragraphs: [
          "Development is the full path from problem to deployed artefact someone else can run. At AAU semester 1 the deploy might be \"clone Git repo and run python main.py.\" Still: requirements, design sketch, code, test, README, demo. You are graded as a junior engineer, not as a homework student.",
        ],
      },
      {
        title: "Requirements as contracts",
        paragraphs: [
          "Each requirement is a promise you can test. If R2 says \"export CSV,\" the test opens CSV and checks columns. If you cannot test it, rewrite the requirement until you can. Non-functional requirements need metrics: seconds, bytes, concurrent users, error rate.",
        ],
      },
      {
        title: "Architecture at semester 1 level",
        paragraphs: [
          "Even a small app has layers: input UI or CLI, logic, data (file or memory). Draw three boxes. Arrows show direction of calls. When code mixes layers in one file, mark refactoring as technical debt in reflection.",
        ],
      },
      {
        title: "Testing mindset",
        paragraphs: [
          "A test is executable documentation. Start with happy path, then edge cases (empty input, max size, invalid type). One failing test before exam is better than zero tests and a demo that crashes on edge case the examiner tries.",
        ],
      },
      {
        title: "Report sections examiners read first",
        bullets: [
          "Problem and scope (what you did not build).",
          "Requirements table.",
          "Architecture diagram.",
          "Demo walkthrough with screenshots.",
          "Reflection on process and teamwork.",
        ],
      },
    ],
  });

  afterLessons("dsnidak123", {
    title: "Core subject guide: information systems completely",
    subsections: [
      {
        title: "IS vs IT vs computer science",
        paragraphs: [
          "<strong>Computer science</strong> asks how computation works. <strong>IT</strong> often means practical deployment of technology. <strong>Information systems</strong> asks how organisations use information technology to achieve goals and what determines success or failure. This course is why your technical skills must fit real workplaces.",
        ],
      },
      {
        title: "The value chain lens",
        paragraphs: [
          "Porter's value chain: inbound logistics, operations, outbound, marketing, service, plus support activities (HR, IT, procurement). Ask where an IS creates value: faster operations? better decisions? regulatory compliance? If you cannot point to a chain activity, the business case is weak.",
        ],
      },
      {
        title: "Implementation lifecycle",
        steps: [
          "Needs analysis and feasibility.",
          "Vendor selection or build vs buy.",
          "Configuration and customisation (danger: over-customise ERP).",
          "Data migration and cleansing.",
          "Training and change management.",
          "Go-live and hypercare support.",
          "Benefits realisation measurement.",
        ],
      },
      {
        title: "Why ERP projects fail spectacularly",
        paragraphs: [
          "ERP integrates finance, HR, supply chain. Failure modes: executive mandate without front-line buy-in, migrating dirty master data, unlimited customisation, big-bang go-live without fallback. Case exam answers name people and process, not only \"bugs.\"",
        ],
      },
      {
        title: "Public sector and GDPR",
        paragraphs: [
          "Danish public digitalisation (MitID, NemID successors, digital post) shows scale of IS in citizenship. Personal data processing requires legal basis, data minimisation, security measures. As developer you will implement consent, retention, and access controls.",
        ],
      },
    ],
  });

  afterLessons("dsnidak124", {
    title: "Core subject guide: programming completely",
    subsections: [
      {
        title: "Execution model you must internalise",
        paragraphs: [
          "Program = instructions + memory. CPU runs instruction pointer line by line. Assignment updates memory. Functions push stack frames. Loops repeat until condition false. Errors throw or return to caller. Every debugger session is inspecting this model.",
        ],
      },
      {
        title: "Types and correctness",
        paragraphs: [
          "Types prevent category errors: adding text to number, calling methods that do not exist. Dynamic languages (Python, JavaScript) check at runtime; static languages (Java) more at compile time. Both need tests for logic errors types cannot catch.",
        ],
      },
      {
        title: "Collections and algorithms intro",
        paragraphs: [
          "List/array: ordered, index access O(1), search O(n). Map/dict: key lookup average O(1). Nested loops over n items often O(n²). For semester 1 sizes that is fine; notice when n grows.",
        ],
      },
      {
        title: "Web architecture seed",
        paragraphs: [
          "Browser requests HTML; server may return static files or generate HTML. JavaScript runs client-side and can call server APIs with fetch. Separation prepares you for semester 3 full stack. Never put secrets in client JS.",
        ],
      },
      {
        title: "Security basics that stick",
        bullets: [
          "Validate all input on server.",
          "Escape output in HTML to reduce XSS.",
          "Never store passwords plain text (hash with salt).",
          "Use HTTPS in production.",
          "Parameterise SQL (semester 3).",
        ],
      },
      {
        title: "Path from zero to competent (semester 1)",
        steps: [
          "Week 1–2: variables, if, loops, functions.",
          "Week 3–4: collections, files, small programs.",
          "Week 5–6: web page with DOM events.",
          "Week 7–8: debug exercises, mini project, test one function.",
          "Daily: 30 minutes coding even without assignment due.",
        ],
      },
    ],
  });
})();
