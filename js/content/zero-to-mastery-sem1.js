/**
 * From zero to mastery: Semester 1 + overview.
 * Prepended to each chapter so the learning path starts at true beginner level.
 */
(function () {
  const S = window.CHAPTER_SECTIONS;
  if (!S) return;

  function prepend(id, ...sections) {
    if (!S[id]) S[id] = [];
    S[id] = [...sections, ...S[id]];
  }

  prepend("overview",
    {
      title: "From zero (1/4): What is this degree?",
      paragraphs: [
        "You might be starting with almost no IT background. That is normal. This programme is a <strong>two-year master's</strong> at Aalborg University about <strong>building digital systems people actually use</strong>: apps, websites, databases, and the processes around them. It is not a pure maths degree and not a graphic design degree. It sits in the middle: you learn to <em>think</em> like a computer scientist, <em>build</em> like a software engineer, and <em>design</em> for real users and organisations.",
        "The official name is <strong>Digitalisering og applikationsudvikling</strong> (digitalisation and application development). \"Digitalisation\" means how organisations adopt IT; \"application development\" means you write and ship software. Both matter for your career: a beautiful app nobody uses is a failure; a useful app with messy code is hard to maintain. The degree trains both sides.",
        "Teaching uses <strong>problem-based learning (PBL)</strong>: you work in groups on projects, not only listen to lectures. Each semester has a big project (10–15 ECTS) plus smaller courses (5 ECTS). You are graded on working software, reports, oral exams, and sometimes external examiners who do not know your group personally.",
      ],
    },
    {
      title: "From zero (2/4): The six disciplines you will learn",
      paragraphs: [
        "Every module in this book maps to one or more disciplines. You do not study them in isolation; they stack. Here is what each discipline means if you have never met it before.",
      ],
      table: {
        headers: ["Discipline", "In one sentence", "Where it appears"],
        rows: [
          ["Computer science (CS)", "How computation, data, and algorithms work", "Programming, OOP, databases, complexity"],
          ["Software engineering (SE)", "How teams plan, build, test, and ship reliable software", "All projects, agile course, architecture"],
          ["Information technology (IT)", "How organisations choose, deploy, and live with systems", "Information og organisering, governance"],
          ["Mathematics", "Logic, structures, and reasoning about correctness and growth", "Logic in code, Big-O, DB relations, stats in thesis"],
          ["App / web development", "Building interfaces and full systems users touch", "Programming → OOP → semester projects → full stack"],
          ["HCI & design", "How people perceive and use interfaces", "HCI course, all interactive projects"],
        ],
      },
    },
    {
      title: "From zero (3/4): Semester-by-semester map",
      steps: [
        "<strong>Semester 1</strong>: Learn to think in steps (computational thinking), build your first real program (software project), understand why companies buy IT (information systems), and learn to code from scratch (programming).",
        "<strong>Semester 2</strong>: Learn object-oriented code, draw system plans (UML), design for users (HCI), then integrate everything in a 15 ECTS interactive product project with external exam.",
        "<strong>Semester 3</strong>: Choose development track (full-stack app) or theory track (research on interactive systems); add databases, agile teamwork, and one elective (entrepreneurship or AI+HCI).",
        "<strong>Semester 4</strong>: Master's thesis: you pick the question, method, and contribution; defend it orally.",
      ],
      callout:
        "Rule of thumb: if you only read one chapter this week, read the chapter for the module your group is working on right now. Read overview once at the start of semester 1.",
    },
    {
      title: "From zero (4/4): How to use this book to reach full understanding",
      subsections: [
        {
          title: "Reading order inside each chapter",
          steps: [
            "Start here (plain language): get the intuition in 5 minutes.",
            "From zero (1–4): build conceptual foundation as if the subject were new.",
            "Master the subject + Principles: see how experts frame the field.",
            "Theory, methods, code: academic and practical depth.",
            "Glossary + grasp check: test yourself without notes.",
            "Further reading: one textbook chapter or paper, not ten.",
          ],
        },
        {
          title: "Signs you actually understand (not just memorised)",
          bullets: [
            "You can explain the topic to a friend without slides in under 3 minutes.",
            "You can give an example <em>and</em> a counter-example (when the idea fails).",
            "You can connect the module to the semester project you are building.",
            "You can answer \"why not do it the other way?\" for a design choice.",
          ],
        },
      ],
    },
  );

  prepend("dsnidak121",
    {
      title: "From zero (1/4): What is computational thinking?",
      paragraphs: [
        "Imagine you want to understand how rumours spread in a school, how traffic jams form, or why neighbourhoods segregate without anyone planning it. You cannot run experiments on the whole city. Computational thinking (CT) is the discipline of building a <strong>simplified computer model</strong> of the real situation, running it, and learning from the results.",
        "You are <strong>not</strong> learning to be a professional programmer in this module (that comes in Grundlæggende programmering). You are learning to <strong>structure problems</strong>: What are the parts? What changes each minute? What do we measure? What did we leave out on purpose?",
        "At AAU you prove this in a <strong>group project</strong>, usually an <strong>agent-based simulation</strong>: many simple \"agents\" (people, cars, cells) follow dumb local rules; surprising group patterns appear. You write a report and defend your choices at an <strong>oral exam</strong> (pass/fail).",
      ],
    },
    {
      title: "From zero (2/4): The core toolkit (must understand these)",
      subsections: [
        {
          title: "1. Decomposition",
          paragraphs: [
            "Break the messy world into named parts. Example rumour model: agents = students; state = has_heard_rumour (yes/no); rule = if neighbour heard, spread with probability p; environment = classroom seating graph.",
          ],
        },
        {
          title: "2. Representation",
          paragraphs: [
            "Choose how to store the world in data. Grid (x,y cells), list of agents, or network (nodes and edges). Wrong representation makes the problem harder. A city map might be a grid; friendships are a network, not a grid.",
          ],
        },
        {
          title: "3. Algorithm (update rules)",
          paragraphs: [
            "Precise steps each time step: sense neighbours → apply rule → update state. Same inputs and rules should give the same result unless you intentionally use randomness (then document the seed).",
          ],
        },
        {
          title: "4. Parameters and experiments",
          paragraphs: [
            "Numbers you tune: spread probability, speed, density. Science means changing <strong>one</strong> parameter at a time and plotting outcomes, not showing one pretty animation.",
          ],
        },
        {
          title: "5. Emergence",
          paragraphs: [
            "Global pattern not visible in one agent's rule. Flocking, segregation, traffic waves are classic examples. Your report must link <strong>micro-rules</strong> to <strong>macro-metrics</strong> you plot.",
          ],
        },
        {
          title: "6. Abstraction and scope",
          paragraphs: [
            "Every model is wrong; some are useful (Box). You ignore weather, personality, phone apps, etc. State explicitly what is in scope and out of scope. Examiners reward honesty, not pretending the model is reality.",
          ],
        },
      ],
    },
    {
      title: "From zero (3/4): Build understanding week by week",
      table: {
        headers: ["Week", "Focus", "You should be able to say…"],
        rows: [
          ["1–2", "Topic + literature", "Why this question matters; what others modeled before"],
          ["3", "Conceptual design (ODD Overview)", "Who/what agents are; what environment; what outputs"],
          ["4", "First code or NetLogo prototype", "One agent moves or one rule works"],
          ["5–6", "Full model + experiments", "How output changes when parameter X changes"],
          ["7", "Report + oral prep", "Assumptions, limits, and one thing you would add next"],
        ],
      },
    },
    {
      title: "From zero (4/4): Common confusions and exam traps",
      bullets: [
        "<strong>\"CT = coding\"</strong>: False. Coding implements the model; CT is the problem structure. You can defend CT with diagrams and pseudocode.",
        "<strong>One screenshot</strong>: Not evidence. Show plots over many runs or parameter values.",
        "<strong>Claiming causality</strong>: \"Segregation proves racism\" overclaims. Say \"under these rules, clusters form because…\"",
        "<strong>Randomness without seeds</strong>: You cannot reproduce bugs or defend results. Always log seeds.",
        "<strong>Oral exam</strong>: Expect \"what if you doubled agents?\" and \"what did you simplify?\" Practice answering aloud.",
      ],
    },
  );

  prepend("dsnidak122",
    {
      title: "From zero (1/4): What is software development?",
      paragraphs: [
        "Until now, \"software\" might mean apps on your phone. In this module, <strong>software development</strong> means your group delivers a <strong>program that runs</strong> plus a <strong>report that proves you knew what you were doing</strong>. This is your first serious taste of software engineering.",
        "The module is 10 ECTS, graded on the <strong>7-step scale</strong>, and runs parallel to Computational Thinking. Often the same group builds a simulation (CT) and a tool or visualisation around it (this module). The exam includes a <strong>demo</strong>: if the demo crashes, examiners doubt your process even if the report is long.",
        "Core idea: software is not magic. It is requirements → design → implementation → test → delivery, with version control and honest reflection on what the team did well or poorly.",
      ],
    },
    {
      title: "From zero (2/4): Core concepts you must own",
      subsections: [
        {
          title: "Requirements",
          paragraphs: [
            "A requirement is a testable statement of need. Functional: \"User can save simulation state.\" Non-functional: \"Save completes in under 2 seconds for 10k agents.\" Vague wishes (\"make it user-friendly\") fail until you make them measurable.",
          ],
        },
        {
          title: "MVP (minimum viable product)",
          paragraphs: [
            "The smallest version that proves your core idea. Week 4 you should have one vertical slice working end-to-end, not half of every feature. Scope creep is the main killer of semester 1 projects.",
          ],
        },
        {
          title: "Traceability",
          paragraphs: [
            "Each requirement links to code and a test. When an examiner asks \"where is R3?\", you open the matrix, the file, and the test name.",
          ],
        },
        {
          title: "Quality",
          paragraphs: [
            "Internal: readable code, Git history, tests. External: user can complete tasks, reasonable performance. ISO 25010 lists quality characteristics; you do not need every word, but \"reliability\" and \"usability\" matter at demo time.",
          ],
        },
        {
          title: "Process reflection (PBL)",
          paragraphs: [
            "AAU expects you to describe and evaluate how the group worked: meetings, conflicts, division of labour, what you would change. This is not filler; it is a learning objective.",
          ],
        },
      ],
    },
    {
      title: "From zero (3/4): Project timeline that works",
      steps: [
        "<strong>Week 1</strong>: Problem statement, stakeholders, success criteria, Git repo, README with how to run.",
        "<strong>Week 2</strong>: Requirements list (functional + non-functional), MVP defined, architecture sketch.",
        "<strong>Week 3–4</strong>: Core feature working; first tests; demo to another group.",
        "<strong>Week 5–6</strong>: Secondary features if time; bug fixes; performance smoke test.",
        "<strong>Week 7–8</strong>: Report draft; traceability matrix; rehearsal demo with timer.",
        "<strong>Exam</strong>: Live demo + questions on requirements, tests, and one thing you would rebuild.",
      ],
    },
    {
      title: "From zero (4/4): You understand this module when…",
      bullets: [
        "You can show requirement R1 in the report, in code, and in a passing test.",
        "You can explain why you cut a feature (time) without apologising incoherently.",
        "You can draw a box diagram: user → UI → logic → data storage.",
        "You can describe one bug you fixed and how you found it.",
        "You can explain the difference between \"works on my laptop\" and \"reproducible build\" (README, dependencies, Git tag for exam).",
      ],
    },
  );

  prepend("dsnidak123",
    {
      title: "From zero (1/4): What are information systems?",
      paragraphs: [
        "Every time you order food online, book a doctor, or clock in at work through a portal, you use an <strong>information system (IS)</strong>: hardware, software, data, people, and procedures working together. This course asks why organisations spend millions on IS and why projects still fail.",
        "You do not need business experience. You need curiosity about <strong>people and processes</strong>. A perfect database is useless if nurses bypass it with sticky notes because the UI takes twelve clicks for a common task.",
        "This is a 5 ECTS <strong>course</strong> (not the big project), 7-step exam. You classify systems (TPS, MIS, ERP, CRM), analyse implementation, and argue socio-technical fit using academic frameworks, not marketing language.",
      ],
    },
    {
      title: "From zero (2/4): Core concepts (the whole subject in six ideas)",
      subsections: [
        {
          title: "1. Systems by level",
          paragraphs: [
            "Operations need transaction systems (TPS) to record events. Managers need summaries (MIS). Analysts need decision tools (DSS). Large firms integrate everything in ERP; customer-facing teams use CRM. Know <em>who</em> uses <em>what</em> and <em>why</em>.",
          ],
        },
        {
          title: "2. Socio-technical systems",
          paragraphs: [
            "Technology + people + rules. Change one without the others → workarounds, shadow IT, failure. This is the lens for every case study answer.",
          ],
        },
        {
          title: "3. Value and strategy",
          paragraphs: [
            "IS should support organisational goals: efficiency, quality, compliance, customer service. Porter's value chain helps locate where IT helps vs. where it is table stakes.",
          ],
        },
        {
          title: "4. Adoption (TAM)",
          paragraphs: [
            "Users adopt when perceived usefulness and ease of use are high. A system nobody logs into failed regardless of features.",
          ],
        },
        {
          title: "5. Implementation as a process",
          paragraphs: [
            "Selection, configuration, data migration, training, go-live, support. Failure often happens in migration and training, not in software installation.",
          ],
        },
        {
          title: "6. Governance and data",
          paragraphs: [
            "Who decides priorities? Who owns data definitions? GDPR makes personal data a design constraint, not only legal paperwork.",
          ],
        },
      ],
    },
    {
      title: "From zero (3/4): How to analyse any case study",
      steps: [
        "Identify organisation type and problem (public vs private, size, regulation).",
        "Name stakeholders (workers, managers, customers, IT).",
        "Classify proposed system (TPS/ERP/CRM/SaaS).",
        "Ask technical fit AND organisational fit.",
        "List implementation risks (training, migration, resistance).",
        "Recommend with trade-offs, not \"buy the most expensive\".",
      ],
    },
    {
      title: "From zero (4/4): Exam-style mastery checklist",
      bullets: [
        "Define TPS, MIS, DSS, ERP, CRM with an example each.",
        "Explain socio-technical systems in one paragraph with a hospital or shop example.",
        "Give two reasons IS implementations fail that are not \"bad code\".",
        "Use TAM to explain low adoption of a well-built app.",
        "Argue when cloud SaaS CRM beats custom ERP for a small NGO.",
      ],
    },
  );

  prepend("dsnidak124",
    {
      title: "From zero (1/4): What is programming?",
      paragraphs: [
        "A program is a precise recipe the computer follows. It cannot guess what you meant. If you forget a step or use the wrong type of value, you get an error or wrong output. Programming is learning to be exact while building something useful.",
        "This course assumes <strong>zero prior coding</strong>. You learn variables, conditions, loops, functions, basic data structures, and a simple website (HTML, CSS, JavaScript). The course is often taught in English at AAU. Everything in semesters 2–4 assumes you can read code, fix errors, and write small programs confidently.",
        "Programming connects to <strong>computer science</strong> (how computation works) and <strong>software engineering</strong> (how to keep code readable as it grows). You also touch security and testing early so bad habits do not stick.",
      ],
    },
    {
      title: "From zero (2/4): Core concepts (learn these until automatic)",
      table: {
        headers: ["Concept", "What it means", "Why examiners care"],
        rows: [
          ["Variable", "Named storage for a value", "State bugs are the #1 beginner issue"],
          ["Type", "Kind of value (number, text, boolean)", "Prevents nonsense operations"],
          ["Condition", "if/else chooses path", "Business rules live here"],
          ["Loop", "Repeat until condition", "Off-by-one errors in exams"],
          ["Function", "Reusable named logic", "Structure for OOP next semester"],
          ["Collection", "List/array of many values", "Real data is rarely one value"],
          ["Event", "User click → code runs", "Foundation of all apps"],
          ["Bug / debug", "Wrong behaviour; systematic find/fix", "Process matters in projects"],
        ],
      },
    },
    {
      title: "From zero (3/4): Skill ladder (do in order)",
      steps: [
        "<strong>Step 1</strong>: Run \"hello world\" in the course language; change the message; break it on purpose and read the error.",
        "<strong>Step 2</strong>: Write a program with input, calculation, output (e.g. grade calculator with if/else).",
        "<strong>Step 3</strong>: Use a loop over a collection (sum, max, count).",
        "<strong>Step 4</strong>: Split into functions; each function one job.",
        "<strong>Step 5</strong>: Build a tiny web page: button changes text (DOM + event).",
        "<strong>Step 6</strong>: Add one unit test or assertion for a core function.",
        "<strong>Step 7</strong>: Fix a provided buggy program using reproduce → isolate → fix.",
      ],
    },
    {
      title: "From zero (4/4): Mental model of the computer",
      paragraphs: [
        "The CPU executes instructions line by line (within one thread). Memory holds values. Functions add a call stack: when A calls B, B finishes before A continues. Objects (next semester) live on the heap; variables hold references. Drawing memory on paper for a 10-line program is valid exam prep.",
      ],
      subsections: [
        {
          title: "Common beginner mistakes",
          bullets: [
            "= vs == (assignment vs comparison)",
            "Loop runs one time too many or too few",
            "Copy-paste code without understanding → fails on edge case",
            "No test for empty input",
            "Mixing strings and numbers in concatenation",
          ],
        },
        {
          title: "You understand programming when…",
          bullets: [
            "You can write a function from a plain-English spec.",
            "You can predict output of a 15-line program on paper.",
            "You can explain an error message in your own words.",
            "You can build a one-page interactive HTML toy without copying blindly.",
          ],
        },
      ],
    },
  );
})();
