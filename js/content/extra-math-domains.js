/**
 * Domain-specific maths: bits, sampling, algorithm analysis, testing combinatorics.
 */
(function () {
  const S = window.CHAPTER_SECTIONS;
  if (!S || !S["extra-math"]) return;

  const id = "extra-math";

  function insertBeforeGlossary(...sections) {
    const idx = S[id].findIndex((s) => s.title.includes("Key terms glossary"));
    if (idx >= 0) S[id].splice(idx, 0, ...sections);
    else S[id].push(...sections);
  }

  insertBeforeGlossary(
    {
      title: "Boolean algebra and bits (why 0 and 1 matter)",
      paragraphs: [
        "At the hardware level, everything is bits. <strong>Boolean algebra</strong> (AND, OR, NOT, XOR) governs how those bits combine — the same rules as logical conditions, but applied per bit in a word. CS2023 MSF Basic Logic covers truth tables and connectives; systems courses apply them with bitwise operators (<code>&</code>, <code>|</code>, <code>^</code>, <code>~</code>, shifts).",
        "Layman picture: eight light switches in a row can represent 0–255. Flip patterns encode letters (ASCII), colours, or flags. <strong>Masking</strong> uses AND to keep some bits and clear others — like focusing on the last four bits of a status byte.",
        "Left shift by 1 multiplies an integer by 2 (when overflow does not bite). Right shift divides by 2. Compilers and graphics code exploit this; you only need to know shifts exist and signed vs unsigned right shift differs.",
      ],
      table: {
        headers: ["Operator", "Plain meaning", "Typical use"],
        rows: [
          ["x & mask", "Keep selected bits", "Read flag from status word"],
          ["x | flag", "Turn bits on", "Enable feature bit"],
          ["x ^ 1", "Toggle last bit", "Flip switch state"],
          ["x << n", "Shift left n", "Multiply by 2ⁿ (fast)"],
        ],
      },
      callout:
        "IEEE 754 floats are bits too — see Numbers section. Security (XOR in stream ciphers intro) and compression also treat data as bit vectors.",
    },
    {
      title: "Two's complement: how signed integers work",
      paragraphs: [
        "Computers store signed integers mostly as <strong>two's complement</strong>: the leftmost bit indicates sign, and negative numbers are encoded so addition uses the same circuit as unsigned. Range for 32-bit signed: about −2.1×10⁹ to +2.1×10⁹.",
        "Why care? Overflow bugs: adding two large positives can wrap negative. Comparisons mix signed/unsigned rules in C-family languages. Storing time in milliseconds since epoch works until 2038 for 32-bit signed — the famous Y2K38 problem.",
        "Layman rule: if your app handles money or timestamps in raw ints, know the bit width and overflow policy.",
      ],
    },
    {
      title: "Average-case vs worst-case (probability meets Big-O)",
      paragraphs: [
        "Big-O often describes <strong>worst case</strong>: hash table lookup O(1) worst-case can degrade if every key collides. <strong>Average-case</strong> analysis uses probability (CS2023 MSF learning outcome: apply probability to average-case algorithm analysis and hashing).",
        "QuickSort is fast on average but O(n²) worst case on bad pivots — why libraries use hybrid strategies. Reporting only \"O(n log n)\" without context hides assumptions.",
        "Hash tables assume keys spread roughly uniformly across buckets; attackers can craft worst-case inputs — a security angle, not only maths trivia.",
      ],
    },
    {
      title: "Binomial trials: pass/fail repeated experiments",
      paragraphs: [
        "Flip a fair coin n times; count heads. That's a <strong>binomial</strong> setup: n independent trials, same success probability p, count successes. MSF Discrete Probability lists Bernoulli and binomial variables.",
        "Software examples: n independent unit tests each fail with probability p → number of failures is binomial. n users each click with probability p → click count binomial. Useful for sanity-checking load tests and simulation summaries.",
        "Expected successes = n × p. Variance = n × p × (1−p). For large n, distribution looks bell-shaped (connection to statistics courses).",
      ],
      subsections: [
        {
          title: "Worked example: flaky test",
          paragraphs: [
            "10 tests, each fails independently with p=0.1. Expected failures = 1. P(zero failures) = 0.9¹⁰ ≈ 0.35 — so a green run still happens often even with flaky tests. Reporting \"CI passed once\" is weaker than reporting failure rate over 50 runs.",
          ],
        },
      ],
    },
    {
      title: "Sampling, surveys, and thesis claims",
      paragraphs: [
        "CS2023 MSF Statistics (KA core) covers populations vs samples, central tendency, variance, and confidence intervals. In HCI/thesis work you almost always have a <strong>sample</strong>, not the whole population.",
        "<strong>Random sampling</strong> (when feasible) supports generalisation. Convenience samples (your classmates) limit claims. Report who you studied, how recruited, and what bias that introduces.",
        "A <strong>confidence interval</strong> says: if we repeated the study, plausible values for the true mean lie in a range. Layman version: \"task time was 42–58 seconds for 95% confidence\" beats \"people were faster\" without numbers.",
        "Correlation ≠ causation: two metrics moving together does not prove one caused the other without design (experiment, control, or strong theory).",
      ],
      table: {
        headers: ["Phrase in report", "Problem", "Fix"],
        rows: [
          ["Users prefer design A", "Who? how many?", "12 participants from …; median time …"],
          ["Proves faster", "Causal claim", "Within our lab study, median …"],
          ["Statistically significant", "Undefined test", "Name test, p-value or CI, assumptions"],
        ],
      },
    },
    {
      title: "Combinatorial testing: when full coverage is impossible",
      paragraphs: [
        "A form with 5 toggles → 32 combos; 10 dropdowns with 3 options each → 3¹⁰ ≈ 59,000. Product rule explodes. QA uses <strong>pairwise testing</strong>: cover all pairs of settings with fewer runs — based on empirical observation that many bugs involve interaction of two factors, not all ten at once (NIST and industry testing literature).",
        "For semester projects: pick representative scenarios tied to user stories instead of brute-forcing Cartesian products. Document which combinations you did not test under limitations.",
      ],
    },
    {
      title: "Math for IT and organisations (light touch)",
      paragraphs: [
        "Information systems modules ask whether IT delivers value — maths enters as <strong>metrics</strong>, not proofs. Throughput (tasks/hour), error rate (failures/attempts), cost per transaction, uptime percentage — all ratios and counts.",
        "<strong>Little's Law</strong> (queueing intuition): average items in system = arrival rate × average time in system. If support tickets arrive faster than resolved, queue length grows — organisational maths, not code.",
        "ROI = (gain − cost) / cost. Sensibility checks beat false precision: estimate ranges and state assumptions.",
      ],
    },
    {
      title: "Tutorial: read a performance claim like an engineer",
      steps: [
        "Identify <strong>n</strong> — users, rows, requests?",
        "Ask <strong>worst vs average</strong> case and whether data could be adversarial.",
        "Check for <strong>hidden work</strong> — network, disk, serialisation outside Big-O of core loop.",
        "Look for <strong>constants</strong> — O(n) with huge constant can lose to O(n log n) on your n.",
        "Demand <strong>measurement</strong> on hardware and dataset similar to production.",
        "Relate to <strong>probability</strong> if claim uses \"usually\" or \"typical\" — that is average-case language.",
      ],
      callout:
        "Marketing says \"instant\"; maths asks \"at what n, on what machine, with what percentile latency (p50 vs p99)?\"",
    },
    {
      title: "Worked scenario: A/B test on a button colour",
      paragraphs: [
        "Product question: does green button get more clicks than blue? You show green to 500 users, blue to 500, measure click rate. This is a designed experiment — stronger than observing correlation in logs alone.",
        "Compute click rate p_green, p_blue. Difference might be luck (random binomial noise) or real. Statistics courses teach hypothesis tests; thesis-safe wording: report rates, sample size, and confidence interval before claiming victory.",
        "Ethics: informed consent, no dark patterns, GDPR if personal data — maths does not replace ethics review.",
      ],
      table: {
        headers: ["Quantity", "Example value", "Role"],
        rows: [
          ["n per variant", "500", "Sample size drives uncertainty"],
          ["Clicks green", "120", "Success count"],
          ["Rate green", "24%", "120/500"],
          ["Rate blue", "20%", "Compare + CI, not gut feel"],
        ],
      },
    },
  );
})();
