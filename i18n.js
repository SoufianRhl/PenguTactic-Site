const translations = {
  en: {
    nav: ["Status", "Roadmap", "Product scope", "Privacy & compliance"],
    badge: "V1 · Public Prototype",
    activeV1: "In active development",
    lead: "A Teamfight Tactics post-game analytics and personalized coaching companion currently in prototype development and intended for future public release.",
    heroNote: "<strong>Current focus:</strong> turning trustworthy match history and permitted temporal game data into clear post-game timelines and personalized improvement insights.",
    metricValues: ["POST-GAME", "SET 18", "MULTI-REGION", "PRIVACY", "V1"],
    metrics: [
      "Designed around review and improvement after the match, not live decision instructions",
      "Current competitive data focus for ongoing prototype validation",
      "Longitudinal match context across multiple Riot regions",
      "Pseudonymized research outputs with private raw data boundaries",
      "Prototype stage until the end-to-end personalized coaching experience is complete"
    ],
    statusTitle: "Current product status",
    statusIntro: "This page summarizes validated product capabilities at a public level. Private datasets, credentials, operational infrastructure, and internal development tooling remain outside the public project surface.",
    phaseActive: "V1 prototype",
    statusCards: [
      ["Data foundation", "Validated. Structured TFT match data, explicit provenance, canonical admission rules, and longitudinal player context form the current evidence base."],
      ["Continuous acquisition", "Operationally validated. The project can maintain fresh match coverage while preserving bounded scheduling, rate-limit handling, and data-quality safeguards."],
      ["Temporal match reconstruction", "In validation. Permitted telemetry sources are being evaluated to reconstruct how a match evolves over time instead of relying only on final-state data."],
      ["Personalized post-game coach", "In development. The V1 goal is a player-facing review experience that connects match timelines, historical context, and explainable improvement insights."]
    ],
    roadmapTitle: "V1 roadmap",
    roadmapIntro: "V1 closes only when PenguTactic can observe enough trustworthy context to produce a useful personalized post-game review from a completed match.",
    v1Incomplete: "V1 in progress",
    roadmapCards: [
      ["Done", "Data foundation", "Validated structured match ingestion, longitudinal context, provenance, and privacy boundaries."],
      ["Done", "Continuous coverage", "Fresh multi-region match acquisition with strict quality gates and resilient collection behavior."],
      ["In validation", "Temporal timeline", "Evaluate permitted live telemetry and reconstruct meaningful economy, health, level, board, and stage changes when available."],
      ["Next", "Personalized coaching", "Join temporal context with official post-game results and turn the combined evidence into clear, explainable player feedback."]
    ],
    technicalTitle: "Product scope",
    technicalIntro: "The public product focuses on post-game understanding and player improvement. Internal collection infrastructure and operational implementation details are deliberately not documented here.",
    technicalCards: [
      ["Structured match history", "Use official and permitted structured data to establish reliable final match outcomes and historical context."],
      ["Longitudinal player analysis", "Track meaningful trends across matches, ranks, and patches instead of judging a player from a single result."],
      ["Temporal telemetry prototype", "Evaluate permitted game-event sources to reconstruct match progression where the available evidence is sufficiently reliable."],
      ["Post-game feature extraction", "Derive explainable signals such as progression timing, health trajectory, economy changes, and board transitions only when supported by evidence."],
      ["Coaching experience", "Present personalized post-game insights through a future public-facing interface without dictating live gameplay decisions."]
    ],
    versionRule: "<strong>V1 completion rule:</strong> PenguTactic remains in V1 until the end-to-end personalized post-game coaching experience is operational and useful on real completed matches.",
    privacyTitle: "Privacy & compliance",
    privacyIntro: "PenguTactic is designed around explicit provenance, privacy-conscious processing, and a post-game use case that avoids hidden or prescriptive live information.",
    privacyCards: [
      ["Post-game by design", "The product is focused on reviewing completed matches and long-term improvement rather than providing dynamic in-game instructions."],
      ["Permitted data only", "PenguTactic is intended to use official or otherwise permitted data sources and does not rely on hidden game information or gameplay automation."],
      ["Private data boundary", "Credentials, raw identities, private research datasets, models, and internal operational tooling are not exposed through this public site."]
    ],
    purposeTitle: "Purpose",
    purposeDesc: "PenguTactic is being developed as a future public Teamfight Tactics post-game analytics and personalized coaching companion. The current version is an early prototype. It does not provide real-time prescriptive decision-making, opponent scouting, hidden information, or gameplay automation. The public website describes the product direction and validated capabilities while private development assets remain private.",
    footer: "Status snapshot: 29 August 2026. PenguTactic is an independent project and is not endorsed by Riot Games. Riot Games, Teamfight Tactics, and related marks are trademarks or registered trademarks of Riot Games, Inc."
  },
  fr: {
    nav: ["Statut", "Roadmap", "Périmètre produit", "Confidentialité & conformité"],
    badge: "V1 · Prototype public",
    activeV1: "En développement actif",
    lead: "Un compagnon d’analyse post-partie et de coaching personnalisé pour Teamfight Tactics, actuellement en phase de prototype et destiné à une future publication publique.",
    heroNote: "<strong>Focus actuel :</strong> transformer un historique de matchs fiable et des données temporelles autorisées en timelines post-partie claires et en pistes d’amélioration personnalisées.",
    metricValues: ["POST-PARTIE", "SET 18", "MULTI-RÉGION", "CONFIDENTIALITÉ", "V1"],
    metrics: [
      "Conçu pour l’analyse et l’amélioration après la partie, pas pour dicter des décisions en direct",
      "Focus compétitif actuel utilisé pour valider le prototype",
      "Contexte longitudinal de matchs sur plusieurs régions Riot",
      "Sorties de recherche pseudonymisées et frontière stricte pour les données brutes privées",
      "Phase prototype jusqu’à ce que l’expérience complète de coaching personnalisé soit opérationnelle"
    ],
    statusTitle: "État actuel du produit",
    statusIntro: "Cette page résume publiquement les capacités validées du produit. Les datasets privés, identifiants sensibles, infrastructures opérationnelles et outils internes de développement restent hors de la surface publique du projet.",
    phaseActive: "Prototype V1",
    statusCards: [
      ["Fondation des données", "Validée. Les données TFT structurées, la provenance explicite, les règles d’admission canonique et le contexte longitudinal constituent la base actuelle."],
      ["Acquisition continue", "Validée opérationnellement. Le projet peut maintenir une couverture fraîche des matchs tout en conservant ordonnancement borné, gestion des limites de débit et garde-fous de qualité."],
      ["Reconstruction temporelle", "En validation. Des sources de télémétrie autorisées sont évaluées afin de reconstruire l’évolution d’une partie au lieu de dépendre uniquement de son état final."],
      ["Coach post-partie personnalisé", "En développement. L’objectif V1 est une expérience de review qui relie timeline de match, historique du joueur et conseils d’amélioration explicables."]
    ],
    roadmapTitle: "Roadmap V1",
    roadmapIntro: "La V1 ne sera terminée que lorsque PenguTactic pourra observer assez de contexte fiable pour produire une review post-partie personnalisée et utile à partir d’un match terminé.",
    v1Incomplete: "V1 en cours",
    roadmapCards: [
      ["Terminé", "Fondation des données", "Ingestion structurée validée, contexte longitudinal, provenance et frontières de confidentialité."],
      ["Terminé", "Couverture continue", "Acquisition fraîche multi-régions avec verrous de qualité stricts et comportement de collecte résilient."],
      ["En validation", "Timeline temporelle", "Évaluer la télémétrie autorisée et reconstruire les changements utiles d’économie, PV, niveau, board et stage lorsque les données le permettent."],
      ["Ensuite", "Coaching personnalisé", "Relier le contexte temporel aux résultats post-partie officiels et transformer ces preuves en feedback joueur clair et explicable."]
    ],
    technicalTitle: "Périmètre produit",
    technicalIntro: "Le produit public se concentre sur la compréhension post-partie et l’amélioration du joueur. L’infrastructure interne de collecte et les détails opérationnels ne sont volontairement pas documentés ici.",
    technicalCards: [
      ["Historique de matchs structuré", "Utiliser des données officielles ou autorisées afin d’établir des résultats de matchs fiables et un contexte historique exploitable."],
      ["Analyse longitudinale du joueur", "Suivre les tendances pertinentes sur plusieurs matchs, rangs et patchs plutôt que juger un joueur sur un seul résultat."],
      ["Prototype de télémétrie temporelle", "Évaluer des sources d’événements de jeu autorisées pour reconstruire la progression d’une partie lorsque les preuves disponibles sont suffisamment fiables."],
      ["Extraction de signaux post-partie", "Dériver des signaux explicables comme le timing de progression, la trajectoire des PV, l’évolution de l’économie et les transitions de board uniquement lorsqu’ils sont supportés par les données."],
      ["Expérience de coaching", "Présenter des insights post-partie personnalisés dans une future interface publique sans dicter les décisions de jeu en direct."]
    ],
    versionRule: "<strong>Règle de clôture V1 :</strong> PenguTactic reste en V1 jusqu’à ce que l’expérience complète de coaching post-partie personnalisé soit opérationnelle et utile sur de vraies parties terminées.",
    privacyTitle: "Confidentialité & conformité",
    privacyIntro: "PenguTactic est conçu autour d’une provenance explicite, d’un traitement attentif des données et d’un usage post-partie évitant les informations cachées ou les recommandations prescriptives en direct.",
    privacyCards: [
      ["Post-partie par conception", "Le produit vise la review des matchs terminés et l’amélioration sur le long terme plutôt que des instructions dynamiques pendant la partie."],
      ["Données autorisées uniquement", "PenguTactic est destiné à utiliser des sources officielles ou autorisées et ne repose pas sur des informations cachées du jeu ni sur l’automatisation du gameplay."],
      ["Frontière des données privées", "Les identifiants sensibles, identités brutes, datasets de recherche privés, modèles et outils opérationnels internes ne sont pas exposés via ce site public."]
    ],
    purposeTitle: "Objectif",
    purposeDesc: "PenguTactic est développé comme un futur compagnon public d’analyse post-partie et de coaching personnalisé pour Teamfight Tactics. La version actuelle reste un prototype précoce. Il ne fournit pas de recommandations prescriptives en temps réel, de scouting adverse, d’informations cachées ni d’automatisation du gameplay. Le site public présente la direction du produit et ses capacités validées tandis que les éléments privés de développement restent privés.",
    footer: "État au 29 août 2026. PenguTactic est un projet indépendant et n’est pas approuvé par Riot Games. Riot Games, Teamfight Tactics et les marques associées sont des marques commerciales ou déposées de Riot Games, Inc."
  }
};

