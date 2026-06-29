(function () {
  const ALIASES = {
    js: "javascript",
    py: "python",
    ts: "typescript",
  };

  const SKIP = new Set(["text", "plaintext", "plain"]);

  function normalizeLang(lang) {
    if (!lang) return "";
    const key = String(lang).toLowerCase().trim();
    if (SKIP.has(key)) return "";
    return ALIASES[key] || key;
  }

  function highlightIn(root) {
    if (!window.hljs || !root) return;
    root.querySelectorAll("pre code").forEach((block) => {
      const lang = normalizeLang(block.dataset.lang);
      if (lang) block.classList.add(`language-${lang}`);
      hljs.highlightElement(block);
    });
  }

  window.TextbookHighlight = { highlightIn, normalizeLang };
})();
