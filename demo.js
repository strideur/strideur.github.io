const demoRoot = document.querySelector("#nova-demo");
const launcher = demoRoot.querySelector(".mock-launcher");
const search = demoRoot.querySelector("#demo-search");
const sections = demoRoot.querySelector("#demo-sections");
const statusText = demoRoot.querySelector("#demo-status");
const selectionHint = demoRoot.querySelector("#demo-selection-hint");
const tabs = [...demoRoot.querySelectorAll(".tab")];
const settingsButton = demoRoot.querySelector("#demo-settings-button");
const settingsPanel = demoRoot.querySelector("#demo-settings-panel");
const settingsClose = demoRoot.querySelector("#demo-settings-close");
const settingsTitle = demoRoot.querySelector("#demo-settings-title");
const settingsSubtitle = demoRoot.querySelector("#demo-settings-subtitle");
const settingsNav = [...demoRoot.querySelectorAll(".settings-nav-item")];
const settingsPages = [...demoRoot.querySelectorAll(".settings-page")];
const calcCard = demoRoot.querySelector("#demo-calc-card");
const calcExpression = demoRoot.querySelector("#demo-calc-expression");
const calcResult = demoRoot.querySelector("#demo-calc-result");
const webCard = demoRoot.querySelector("#demo-web-card");
const webQuery = demoRoot.querySelector("#demo-web-query");
const aiPanel = demoRoot.querySelector("#demo-ai-panel");
const aiMessages = demoRoot.querySelector("#demo-ai-messages");
const aiProvider = demoRoot.querySelector("#demo-ai-provider");
const toast = demoRoot.querySelector("#demo-toast");
const languageList = demoRoot.querySelector("#demo-language-list");
const languageSearch = demoRoot.querySelector("#demo-language-search");

const apps = [
  ["Discord", "Applications", "app", "DS", "#6477ff", "#9b6dff"],
  ["Opera GX", "Applications", "app", "OP", "#ff4a70", "#6324ff"],
  ["Spotify", "Applications", "app", "SP", "#1ed760", "#0b8f45"],
  ["Visual Studio Code", "Applications", "app", "VS", "#2497e3", "#113d72"],
  ["Steam", "Applications", "app", "ST", "#1c75bc", "#0d1f3a"],
  ["Parametres", "Nova Command", "app", "SE", "#d7dde7", "#636b78"],
  ["Elden Ring", "Steam Library", "game", "ER", "#d7a64b", "#332112"],
  ["Minecraft", "Xbox App", "game", "MC", "#61c36d", "#2f5d36"],
  ["Rocket League", "Epic Games", "game", "RL", "#48a6ff", "#1c3267"],
  ["Counter-Strike 2", "Steam Library", "game", "CS", "#ffb65c", "#643719"],
  ["Roblox Player", "User Apps", "game", "RB", "#d9dee6", "#4a5565"],
  ["Nova Assistant", "Mode IA", "recent", "AI", "#9df2d0", "#315c4d"],
  ["YouTube", "Recherche web", "recent", "YT", "#ff3b3b", "#7b1212"],
  ["Documents", "Fichiers", "recent", "DC", "#ffd16f", "#9b6a19"]
];

