/**
 * Extra math: From zero spine + progressive lessons.
 * Prepended/inserted into extra-math chapter.
 */
(function () {
  const S = window.CHAPTER_SECTIONS;
  if (!S || !S["extra-math"]) return;

  const id = "extra-math";

  function prepend(...sections) {
    S[id] = [...sections, ...S[id]];
  }

  function insertAfterTitle(titlePart, section) {
    const idx = S[id].findIndex((s) => s.title.includes(titlePart));
    if (idx >= 0) S[id].splice(idx + 1, 0, section);
    else S[id].push(section);
  }

  function insertBeforeGlossary(section) {
    const idx = S[id].findIndex((s) => s.title.includes("Key terms glossary"));
    if (idx >= 0) S[id].splice(idx, 0, section);
    else S[id].push(section);
  }

  prepend(
    {
      title: "From zero (1/4): Maths without fear",
      paragraphs: [
        "Many students arrive thinking \"I am bad at maths\" because school maths felt like memorising formulas. <strong>Discrete mathematics for CS</strong> is different: it is about patterns in counting, logic, and structures that look like data — things you can often <em>run as code</em> and check.",
        "You already do maths when you compare two prices, split a bill, or decide \"if it is raining AND I have no umbrella, I take the bus\". This chapter names those habits so you can reuse them in programming, databases, and thesis writing.",
        "Official CS curricula (ACM/IEEE <a href=\"https://csed.acm.org/wp-content/uploads/2023/09/MSF-Version-Gamma-V3.pdf\" target=\"_blank\" rel=\"noopener\">CS2023 MSF</a>) list sets, logic, proof techniques, counting, graphs, probability, and statistics as core — not calculus-heavy analysis.",
      ],
    },
    {
      title: "From zero (2/4): Reading symbols like syntax",
      paragraphs: [
        "Math notation is a compressed programming language. Learn a few symbols once; they repeat everywhere.",
      ],
      table: {
        headers: ["Symbol", "Read as", "Code analogue"],
        rows: [
          ["∈", "is an element of", "<code>list.includes(x)</code>"],
          ["∀", "for all", "<code>every()</code> / loop over all"],
          ["∃", "there exists", "<code>some()</code> / found a match"],
          ["→", "implies (if…then)", "precondition → postcondition"],
          ["∧ / ∨", "and / or", "<code>&&</code> / <code>||</code>"],
          ["Σ", "sum", "accumulator in a loop"],
          ["O(n)", "grows like n", "nested loop cost intuition"],
        ],
      },
      callout:
        "When a formula looks scary, rewrite it in English or pseudocode line by line. MIT 6.042J uses exactly that pedagogy: precise definitions, then examples, then proof.",
    },
    {
      title: "From zero (3/4): How to use this chapter",
      steps: [
        "Read the <strong>Start here</strong> plain-language box once.",
        "Skim the roadmap table in section 1; bookmark two topics you need this week (e.g. probability for ABM, relations for SQL).",
        "Work through one <strong>Lesson</strong> per study session; do the mental check at the end.",
        "When a semester module mentions a term (Big-O, foreign key, invariant), jump back here instead of guessing.",
        "Use <strong>Further reading</strong> only when you want university-level depth; the body text is enough for projects.",
      ],
    },
    {
      title: "From zero (4/4): What you can skip for now",
      bullets: [
        "Formal induction proofs — know the idea; full write-ups are for advanced courses",
        "Graph isomorphism, spanning tree proofs — intuition is enough until algorithms courses",
        "Calculus and linear algebra — not required for most AAU semester 1–3 modules (CS2023 lists them separately from discrete MSF core)",
        "Memorising combinatorial formulas — understand product rule and \"n choose k\" meaning; look up numbers when needed",
      ],
    },
  );

  const lesson = (n, title, body) => ({ title: `Lesson ${n}: ${title}`, ...body });

  insertAfterTitle(
    "From zero (4/4)",
    lesson(1, "Whole numbers and booleans", {
      paragraphs: [
        "Computers store integers exactly (until overflow). They approximate reals. That is why loop counters use integers and money apps use cents as integers.",
        "A <strong>Boolean</strong> is true or false — one bit of information. Eight booleans could describe feature flags; 32 bits make a standard integer on many systems.",
      ],
      table: {
        headers: ["Question", "Math view", "Code view"],
        rows: [
          ["Is x allowed?", "Predicate P(x)", "function isAllowed(x) { return … }"],
          ["How many items?", "Count |S|", "<code>array.length</code>"],
          ["All valid?", "∀x P(x)", "loop; return false on first fail"],
        ],
      },
    }),
    lesson(2, "if-statements and truth tables", {
      paragraphs: [
        "Three booleans A, B, C → 2³ = 8 combinations. You rarely write the full table, but it explains branch coverage: if tests only cover 3 of 8 rows, five situations never ran.",
        "De Morgan in code: <code>!(a && b)</code> equals <code>!a || !b</code>. Refactoring conditions using this law fixes double negatives that confuse readers.",
      ],
    }),
    lesson(3, "Loops and sums", {
      paragraphs: [
        "Adding 1 + 2 + … + n is the loop <code>sum = 0; for i in 1..n: sum += i</code>. Closed form n(n+1)/2 is optional; the loop story is what matters for understanding work done.",
        "Nested loops often mean multiply counts: outer n, inner n → about n² iterations. That is the practical meaning of Big-O without formal limits.",
      ],
    }),
    lesson(4, "Lists, indices, and off-by-one", {
      paragraphs: [
        "A list of length n has valid indices 0 … n−1 in zero-based languages. \"The 5th element\" is index 4. Most beginner bugs are fence-post errors: loop runs n+1 times or stops one early.",
        "Mathematically a sequence a₀, a₁, …, aₙ₋₁ maps to an array. Recurrence relations (next value from previous) map to dynamic programming and Fibonacci examples.",
      ],
    }),
    lesson(5, "Why halving is fast (logarithms)", {
      paragraphs: [
        "Binary search on a sorted list of 1,000,000 items needs at most about log₂(1,000,000) ≈ 20 comparisons — because each step halves the search space. That is why O(log n) appears in CS texts.",
        "Logarithms answer: \"how many times can I divide n by 2 until I reach 1?\" Same idea in tree height balanced search trees and git commit history walks.",
      ],
      callout:
        "You do not need to compute logs by hand. Recognise the halving/doubling pattern in algorithms and you already have the intuition exams expect.",
    }),
    lesson(6, "Mini capstone — password policy", {
      paragraphs: [
        "Product rule exercise: 26 lowercase + 26 uppercase + 10 digits = 62 symbols. An 8-character password from 62 symbols with repetition → 62⁸ ≈ 2.2×10¹⁴ possibilities. Each extra character multiplies the space by 62.",
        "Current <a href=\"https://pages.nist.gov/800-63-4/sp800-63b.html\" target=\"_blank\" rel=\"noopener\">NIST SP 800-63B</a> requires at least <strong>15 characters</strong> for password-only login and at least <strong>8</strong> when combined with another factor — and discourages silly composition rules in favour of length and breach blocklists.",
      ],
      steps: [
        "Define the set of allowed characters (|Σ| = 62).",
        "Each position is an independent choice → product rule: |Σ|ⁿ for length n.",
        "Compare 8-digit PIN (10⁸) vs 15-char passphrase (62¹⁵) — length dominates.",
        "Relate to Entropy section and OWASP/NIST authentication guidance.",
      ],
    }),
    lesson(7, "Sets when debugging", {
      paragraphs: [
        "Duplicate bug? Think set vs multiset: should IDs be unique? Union/intersection explains \"users in both experiments\". Diff(A,B) = in A not B — like comparing two CSV exports.",
      ],
    }),
    lesson(8, "Graphs in dependencies", {
      paragraphs: [
        "package A imports B imports C — a path. Circular imports are cycles. Build tools topologically sort DAGs (directed acyclic graphs). If install order fails, sketch the graph on paper.",
      ],
    }),
    lesson(9, "Probability in simulations", {
      paragraphs: [
        "One run of stochastic ABM is one sample. Report mean and spread over replications. Seed your RNG for reproducibility (same seed → same sequence on same platform) but interpret stochasticity honestly in reports.",
      ],
    }),
    lesson(10, "Reading Big-O claims critically", {
      paragraphs: [
        "\"O(n) hash lookup\" assumes good hash and load factor; worst cases differ. \"Constant time\" API may hide network latency. Big-O describes growth, not milliseconds — measure if users feel slowness.",
      ],
      table: {
        headers: ["Claim", "Ask", "Reality check"],
        rows: [
          ["O(1) lookup", "Worst case? collisions?", "Benchmark with your data size"],
          ["O(n log n) sort", "In-place memory?", "Sort 10 vs 10 million rows"],
          ["Scales linearly", "What is n?", "Users, rows, or file size?"],
        ],
      },
    }),
    lesson(11, "Bits and flags", {
      paragraphs: [
        "One byte = 8 bits = 256 patterns. Feature flags in one integer use OR to turn on, AND to test, XOR to toggle. Permissions bitmasks in file systems use the same pattern — Boolean algebra at scale.",
      ],
    }),
    lesson(12, "Samples vs populations", {
      paragraphs: [
        "Thesis with 8 interviews describes those 8 people, not humanity. Say sample size, recruitment, and limits. A mean without spread (range or standard deviation) hides outliers that dominated one session.",
      ],
    }),
    lesson(13, "Binomial thinking", {
      paragraphs: [
        "10 coin flips, P(all heads) = (1/2)¹⁰ ≈ 0.1%. Rare but possible. Before calling a coin \"unfair\" from one streak, ask how often randomness produces that streak — same mindset for flaky CI.",
      ],
    }),
    lesson(14, "Pairwise test planning", {
      paragraphs: [
        "Browser × language × logged in/out × role = explosion. List factors, cover critical pairs, document gaps. Better honest partial coverage than pretending exhaustive manual testing happened.",
      ],
    }),
  );

  insertBeforeGlossary(
    {
      title: "Concept encyclopedia: quick lookups",
      table: {
        headers: ["Term", "One sentence", "See also"],
        rows: [
          ["Cardinality", "Size of a set; |A|", "Sets, Counting"],
          ["Bijection", "Perfect pairing; invertible map", "Functions"],
          ["Equivalence relation", "Reflexive, symmetric, transitive", "Relations, modular arithmetic"],
          ["Pigeonhole principle", "n+1 items, n holes → collision", "Counting, hashing"],
          ["Linearity of expectation", "E[X+Y]=E[X]+E[Y] even if dependent", "Probability"],
          ["Variance", "Spread around mean", "Statistics, thesis"],
          ["Recurrence", "Define f(n) from smaller n", "Recursion lesson"],
          ["FSM", "Finite states + transition rules", "State machines"],
          ["Inclusion–exclusion", "Count unions without double-counting", "Counting"],
          ["Entropy", "log₂ of outcome space; password strength", "Entropy section"],
          ["Binomial", "n pass/fail trials", "Binomial trials"],
          ["Two's complement", "Signed integer encoding", "Boolean and bits"],
        ],
      },
    },
    {
      title: "Practice: check your understanding",
      paragraphs: ["No calculator needed — reasoning is the skill."],
      steps: [
        "<strong>Sets</strong>: |{1,2,3} ∪ {3,4}| = ? (Answer: 5 distinct elements.)",
        "<strong>Logic</strong>: NOT (A OR B) simplifies to? (NOT A AND NOT B.)",
        "<strong>Counting</strong>: 3-letter codes from {A,B} with repetition? (2³ = 8.)",
        "<strong>Graphs</strong>: Tree with 10 nodes has how many edges? (9 — each non-root has one parent edge.)",
        "<strong>Probability</strong>: Fair die P(even)? (3/6 = 1/2.)",
        "<strong>Big-O</strong>: One loop inside another over n items? (O(n²) typical.)",
        "<strong>Inclusion–exclusion</strong>: 40 like A, 35 like B, 20 like both — at least one? (40+35−20=55.)",
        "<strong>FSM</strong>: Login has states logged_out and active — is \"pay\" from logged_out valid? (Only if spec allows guest checkout.)",
        "<strong>Binomial</strong>: 10 tests, p=0.1 fail each — P(all pass)? (0.9¹⁰ ≈ 35%.)",
      ],
      callout:
        "If you missed more than two, re-read the matching section once, then redo only those steps tomorrow (spaced repetition beats cramming).",
    },
  );
})();
