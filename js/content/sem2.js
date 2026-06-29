(function () {
  const S = (window.CHAPTER_SECTIONS = window.CHAPTER_SECTIONS || {});

  S.dsndadk221 = [
    {
      title: "The semester 2 integrator project",
      paragraphs: [
        "This is the module where separate courses click together. Until now you learned pieces; here you ship one product that uses all of them.",
        "<strong>Udvikling af et interaktivt design</strong> (15 ECTS) is the main semester project with <strong>external examination</strong>. You build an interactive digital product end-to-end: user research → prototype → implementation → evaluation. It synthesises HCI (DSNIDAK223), OOP (DSNIDAK224), and Systemudvikling (DSNIDAK222) with programming from semester 1.",
        "Deliverables typically include a report, runnable system, and oral defence with demo. Examiners expect evidence that users informed design, not only developer preference.",
      ],
    },
    {
      title: "Recommended process",
      bullets: [
        "<strong>Discover</strong>: interviews, contextual inquiry, task analysis",
        "<strong>Define</strong>: personas, scenarios, success metrics",
        "<strong>Design</strong>: paper → wireframe → interactive prototype",
        "<strong>Develop</strong>: OOP structure, MVC, incremental features",
        "<strong>Deliver & evaluate</strong>: usability test, SUS or similar, iterate once",
      ],
      callout:
        "Integrate courses explicitly in the report: UML from Systemudvikling, class diagrams reflected in OOP code, HCI methods with screenshots and quotes from users.",
    },
    {
      title: "Architecture checklist",
      table: {
        headers: ["Concern", "Where it lives", "Exam question"],
        rows: [
          ["Domain logic", "Model classes, no UI dependencies", "Can you unit-test without GUI?"],
          ["Presentation", "Views, templates, components", "Is feedback visible (errors, loading)?"],
          ["Persistence", "Files or DB stub", "What happens on restart?"],
          ["Evaluation", "Protocol, participants, findings", "Did findings change the design?"],
        ],
      },
    },
    {
      title: "Code example: MVC-style separation",
      code: {
        lang: "java",
        caption: "Model holds state; view displays; controller handles input: pattern reused in GUI and web.",
        source: `
public class CounterModel {
  private int value = 0;
  public int getValue() { return value; }
  public void increment() { value++; }
}

public class CounterController {
  private final CounterModel model;
  public CounterController(CounterModel model) { this.model = model; }
  public void onIncrementClicked() { model.increment(); }
}

// View (Swing/JavaFX/web) reads model.getValue() after controller events
`.trim(),
      },
    },
    {
      title: "Exam defence tips",
      bullets: [
        "Demo a <strong>user task</strong>, not a feature tour",
        "Explain one design decision you reversed after testing",
        "Acknowledge technical debt and scope cuts honestly",
        "Link each major requirement to a report section and code location",
      ],
    },
  ];

  S.dsnidak224 = [
    {
      title: "Object-oriented programming",
      paragraphs: [
        "OOP can feel abstract until you link it to nouns in the real world. A <code>Student</code>, a <code>Course</code>, a <code>Grade</code>: each holds data and knows what it can do.",
        "OOP models software as <strong>objects</strong> that combine state (attributes) and behaviour (methods). Classes are blueprints; objects are instances. The four pillars taught here: <strong>encapsulation</strong>, <strong>abstraction</strong>, <strong>inheritance</strong>, and <strong>polymorphism</strong>. The course includes event-driven GUI programming; buttons and menus invoke methods on domain objects.",
      ],
    },
    {
      title: "Encapsulation and abstraction",
      bullets: [
        "Hide internal representation; expose a small public interface",
        "Invariants maintained inside the class (e.g. balance never negative)",
        "Abstraction: client code depends on <em>what</em>, not <em>how</em>",
      ],
      code: {
        lang: "java",
        caption: "Encapsulation: validation inside the class, not scattered in UI code.",
        source: `
public class BankAccount {
  private double balance;

  public BankAccount(double initial) {
    if (initial < 0) throw new IllegalArgumentException("initial >= 0");
    balance = initial;
  }

  public void deposit(double amount) {
    if (amount <= 0) throw new IllegalArgumentException("amount > 0");
    balance += amount;
  }

  public double getBalance() { return balance; }
}
`.trim(),
      },
    },
    {
      title: "Inheritance and polymorphism",
      paragraphs: [
        "<strong>Inheritance</strong> expresses \"is-a\" (Dog extends Animal). <strong>Polymorphism</strong> lets code use a superclass type while runtime behaviour comes from the subclass, e.g. <code>draw()</code> on Shape calls Circle or Rectangle implementation. Prefer composition over deep inheritance hierarchies when behaviour varies by combination rather than taxonomy.",
      ],
      code: {
        lang: "java",
        caption: "Polymorphic call: same interface, different behaviour.",
        source: `
abstract class Shape {
  abstract double area();
}

class Circle extends Shape {
  private final double r;
  Circle(double r) { this.r = r; }
  double area() { return Math.PI * r * r; }
}

Shape s = new Circle(2);
System.out.println(s.area()); // polymorphic dispatch
`.trim(),
      },
    },
    {
      title: "GUI and events",
      paragraphs: [
        "Event-driven programs wait for user input. Handlers should stay thin: parse event → call controller/model → refresh view. Long work on the UI thread freezes interfaces; offload to background tasks in larger apps.",
      ],
    },
    {
      title: "Testing OOP",
      bullets: [
        "Unit-test model classes without launching GUI",
        "Use dependency injection to swap real database for fake in tests",
        "One assertion theme per test; name tests after behaviour (shouldRejectNegativeDeposit)",
      ],
    },
  ];

  S.dsnidak223 = [
    {
      title: "Human-computer interaction (HCI)",
      paragraphs: [
        "HCI is not \"make it pretty\". It is \"can a tired person complete their task without calling support?\" You will use simple methods: watch users, ask questions, fix what fails.",
        "HCI studies how people use interactive technology and how to design systems that are <strong>useful, usable, and satisfying</strong>. Dix et al. frame it as intersection of user, task, and technology. This course (5 ECTS) covers user-centred design (UCD), prototyping, and evaluation. Pretty interfaces that block tasks fail usability tests quickly.",
      ],
    },
    {
      title: "User-centred design process",
      bullets: [
        "<strong>Understand context</strong>: interviews, observation, contextual design",
        "<strong>Specify users & tasks</strong>: personas, scenarios, hierarchical task analysis",
        "<strong>Produce solutions</strong>: sketch → wireframe → prototype (fidelity matches question)",
        "<strong>Evaluate</strong>: heuristic review, usability test, metrics (time, errors, SUS)",
        "<strong>Iterate</strong>: fix top severity issues before adding features",
      ],
    },
    {
      title: "Nielsen's 10 usability heuristics (selection)",
      table: {
        headers: ["Heuristic", "Practical check"],
        rows: [
          ["Visibility of system status", "Loading indicators, saved confirmations"],
          ["Match system & real world", "Labels match user vocabulary, not DB column names"],
          ["User control & freedom", "Undo, cancel, clear exit from flows"],
          ["Consistency & standards", "Same action → same control across screens"],
          ["Error prevention", "Constraints, confirmations for destructive actions"],
          ["Recognition over recall", "Visible options vs. memorised commands"],
        ],
      },
    },
    {
      title: "Evaluation methods",
      subsections: [
        {
          title: "Usability test (formative)",
          paragraphs: [
            "5–8 participants often suffice to find major issues (Nielsen). Give tasks, think-aloud optional, observe without leading. Severity rating: cosmetic → minor → major → catastrophe.",
          ],
        },
        {
          title: "System Usability Scale (SUS)",
          paragraphs: [
            "10-item questionnaire; score 0–100. Benchmark ~68 as average. Use same version pre/post redesign to show improvement, not as substitute for task-based testing.",
          ],
        },
      ],
    },
    {
      title: "Code example: accessible form feedback",
      code: {
        lang: "html",
        caption: "Associate error text with input for screen readers: small change, large usability win.",
        source: `
<label for="email">Email</label>
<input id="email" type="email" aria-describedby="email-error" aria-invalid="true" />
<p id="email-error" role="alert">Enter a valid email address.</p>
`.trim(),
      },
    },
    {
      title: "Visual design basics",
      bullets: [
        "Gestalt: proximity, similarity, continuity to group related controls",
        "Visual hierarchy: one primary action per screen",
        "Fitts's law: important targets large and reachable",
        "Don't rely on colour alone (contrast + icon/text for errors)",
      ],
    },
  ];

  S.dsnidak222 = [
    {
      title: "Object-oriented analysis and design",
      paragraphs: [
        "UML looks like boxes and arrows because software needs a shared sketch language. You are not drawing for decoration; you are agreeing with your group what to build before anyone writes code.",
        "Systemudvikling teaches modelling the <strong>problem domain</strong> before coding: nouns → candidate classes, verbs → operations, relationships → associations. UML is a shared notation between developers and domain experts, not an end in itself. Diagrams in this course should map directly to OOP in DSNIDAK224 and the semester project.",
      ],
    },
    {
      title: "UML diagrams you must know",
      table: {
        headers: ["Diagram", "Shows", "Use when"],
        rows: [
          ["Use case", "Actors and system goals", "Scoping features with stakeholders"],
          ["Class", "Classes, attributes, associations, multiplicities", "Static structure of domain"],
          ["Sequence", "Messages over time between objects", "One scenario through the system"],
          ["State", "States and transitions for one object", "Lifecycle (order: new → paid → shipped)"],
        ],
      },
    },
    {
      title: "Design patterns (GoF intro)",
      paragraphs: [
        "Patterns are reusable micro-architectures for recurring problems. Gamma et al. (<em>Design Patterns</em>) document 23 classic patterns. At this level, focus on <strong>Model-View-Controller (MVC)</strong>, <strong>Observer</strong>, and layered architecture.",
      ],
      subsections: [
        {
          title: "MVC",
          bullets: [
            "<strong>Model</strong>: domain data and rules",
            "<strong>View</strong>: presentation",
            "<strong>Controller</strong>: input, coordinates model and view",
          ],
        },
        {
          title: "Observer",
          paragraphs: [
            "When model state changes, notify dependent views without tight coupling. Foundation for event systems and reactive UI.",
          ],
        },
      ],
    },
    {
      title: "SOLID principles (intro)",
      bullets: [
        "<strong>S</strong>ingle responsibility: one reason to change per class",
        "<strong>O</strong>pen/closed: extend behaviour without modifying stable code",
        "<strong>L</strong>iskov substitution: subclasses honour superclass contracts",
        "<strong>I</strong>nterface segregation: small interfaces beat fat ones",
        "<strong>D</strong>ependency inversion: depend on abstractions, not concretions",
      ],
    },
    {
      title: "Code example: Observer in JavaScript",
      code: {
        lang: "javascript",
        caption: "Simple pub/sub: model notifies subscribers when data changes.",
        source: `
class Subject {
  #listeners = new Set();
  subscribe(fn) { this.#listeners.add(fn); return () => this.#listeners.delete(fn); }
  notify(payload) { for (const fn of this.#listeners) fn(payload); }
}

class Cart extends Subject {
  #items = [];
  add(item) {
    this.#items.push(item);
    this.notify({ items: [...this.#items] });
  }
}

const cart = new Cart();
cart.subscribe(state => console.log("UI refresh", state.items.length));
cart.add({ sku: "A1" });
`.trim(),
      },
    },
    {
      title: "From model to code",
      callout:
        "Walk through one use case on a sequence diagram, then implement the same message flow in code. If diagram and code diverge, update the diagram. Outdated UML misleads examiners and teammates.",
    },
  ];
})();
