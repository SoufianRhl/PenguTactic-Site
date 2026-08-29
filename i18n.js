const translations = {
  en: {
    nav: ["Status", "Roadmap", "Technical scope", "Privacy"],
    badge: "V1.7 · Ladder Intelligence",
    activeV1: "V1 in active development",
    lead: "A Teamfight Tactics analytics and coaching companion currently in prototype development and intended for future public release, focused on rigorous post-game analysis, longitudinal player intelligence, and personalized improvement.",
    heroNote: "<strong>Current focus:</strong> validating trustworthy Set 18 data acquisition and post-game telemetry. PenguTactic is still in <strong>V1</strong>; the complete public-facing personalized coaching experience remains under development.",
    metrics: [
      "Set 18 players currently tracked in the longitudinal cohort",
      "canonical Ranked Set 18 matches",
      "canonical participant rows across those matches",
      "candidate Match-v1 IDs in the frozen historical universe",
      "historical IDs not yet downloaded and still to drain"
    ],
    statusTitle: "Current project status",
    statusIntro: "This public status summarizes validated product capabilities while experimental implementation details, credentials, and private operational infrastructure remain outside the public project surface.",
    phaseActive: "Phase 1.7 active",
    statusCards: [
      ["C1 — Longitudinal Core", "Completed. Versioned snapshots, pseudonymized scientific outputs, append-only observations, and delta computation are validated."],
      ["C2 — Multi-region Baseline", "Completed. The initial Set 18 baseline spans multiple Riot regions and seeds longitudinal player analysis."],
      ["C3 — Continuous Match Watch", "Operationally validated. Adaptive scheduling, lobby deduplication, strict Set/Ranked gates, provenance, and fail-closed validation support continuous acquisition."],
      ["C4 — Rank remeasurement", "Planned next. Repeated snapshots will measure promotions, demotions, Apex persistence, and longitudinal rank movement."]
    ],
    roadmapTitle: "V1 roadmap",
    roadmapIntro: "The roadmap is evidence-first: establish trustworthy longitudinal and post-game data before the personalized coaching layer is considered complete.",
    v1Incomplete: "V1 not complete",
    roadmapCards: [
      ["Done", "C1 · Core", "Snapshot contracts, pseudonymized identity handling, append-only storage, and longitudinal deltas."],
      ["Done", "C2 · Baseline", "Multi-region Set 18 cohort initialization and baseline ladder observations."],
      ["Done", "C3 · Watcher", "Continuous match observation with strict canonical admission and acquisition provenance."],
      ["Planned next", "C4 · Remeasure", "Periodic rank snapshots across Set 18 to build actual trajectories instead of one-time ladder states."]
    ],
    technicalTitle: "Technical scope",
    technicalIntro: "PenguTactic separates public product capabilities from private research data, credentials, and internal operational tooling.",
    technicalCards: [
      ["Set 18 historical coverage", "In progress. Historical match coverage is being expanded and classified through strict canonical validation."],
      ["Persistent rejection index — Integrated", "Reusable non-canonical classifications are persisted with safeguards that prevent unsafe reuse outside their intended acquisition scope."],
      ["Continuous Set 18 acquisition — Operational", "Long-running acquisition has been validated with bounded scheduling, rate-limit handling, provenance, and fail-closed data admission."],
      ["Historical coverage expansion — Planned", "Additional historical coverage remains gated by dataset-quality audits and bounded validation canaries."],
      ["Personalized player analysis — Planned", "Longitudinal player timelines and personalized post-game coaching remain core V1 goals."]
    ],
    versionRule: "<strong>Versioning rule:</strong> PenguTactic remains V1 until the end-to-end personalized post-game coaching experience is operational.",
    privacyTitle: "Data integrity & privacy",
    privacyIntro: "The project is designed around explicit provenance, fail-closed admission, pseudonymized scientific data, and strict separation between factual collection and expert qualification.",
    privacyCards: [
      ["Canonical gates", "Current Set 18 canonical data is restricted to standard Ranked TFT (<code>queue_id == 1100</code>) and <code>set_number == 18</code>."],
      ["Failure isolation", "Invalid or non-canonical captures remain quarantined instead of silently contaminating canonical datasets."],
      ["Private data boundary", "Credentials, raw identities, private research datasets, models, and internal operational tooling are not exposed through this public site."]
    ],
    purposeTitle: "Purpose",
    purposeDesc: "PenguTactic is being developed as a future public Teamfight Tactics post-game analytics and personalized coaching companion. The current version is an early prototype and research environment. It does not provide real-time prescriptive decision-making, opponent scouting, hidden information, or gameplay automation. Application source code, research datasets, models, credentials, and private runtime data are not publicly exposed.",
    footer: "Status snapshot: 29 August 2026. PenguTactic is an independent project and is not endorsed by Riot Games. Riot Games, Teamfight Tactics, and related marks are trademarks or registered trademarks of Riot Games, Inc."
  },
  fr: {
    nav: ["Statut", "Roadmap", "Périmètre technique", "Confidentialité"],
    badge: "V1.7 · Intelligence du ladder",
    activeV1: "V1 en développement actif",
    lead: "Un compagnon d’analyse et de coaching pour Teamfight Tactics, actuellement en phase de prototype et destiné à une future publication publique, centré sur l’analyse post-partie rigoureuse, le suivi longitudinal des joueurs et l’amélioration personnalisée.",
    heroNote: "<strong>Focus actuel :</strong> validation d’une acquisition Set 18 fiable et de la télémétrie post-partie. PenguTactic est toujours en <strong>V1</strong> ; l’expérience complète de coaching personnalisé destinée au public reste en développement.",
    metrics: [
      "joueurs du Set 18 actuellement suivis dans la cohorte longitudinale",
      "matchs Ranked Set 18 canoniques",
      "lignes participants canoniques sur ces matchs",
      "IDs Match-v1 candidats dans l’univers historique figé",
      "IDs historiques jamais téléchargés restant à drainer"
    ],
    statusTitle: "État actuel du projet",
    statusIntro: "Ce statut public résume les capacités validées du produit, tandis que les détails expérimentaux, les identifiants sensibles et l’infrastructure opérationnelle privée restent hors de la surface publique du projet.",
    phaseActive: "Phase 1.7 active",
    statusCards: [
      ["C1 — Cœur longitudinal", "Terminé. Les snapshots versionnés, les sorties scientifiques pseudonymisées, les observations append-only et le calcul des deltas sont validés."],
      ["C2 — Baseline multi-régions", "Terminé. La baseline initiale du Set 18 couvre plusieurs régions Riot et amorce l’analyse longitudinale des joueurs."],
      ["C3 — Surveillance continue des matchs", "Validée opérationnellement. L’ordonnancement adaptatif, la déduplication des lobbies, les verrous stricts Set/Ranked, la provenance et la validation fail-closed soutiennent l’acquisition continue."],
      ["C4 — Remesure du rang", "Planifié ensuite. Des snapshots répétés mesureront promotions, relégations, persistance Apex et évolution longitudinale du rang."]
    ],
    roadmapTitle: "Roadmap V1",
    roadmapIntro: "La roadmap priorise les preuves : établir des données longitudinales et post-partie fiables avant de considérer la couche de coaching personnalisé comme terminée.",
    v1Incomplete: "V1 non terminée",
    roadmapCards: [
      ["Terminé", "C1 · Cœur", "Contrats de snapshots, gestion pseudonymisée des identités, stockage append-only et deltas longitudinaux."],
      ["Terminé", "C2 · Baseline", "Initialisation multi-régions de la cohorte Set 18 et observations initiales du ladder."],
      ["Terminé", "C3 · Watcher", "Observation continue des matchs avec admission canonique stricte et provenance d’acquisition."],
      ["Planifié ensuite", "C4 · Remesure", "Snapshots périodiques du rang sur le Set 18 afin de construire de vraies trajectoires plutôt que des états ponctuels du ladder."]
    ],
    technicalTitle: "Périmètre technique",
    technicalIntro: "PenguTactic sépare les capacités publiques du produit des données de recherche, identifiants sensibles et outils opérationnels internes qui restent privés.",
    technicalCards: [
      ["Couverture historique Set 18", "En cours. La couverture historique est progressivement étendue et classifiée avec une validation canonique stricte."],
      ["Index de rejet persistant — Intégré", "Les classifications non canoniques réutilisables sont persistées avec des garde-fous empêchant leur réutilisation hors du périmètre prévu."],
      ["Acquisition continue Set 18 — Opérationnelle", "L’acquisition longue durée a été validée avec ordonnancement borné, gestion des limites de débit, provenance et admission fail-closed."],
      ["Extension de la couverture historique — Planifiée", "Les extensions historiques supplémentaires restent conditionnées par des audits de qualité du dataset et des canaries de validation bornés."],
      ["Analyse personnalisée des joueurs — Planifiée", "Les timelines longitudinales et le coaching post-partie personnalisé restent des objectifs centraux de la V1."]
    ],
    versionRule: "<strong>Règle de version :</strong> PenguTactic reste en V1 jusqu’à ce que l’expérience de coaching post-partie personnalisé de bout en bout soit opérationnelle.",
    privacyTitle: "Intégrité des données & confidentialité",
    privacyIntro: "Le projet repose sur une provenance explicite, une admission fail-closed, des données scientifiques pseudonymisées et une séparation stricte entre collecte factuelle et qualification experte.",
    privacyCards: [
      ["Verrous canoniques", "Les données canoniques actuelles du Set 18 sont limitées au TFT Ranked standard (<code>queue_id == 1100</code>) et à <code>set_number == 18</code>."],
      ["Isolation des échecs", "Les captures invalides ou non canoniques restent en quarantaine au lieu de contaminer silencieusement les datasets canoniques."],
      ["Frontière des données privées", "Les identifiants sensibles, identités brutes, datasets de recherche privés, modèles et outils opérationnels internes ne sont pas exposés via ce site public."]
    ],
    purposeTitle: "Objectif",
    purposeDesc: "PenguTactic est développé comme un futur compagnon public d’analyse post-partie et de coaching personnalisé pour Teamfight Tactics. La version actuelle reste un prototype et un environnement de recherche. Il ne fournit pas de recommandations prescriptives en temps réel, de scouting adverse, d’informations cachées ni d’automatisation du gameplay. Le code applicatif, les datasets de recherche, les modèles, les identifiants sensibles et les données runtime privées ne sont pas exposés publiquement.",
    footer: "État au 29 août 2026. PenguTactic est un projet indépendant et n’est pas approuvé par Riot Games. Riot Games, Teamfight Tactics et les marques associées sont des marques commerciales ou déposées de Riot Games, Inc."
  }
};

const pageMeta = {
  en: {
    title: "PenguTactic — V1.7 Ladder Intelligence",
    description: "PenguTactic is a Teamfight Tactics analytics and coaching companion in prototype development, intended for future public release and focused on post-game improvement.",
    navLabel: "Primary navigation",
    languageLabel: "Language",
    statsLabel: "Current Set 18 acquisition metrics"
  },
  fr: {
    title: "PenguTactic — V1.7 Intelligence du ladder",
    description: "PenguTactic est un compagnon d’analyse et de coaching Teamfight Tactics en phase de prototype, destiné à une future publication publique et centré sur l’amélioration post-partie.",
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
    card.querySelector("h3").textContent = t.technicalCards[index][0];
    card.querySelector("p").textContent = t.technicalCards[index][1];
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