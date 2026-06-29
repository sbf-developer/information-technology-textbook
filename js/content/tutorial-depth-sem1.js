/**
 * Tutorial depth: Semester 1 + overview.
 * Inserts after "From zero (4/4)" — encyclopedia + walkthrough + practice.
 */
(function () {
  const S = window.CHAPTER_SECTIONS;
  if (!S) return;

  function afterFromZero(id, ...sections) {
    if (!S[id]) return;
    const idx = S[id].findIndex((s) => s.title.includes("From zero (4/4)"));
    const at = idx >= 0 ? idx + 1 : S[id].length;
    S[id].splice(at, 0, ...sections);
  }

  afterFromZero("overview",
    {
      title: "Subject encyclopedia: every discipline explained",
      paragraphs: [
        "Use this section when a word appears in a module and you think \"I have heard it but I do not really know it.\" Each entry is written for someone with no prior IT degree.",
      ],
      subsections: [
        {
          title: "Computer science (CS)",
          paragraphs: [
            "CS asks: what can be computed, with what resources, and with what guarantees? It includes algorithms (step-by-step procedures), data structures (ways to organise data in memory), programming languages (notation for telling machines what to do), and theory (complexity, logic). You use CS whenever you ask \"will this loop slow down when we have 10,000 users?\" or \"can this condition ever be true?\"",
          ],
        },
        {
          title: "Software engineering (SE)",
          paragraphs: [
            "SE asks: how do teams build software that works, can be maintained, and matches what stakeholders need? It includes requirements, design, testing, process (agile/Scrum), architecture, and quality. A solo script can ignore SE; a semester project with three people cannot.",
          ],
        },
        {
          title: "Information systems (IS) / IT in organisations",
          paragraphs: [
            "IS studies how organisations acquire, use, and benefit from systems that process data for business or public service. Technology is one part; people, procedures, and strategy are equally important. When a hospital buys software, success depends on training and workflow, not only installation.",
          ],
        },
        {
          title: "Human-computer interaction (HCI)",
          paragraphs: [
            "HCI studies how people perceive, learn, and perform tasks with interfaces. It combines psychology, design, and evaluation methods. Good code with bad HCI still fails in the market or in citizen services.",
          ],
        },
        {
          title: "Mathematics in this programme",
          paragraphs: [
            "You use discrete maths (sets, logic, relations) for databases and conditions; probability for stochastic simulations; Big-O for algorithm growth; basic statistics in thesis work. Proofs are rare in semester 1–3; reasoning and invariants are not.",
          ],
        },
        {
          title: "Application / web development",
          paragraphs: [
            "Building systems users touch: browser apps, APIs, mobile-friendly sites, full stack with database. Starts with HTML/JS in semester 1, OOP GUI in semester 2, deployed client-server systems in semester 3.",
          ],
        },
      ],
    },
    {
      title: "Walkthrough: your first week at AAU (what actually happens)",
      steps: [
        "You are placed in a <strong>group</strong> (often 4–6 people). Introduce yourselves; agree meeting rhythm immediately.",
        "You receive a <strong>semester problem</strong> or choose within constraints (CT + software project often share a theme).",
        "First deliverable is rarely code: it is <strong>understanding the problem</strong> and dividing reading (module pages on moduler.aau.dk).",
        "Courses run in parallel: lectures/exercises for programming while the project demands integration. Time management is a skill; calendar block project time.",
        "Supervisors or tutors give feedback at milestones. Bring questions and a demo attempt, not only slides.",
        "Exams mix <strong>oral defence</strong> (explain choices) and <strong>live demo</strong> (show working software). Practice explaining aloud weekly.",
      ],
      callout:
        "Download MOODLE materials and the official module learning objectives for each course. This textbook explains; MOODLE assigns what is assessed this year.",
    },
    {
      title: "Practice: map yourself to the programme",
      bullets: [
        "Rate yourself 0–5 on: reading code, writing code, explaining ideas aloud, group work, English technical reading.",
        "Pick your weakest; that is where to spend extra hours in semester 1 (usually programming or presenting).",
        "Write one paragraph: why you chose this programme and one problem you want to solve with software. Revisit in semester 4 for thesis direction.",
      ],
    },
  );

  afterFromZero("dsnidak121",
    {
      title: "Concept encyclopedia: computational thinking terms",
      table: {
        headers: ["Term", "Plain definition", "Example in a student project"],
        rows: [
          ["Agent", "Entity that follows rules each step", "One person in a rumour simulation"],
          ["Environment", "Space where agents exist", "Grid of classrooms or network of friends"],
          ["State", "Variables describing the world now", "has_heard = true/false per agent"],
          ["Rule / transition", "How state updates", "If neighbour heard, I hear with prob. 0.3"],
          ["Parameter", "Tunable number", "Spread probability, speed, density"],
          ["Tick / time step", "One round of updates", "One simulated day"],
          ["Emergence", "Global pattern from local rules", "Clustering without central planner"],
          ["Sensitivity analysis", "Vary params, measure output", "Plot fraction infected vs. p"],
          ["Stochastic", "Uses randomness", "Random infection attempts"],
          ["Deterministic", "Same start → same end", "Fixed rules, no random, same seed"],
          ["ODD protocol", "Document Overview, Design, Details", "Report structure for ABM"],
          ["Face validity", "Model looks plausible to experts", "Qualitative sanity check, not proof"],
        ],
      },
    },
    {
      title: "Tutorial walkthrough: rumour spread model (start to finish)",
      paragraphs: [
        "Follow this narrative even before you write code. If you can tell this story at oral exam, you understand the module.",
      ],
      subsections: [
        {
          title: "Step 1: Research question",
          paragraphs: [
            "Bad: \"We simulate rumours.\" Good: \"Under what network density does a rumour reach 90% of agents within 50 ticks when spread probability is 0.2?\" The good version has a measurable outcome and parameters.",
          ],
        },
        {
          title: "Step 2: Conceptual model",
          bullets: [
            "Agents = students; network = who sits near whom (or random graph).",
            "State = boolean heard_rumour.",
            "Initial: one random agent heard at t=0.",
            "Each tick: for each agent who heard, each neighbour hears with probability p.",
            "Output: fraction heard over time; optional: ticks to 90%.",
          ],
        },
        {
          title: "Step 3: Implementation choices",
          paragraphs: [
            "Grid vs network: grid uses neighbour cells; network uses adjacency list. Network fits \"friends\" better; grid fits \"physical space.\"",
            "Synchronous update: all agents update from snapshot of t, then move to t+1. Avoids order bias.",
            "Log random seed in Python: random.seed(42) for reproducible debugging.",
          ],
        },
        {
          title: "Step 4: Experiments",
          paragraphs: [
            "Run with p = 0.1, 0.2, 0.3 on same network size. Plot fraction heard vs tick for each. Run 20 seeds per p; show mean line or box plot if course allows.",
            "Write: \"At p=0.1, 90% threshold never reached in 50 ticks; at p=0.3, reached at tick 12 on average.\" That is an answer to a research-style question.",
          ],
        },
        {
          title: "Step 5: Limitations (oral exam gold)",
          bullets: [
            "No message content, only binary heard/not.",
            "Network static; friendships do not change.",
            "Homogeneous agents (same p for everyone).",
            "No retraction or competing rumours.",
          ],
        },
      ],
    },
    {
      title: "Practice exercises (do on paper before coding)",
      bullets: [
        "Draw a 5×5 grid with 3 agents. One tick of \"move randomly\" by hand; count neighbours.",
        "Write pseudocode for synchronous rumour update (for each agent, for each neighbour…).",
        "If p doubles, do you expect faster spread? Why, in one sentence?",
        "Name one real-world system where emergence appears (traffic, markets, flocking).",
        "Explain to a friend why CT is not the same as \"learning Python.\"",
      ],
    },
  );

  afterFromZero("dsnidak122",
    {
      title: "Concept encyclopedia: software development terms",
      table: {
        headers: ["Term", "Meaning", "Failure mode if ignored"],
        rows: [
          ["Stakeholder", "Anyone affected by the system", "Building wrong thing"],
          ["Functional requirement", "What system does", "Missing features at exam"],
          ["Non-functional requirement", "How well (speed, security)", "Demo works but unusably slow"],
          ["MVP", "Smallest proof of core idea", "Nothing finished"],
          ["Traceability", "Req → design → code → test", "Cannot answer examiner questions"],
          ["Regression test", "Test that old behaviour still works", "New fix breaks old feature"],
          ["Technical debt", "Shortcuts that slow future work", "Unmaintainable code by sem 3"],
          ["Version control (Git)", "History of changes", "Cannot show who did what"],
          ["Build / run script", "One command to start app", "\"Works on my machine\""],
          ["PBL reflection", "Analyse team process", "Lost competence marks"],
        ],
      },
    },
    {
      title: "Tutorial walkthrough: from user story to demo",
      paragraphs: [
        "Scenario: your CT group models rumour spread; this module builds a <strong>visualisation tool</strong> so non-programmers can change p and see a chart.",
      ],
      steps: [
        "<strong>User story</strong>: As a researcher, I want to set spread probability and run 100 ticks, so that I see a line chart of fraction heard over time.",
        "<strong>Acceptance criteria</strong>: slider 0–1 for p; Run button; chart updates; run completes under 5 s for 500 agents.",
        "<strong>Design sketch</strong>: UI (slider, button, canvas) → SimulationEngine (from CT code) → ChartRenderer.",
        "<strong>Implement vertical slice</strong>: fixed p=0.3, one Run, print numbers to console first, then chart.",
        "<strong>Test R1</strong>: automated check that 100 ticks with p=0 returns 0 spread beyond patient zero.",
        "<strong>Report section</strong>: table linking R1–R3 to files and tests.",
        "<strong>Demo script</strong>: 30 seconds: set p low → slow spread; set p high → fast spread; show one test in IDE.",
      ],
    },
    {
      title: "Practice: write these for your project",
      bullets: [
        "Three functional requirements with IDs R1–R3.",
        "Two non-functional requirements (performance, usability).",
        "Traceability row for R1 only (component + test name).",
        "One paragraph reflection: biggest teamwork problem and one fix you tried.",
      ],
    },
  );

  afterFromZero("dsnidak123",
    {
      title: "Concept encyclopedia: information systems terms",
      table: {
        headers: ["Term", "One-line definition", "Real example"],
        rows: [
          ["TPS", "Records daily transactions", "POS at supermarket"],
          ["MIS", "Summarised reports for managers", "Monthly sales by region"],
          ["DSS", "Supports decisions with models", "What-if pricing tool"],
          ["ERP", "Integrated modules across firm", "SAP, Microsoft Dynamics"],
          ["CRM", "Customer lifecycle data", "Salesforce, HubSpot"],
          ["Socio-technical", "People + tech + process together", "Nurses + patient record + ward routine"],
          ["Shadow IT", "Unofficial tools staff use instead", "Excel when ERP is too slow"],
          ["Change management", "Planned adoption of new system", "Training, champions, phased rollout"],
          ["Data migration", "Moving old data to new system", "Dirty data breaks go-live"],
          ["Governance", "Who decides IT priorities", "Steering committee, CIO"],
          ["TAM", "Adoption model: usefulness + ease", "App unused because login is hard"],
          ["GDPR", "EU personal data rules", "Consent for customer analytics"],
        ],
      },
    },
    {
      title: "Tutorial walkthrough: case study answer (full marks style)",
      paragraphs: [
        "<strong>Case</strong>: A regional clinic wants a new booking system. Staff use phone and paper; patients want online booking. Budget is limited.",
      ],
      subsections: [
        {
          title: "Analysis structure",
          steps: [
            "Stakeholders: patients, reception, nurses, management, IT vendor.",
            "Current TPS: phone log, paper calendar (informal MIS).",
            "Proposed: patient portal + staff calendar (CRM-like patient history + scheduling TPS).",
            "Technical fit: online booking, reminders, GDPR for health data.",
            "Organisational fit: will reception roles change? training plan?",
            "Risks: double booking during migration; elderly patients without smartphones.",
            "Recommendation: phased rollout; keep phone fallback 6 months; measure no-show rate.",
          ],
        },
      ],
      callout:
        "Exam answers need trade-offs. \"Buy Salesforce\" without context scores lower than \"SaaS CRM fits size and budget but requires integration with existing accounting TPS.\"",
    },
    {
      title: "Practice exam questions (answer in writing)",
      bullets: [
        "Explain socio-technical systems using one example not from the textbook.",
        "Compare ERP vs best-of-breed SaaS for a 20-person NGO.",
        "List four reasons ERP implementations fail that are not technical bugs.",
        "Use TAM to explain why staff ignore a new timesheet app.",
      ],
    },
  );

  afterFromZero("dsnidak124",
    {
      title: "Concept encyclopedia: programming terms",
      table: {
        headers: ["Term", "Meaning", "Analogy"],
        rows: [
          ["Variable", "Named box for a value", "Label on a storage locker"],
          ["Type", "Kind of value allowed", "Locker for numbers only vs text"],
          ["Expression", "Combines values to new value", "2 + 3 * 4"],
          ["Statement", "One instruction", "One line in recipe"],
          ["Condition", "Branch on true/false", "If milk sour, buy new"],
          ["Loop", "Repeat while condition", "Stir until smooth"],
          ["Function", "Named reusable block", "Sub-recipe called twice"],
          ["Parameter", "Input to function", "Ingredient list for sub-recipe"],
          ["Return value", "Output of function", "Dish coming out of sub-recipe"],
          ["Array / list", "Ordered collection", "Shopping list"],
          ["Object / dict", "Key → value map", "Phone book name → number"],
          ["Bug", "Wrong behaviour", "Salt instead of sugar"],
          ["Stack trace", "Where error occurred", "Recipe step that failed"],
          ["DOM", "Browser tree of page elements", "Outline of HTML structure"],
          ["Event listener", "Code run on click etc.", "Doorbell triggers action"],
        ],
      },
    },
    {
      title: "Tutorial part 1: variables, types, and input/output",
      paragraphs: [
        "Goal: read numbers, compute average, print result. This is the pattern inside almost every small program.",
      ],
      code: {
        lang: "python",
        caption: "Read, compute, print: the basic I/O loop.",
        source: `
scores = [78, 85, 92, 88]
total = 0
for s in scores:
    total += s
average = total / len(scores)
print("Average:", average)
`.trim(),
      },
      bullets: [
        "Trace on paper: after loop, total = ? len(scores) = ?",
        "What if scores is empty? Add if not scores: guard.",
        "Change to function average(scores) with return value.",
      ],
    },
    {
      title: "Tutorial part 2: conditions and loops",
      code: {
        lang: "python",
        caption: "Grade classifier with validation (exam-style function).",
        source: `
def letter_grade(score):
    if not 0 <= score <= 100:
        raise ValueError("score must be 0–100")
    if score >= 90:
        return "A"
    if score >= 80:
        return "B"
    if score >= 70:
        return "C"
    return "F"

for s in [95, 82, 60, 105]:
    try:
        print(s, "->", letter_grade(s))
    except ValueError as e:
        print(s, "-> error:", e)
`.trim(),
      },
      paragraphs: [
        "Conditions encode business rules. Loops apply rules to many items. Together they are 80% of beginner programs.",
      ],
    },
    {
      title: "Tutorial part 3: web interactivity (browser as runtime)",
      code: {
        lang: "html",
        caption: "Minimal page: structure + button + script (three layers).",
        source: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Counter demo</title>
</head>
<body>
  <p>Count: <span id="count">0</span></p>
  <button id="inc" type="button">Add one</button>
  <script>
    let count = 0;
    document.getElementById("inc").addEventListener("click", () => {
      count += 1;
      document.getElementById("count").textContent = String(count);
    });
  </script>
</body>
</html>
`.trim(),
      },
      bullets: [
        "HTML = structure; JS = behaviour. CSS would add presentation (try adding a class).",
        "This is event-driven programming: foundation of all apps you will build.",
      ],
    },
    {
      title: "Practice: mastery drills",
      bullets: [
        "Write a function is_prime(n) and test n = 2, 9, 17.",
        "Write a loop that prints FizzBuzz 1–20.",
        "Debug: find off-by-one in a loop that should run 10 times.",
        "Build the counter page locally; change button to subtract one.",
        "Explain = vs == to someone who has never coded.",
      ],
    },
  );
})();
