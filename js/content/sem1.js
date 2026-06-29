(function () {
  const S = (window.CHAPTER_SECTIONS = window.CHAPTER_SECTIONS || {});

  S.dsnidak121 = [
    {
      title: "What is computational thinking?",
      paragraphs: [
        "If you have never heard this term before, read the <strong>Start here</strong> box above first. This section adds the academic framing.",
        "Jeannette Wing (2006) popularised <strong>computational thinking (CT)</strong> as a way of formulating problems so their solutions can be carried out by humans, machines, or both. CT is not synonymous with programming: it is the mental toolkit you use <em>before</em> and <em>while</em> you code, including decomposition, choosing representations, designing algorithms, and evaluating trade-offs.",
        "At AAU this module is assessed as a <strong>project with pass/fail</strong>. Groups typically build an <strong>agent-based simulation</strong>: many simple agents follow local rules; global patterns (clusters, epidemics, segregation) emerge from interaction. The exam tests whether you can defend your model's assumptions, not whether you memorised syntax.",
      ],
    },
    {
      title: "The four pillars of CT",
      paragraphs: [
        "Each pillar is a question you ask yourself when stuck. You do not need fancy math; you need a habit of slowing down and structuring the problem.",
      ],
      table: {
        headers: ["Pillar", "Question you ask", "In a simulation project"],
        rows: [
          ["Decomposition", "What are the parts?", "Agents, environment grid, update rules, parameters, output metrics"],
          ["Pattern recognition", "What repeats?", "Neighbour interactions, threshold behaviour, steady states vs. oscillation"],
          ["Abstraction", "What can I ignore?", "Individual agent identity vs. aggregate counts; 2D grid vs. continuous space"],
          ["Algorithms", "What steps each tick?", "Sense neighbours → apply rule → move/update state → collect statistics"],
        ],
      },
      callout:
        "Wing emphasises reformulating hard problems via reduction, embedding, transformation, or simulation. If you cannot solve the real system directly, build a tractable model and interpret results carefully.",
    },
    {
      title: "Agent-based modelling (ABM)",
      paragraphs: [
        "An ABM has <strong>agents</strong> (autonomous entities), an <strong>environment</strong> (space or network), <strong>rules</strong> (behaviour per time step), and <strong>parameters</strong> (probabilities, speeds, thresholds). Classic examples include Schelling segregation, flocking (Boids), and SIR-style spread of information or disease.",
        "Good projects document: (1) research question, (2) conceptual model, (3) implementation, (4) experiments, (5) sensitivity analysis (how outputs change when parameters shift).",
      ],
      subsections: [
        {
          title: "Sensitivity analysis",
          bullets: [
            "Run the same seed / initial conditions with one parameter varied systematically",
            "Plot outcome vs. parameter (not just one screenshot)",
            "Distinguish <strong>robust</strong> findings from artefacts of a single setting",
          ],
        },
      ],
    },
    {
      title: "Code example: simple agents on a grid",
      code: {
        lang: "python",
        caption: "Minimal tick loop: agents move randomly and count neighbours (illustrative pattern, not a full project).",
        source: `
import random

WIDTH, HEIGHT = 20, 20
agents = [(random.randrange(WIDTH), random.randrange(HEIGHT)) for _ in range(50)]

def count_neighbors(x, y):
    return sum(1 for ax, ay in agents if abs(ax - x) + abs(ay - y) == 1)

def step():
    global agents
    new_agents = []
    for x, y in agents:
        nx, ny = x, y
        if random.random() < 0.3:  # parameter: move probability
            nx += random.choice([-1, 0, 1])
            ny += random.choice([-1, 0, 1])
            nx = max(0, min(WIDTH - 1, nx))
            ny = max(0, min(HEIGHT - 1, ny))
        new_agents.append((nx, ny))
    agents = new_agents

for tick in range(100):
    step()
    avg_neighbors = sum(count_neighbors(x, y) for x, y in agents) / len(agents)
    print(f"tick {tick}: avg neighbors = {avg_neighbors:.2f}")
`.trim(),
      },
    },
    {
      title: "Exam and report principles",
      bullets: [
        "State explicitly what is <strong>in</strong> and <strong>out of scope</strong> for your model",
        "Relate emergent behaviour to micro-rules: avoid claiming causality you did not test",
        "Compare at least two parameter regimes; discuss limitations (2D grid, synchronous updates, etc.)",
      ],
    },
  ];

  S.dsnidak122 = [
    {
      title: "From idea to running software",
      paragraphs: [
        "New to software projects? You are not expected to know project management yet. Think of this module as: <strong>pick a problem → agree what \"done\" looks like → build → show it works</strong>.",
        "<strong>Udvikling af software</strong> is a 10 ECTS semester project graded on the 7-step scale. You deliver a <strong>working software artefact</strong> plus documentation that traces requirements through design, implementation, and test. The demo at examination must run; crashes undermine trust in your process argument.",
        "This module runs parallel to Computational Thinking; groups often share a domain (e.g. simulation + visualisation, or tool supporting the same problem). It also consumes skills from Grundlæggende programmering.",
      ],
    },
    {
      title: "Requirements engineering",
      subsections: [
        {
          title: "Functional vs. non-functional",
          paragraphs: [
            "<strong>Functional</strong> = what the system does (\"user can log in\"). <strong>Non-functional</strong> = how well it does it (\"login under 2 seconds\", \"works on mobile\"). Both belong in requirements; beginners often forget the second type.",
          ],
          bullets: [
            "Use SMART or INVEST-style checks so requirements are testable",
          ],
        },
        {
          title: "Traceability",
          paragraphs: [
            "Maintain a matrix linking each requirement to design elements, code modules, and tests. Examiners look for evidence that scope was controlled deliberately, not by accident.",
          ],
          table: {
            headers: ["Req ID", "Description", "Component", "Test"],
            rows: [
              ["R1", "Save simulation state", "StateManager.save()", "test_save_roundtrip"],
              ["R2", "Load under 2 s for 10k agents", "Persistence layer", "perf_load_benchmark"],
            ],
          },
        },
      ],
    },
    {
      title: "Development lifecycle (practical)",
      bullets: [
        "<strong>Discover</strong>: problem, users, constraints",
        "<strong>Define</strong>: MVP scope; defer nice-to-haves",
        "<strong>Design</strong>: architecture sketch, data structures, UI wireframes if relevant",
        "<strong>Build</strong>: vertical slices (end-to-end features) beat horizontal layers that integrate late",
        "<strong>Verify</strong>: automated tests where possible; manual test scripts for demos",
        "<strong>Reflect</strong>: PBL report: what worked in the team, what you would change",
      ],
    },
    {
      title: "Code example: requirement-driven test",
      code: {
        lang: "javascript",
        caption: "A minimal test guards a core requirement: pattern used throughout the programme.",
        source: `
// Requirement R1: factorial of n for n >= 0
function factorial(n) {
  if (n < 0) throw new RangeError("n must be non-negative");
  return n <= 1 ? 1 : n * factorial(n - 1);
}

// Simple assertion (Jest/Mocha would wrap this in production code)
function assertEqual(actual, expected, msg) {
  if (actual !== expected) throw new Error(msg ?? \`\${actual} !== \${expected}\`);
}

assertEqual(factorial(0), 1, "0! = 1");
assertEqual(factorial(5), 120, "5! = 120");
console.log("R1 tests passed");
`.trim(),
      },
    },
    {
      title: "Quality and MVP discipline",
      paragraphs: [
        "An MVP proves the riskiest assumption with the smallest build. Common failure mode: implementing peripheral features while core data flow is untested. Version control (Git), code review within the group, and a repeatable build/run script are baseline professional habits: document them in your process section.",
      ],
    },
  ];

  S.dsnidak123 = [
    {
      title: "Information systems in organisations",
      paragraphs: [
        "You do not need business experience to start here. Whenever you use NemID, a web shop, or a hospital booking page, you are touching an information system. This course explains the types that exist and why rollout is hard.",
        "Organisations run on <strong>information systems (IS)</strong>: hardware, software, data, procedures, and people. Laudon's framework distinguishes systems by organisational level and function. Technical excellence does not guarantee value: adoption, training, and fit with work practices determine ROI.",
        "This 5 ECTS course uses the 7-step scale. Exam questions often ask you to classify systems, analyse implementation challenges, or argue socio-technical fit.",
      ],
    },
    {
      title: "Types of information systems",
      paragraphs: [
        "Acronyms look scary at first. Read the third column in the table: it says what the system is <em>for</em> in everyday language.",
      ],
      table: {
        headers: ["Type", "Typical users", "Purpose"],
        rows: [
          ["TPS (Transaction Processing)", "Operations, cashiers, warehouse", "Record routine transactions: orders, payments, inventory"],
          ["MIS (Management Information)", "Middle management", "Summarised reports from TPS data"],
          ["DSS (Decision Support)", "Analysts, executives", "What-if analysis, models, dashboards"],
          ["ERP (Enterprise Resource Planning)", "Cross-functional", "Integrated modules: finance, HR, supply chain"],
          ["CRM (Customer Relationship Management)", "Sales, marketing, service", "Customer lifecycle, campaigns, support history"],
        ],
      },
    },
    {
      title: "Socio-technical systems",
      paragraphs: [
        "A <strong>socio-technical</strong> view treats technology and social structure as co-dependent. Changing software without changing roles, incentives, or training often produces <strong>workarounds</strong> (shadow IT, spreadsheets on the side). Successful implementation includes change management, champions, and iterative rollout.",
      ],
      bullets: [
        "<strong>Technical fit</strong>: does the system do what is needed?",
        "<strong>Organisational fit</strong>: compatible with structure and culture?",
        "<strong>Environmental fit</strong>: legal, market, competitive context?",
      ],
    },
    {
      title: "Implementation and governance",
      subsections: [
        {
          title: "Common failure modes",
          bullets: [
            "Scope creep and customisation overload on ERP",
            "Underestimating data migration and master data quality",
            "Ignoring front-line workers in requirements",
            "Measuring go-live date instead of realised benefits",
          ],
        },
        {
          title: "Governance",
          paragraphs: [
            "IT governance allocates decision rights: who prioritises projects, who owns data definitions, who approves security exceptions. Align IS strategy with business strategy: Porter's value chain is a classic lens for where IS creates competitive advantage vs. table stakes.",
          ],
        },
      ],
    },
    {
      title: "Worked example: choosing a system",
      callout:
        "Scenario: A growing NGO needs donor tracking and event signup. TPS handles individual donations; CRM fits relationship history; a lightweight SaaS CRM may beat full ERP for cost and speed. Argue stakeholders, integration with accounting (TPS/ERP boundary), and GDPR for personal data, not only feature lists.",
    },
  ];

  S.dsnidak124 = [
    {
      title: "Programming foundations",
      paragraphs: [
        "Never coded before? That is OK. This course assumes zero. A program is just a list of instructions the computer runs top to bottom, with some branching and repetition.",
        "Grundlæggende programmering (5 ECTS, often taught in English) establishes the execution model: source code → interpreter/compiler → running process. You learn variables, types, control flow, functions, collections, file I/O, and a small web stack (HTML, CSS, JavaScript). Everything later (OOP, databases, full-stack projects) assumes comfort reading and debugging code.",
      ],
    },
    {
      title: "Core language concepts",
      table: {
        headers: ["Concept", "Idea", "Typical mistake"],
        rows: [
          ["Variable & type", "Named storage with a kind of value", "Confusing assignment with comparison (= vs. ===)"],
          ["Scope", "Where a name is visible", "Unintended global mutable state"],
          ["Control flow", "if/else, loops", "Off-by-one errors in loop bounds"],
          ["Function", "Named, reusable logic", "Side effects hidden inside \"pure-looking\" functions"],
          ["Collection", "list/array, map/dict", "Mutating while iterating"],
        ],
      },
    },
    {
      title: "Debugging method",
      bullets: [
        "<strong>Reproduce</strong>: smallest input that fails",
        "<strong>Isolate</strong>: binary search: comment half the code, use logs/breakpoints",
        "<strong>Fix</strong>: one change at a time; add a regression test",
        "<strong>Prevent</strong>: clarify types, invariants, input validation",
      ],
    },
    {
      title: "Code example: functions and edge cases",
      code: {
        lang: "python",
        caption: "Defensive function design: validate inputs, handle empty collections.",
        source: `
def average(numbers):
    if not numbers:
        raise ValueError("numbers must not be empty")
    return sum(numbers) / len(numbers)

def classify_score(score):
    if not 0 <= score <= 100:
        raise ValueError("score must be between 0 and 100")
    if score >= 90:
        return "A"
    if score >= 80:
        return "B"
    return "C"

print(average([10, 20, 30]))  # 20.0
print(classify_score(85))       # B
`.trim(),
      },
    },
    {
      title: "Web basics: DOM and events",
      paragraphs: [
        "Client-side web programming connects HTML structure, CSS presentation, and JavaScript behaviour. The DOM is a tree; events (click, submit, input) drive interactivity. Keep separation in mind early: structure in HTML, behaviour in JS, a precursor to MVC in semester 2.",
      ],
      code: {
        lang: "javascript",
        caption: "Button click updates a counter: event-driven UI pattern.",
        source: `
const button = document.querySelector("#inc");
const output = document.querySelector("#count");
let count = 0;

button.addEventListener("click", () => {
  count += 1;
  output.textContent = String(count);
});
`.trim(),
      },
    },
    {
      title: "Security and testing (intro)",
      bullets: [
        "Never trust client input: validate on server; escape output to mitigate XSS",
        "SQL injection appears in semester 3: parameterised queries from day one",
        "Unit tests document expected behaviour; run them before demos",
      ],
    },
  ];
})();
