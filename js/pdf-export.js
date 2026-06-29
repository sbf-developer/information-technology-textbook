(function () {
  const { program, chapters, ui } = window.CURRICULUM;
  const { renderFullBook } = window.TextbookRender;

  const PDF_FILENAME = "cand-it-textbook.pdf";

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

  function loadHtml2Pdf() {
    if (window.html2pdf) return Promise.resolve(window.html2pdf);
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/html2pdf.js@0.10.2/dist/html2pdf.bundle.min.js";
      script.onload = () => resolve(window.html2pdf);
      script.onerror = () => reject(new Error("Could not load PDF library"));
      document.head.appendChild(script);
    });
  }

  async function exportPdf() {
    const btn = document.getElementById("download-pdf");
    setButtonState(btn, true);

    const root = document.getElementById("pdf-export-root");
    let restoreRoot = () => {};

    try {
      const html2pdf = await loadHtml2Pdf();
      const documentEl = buildExportRoot();
      window.TextbookHighlight?.highlightIn(documentEl);

      // html2canvas needs layout; keep off-screen but fully rendered
      restoreRoot = () => {
        root.style.cssText = "";
        root.setAttribute("aria-hidden", "true");
      };
      root.style.cssText =
        "position:fixed;left:0;top:0;width:210mm;max-height:100vh;overflow:auto;z-index:9999;background:#fff;opacity:1;pointer-events:none;";
      root.removeAttribute("aria-hidden");

      await html2pdf()
        .set({
          margin: [12, 12, 14, 12],
          filename: PDF_FILENAME,
          image: { type: "jpeg", quality: 0.92 },
          html2canvas: {
            scale: 2,
            useCORS: true,
            logging: false,
            scrollY: 0,
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
      console.error(err);
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