const labels = {
  fr: {
    placeholder: "Rechercher une app, un jeu, un calcul ou le web...",
    all: "Tout",
    app: "Apps",
    game: "Jeux",
    recent: "Recents",
    status: "Demo PC - {count} elements",
    select: "Selectionnez une application",
    settings: "Parametres",
    appearance: "Apparence",
    shortcuts: "Raccourcis",
    language: "Langue",
    simulated: "{name} selectionne. Dans la vraie app, Entree l'ouvrirait.",
    blocked: "Simulation seulement : aucune vraie app n'est ouverte depuis le site.",
    web: "Recherche web simulee",
    ai: "Mode IA demo active",
    calc: "Resultat copie dans la vraie app"
  },
  en: {
    placeholder: "Search an app, game, calculation or the web...",
    all: "All",
    app: "Apps",
    game: "Games",
    recent: "Recent",
    status: "Demo PC - {count} items",
    select: "Select an application",
    settings: "Settings",
    appearance: "Appearance",
    shortcuts: "Shortcuts",
    language: "Language",
    simulated: "{name} selected. In the real app, Enter would open it.",
    blocked: "Demo only: no real application is opened from the website.",
    web: "Simulated web search",
    ai: "Demo AI mode enabled",
    calc: "Result copied in the real app"
  },
  es: {
    placeholder: "Buscar una app, juego, calculo o web...",
    all: "Todo",
    app: "Apps",
    game: "Juegos",
    recent: "Recientes",
    status: "Demo PC - {count} elementos",
    select: "Selecciona una aplicacion",
    settings: "Ajustes",
    appearance: "Apariencia",
    shortcuts: "Atajos",
    language: "Idioma",
    simulated: "{name} seleccionado. En la app real, Enter lo abriria.",
    blocked: "Solo demo: ninguna app real se abre desde el sitio.",
    web: "Busqueda web simulada",
    ai: "Modo IA demo activo",
    calc: "Resultado copiado en la app real"
  },
  de: {
    placeholder: "App, Spiel, Rechnung oder Web suchen...",
    all: "Alles",
    app: "Apps",
    game: "Spiele",
    recent: "Zuletzt",
    status: "Demo PC - {count} Elemente",
    select: "Anwendung auswaehlen",
    settings: "Einstellungen",
    appearance: "Darstellung",
    shortcuts: "Tastenkurzel",
    language: "Sprache",
    simulated: "{name} ausgewaehlt. In der echten App wuerde Enter es oeffnen.",
    blocked: "Nur Demo: keine echte App wird von der Website geoeffnet.",
    web: "Simulierte Websuche",
    ai: "Demo KI-Modus aktiv",
    calc: "Ergebnis in der echten App kopiert"
  },
  it: {
    placeholder: "Cerca app, gioco, calcolo o web...",
    all: "Tutto",
    app: "App",
    game: "Giochi",
    recent: "Recenti",
    status: "Demo PC - {count} elementi",
    select: "Seleziona un'applicazione",
    settings: "Impostazioni",
    appearance: "Aspetto",
    shortcuts: "Scorciatoie",
    language: "Lingua",
    simulated: "{name} selezionato. Nell'app reale Invio lo aprirebbe.",
    blocked: "Solo demo: nessuna app reale viene aperta dal sito.",
    web: "Ricerca web simulata",
    ai: "Modalita IA demo attiva",
    calc: "Risultato copiato nell'app reale"
  },
  pt: {
    placeholder: "Pesquisar app, jogo, calculo ou web...",
    all: "Tudo",
    app: "Apps",
    game: "Jogos",
    recent: "Recentes",
    status: "Demo PC - {count} itens",
    select: "Selecione um aplicativo",
    settings: "Definicoes",
    appearance: "Aparencia",
    shortcuts: "Atalhos",
    language: "Idioma",
    simulated: "{name} selecionado. No app real, Enter abriria.",
    blocked: "Apenas demo: nenhum app real e aberto pelo site.",
    web: "Pesquisa web simulada",
    ai: "Modo IA demo ativo",
    calc: "Resultado copiado no app real"
  },
  nl: {
    placeholder: "Zoek app, game, berekening of web...",
    all: "Alles",
    app: "Apps",
    game: "Games",
    recent: "Recent",
    status: "Demo PC - {count} items",
    select: "Selecteer een applicatie",
    settings: "Instellingen",
    appearance: "Uiterlijk",
    shortcuts: "Sneltoetsen",
    language: "Taal",
    simulated: "{name} geselecteerd. In de echte app zou Enter openen.",
    blocked: "Alleen demo: er wordt geen echte app geopend vanaf de site.",
    web: "Gesimuleerde webzoekopdracht",
    ai: "Demo AI-modus actief",
    calc: "Resultaat gekopieerd in de echte app"
  }
};

const languages = [
  ["fr", "Francais", "France"],
  ["en", "English", "United States"],
  ["es", "Espanol", "Espana"],
  ["de", "Deutsch", "Deutschland"],
  ["it", "Italiano", "Italia"],
  ["pt", "Portugues", "Portugal"],
  ["nl", "Nederlands", "Nederland"],
  ["ja", "Japanese", "Japan"],
  ["ko", "Korean", "Korea"],
  ["ar", "Arabic", "Arabic"]
];

let view = "all";
let locale = "fr";
let selectedId = "";
let toastTimer = 0;

function t(key, vars = {}) {
  const table = labels[locale] || labels.fr;
  return (table[key] || labels.fr[key] || key).replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? "");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

function safe(text) {
  return String(text).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[char]);
}

function calcValue(text) {
  if (!/^[\d\s+\-*/().]+$/.test(text)) return null;
  try {
    const value = Function(`"use strict"; return (${text})`)();
    return Number.isFinite(value) ? value : null;
  } catch {
    return null;
  }
}

