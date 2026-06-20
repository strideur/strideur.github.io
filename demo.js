const demoData = {
  apps: {
    value: "discord",
    label: "Suggestions",
    result: "Pret a lancer",
    hint: "Enter",
    items: [
      ["DS", "Discord", "Application fictive", "App"],
      ["OP", "Opera GX", "Navigateur fictif", "Web"],
      ["ST", "Steam", "Bibliotheque de jeux", "Game"],
      ["VS", "Visual Studio Code", "Editeur de code", "Dev"]
    ]
  },
  web: {
    value: "youtube / github",
    label: "Recherche web",
    result: "2 onglets prepares",
    hint: "Go",
    items: [
      ["YT", "Rechercher YouTube", "Onglet fictif: youtube", "Web"],
      ["GH", "Rechercher GitHub", "Onglet fictif: github", "Web"],
      ["GG", "Google par defaut", "Aucune vraie recherche lancee", "Safe"]
    ]
  },
  calc: {
    value: "342 * 18 + 72",
    label: "Calculatrice",
    result: "Resultat: 6228",
    hint: "=",
    items: [
      ["=", "342 * 18 + 72", "6228", "Result"],
      ["CP", "Copier le resultat", "Action demo seulement", "Action"]
    ]
  },
  ai: {
    value: "ouvre discord et cherche youtube",
    label: "Nova Assistant",
    result: "Plan d'action pret",
    hint: "Tab",
    items: [
      ["AI", "Nova comprend la demande", "Ouvrir une app + preparer une recherche web", "IA"],
      ["1", "Action 1", "Discord serait lance dans la vraie app", "App"],
      ["2", "Action 2", "YouTube serait recherche dans le navigateur", "Web"]
    ]
  }
};

const searchInput = document.querySelector("#demo-search");
const results = document.querySelector("#demo-results");
const label = document.querySelector("#demo-label");
const result = document.querySelector("#demo-result");
const hint = document.querySelector("#demo-hint");
const tabs = [...document.querySelectorAll(".demo-tab")];

function renderDemo(mode) {
  const data = demoData[mode] || demoData.apps;
  searchInput.value = data.value;
  label.textContent = data.label;
  result.textContent = data.result;
  hint.textContent = data.hint;
  results.innerHTML = data.items.map((item, index) => `
    <div class="demo-item ${index === 0 ? "active" : ""}">
      <span class="demo-icon">${item[0]}</span>
      <span class="demo-text">
        <strong class="demo-title">${item[1]}</strong>
        <small class="demo-subtitle">${item[2]}</small>
      </span>
      <span class="demo-pill">${item[3]}</span>
    </div>
  `).join("");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    renderDemo(tab.dataset.mode);
  });
});

searchInput.addEventListener("input", () => {
  const text = searchInput.value.trim();
  if (!text) {
    result.textContent = "Tape une commande";
    return;
  }

  if (/^[\d\s+\-*/().]+$/.test(text)) {
    try {
      const value = Function(`"use strict"; return (${text})`)();
      result.textContent = Number.isFinite(value) ? `Resultat: ${value}` : "Calcul invalide";
    } catch {
      result.textContent = "Calcul en attente";
    }
    return;
  }

  if (text.includes("/")) {
    result.textContent = "2 onglets prepares";
    return;
  }

  result.textContent = "Recherche en direct";
});

renderDemo("apps");
