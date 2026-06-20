const demoModes = {
  apps: {
    value: "discord",
    label: "Applications",
    result: "Pret a lancer",
    hint: "Enter",
    source: "Apps Windows",
    action: "Lancement simule",
    items: [
      ["DS", "Discord", "Application de discussion", "App", "#6477ff", "#9b6dff"],
      ["OP", "Opera GX", "Navigateur gaming", "Browser", "#ff4a70", "#6324ff"],
      ["SP", "Spotify", "Musique et playlists", "App", "#1ed760", "#0b8f45"],
      ["VS", "Visual Studio Code", "Editeur de code", "Dev", "#2497e3", "#113d72"],
      ["DC", "Documents", "Fichiers recents", "Folder", "#ffd16f", "#9b6a19"],
      ["ST", "Steam", "Bibliotheque locale", "Game", "#1c75bc", "#0d1f3a"],
      ["PH", "Photos", "Galerie Windows", "Media", "#8ecaff", "#776bff"],
      ["SE", "Parametres", "Theme et raccourcis", "System", "#9df2d0", "#315c4d"]
    ]
  },
  games: {
    value: "elden",
    label: "Jeux",
    result: "Bibliotheque fictive",
    hint: "Play",
    source: "Jeux detectes",
    action: "Ouverture simulee",
    items: [
      ["ER", "Elden Ring", "RPG action", "Game", "#d7a64b", "#332112"],
      ["MC", "Minecraft", "Sandbox", "Game", "#61c36d", "#2f5d36"],
      ["RL", "Rocket League", "Arcade sport", "Game", "#48a6ff", "#1c3267"],
      ["FN", "Fortnite", "Battle royale", "Game", "#b788ff", "#3042a6"],
      ["CS", "Counter-Strike 2", "FPS competitif", "Game", "#ffb65c", "#643719"],
      ["RB", "Roblox", "Plateforme jeux", "Game", "#d9dee6", "#4a5565"],
      ["GI", "Genshin Impact", "Aventure", "Game", "#7be7ff", "#24516a"],
      ["EP", "Epic Games", "Launcher", "Store", "#333846", "#111318"]
    ]
  },
  web: {
    value: "youtube / github",
    label: "Recherche web",
    result: "2 onglets prepares",
    hint: "Go",
    source: "Navigateur par defaut",
    action: "Recherche simulee",
    items: [
      ["YT", "YouTube", "Recherche video", "Web", "#ff3b3b", "#7b1212"],
      ["GH", "GitHub", "Recherche code", "Web", "#f5f5f5", "#343942"],
      ["GG", "Google", "Recherche globale", "Web", "#5da8ff", "#34a853"],
      ["BI", "Bing", "Recherche Microsoft", "Web", "#4ec9c3", "#176c86"],
      ["RD", "Reddit", "Discussions", "Web", "#ff7b46", "#9d2d14"],
      ["TW", "Twitch", "Lives", "Web", "#9146ff", "#44206f"]
    ]
  },
  calc: {
    value: "342 * 18 + 72",
    label: "Calculatrice",
    result: "Resultat: 6228",
    hint: "=",
    source: "Moteur local",
    action: "Copie simulee",
    items: [
      ["=", "342 * 18 + 72", "6228", "Result", "#9df2d0", "#2f6b59"],
      ["%", "20% de 149.99", "29.998", "Result", "#ffd38a", "#8b5620"],
      ["PI", "pi * 42", "131.946", "Result", "#8ecaff", "#255178"],
      ["CP", "Copier le resultat", "Action demo", "Action", "#d8e2f0", "#404754"]
    ]
  },
  ai: {
    value: "ouvre discord et cherche youtube",
    label: "Nova Assistant",
    result: "Plan d'action pret",
    hint: "Tab",
    source: "Nova Assistant",
    action: "Plan simule",
    items: [
      ["AI", "Analyse", "Comprendre la demande", "Step", "#9df2d0", "#315c4d"],
      ["1", "Ouvrir Discord", "Action app simulee", "App", "#6477ff", "#342b9e"],
      ["2", "Chercher YouTube", "Action web simulee", "Web", "#ff3b3b", "#7b1212"],
      ["OK", "Reponse Nova", "Pret a executer dans la vraie app", "IA", "#ffd38a", "#7d501b"]
    ]
  }
};