function filteredApps() {
  const query = search.value.trim().toLowerCase();
  if (view === "app") return apps.filter((item) => item[2] === "app");
  if (view === "game") return apps.filter((item) => item[2] === "game");
  if (view === "recent") return apps.filter((item) => item[2] === "recent");
  if (!query || calcValue(query) !== null || query.includes("/")) return apps;
  return apps.filter((item) => `${item[0]} ${item[1]} ${item[2]}`.toLowerCase().includes(query));
}

function sectionFor(title, items) {
  return `
    <section class="mock-section">
      <header class="section-header">
        <span>${safe(title)}</span>
        <span class="section-count">${items.length}</span>
      </header>
      <div class="tile-grid">
        ${items.map((item) => `
          <button class="tile ${selectedId === item[0] ? "is-selected" : ""}" type="button" data-name="${safe(item[0])}">
            <span class="tile-icon" style="--icon-a:${item[4]}; --icon-b:${item[5]};">${safe(item[3])}</span>
            <span class="tile-label">${safe(item[0])}</span>
            <span class="tile-source">${safe(item[1])}</span>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderTiles() {
  const query = search.value.trim();
  const calc = calcValue(query);
  const isWeb = query.includes("/") && calc === null;

  calcCard.hidden = calc === null;
  webCard.hidden = !isWeb;
  aiPanel.hidden = true;
  launcher.classList.remove("is-ai-mode");
  aiProvider.hidden = true;

  if (calc !== null) {
    calcExpression.textContent = query;
    calcResult.textContent = calc;
  }

  if (isWeb) {
    webQuery.textContent = query.split("/").map((part) => part.trim()).filter(Boolean).slice(0, 2).join(" + ");
  }

  const items = filteredApps();
  const groups = [];
  if (view === "all") {
    groups.push(["Suggestions", items.slice(0, 6)]);
    groups.push(["Applications", apps.filter((item) => item[2] === "app").slice(0, 6)]);
    groups.push(["Jeux", apps.filter((item) => item[2] === "game").slice(0, 6)]);
  } else {
    groups.push([tabs.find((tab) => tab.dataset.view === view)?.textContent || "Resultats", items]);
  }

  sections.innerHTML = groups.filter((group) => group[1].length).map((group) => sectionFor(group[0], group[1])).join("");
  sections.querySelectorAll(".tile").forEach((tile) => {
    tile.addEventListener("click", () => {
      selectedId = tile.dataset.name;
      selectionHint.textContent = selectedId;
      renderTiles();
      showToast(t("simulated", { name: selectedId }));
    });
  });
  statusText.textContent = t("status", { count: apps.length });
}

function openAiMode() {
  launcher.classList.add("is-ai-mode");
  aiPanel.hidden = false;
  calcCard.hidden = true;
  webCard.hidden = true;
  aiProvider.hidden = false;
  search.value = search.value || "demande a Nova";
  showToast(t("ai"));
}

function sendAiDemoMessage() {
  const text = search.value.trim() || "Que peux-tu faire ?";
  aiMessages.insertAdjacentHTML("beforeend", `
    <article class="ai-message user">
      <strong>TOI</strong>
      <p>${safe(text)}</p>
    </article>
    <article class="ai-message assistant">
      <strong>NOVA ASSISTANT</strong>
      <p>Je peux preparer une action Nova dans la vraie app. Ici, je te montre seulement le rendu pour proteger ton PC.</p>
    </article>
  `);
  aiMessages.scrollTop = aiMessages.scrollHeight;
  search.value = "";
}

function selectSettingsPage(page) {
  const titles = {
    appearance: [t("appearance"), "Ajuste le style de cette demo."],
    shortcuts: [t("shortcuts"), "Apercu des touches comme dans Nova."],
    language: [t("language"), "Change les textes principaux de la demo."]
  };
  const meta = titles[page] || titles.appearance;
  settingsTitle.textContent = meta[0];
  settingsSubtitle.textContent = meta[1];
  settingsNav.forEach((button) => button.classList.toggle("is-active", button.dataset.settingsSection === page));
  settingsPages.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.settingsPage === page));
}

function setSettingsOpen(open) {
  settingsPanel.hidden = !open;
  settingsButton.classList.toggle("is-active", open);
  if (open) selectSettingsPage("appearance");
}

