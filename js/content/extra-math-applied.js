/**
 * Applied maths for CS, IT, and SE: guides, worked scenarios, domain links.
 */
(function () {
  const S = window.CHAPTER_SECTIONS;
  if (!S || !S["extra-math"]) return;

  const id = "extra-math";

  function insertBeforeTitle(titlePart, section) {
    const idx = S[id].findIndex((s) => s.title.includes(titlePart));
    if (idx >= 0) S[id].splice(idx, 0, section);
    else S[id].push(section);
  }

  function insertBeforeGlossary(...sections) {
    const idx = S[id].findIndex((s) => s.title.includes("Key terms glossary"));
    if (idx >= 0) S[id].splice(idx, 0, ...sections);
    else S[id].push(...sections);
  }

  insertBeforeTitle(
    "Why mathematics appears",
    {
      title: "Core subject guide: discrete maths for practitioners",
      paragraphs: [
        "Think of this chapter as a <strong>toolbox</strong>, not a exam syllabus. Each tool solves a recurring problem in CS, IT, and software engineering: uniqueness (sets), rules (logic), structure (graphs/trees), scale (Big-O), uncertainty (probability), and integrity (proofs/invariants).",
        "ACM CS2023 groups these under <strong>Mathematical and Statistical Foundations (MSF)</strong> with knowledge units for sets/relations/functions, logic, proof techniques, counting, graphs/trees, and discrete probability. You meet the same ideas in MIT 6.042J — fundamentals, structures, probability — just spread across your AAU modules.",
      ],
      table: {
        headers: ["Problem you hit", "Math tool", "First place to look in this chapter"],
        rows: [
          ["Duplicate emails in DB", "Sets, keys", "Sets"],
          ["Nested if unreadable", "Logic, De Morgan", "Logic"],
          ["Slow feature on big data", "Big-O", "Big-O"],
          ["JOIN returns millions of rows", "Relations, counting", "Relational algebra"],
          ["Simulation results vary each run", "Probability, LLN", "Probability"],
          ["Loop might never end", "Invariant, induction", "Proofs and invariants"],
        ],
      },
    },
  );

  insertBeforeGlossary(
    {
      title: "Inclusion–exclusion: counting with overlaps",
      paragraphs: [
        "When sets overlap, you cannot just add sizes. <strong>Inclusion–exclusion</strong> (CS2023 MSF counting): |A ∪ B| = |A| + |B| − |A ∩ B|. For three sets, add singles, subtract pairwise intersections, add triple intersection back.",
        "Layman version: you counted people who like pizza and people who like sushi, but double-counted anyone who likes both — subtract the overlap once.",
      ],
      subsections: [
        {
          title: "Worked example: survey checkboxes",
          paragraphs: [
            "100 users. 40 chose feature A, 35 chose B, 20 chose both. How many chose at least one? 40 + 35 − 20 = 55. Without subtracting overlap you would wrongly get 75 and think 25 chose neither when actually 45 chose neither (100 − 55).",
            "In QA: counting test scenarios with overlapping preconditions uses the same correction.",
          ],
        },
      ],
    },
    {
      title: "Finite state machines: maths behind buttons and protocols",
      paragraphs: [
        "A <strong>finite state machine (FSM)</strong> has finitely many states and rules for moving between them on events. Login screens are FSMs: idle → typing → submitting → success/error. Network protocols (TCP handshake) and regular expressions (at a deep level) use the same idea.",
        "MIT 6.042J and MSF logic units connect FSMs to formal languages. You do not need automata proofs in semester 1, but drawing states prevents \"impossible\" transitions (e.g. pay before cart exists).",
      ],
      table: {
        headers: ["State", "Event", "Next state"],
        rows: [
          ["Logged out", "Submit valid credentials", "Logged in"],
          ["Logged in", "Logout", "Logged out"],
          ["Logged in", "Session timeout", "Logged out"],
          ["Submitting", "Network error", "Error (retry allowed)"],
        ],
      },
      callout:
        "UML state diagrams in Systemudvikling are FSMs with engineering paint. If a state has no exit for an event, your spec has a hole.",
    },
    {
      title: "Database normal forms in plain language",
      paragraphs: [
        "Normalisation removes redundancy using functional dependencies (see relational algebra section). Each normal form fixes one class of update bug.",
        "<strong>1NF</strong>: atomic cells — no repeating groups or comma-separated lists in one column. <strong>2NF</strong>: no partial dependency on part of a composite key. <strong>3NF</strong>: no transitive dependency where non-key columns depend on other non-key columns.",
      ],
      subsections: [
        {
          title: "Story example: student clubs",
          paragraphs: [
            "Bad table: one row stores <code>student_id, name, club1, club2, club3</code>. Adding a fourth club breaks schema — violates 1NF. Better: <code>memberships(student_id, club_id)</code> relation so one student links to many clubs without fixed columns.",
            "If <code>postcode → city</code> is stored on every user row, updating a city name requires many rows — 3NF says store city once keyed by postcode.",
          ],
        },
      ],
    },
    {
      title: "Entropy and password strength (NIST-aligned)",
      paragraphs: [
        "<strong>Entropy</strong> measures unpredictability in bits: roughly log₂(number of equally likely outcomes). Longer passwords from a large alphabet increase entropy more reliably than forced <code>P@ssw0rd!</code> patterns attackers already guess.",
        "Current U.S. federal guidance <a href=\"https://pages.nist.gov/800-63-4/sp800-63b.html\" target=\"_blank\" rel=\"noopener\">NIST SP 800-63B (2024 revision)</a>: passwords as <strong>single-factor</strong> authentication must be at least <strong>15 characters</strong>; as part of <strong>multi-factor</strong> authentication at least <strong>8 characters</strong>. Verifiers should allow at least 64 characters, accept Unicode, and <em>not</em> require arbitrary composition rules (mixed symbol types) or periodic rotation without cause.",
        "That shifts focus from \"one uppercase, one digit\" theatre to length, blocklists of breached passwords, and MFA — a math + security story about search space size.",
      ],
      table: {
        headers: ["Policy", "Search space intuition", "Notes"],
        rows: [
          ["8-char PIN (10 digits)", "10⁸ = 100 million", "Weak alone; OK as device PIN with lockout"],
          ["15-char passphrase (62 symbols)", "62¹⁵ ≈ 7.7×10²⁶", "Meets NIST single-factor minimum length"],
          ["Breached password list", "Shrinks effective space", "Blocklist beats composition rules"],
        ],
      },
    },
    {
      title: "Proof techniques you meet in CS (with examples)",
      paragraphs: [
        "CS2023 MSF lists direct proof, proof by contradiction, and induction. Three patterns in plain language:",
      ],
      subsections: [
        {
          title: "Direct proof",
          paragraphs: [
            "Show each step follows logically. Claim: \"sum of two even integers is even.\" If a=2k and b=2m, then a+b=2(k+m) — divisible by 2. In code reviews: \"if inputs are sanitised and API uses parameterised queries, SQL injection cannot occur via this path\" is direct reasoning.",
          ],
        },
        {
          title: "Proof by contradiction",
          paragraphs: [
            "Assume the opposite, derive nonsense. Classic: √2 is irrational. In systems: assume two different primary keys for same entity → violates uniqueness constraint → assumption impossible.",
          ],
        },
        {
          title: "Induction mini-example",
          paragraphs: [
            "Claim: 1+2+…+n = n(n+1)/2. Base n=1: both sides 1. Inductive step: if true for n, then for n+1 add (n+1) to left and algebra matches right. Same structure as recursive function with base case + recursive case.",
          ],
        },
      ],
    },
    {
      title: "Worked scenario: login system end-to-end",
      paragraphs: [
        "Tie tools together the way a semester project might — no code required, only reasoning you can defend orally.",
      ],
      steps: [
        "<strong>Sets</strong>: emails must be unique in the user set; session tokens are a set of active sessions.",
        "<strong>Logic</strong>: allow login iff (valid credentials AND account not locked) OR (valid refresh token AND not expired).",
        "<strong>Functions</strong>: hash(password) → stored digest; must be deterministic, one-way in practice.",
        "<strong>Probability</strong>: rate-limit guesses; model attacker success per hour under lockout policy.",
        "<strong>FSM</strong>: states logged_out → authenticating → active → locked; events: success, failure, timeout.",
        "<strong>Big-O</strong>: lookup user by indexed email O(log n) or O(1); scanning all users O(n) unacceptable at scale.",
      ],
      callout:
        "Examiners reward tracing one user story through data, logic, and failure modes — maths is the vocabulary for that trace.",
    },
    {
      title: "Math habits for software engineering teams",
      bullets: [
        "<strong>Estimate ranges</strong>, not fake precision: \"3–5 days\" beats \"3.7 days\" without data.",
        "<strong>Count test combinations</strong> before promising exhaustive manual QA.",
        "<strong>Plot simulation runs</strong> instead of screenshotting one lucky outcome.",
        "<strong>State invariants</strong> in pull requests for tricky loops or balance logic.",
        "<strong>Check base rates</strong> before believing dashboard alerts (Bayes mindset).",
        "<strong>Normalise data</strong> before blaming \"the framework\" for duplicate-row bugs.",
      ],
    },
  );
})();