const searchInput = document.querySelector("#demo-search");
const results = document.querySelector("#demo-results");
const label = document.querySelector("#demo-label");
const result = document.querySelector("#demo-result");
const hint = document.querySelector("#demo-hint");
const tabs = [...document.querySelectorAll(".demo-tab")];
const detailIcon = document.querySelector("#demo-detail-icon");
const detailTitle = document.querySelector("#demo-detail-title");
const detailSubtitle = document.querySelector("#demo-detail-subtitle");
const detailSource = document.querySelector("#demo-detail-source");
const detailAction = document.querySelector("#demo-detail-action");
const toast = document.querySelector("#demo-toast");
const primaryAction = document.querySelector("#demo-primary-action");
const clearAction = document.querySelector("#demo-clear-action");

let currentMode = "apps";
let currentItems = [];

function setDetail(item, modeData) {
  detailIcon.textContent = item[0];
  detailIcon.style.setProperty("--card-a", item[4]);
  detailIcon.style.setProperty("--card-b", item[5]);
  detailTitle.textContent = item[1];
  detailSubtitle.textContent = item[2];
  detailSource.textContent = modeData.source;
  detailAction.textContent = modeData.action;
}

function renderCards(items, modeData) {
  currentItems = items;
  results.innerHTML = items.map((item, index) => `
    <button class="app-card ${index === 0 ? "active" : ""}" type="button" data-index="${index}">
      <span class="app-card-icon" style="--card-a:${item[4]}; --card-b:${item[5]};">${item[0]}</span>
      <strong>${item[1]}</strong>
      <small>${item[3]}</small>
    </button>
  `).join("");

  const cards = [...results.querySelectorAll(".app-card")];
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      cards.forEach((item) => item.classList.remove("active"));
      card.classList.add("active");
      const selected = currentItems[Number(card.dataset.index)];
      setDetail(selected, modeData);
      toast.textContent = `${selected[1]} selectionne. Demo uniquement, rien ne s'ouvre.`;
    });
  });

  if (items[0]) {
    setDetail(items[0], modeData);
  }
}

function renderDemo(mode) {
  currentMode = mode;
  const data = demoModes[mode] || demoModes.apps;
  searchInput.value = data.value;
  label.textContent = data.label;
  result.textContent = data.result;
  hint.textContent = data.hint;
  toast.textContent = "Demo locale : aucune vraie application n'est ouverte.";
  renderCards(data.items, data);
}

function filterCurrentMode() {
  const data = demoModes[currentMode] || demoModes.apps;
  const text = searchInput.value.trim().toLowerCase();

  if (!text) {
    result.textContent = "Tape une commande";
    renderCards(data.items, data);
    return;
  }

  if (/^[\d\s+\-*/().]+$/.test(text)) {
    try {
      const value = Function(`"use strict"; return (${text})`)();
      result.textContent = Number.isFinite(value) ? `Resultat: ${value}` : "Calcul invalide";
      renderCards([["=", text, String(value), "Result", "#9df2d0", "#2f6b59"]], demoModes.calc);
    } catch {
      result.textContent = "Calcul en attente";
    }
    return;
  }

  if (text.includes("/")) {
    result.textContent = "2 onglets prepares";
  } else {
    result.textContent = "Recherche en direct";
  }

  const filtered = data.items.filter((item) => {
    return item[1].toLowerCase().includes(text) || item[2].toLowerCase().includes(text) || item[3].toLowerCase().includes(text);
  });

  renderCards(filtered.length ? filtered : data.items, data);
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    renderDemo(tab.dataset.mode);
  });
});

searchInput.addEventListener("input", filterCurrentMode);

primaryAction.addEventListener("click", () => {
  toast.textContent = `${detailTitle.textContent} aurait ete execute dans l'app installee. Ici c'est bloque expres.`;
});

clearAction.addEventListener("click", () => {
  const activeTab = document.querySelector(".demo-tab.active");
  renderDemo(activeTab?.dataset.mode || "apps");
});

renderDemo("apps");