function renderLanguages() {
  const query = (languageSearch.value || "").trim().toLowerCase();
  const items = languages.filter((item) => `${item[0]} ${item[1]} ${item[2]}`.toLowerCase().includes(query));
  languageList.innerHTML = items.map((item) => `
    <button class="language-option ${locale === item[0] ? "is-selected" : ""}" type="button" data-locale="${item[0]}">
      <span><strong>${safe(item[1])}</strong><small>${safe(item[2])}</small></span>
      <em>${item[0].toUpperCase()}</em>
    </button>
  `).join("");
}

function applyLocale(nextLocale) {
  locale = labels[nextLocale] ? nextLocale : "fr";
  search.placeholder = t("placeholder");
  settingsButton.setAttribute("title", t("settings"));
  settingsButton.setAttribute("aria-label", t("settings"));
  const navLabels = { appearance: "appearance", shortcuts: "shortcuts", language: "language" };
  settingsNav.forEach((button) => {
    const span = button.querySelector("span");
    if (span) span.textContent = t(navLabels[button.dataset.settingsSection] || button.dataset.settingsSection);
  });
  tabs.forEach((tab) => {
    tab.textContent = t(tab.dataset.view);
  });
  selectionHint.textContent = t("select");
  selectSettingsPage(demoRoot.querySelector(".settings-nav-item.is-active")?.dataset.settingsSection || "appearance");
  renderLanguages();
  renderTiles();
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    view = tab.dataset.view;
    tabs.forEach((item) => item.classList.toggle("is-active", item === tab));
    renderTiles();
  });
});

search.addEventListener("input", () => {
  if (!launcher.classList.contains("is-ai-mode")) renderTiles();
});

search.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    event.preventDefault();
    openAiMode();
  }
  if (event.key === "Enter") {
    event.preventDefault();
    if (launcher.classList.contains("is-ai-mode")) {
      sendAiDemoMessage();
    } else if (calcValue(search.value.trim()) !== null) {
      showToast(t("calc"));
    } else if (search.value.includes("/")) {
      showToast(t("web"));
    } else {
      showToast(t("blocked"));
    }
  }
  if (event.key === "Escape") {
    launcher.classList.remove("is-ai-mode");
    aiPanel.hidden = true;
    aiProvider.hidden = true;
    renderTiles();
  }
});

demoRoot.querySelector("#demo-refresh").addEventListener("click", () => showToast("Rescan fictif termine."));
demoRoot.querySelectorAll(".shortcut-list button").forEach((button) => {
  button.addEventListener("click", () => showToast("Raccourci modifiable dans la vraie app Nova."));
});
webCard.addEventListener("click", () => showToast(t("web")));
demoRoot.querySelector("#demo-ai-reset").addEventListener("click", () => {
  aiMessages.innerHTML = `
    <article class="ai-message assistant">
      <strong>NOVA ASSISTANT</strong>
      <p>Nouvelle conversation demo. Rien n'est envoye a une IA depuis cette page.</p>
    </article>
  `;
});

settingsButton.addEventListener("click", () => setSettingsOpen(settingsPanel.hidden));
settingsClose.addEventListener("click", () => setSettingsOpen(false));
settingsNav.forEach((button) => button.addEventListener("click", () => selectSettingsPage(button.dataset.settingsSection)));

demoRoot.querySelectorAll("[data-demo-theme]").forEach((button) => {
  button.addEventListener("click", () => {
    demoRoot.dataset.theme = button.dataset.demoTheme;
    demoRoot.querySelectorAll("[data-demo-theme]").forEach((item) => item.classList.toggle("is-selected", item === button));
  });
});

demoRoot.querySelector("#demo-icon-size").addEventListener("input", (event) => {
  demoRoot.style.setProperty("--tile-icon-size", `${event.target.value}px`);
});

demoRoot.querySelectorAll("[data-demo-density]").forEach((button) => {
  button.addEventListener("click", () => {
    demoRoot.classList.remove("density-compact", "density-large");
    if (button.dataset.demoDensity !== "normal") demoRoot.classList.add(`density-${button.dataset.demoDensity}`);
    demoRoot.querySelectorAll("[data-demo-density]").forEach((item) => item.classList.toggle("is-selected", item === button));
  });
});

languageSearch.addEventListener("input", renderLanguages);
languageList.addEventListener("click", (event) => {
  const option = event.target.closest("[data-locale]");
  if (!option) return;
  applyLocale(option.dataset.locale);
  showToast(`Langue demo: ${option.dataset.locale.toUpperCase()}`);
});

applyLocale("fr");
renderTiles();
