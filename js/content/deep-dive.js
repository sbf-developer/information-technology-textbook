/**
 * Glossaries, worked examples, and grasp checks per chapter.
 * Loaded after academic-ext.js.
 */
(function () {
  const S = window.CHAPTER_SECTIONS;
  if (!S) return;

  function append(id, ...sections) {
    if (!S[id]) S[id] = [];
    S[id].push(...sections);
  }

  const glossary = (rows) => ({
    title: "Key terms glossary",
    paragraphs: [
      "Use this table when a word feels opaque. The middle column is how you would explain it to a friend; the right column is how you write it in a report.",
    ],
    table: { headers: ["Term", "Plain English", "Academic use"], rows },
  });

  const grasp = (text) => ({
    title: "Grasp check (self-test)",
    callout: text,
  });

  // ─── Overview ─────────────────────────────────────────────
  append(
    "overview",
    glossary([
      ["PBL", "Learning by doing projects in groups", "Problem-Based Learning: student-directed inquiry on authentic problems"],
      ["ECTS", "Credit points for workload", "European Credit Transfer System; 1 ECTS ≈ 27.5 hours at AAU"],
      ["Artefact", "Something you build (code, prototype)", "Tangible deliverable demonstrating competence"],
      ["Modularity", "Split into replaceable parts", "Design principle reducing coupling, increasing cohesion"],
    ]),
    grasp(
      "Can you name the four skill layers (CT/programming, modelling/design, engineering process, evidence) and one module from this programme that fits each?",
    ),
  );

  // ─── DSNIDAK121 ───────────────────────────────────────────
  append(
    "dsnidak121",
    glossary([
      ["Computational thinking", "Thinking in precise steps before coding", "Problem formulation admitting computational solutions (Wing, 2006)"],
      ["Agent", "A virtual actor following rules", "Autonomous entity with state and behaviour in ABM"],
      ["Emergence", "Big pattern from small rules", "Macro-scale structure arising from micro-scale interactions"],
      ["Stochastic", "Randomness in rules", "Probabilistic transitions (e.g. move with probability p)"],
      ["Sensitivity analysis", "See what happens when knobs change", "Systematic variation of parameters θ to test robustness"],
      ["ODD protocol", "Checklist for describing simulations", "Overview, Design concepts, Details (Railsback & Grimm)"],
    ]),
    {
      title: "Worked example: SIR-style spread (conceptual)",
      paragraphs: [
        "Classic epidemiology model adapted to rumours, infections, or adoption. Three compartments: <strong>S</strong> susceptible, <strong>I</strong> infected, <strong>R</strong> recovered. This is mathematics you can explain without code first.",
      ],
      steps: [
        "Define the question: \"Does the rumour die out or spread to most agents?\"",
        "Choose representation: each agent is S, I, or R on a network or grid.",
        "Write micro-rule: each tick, infected agents transmit to susceptible neighbours with probability β; infected recover with probability γ.",
        "Identify parameters θ = (β, γ). Higher β spreads faster; higher γ clears infection faster.",
        "Run multiple seeds. Plot fraction I over time. Compare β=0.1 vs β=0.3.",
        "Interpret: if I peaks then goes to zero, rumour dies; if I stays high, endemic spread. State assumptions (homogeneous mixing? synchronous updates?).",
      ],
      callout:
        "AAU exam tip: examiners ask why your model is valid, not only what it shows. Link rules to real mechanism or explicitly label as exploratory.",
    },
    grasp(
      "Explain decomposition for your own project in three sentences: entities, rules, outputs. Then name one thing you abstract away and why that is acceptable.",
    ),
  );

  // ─── DSNIDAK122 ───────────────────────────────────────────
  append(
    "dsnidak122",
    glossary([
      ["Requirement", "Agreed behaviour the system must have", "Constraint on the system domain (functional or quality)"],
      ["Traceability", "Link from idea to code to test", "Bidirectional mapping req ↔ design ↔ implementation ↔ test"],
      ["MVP", "Smallest useful version", "Minimum viable product validating riskiest assumption"],
      ["Regression test", "Test that catches old bugs returning", "Automated check run after changes"],
    ]),
    {
      title: "Worked example: requirement → test chain",
      steps: [
        "Stakeholder says: \"Users must save their simulation and reload it later.\"",
        "Write R3 (functional): \"System persists simulation state and restores it on user request.\"",
        "Add R3a (non-functional): \"Reload completes within 2 seconds for states up to 10,000 agents.\"",
        "Design: <code>StateManager</code> serialises agent list + parameters to JSON file or DB.",
        "Implement: <code>save()</code> and <code>load()</code> methods with error handling.",
        "Test: save known state, mutate, load, assert equality; benchmark load time on 10k agents.",
        "Report row in traceability matrix: R3 → StateManager → test_save_roundtrip, test_load_performance.",
      ],
    },
    grasp(
      "Give one functional and one non-functional requirement for a app you use daily. How would you test each?",
    ),
  );

  // ─── DSNIDAK123 ───────────────────────────────────────────
  append(
    "dsnidak123",
    glossary([
      ["TPS", "System recording daily transactions", "Transaction Processing System at operational level"],
      ["ERP", "One suite for finance, HR, stock, etc.", "Enterprise Resource Planning integrating core processes"],
      ["Socio-technical", "People and tech together", "Joint optimisation of social and technical subsystems"],
      ["Governance", "Who decides IT priorities", "Allocation of decision rights and accountability for IT"],
      ["Shadow IT", "Unofficial tools staff use instead", "Non-sanctioned systems bypassing formal IS"],
    ]),
    {
      title: "Worked example: ERP vs CRM for a small NGO",
      steps: [
        "Need: track donors, donations, events, and basic accounting export.",
        "TPS level: each donation is a transaction (amount, date, donor id).",
        "CRM level: donor relationship history, campaigns, communication log.",
        "ERP would integrate finance + HR + inventory: likely overkill and costly for 15 staff.",
        "SaaS CRM + lightweight accounting integration may fit: argue TCO, training, GDPR on donor data.",
        "Socio-technical risk: volunteers use personal spreadsheets if official system is slow; plan training champion.",
      ],
    },
    grasp(
      "Pick an IS you use at work or university. Classify it (TPS/MIS/DSS/ERP/CRM) and name one organisational reason it succeeds or fails.",
    ),
  );

  // ─── DSNIDAK124 ───────────────────────────────────────────
  append(
    "dsnidak124",
    glossary([
      ["Variable", "Named box for a value", "Identifier binding to storage with a type"],
      ["Type", "Kind of value allowed", "Set of values + operations (int, string, bool, etc.)"],
      ["Scope", "Where a name is visible", "Lexical or dynamic region defining identifier visibility"],
      ["Invariant", "Something that must stay true", "Condition preserved by correct code (esp. in loops)"],
      ["Big-O", "How runtime grows with input size", "Asymptotic upper bound on resource use"],
      ["DOM", "Browser tree of HTML elements", "Document Object Model API for web pages"],
    ]),
    {
      title: "Worked example: loop invariant for sum",
      paragraphs: [
        "Goal: sum numbers 1..n. A loop invariant proves the algorithm is correct, not only that it \"seems to work\" on a few examples.",
      ],
      steps: [
        "Init: <code>sum = 0</code>, <code>i = 1</code>. Invariant: \"sum equals sum of integers from 1 to i−1.\"",
        "Before first iteration: i=1, sum=0, which is sum of 1..0 (empty sum = 0). Invariant holds.",
        "Each iteration: add i to sum, then increment i. Now sum equals 1..i−1 for new i.",
        "Termination: when i > n, invariant gives sum = 1+2+…+n = n(n+1)/2.",
        "Complexity: one loop 1..n → O(n) time, O(1) extra space.",
      ],
      code: {
        lang: "python",
        caption: "Sum 1..n with explicit invariant reasoning.",
        source: `
def sum_to_n(n):
    total = 0
    # invariant: total == sum(1..i-1)
    for i in range(1, n + 1):
        total += i
    return total

assert sum_to_n(5) == 15
assert sum_to_n(100) == 5050
`.trim(),
      },
    },
    {
      title: "Worked example: why O(n²) matters",
      paragraphs: [
        "Nested loops over n items often mean O(n²). Doubling n quadruples work. That is core CS, not esoteric maths.",
      ],
      table: {
        headers: ["n", "O(n) operations", "O(n²) operations"],
        rows: [
          ["100", "100", "10,000"],
          ["1,000", "1,000", "1,000,000"],
          ["10,000", "10,000", "100,000,000"],
        ],
      },
      callout:
        "If your semester project compares every agent to every other agent each tick, mention scalability limits honestly in the report.",
    },
    grasp(
      "Write pseudocode to find the largest number in a list. What is its Big-O? What changes if the list were sorted first?",
    ),
  );

  // ─── Semester 2 ────────────────────────────────────────────
  append(
    "dsndadk221",
    glossary([
      ["Vertical slice", "One feature end-to-end", "Increment spanning UI, logic, and persistence"],
      ["Prototype", "Quick model to learn", "Representation for evaluation, low or high fidelity"],
      ["External exam", "Examiner from outside AAU", "Independent assessment of project quality"],
    ]),
    grasp(
      "Draw one user journey for your semester project in five boxes: trigger → action → system response → feedback → outcome. Where could usability fail?",
    ),
  );

  append(
    "dsnidak224",
    glossary([
      ["Class", "Blueprint for objects", "User-defined type describing state + behaviour"],
      ["Encapsulation", "Hide inner data", "Information hiding via access control"],
      ["Polymorphism", "Same interface, different behaviour", "Subtype substitutability for operations"],
      ["Interface", "Contract of methods", "Abstract type specifying operations without implementation"],
      ["Coupling", "How much modules depend on each other", "Degree of interdependence between components"],
    ]),
    {
      title: "Worked example: modelling a library book",
      steps: [
        "Nouns → classes: <code>Book</code>, <code>Member</code>, <code>Loan</code>.",
        "<code>Book</code>: attributes isbn, title; methods isAvailable(), markOnLoan().",
        "Encapsulation: status private; public methods enforce rules (cannot loan twice).",
        "Association: <code>Loan</code> links one Member and one Book with dueDate.",
        "Polymorphism optional: <code>DigitalResource</code> vs <code>PhysicalBook</code> share borrow() with different rules.",
        "Test without GUI: assert cannot loan unavailable book throws or returns error.",
      ],
    },
    grasp(
      "Why is deposit(−100) a design problem? Where should validation live: UI, controller, or model class?",
    ),
  );

  append(
    "dsnidak223",
    glossary([
      ["UCD", "Design around real users", "User-Centred Design process (ISO 9241-210)"],
      ["Affordance", "What actions seem possible", "Perceived action possibilities of an object/UI"],
      ["Heuristic", "Rule of thumb for good UI", "Empirical principle for usability inspection"],
      ["Think-aloud", "User speaks while trying tasks", "Concurrent verbal protocol in usability testing"],
      ["Persona", "Fictional but realistic user profile", "Archetype summarising user goals and constraints"],
    ]),
    {
      title: "Worked example: mini usability test plan",
      steps: [
        "Goal: can first-time users create an account in under 3 minutes?",
        "Recruit 5 participants similar to target group (not teammates).",
        "Tasks: (1) register, (2) complete profile, (3) log out and log in again.",
        "Measure: success/fail, time, errors, subjective frustration (1–5).",
        "Observe: where do they hesitate? misclick? misread labels?",
        "Report 3–5 findings ranked by severity with screenshot quotes.",
        "Iterate: fix top issue, re-test if time allows.",
      ],
    },
    grasp(
      "Open a website you know. Violate one Nielsen heuristic on purpose and explain why it hurts users.",
    ),
  );

  append(
    "dsnidak222",
    glossary([
      ["Use case", "Goal an actor achieves with the system", "Behavioural requirement scenario from actor perspective"],
      ["Domain model", "Concepts of the problem world", "Conceptual class diagram of problem domain"],
      ["MVC", "Split UI, logic, and data roles", "Model-View-Controller separation of concerns"],
      ["Sequence diagram", "Messages over time", "Interaction diagram showing lifelines and messages"],
      ["GRASP Controller", "Who handles system events?", "Assign responsibility for handling system events"],
    ]),
    {
      title: "Worked example: from use case to classes",
      steps: [
        "Use case: \"Member borrows book\" actor: Member, main flow: scan book → check availability → create Loan.",
        "Nouns in text → candidate classes: Member, Book, Loan, Catalogue.",
        "Controller: <code>LoanController</code> receives borrow request (GRASP Controller).",
        "Expert: Book knows if it is available (GRASP Information Expert).",
        "Sequence: Member → LoanController → Book.isAvailable() → Loan.create().",
        "Class diagram: Member 1..* Loan *..1 Book. Implement in OOP course.",
      ],
    },
    grasp(
      "Name two AAU analysis patterns (object-descriptor, hierarchy, etc.) and say what problem each solves in one line.",
    ),
  );

  // ─── Semester 3 ────────────────────────────────────────────
  append(
    "dsndadk311",
    glossary([
      ["Full-stack", "Frontend + backend + storage", "End-to-end application spanning all tiers"],
      ["API", "Defined way programs talk", "Application Programming Interface (often REST/JSON)"],
      ["Authentication", "Proving who you are", "AuthN: identity verification"],
      ["Authorisation", "What you may do", "AuthZ: permission checks after identity"],
      ["Deployment", "Running software for users", "Release to reachable environment (server, cloud)"],
    ]),
    grasp(
      "Sketch three boxes: browser, API server, database. For \"user updates profile\", which box does what?",
    ),
  );

  append(
    "dsndadk321",
    glossary([
      ["Research question", "Precise question you answer", "Interrogative guiding design and analysis"],
      ["Literature gap", "What prior work did not cover", "Claimed absence/limitation motivating study"],
      ["Thematic analysis", "Find themes in qualitative data", "Method coding text into patterns (Braun & Clarke)"],
      ["Construct validity", "Does measure match concept?", "Does operationalisation reflect theoretical construct?"],
    ]),
    {
      title: "Worked example: turning interest into RQ",
      steps: [
        "Interest: \"AI chatbots in student support.\"",
        "Too vague for one semester. Narrow: trust when answers may be wrong.",
        "RQ: \"How do first-year students decide whether to trust FAQ chatbot answers during enrollment?\"",
        "Method fit: qualitative interviews (8 students) + thematic analysis.",
        "Literature: HCI trust, algorithm transparency, chatbot UX papers.",
        "Contribution: themes + design implications, not \"best chatbot ever built.\"",
      ],
    },
    grasp(
      "Write one feasible RQ for a topic you care about. Is it qualitative, quantitative, or mixed? Why?",
    ),
  );

  append(
    "dsnidak312",
    glossary([
      ["Sprint", "Fixed timebox for delivery", "Scrum iteration producing potentially shippable increment"],
      ["Backlog", "Ordered list of work", "Product Backlog: all known items; Sprint Backlog: current commitment"],
      ["DoD", "Shared definition of finished", "Definition of Done: quality gate for increment"],
      ["CI", "Auto-build and test on merge", "Continuous Integration pipeline"],
      ["Technical debt", "Shortcuts that slow future work", "Deferred design/code quality incurring cost"],
    ]),
    {
      title: "Worked example: one sprint plan (2 weeks)",
      steps: [
        "Sprint goal: \"User can register and log in securely.\"",
        "Pull stories: registration form, password hash, login endpoint, session cookie, tests.",
        "DoD: code reviewed, unit tests pass, documented in README, demo on staging.",
        "Daily Scrum: each dev states yesterday/today/blockers (15 min).",
        "Sprint review: demo to group/stakeholder; collect feedback.",
        "Retrospective: one start/stop/continue action (e.g. add lint to CI).",
      ],
    },
    grasp(
      "Compare waterfall and Scrum for a project with stable vs changing requirements. When would plan-driven win?",
    ),
  );

  append(
    "dsnidak314",
    glossary([
      ["Relation", "Table in the database", "Mathematical relation (set of tuples) in Codd's model"],
      ["Primary key", "Unique row identifier", "Minimal superkey uniquely identifying tuples"],
      ["Foreign key", "Link to another table's key", "Referential constraint to parent relation"],
      ["Normalisation", "Split tables to avoid redundancy", "Decomposition removing anomalies via FDs"],
      ["Transaction", "All-or-nothing batch of SQL", "Atomic unit of work satisfying ACID"],
    ]),
    {
      title: "Worked example: normalise a bad table to 3NF",
      paragraphs: [
        "Unnormalised table mixes student, course, and instructor data. Classic exam pattern at AAU.",
      ],
      table: {
        headers: ["student_id", "student_name", "course_id", "course_title", "instructor"],
        rows: [
          ["S1", "Ada", "C101", "Databases", "Dr. Chen"],
          ["S1", "Ada", "C102", "HCI", "Dr. Nielsen"],
          ["S2", "Bo", "C101", "Databases", "Dr. Chen"],
        ],
      },
      steps: [
        "Problem: repeating student_name for S1; repeating instructor for C101 (update anomaly).",
        "1NF: already atomic cells (good).",
        "Entities: Student(student_id, student_name), Course(course_id, course_title, instructor), Enrollment(student_id, course_id).",
        "2NF: Enrollment has composite key (student_id, course_id); no partial dependencies on half the key.",
        "3NF: instructor depends on course_id, not on student_id: stored in Course, not Enrollment.",
        "Result: three tables, no redundant instructor or name storage.",
      ],
      code: {
        lang: "sql",
        caption: "Schema after decomposition.",
        source: `
CREATE TABLE students (
  student_id TEXT PRIMARY KEY,
  student_name TEXT NOT NULL
);
CREATE TABLE courses (
  course_id TEXT PRIMARY KEY,
  course_title TEXT NOT NULL,
  instructor TEXT NOT NULL
);
CREATE TABLE enrollments (
  student_id TEXT REFERENCES students(student_id),
  course_id TEXT REFERENCES courses(course_id),
  PRIMARY KEY (student_id, course_id)
);
`.trim(),
      },
    },
    grasp(
      "Write SQL to list all courses Ada takes with instructor names. Which JOIN types do you need?",
    ),
  );

  append(
    "valgfag",
    glossary([
      ["Value proposition", "Why customers choose you", "Bundle of benefits solving customer jobs"],
      ["Canvas", "One-page business model sketch", "Business Model Canvas (Osterwalder)"],
      ["Explainability", "User understands why AI said X", "XAI: interpretable reasons for model outputs"],
      ["Human-in-the-loop", "Human approves or corrects AI", "HITL: human oversight in automated pipeline"],
    ]),
    grasp(
      "For an AI feature in an app: what would a user need to see to trust a recommendation? One sentence on ethics.",
    ),
  );

  append(
    "dsnidafk412",
    glossary([
      ["Contribution", "What your thesis adds new", "Original knowledge, artefact, or evaluated insight"],
      ["IMRaD", "Intro, Methods, Results, Discussion", "Standard scientific article structure"],
      ["Limitations", "What your study cannot claim", "Boundary conditions on validity and generalisation"],
      ["Supervision", "Guidance from academic advisor", "Periodic feedback on scope, method, writing"],
    ]),
    {
      title: "Worked example: thesis outline skeleton",
      steps: [
        "Ch.1 Introduction: problem, RQ, scope, contribution preview (4–6 pages).",
        "Ch.2 Theory: concepts + related work synthesis showing gap (15–25 pages).",
        "Ch.3 Method: design, data, instruments, analysis plan, ethics (8–12 pages).",
        "Ch.4 Implementation (if dev thesis): architecture decisions, not code dump.",
        "Ch.5 Results: answer RQ with figures, tables, quotes.",
        "Ch.6 Discussion: implications, limitations, future work.",
        "Ch.7 Conclusion: short; no new claims.",
      ],
    },
    grasp(
      "In two sentences: your tentative topic, RQ, and whether contribution is empirical, artefact, or both.",
    ),
  );
})();
