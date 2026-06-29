/**
 * Cross-cutting foundations and deep explanatory sections.
 * Goal: reader grasps principles, methods, theory, and math before exam depth.
 */
(function () {
  const S = window.CHAPTER_SECTIONS;
  if (!S) return;

  function insertAfterTitle(id, titlePart, section) {
    if (!S[id]) return;
    const idx = S[id].findIndex((s) => s.title.includes(titlePart));
    if (idx >= 0) S[id].splice(idx + 1, 0, section);
    else S[id].push(section);
  }

  function insertBeforeGlossary(id, section) {
    if (!S[id]) return;
    const idx = S[id].findIndex((s) => s.title.includes("Key terms glossary"));
    if (idx >= 0) S[id].splice(idx, 0, section);
    else S[id].push(section);
  }

  if (S.overview) {
    S.overview.splice(1, 0, {
      title: "Mathematical and logical foundations (for the whole degree)",
      paragraphs: [
        "You do not need a maths degree to succeed in this programme, but several ideas from discrete mathematics and logic appear again and again: in <strong>if</strong> statements, database keys, algorithm speed, and proof-style reasoning in reports. This section gives you a shared vocabulary.",
        "<strong>Sets</strong> are collections of distinct objects. In programming, a set of valid user IDs is the set of keys in your users table. In logic, the domain is the set of values a variable may take. Subset means every element of A is also in B. Database normalisation is partly about not storing the same fact in two places that can disagree: one source of truth.",
        "<strong>Functions</strong> map each input to exactly one output. A function f(n) = n² is deterministic: 3 always maps to 9. Methods in OOP are functions attached to objects. Pure functions (same input → same output, no hidden side effects) are easier to test. When a method changes global state unpredictably, debugging becomes hunting for when the state changed.",
        "<strong>Relations</strong> link objects from two sets. A foreign key in SQL expresses a relation: each order row relates to exactly one user row. Relations can be one-to-one, one-to-many, or many-to-many (via a junction table). Drawing ER diagrams is drawing relations before you write CREATE TABLE.",
      ],
      subsections: [
        {
          title: "Logic: conditions you can trust",
          paragraphs: [
            "Programs branch on Boolean expressions. De Morgan's laws help you simplify conditions: NOT (A AND B) is equivalent to (NOT A) OR (NOT B). If your nested ifs feel unreadable, rewrite with truth tables or short test cases.",
            "An <strong>invariant</strong> is a condition that stays true every time through a loop. Example: in binary search, the target index (if it exists) always lies between low and high. Stating invariants in comments or reports shows you understand why the loop terminates and why it is correct.",
          ],
          table: {
            headers: ["Expression", "Plain meaning", "Typical bug if wrong"],
            rows: [
              ["A AND B", "Both must be true", "Checking only one condition"],
              ["A OR B", "At least one true", "Using OR when you needed AND"],
              ["NOT A", "Negation", "Off-by-one in boundary checks"],
              ["A → B (implies)", "If A then B", "Assuming B means A happened"],
            ],
          },
        },
        {
          title: "Big-O: when does the program slow down?",
          paragraphs: [
            "Big-O describes how <em>running time or space grows</em> as input size n grows. It ignores constants: O(n) and O(10n) are both linear. What matters is whether doubling data doubles work (O(n)), quadruples it (O(n²)), or barely changes it (O(log n)).",
            "Example: scanning a list once to find a name is O(n). Nested loops comparing every pair of users is O(n²). Binary search on a sorted list is O(log n) per lookup. For semester projects, n is often small, but examiners and employers expect you to notice when an algorithm will not scale.",
          ],
          table: {
            headers: ["Notation", "Growth", "Example"],
            rows: [
              ["O(1)", "Constant", "Array index by position"],
              ["O(log n)", "Logarithmic", "Binary search"],
              ["O(n)", "Linear", "Single loop over records"],
              ["O(n log n)", "Linearithmic", "Good sorting (mergesort)"],
              ["O(n²)", "Quadratic", "Nested loops over all pairs"],
            ],
          },
        },
        {
          title: "Abstraction: the central CS move",
          paragraphs: [
            "Abstraction hides detail behind a simpler interface. A SQL query abstracts file storage; a function <code>sendEmail(to, subject, body)</code> abstracts SMTP. Good abstractions leak only when you need them (e.g. you still must know SQL to fix a slow query).",
            "Software engineering adds <strong>separation of concerns</strong>: UI, business rules, and persistence change for different reasons. Mathematics adds <strong>proof and invariant reasoning</strong>. Information systems add <strong>fit with people and organisations</strong>. The degree asks you to combine all three, not pick one.",
          ],
        },
      ],
    });
  }

  insertBeforeGlossary("dsndadk221", {
    title: "Method walkthrough: lightweight usability test",
    paragraphs: [
      "External examiners want evidence that real users tried your system. A lightweight test is enough if the protocol is clear and findings changed something. This method aligns with ISO 9241-210 (evaluate designs) and Nielsen's guidance on small-n testing.",
    ],
    steps: [
      "<strong>Define tasks</strong> (3–5): realistic goals, not \"click every button\". Example: \"Book a table for two on Friday at 19:00.\"",
      "<strong>Recruit 5 participants</strong> similar to target users (not only group members). Note demographics briefly for the report.",
      "<strong>Prepare</strong>: prototype or running app, consent if recording, think-aloud instruction (\"say what you expect as you go\").",
      "<strong>Run session</strong> (~30–45 min): one facilitator, one note-taker. Do not help unless stuck past 2 minutes; record where they stuck.",
      "<strong>Rate findings</strong>: severity (critical / major / minor / cosmetic) and frequency across users.",
      "<strong>Fix and re-test</strong> at least one critical/major issue; report before/after in the thesis-style evidence chain.",
    ],
    table: {
      headers: ["Finding type", "Example", "Design response"],
      rows: [
        ["Critical", "Cannot complete payment", "Fix before exam; block release"],
        ["Major", "Mis-clicks delete item", "Confirm dialog, undo"],
        ["Minor", "Label jargon", "Rename to user language"],
        ["Cosmetic", "Colour contrast low", "Fix if time; note in limitations"],
      ],
    },
    callout:
      "Quote users in the report: \"I thought Confirm would save a draft\" beats \"some users were confused.\" Link each quote to a screenshot and a code or wireframe change.",
  });

  insertBeforeGlossary("dsndadk221", {
    title: "Theory: layered architecture explained",
    paragraphs: [
      "Layered architecture is the standard way to organise interactive applications at AAU from semester 2 onward. Each layer has one reason to change (single responsibility at system level).",
      "<strong>Presentation layer</strong>: screens, HTML, components, event handlers. It displays state and forwards user actions. It should not compute tax rules or run SQL.",
      "<strong>Application / service layer</strong>: coordinates use cases (\"place order\", \"renew loan\"). Validates input, calls domain objects, starts transactions.",
      "<strong>Domain layer</strong>: business rules (pricing, eligibility, game rules). Pure logic you can unit-test without a browser or database.",
      "<strong>Persistence layer</strong>: repositories, SQL, ORM. Maps domain objects to tables. Swapping SQLite for PostgreSQL should touch mainly this layer.",
    ],
    code: {
      lang: "text",
      caption: "Trace one button click through layers (write this in your report).",
      source: `
User clicks "Renew loan" (Presentation)
  → Controller calls LoanService.renew(userId, loanId) (Application)
    → Loan entity checks policy: max renewals, no holds (Domain)
    → LoanRepository.updateDueDate(...) (Persistence)
  → UI shows new due date or error message (Presentation)
`.trim(),
    },
  });

  insertBeforeGlossary("dsnidak222", {
    title: "Worked example: from use case to class diagram",
    paragraphs: [
      "Systemudvikling at AAU expects you to connect <strong>behaviour</strong> (use cases, sequences) with <strong>structure</strong> (classes). Below is a minimal library loan example you can copy as a template.",
    ],
    subsections: [
      {
        title: "Use case (behaviour)",
        bullets: [
          "<strong>Actor</strong>: Member",
          "<strong>Goal</strong>: Renew loan",
          "<strong>Main flow</strong>: Member selects loan → system checks policy → extends due date → confirmation",
          "<strong>Extensions</strong>: Hold exists → renewal denied; max renewals reached → denied",
        ],
      },
      {
        title: "Class diagram (structure)",
        bullets: [
          "<code>Member</code> (id, name), 1..* to <code>Loan</code>",
          "<code>Loan</code> (id, dueDate, renewalCount), many to <code>Item</code>",
          "<code>LoanPolicy</code> (maxRenewals, rules) used by <code>LoanService</code>",
          "Controller class receives UI events; domain classes do not know about buttons",
        ],
      },
      {
        title: "GRASP hint: who should renew?",
        paragraphs: [
          "<strong>Information Expert</strong>: Loan knows its due date and renewal count, so either Loan.renew() or a LoanService that reads Loan is appropriate. Do not put SQL inside Loan if you want clean unit tests: inject a repository interface (Dependency Inversion).",
        ],
      },
    ],
  });

  insertBeforeGlossary("dsnidak312", {
    title: "Engineering practice: continuous integration (CI)",
    paragraphs: [
      "Agile without automated tests is just frequent demos of broken code. <strong>Continuous integration</strong> means every merge to the main branch triggers an automated build and test run. Failures are visible within minutes, not on exam day.",
      "A minimal student CI pipeline: (1) checkout code, (2) install dependencies, (3) run linter, (4) run unit tests, (5) optional integration test against a test database. GitHub Actions, GitLab CI, and similar tools are free for student repos.",
    ],
    table: {
      headers: ["Practice", "What it prevents", "AAU link"],
      rows: [
        ["Trunk-based or short-lived branches", "Merge hell before sprint review", "Semester 3 project"],
        ["Automated unit tests on push", "Regressions in domain logic", "DSNIDAK312, DSNDADK311"],
        ["Code review before merge", "Single-person blind spots", "Group projects"],
        ["Staging environment", "\"Works on my laptop\" surprises", "External exam demo"],
      ],
    },
  });

  insertBeforeGlossary("dsnidak312", {
    title: "Theory: when agile vs plan-driven",
    paragraphs: [
      "The Agile Manifesto is not a license to skip planning. It prioritises learning from working software. Plan-driven methods (waterfall variants, V-model) front-load specification and suit domains where change is expensive after deployment (medical device firmware, some public tenders).",
      "Choose agile when requirements are uncertain, users can give feedback every few weeks, and the team can deploy incrementally. Choose more plan-driven when contracts fix scope, regulators require traceability documents, or hardware dependencies lock the schedule.",
    ],
    table: {
      headers: ["Signal", "Favour agile", "Favour plan-driven"],
      rows: [
        ["Requirement stability", "Low, learning expected", "High, fixed contract"],
        ["User access", "Available for sprint reviews", "Only at milestones"],
        ["Regulation", "Light documentation OK", "Formal verification trail"],
        ["Team", "Co-located, cross-functional", "Hand-offs between silos"],
      ],
    },
  });

  insertBeforeGlossary("dsnidak314", {
    title: "Worked example: normalising a messy spreadsheet",
    paragraphs: [
      "Imagine a spreadsheet exported from a shop till. Each row mixes order, customer, and product facts. Storing it as one wide table causes update anomalies: change a customer email in one row and old rows still show the old email.",
    ],
    subsections: [
      {
        title: "Unnormalised (one table)",
        code: {
          lang: "text",
          caption: "Redundant: customer_name and product_name repeat on every line item.",
          source: `
order_id | order_date | customer_id | customer_name | customer_email | product_id | product_name | qty | unit_price
1001     | 2025-03-01 | C42         | Ana Jensen    | ana@x.dk       | P9         | Mug          | 2   | 79.00
`.trim(),
        },
      },
      {
        title: "After 3NF (four tables)",
        bullets: [
          "<code>customers(customer_id, name, email)</code>",
          "<code>products(product_id, name, unit_price)</code>",
          "<code>orders(order_id, customer_id, order_date)</code>",
          "<code>order_lines(order_id, product_id, qty)</code>",
          "Customer email stored once; price changes affect products table only; orders reference IDs",
        ],
      },
      {
        title: "Math link: functional dependency",
        paragraphs: [
          "We say customer_id → customer_name: knowing the ID determines the name (in a consistent database). Transitive dependency customer_id → customer_name → customer_email motivated moving customer fields to their own table. That is the intuition behind 3NF without memorising formal definitions alone.",
        ],
      },
    ],
  });

  insertBeforeGlossary("valgfag", {
    title: "Entrepreneurship: Business Model Canvas explained",
    paragraphs: [
      "Entreprenørskab (DSNDADFK311) uses the canvas to force explicit assumptions. Each block is a hypothesis you can test, not a slide decoration.",
    ],
    table: {
      headers: ["Canvas block", "Question you must answer", "IT student mistake"],
      rows: [
        ["Customer segments", "Who has the problem?", "\"Everyone with a phone\""],
        ["Value proposition", "What outcome do they get?", "Listing features, not outcomes"],
        ["Channels", "How do they discover and buy?", "Assuming app store is enough"],
        ["Revenue streams", "Who pays how much?", "No payer identified"],
        ["Key resources", "What must you build or hire?", "Underestimating support and sales"],
        ["Cost structure", "Fixed vs variable costs?", "Ignoring hosting, compliance, time"],
      ],
    },
    callout:
      "Lean Startup method: build the smallest experiment (landing page, wizard-of-oz demo) to test riskiest assumption before semester project scope explodes.",
  });

  insertBeforeGlossary("valgfag", {
    title: "AI + HCI: designing when the model is wrong",
    paragraphs: [
      "Brugercentreret interaktion med kunstig intelligens (DSNDADFK333) extends HCI to systems where output is probabilistic. Users trust or reject suggestions based on interface design, not only model accuracy.",
      "Amershi et al. (2019) summarise patterns: show confidence when appropriate, support efficient correction, provide global controls, and make clear what the AI can and cannot do. EU AI Act adds legal context for high-risk uses; even student projects should note data consent and bias limits.",
    ],
    bullets: [
      "<strong>Explainability</strong>: show inputs or short rationale, not black-box scores",
      "<strong>Control</strong>: user can override, edit, or turn off suggestions",
      "<strong>Failure design</strong>: empty states and errors when model unavailable",
      "<strong>Evaluation</strong>: task time and error rate when AI is wrong, not only SUS",
    ],
    table: {
      headers: ["Risk", "Design response", "Research term"],
      rows: [
        ["Over-trust", "Show uncertainty, require confirm on high impact", "Automation bias"],
        ["Under-trust", "Show provenance, match user mental model", "Appropriate reliance"],
        ["Wrong suggestion", "One-click fix, learn from correction", "Human-in-the-loop"],
      ],
    },
  });

  insertBeforeGlossary("dsnidak124", {
    title: "Grasp the execution model",
    paragraphs: [
      "Programs run as a sequence of statements in a call stack. When function A calls B, B must finish (or throw) before A continues. Local variables live on the stack frame; objects on the heap are referenced by variables.",
      "This mental model explains common bugs: two variables referencing the same list object (aliasing), off-by-one loops, and null/undefined access. Drawing the stack and heap on paper for a small program is a valid exam preparation technique.",
    ],
    code: {
      lang: "javascript",
      caption: "Aliasing: both names point to the same list object.",
      source: `
const a = [1, 2, 3];
const b = a;       // same object, not a copy
b.push(4);
console.log(a.length); // 4: surprising if you expected copy
`.trim(),
    },
  });

  insertBeforeGlossary("dsnidak121", {
    title: "Theory: emergence and sensitivity analysis",
    paragraphs: [
      "Emergence means system-level patterns not obvious from individual rules alone (Schelling segregation, flocking). Your report should show <strong>micro rules</strong> (what one agent does) and <strong>macro metrics</strong> (what you measure globally: segregation index, mean opinion, throughput).",
      "Sensitivity analysis: vary one parameter θ while holding others fixed, run multiple seeds, plot outcome vs θ. If results flip wildly between neighbouring θ values, say so; that is scientific honesty, not weakness.",
    ],
    table: {
      headers: ["Step", "Purpose"],
      rows: [
        ["Fix random seed for debugging", "Reproduce a bug in the model"],
        ["Run 30+ seeds per setting", "Estimate distribution, not one lucky run"],
        ["Vary one parameter", "Isolate causal effect in the model"],
        ["Compare to baseline", "Show effect size, not only final screenshot"],
      ],
    },
  });
})();
