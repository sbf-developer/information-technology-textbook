(function () {
  const S = (window.CHAPTER_SECTIONS = window.CHAPTER_SECTIONS || {});

  S.dsnidafk412 = [
    {
      title: "Master's thesis (Kandidatspeciale)",
      paragraphs: [
        "The thesis is long but simple in structure: one question you care about, answered with literature plus your own work, written up and defended.",
        "<strong>Kandidatspeciale</strong> (DSNIDAFK412, 30 ECTS, ~900 hours) is an independent research and development project. You define a problem within HCI and application development, situate it in literature, choose method, produce empirical and/or implementation work, and defend a <strong>contribution</strong>: new knowledge, artefact, or evaluated design insight.",
        "Supervision is limited; you drive timeline and scope. Semester-3 project (development or theory track) is the natural runway; reuse domain knowledge, not copy-paste reports.",
      ],
    },
    {
      title: "Typical thesis structure",
      table: {
        headers: ["Chapter", "Content"],
        rows: [
          ["Introduction", "Problem, motivation, research question(s), scope, contribution preview"],
          ["Theory / related work", "Concepts, synthesis of literature, gap"],
          ["Method", "Design, participants/data, instruments, analysis, ethics"],
          ["Implementation / artefact", "If applicable: architecture, design decisions (not manual dump)"],
          ["Results / findings", "Evidence aligned to RQ: figures, tables, quotes"],
          ["Discussion", "Answer RQ, implications, limitations, future work"],
          ["Conclusion", "Short recap of contribution: no new claims"],
        ],
      },
    },
    {
      title: "Problem formulation",
      bullets: [
        "One main research question; optional sub-questions that map to results sections",
        "Gap must be argued from literature: \"nobody did X\" is weak without search strategy",
        "Scope fence: population, system type, context (lab vs. field)",
        "Contribution type explicit: empirical, artefact, framework, replication",
      ],
    },
    {
      title: "Method choices (common in this programme)",
      subsections: [
        {
          title: "Qualitative",
          paragraphs: [
            "Interviews, think-aloud, contextual inquiry → thematic or grounded coding. Report coding process, saturation reasoning, and member checking if used.",
          ],
        },
        {
          title: "Quantitative",
          paragraphs: [
            "Experiments, A/B, surveys, log analysis → descriptive stats + appropriate tests; report effect sizes and limitations of sample.",
          ],
        },
        {
          title: "Design science / artefact-centric",
          paragraphs: [
            "Build and evaluate an interactive system as part of knowledge contribution: follow guidelines for reporting design research (problem, artefact, evaluation, contribution).",
          ],
        },
      ],
    },
    {
      title: "Ethics and validity",
      paragraphs: [
        "Personal data (GDPR), consent forms, secure storage, and anonymisation in quotes are mandatory when studying people. Discuss validity threats openly; examiners respect honest limitations more than overclaiming.",
      ],
      callout:
        "Start writing early. Chapter 2 (theory) and method often stabilize late, but introduction and problem should be draftable in month one to keep scope honest.",
    },
    {
      title: "Timeline (illustrative)",
      table: {
        headers: ["Phase", "Weeks (approx.)", "Milestone"],
        rows: [
          ["Scoping", "1–4", "RQ approved, literature search plan"],
          ["Theory & design", "5–10", "Related work draft, method protocol"],
          ["Empirics / build", "11–20", "Data collected or core system working"],
          ["Analysis & write", "21–28", "Full draft to supervisor"],
          ["Revision & defence prep", "29–30", "Final PDF, demo, presentation"],
        ],
      },
    },
    {
      title: "Defence preparation",
      bullets: [
        "10-minute pitch: problem → method → key finding → contribution",
        "Anticipate \"why not X?\" on method and \"so what?\" on contribution",
        "If demo: same discipline as semester projects; rehearse failure paths",
        "Know related work cold; examiners often probe one cited paper in depth",
      ],
    },
  ];
})();
