/**
 * From zero to mastery: Semester 2 modules.
 */
(function () {
  const S = window.CHAPTER_SECTIONS;
  if (!S) return;

  function prepend(id, ...sections) {
    if (!S[id]) S[id] = [];
    S[id] = [...sections, ...S[id]];
  }

  prepend("dsndadk221",
    {
      title: "From zero (1/4): What is this semester project?",
      paragraphs: [
        "Semester 2's main module (15 ECTS, <strong>external examination</strong>) is where you prove you can ship an <strong>interactive product</strong>: something a person can click, type, or tap, and the system responds sensibly. It is not a slideshow; it is running software plus evidence that users shaped the design.",
        "You combine three courses: <strong>HCI</strong> (how to design for users), <strong>OOP</strong> (how to structure code), and <strong>Systemudvikling</strong> (how to plan with diagrams). Semester 1 gave you basic programming; this semester adds structure and user focus. The prototype you build here often becomes the foundation for semester 3's larger system.",
        "External examiners may not know your course history. They judge the demo, report, and your answers. \"It looked nice\" is weak. \"Users failed task 2 in testing, so we moved the confirm button\" is strong.",
      ],
    },
    {
      title: "From zero (2/4): The full stack of skills in one project",
      table: {
        headers: ["Skill", "What you demonstrate", "Evidence in report"],
        rows: [
          ["User research", "Interviews, tasks, personas", "Quotes, photos (consent), task list"],
          ["Design", "Wireframes, prototypes", "Before/after screenshots"],
          ["Architecture", "Layers, MVC, class diagram", "UML + code structure match"],
          ["Implementation", "Working UI + logic", "Git repo, demo, README"],
          ["Evaluation", "Usability test, fixes", "Protocol, findings table, severity"],
          ["Reflection", "Process and limits", "Honest scope and debt section"],
        ],
      },
    },
    {
      title: "From zero (3/4): Twelve-week mastery path",
      steps: [
        "<strong>Weeks 1–2</strong>: Problem, users, 5+ interviews, task analysis, persona draft.",
        "<strong>Weeks 3–4</strong>: Paper prototype → clickable wireframe; test with 3 users; revise.",
        "<strong>Weeks 5–6</strong>: Architecture + class diagram; first vertical slice in code (one full user journey).",
        "<strong>Weeks 7–8</strong>: Core features; unit tests on domain logic; internal demo.",
        "<strong>Weeks 9–10</strong>: Formal usability test (5 users); fix critical/major issues.",
        "<strong>Weeks 11–12</strong>: Report, traceability, rehearsal with external-style questions.",
      ],
    },
    {
      title: "From zero (4/4): External exam mastery",
      bullets: [
        "Demo a <strong>user task</strong> (book, register, complete checklist), not a feature tour.",
        "Explain one requirement → design → code → test chain in detail.",
        "Show one thing you changed because of user testing (with quote).",
        "Acknowledge technical debt and what semester 3 would add (database, auth, deployment).",
        "Answer \"why MVC?\" with separation of concerns, not \"because we were told to.\"",
      ],
    },
  );

  prepend("dsnidak224",
    {
      title: "From zero (1/4): What is object-oriented programming?",
      paragraphs: [
        "In semester 1 you wrote functions and variables in files. As programs grow, that becomes hard to navigate. <strong>Object-oriented programming (OOP)</strong> organises code around <strong>objects</strong>: bundles of data and behaviour that mirror things in the problem (User, Order, BankAccount, Button).",
        "Think of a <strong>class</strong> as a blueprint and an <strong>object</strong> as one built instance. A `Car` class defines `speed` and `accelerate()`; your `myCar` object is one specific car. This module (5 ECTS, 7-step) includes GUI basics: buttons trigger methods on objects.",
        "OOP is not the only way to write software, but it dominates Java, C#, much game code, and many AAU projects. Semester 2 project code should look like cooperating objects, not one 2000-line file.",
      ],
    },
    {
      title: "From zero (2/4): The four pillars (must know cold)",
      subsections: [
        {
          title: "Encapsulation",
          paragraphs: [
            "Hide internal data; expose a small public interface. `deposit()` validates amount inside the class instead of every screen doing it differently. Private fields + public methods in Java/C#.",
          ],
        },
        {
          title: "Abstraction",
          paragraphs: [
            "User of the class does not need to know internal representation. You call `getBalance()`; you do not touch `balance` directly.",
          ],
        },
        {
          title: "Inheritance",
          paragraphs: [
            "\"Is-a\" relationship: `Dog extends Animal`. Share common code; override specific behaviour. Do not inherit only to reuse code; prefer composition when possible.",
          ],
        },
        {
          title: "Polymorphism",
          paragraphs: [
            "Variable of type `Animal` can hold a `Dog`; calling `speak()` runs the dog version. Enables generic code over many types.",
          ],
        },
      ],
    },
    {
      title: "From zero (3/4): From procedural to OOP (mental shift)",
      steps: [
        "List nouns in the problem domain → candidate classes.",
        "For each class: what data? what actions?",
        "Remove duplicate logic into shared superclass or helper.",
        "GUI events call controller/service methods, not SQL in button handler.",
        "Write one unit test per core class method before connecting GUI.",
      ],
      code: {
        lang: "java",
        caption: "Before OOP: scattered variables. After OOP: one responsible class.",
        source: `
// Procedural (hard to maintain)
double balance = 100;
void deposit(double amt) { balance += amt; }

// OOP (encapsulated)
class Account {
  private double balance;
  void deposit(double amt) {
    if (amt <= 0) throw new IllegalArgumentException();
    balance += amt;
  }
  double getBalance() { return balance; }
}
`.trim(),
      },
    },
    {
      title: "From zero (4/4): Mastery checklist",
      bullets: [
        "Draw a class diagram with 3–4 classes and explain each arrow.",
        "Explain Liskov substitution in plain language with Animal/Dog example.",
        "Explain why GUI code should not contain SQL or tax calculation.",
        "Implement one interface and two implementing classes (polymorphism demo).",
        "Fix a design where one class does UI + database + business rules (identify SRP violation).",
      ],
    },
  );

  prepend("dsnidak223",
    {
      title: "From zero (1/4): What is HCI?",
      paragraphs: [
        "<strong>Human-computer interaction (HCI)</strong> is the study and practice of designing systems people can use without frustration. It combines psychology (how people perceive and decide), design (layout, flow, feedback), and evaluation (watching real users try tasks).",
        "Bad HCI loses users and money. Good HCI is not \"make it pretty\": it is measurable task success, low errors, and acceptable satisfaction. This 5 ECTS course feeds directly into the semester 2 project: you are expected to run user research and usability tests, not guess from your own taste.",
        "You will learn interviews, personas, wireframes, heuristics, and simple metrics like SUS (System Usability Scale). The same methods return in thesis work and the AI+HCI elective.",
      ],
    },
    {
      title: "From zero (2/4): Core HCI concepts",
      subsections: [
        {
          title: "User-centred design (UCD)",
          paragraphs: [
            "Involve users early and often. Understand context → requirements → design → evaluate → iterate. ISO 9241-210 names these phases; your project report should mirror them.",
          ],
        },
        {
          title: "Usability (ISO 9241-11)",
          paragraphs: [
            "Effectiveness (can they complete tasks?), efficiency (how much effort/time?), satisfaction (how do they feel?). All three in context of real use.",
          ],
        },
        {
          title: "Affordances and feedback (Norman)",
          paragraphs: [
            "Controls should suggest how to use them; system must respond visibly to every action (loading, success, error). Silent failure is a classic exam example.",
          ],
        },
        {
          title: "Heuristic evaluation",
          paragraphs: [
            "Experts inspect UI against Nielsen's 10 heuristics (visibility, match, control, consistency, error prevention, etc.). Cheap before full user test.",
          ],
        },
        {
          title: "Usability testing",
          paragraphs: [
            "5 users find many serious issues. Task-based protocol, think-aloud, severity ratings. Findings must lead to design changes.",
          ],
        },
      ],
    },
    {
      title: "From zero (3/4): Run your first usability test",
      steps: [
        "Write 3–5 realistic tasks (not \"click settings\").",
        "Recruit 5 people from target group; brief consent if recording.",
        "Pilot test on one person; fix confusing instructions.",
        "Facilitator: stay quiet; note where they hesitate or fail.",
        "Rate issues: critical / major / minor; count how many users hit each.",
        "Fix top issues; re-test at least one critical fix.",
        "Report with quotes, screenshots, and SUS if course requires it.",
      ],
    },
    {
      title: "From zero (4/4): You understand HCI when…",
      bullets: [
        "You can critique a screen with two heuristics and suggest concrete fixes.",
        "You can explain why your own favourite design might fail for a novice user.",
        "You distinguish graphic design (brand, aesthetics) from interaction design (tasks, flow).",
        "You can write a test protocol another student could repeat.",
        "You can connect a user quote to a specific UI change in your project.",
      ],
    },
  );

  prepend("dsnidak222",
    {
      title: "From zero (1/4): What is systems development?",
      paragraphs: [
        "Before several developers write code for weeks, they need a <strong>shared map</strong> of what the system does and how parts connect. <strong>Systemudvikling</strong> (5 ECTS) teaches modelling with <strong>UML</strong> and introductory <strong>design patterns</strong> so groups align before integration breaks.",
        "This is not bureaucracy for its own sake. It is how you explain to examiners and teammates: who uses the system, what happens in a use case, which classes hold which data, and how objects message each other at runtime. The diagrams should match your OOP code in the semester project.",
        "You also learn the difference between the <strong>problem domain</strong> (library, loans, books) and the <strong>application domain</strong> (database connections, login sessions). Mixing them in one diagram creates confusion.",
      ],
    },
    {
      title: "From zero (2/4): Diagram toolkit (what each is for)",
      table: {
        headers: ["Diagram", "Shows", "When to use"],
        rows: [
          ["Use case", "Actors and goals", "Scope agreement with users/stakeholders"],
          ["Class", "Classes, attributes, relations", "Static structure before coding"],
          ["Sequence", "Messages over time", "One scenario through layers"],
          ["State", "States and transitions", "Objects with modes (order: new→paid→shipped)"],
          ["Activity", "Flow and branches", "Complex business process"],
        ],
      },
    },
    {
      title: "From zero (3/4): From use case to code (one path)",
      steps: [
        "Write use case \"Renew loan\" with main flow and exceptions.",
        "Nouns → classes: Member, Loan, Item; verbs → methods: renew().",
        "Draw class diagram with multiplicities (1 member, many loans).",
        "Draw sequence diagram: UI → Controller → Loan → Repository.",
        "Implement classes in OOP; code should match diagram names.",
        "When code changes, update diagram (or examiners see drift).",
      ],
    },
    {
      title: "From zero (4/4): Patterns and GRASP (intro mastery)",
      paragraphs: [
        "<strong>MVC</strong> separates model (data/rules), view (UI), controller (input). Most AAU interactive projects use this idea in some form.",
        "<strong>GRASP</strong> tells you which class gets a responsibility: Information Expert (who has the data?), Creator (who creates objects?), Controller (who handles system events?). You are not expected to memorise all patterns, but you must justify where a method lives.",
      ],
      bullets: [
        "Explain MVC with your semester project in three sentences.",
        "Draw one sequence diagram for login or checkout flow.",
        "Name one GoF pattern (Observer, Strategy, Factory) and a real use case.",
        "Spot a God class (does everything) and propose split using SRP.",
      ],
    },
  );
})();