const pageMeta = {
  en: {
    title: "PenguTactic — TFT Post-game Coaching Prototype",
    description: "PenguTactic is a Teamfight Tactics post-game analytics and personalized coaching companion in prototype development and intended for future public release.",
    navLabel: "Primary navigation",
    languageLabel: "Language",
    statsLabel: "Current PenguTactic V1 product focus"
  },
  fr: {
    title: "PenguTactic — Prototype de coaching post-partie TFT",
    description: "PenguTactic est un compagnon d’analyse post-partie et de coaching personnalisé pour Teamfight Tactics, actuellement en phase de prototype et destiné à une future publication publique.",
    navLabel: "Navigation principale",
    languageLabel: "Langue",
    statsLabel: "Focus produit actuel de PenguTactic V1"
  }
};

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function setHtml(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = value;
}

function applyLanguage(language) {
  const lang = translations[language] ? language : "en";
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.title = pageMeta[lang].title;
  document.querySelector('meta[name="description"]').setAttribute("content", pageMeta[lang].description);
  document.querySelector("nav").setAttribute("aria-label", pageMeta[lang].navLabel);
  document.querySelector(".language-switcher").setAttribute("aria-label", pageMeta[lang].languageLabel);
  document.querySelector(".stats").setAttribute("aria-label", pageMeta[lang].statsLabel);

  document.querySelectorAll("nav a").forEach((element, index) => { element.textContent = t.nav[index]; });
  setText(".badge-row .badge", t.badge);
  setText(".badge-row .pill-active", t.activeV1);
  setText(".lead", t.lead);
  setHtml(".hero-note", t.heroNote);
  document.querySelectorAll(".metric strong").forEach((element, index) => { element.textContent = t.metricValues[index]; });
  document.querySelectorAll(".metric span").forEach((element, index) => { element.textContent = t.metrics[index]; });

  setText("#status h2", t.statusTitle);
  setText("#status .section-head p", t.statusIntro);
  setText("#status .section-head .pill", t.phaseActive);
  document.querySelectorAll("#status .status-card").forEach((card, index) => {
    card.querySelector("h3").textContent = t.statusCards[index][0];
    card.querySelector("p").textContent = t.statusCards[index][1];
  });

  setText("#roadmap h2", t.roadmapTitle);
  setText("#roadmap .section-head p", t.roadmapIntro);
  setText("#roadmap .section-head .pill", t.v1Incomplete);
  document.querySelectorAll("#roadmap .roadmap .card").forEach((card, index) => {
    card.querySelector(".eyebrow").textContent = t.roadmapCards[index][0];
    card.querySelector("h3").textContent = t.roadmapCards[index][1];
    card.querySelector("p").textContent = t.roadmapCards[index][2];
  });

  setText("#technical h2", t.technicalTitle);
  setText("#technical > p", t.technicalIntro);
  document.querySelectorAll("#technical .status-card").forEach((card, index) => {
    card.querySelector("h3").textContent = t.technicalCards[index][0];
    card.querySelector("p").textContent = t.technicalCards[index][1];
  });
  setHtml("#technical .callout", t.versionRule);

  setText("#privacy h2", t.privacyTitle);
  setText("#privacy > p", t.privacyIntro);
  document.querySelectorAll("#privacy .integrity .card").forEach((card, index) => {
    card.querySelector("h3").textContent = t.privacyCards[index][0];
    card.querySelector("p").textContent = t.privacyCards[index][1];
  });

  const purpose = document.querySelector("#privacy + section");
  purpose.querySelector("h2").textContent = t.purposeTitle;
  purpose.querySelector("p").textContent = t.purposeDesc;
  document.querySelector("footer").textContent = t.footer;

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  });
  try { localStorage.setItem("pengutactic-language", lang); } catch (_) { /* storage can be unavailable */ }
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

let savedLanguage = null;
try { savedLanguage = localStorage.getItem("pengutactic-language"); } catch (_) { /* storage can be unavailable */ }
applyLanguage(savedLanguage === "fr" ? "fr" : "en");
