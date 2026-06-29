/**
 * Tutorial depth: Semester 2 modules.
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

  afterFromZero("dsndadk221",
    {
      title: "Concept encyclopedia: interactive product terms",
      table: {
        headers: ["Term", "Definition", "Project evidence"],
        rows: [
          ["Interactive system", "User actions change system state visibly", "Click → screen updates"],
          ["User research", "Learning from real users", "Interview notes, quotes"],
          ["Task analysis", "Steps users take today", "Task list with pain points"],
          ["Persona", "Fictional archetype user", "Goals, frustrations, context"],
          ["Wireframe", "Low-fidelity layout", "Boxes and labels, not colours"],
          ["Prototype", "Clickable approximation", "Figma or running UI"],
          ["Usability test", "Users try tasks while observed", "Protocol + findings"],
          ["Severity", "Critical / major / minor issue", "Table in report"],
          ["MVC", "Model, View, Controller split", "Folder or package structure"],
          ["Vertical slice", "One journey end-to-end", "Login → main task → save"],
          ["Traceability", "Req linked to UI and code", "Matrix in report"],
          ["External exam", "Outsider judges demo + report", "Rehearse cold start"],
        ],
      },
    },
    {
      title: "Tutorial walkthrough: semester 2 project day-by-day (first 4 weeks)",
      subsections: [
        {
          title: "Week 1: Discover",
          steps: [
            "Agree problem statement in one sentence.",
            "Interview 5 target users (30 min each); ask about current workflow, not \"would you like an app.\"",
            "List 10 tasks users do today; highlight 3 painful ones.",
            "Draft persona (name, role, quote, goal).",
          ],
        },
        {
          title: "Week 2: Define + design",
          steps: [
            "Pick MVP: one persona, one main task, success metric (time, errors).",
            "Paper prototype; walk through with one user; note confusion.",
            "Digital wireframe; second user test.",
            "Write requirements R1–R5 from findings.",
          ],
        },
        {
          title: "Week 3: Architecture + slice",
          steps: [
            "Class diagram for domain (3–6 classes).",
            "Sequence diagram for main task.",
            "Code: model classes + one screen + stub data.",
            "Demo within group: complete main task with fake data.",
          ],
        },
        {
          title: "Week 4: Integrate + internal test",
          steps: [
            "Persistence (file or DB stub).",
            "Unit test on domain rule.",
            "Fix top 3 wireframe issues from week 2.",
            "Prepare supervisor meeting: demo + open questions list.",
          ],
        },
      ],
    },
    {
      title: "Tutorial: document the evidence chain (exam template)",
      paragraphs: [
        "Examiners reward one fully documented design decision. Copy this pattern in your report.",
      ],
      table: {
        headers: ["Stage", "Evidence"],
        rows: [
          ["Problem", "Quote: \"I always forget to…\" (User 3, interview)"],
          ["Finding", "4/5 users failed task 2 in paper test (wrong button label)"],
          ["Design change", "Renamed \"Submit\" → \"Save booking\"; moved button above fold"],
          ["Implementation", "Commit abc123; BookingView.java lines 45–60"],
          ["Re-test", "5/5 success on task 2 in follow-up test"],
        ],
      },
    },
    {
      title: "Practice checklist before external exam",
      bullets: [
        "Cold-start demo from Git clone + README on a clean laptop.",
        "Three user quotes in report linked to screenshots.",
        "One sequence diagram matches code class names.",
        "One unit test runs in under 2 seconds.",
        "60-second pitch memorised: problem, user, solution, evidence, limits.",
      ],
    },
  );

  afterFromZero("dsnidak224",
    {
      title: "Concept encyclopedia: OOP terms",
      table: {
        headers: ["Term", "Meaning", "Example"],
        rows: [
          ["Class", "Blueprint", "class Dog { … }"],
          ["Object / instance", "One concrete thing", "myDog = new Dog()"],
          ["Attribute / field", "Data on object", "name, age"],
          ["Method", "Behaviour on object", "bark(), deposit()"],
          ["Constructor", "Runs when object created", "Dog(String name)"],
          ["Encapsulation", "Hide fields, public methods", "private balance"],
          ["Interface", "Contract without implementation", "Drawable { draw() }"],
          ["Abstract class", "Partial implementation", "abstract class Shape"],
          ["Override", "Subclass replaces method", "Circle.area()"],
          ["Composition", "Has-a not is-a", "Car has Engine"],
          ["Polymorphism", "Same call, different behaviour", "shape.draw()"],
          ["GUI event", "Click invokes handler", "onAction → controller"],
        ],
      },
    },
    {
      title: "Tutorial: design a mini domain model (library)",
      paragraphs: [
        "Work through this design before opening the IDE. Naming classes here becomes your codebase.",
      ],
      subsections: [
        {
          title: "Nouns → classes",
          bullets: [
            "Book: title, isbn; copyAvailable().",
            "Member: id, name; activeLoans().",
            "Loan: dueDate, renew(); isOverdue().",
            "LibraryService: renewLoan(memberId, loanId) coordinates rules.",
          ],
        },
        {
          title: "Rules in domain, not in GUI",
          paragraphs: [
            "renew() checks max renewals and holds inside Loan or LibraryService. Button handler only calls service.renewLoan(). This is how you unit-test without clicking.",
          ],
        },
      ],
      code: {
        lang: "java",
        caption: "Polymorphism: process any Payment subtype the same way.",
        source: `
interface Payment {
  boolean authorize();
}

class CardPayment implements Payment {
  public boolean authorize() { /* call gateway */ return true; }
}

