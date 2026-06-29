/**
 * Build speakable passage queues from curriculum data.
 */
(function () {
  function stripHtml(html) {
    if (!html) return "";
    const el = document.createElement("div");
    el.innerHTML = html;
    return (el.textContent || "").replace(/\s+/g, " ").trim();
  }

  function pushPassage(list, meta, text) {
    const clean = stripHtml(text);
    if (!clean || clean.length < 2) return;
    list.push({ ...meta, text: clean });
  }

  function fromStrings(list, meta, items) {
    (items || []).forEach((t) => pushPassage(list, meta, t));
  }

  function fromSection(list, chapter, section, sectionIndex) {
    const meta = {
      chapterId: chapter.id,
      chapterTitle: chapter.title,
      sectionId: `sec-${chapter.id}-${sectionIndex}`,
      sectionTitle: section.title || "",
    };
    pushPassage(list, meta, section.title);
    fromStrings(list, meta, section.paragraphs);
    fromStrings(list, meta, section.bullets);
    fromStrings(list, meta, section.steps);
    if (section.callout) pushPassage(list, meta, section.callout);
    if (section.code?.caption) pushPassage(list, meta, `Code example: ${section.code.caption}`);
    if (section.table) {
      const rows = section.table.rows
        .map((row) => row.join(", "))
        .join(". ");
      pushPassage(list, meta, `${section.table.headers.join(", ")}. ${rows}`);
    }
    (section.subsections || []).forEach((sub) => {
      pushPassage(list, meta, sub.title);
      fromStrings(list, meta, sub.paragraphs);
      fromStrings(list, meta, sub.bullets);
      fromStrings(list, meta, sub.steps);
      if (sub.code?.caption) pushPassage(list, meta, `Code example: ${sub.code.caption}`);
    });
  }

  function extractChapter(chapter, ui) {
    const passages = [];
    const chMeta = { chapterId: chapter.id, chapterTitle: chapter.title, sectionId: "", sectionTitle: "" };

    pushPassage(passages, chMeta, chapter.title);
    if (chapter.summary) pushPassage(passages, chMeta, chapter.summary);

    const intro = chapter.plainIntro;
    if (intro) {
      const introMeta = { ...chMeta, sectionTitle: ui.plainLanguage };
      pushPassage(passages, introMeta, ui.plainWhat);
      pushPassage(passages, introMeta, intro.what);
      pushPassage(passages, introMeta, ui.plainWhy);
      pushPassage(passages, introMeta, intro.why);
      pushPassage(passages, introMeta, ui.plainExample);
      pushPassage(passages, introMeta, intro.example);
      if (intro.remember) pushPassage(passages, introMeta, `${ui.plainRemember}. ${intro.remember}`);
    }

    if (chapter.concepts?.length) {
      fromStrings(passages, { ...chMeta, sectionTitle: ui.coreConcepts }, chapter.concepts);
    }

    (chapter.sections || []).forEach((sec, i) => fromSection(passages, chapter, sec, i));

    if (chapter.connections) {
      pushPassage(passages, { ...chMeta, sectionTitle: ui.curriculumLinks }, chapter.connections);
    }

    return passages;
  }

  function buildBook(chapters, ui) {
    const lessons = [];
    const all = [];
    chapters.forEach((ch, chapterIndex) => {
      const passages = extractChapter(ch, ui);
      lessons.push({
        chapterIndex,
        chapterId: ch.id,
        chapterTitle: ch.title,
        passageStart: all.length,
        passageCount: passages.length,
      });
      passages.forEach((p, i) => {
        all.push({
          ...p,
          globalIndex: all.length,
          passageInLesson: i,
          lessonIndex: chapterIndex,
        });
      });
    });
    return { lessons, passages: all };
  }

  function scopePassages(book, scope, chapterId, sectionId) {
    if (scope === "all") return book.passages;
    if (scope === "module") {
      return book.passages.filter((p) => p.chapterId === chapterId);
    }
    if (scope === "lesson" && sectionId) {
      return book.passages.filter((p) => p.chapterId === chapterId && p.sectionId === sectionId);
    }
    return book.passages.filter((p) => p.chapterId === chapterId);
  }

  function tagDomPassages(mainEl, chapterId) {
    if (!mainEl) return;
    mainEl.querySelectorAll("[data-audio-passage]").forEach((el) => {
      delete el.dataset.audioPassage;
      el.classList.remove("audio-reading");
    });
    let i = 0;
    const article = mainEl.querySelector(".chapter-article");
    if (!article) return;
    const nodes = article.querySelectorAll(
      ".hero .lead, .plain-block h4, .plain-block p, .plain-remember, .section-body > h3, .section-body > p, .section-body > ul > li, .section-body > ol > li, .section-body .callout, .subsection h4, .subsection p, .subsection li, .section:not(.section-body) > h3 + ul > li, .section:not(.section-body) p",
    );
    nodes.forEach((el) => {
      if (el.closest(".code-block, .chapter-toc, .refs, .reading-guide, .table-wrap")) return;
      const text = el.textContent.trim();
      if (text.length < 2) return;
      el.dataset.audioPassage = String(i);
      el.dataset.audioChapter = chapterId;
      i += 1;
    });
  }

  function highlightPassage(mainEl, passage) {
    if (!mainEl || !passage) return;
    mainEl.querySelectorAll(".audio-reading").forEach((el) => el.classList.remove("audio-reading"));
    mainEl.querySelectorAll(".audio-reading-section").forEach((el) => {
      el.classList.remove("audio-reading-section");
    });

    if (passage.sectionId) {
      const sec = mainEl.querySelector(`#${CSS.escape(passage.sectionId)}`);
      if (sec) {
        sec.classList.add("audio-reading-section");
        sec.scrollIntoView({ behavior: "smooth", block: "nearest" });
        return;
      }
    }

    const el = mainEl.querySelector(
      `[data-audio-chapter="${passage.chapterId}"][data-audio-passage="${passage.passageInLesson}"]`,
    );
    if (el) {
      el.classList.add("audio-reading");
      el.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  window.TextbookAudioQueue = {
    buildBook,
    scopePassages,
    tagDomPassages,
    highlightPassage,
    stripHtml,
  };
})();
