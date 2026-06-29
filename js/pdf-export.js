(function () {
  const { program, chapters, ui } = window.CURRICULUM;
  const { renderFullBook } = window.TextbookRender;

  const PDF_FILENAME = "cand-it-textbook.pdf";
  const HTML2PDF_SOURCES = [
    "vendor/html2pdf.bundle.min.js",
    "https://cdn.jsdelivr.net/npm/html2pdf.js@0.10.2/dist/html2pdf.bundle.min.js",
  ];

  function setButtonState(btn, busy) {
    if (!btn) return;
    btn.disabled = busy;
    btn.textContent = busy ? ui.generatingPdf : ui.downloadPdf;
    btn.classList.toggle("is-busy", busy);
  }

  function buildExportRoot() {
    let root = document.getElementById("pdf-export-root");
    if (!root) {
      root = document.createElement("div");
      root.id = "pdf-export-root";
      root.className = "pdf-export-root";
      root.setAttribute("aria-hidden", "true");
      document.body.appendChild(root);
    }
    root.innerHTML = `<div class="pdf-document">${renderFullBook(chapters, ui, program)}</div>`;
    return root;
  }

  function exportBlocks(root) {
    const doc = root.querySelector(".pdf-document");
    const cover = doc?.querySelector(".pdf-cover");
    const chapterEls = doc ? [...doc.querySelectorAll(".pdf-chapter")] : [];
    return [cover, ...chapterEls].filter(Boolean);
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        if (window.html2pdf) resolve(window.html2pdf);
        else reject(new Error(`PDF library loaded but html2pdf is missing (${src})`));
      };
      script.onerror = () => reject(new Error(`Could not load PDF library (${src})`));
      document.head.appendChild(script);
    });
  }

  async function loadHtml2Pdf() {
    if (window.html2pdf) return window.html2pdf;

    let lastError;
    for (const src of HTML2PDF_SOURCES) {
      try {
        return await loadScript(src);
      } catch (err) {
        lastError = err;
      }
    }
    throw lastError || new Error("Could not load PDF library");
  }

  function waitForLayout() {
    return new Promise((resolve) => {
      requestAnimationFrame(() => requestAnimationFrame(resolve));
    });
  }

  function prepareCloneForCapture(clonedDoc) {
    clonedDoc.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
      const href = link.getAttribute("href") || "";
      if (/^https?:\/\//i.test(href)) link.remove();
    });

    clonedDoc.querySelectorAll(".pdf-export-root, .pdf-document, .pdf-cover, .pdf-chapter").forEach((el) => {
      el.style.opacity = "1";
      el.style.visibility = "visible";
      el.style.background = "#fff";
      el.style.color = "#111";
      el.style.transform = "none";
    });

    const exportRoot = clonedDoc.getElementById("pdf-export-root");
    if (exportRoot) {
      exportRoot.style.position = "static";
      exportRoot.style.left = "0";
      exportRoot.style.top = "0";
      exportRoot.style.width = "210mm";
      exportRoot.style.maxHeight = "none";
      exportRoot.style.overflow = "visible";
      exportRoot.style.zIndex = "1";
    }

    clonedDoc.querySelectorAll("pre code").forEach((block) => {
      block.removeAttribute("data-highlighted");
    });
  }

  function pdfOptions() {
    return {
      margin: [12, 12, 14, 12],
      filename: PDF_FILENAME,
      image: { type: "jpeg", quality: 0.92 },
      html2canvas: {
        scale: 1.35,
        useCORS: true,
        logging: false,
        scrollY: 0,
        backgroundColor: "#ffffff",
        onclone: prepareCloneForCapture,
      },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      pagebreak: {
        mode: ["css", "legacy"],
        avoid: [".code-block", ".callout", ".plain-intro", "tr"],
      },
    };
  }

  async function exportPdf() {
    const btn = document.getElementById("download-pdf");
    setButtonState(btn, true);

    let root = null;

    try {
      const html2pdf = await loadHtml2Pdf();
      root = buildExportRoot();
      const blocks = exportBlocks(root);

      if (!blocks.length) {
        throw new Error("No PDF content to export");
      }

      root.classList.add("is-capturing");
      root.removeAttribute("aria-hidden");
      await waitForLayout();

      let worker = html2pdf()
        .set(pdfOptions())
        .from(blocks[0])
        .toContainer()
        .toCanvas()
        .toPdf();

      for (let i = 1; i < blocks.length; i += 1) {
        worker = worker
          .get("pdf")
          .then((pdf) => {
            pdf.addPage();
          })
          .from(blocks[i])
          .toContainer()
          .toCanvas()
          .toPdf();
      }

      await worker.save();
    } catch (err) {
      console.error("PDF export failed:", err);
      alert(ui.pdfError);
    } finally {
      if (root) {
        root.classList.remove("is-capturing");
        root.setAttribute("aria-hidden", "true");
      }
      setButtonState(btn, false);
    }
  }

  document.addEventListener("click", (event) => {
    if (event.target.id === "download-pdf") {
      exportPdf();
    }
  });
})();
