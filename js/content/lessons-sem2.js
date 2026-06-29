/**
 * Progressive lessons: Semester 2 modules.
 */
(function () {
  const S = window.CHAPTER_SECTIONS;
  if (!S) return;

  function insertLessons(id, ...sections) {
    if (!S[id]) return;
    const idx = S[id].findIndex((s) => s.title.includes("From zero (4/4)"));
    const at = idx >= 0 ? idx + 1 : 0;
    S[id].splice(at, 0, ...sections);
  }

  const lesson = (n, title, body) => ({
    title: `Lesson ${n}: ${title}`,
    ...body,
  });

  insertLessons("dsndadk221",
    lesson(1, "One product, many disciplines", {
      paragraphs: [
        "Semester 2 project is integration under pressure. HCI says talk to users. Systemudvikling says draw the plan. OOP says structure the code. Software engineering says test and document. External examiners see whether the pieces connect.",
      ],
    }),
    lesson(2, "User research without fancy tools", {
      steps: [
        "Recruit 5 people similar to target users.",
        "Ask open questions about current workflow, not \"would you like our app.\"",
        "Take notes on pain points, workarounds, exact quotes.",
        "Summarise top 3 tasks users need to accomplish.",
        "Turn each task into a requirement with acceptance criteria.",
      ],
    }),
    lesson(3, "MVC in one user click", {
      paragraphs: [
        "User clicks Save → View forwards event → Controller validates → Model updates state → View refreshes display. If tax calculation lives in View, you fail maintainability. If SQL lives in View, you fail twice.",
      ],
    }),
    lesson(4, "Usability test minimum viable", {
      paragraphs: [
        "Five users, three tasks, think-aloud, severity-rated findings, fix critical issues, re-test one fix. That sentence is a complete plan you can expand into a report section.",
      ],
    }),
    lesson(5, "Report structure examiners expect", {
      table: {
        headers: ["Chapter", "Content"],
        rows: [
          ["Introduction", "Problem, users, scope"],
          ["Process", "Methods, timeline, roles"],
          ["Analysis", "Research + design rationale"],
          ["Design", "Architecture, UML, UI evolution"],
          ["Implementation", "Tech choices, key code"],
          ["Evaluation", "Test results, usability"],
          ["Reflection", "PBL, limitations, future work"],
        ],
      },
    }),
    lesson(6, "Check yourself", {
      callout:
        "<strong>Answers sketch:</strong> Evidence chain = user insight → design change → code → re-test. Vertical slice = one journey working end-to-end. External exam tests demo + oral defence of choices.",
    }),
  );

  insertLessons("dsnidak224",
    lesson(1, "Objects mirror the problem domain", {
      paragraphs: [
        "List nouns in your problem: Book, Member, Loan. Each becomes a class candidate. Verbs become methods: borrow(), renew(). If a verb needs data from two nouns, a service class coordinates.",
      ],
    }),
    lesson(2, "Encapsulation saves group projects", {
      paragraphs: [
        "Without encapsulation, one teammate changes a field from UI, another from file loader, state breaks silently. Public methods with validation centralise rules. Tests target public interface.",
      ],
      code: {
        lang: "java",
        caption: "Invalid state cannot exist if constructor and methods enforce rules.",
        source: `
public class Loan {
  private int renewalCount;
  private static final int MAX = 3;

  public void renew() {
    if (renewalCount >= MAX)
      throw new IllegalStateException("max renewals");
    renewalCount++;
  }
}
`.trim(),
      },
    }),
    lesson(3, "Inheritance vs composition", {
      paragraphs: [
        "Inheritance: Dog is-an Animal. Composition: Car has-a Engine. Favour composition when behaviour mixes (Car has GPS, Engine, Radio) rather than deep trees. Exam questions often probe Liskov: subclass must not break superclass expectations.",
      ],
    }),
    lesson(4, "GUI events", {
      paragraphs: [
        "Button click is an event. Handler calls application logic. Long work on UI thread freezes interface; advanced courses use async. Semester 2: keep handlers thin, delegate to model/service.",
      ],
    }),
    lesson(5, "SOLID at student level", {
      bullets: [
        "<strong>S</strong>ingle responsibility: one reason to change per class.",
        "<strong>O</strong>pen/closed: extend behaviour without editing core (interfaces help).",
        "<strong>L</strong>iskov: subclasses honour superclass contracts.",
        "<strong>I</strong>nterface segregation: small interfaces.",
        "<strong>D</strong>ependency inversion: depend on abstractions, not concrete DB.",
      ],
    }),
    lesson(6, "Check yourself", {
      callout:
        "<strong>Answers sketch:</strong> Polymorphism = same message, different behaviour. Encapsulation hides fields. Unit test domain without GUI by calling public methods on model/service.",
    }),
  );

  insertLessons("dsnidak223",
    lesson(1, "Users are not you", {
      paragraphs: [
        "Developers know the system; users do not. Expert blind spot: you click through in 5 seconds; a novice fails for 5 minutes. HCI methods exist to surface that gap with evidence, not opinions.",
      ],
    }),
    lesson(2, "Task analysis template", {
      table: {
        headers: ["Step", "Current tool", "Pain", "Design idea"],
        rows: [
          ["Find order", "Email search", "Slow", "Dashboard with search"],
          ["Check status", "Call warehouse", "Wait time", "Live status badge"],
          ["Request change", "Paper form", "Errors", "Guided wizard"],
        ],
      },
    }),
    lesson(3, "Wireframe to prototype", {
      paragraphs: [
        "Low fidelity first: boxes and labels on paper. Test tasks on paper before pixels. Then digital clickable prototype (Figma, etc.). Each fidelity level catches different issues cheaply.",
      ],
    }),
    lesson(4, "Measuring usability", {
      bullets: [
        "Task success rate (% completed).",
        "Time on task.",
        "Error count.",
        "SUS questionnaire after session.",
        "Qualitative quotes for why.",
      ],
    }),
    lesson(5, "Accessibility basics", {
      paragraphs: [
        "Keyboard navigation, colour contrast, labels on form fields, error text not colour-only. Accessibility helps everyone and is increasingly legally required in public services.",
      ],
    }),
    lesson(6, "Check yourself", {
      callout:
        "<strong>Answers:</strong> UCD = users involved throughout. Heuristic = expert inspection rule set. Think-aloud = user narrates during tasks. Affordance = perceived action possibility.",
    }),
  );

  insertLessons("dsnidak222",
    lesson(1, "Diagrams are shared thinking", {
      paragraphs: [
        "UML is not bureaucracy. It is a whiteboard language that survives in reports. When diagram and code diverge, trust erodes. Update diagrams when architecture changes, or label diagram \"as-built week 8.\"",
      ],
    }),
    lesson(2, "Use cases define scope", {
      paragraphs: [
        "Actor sticks figure; use case oval; line connects who can do what. \"Pay invoice\" includes authentication extend point. Scope arguments happen here before coding wrong features.",
      ],
    }),
    lesson(3, "Class diagrams from nouns", {
      paragraphs: [
        "Underline nouns in use case text → classes. Verbs → methods. Associations show who knows whom. Multiplicity: one order, many line items.",
      ],
    }),
    lesson(4, "Sequence diagrams for debugging", {
      paragraphs: [
        "When demo fails, draw sequence of messages that should happen vs what logs show. Missing message = missing method call or wrong layer.",
      ],
    }),
    lesson(5, "Patterns as vocabulary", {
      bullets: [
        "MVC: separate UI, logic, data.",
        "Observer: notify listeners on change.",
        "Strategy: interchangeable algorithms.",
        "Repository: hide persistence behind interface.",
      ],
    }),
    lesson(6, "Check yourself", {
      callout:
        "<strong>Answers:</strong> Problem domain = business concepts. Application domain = technical infrastructure. GRASP Information Expert: assign method to class that has needed data.",
    }),
  );
})();
