(function () {
  function esc(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderParagraphs(paragraphs) {
    if (!paragraphs?.length) return "";
    return paragraphs.map((p) => `<p>${p}</p>`).join("");
  }

  function renderBullets(items) {
    if (!items?.length) return "";
    return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  }

  function renderTable(table) {
    if (!table) return "";
    const head = table.headers.map((h) => `<th scope="col">${h}</th>`).join("");
    const body = table.rows
      .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
      .join("");
    return `<div class="table-wrap"><table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
  }

  function renderCode(block) {
    if (!block?.source) return "";
    const lang = window.TextbookHighlight.normalizeLang(block.lang);
    const langClass = lang ? ` class="language-${lang}"` : "";
    const langBadge = block.lang
      ? `<span class="code-lang">${esc(block.lang)}</span>`
      : "";
    const caption = block.caption ? `<p class="code-caption">${block.caption}</p>` : "";
    return `
      <figure class="code-block">
        ${caption}
        <div class="code-pre-wrap">
          ${langBadge}
          <pre><code${langClass}${block.lang ? ` data-lang="${esc(block.lang)}"` : ""}>${esc(block.source.trim())}</code></pre>
        </div>
      </figure>`;
  }

  function renderSteps(steps) {
    if (!steps?.length) return "";
    return `<ol class="worked-steps">${steps.map((s) => `<li>${s}</li>`).join("")}</ol>`;
  }

  function renderChapterToc(chapter, ui) {
    if (!chapter.sections?.length) return "";
    const items = chapter.sections
      .map(
        (s, i) =>
          `<li><a href="#sec-${chapter.id}-${i}">${s.title}</a></li>`,
      )
      .join("");
    return `
        <nav class="chapter-toc" aria-label="On this page">
          <h3>${ui.onThisPage}</h3>
          <ul>${items}</ul>
        </nav>`;
  }

  function renderSection(section, chapterId, index) {
    const sid = `sec-${chapterId}-${index}`;
    const fromZero = section.title.startsWith("From zero");
    const isLesson = section.title.startsWith("Lesson ");
    const isCoreGuide = section.title.startsWith("Core subject guide");
    const tutorial =
      section.title.startsWith("Concept encyclopedia") ||
      section.title.startsWith("Tutorial") ||
      section.title.startsWith("Practice");
    let sectionCls = "section section-body";
    if (fromZero) sectionCls += " section-from-zero";
    else if (isLesson) sectionCls += " section-lesson";
    else if (isCoreGuide) sectionCls += " section-core-guide";
    else if (tutorial) sectionCls += " section-tutorial";
    return [
      `<section class="${sectionCls}" id="${sid}">`,
      `<h3>${section.title}</h3>`,
      renderParagraphs(section.paragraphs),
      renderBullets(section.bullets),
      renderSteps(section.steps),
      section.subsections
        ? section.subsections
            .map(
              (sub) => `
          <div class="subsection">
            <h4>${sub.title}</h4>
            ${renderParagraphs(sub.paragraphs)}
            ${renderBullets(sub.bullets)}
            ${renderSteps(sub.steps)}
            ${renderCode(sub.code)}
            ${renderTable(sub.table)}
          </div>`,
            )
            .join("")
        : "",
      renderTable(section.table),
      renderCode(section.code),
      section.callout ? `<aside class="callout">${section.callout}</aside>` : "",
      `</section>`,
    ].join("");
  }

  function renderPlainIntro(chapter, ui) {
    const p = chapter.plainIntro;
    if (!p) return "";
    return `
        <section class="section plain-intro">
          <h3>${ui.plainLanguage}</h3>
          <div class="plain-block">
            <h4>${ui.plainWhat}</h4>
            <p>${p.what}</p>
          </div>
          <div class="plain-block">
            <h4>${ui.plainWhy}</h4>
            <p>${p.why}</p>
          </div>
          <div class="plain-block">
            <h4>${ui.plainExample}</h4>
            <p>${p.example}</p>
          </div>
          ${
            p.disciplines?.length
              ? `<p class="discipline-tags">${p.disciplines.map((d) => `<span class="tag">${d}</span>`).join("")}</p>`
              : ""
          }
          ${
            p.remember
              ? `<aside class="callout plain-remember"><strong>${ui.plainRemember}:</strong> ${p.remember}</aside>`
              : ""
          }
        </section>`;
  }

  function renderSections(chapter, ui) {
    if (!chapter.sections?.length) return "";
    const head = chapter.plainIntro
      ? `<p class="going-deeper-label">${ui.goingDeeper}</p>`
      : "";
    return head + chapter.sections.map((s, i) => renderSection(s, chapter.id, i)).join("");
  }

  function renderOverviewExtras(chapter, ui, program) {
    if (chapter.id !== "overview") return "";
    return `
        <section class="section">
          <h3>${ui.semesterOverview}</h3>
          <ul>
            <li><strong>Sem. 1</strong> Computational Thinking, Udvikling af software, Information og organisering, Grundlæggende programmering</li>
            <li><strong>Sem. 2</strong> Udvikling af et interaktivt design (project), OOP, HCI, Systemudvikling</li>
            <li><strong>Sem. 3</strong> Udvikling af interaktive systemer (project), Agil SE, Databaseudvikling, Valgfag</li>
            <li><strong>Sem. 4</strong> Kandidatspeciale (30 ECTS)</li>
          </ul>
        </section>
        <section class="section">
          <h3>${ui.thematicTracks}</h3>
          <ul>
            <li><strong>Programming & CS</strong>: syntax, OOP, algorithms, computational thinking</li>
            <li><strong>Software engineering</strong>: requirements, testing, agile, architecture, design patterns</li>
            <li><strong>HCI & design</strong>: interfaces, prototyping, evaluation</li>
            <li><strong>Data & systems</strong>: databases, information systems, integration</li>
          </ul>
        </section>
        <section class="section">
          <h3>${ui.officialSources}</h3>
          <ul class="refs">
            ${program.links.map((l) => `<li><a href="${l.url}">${l.label}</a> · ${l.url}</li>`).join("")}
          </ul>
        </section>`;
  }

  function renderChapter(chapter, ui, program) {
    const metaParts = [];
    if (chapter.code) metaParts.push(chapter.code);
    if (chapter.ects) metaParts.push(`${chapter.ects} ECTS`);
    if (chapter.type) metaParts.push(chapter.type);

    return `
      <article class="chapter-article">
        <header class="hero">
          <h2>${chapter.title}</h2>
          ${metaParts.length ? `<p class="meta">${metaParts.map((m) => `<span>${m}</span>`).join("")}</p>` : ""}
          <p class="lead">${chapter.summary}</p>
        </header>

        ${renderPlainIntro(chapter, ui)}

        <p class="reading-guide"><strong>${ui.readingGuide}:</strong> ${ui.readingGuideText}</p>

        ${renderChapterToc(chapter, ui)}

        <section class="section">
          <h3>${ui.coreConcepts}</h3>
          <ul>${chapter.concepts.map((c) => `<li>${c}</li>`).join("")}</ul>
        </section>

        ${renderSections(chapter, ui)}
        ${renderOverviewExtras(chapter, ui, program)}

        ${
          chapter.connections
            ? `
        <section class="section">
          <h3>${ui.curriculumLinks}</h3>
          <div class="bridge">${chapter.connections}</div>
        </section>`
            : ""
        }

        <section class="section">
          <h3>${ui.references}</h3>
          <ul class="refs">
            ${chapter.refs
              .map(
                (r) => `<li class="ref-item">
              <a href="${r.url}">${r.label}</a>
              ${r.note ? `<p class="ref-note">${r.note}</p>` : ""}
            </li>`,
              )
              .join("")}
          </ul>
        </section>
      </article>`;
  }

  function renderCover(program, ui, chapterCount) {
    const generated = new Date().toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return `
      <article class="pdf-cover">
        <p class="pdf-cover-label">${program.title}</p>
        <h1>${program.subtitle}</h1>
        <p class="pdf-cover-desc">${program.description}</p>
        <p class="pdf-cover-meta">${chapterCount} chapters · Generated ${generated}</p>
        <p class="pdf-cover-note">${ui.pdfCoverNote}</p>
      </article>`;
  }

  function renderFullBook(chapters, ui, program) {
    const body = chapters
      .map(
        (chapter) =>
          `<div class="pdf-chapter" id="pdf-chapter-${chapter.id}">${renderChapter(chapter, ui, program)}</div>`,
      )
      .join("");
    return `${renderCover(program, ui, chapters.length)}${body}`;
  }

  window.TextbookRender = {
    renderChapter,
    renderFullBook,
  };
})();
