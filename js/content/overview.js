(function () {
  const S = (window.CHAPTER_SECTIONS = window.CHAPTER_SECTIONS || {});

  S.overview = [
    {
      title: "Problem-based learning at AAU",
      paragraphs: [
        "New to university IT studies? Read this page top to bottom once, then dive into semester 1. Each module page starts with plain language before the technical depth.",
        "The Cand.it. programme at Aalborg University is built on <strong>problem-based learning (PBL)</strong>. You work in groups on real problems, produce artefacts (code, prototypes, reports), and reflect on process as well as product. Semesters 1–3 combine courses with large semester projects; semester 4 is a 30 ECTS master's thesis.",
        "Examinations mix oral defence, written reports, and live demos. A working system often matters as much as the argument, especially in development-oriented modules.",
      ],
      bullets: [
        "<strong>Semester project (10–15 ECTS)</strong>: integrates several courses around one theme",
        "<strong>Courses (5 ECTS)</strong>: theory, exercises, smaller assignments",
        "<strong>External examination</strong>: used on several semester projects and some courses from semester 2 onward",
      ],
    },
    {
      title: "How the curriculum layers skills",
      table: {
        headers: ["Layer", "Semesters", "What you learn"],
        rows: [
          ["Foundations", "1", "Thinking computationally, writing code, building a first system, understanding organisations"],
          ["Design & structure", "2", "OOP, UML, HCI, interactive product in a semester project"],
          ["Scale & process", "3", "Databases, agile engineering, full-stack or theory track, elective"],
          ["Research", "4", "Independent thesis: problem, method, contribution, defence"],
        ],
      },
    },
    {
      title: "Reading this textbook",
      paragraphs: [
        "Each chapter follows the official Danish module title but explains theory in English. Use <strong>At a glance</strong> for exam revision, then read the sections for depth, principles, and code examples. Always cross-check learning objectives on <a href=\"https://moduler.aau.dk/\" target=\"_blank\" rel=\"noopener\">moduler.aau.dk</a> and the <a href=\"https://studieordninger.aau.dk/2026/59/6408\" target=\"_blank\" rel=\"noopener\">studieordning 2022</a>.",
        "After the four semesters, the <strong>Extra</strong> section holds optional depth that is not part of the official curriculum — starting with mathematics for CS, IT, and software engineering.",
      ],
      callout:
        "Tip: When preparing for oral exams, practice explaining <em>assumptions</em> in your models and systems: what you simplified, what you measured, and what you would do differently at scale.",
    },
  ];
})();
