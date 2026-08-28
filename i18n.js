const translations = {
  en: {
    nav: ["Status", "Roadmap", "Technical scope", "Privacy"],
    badge: "V1.7 · Ladder Intelligence",
    activeV1: "V1 in active development",
    lead: "A private Teamfight Tactics data-engineering and machine-learning research project focused on rigorous post-game analysis, longitudinal ladder intelligence, and reproducible player-level evidence.",
    heroNote: "<strong>Current focus:</strong> Set 18 longitudinal acquisition. PenguTactic is still in <strong>V1</strong>; the end-to-end personalized post-game coach required to close V1 has not been completed.",
    metrics: [
      "Set 18 players currently tracked in the longitudinal cohort",
      "canonical Ranked Set 18 matches",
      "canonical participant rows across those matches",
      "candidate Match-v1 IDs in the frozen historical universe",
      "historical IDs not yet downloaded and still to drain"
    ],
    statusTitle: "Current project status",
    statusIntro: "Only work integrated into the main branch is treated as completed. Experimental, review-stage, or deployment work is explicitly kept separate.",
    phaseActive: "Phase 1.7 active",
    statusCards: [
      ["C1 — Longitudinal Core", "Completed. Versioned snapshots, private locator storage, append-only observations, and delta computation are integrated."],
      ["C2 — Multi-region Baseline", "Completed. The initial Set 18 baseline spans KR, VN2, EUW1, and NA1 and seeded the longitudinal cohort."],
      ["C3 — Continuous Match Watch", "Completed at core level. Adaptive scheduling, lobby deduplication, strict Set/Ranked gates, provenance, and fail-closed validation are integrated."],
      ["C4 — Rank remeasurement", "Planned next. Repeated snapshots will measure promotions, demotions, Apex persistence, and longitudinal rank movement."]
    ],
    roadmapTitle: "V1 roadmap",
    roadmapIntro: "The roadmap is acquisition-first: establish trustworthy longitudinal evidence before the personalized post-game coaching layer is considered complete.",
    v1Incomplete: "V1 not complete",
    roadmapCards: [
      ["Done", "C1 · Core", "Snapshot contracts, private identity mapping, append-only storage, and longitudinal deltas."],
      ["Done", "C2 · Baseline", "Multi-region Set 18 cohort initialization and baseline ladder observations."],
      ["Done", "C3 · Watcher", "Continuous match observation with strict canonical admission and acquisition provenance."],
      ["Planned next", "C4 · Remeasure", "Periodic rank snapshots across Set 18 to build actual trajectories instead of one-time ladder states."]
    ],
    technicalTitle: "Technical scope",
    technicalIntro: "PenguTactic deliberately distinguishes an integrated acquisition core from deployment and future V1 capabilities.",
    technicalCards: [
      ["Set 18 historical backlog drain", "In progress. The historical universe is frozen at 3,222 candidate Match-v1 IDs; 2,564 IDs remain to be downloaded and classified."],
      ["Persistent rejection index — Integrated", "Reusable non-canonical classifications are persisted with safeguards that prevent unsafe reuse outside their intended acquisition scope."],
      ["Permanent Set 18 runtime", "Planned. Long-running operational deployment and recovery work remains before permanent unattended operation."],
      ["Set 17 Historical Grabber", "Planned. Historical Set 17 acquisition remains gated by the mature-corpus audit and a bounded archive canary."],
      ["PINNED_PLAYER", "Personal longitudinal tracking is planned within V1."]
    ],
    versionRule: "<strong>Versioning rule:</strong> PenguTactic is not V2. V2 begins only after the operational end-to-end personalized post-game coach closes V1.",
    privacyTitle: "Data integrity & privacy",
    privacyIntro: "The project is designed around explicit provenance, fail-closed admission, pseudonymized scientific data, and strict separation between factual collection and expert qualification.",
    privacyCards: [
      ["Canonical gates", "Current Set 18 canonical data is restricted to standard Ranked TFT (<code>queue_id == 1100</code>) and <code>set_number == 18</code>."],
      ["Failure isolation", "Invalid or non-canonical captures remain quarantined instead of silently contaminating canonical datasets."],
      ["Private identity boundary", "Raw player identities and credentials stay in private runtime storage; scientific outputs use pseudonymized identifiers."]
    ],
    purposeTitle: "Purpose",
    purposeDesc: "PenguTactic is developed for personal/private research into TFT post-game analysis. It is not intended to provide real-time prescriptive in-game decision making. The public website is a status and product overview; application code, datasets, models, credentials, and private runtime data remain outside this public repository.",
    footer: "Status snapshot: 28 August 2026. PenguTactic is an independent project and is not endorsed by Riot Games. Riot Games, Teamfight Tactics, and related marks are trademarks or registered trademarks of Riot Games, Inc."
  },
  fr: {
    nav: ["Statut", "Roadmap", "Périmètre technique", "Confidentialité"],
    badge: "V1.7 · Intelligence du ladder",
    activeV1: "V1 en développement actif",
    lead: "Un projet privé d’ingénierie des données et de recherche en machine learning appliqué à Teamfight Tactics, centré sur l’analyse post-partie rigoureuse, l’intelligence longitudinale du ladder et des preuves reproductibles au niveau joueur.",
    heroNote: "<strong>Focus actuel :</strong> acquisition longitudinale du Set 18. PenguTactic est toujours en <strong>V1</strong> ; le coach post-partie personnalisé de bout en bout nécessaire pour clôturer la V1 n’est pas encore terminé.",
    metrics: [
      "joueurs du Set 18 actuellement suivis dans la cohorte longitudinale",
      "matchs Ranked Set 18 canoniques",
      "lignes participants canoniques sur ces matchs",
      "IDs Match-v1 candidats dans l’univers historique figé",
      "IDs historiques jamais téléchargés restant à drainer"
    ],
    statusTitle: "État actuel du projet",
    statusIntro: "Seul le travail intégré à la branche main est considéré comme terminé. Les travaux expérimentaux, en review ou liés au déploiement restent explicitement séparés.",
    phaseActive: "Phase 1.7 active",
    statusCards: [
      ["C1 — Cœur longitudinal", "Terminé. Les snapshots versionnés, le stockage privé des localisateurs, les observations append-only et le calcul des deltas sont intégrés."],
      ["C2 — Baseline multi-régions", "Terminé. La baseline initiale du Set 18 couvre KR, VN2, EUW1 et NA1 et a amorcé la cohorte longitudinale."],
      ["C3 — Surveillance continue des matchs", "Terminé au niveau du cœur. L’ordonnancement adaptatif, la déduplication des lobbies, les verrous stricts Set/Ranked, la provenance et la validation fail-closed sont intégrés."],
      ["C4 — Remesure du rang", "Planifié ensuite. Des snapshots répétés mesureront promotions, relégations, persistance Apex et évolution longitudinale du rang."]
    ],
    roadmapTitle: "Roadmap V1",
    roadmapIntro: "La roadmap priorise l’acquisition : établir des preuves longitudinales fiables avant de considérer la couche de coaching post-partie personnalisé comme terminée.",
    v1Incomplete: "V1 non terminée",
    roadmapCards: [
      ["Terminé", "C1 · Cœur", "Contrats de snapshots, correspondance d’identité privée, stockage append-only et deltas longitudinaux."],
      ["Terminé", "C2 · Baseline", "Initialisation multi-régions de la cohorte Set 18 et observations initiales du ladder."],
      ["Terminé", "C3 · Watcher", "Observation continue des matchs avec admission canonique stricte et provenance d’acquisition."],
      ["Planifié ensuite", "C4 · Remesure", "Snapshots périodiques du rang sur le Set 18 afin de construire de vraies trajectoires plutôt que des états ponctuels du ladder."]
    ],
    technicalTitle: "Périmètre technique",
    technicalIntro: "PenguTactic distingue volontairement le cœur d’acquisition intégré du déploiement et des futures capacités de la V1.",
    technicalCards: [
      ["Drain de l’historique Set 18", "En cours. L’univers historique est figé à 3 222 IDs Match-v1 candidats ; 2 564 IDs restent à télécharger et classifier."],
      ["Index de rejet persistant — Intégré", "Les classifications non canoniques réutilisables sont persistées avec des garde-fous empêchant leur réutilisation hors du périmètre d’acquisition prévu."],
      ["Runtime permanent Set 18", "Planifié. Le déploiement opérationnel longue durée et la récupération après incident restent à finaliser avant une exécution permanente sans surveillance."],
      ["Collecteur historique Set 17", "Planifié. L’acquisition historique du Set 17 reste conditionnée par l’audit du corpus mature et un canary d’archive borné."],
      ["PINNED_PLAYER", "Le suivi longitudinal personnel est planifié dans la V1."]
    ],
    versionRule: "<strong>Règle de version :</strong> PenguTactic n’est pas en V2. La V2 ne commencera qu’après la clôture de la V1 par un coach post-partie personnalisé opérationnel de bout en bout.",
    privacyTitle: "Intégrité des données & confidentialité",
    privacyIntro: "Le projet repose sur une provenance explicite, une admission fail-closed, des données scientifiques pseudonymisées et une séparation stricte entre collecte factuelle et qualification experte.",
    privacyCards: [
      ["Verrous canoniques", "Les données canoniques actuelles du Set 18 sont limitées au TFT Ranked standard (<code>queue_id == 1100</code>) et à <code>set_number == 18</code>."],
      ["Isolation des échecs", "Les captures invalides ou non canoniques restent en quarantaine au lieu de contaminer silencieusement les datasets canoniques."],
      ["Frontière d’identité privée", "Les identités brutes des joueurs et les identifiants sensibles restent dans le stockage privé ; les sorties scientifiques utilisent des identifiants pseudonymisés."]
    ],
    purposeTitle: "Objectif",
    purposeDesc: "PenguTactic est développé pour de la recherche personnelle et privée autour de l’analyse post-partie TFT. Il n’est pas destiné à fournir des décisions prescriptives en temps réel pendant une partie. Le site public présente uniquement le produit et son état ; le code applicatif, les datasets, les modèles, les identifiants sensibles et les données privées restent hors de ce dépôt public.",
    footer: "État au 28 août 2026. PenguTactic est un projet indépendant et n’est pas approuvé par Riot Games. Riot Games, Teamfight Tactics et les marques associées sont des marques commerciales ou déposées de Riot Games, Inc."
  }
};

