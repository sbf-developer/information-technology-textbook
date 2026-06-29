(function () {
  const { program, chapters, ui } = window.CURRICULUM;
  const { renderChapter } = window.TextbookRender;

  const sidebar = document.getElementById("sidebar-nav");
  const main = document.getElementById("main-content");

  const groups = [...new Set(chapters.map((c) => c.group))];

  function renderNav() {
    sidebar.innerHTML = `
      <div class="brand">
        <h1>${program.title}</h1>
        <p>${program.subtitle}</p>
        <button type="button" class="btn-pdf" id="download-pdf">${ui.downloadPdf}</button>
      </div>
      ${groups
        .map((group) => {
          const items = chapters.filter((c) => c.group === group);
          return `
          <div class="nav-group">
            <div class="nav-group-title">${group}</div>
            ${items
              .map(
                (c) => `
              <button class="nav-link" data-id="${c.id}" type="button">
                ${c.title}
                ${c.code ? `<small>${c.code}${c.ects ? ` · ${c.ects} ECTS` : ""}</small>` : ""}
              </button>
            `,
              )
              .join("")}
          </div>`;
        })
        .join("")}`;

    sidebar.querySelectorAll(".nav-link").forEach((btn) => {
      btn.addEventListener("click", () => showChapter(btn.dataset.id));
    });
  }

  function showChapter(id, options = {}) {
    const chapter = chapters.find((c) => c.id === id);
    if (!chapter) return;

    if (!options.audioHandoff) {
      window.TextbookAudio?.stop();
    }

    sidebar.querySelectorAll(".nav-link").forEach((el) => {
      el.classList.toggle("active", el.dataset.id === id);
    });

    main.innerHTML = `${renderChapter(chapter, ui, program)}<p class="footer-note">${ui.footerNote}</p>`;

    window.TextbookHighlight?.highlightIn(main);

    document.title = `${chapter.title} · ${program.title}`;
    history.replaceState(null, "", `#${id}`);

    window.TextbookAudio?.onChapterChange(id, options);
  }

  window.TextbookApp = { showChapter };

  renderNav();

  const hash = location.hash.slice(1);
  const startId = hash && chapters.some((c) => c.id === hash) ? hash : "overview";
  showChapter(startId);

  window.addEventListener("hashchange", () => {
    const id = location.hash.slice(1);
    if (id && chapters.some((c) => c.id === id)) showChapter(id);
  });
})();
