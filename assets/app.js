// ===== Campaign config (edit THESE in one spot) =====
window.LITHGREN = {
  worldName: "Lithgren",
  campaignInternal: "Campaign 1",
  arcTitle: "Siege on Ilium"
};

// ===== Apply config to pages =====
(function () {
  const cfg = window.LITHGREN;
  if (!cfg) return;

  document.querySelectorAll("[data-world-name]").forEach(el => {
    el.textContent = cfg.worldName;
  });

  document.querySelectorAll("[data-campaign-internal]").forEach(el => {
    el.textContent = cfg.campaignInternal;
  });

  document.querySelectorAll("[data-arc-title]").forEach(el => {
    el.textContent = cfg.arcTitle;
  });

  if (document.documentElement.hasAttribute("data-auto-title")) {
    document.title = `${cfg.worldName} — ${cfg.arcTitle} (${cfg.campaignInternal})`;
  }
})();

// ===== Rotating taglines on the home page =====
(function(){
  const el = document.querySelector("[data-rotating-tagline]");
  if(!el) return;

  const taglines = [
    "Ink dries. Oaths don't.",
    "Every road is a rumor with boots on.",
    "The map is honest. The cartographer was not.",
    "Gold buys passage. Blood buys truth.",
    "In the library of fate, some pages bite back.",
    "The old gods whisper in borrowed names."
  ];

  let i = 0;
  const rotate = () => {
    i = (i + 1) % taglines.length;
    el.textContent = "“" + taglines[i] + "”";
  };

  el.textContent = "“" + taglines[0] + "”";
  setInterval(rotate, 3800);
})();

// ===== NPC search filter =====
(function(){
  const input = document.querySelector("[data-npc-search]");
  const cards = document.querySelectorAll("[data-npc-card]");
  if(!input || !cards.length) return;

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    cards.forEach(card => {
      const hay = (card.getAttribute("data-search") || "").toLowerCase();
      card.style.display = hay.includes(q) ? "" : "none";
    });
  });
})();