const pageMeta = {
  en: {
    title: "PenguTactic — V1.7 Ladder Intelligence",
    description: "PenguTactic is a private Teamfight Tactics data-engineering and machine-learning research project. V1.7 focuses on longitudinal ladder intelligence and Set 18 acquisition.",
    navLabel: "Primary navigation",
    languageLabel: "Language",
    statsLabel: "Current Set 18 acquisition metrics"
  },
  fr: {
    title: "PenguTactic — V1.7 Intelligence du ladder",
    description: "PenguTactic est un projet privé d’ingénierie des données et de recherche en machine learning appliqué à Teamfight Tactics. La V1.7 se concentre sur l’intelligence longitudinale du ladder et l’acquisition du Set 18.",
    navLabel: "Navigation principale",
    languageLabel: "Langue",
    statsLabel: "Métriques actuelles d’acquisition du Set 18"
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
    const title = card.querySelector("h3");
    const description = card.querySelector("p");
    if (index === 4) title.innerHTML = "<code>PINNED_PLAYER</code>";
    else title.textContent = t.technicalCards[index][0];
    description.textContent = t.technicalCards[index][1];
  });
  setHtml("#technical .callout", t.versionRule);

  setText("#privacy h2", t.privacyTitle);
  setText("#privacy > p", t.privacyIntro);
  document.querySelectorAll("#privacy .integrity .card").forEach((card, index) => {
    card.querySelector("h3").textContent = t.privacyCards[index][0];
    if (index === 0) card.querySelector("p").innerHTML = t.privacyCards[index][1];
    else card.querySelector("p").textContent = t.privacyCards[index][1];
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
