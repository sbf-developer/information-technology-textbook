(function () {
  const sections = window.CHAPTER_SECTIONS || {};
  window.CURRICULUM.chapters.forEach((ch) => {
    if (sections[ch.id]) ch.sections = sections[ch.id];
    const intro = (window.PLAIN_INTROS || {})[ch.id];
    if (intro) ch.plainIntro = intro;
  });
})();
