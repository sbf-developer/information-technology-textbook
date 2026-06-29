/**
 * Extended explanatory corpus: methods, theory, maths, app dev — per module.
 * Appended near end of each chapter (before glossary from deep-dive).
 */
(function () {
  const S = window.CHAPTER_SECTIONS;
  if (!S) return;

  function insertBeforeGlossary(id, section) {
    if (!S[id]) return;
    const idx = S[id].findIndex((s) => s.title.includes("Key terms glossary"));
    if (idx >= 0) S[id].splice(idx, 0, section);
    else S[id].push(section);
  }

  insertBeforeGlossary("overview", {
    title: "Disciplines and free academic resources",
    paragraphs: [
      "Use this textbook together with AAU MOODLE and the module pages on moduler.aau.dk. The links below are open or library-accessible standards used in university CS/SE/IT programmes worldwide.",
    ],
    table: {
      headers: ["Discipline", "Free / open resource", "Use for"],
      rows: [
        ["CS / programming", "MIT OpenCourseWare 6.0001 (Python)", "Extra exercises alongside DSNIDAK124"],
        ["CS / algorithms", "Princeton Algorithms (algs4.cs.princeton.edu)", "Big-O and data structures"],
        ["Software engineering", "IEEE SWEBOK (computer.org)", "Vocabulary for DSNIDAK122/312"],
        ["Databases", "PostgreSQL tutorial + Use The Index, Luke", "DSNIDAK314 SQL and performance"],
        ["Web / app dev", "MDN Web Docs (developer.mozilla.org)", "HTML, CSS, JS, HTTP"],
        ["HCI", "Nielsen Norman Group articles", "Heuristics and usability basics"],
        ["Research", "Craft of Research (library) + APA/IEEE guides", "Thesis track"],
      ],
    },
  });

  insertBeforeGlossary("dsnidak121", {
    title: "Methods and theory in practice (computational thinking)",
    subsections: [
      {
        title: "Method: ODD documentation (Railsback & Grimm)",
        steps: [
          "Purpose: scientific question and scope of the model.",
          "Entities, state variables, scales: what exists in the model world?",
          "Process overview: schedule (who acts when?) and basic rules.",
          "Design concepts: emergence, adaptation, objectives, learning (mark N/A if not used).",
          "Details: equations/rules, parameters, initialization, randomness.",
          "Verification: sanity checks (e.g. 0 agents → 0 output).",
          "Validation: compare qualitative behaviour to real or literature benchmark.",
        ],
      },
      {
        title: "Theory: emergence vs magic",
        paragraphs: [
          "Emergence is not a synonym for \"surprising screenshot\". It means macro-scale regularity produced by repeated micro-scale rules. You must show the micro rules, the macro metric, and multiple runs under parameter change. Schelling (1971) showed mild preference can segregate; Reynolds (1987) showed local alignment produces flocking. Cite the analogue you build on.",
        ],
      },
      {
        title: "Math: recording experiment results",
        paragraphs: [
          "For each parameter value, run R replications (e.g. R=30) with different random seeds. Report mean and spread (standard deviation or min/max) of your output metric. This is introductory statistics, not advanced calculus, but it separates science from anecdote.",
        ],
      },
    ],
  });

  insertBeforeGlossary("dsnidak122", {
    title: "Methods and theory in practice (software project)",
    subsections: [
      {
        title: "Method: V-model slice (simplified)",
        paragraphs: [
          "Left side: requirements → design. Right side: tests aligned to each level. Unit tests prove components; integration tests prove modules connect; acceptance tests prove user stories. Your report can show one vertical slice through the V for your MVP.",
        ],
      },
      {
        title: "Engineering: Git workflow for groups",
        bullets: [
          "main branch always demoable",
          "feature branches + pull request review inside group",
          "commit messages reference requirement IDs where possible",
          "tag commit used at exam demo",
        ],
      },
    ],
  });

  insertBeforeGlossary("dsnidak123", {
    title: "Methods and theory in practice (information systems)",
    subsections: [
      {
        title: "Method: fit–gap analysis",
        steps: [
          "List as-is processes and pain points (interviews, observation).",
          "List to-be requirements from strategy or regulation.",
          "Map candidate systems (ERP module, SaaS, custom build) to requirements.",
          "Identify gaps: missing features, customisation cost, integration effort.",
          "Estimate TCO: licence, implementation, training, maintenance.",
          "Recommend with argument tied to organisational fit, not vendor marketing.",
        ],
      },
      {
        title: "Theory: socio-technical checklist",
        bullets: [
          "People: skills, resistance, champions",
          "Process: do workflows change?",
          "Technology: reliability, UX, integration",
          "Structure: reporting lines, incentives",
        ],
      },
    ],
  });

  insertBeforeGlossary("dsnidak124", {
    title: "Methods and theory in practice (programming)",
    subsections: [
      {
        title: "Method: rubber duck debugging",
        steps: [
          "Explain the bug line-by-line to an imaginary listener.",
          "State expected vs actual variable values at failure point.",
          "Minimise the test case until the smallest input fails.",
          "Fix one hypothesis at a time; re-run full test suite.",
        ],
      },
      {
        title: "Math: growth of operations (Big-O intuition)",
        paragraphs: [
          "If nested loop over n items runs n times each, you have on the order of n² comparisons. At n=1000 that is a million steps; at n=10000, a hundred million. Choosing a better algorithm (e.g. sort n log n) is a computer science decision with real wall-clock impact.",
        ],
        code: {
          lang: "python",
          caption: "O(n) vs O(n²): same machine, different scaling.",
          source: `
import time

def pairs_quadratic(n):
    count = 0
    for i in range(n):
        for j in range(n):
            count += 1
    return count

def scan_linear(n):
    return sum(range(n))

for n in [1000, 2000, 4000]:
    t0 = time.perf_counter()
    pairs_quadratic(n)
    t1 = time.perf_counter()
    print(f"n={n} quadratic: {t1 - t0:.3f}s")
`.trim(),
        },
      },
      {
        title: "App development: HTTP request lifecycle (preview)",
        paragraphs: [
          "Browser sends GET /page → DNS resolves server → TCP connection → TLS handshake (HTTPS) → server returns HTML → browser parses → fetches CSS/JS → executes JS → user sees interactive page. Semester 3 builds the server side of this story.",
        ],
      },
    ],
  });

  insertBeforeGlossary("dsndadk221", {
    title: "Methods and theory in practice (interactive design project)",
    subsections: [
      {
        title: "Method: dual-track development",
        paragraphs: [
          "Track A (HCI): weekly prototype tests with 2–3 users on paper or Figma before coding the next screen. Track B (SE): vertical slice in code each sprint. Merge when UI design for slice N is validated and implemented with tests.",
        ],
      },
      {
        title: "App development: layered architecture checklist",
        table: {
          headers: ["Layer", "Question", "Bad sign"],
          rows: [
            ["UI", "Does it only display and capture input?", "SQL strings in button handlers"],
            ["Application", "Are use cases orchestrated here?", "500-line GUI class"],
            ["Domain", "Are business rules tested without UI?", "No unit tests"],
            ["Data", "Is persistence swappable?", "Hard-coded files scattered"],
          ],
        },
      },
    ],
  });

  insertBeforeGlossary("dsnidak224", {
    title: "Methods and theory in practice (OOP)",
    subsections: [
      {
        title: "Theory: Liskov substitution explained",
        paragraphs: [
          "If <code>Square</code> extends <code>Rectangle</code> but breaks <code>setWidth</code>/<code>setHeight</code> independence, code expecting a Rectangle misbehaves. That violates Liskov substitution: subtypes must honour expectations of the supertype. Prefer composition when \"is-a\" is shaky.",
        ],
      },
      {
        title: "Method: test-driven development (intro)",
        steps: [
          "Write a failing test for one behaviour.",
          "Write minimal code to pass.",
          "Refactor names and remove duplication.",
          "Repeat. Keeps domain logic testable without GUI.",
        ],
      },
    ],
  });

  insertBeforeGlossary("dsnidak223", {
    title: "Methods and theory in practice (HCI)",
    subsections: [
      {
        title: "Method: cognitive walkthrough (when you cannot run users yet)",
        steps: [
          "Define persona and goal.",
          "For each step toward goal, ask: will user know what to do? see feedback? interpret feedback correctly?",
          "Document breakdowns; fix before coding expensive features.",
        ],
      },
      {
        title: "Theory: Nielsen heuristic mapping",
        paragraphs: [
          "Map each heuristic to concrete UI elements: visibility of status → progress bars; error prevention → disabled submit until valid; recognition over recall → visible filters not hidden commands. Examiners prefer this mapping over listing ten heuristics from memory.",
        ],
      },
    ],
  });

  insertBeforeGlossary("dsnidak222", {
    title: "Methods and theory in practice (systems development)",
    subsections: [
      {
        title: "Method: from event to sequence diagram",
        steps: [
          "Pick one use case (e.g. borrow book).",
          "Identify actor and system boundary.",
          "List messages in time order: :borrow() → validate() → createLoan().",
          "Draw lifelines; add return values and alt fragments for errors.",
          "Implement same message order in code; update diagram if code reveals new objects.",
        ],
      },
      {
        title: "Theory: GRASP Information Expert",
        paragraphs: [
          "Assign responsibility to the class that has the information needed to fulfil it. Balance lives on Account, not on random UI class. This reduces coupling and mirrors domain language.",
        ],
      },
    ],
  });

  insertBeforeGlossary("dsndadk311", {
    title: "Methods and theory in practice (full-stack systems)",
    subsections: [
      {
        title: "App development: REST resource design",
        bullets: [
          "Nouns in URLs (/users, /orders), not verbs (/getOrders)",
          "HTTP methods match intent: GET read, POST create, PUT/PATCH update, DELETE remove",
          "Status codes: 201 created, 400 bad input, 401 unauthenticated, 403 forbidden, 404 missing",
          "Version API (/api/v1/) before breaking clients",
        ],
      },
      {
        title: "Engineering: environment parity",
        paragraphs: [
          "Dev, staging, prod should differ only by configuration (database URL, secrets), not by divergent code paths. Docker Compose or similar reduces \"works on my machine\" at exam demo.",
        ],
      },
    ],
  });

  insertBeforeGlossary("dsndadk321", {
    title: "Methods and theory in practice (empirical IS/HCI)",
    subsections: [
      {
        title: "Method: interview guide skeleton",
        bullets: [
          "Opening: purpose, consent, recording, right to stop",
          "Warm-up: background questions",
          "Core: open questions tied to RQ (not yes/no only)",
          "Probes: \"can you give an example?\" \"what happened next?\"",
          "Closing: anything we missed?",
        ],
      },
      {
        title: "Theory: validity in one paragraph each",
        paragraphs: [
          "<strong>Internal</strong>: could something else explain your results? <strong>External</strong>: who else/contexts apply? <strong>Construct</strong>: does your measure capture the concept? <strong>Reliability</strong>: would repetition agree? Answer all four briefly in discussion.",
        ],
      },
    ],
  });

  insertBeforeGlossary("dsnidak312", {
    title: "Methods and theory in practice (agile SE)",
    subsections: [
      {
        title: "Method: Definition of Ready / Done",
        table: {
          headers: ["DoR ( enters sprint )", "DoD ( leaves sprint )"],
          rows: [
            ["Story has acceptance criteria", "Code reviewed"],
            ["Dependencies identified", "Tests pass in CI"],
            ["Sized by team", "Documented/user-visible demo"],
            ["Product Owner prioritised", "No known critical bugs on story"],
          ],
        },
      },
      {
        title: "Theory: plan-driven vs agile (exam answer)",
        paragraphs: [
          "Plan-driven suits stable requirements and heavy compliance documentation. Agile suits evolving requirements and frequent feedback. Hybrid approaches are common in industry. AAU wants comparison with discipline terms, not \"agile is always better\".",
        ],
      },
    ],
  });

  insertBeforeGlossary("dsnidak314", {
    title: "Methods and theory in practice (databases)",
    subsections: [
      {
        title: "Method: ER → relational mapping rules",
        steps: [
          "Strong entity → table with PK.",
          "1:N relationship → FK on N side.",
          "M:N → junction table with two FKs (and optional attributes).",
          "Multivalued attribute → separate table.",
          "Check 3NF before SQL implementation.",
        ],
      },
      {
        title: "Math: functional dependency notation",
        paragraphs: [
          "Write A → B when knowing column A determines column B (e.g. course_id → instructor_name if one instructor per course). Decompose tables until no transitive dependencies remain on non-keys. This is the algebra behind normalisation proofs at introductory level.",
        ],
      },
      {
        title: "App development: N+1 query problem",
        paragraphs: [
          "Loading 100 orders then 100 separate user queries is 101 round trips. Fix with JOIN or ORM eager loading. Mention performance in semester-3 reports when using ORMs.",
        ],
      },
    ],
  });

  insertBeforeGlossary("valgfag", {
    title: "Methods and theory in practice (electives)",
    subsections: [
      {
        title: "Entrepreneurship: validation interview",
        steps: [
          "Problem hypothesis: who has pain, how do they cope today?",
          "Solution hypothesis: what would they pay/switch for?",
          "Avoid pitching; listen for past behaviour, not future promises.",
          "Update canvas blocks with evidence, not guesses.",
        ],
      },
      {
        title: "AI + HCI: explanation types (Amershi et al.)",
        bullets: [
          "Why this recommendation? (intent/transparency)",
          "Why not another? (contrastive)",
          "How confident? (uncertainty)",
          "What to do next? (actionability)",
        ],
      },
    ],
  });

  insertBeforeGlossary("dsnidafk412", {
    title: "Methods and theory in practice (thesis)",
    subsections: [
      {
        title: "Method: literature search strategy",
        steps: [
          "Define keywords and synonyms from RQ.",
          "Search ACM DL, IEEE Xplore, Scopus/Google Scholar.",
          "Screen titles/abstracts; snowball from key papers.",
          "Organise thematically (not author-by-author only).",
          "Maintain export in reference manager.",
        ],
      },
      {
        title: "Theory: contribution types ( Booth / Wieringa )",
        table: {
          headers: ["Type", "Thesis example"],
          rows: [
            ["Empirical", "User study of dashboard trust"],
            ["Artefact", "Novel tool + evaluation"],
            ["Systematic review", "Synthesis of prior HCI studies"],
            ["Design science", "Method + artefact + lab/field evaluation"],
          ],
        },
      },
    ],
  });
})();