class InvoicePayment implements Payment {
  public boolean authorize() { /* check credit limit */ return true; }
}

void checkout(Payment p) {
  if (p.authorize()) {
    // complete order
  }
}
`.trim(),
      },
    },
    {
      title: "Practice: OOP drills",
      bullets: [
        "Draw class diagram for a shop cart (Product, LineItem, Cart).",
        "Explain why Cart should not extend ArrayList.",
        "Write one JUnit test for renew() when max renewals exceeded.",
        "Find God class in a sample project; list three responsibilities to split.",
      ],
    },
  );

  afterFromZero("dsnidak223",
    {
      title: "Concept encyclopedia: HCI terms",
      table: {
        headers: ["Term", "Definition", "Design consequence"],
        rows: [
          ["UCD", "User-centred design process", "Users in every phase"],
          ["Contextual inquiry", "Observe users in environment", "Real constraints visible"],
          ["Think-aloud", "User speaks while doing task", "Reveals mental model"],
          ["Affordance", "Perceived possible action", "Button looks clickable"],
          ["Signifier", "Cue for affordance", "Label, icon, shape"],
          ["Feedback", "System response to action", "Spinner, toast, error text"],
          ["Heuristic", "Rule of thumb for good UI", "Visibility of status"],
          ["Cognitive load", "Mental effort required", "Fewer choices per screen"],
          ["Error recovery", "Undo, clear messages", "Not only happy path"],
          ["SUS", "10-item usability questionnaire", "Score compared to benchmarks"],
          ["Accessibility", "Usable by diverse abilities", "Contrast, keyboard, labels"],
        ],
      },
    },
    {
      title: "Tutorial: redesign a bad form (step by step)",
      paragraphs: [
        "Imagine a government form with 40 fields on one page, red error text saying \"Error 422\", no progress indicator.",
      ],
      steps: [
        "<strong>Heuristic audit</strong>: list violations (visibility, error prevention, match to real world…).",
        "<strong>Task split</strong>: group fields into 3 steps (personal → case → confirm).",
        "<strong>Microcopy</strong>: replace codes with \"Your date of birth must be DD/MM/YYYY.\"",
        "<strong>Prototype</strong>: wireframe step 1 only; test with 3 users.",
        "<strong>Measure</strong>: time on task, error count, SUS before/after if possible.",
        "<strong>Report</strong>: before/after screenshots + one user quote.",
      ],
    },
    {
      title: "Tutorial: Nielsen's 10 heuristics (with examples)",
      table: {
        headers: ["#", "Heuristic", "Violation example", "Fix"],
        rows: [
          ["1", "Visibility of system status", "No loading indicator", "Show spinner + text"],
          ["2", "Match real world", "Internal error codes", "Plain language"],
          ["3", "User control", "No undo delete", "Confirm + undo"],
          ["4", "Consistency", "Save in different places", "Standard placement"],
          ["5", "Error prevention", "Submit on incomplete form", "Disable until valid"],
          ["6", "Recognition not recall", "Hidden menu paths", "Visible navigation"],
          ["7", "Flexibility", "No shortcuts for experts", "Keyboard shortcuts"],
          ["8", "Minimalist design", "Cluttered dashboard", "Progressive disclosure"],
          ["9", "Help errors", "\"Invalid input\"", "Say what format is valid"],
          ["10", "Help documentation", "No FAQ", "Contextual help link"],
        ],
      },
    },
    {
      title: "Practice: HCI assignments",
      bullets: [
        "Run heuristic evaluation on your semester 2 UI; list 10 issues with severity.",
        "Write usability test script for 3 tasks (exact words you say to participant).",
        "Sketch paper prototype for mobile checkout; test with one person.",
        "Calculate SUS from 10 mock Likert responses (search SUS formula).",
      ],
    },
  );

  afterFromZero("dsnidak222",
    {
      title: "Concept encyclopedia: systems development terms",
      table: {
        headers: ["Term", "Meaning", "When you draw it"],
        rows: [
          ["Actor", "Person or system outside yours", "Use case diagram"],
          ["Use case", "Goal actor achieves", "Scope agreement"],
          ["Include / extend", "Reuse or optional flow", "Complex use cases"],
          ["Class", "Type with attributes + methods", "Before coding OOP"],
          ["Association", "Link between classes", "Member has Loans"],
          ["Multiplicity", "1, *, 0..1 on ends", "One member, many loans"],
          ["Sequence diagram", "Messages over time", "One scenario debug"],
          ["Lifeline", "Object exists during interaction", "Vertical dashed line"],
          ["State machine", "States and transitions", "Order status flow"],
          ["Design pattern", "Reusable design solution", "MVC, Observer"],
          ["GRASP", "Assignment heuristics", "Who owns renew()?"],
          ["SOLID", "OOP design principles", "SRP, Liskov, etc."],
        ],
      },
    },
    {
      title: "Tutorial: complete modelling exercise (online shop checkout)",
      subsections: [
        {
          title: "Use case: Checkout",
          bullets: [
            "Actor: Customer.",
            "Main: add items → view cart → pay → confirmation.",
            "Extend: payment fails → retry or cancel.",
          ],
        },
        {
          title: "Class diagram (core)",
          bullets: [
            "Product (id, name, price)",
            "Cart (lines: CartLine)",
            "CartLine (product, quantity)",
            "Order (id, total, status)",
            "PaymentService (charge(amount))",
          ],
        },
        {
          title: "Sequence: successful payment",
          paragraphs: [
            "Customer → CheckoutController → Cart → PaymentService → OrderRepository → confirmation view. Draw this before writing integration code; names become classes.",
          ],
        },
      ],
    },
    {
      title: "Design patterns you will actually use",
      subsections: [
        {
          title: "MVC",
          paragraphs: [
            "Separates UI, logic, data. Your semester 2 report should name which classes are M, V, C.",
          ],
        },
        {
          title: "Observer",
          paragraphs: [
            "When model changes, views update. Used in GUI and reactive web frameworks conceptually.",
          ],
        },
        {
          title: "Strategy",
          paragraphs: [
            "Swap algorithms at runtime (e.g. different shipping cost calculators). Prefer over giant if-else.",
          ],
        },
      ],
    },
    {
      title: "Practice: modelling drills",
      bullets: [
        "Draw use case diagram for library self-service (3 actors, 5 use cases).",
        "Draw sequence diagram for failed login (wrong password).",
        "Apply Information Expert: should discount calculation live in Order or Customer?",
        "Find one pattern in your project code; name it and justify.",
      ],
    },
  );
})();
