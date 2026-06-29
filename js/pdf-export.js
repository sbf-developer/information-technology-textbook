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
    return root.querySelector(".pdf-document");
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

  function stripExternalStyles(clonedDoc) {
    clonedDoc.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
      const href = link.getAttribute("href") || "";
      if (/^https?:\/\//i.test(href)) link.remove();
    });
  }

  async function exportPdf() {
    const btn = document.getElementById("download-pdf");
    setButtonState(btn, true);

    let root = null;
    let restoreRoot = () => {};

    try {
      const html2pdf = await loadHtml2Pdf();
      const documentEl = buildExportRoot();
      root = document.getElementById("pdf-export-root");

      restoreRoot = () => {
        if (!root) return;
        root.style.cssText = "";
        root.setAttribute("aria-hidden", "true");
      };
      root.style.cssText =
        "position:fixed;left:0;top:0;width:210mm;max-height:100vh;overflow:auto;z-index:9999;background:#fff;opacity:1;pointer-events:none;";
      root.removeAttribute("aria-hidden");

      await waitForLayout();

      await html2pdf()
        .set({
          margin: [12, 12, 14, 12],
          filename: PDF_FILENAME,
          image: { type: "jpeg", quality: 0.92 },
          html2canvas: {
            scale: 1.35,
            useCORS: true,
            logging: false,
            scrollY: 0,
            windowWidth: 794,
            onclone: (clonedDoc) => {
              stripExternalStyles(clonedDoc);
              clonedDoc.querySelectorAll("pre code").forEach((block) => {
                block.removeAttribute("data-highlighted");
              });
            },
          },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
          pagebreak: {
            mode: ["css", "legacy"],
            before: ".pdf-chapter",
            avoid: [".code-block", ".callout", ".plain-intro", "tr"],
          },
        })
        .from(documentEl)
        .save();
    } catch (err) {
      console.error("PDF export failed:", err);
      alert(ui.pdfError);
    } finally {
      restoreRoot();
      setButtonState(btn, false);
    }
  }

  document.addEventListener("click", (event) => {
    if (event.target.id === "download-pdf") {
      exportPdf();
    }
  });
})();
