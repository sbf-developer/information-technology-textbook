(function () {
  window.PLAIN_INTROS = {
    overview: {
      disciplines: ["Computer Science", "Software Engineering", "IT", "App Development"],
      what:
        "This is a two-year master's degree at Aalborg University about <strong>building and understanding digital systems</strong>: apps, websites, databases, and the way people use them. You work in groups on real projects, not only sit in lectures.",
      why:
        "Companies and public organisations need people who can both <strong>code</strong> and <strong>think about users and organisations</strong>. This programme trains that combination.",
      example:
        "Imagine your group builds a simple booking app for a local café. You talk to the owner (requirements), sketch screens (design), write code (programming), store bookings in a database, and test whether staff can actually use it. That is the kind of work the degree prepares you for.",
      remember:
        "You do not need to know everything on day one. Semester 1 starts from foundations and builds up.",
    },

    dsnidak121: {
      disciplines: ["Computer Science", "Mathematics", "Modelling"],
      what:
        "<strong>Computational thinking</strong> means learning to break big, messy problems into steps a computer (or a person following rules) can follow. It is about <em>how to think</em>, not about memorising a programming language.",
      why:
        "Before you write code, you need a clear model of the problem. This module trains that habit. Many groups build a <strong>simulation</strong>: lots of small \"agents\" follow simple rules, and surprising patterns appear (like how rumours spread or how crowds move).",
      example:
        "Think of an ant colony. Each ant follows dumb rules (\"if you smell food, walk toward it\"). No single ant has a map of the whole colony, but together they find food efficiently. An agent-based simulation works the same way: simple rules → complex group behaviour.",
      remember:
        "CT = decomposition, patterns, abstraction, and step-by-step logic. Programming comes in other modules; here you focus on the problem structure.",
    },

    dsnidak122: {
      disciplines: ["Software Engineering", "App Development"],
      what:
        "<strong>Udvikling af software</strong> (software development) is your first big <strong>project where you build something that actually runs</strong>: a program, a tool, or part of a system. You also write a report explaining what you built and why.",
      why:
        "Employers care that you can deliver working software, not only explain theory. This module teaches the full loop: idea → requirements → build → test → demo at exam.",
      example:
        "Your group might build a small web page that visualises your computational-thinking simulation. A user picks parameters, clicks \"Run\", and sees a graph. If that button crashes on exam day, the examiner cannot trust your process, even if the report is long.",
      remember:
        "MVP = minimum viable product. Build the smallest version that proves your core idea works, then improve if time allows.",
    },

    dsnidak123: {
      disciplines: ["Information Systems", "IT", "Organisation"],
      what:
        "<strong>Information og organisering</strong> is about how organisations use IT systems: payroll, customer records, ERP, CRM, and the like. It asks: <strong>why do some systems succeed and others fail</strong> even when the technology is fine?",
      why:
        "Software never exists in a vacuum. If nurses ignore a new patient system because it slows them down, the project failed for <em>human and organisational</em> reasons, not because Java was the wrong language.",
      example:
        "A shop buys an expensive cash-register system. Technically it works. But staff keep using a paper notebook because the new system needs five clicks for a refund. That is a socio-technical problem: people + process + technology must fit together.",
      remember:
        "TPS, MIS, ERP, CRM are labels for different <em>types</em> of systems. Learn what each is for, not only the acronyms.",
    },

    dsnidak124: {
      disciplines: ["Computer Science", "App Development", "Web"],
      what:
        "<strong>Grundlæggende programmering</strong> is where you learn to <strong>write code</strong>: variables, loops, functions, and a simple website with HTML, CSS, and JavaScript. Think of it as learning the grammar and vocabulary of talking to a computer.",
      why:
        "Almost every other module assumes you can read code, fix errors, and build small programs. This is the skill that makes the rest of the degree concrete.",
      example:
        "A variable is like a labelled box: <code>age = 25</code> stores the number 25 in a box named \"age\". A loop repeats actions: \"for each student in the class, add 1 to the counter\". A function is a reusable recipe: <code>calculateTax(price)</code> so you do not copy the same math everywhere.",
      remember:
        "Everyone gets stuck debugging. The skill is: reproduce the bug, find where it happens, fix one thing at a time.",
    },

    dsndadk221: {
      disciplines: ["App Development", "HCI", "Software Engineering"],
      what:
        "This is the <strong>big semester 2 project</strong> (15 ECTS): design and build an <strong>interactive digital product</strong> with real users in mind. \"Interactive\" means people click, type, or tap and the system responds.",
      why:
        "It forces you to combine everything from semester 1 and 2: programming, object-oriented code, interface design, and documentation. It mirrors how product teams work in industry.",
      example:
        "A group builds a mobile-friendly checklist app for lab students. They interview students (research), draw wireframes (design), implement screens in code (development), and watch five people try it (usability test). The report tells that story with evidence.",
      remember:
        "External examiners will ask <em>why</em> you designed it that way. \"It looked nice\" is weak. \"Users failed task 2 in testing, so we moved the button\" is strong.",
    },

    dsnidak224: {
      disciplines: ["Computer Science", "Software Engineering"],
      what:
        "<strong>Object-oriented programming (OOP)</strong> is a way to organise code around <strong>objects</strong> that mirror real things: a <code>BankAccount</code>, a <code>User</code>, a <code>ShoppingCart</code>. Each object holds data and actions together.",
      why:
        "Small scripts are fine with one file. Larger apps become spaghetti without structure. OOP helps teams work on different parts without breaking everything.",
      example:
        "A <code>Dog</code> object has <code>name</code> and <code>bark()</code>. A <code>Cat</code> object has <code>name</code> and <code>meow()</code>. Both can inherit from <code>Animal</code> so your code can call <code>speak()</code> without caring which species it is. That is polymorphism in plain language.",
      remember:
        "Encapsulation = hide inner details, show a clean public interface. Like a car: you use the steering wheel, not wire directly to the engine.",
    },

    dsnidak223: {
      disciplines: ["HCI", "Design", "Research Methods"],
      what:
        "<strong>HCI</strong> (human-computer interaction) is the study of <strong>how people use digital interfaces</strong> and how to design so tasks are easy, clear, and not frustrating. It is not the same as graphic design, though looks matter.",
      why:
        "Bad UX loses users and money. A government form with confusing labels stops people from applying for benefits. Good HCI is tested with real users, not guessed from your own taste.",
      example:
        "You move \"Confirm purchase\" away from \"Cancel\" so people do not mis-click. You show a spinner while data loads so users know the app did not freeze. You label a field \"Email\" instead of internal jargon like <code>usr_eml_addr</code>.",
      remember:
        "User-centred design (UCD) = involve users early and often. Prototype cheaply on paper before writing hundreds of lines of code.",
    },

    dsnidak222: {
      disciplines: ["Software Engineering", "Systems Design"],
      what:
        "<strong>Systemudvikling</strong> (systems development) teaches you to <strong>draw and plan software before coding</strong>: who uses the system, what they do, and how classes and objects fit together. UML diagrams are the shared sketches.",
      why:
        "Jumping straight into code works for tiny scripts. A semester project with several developers needs a map. Diagrams align the team and help examiners see your thinking.",
      example:
        "A use case says: \"Cashier scans item, system adds price to total.\" A class diagram shows <code>Product</code>, <code>Order</code>, and <code>LineItem</code> linked together. When you code, those boxes become actual files or classes.",
      remember:
        "Design patterns (like MVC) are common solutions to common problems. Learn the idea first; memorising all 23 GoF patterns comes later.",
    },

    dsndadk311: {
      disciplines: ["App Development", "Software Architecture", "Databases"],
      what:
        "Semester 3 <strong>development track</strong>: build a <strong>larger, full-stack interactive system</strong>. That usually means a frontend (what users see), a backend (logic and security), and a database (stored data), all connected.",
      why:
        "Semester 2 taught you a product-sized prototype. Semester 3 adds scale: real persistence, team workflow, deployment, and harder integration problems.",
      example:
        "A group builds a course planner: React frontend, Node API, PostgreSQL database. Users log in, save plans, and see them after refresh. That \"still there after refresh\" part is why you need a database, not only variables in memory.",
      remember:
        "Choose this track if you want to graduate as someone who ships working systems, not only writes about them.",
    },

    dsndadk321: {
      disciplines: ["Research Methods", "HCI", "Academic Writing"],
      what:
        "Semester 3 <strong>theory track</strong>: investigate interactive systems through <strong>research</strong> (literature, interviews, experiments) rather than mainly building a product. You still might build a small prototype to study, but the goal is <em>understanding</em>, not launch.",
      why:
        "Some questions need studies, not features: Why do people distrust AI recommendations? How do nurses actually use tablets on ward rounds? This track prepares you for thesis-style work.",
      example:
        "You review papers on chatbot trust, interview 8 students, and analyse themes in their answers. Your contribution is structured insight and method, not necessarily a polished app in the app store.",
      remember:
        "Validity = are your conclusions believable? Always state who you studied and what limits that puts on your claims.",
    },

    dsnidak312: {
      disciplines: ["Software Engineering", "Team Process"],
      what:
        "<strong>Agil Software Engineering</strong> is about <strong>how teams build software together</strong>: planning in sprints, writing user stories, testing, retrospectives, and choosing between agile and plan-driven methods.",
      why:
        "Solo homework hides process problems. Real projects fail when communication, scope, and testing are messy. This course gives vocabulary and practice for professional teamwork.",
      example:
        "Instead of \"build the whole app in 3 months\", Scrum says: every two weeks deliver a small working slice (login, then profiles, then search). The team meets daily for 15 minutes to unblock each other. After each sprint, they ask what to improve.",
      remember:
        "Agile does not mean \"no planning\". It means planning often and adapting when you learn something new.",
    },

    dsnidak314: {
      disciplines: ["Computer Science", "Mathematics", "Databases"],
      what:
        "<strong>Databaseudvikling</strong> teaches <strong>how to store data properly</strong> so it survives restarts, stays consistent, and can be queried with SQL. A database is the long-term memory of an application.",
      why:
        "If your app stores users in a JavaScript array, everything vanishes when the server restarts. Banks, shops, and universities need data that is safe, structured, and searchable.",
      example:
        "Tables are like spreadsheets: a <code>users</code> table with columns <code>id</code>, <code>name</code>, <code>email</code>. A <code>orders</code> table links to users via a foreign key. SQL <code>SELECT</code> asks questions: \"show all orders for user 42 this month\".",
      remember:
        "Normalisation = avoid storing the same fact twice in conflicting places. Simpler apps can start simple; learn when duplication causes bugs.",
    },

    valgfag: {
      disciplines: ["Entrepreneurship", "AI", "HCI"],
      what:
        "A <strong>5 ECTS elective</strong> in semester 3. Typical choices: <strong>Entreprenørskab</strong> (entrepreneurship) or <strong>AI + HCI</strong> (designing systems that use artificial intelligence with users in mind). Check the current studieordning for exact options.",
      why:
        "The core track is technical. This slot lets you tilt toward <em>business/startup skills</em> or <em>human-centred AI</em>, depending on your goals.",
      example:
        "Entrepreneurship: you fill in a Business Model Canvas for a student app idea (who pays, what problem, what channel). AI + HCI: you design an interface that shows <em>why</em> the AI suggested a result so users can trust or reject it.",
      remember:
        "Neither elective replaces programming fundamentals. They add a lens: commercial or AI-UX.",
    },

    dsnidafk412: {
      disciplines: ["Research", "Software Engineering", "Academic Writing"],
      what:
        "The <strong>Kandidatspeciale</strong> is your <strong>master's thesis</strong>: roughly one semester of independent work (30 ECTS) where you pick a problem, study literature, use a method, and produce a written thesis (often plus an artefact or study).",
      why:
        "It proves you can work like a junior researcher or senior developer: define a question, execute without weekly assignments, and defend your choices orally.",
      example:
        "You ask: \"Does a simplified dashboard help small-shop owners understand sales data?\" You review analytics UX papers, interview owners, build a prototype, test it with five people, analyse results, and argue what you found and what you did not.",
      remember:
        "Start narrow. A clear small question finished well beats a vague huge topic that never converges.",
    },
  };
})();
