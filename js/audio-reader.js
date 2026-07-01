/**
 * Lesson audio: Web Speech API reader with scope, voice, speed, navigation.
 */
(function () {
  const { chapters, ui } = window.CURRICULUM;
  const book = window.TextbookAudioQueue.buildBook(chapters, ui);

  const state = {
    open: false,
    scope: "module",
    chapterId: chapters[0]?.id || "overview",
    sectionId: "",
    passageIndex: 0,
    playing: false,
    paused: false,
    rate: 1,
    voiceUri: "",
    voices: [],
    pendingSpeakIndex: null,
  };

  let utterance = null;
  let scoped = [];
  let speakGen = 0;

  const els = {};

  function $(id) {
    return document.getElementById(id);
  }

  function scopedPassages() {
    return window.TextbookAudioQueue.scopePassages(
      book,
      state.scope,
      state.chapterId,
      state.sectionId,
    );
  }

  function refreshScope() {
    scoped = scopedPassages();
    if (state.passageIndex >= scoped.length) state.passageIndex = Math.max(0, scoped.length - 1);
    updatePanel();
  }

  function currentPassage() {
    return scoped[state.passageIndex] || null;
  }

  function lessonForChapterId(id) {
    return book.lessons.find((l) => l.chapterId === id) || book.lessons[0];
  }

  function lessonIndex() {
    const lesson = lessonForChapterId(state.chapterId);
    return lesson ? lesson.chapterIndex : 0;
  }

  function detectSectionFromPassage(p) {
    if (state.scope === "lesson" && p?.sectionId) state.sectionId = p.sectionId;
  }

  function loadVoices() {
    if (typeof speechSynthesis === "undefined") return;
    const voices = speechSynthesis.getVoices();
    state.voices = voices.filter((v) => v.lang.startsWith("en"));
    if (!els.voiceSelect) return;
    const prev = state.voiceUri || localStorage.getItem("textbook-audio-voice") || "";
    els.voiceSelect.innerHTML = state.voices
      .map(
        (v) =>
          `<option value="${v.voiceURI}"${v.voiceURI === prev ? " selected" : ""}>${v.name} (${v.lang})</option>`,
      )
      .join("");
    if (state.voices.length && !prev) {
      const preferred = state.voices.find((v) => /google|natural|samantha|zira|english/i.test(v.name)) || state.voices[0];
      state.voiceUri = preferred.voiceURI;
      els.voiceSelect.value = preferred.voiceURI;
    } else if (prev) {
      state.voiceUri = prev;
      els.voiceSelect.value = prev;
    }
    if (!state.voices.length) {
      els.voiceSelect.innerHTML = `<option value="">No English voices (try Chrome/Edge)</option>`;
    }
  }

  function stop() {
    speakGen += 1;
    if (typeof speechSynthesis !== "undefined") speechSynthesis.cancel();
    utterance = null;
    state.playing = false;
    state.paused = false;
    updatePlayButton();
    document.querySelectorAll(".audio-reading").forEach((el) => el.classList.remove("audio-reading"));
  }

  function speakPassage(index) {
    if (typeof speechSynthesis === "undefined") return;
    speakGen += 1;
    const gen = speakGen;
    speechSynthesis.cancel();
    utterance = null;
    state.paused = false;
    scoped = scopedPassages();
    if (!scoped.length) return;
    state.passageIndex = Math.max(0, Math.min(index, scoped.length - 1));
    const p = scoped[state.passageIndex];
    if (!p) return;

    if (p.chapterId !== state.chapterId && window.TextbookApp?.showChapter) {
      state.pendingSpeakIndex = state.passageIndex;
      state.playing = true;
      updatePlayButton();
      window.TextbookApp.showChapter(p.chapterId, { audioHandoff: true });
      return;
    }

    detectSectionFromPassage(p);
    const main = document.getElementById("main-content");
    window.TextbookAudioQueue.highlightPassage(main, p);

    utterance = new SpeechSynthesisUtterance(p.text);
    utterance.rate = state.rate;
    const voice = state.voices.find((v) => v.voiceURI === state.voiceUri);
    if (voice) utterance.voice = voice;

    utterance.onend = () => {
      if (gen !== speakGen) return;
      scoped = scopedPassages();
      if (state.passageIndex < scoped.length - 1) {
        speakPassage(state.passageIndex + 1);
      } else {
        state.playing = false;
        state.paused = false;
        updatePlayButton();
        document.querySelectorAll(".audio-reading, .audio-reading-section").forEach((el) => {
          el.classList.remove("audio-reading", "audio-reading-section");
        });
      }
    };
    utterance.onerror = () => {
      if (gen !== speakGen) return;
      state.playing = false;
      state.paused = false;
      updatePlayButton();
    };

    state.paused = false;
    state.playing = true;
    updatePlayButton();
    updatePanel();
    speechSynthesis.speak(utterance);
  }

  function togglePlay() {
    if (typeof speechSynthesis === "undefined") return;

    if (state.paused || speechSynthesis.paused) {
      speechSynthesis.resume();
      state.paused = false;
      state.playing = true;
      updatePlayButton();
      return;
    }

    if (state.playing || speechSynthesis.speaking || speechSynthesis.pending) {
      speechSynthesis.pause();
      state.paused = true;
      state.playing = true;
      updatePlayButton();
      return;
    }

    if (!isSpeakingAloud()) syncToCurrentModule();
    speakPassage(state.passageIndex);
  }

  function updatePlayButton() {
    if (!els.playBtn) return;
    let label = "Play";
    if (state.paused || speechSynthesis.paused) {
      label = "Resume";
    } else if (state.playing || speechSynthesis.speaking || speechSynthesis.pending) {
      label = "Pause";
    }
    els.playBtn.textContent = label;
    els.playBtn.setAttribute("aria-pressed", label !== "Play" ? "true" : "false");
  }

  function getCurrentPageChapterId() {
    const hash = location.hash.slice(1);
    if (hash && chapters.some((c) => c.id === hash)) return hash;
    const active = document.querySelector(".nav-link.active");
    if (active?.dataset.id) return active.dataset.id;
    return state.chapterId;
  }

  function isSpeakingAloud() {
    if (typeof speechSynthesis === "undefined") return state.playing;
    return state.playing || speechSynthesis.speaking || speechSynthesis.pending;
  }

  function passageIndexForChapter(chapterId) {
    const sectionId =
      state.scope === "lesson"
        ? book.passages.filter((p) => p.chapterId === chapterId).find((p) => p.sectionId)?.sectionId || ""
        : state.sectionId;
    const list = window.TextbookAudioQueue.scopePassages(book, state.scope, chapterId, sectionId);
    const idx = list.findIndex((p) => p.chapterId === chapterId);
    return idx >= 0 ? idx : 0;
  }

  function alignToChapter(chapterId, { updateSection = true } = {}) {
    if (!chapterId) return;
    state.chapterId = chapterId;
    if (updateSection) {
      if (state.scope === "lesson") {
        const inChapter = book.passages.filter((p) => p.chapterId === chapterId);
        state.sectionId = inChapter.find((p) => p.sectionId)?.sectionId || "";
      } else {
        state.sectionId = "";
      }
    }
    state.passageIndex = passageIndexForChapter(chapterId);
  }
  function syncToCurrentModule() {
    const chapterId = getCurrentPageChapterId();
    if (!chapterId) return;

    alignToChapter(chapterId);

    const main = document.getElementById("main-content");
    window.TextbookAudioQueue.tagDomPassages(main, chapterId);
    refreshScope();

    const p = currentPassage();
    if (p) window.TextbookAudioQueue.highlightPassage(main, p);
  }

  function closeLessonPicker() {
    if (!els.lessonList) return;
    els.lessonList.hidden = true;
    els.lessonPickerBtn?.setAttribute("aria-expanded", "false");
  }

  function toggleLessonPicker() {
    if (!els.lessonList) return;
    const open = els.lessonList.hidden;
    els.lessonList.hidden = !open;
    els.lessonPickerBtn?.setAttribute("aria-expanded", open ? "true" : "false");
  }

  function jumpToLesson(chapterId) {
    const lesson = book.lessons.find((l) => l.chapterId === chapterId);
    if (!lesson) return;

    alignToChapter(chapterId);
    scoped = scopedPassages();
    const firstPassage = scoped[state.passageIndex];

    closeLessonPicker();
    stop();

    if (window.TextbookApp?.showChapter) {
      window.TextbookApp.showChapter(chapterId, {
        audioPassage: firstPassage?.passageInLesson ?? 0,
      });
    } else {
      refreshScope();
    }
  }

  function buildLessonList() {
    if (!els.lessonList) return;
    els.lessonList.innerHTML = book.lessons
      .map((lesson) => {
        const num = lesson.chapterIndex + 1;
        const total = book.lessons.length;
        return `<li role="presentation">
          <button type="button" class="audio-lesson-option" role="option" data-chapter-id="${lesson.chapterId}">
            ${num}/${total}: ${lesson.chapterTitle}
            <small>${lesson.passageCount} passage${lesson.passageCount === 1 ? "" : "s"}</small>
          </button>
        </li>`;
      })
      .join("");

    els.lessonList.querySelectorAll(".audio-lesson-option").forEach((btn) => {
      btn.addEventListener("click", () => jumpToLesson(btn.dataset.chapterId));
    });
  }

  function updateLessonPicker() {
    const activeId = isSpeakingAloud() ? state.chapterId : getCurrentPageChapterId();
    els.lessonList?.querySelectorAll(".audio-lesson-option").forEach((btn) => {
      const active = btn.dataset.chapterId === activeId;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
    });
  }

  function updatePanel() {
    scoped = scopedPassages();
    const p = currentPassage();
    const displayChapterId =
      !isSpeakingAloud() ? getCurrentPageChapterId() : p?.chapterId || state.chapterId;
    const lesson = lessonForChapterId(displayChapterId);
    const lessonNum = (lesson?.chapterIndex ?? 0) + 1;
    const totalLessons = book.lessons.length;

    if (els.lessonTitle) {
      els.lessonTitle.textContent = `${lessonNum}/${totalLessons}: ${lesson?.chapterTitle || p?.chapterTitle || ""}`;
    }

    const scopeLabel =
      state.scope === "all" ? "All lessons" : state.scope === "module" ? "This module" : "This section";
    const passNum = scoped.length ? state.passageIndex + 1 : 0;
    const globalNum = p ? p.globalIndex + 1 : 0;

    if (els.lessonMeta) {
      els.lessonMeta.textContent = `${scopeLabel} · Passage ${passNum}/${scoped.length || 0} · Overall ${globalNum}/${book.passages.length}`;
    }

    if (els.passageRange) {
      els.passageRange.max = String(Math.max(0, scoped.length - 1));
      els.passageRange.value = String(state.passageIndex);
      els.passageRange.disabled = scoped.length <= 1;
    }

    if (els.speedLabel) {
      els.speedLabel.textContent = `SPEED ${state.rate.toFixed(1).replace(/\.0$/, "")}X`;
    }
    if (els.speedRange) els.speedRange.value = String(state.rate);

    els.lessonPrev?.toggleAttribute("disabled", lessonNum <= 1);
    els.lessonNext?.toggleAttribute("disabled", lessonNum >= totalLessons);
    els.passagePrev?.toggleAttribute("disabled", state.passageIndex <= 0);
    els.passageNext?.toggleAttribute("disabled", state.passageIndex >= scoped.length - 1);
    updateLessonPicker();
  }

  function setScope(scope) {
    state.scope = scope;
    els.scopeBtns?.forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.scope === scope);
    });
    alignToChapter(getCurrentPageChapterId());
    refreshScope();
    stop();
  }

  function goLesson(delta) {
    const idx = lessonIndex() + delta;
    if (idx < 0 || idx >= book.lessons.length) return;
    const lesson = book.lessons[idx];
    state.chapterId = lesson.chapterId;
    state.passageIndex = 0;
    state.sectionId = "";
    if (window.TextbookApp?.showChapter) window.TextbookApp.showChapter(lesson.chapterId);
    else refreshScope();
    stop();
  }

  function goPassage(delta) {
    scoped = scopedPassages();
    const next = state.passageIndex + delta;
    if (next < 0 || next >= scoped.length) return;
    if (state.playing || (typeof speechSynthesis !== "undefined" && speechSynthesis.speaking)) {
      speakPassage(next);
      return;
    }
    state.passageIndex = next;
    const p = scoped[state.passageIndex];
    if (p?.chapterId !== state.chapterId && window.TextbookApp?.showChapter) {
      window.TextbookApp.showChapter(p.chapterId, { audioPassage: p.passageInLesson });
    } else {
      detectSectionFromPassage(p);
      window.TextbookAudioQueue.highlightPassage(document.getElementById("main-content"), p);
      updatePanel();
    }
  }

  function buildUi() {
    const root = document.createElement("div");
    root.className = "audio-reader-root";
    root.innerHTML = `
      <div class="audio-panel" id="audio-panel" hidden>
        <header class="audio-panel-head">
          <h2>Lesson audio</h2>
          <p>Scope, voices, pacing, lesson jumps, and passage jumps in one place.</p>
        </header>

        <div class="audio-field">
          <span class="audio-label">Scope</span>
          <div class="audio-segment" role="group" aria-label="Reading scope">
            <button type="button" class="audio-segment-btn" data-scope="all">All</button>
            <button type="button" class="audio-segment-btn is-active" data-scope="module">Module</button>
            <button type="button" class="audio-segment-btn" data-scope="lesson">Section</button>
          </div>
        </div>

        <div class="audio-field">
          <span class="audio-label">Module</span>
          <div class="audio-lesson-picker">
            <button
              type="button"
              class="audio-now audio-now-btn"
              id="audio-lesson-picker-btn"
              aria-haspopup="listbox"
              aria-expanded="false"
              aria-label="Choose module to read from"
            >
              <strong id="audio-lesson-title">1/15: Overview</strong>
              <span id="audio-lesson-meta">This module · Passage 0/0</span>
              <span class="audio-now-chevron" aria-hidden="true">▾</span>
            </button>
            <ul class="audio-lesson-list" id="audio-lesson-list" role="listbox" hidden></ul>
          </div>
        </div>

        <div class="audio-field">
          <span class="audio-label" id="audio-speed-label">SPEED 1X</span>
          <input type="range" id="audio-speed" min="0.5" max="2" step="0.1" value="1" aria-label="Speech speed" />
        </div>

        <div class="audio-field">
          <span class="audio-label">Voice</span>
          <select id="audio-voice" class="audio-select" aria-label="Speech voice"></select>
        </div>

        <div class="audio-field">
          <span class="audio-label">Passage</span>
          <div class="audio-passage-row">
            <button type="button" class="audio-icon-btn" id="audio-passage-prev" aria-label="Previous passage">←</button>
            <input type="range" id="audio-passage" min="0" max="0" value="0" aria-label="Passage position" />
            <button type="button" class="audio-icon-btn" id="audio-passage-next" aria-label="Next passage">→</button>
          </div>
        </div>

        <div class="audio-field">
          <span class="audio-label">Lesson</span>
          <div class="audio-lesson-row">
            <button type="button" class="audio-btn audio-btn-secondary" id="audio-lesson-prev">← Prev</button>
            <button type="button" class="audio-btn audio-btn-primary" id="audio-play">Play</button>
            <button type="button" class="audio-btn audio-btn-secondary" id="audio-lesson-next">Next →</button>
          </div>
        </div>
      </div>

      <button type="button" class="audio-fab" id="audio-fab" aria-label="Open lesson audio" aria-expanded="false">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/>
          <path d="M15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
        </svg>
      </button>
    `;
    document.body.appendChild(root);

    els.panel = $("audio-panel");
    els.fab = $("audio-fab");
    els.lessonTitle = $("audio-lesson-title");
    els.lessonMeta = $("audio-lesson-meta");
    els.lessonPickerBtn = $("audio-lesson-picker-btn");
    els.lessonList = $("audio-lesson-list");
    els.speedLabel = $("audio-speed-label");
    els.speedRange = $("audio-speed");
    els.voiceSelect = $("audio-voice");
    els.passageRange = $("audio-passage");
    els.passagePrev = $("audio-passage-prev");
    els.passageNext = $("audio-passage-next");
    els.lessonPrev = $("audio-lesson-prev");
    els.lessonNext = $("audio-lesson-next");
    els.playBtn = $("audio-play");
    els.scopeBtns = root.querySelectorAll(".audio-segment-btn");

    els.fab.addEventListener("click", () => {
      const wasOpen = state.open;
      state.open = !state.open;
      els.panel.hidden = !state.open;
      els.fab.setAttribute("aria-expanded", state.open ? "true" : "false");
      if (!state.open) {
        closeLessonPicker();
      } else if (!wasOpen && !isSpeakingAloud()) {
        syncToCurrentModule();
      }
    });

    els.lessonPickerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleLessonPicker();
    });

    document.addEventListener("click", (e) => {
      if (!els.lessonList || els.lessonList.hidden) return;
      if (e.target.closest(".audio-lesson-picker")) return;
      closeLessonPicker();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLessonPicker();
    });

    buildLessonList();

    els.scopeBtns.forEach((btn) => {
      btn.addEventListener("click", () => setScope(btn.dataset.scope));
    });

    els.speedRange.addEventListener("input", () => {
      state.rate = parseFloat(els.speedRange.value);
      updatePanel();
      if (utterance) utterance.rate = state.rate;
    });

    els.voiceSelect.addEventListener("change", () => {
      state.voiceUri = els.voiceSelect.value;
      localStorage.setItem("textbook-audio-voice", state.voiceUri);
    });

    els.passageRange.addEventListener("input", () => {
      state.passageIndex = parseInt(els.passageRange.value, 10);
      updatePanel();
    });

    els.passagePrev.addEventListener("click", () => goPassage(-1));
    els.passageNext.addEventListener("click", () => goPassage(1));
    els.lessonPrev.addEventListener("click", () => goLesson(-1));
    els.lessonNext.addEventListener("click", () => goLesson(1));
    els.playBtn.addEventListener("click", togglePlay);

    loadVoices();
    speechSynthesis.addEventListener("voiceschanged", loadVoices);
  }

  function onChapterChange(chapterId, options = {}) {
    state.chapterId = chapterId;
    if (options.sectionId) state.sectionId = options.sectionId;
    else if (state.scope === "lesson") {
      const inChapter = book.passages.filter((p) => p.chapterId === chapterId);
      if (!inChapter.some((p) => p.sectionId === state.sectionId)) {
        state.sectionId = inChapter.find((p) => p.sectionId)?.sectionId || "";
      }
    } else if (state.scope !== "lesson") {
      state.sectionId = "";
    }

    const main = document.getElementById("main-content");
    window.TextbookAudioQueue.tagDomPassages(main, chapterId);
    refreshScope();

    if (state.pendingSpeakIndex != null) {
      const idx = state.pendingSpeakIndex;
      state.pendingSpeakIndex = null;
      speakPassage(idx);
      return;
    }

    if (options.audioHandoff) return;

    if (state.playing || (typeof speechSynthesis !== "undefined" && speechSynthesis.speaking)) {
      stop();
    }

    if (typeof options.audioPassage === "number") {
      const idx = scoped.findIndex(
        (p) => p.chapterId === chapterId && p.passageInLesson === options.audioPassage,
      );
      state.passageIndex = idx >= 0 ? idx : 0;
      updatePanel();
      if (options.autoPlay) speakPassage(state.passageIndex);
    } else if (!options.audioHandoff && state.pendingSpeakIndex == null) {
      alignToChapter(chapterId, { updateSection: true });
      refreshScope();
    }
  }

  buildUi();
  const startId =
    location.hash.slice(1) && chapters.some((c) => c.id === location.hash.slice(1))
      ? location.hash.slice(1)
      : state.chapterId;
  onChapterChange(startId);

  window.TextbookAudio = { onChapterChange, stop };
})();
