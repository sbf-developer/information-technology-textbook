/**
 * Extra module: mathematics for CS, IT, and software engineering.
 * Plain-language first; aligned with ACM/IEEE CS2023 MSF and MIT 6.042J topics.
 */
(function () {
  const S = (window.CHAPTER_SECTIONS = window.CHAPTER_SECTIONS || {});

  S["extra-math"] = [
    {
      title: "Why mathematics appears in a programming degree",
      paragraphs: [
        "You do <strong>not</strong> need to love chalkboard calculus to succeed in this programme. What you do need is a handful of <strong>discrete</strong> ideas — about whole numbers, finite lists, yes/no logic, and counting — because computers work with exactly those things.",
        "International computing curricula treat this as <strong>Mathematical and Statistical Foundations (MSF)</strong>. The ACM/IEEE CS2023 guidelines expanded the old \"Discrete Structures\" area to include probability and statistics because modern CS (machine learning, data analysis, security) depends on them. MIT's course <a href=\"https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/\" target=\"_blank\" rel=\"noopener\">6.042J Mathematics for Computer Science</a> covers the same core in three parts: fundamentals (sets, proofs, functions), structures (graphs, counting), and discrete probability.",
        "This chapter is <strong>supplementary</strong>: it is not an official AAU module and will not appear on moduler.aau.dk. Use it when a semester course mentions Big-O, foreign keys, or \"run 100 simulations\" and you want the idea explained from zero.",
      ],
      table: {
        headers: ["Math idea", "Where you meet it in this degree", "Layman's one-liner"],
        rows: [
          ["Sets", "Valid IDs, enum types, SQL DISTINCT", "A bag of unique things"],
          ["Logic", "if/else, preconditions, tests", "Rules for when something is true"],
          ["Functions", "Methods, API endpoints, hash maps", "One input → one output"],
          ["Relations", "SQL JOINs, ER diagrams", "Links between things in two tables"],
          ["Graphs", "Agent networks, dependencies, routes", "Dots connected by lines"],
          ["Counting", "Password strength, test cases", "How many possibilities exist?"],
          ["Big-O", "Nested loops, slow queries", "How work grows when data grows"],
          ["Probability", "ABM, A/B tests, thesis surveys", "Uncertainty measured with numbers"],
          ["Recursion", "Tree walks, divide-and-conquer", "Function calls itself toward a base case"],
          ["Bayes", "Spam filters, diagnosis, triage", "Update belief when new evidence arrives"],
          ["FSM", "Login flows, protocols, UI states", "States + events, no impossible jumps"],
          ["Normal forms", "Database design", "One fact, one place — less redundancy"],
          ["Bits / Boolean", "Flags, permissions, low-level data", "AND/OR/NOT on patterns"],
          ["Sampling", "Surveys, usability tests, thesis", "Sample ≠ whole population"],
        ],
      },
    },
    {
      title: "Sets: collections with no duplicates",
      paragraphs: [
        "A <strong>set</strong> is a collection of distinct objects. Write {1, 2, 3} or \"the set of all student IDs in the database\". Order does not matter; duplicates collapse: {a, a, b} = {a, b}.",
        "In programming, a <code>Set</code> in JavaScript or Java enforces uniqueness. A database primary key column is a set of identifiers: each value may appear once. When you check \"is this email already registered?\" you ask whether the email is an element of the set of known emails.",
        "<strong>Subset</strong>: every element of A is also in B. All valid order IDs might be a subset of all transaction IDs. <strong>Union</strong> A ∪ B = everything in either; <strong>intersection</strong> A ∩ B = what they share. Venn diagrams are optional; the idea is everyday.",
      ],
      subsections: [
        {
          title: "Worked example: unique visitors",
          paragraphs: [
            "Monday visitors: {Alice, Bob, Carol}. Tuesday: {Bob, Dan}. Union = four people (Alice, Bob, Carol, Dan). Intersection = {Bob} visited both days. That is exactly how analytics tools count \"unique users across days\".",
          ],
        },
      ],
    },
    {
      title: "Logic: the maths inside every if statement",
      paragraphs: [
        "Programs branch on conditions that are either true or false. <strong>Propositional logic</strong> names the connectives you already use: AND (∧), OR (∨), NOT (¬). \"User is logged in AND cart is not empty\" must have both parts true before checkout proceeds.",
        "<strong>De Morgan's laws</strong> (verified in every standard discrete maths text, e.g. Rosen and MIT 6.042J): NOT (A AND B) equals (NOT A) OR (NOT B). In code, negating a compound condition often simplifies tests or reveals missing edge cases.",
        "An <strong>implication</strong> A → B means \"if A then B\". It does <em>not</em> say B only happens when A does. Classic bug: assuming \"error message shown → user entered wrong password\" when the error could also mean network failure. Logic trains you to separate \"sufficient\" from \"necessary\".",
      ],
      table: {
        headers: ["Expression", "True when", "Programming example"],
        rows: [
          ["A AND B", "Both true", "<code>age >= 18 && hasConsent</code>"],
          ["A OR B", "At least one true", "<code>isAdmin || isOwner</code>"],
          ["NOT A", "A is false", "<code>!isEmpty(list)</code>"],
          ["A → B", "A false or B true", "Precondition → postcondition in a spec"],
        ],
      },
      callout:
        "Truth tables scale for small conditions. For three Boolean variables there are 8 rows. Test designers use this idea to pick cases that cover branches — the seed of formal coverage, even if you never draw the table.",
    },
    {
      title: "Functions and relations: APIs and databases",
      paragraphs: [
        "A <strong>function</strong> f maps each allowed input to exactly one output. <code>Math.sqrt(9)</code> always gives 3 (in real arithmetic). A hash function maps data to a fixed-size code; good hash functions behave like functions (same input → same hash), though collisions are handled separately.",
        "Not every real-world mapping is a function. \"Student → favourite course\" might be undefined or multi-valued. APIs that return exactly one JSON object per ID are designed as functions; ambiguous lookups need extra rules.",
        "A <strong>relation</strong> links pairs without the one-output rule. Table <code>enrolled_in(student_id, course_id)</code> is a relation: one student can relate to many courses. SQL JOIN finds pairs that match a condition — mathematically a join on key columns is filtering a product of two sets.",
      ],
      subsections: [
        {
          title: "Codd's relational model (1970)",
          paragraphs: [
            "E.F. Codd defined relational databases as mathematical relations (sets of tuples). Normalisation removes redundancy so one fact lives in one place — an application of set thinking to avoid contradictory updates. You meet this formally in Databaseudvikling; the intuition starts here.",
          ],
        },
      ],
    },
    {
      title: "Graphs: networks everywhere",
      paragraphs: [
        "A <strong>graph</strong> G = (V, E): vertices V (nodes) and edges E (links). Social networks, road maps, package dependencies, and agent neighbour lists are graphs. Directed edges (A → B) model one-way links; undirected edges model mutual connection.",
        "<strong>Paths</strong> are sequences of edges. \"Six degrees of separation\" asks for short paths. <strong>Cycles</strong> return to the start; detecting cycles in module dependencies prevents build systems from looping forever.",
        "In Computational Thinking, agents on a grid use an implicit graph: each cell connects to neighbours. In software engineering, a dependency graph shows which packages import which — tools like npm and Maven resolve an order that respects edges.",
      ],
      table: {
        headers: ["Concept", "Plain meaning", "CS example"],
        rows: [
          ["Vertex", "A node", "User, city, file"],
          ["Edge", "A link", "Friendship, road, import"],
          ["Degree", "Edges touching a node", "Number of dependencies"],
          ["Shortest path", "Fewest hops", "GPS routing, network latency"],
          ["Tree", "Connected, no cycles", "Folder hierarchy, DOM"],
        ],
      },
    },
    {
      title: "Counting: how big is the search space?",
      paragraphs: [
        "<strong>Combinatorics</strong> answers \"how many ways?\" A 4-digit PIN with digits 0–9 allows 10⁴ = 10,000 combinations if repeats are allowed. A password policy that requires 8 characters from 94 printable ASCII symbols allows 94⁸ possibilities — why length beats obscure symbols for security.",
        "<strong>Permutations</strong> = order matters (arrange 3 books on a shelf). <strong>Combinations</strong> = order does not matter (choose 3 toppings). Lottery maths is combination; seating order is permutation.",
        "In testing, if a form has 3 checkboxes each on/off, there are 2³ = 8 combinations of settings — a reason exhaustive manual testing explodes quickly and automation helps.",
      ],
      steps: [
        "<strong>Product rule</strong>: if step 1 has a choices and step 2 has b, together a × b (shirt × pants outfits).",
        "<strong>Sum rule</strong>: mutually exclusive options add (fly OR train, not both).",
        "<strong>Permutation</strong> of r from n: n × (n−1) × … for ordered picks.",
        "<strong>Combination</strong> \"n choose r\": permutations divided by r! when order ignored.",
      ],
    },
    {
      title: "Pigeonhole principle: collisions are guaranteed",
      paragraphs: [
        "If you have <strong>n + 1</strong> pigeons and <strong>n</strong> holes, at least one hole holds two pigeons. No clever arrangement avoids it. This is the <strong>pigeonhole principle</strong>, listed in ACM CS2023 MSF counting topics.",
        "Why care? Hash tables map keys to buckets. More keys than buckets → collisions must happen. Birthday paradox: in a room of 23 people, a shared birthday is likely — not certain, but probability passes 50% because pairs grow quadratically (counting again).",
        "Security: if passwords are chosen from a small set, attackers will hit collisions in stored hashes. Length and randomness enlarge the set.",
      ],
    },
    {
      title: "Predicate logic: for all and there exists",
      paragraphs: [
        "Propositional logic handles fixed statements. <strong>Predicate logic</strong> adds variables and quantifiers: ∀ (for all) and ∃ (there exists). Specification \"every user has a unique email\" is ∀u ∃!e … in formal methods; in tests you approximate with representative users.",
        "Order matters: \"every person has a friend\" (∀p ∃f friend(p,f)) is weaker than \"one person is everyone's friend\" (∃f ∀p friend(p,f)). Mixing these up is a common requirements bug.",
      ],
      table: {
        headers: ["Statement", "Formal flavour", "Software reading"],
        rows: [
          ["All tests pass", "∀ test: pass(test)", "CI green build"],
          ["Some test fails", "∃ test: ¬pass(test)", "First failing assertion"],
          ["Exactly one admin", "∃! user: admin(user)", "Unique constraint + role check"],
        ],
      },
    },
    {
      title: "Recursion, recurrence, and induction",
      paragraphs: [
        "A <strong>recursive</strong> function calls itself on a smaller input. Factorial: n! = n × (n−1)! with base case 0! = 1. Each call must move toward the base case or the stack overflows.",
        "A <strong>recurrence relation</strong> defines a sequence by previous terms: Fibonacci F(n) = F(n−1) + F(n−2). CS2023 MSF asks you to connect recurrences to iterative code and sometimes guess closed forms.",
        "<strong>Structural induction</strong> proves properties of recursively defined structures (lists, trees). Proof by induction parallels recursion: base case + inductive step = \"it works for all n\".",
      ],
      code: {
        lang: "javascript",
        caption: "Same Fibonacci: recursion vs loop (O(2ⁿ) vs O(n) time).",
        source: `
function fibSlow(n) {
  if (n <= 1) return n;
  return fibSlow(n - 1) + fibSlow(n - 2); // repeats work
}

function fibFast(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}`,
      },
    },
    {
      title: "Trees and traversals: hierarchy with rules",
      paragraphs: [
        "A <strong>tree</strong> is a connected graph with no cycles. File folders, HTML DOM, JSON objects, and parse trees of code are trees. A tree with n nodes has exactly n−1 edges — one parent link per non-root node (standard graph fact in MSF Graphs and Trees).",
        "Traversals visit every node once in a defined order. <strong>Pre-order</strong>: process node, then children (copy folder structure). <strong>In-order</strong>: left, node, right (sorted walk on binary search tree). <strong>Post-order</strong>: children first, then node (delete folder: files before directory).",
        "Breadth-first search (BFS) uses a queue — explore layer by layer (shortest hops in unweighted graphs). Depth-first search (DFS) uses a stack or recursion — go deep first (maze solving, dependency depth).",
      ],
      table: {
        headers: ["Traversal", "Memory feel", "Typical use"],
        rows: [
          ["BFS", "Queue, level by level", "Shortest path, social degrees"],
          ["DFS", "Stack / recursion", "Cycle detect, topological sort"],
          ["In-order BST", "Sorted visit", "Print sorted keys"],
        ],
      },
    },
    {
      title: "Bayes' theorem: update beliefs with evidence",
      paragraphs: [
        "<strong>Bayes' theorem</strong> (CS2023 MSF Discrete Probability): P(A|B) = P(B|A) × P(A) / P(B). Read: \"probability of cause A given evidence B\" from \"how likely B is if A true\" and base rates.",
        "Medical test intuition: disease is rare (low P(A)). A positive test (B) still might not mean disease is likely if false positives are common. Software: given error log pattern B, probability of memory leak vs network timeout — Bayes-style reasoning in incident triage.",
        "Spam filters and modern ML classifiers use the same update idea; you meet the full machinery in AI electives, but the 3-line formula is enough for critical reading of claims.",
      ],
      callout:
        "Always ask for base rates. \"99% accurate test\" does not mean \"99% chance you have the disease\" if the disease is rare — a classic probability literacy trap verified in every discrete probability syllabus.",
    },
    {
      title: "Modular arithmetic, hashes, and remainders",
      paragraphs: [
        "a mod n is the remainder after dividing a by n. Clock arithmetic: (8 + 5) mod 12 = 1. CS uses mod for array indices (<code>i % length</code>), hash buckets, checksums, and cryptography (RSA uses modular exponentiation — advanced topic).",
        "A <strong>hash function</strong> maps data to a fixed range of buckets. Same input → same bucket (deterministic). Different inputs may collide (pigeonhole principle). Good tables keep load factor reasonable and handle collisions (chaining or open addressing).",
        "Unicode code points and UTF-8 encoding connect counting (byte sequences) to internationalised apps — another discrete structure problem.",
      ],
    },
    {
      title: "Statistics for projects and thesis (basics)",
      paragraphs: [
        "CS2023 expanded MSF to include statistics because data-heavy CS (ML, evaluation, A/B testing) needs it. You are not required to derive formulas, but you must read results honestly.",
        "<strong>Mean</strong> (average) is sensitive to outliers; <strong>median</strong> is the middle value. Report both when user task times vary wildly. <strong>Sample</strong> vs <strong>population</strong>: \"12 students in our lab\" does not automatically generalise to \"all Danish students\".",
        "<strong>Variance</strong> and standard deviation measure spread. Low variance → answers cluster; high variance → report ranges or show box plots. Linearity of expectation (E[X+Y]=E[X]+E[Y]) helps analyse composite metrics even when X and Y correlate — a standard MSF learning outcome.",
      ],
      table: {
        headers: ["Claim style", "Weak", "Stronger"],
        rows: [
          ["Preference", "\"Users liked it\"", "\"8/12 completed task faster (median −18 s)\""],
          ["Generalisation", "\"Everyone wants dark mode\"", "\"In our sample of designers…\""],
          ["Causation", "\"Feature caused retention\"", "\"Correlation; no controlled experiment\""],
        ],
      },
    },
    {
      title: "Relational algebra intuition (SQL without syntax)",
      paragraphs: [
        "SQL queries combine relational operations taught in database theory: <strong>select</strong> (filter rows), <strong>project</strong> (choose columns), <strong>join</strong> (match related rows), <strong>union</strong> (stack compatible tables). Every JOIN is a filter on a product — why accidental CROSS JOIN explodes row counts (|A|×|B|).",
        "Functional dependency A → B means: if two rows agree on A, they must agree on B. \"student_id → student_name\" supports normalisation: store name once per id. Violations create update anomalies (same id, two names).",
      ],
    },
    {
      title: "Big-O: growth beats constants",
      paragraphs: [
        "<strong>Asymptotic analysis</strong> describes how time or memory grows as input size n grows. Big-O ignores fixed overhead: scanning 1 million or 2 million rows is both \"linear\", even if one run is twice as slow in wall-clock seconds.",
        "Common orders (standard in CS2013/CS2023 AL knowledge area): O(1) constant lookup by index; O(log n) binary search on sorted data; O(n) one pass; O(n log n) efficient sorting; O(n²) nested loops over all pairs. Doubling n doubles work for O(n), quadruples for O(n²).",
        "Semester projects often have small n, so O(n²) code \"works on my laptop\". Interviewers and scalability reviews care because real datasets do not stay small.",
      ],
      table: {
        headers: ["Notation", "If n doubles, work…", "Typical pattern"],
        rows: [
          ["O(1)", "Stays same", "Array index, hash lookup (average)"],
          ["O(log n)", "Adds a bit", "Binary search"],
          ["O(n)", "Doubles", "Single for-loop over list"],
          ["O(n log n)", "Slightly more than doubles", "Mergesort, heapsort"],
          ["O(n²)", "Quadruples", "Compare every pair"],
        ],
      },
      code: {
        lang: "javascript",
        caption: "O(n) vs O(n²): same machine, different scaling.",
        source: `
// O(n): one pass
function hasDuplicateSlow(ids) {
  for (let i = 0; i < ids.length; i++) {
    for (let j = i + 1; j < ids.length; j++) {
      if (ids[i] === ids[j]) return true; // O(n²)
    }
  }
  return false;
}

function hasDuplicateFast(ids) {
  const seen = new Set();
  for (const id of ids) {
    if (seen.has(id)) return true; // O(n) average
    seen.add(id);
  }
  return false;
}`,
      },
    },
    {
      title: "Probability and statistics for builders and researchers",
      paragraphs: [
        "<strong>Probability</strong> assigns numbers 0–1 to uncertain events. \"Fair coin\" ≈ 0.5 heads. In agent-based models, \"move with probability 0.3\" means each trial is random; over many runs you see distributions, not one fixed outcome — report both mean and spread.",
        "<strong>Expected value</strong> is the long-run average. If a lottery ticket costs 5 kr and wins 1000 kr with probability 0.001, expected gain per ticket is 0.001×1000 − 5 = −4 kr. Apps use expectations in A/B tests: which button layout yields higher click rate on average?",
        "<strong>Statistics</strong> in thesis work: sample mean, charts, confidence language. Say \"in our sample of 12 participants\" not \"users everywhere prefer X\" unless design supports generalisation. CS2023 MSF explicitly widened curricula to include statistics for areas like machine learning.",
      ],
      subsections: [
        {
          title: "Independent vs dependent trials",
          paragraphs: [
            "Flipping two fair coins: outcomes are independent. Drawing two aces from a deck without replacement: second probability changes — dependent. Simulation code must match which case you model; many beginner bugs come from treating dependent events as independent.",
          ],
        },
        {
          title: "Law of large numbers (intuition)",
          paragraphs: [
            "More repetitions → sample averages stabilise near the true probability. One simulation run is anecdote; 100 runs with the same seed policy is evidence. Computational Thinking projects benefit from plotting outcome vs. run index to show convergence.",
          ],
        },
      ],
    },
    {
      title: "Proofs and invariants (without becoming a mathematician)",
      paragraphs: [
        "A <strong>proof</strong> is a convincing argument that something is always true. Programmers use lighter versions daily: \"this loop ends because i increases toward n\" or \"balance never goes negative because we check first\".",
        "An <strong>invariant</strong> is a condition true before and after each loop iteration. Binary search keeps \"answer, if it exists, lies between low and high\". Stating invariants in comments or reports shows you understand termination and correctness — a skill MIT 6.042J emphasises.",
        "<strong>Proof by induction</strong> (standard MSF topic): prove a base case, then prove \"if true for n, true for n+1\". Useful for recursive algorithms: merge sort on lists of size 1 works; if it works on halves, it works on the whole. You may not write formal induction in semester 1, but recursion is induction in code form.",
      ],
      callout:
        "You do not need formal proofs on every exam. You do need to avoid hand-waving: replace \"it obviously works\" with a test, invariant, or counterexample.",
    },
    {
      title: "Numbers computers actually use",
      paragraphs: [
        "Computers store integers in binary (base 2). Eight bits (a byte) give 256 patterns — why <code>0–255</code> appears in colour channels. See also the modular arithmetic section for remainders and hashing.",
        "Floating-point follows IEEE 754: many decimals cannot be represented exactly in binary. <code>0.1 + 0.2 === 0.3</code> is false in JavaScript — verified behaviour documented on <a href=\"https://0.30000000000000004.com/\" target=\"_blank\" rel=\"noopener\">IEEE 754 floating-point demos</a> and MDN. Financial apps often store money as integer cents.",
        "Integer overflow wraps on fixed-width types (e.g. 32-bit signed max 2,147,483,647). Rare in JavaScript numbers but real in C/Java systems programming.",
      ],
    },
    {
      title: "How this maps to your modules",
      table: {
        headers: ["Module", "Math you will touch", "This chapter section"],
        rows: [
          ["Computational Thinking", "Graphs, probability, parameters", "Graphs, Probability"],
          ["Grundlæggende programmering", "Logic, loops, Big-O intuition", "Logic, Big-O"],
          ["Databaseudvikling", "Relations, keys, normal forms", "Functions and relations"],
          ["Agil SE / projects", "Estimation, test combinatorics", "Counting, Logic"],
          ["Kandidatspeciale", "Sample size, valid claims", "Probability and statistics"],
        ],
      },
      paragraphs: [
        "Return to this chapter when another page uses a term you half recognise. The official curriculum spreads maths across modules rather than one course titled \"Discrete Mathematics\"; this page collects the thread in one place.",
      ],
    },
    {
      title: "Key terms glossary",
      bullets: [
        "<strong>Set</strong> — distinct elements; no duplicates",
        "<strong>Predicate</strong> — statement true/false depending on input (e.g. isPrime(n))",
        "<strong>Quantifier</strong> — ∀ for all, ∃ there exists",
        "<strong>Bijection</strong> — one-to-one function onto another set; invertible mapping",
        "<strong>Graph</strong> — vertices and edges; may be directed or weighted",
        "<strong>Tree</strong> — connected acyclic graph; n nodes → n−1 edges",
        "<strong>BFS / DFS</strong> — breadth-first (queue) vs depth-first (stack) graph visits",
        "<strong>Big-O</strong> — upper bound on growth rate as n → ∞",
        "<strong>Bayes' theorem</strong> — update P(cause|evidence) from P(evidence|cause)",
        "<strong>Expected value</strong> — probability-weighted average outcome",
        "<strong>Variance</strong> — average squared deviation from mean; spread",
        "<strong>Invariant</strong> — property preserved by each step of a process",
        "<strong>Recurrence</strong> — define term from previous terms (Fibonacci, costs)",
        "<strong>FSM</strong> — finite state machine; states and transitions",
        "<strong>Entropy</strong> — unpredictability measured in bits",
        "<strong>1NF / 2NF / 3NF</strong> — normal forms reducing DB redundancy",
        "<strong>Inclusion–exclusion</strong> — count union by subtracting overlaps",
        "<strong>Binomial</strong> — count of successes in n independent trials",
        "<strong>Two's complement</strong> — standard signed integer encoding",
        "<strong>Confidence interval</strong> — plausible range for true mean from sample",
        "<strong>Pairwise testing</strong> — cover factor pairs without full Cartesian product",
      ],
    },
    {
      title: "Further reading (verified sources)",
      paragraphs: [
        "Primary open course: <a href=\"https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/\" target=\"_blank\" rel=\"noopener\">MIT 6.042J</a> (fundamentals, structures, discrete probability). Curriculum: <a href=\"https://csed.acm.org/wp-content/uploads/2023/09/MSF-Version-Gamma-V3.pdf\" target=\"_blank\" rel=\"noopener\">ACM CS2023 MSF</a> and <a href=\"https://www.acm.org/binaries/content/assets/education/curricula-recommendations/cc2020.pdf\" target=\"_blank\" rel=\"noopener\">CC2020</a>. Authentication maths: <a href=\"https://pages.nist.gov/800-63-4/sp800-63b.html\" target=\"_blank\" rel=\"noopener\">NIST SP 800-63B</a>. Textbooks: Rosen; Lehman–Leighton–Meyer (MIT open text). Interactive: <a href=\"https://www.khanacademy.org/computing/computer-science\" target=\"_blank\" rel=\"noopener\">Khan Academy</a>, <a href=\"https://visualgo.net/en\" target=\"_blank\" rel=\"noopener\">VisuAlgo</a>. Reference: <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\" target=\"_blank\" rel=\"noopener\">MDN Number</a> (IEEE 754).",
      ],
    },
  ];
})();
