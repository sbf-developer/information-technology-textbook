/**
 * Complete AAU official learning objectives where not yet in academic-ext.
 */
(function () {
  const S = window.CHAPTER_SECTIONS;
  if (!S) return;

  function replaceAau(id, section) {
    if (!S[id]) return;
    const idx = S[id].findIndex((s) => s.title.includes("AAU"));
    if (idx >= 0) S[id][idx] = section;
    else S[id].unshift(section);
  }

  replaceAau("dsnidak123", {
    title: "AAU learning objectives (DSNIDAK123, official)",
    paragraphs: [
      "5 ECTS, 7-step scale. Source: <a href=\"https://moduler.aau.dk/course/2025-2026/DSNIDAK123?lang=en-GB\">moduler.aau.dk</a>.",
    ],
    table: {
      headers: ["Category", "You must be able to"],
      rows: [
        ["Knowledge", "Types of IS and role in organizing; business value; implementation problems; current IS research"],
        ["Skills", "Evaluate impact of new IS given org conditions; select methods/techniques from IS research"],
        ["Competences", "Explain IS value in a given organization; justify and evaluate implementation process"],
      ],
    },
  });

  replaceAau("dsndadk221", {
    title: "AAU learning objectives (DSNDADK221, official)",
    paragraphs: [
      "15 ECTS, external oral exam. Source: <a href=\"https://moduler.aau.dk/course/2025-2026/DSNDADK221?lang=en-GB\">moduler.aau.dk</a>.",
    ],
    table: {
      headers: ["Category", "You must be able to"],
      rows: [
        ["Knowledge", "Analyse/model requirements in OO paradigm; design multi-layer architecture; realise and test interactive design"],
        ["Skills", "Use OO concepts for internal/external quality; systematic testing and UI evaluation; argue choices linking users, requirements, architecture"],
        ["Competences", "Deliver running interactive design solving user problem; reflect on methods used"],
      ],
    },
  });

  replaceAau("dsnidak224", {
    title: "AAU learning objectives (DSNIDAK224, official)",
    paragraphs: [
      "5 ECTS OOP course. Align project work with MOODLE reading list. Module page: <a href=\"https://moduler.aau.dk/course/2025-2026/DSNIDAK224?lang=en-GB\">moduler.aau.dk</a>.",
    ],
    bullets: [
      "Model domain concepts with classes; encapsulation, inheritance, polymorphism",
      "Event-driven GUI; separation of UI and domain logic",
      "Test business rules without depending on GUI framework",
    ],
  });

  replaceAau("valgfag", {
    title: "AAU electives (confirm in studieordning)",
    paragraphs: [
      "Typical 5 ECTS choices include <strong>Entreprenørskab</strong> (DSNDADFK311) and <strong>Brugercentreret interaktion med kunstig intelligens</strong> (DSNDADFK333). Verify current titles, ECTS, and exam form in the <a href=\"https://studieordninger.aau.dk/2026/59/6408\">studieordning</a> before enrolling.",
    ],
    table: {
      headers: ["Elective track", "Academic focus", "Useful if you want to"],
      rows: [
        ["Entrepreneurship", "Business models, markets, validation", "Found startups or product roles"],
        ["AI + HCI", "Trust, explainability, human-in-the-loop", "Build or study AI-facing interfaces"],
      ],
    },
  });
})();
