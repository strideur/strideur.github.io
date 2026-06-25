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
const timeCard = demoRoot.querySelector("#demo-time-card");
const timeExpression = demoRoot.querySelector("#demo-time-expression");
const timeResult = demoRoot.querySelector("#demo-time-result");
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
    calc: "Resultat copie dans la vraie app",
    timeTitle: "Temps",
    timeHint: "Entree copie le resultat",
    timeCopied: "Temps copie dans la vraie app",
    suggestions: "Suggestions",
    applications: "Applications",
    games: "Jeux",
    appearanceSub: "Ajuste le style de cette demo.",
    shortcutsSub: "Apercu des touches comme dans Nova.",
    languageSub: "Change les textes principaux de la demo.",
    appearanceSmall: "Fond, cartes, icones",
    shortcutsSmall: "Ouverture et actions",
    languageSmall: "Pays et traduction",
    autoLanguage: "Langue automatique",
    detectedLanguage: "Langue detectee : Francais",
    useSystemLanguage: "Utiliser la langue du systeme",
    chooseLanguage: "Choisir une langue",
    languageSearch: "Rechercher une langue...",
    calculator: "Calculatrice", calcHint: "Entree copie le resultat", webSearch: "Recherche web", webBrowser: "Navigateur par defaut - simulation",
    aiMode: "Mode IA", aiIntro: "Parle a Nova Assistant", newChat: "Nouvelle discussion", projects: "Projets",
    selectedCount: "{count} selectionnes - Entree pour simuler",
    simulatedMany: "{count} elements simuleraient une ouverture dans la vraie app.",
    aiWelcome: "Je peux simuler l'ouverture d'apps, les recherches web et les reglages, sans toucher a ton PC."
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
    calc: "Result copied in the real app",
    timeTitle: "Time",
    timeHint: "Enter copies the result",
    timeCopied: "Time copied in the real app",
    suggestions: "Suggestions",
    applications: "Applications",
    games: "Games",
    appearanceSub: "Tune this demo style.",
    shortcutsSub: "Shortcut preview like Nova.",
    languageSub: "Change the main demo text.",
    appearanceSmall: "Background, cards, icons",
    shortcutsSmall: "Launch and actions",
    languageSmall: "Country and translation",
    autoLanguage: "Automatic language",
    detectedLanguage: "Detected language: English",
    useSystemLanguage: "Use system language",
    chooseLanguage: "Choose a language",
    languageSearch: "Search a language...",
    calculator: "Calculator", calcHint: "Enter copies the result", webSearch: "Web search", webBrowser: "Default browser - simulation",
    aiMode: "AI mode", aiIntro: "Talk to Nova Assistant", newChat: "New chat", projects: "Projects",
    selectedCount: "{count} selected - Enter to simulate",
    simulatedMany: "{count} items would launch in the real app.",
    aiWelcome: "I can simulate app launches, web searches and settings without touching your PC."
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
    calc: "Resultado copiado en la app real",
    timeTitle: "Tiempo",
    timeHint: "Enter copia el resultado",
    timeCopied: "Tiempo copiado en la app real",
    suggestions: "Sugerencias",
    applications: "Aplicaciones",
    games: "Juegos",
    appearanceSub: "Ajusta el estilo de esta demo.",
    shortcutsSub: "Vista previa de atajos como Nova.",
    languageSub: "Cambia los textos principales de la demo.",
    appearanceSmall: "Fondo, tarjetas, iconos",
    shortcutsSmall: "Apertura y acciones",
    languageSmall: "Pais y traduccion",
    autoLanguage: "Idioma automatico",
    detectedLanguage: "Idioma detectado: Espanol",
    useSystemLanguage: "Usar idioma del sistema",
    chooseLanguage: "Elegir idioma",
    languageSearch: "Buscar idioma...",
    calculator: "Calculadora", calcHint: "Enter copia el resultado", webSearch: "Busqueda web", webBrowser: "Navegador predeterminado - simulacion",
    aiMode: "Modo IA", aiIntro: "Habla con Nova Assistant", newChat: "Nueva conversacion", projects: "Proyectos",
    selectedCount: "{count} seleccionados - Enter para simular",
    simulatedMany: "{count} elementos se abririan en la app real.",
    aiWelcome: "Puedo simular aperturas de apps, busquedas web y ajustes sin tocar tu PC."
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
    calc: "Ergebnis in der echten App kopiert",
    timeTitle: "Zeit",
    timeHint: "Enter kopiert das Ergebnis",
    timeCopied: "Zeit in der echten App kopiert",
    suggestions: "Vorschlaege",
    applications: "Anwendungen",
    games: "Spiele",
    appearanceSub: "Passe diesen Demo-Stil an.",
    shortcutsSub: "Tastenkurzel-Vorschau wie in Nova.",
    languageSub: "Aendere die wichtigsten Demo-Texte.",
    appearanceSmall: "Hintergrund, Karten, Icons",
    shortcutsSmall: "Start und Aktionen",
    languageSmall: "Land und Uebersetzung",
    autoLanguage: "Automatische Sprache",
    detectedLanguage: "Erkannte Sprache: Deutsch",
    useSystemLanguage: "Systemsprache verwenden",
    chooseLanguage: "Sprache waehlen",
    languageSearch: "Sprache suchen...",
    calculator: "Rechner", calcHint: "Enter kopiert das Ergebnis", webSearch: "Websuche", webBrowser: "Standardbrowser - Simulation",
    aiMode: "KI-Modus", aiIntro: "Sprich mit Nova Assistant", newChat: "Neuer Chat", projects: "Projekte",
    selectedCount: "{count} ausgewaehlt - Enter zum Simulieren",
    simulatedMany: "{count} Elemente wuerden in der echten App starten.",
    aiWelcome: "Ich kann App-Starts, Websuchen und Einstellungen simulieren, ohne deinen PC zu beruehren."
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
    calc: "Risultato copiato nell'app reale",
    timeTitle: "Tempo",
    timeHint: "Enter copia il risultato",
    timeCopied: "Tempo copiato nell'app reale",
    suggestions: "Suggerimenti",
    applications: "Applicazioni",
    games: "Giochi",
    appearanceSub: "Regola lo stile di questa demo.",
    shortcutsSub: "Anteprima scorciatoie come Nova.",
    languageSub: "Cambia i testi principali della demo.",
    appearanceSmall: "Sfondo, schede, icone",
    shortcutsSmall: "Apertura e azioni",
    languageSmall: "Paese e traduzione",
    autoLanguage: "Lingua automatica",
    detectedLanguage: "Lingua rilevata: Italiano",
    useSystemLanguage: "Usa lingua di sistema",
    chooseLanguage: "Scegli lingua",
    languageSearch: "Cerca lingua...",
    calculator: "Calcolatrice", calcHint: "Enter copia il risultato", webSearch: "Ricerca web", webBrowser: "Browser predefinito - simulazione",
    aiMode: "Modo IA", aiIntro: "Parla con Nova Assistant", newChat: "Nuova chat", projects: "Progetti",
    selectedCount: "{count} selezionati - Enter per simulare",
    simulatedMany: "{count} elementi si aprirebbero nell'app reale.",
    aiWelcome: "Posso simulare apertura di app, ricerche web e impostazioni senza toccare il tuo PC."
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
    calc: "Resultado copiado no app real",
    timeTitle: "Tempo",
    timeHint: "Enter copia o resultado",
    timeCopied: "Tempo copiado no app real",
    suggestions: "Sugestoes",
    applications: "Aplicativos",
    games: "Jogos",
    appearanceSub: "Ajuste o estilo desta demo.",
    shortcutsSub: "Previa de atalhos como no Nova.",
    languageSub: "Altere os textos principais da demo.",
    appearanceSmall: "Fundo, cards, icones",
    shortcutsSmall: "Abertura e acoes",
    languageSmall: "Pais e traducao",
    autoLanguage: "Idioma automatico",
    detectedLanguage: "Idioma detectado: Portugues",
    useSystemLanguage: "Usar idioma do sistema",
    chooseLanguage: "Escolher idioma",
    languageSearch: "Pesquisar idioma...",
    calculator: "Calculadora", calcHint: "Enter copia o resultado", webSearch: "Pesquisa web", webBrowser: "Navegador padrao - simulacao",
    aiMode: "Modo IA", aiIntro: "Fale com Nova Assistant", newChat: "Nova conversa", projects: "Projetos",
    selectedCount: "{count} selecionados - Enter para simular",
    simulatedMany: "{count} itens seriam abertos no app real.",
    aiWelcome: "Posso simular abertura de apps, pesquisas web e definicoes sem tocar no seu PC."
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
    calc: "Resultaat gekopieerd in de echte app",
    timeTitle: "Tijd",
    timeHint: "Enter kopieert het resultaat",
    timeCopied: "Tijd gekopieerd in de echte app",
    suggestions: "Suggesties",
    applications: "Applicaties",
    games: "Games",
    appearanceSub: "Pas deze demo-stijl aan.",
    shortcutsSub: "Sneltoetsvoorbeeld zoals Nova.",
    languageSub: "Wijzig de belangrijkste demoteksten.",
    appearanceSmall: "Achtergrond, kaarten, iconen",
    shortcutsSmall: "Starten en acties",
    languageSmall: "Land en vertaling",
    autoLanguage: "Automatische taal",
    detectedLanguage: "Gedetecteerde taal: Nederlands",
    useSystemLanguage: "Systeemtaal gebruiken",
    chooseLanguage: "Kies een taal",
    languageSearch: "Zoek een taal...",
    calculator: "Rekenmachine", calcHint: "Enter kopieert het resultaat", webSearch: "Web zoeken", webBrowser: "Standaardbrowser - simulatie",
    aiMode: "AI-modus", aiIntro: "Praat met Nova Assistant", newChat: "Nieuwe chat", projects: "Projecten",
    selectedCount: "{count} geselecteerd - Enter om te simuleren",
    simulatedMany: "{count} items zouden starten in de echte app.",
    aiWelcome: "Ik kan app-starts, webzoekopdrachten en instellingen simuleren zonder je PC aan te raken."
  },
  ja: {
    placeholder: "アプリ、ゲーム、計算、Webを検索...",
    all: "すべて", app: "アプリ", game: "ゲーム", recent: "最近",
    status: "デモPC - {count}件", select: "アプリを選択", settings: "設定",
    appearance: "外観", shortcuts: "ショートカット", language: "言語",
    simulated: "{name}を選択しました。実際のアプリではEnterで開きます。",
    blocked: "デモのみです。サイトから実際のアプリは開きません。",
    web: "Web検索のデモ", ai: "AIデモモード", calc: "実際のアプリでは結果をコピーします",
    timeTitle: "時間", timeHint: "Enterで結果をコピー", timeCopied: "実際のアプリでは結果をコピーします",
    suggestions: "候補", applications: "アプリ", games: "ゲーム",
    appearanceSub: "このデモのスタイルを調整します。", shortcutsSub: "Nova風のショートカット表示。", languageSub: "デモの主なテキストを変更します。",
    appearanceSmall: "背景、カード、アイコン", shortcutsSmall: "起動と操作", languageSmall: "国と言語",
    autoLanguage: "自動言語", detectedLanguage: "検出された言語: 日本語", useSystemLanguage: "システム言語を使用",
    chooseLanguage: "言語を選択", languageSearch: "言語を検索...",
    calculator: "計算機", calcHint: "Enterで結果をコピー", webSearch: "Web検索", webBrowser: "既定ブラウザー - デモ",
    aiMode: "AIモード", aiIntro: "Nova Assistantに話す", newChat: "新しいチャット", projects: "プロジェクト",
    aiWelcome: "PCに触れずに、アプリ起動、Web検索、設定をシミュレートできます。"
  },
  ko: {
    placeholder: "앱, 게임, 계산 또는 웹 검색...",
    all: "전체", app: "앱", game: "게임", recent: "최근",
    status: "데모 PC - {count}개", select: "앱 선택", settings: "설정",
    appearance: "모양", shortcuts: "단축키", language: "언어",
    simulated: "{name} 선택됨. 실제 앱에서는 Enter로 열립니다.",
    blocked: "데모 전용입니다. 사이트에서 실제 앱을 열지 않습니다.",
    web: "웹 검색 데모", ai: "AI 데모 모드", calc: "실제 앱에서는 결과가 복사됩니다",
    timeTitle: "시간", timeHint: "Enter로 결과 복사", timeCopied: "실제 앱에서는 결과가 복사됩니다",
    suggestions: "추천", applications: "앱", games: "게임",
    appearanceSub: "이 데모 스타일을 조정합니다.", shortcutsSub: "Nova처럼 단축키를 미리 봅니다.", languageSub: "데모 주요 텍스트를 변경합니다.",
    appearanceSmall: "배경, 카드, 아이콘", shortcutsSmall: "실행과 동작", languageSmall: "국가와 번역",
    autoLanguage: "자동 언어", detectedLanguage: "감지된 언어: 한국어", useSystemLanguage: "시스템 언어 사용",
    chooseLanguage: "언어 선택", languageSearch: "언어 검색...",
    calculator: "계산기", calcHint: "Enter로 결과 복사", webSearch: "웹 검색", webBrowser: "기본 브라우저 - 데모",
    aiMode: "AI 모드", aiIntro: "Nova Assistant와 대화", newChat: "새 채팅", projects: "프로젝트",
    aiWelcome: "PC를 건드리지 않고 앱 실행, 웹 검색, 설정을 시뮬레이션할 수 있습니다."
  },
  ar: {
    placeholder: "ابحث عن تطبيق أو لعبة أو حساب أو ويب...",
    all: "الكل", app: "تطبيقات", game: "ألعاب", recent: "الأخيرة",
    status: "جهاز تجريبي - {count} عناصر", select: "اختر تطبيقا", settings: "الإعدادات",
    appearance: "المظهر", shortcuts: "الاختصارات", language: "اللغة",
    simulated: "تم تحديد {name}. في التطبيق الحقيقي يفتحه Enter.",
    blocked: "هذه تجربة فقط. لا يتم فتح تطبيقات حقيقية من الموقع.",
    web: "بحث ويب تجريبي", ai: "وضع الذكاء التجريبي", calc: "في التطبيق الحقيقي يتم نسخ النتيجة",
    timeTitle: "الوقت", timeHint: "Enter ينسخ النتيجة", timeCopied: "في التطبيق الحقيقي يتم نسخ النتيجة",
    suggestions: "اقتراحات", applications: "تطبيقات", games: "ألعاب",
    appearanceSub: "تعديل شكل هذا العرض.", shortcutsSub: "معاينة الاختصارات مثل Nova.", languageSub: "تغيير النصوص الرئيسية للعرض.",
    appearanceSmall: "الخلفية والبطاقات والأيقونات", shortcutsSmall: "الفتح والإجراءات", languageSmall: "البلد والترجمة",
    autoLanguage: "لغة تلقائية", detectedLanguage: "اللغة المكتشفة: العربية", useSystemLanguage: "استخدام لغة النظام",
    chooseLanguage: "اختر لغة", languageSearch: "ابحث عن لغة...",
    calculator: "آلة حاسبة", calcHint: "Enter ينسخ النتيجة", webSearch: "بحث ويب", webBrowser: "المتصفح الافتراضي - تجربة",
    aiMode: "وضع الذكاء", aiIntro: "تحدث مع Nova Assistant", newChat: "محادثة جديدة", projects: "المشاريع",
    aiWelcome: "يمكنني محاكاة فتح التطبيقات وبحث الويب والإعدادات بدون لمس جهازك."
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

const siteTranslations = {
  fr: {
    navDemo: "Demo", navFeatures: "Fonctions", navDownload: "Download", navInstall: "Installer", navSettings: "Parametres",
    topDownload: "Telecharger", siteSettingsTitle: "Parametres du site", siteSettingsSub: "Change uniquement la langue du site.",
    heroCopy: "Une commande centrale pour ouvrir tes apps, lancer tes jeux, chercher sur le web, calculer et parler a Nova Assistant sans quitter ton flow.",
    downloadWindows: "Telecharger pour Windows", tryDemo: "Essayer la demo", factVersion: "Version", factSystem: "Systeme", factSize: "Taille",
    demoTitle: "Nova directement dans le site", demoBody: "Un cadre fictif qui montre l'app comme elle serait ouverte sur Windows. Tu peux cliquer, chercher et changer de mode, mais rien ne s'ouvre vraiment."
  },
  en: {
    navDemo: "Demo", navFeatures: "Features", navDownload: "Download", navInstall: "Install", navSettings: "Settings",
    topDownload: "Download", siteSettingsTitle: "Site settings", siteSettingsSub: "Only changes the website language.",
    heroCopy: "One central command to open apps, launch games, search the web, calculate and talk to Nova Assistant without breaking your flow.",
    downloadWindows: "Download for Windows", tryDemo: "Try the demo", factVersion: "Version", factSystem: "System", factSize: "Size",
    demoTitle: "Nova directly inside the site", demoBody: "A fictional frame showing the app as it would appear on Windows. You can click, search and switch modes, but nothing really opens."
  },
  es: {
    navDemo: "Demo", navFeatures: "Funciones", navDownload: "Download", navInstall: "Instalar", navSettings: "Ajustes",
    topDownload: "Descargar", siteSettingsTitle: "Ajustes del sitio", siteSettingsSub: "Solo cambia el idioma del sitio.",
    heroCopy: "Un comando central para abrir apps, lanzar juegos, buscar en la web, calcular y hablar con Nova Assistant sin romper tu flujo.",
    downloadWindows: "Descargar para Windows", tryDemo: "Probar la demo", factVersion: "Version", factSystem: "Sistema", factSize: "Tamano",
    demoTitle: "Nova directamente en el sitio", demoBody: "Un marco ficticio que muestra la app como se veria en Windows. Puedes hacer clic, buscar y cambiar de modo, pero nada se abre realmente."
  },
  de: {
    navDemo: "Demo", navFeatures: "Funktionen", navDownload: "Download", navInstall: "Installieren", navSettings: "Einstellungen",
    topDownload: "Herunterladen", siteSettingsTitle: "Website-Einstellungen", siteSettingsSub: "Aendert nur die Sprache der Website.",
    heroCopy: "Ein zentraler Befehl zum Oeffnen von Apps, Starten von Spielen, Suchen im Web, Rechnen und Sprechen mit Nova Assistant.",
    downloadWindows: "Fuer Windows herunterladen", tryDemo: "Demo testen", factVersion: "Version", factSystem: "System", factSize: "Groesse",
    demoTitle: "Nova direkt auf der Website", demoBody: "Ein fiktiver Rahmen zeigt die App wie unter Windows. Du kannst klicken, suchen und Modi wechseln, aber nichts wird wirklich geoeffnet."
  },
  it: {
    navDemo: "Demo", navFeatures: "Funzioni", navDownload: "Download", navInstall: "Installa", navSettings: "Impostazioni",
    topDownload: "Scarica", siteSettingsTitle: "Impostazioni sito", siteSettingsSub: "Cambia solo la lingua del sito.",
    heroCopy: "Un comando centrale per aprire app, avviare giochi, cercare sul web, calcolare e parlare con Nova Assistant senza interrompere il flusso.",
    downloadWindows: "Scarica per Windows", tryDemo: "Prova la demo", factVersion: "Versione", factSystem: "Sistema", factSize: "Dimensione",
    demoTitle: "Nova direttamente nel sito", demoBody: "Un riquadro fittizio mostra l'app come su Windows. Puoi cliccare, cercare e cambiare modalita, ma non si apre nulla davvero."
  },
  pt: {
    navDemo: "Demo", navFeatures: "Funcoes", navDownload: "Download", navInstall: "Instalar", navSettings: "Definicoes",
    topDownload: "Baixar", siteSettingsTitle: "Definicoes do site", siteSettingsSub: "Muda apenas o idioma do site.",
    heroCopy: "Um comando central para abrir apps, iniciar jogos, pesquisar na web, calcular e falar com o Nova Assistant sem quebrar seu fluxo.",
    downloadWindows: "Baixar para Windows", tryDemo: "Testar demo", factVersion: "Versao", factSystem: "Sistema", factSize: "Tamanho",
    demoTitle: "Nova diretamente no site", demoBody: "Um quadro ficticio mostra o app como no Windows. Voce pode clicar, pesquisar e trocar modos, mas nada abre de verdade."
  },
  nl: {
    navDemo: "Demo", navFeatures: "Functies", navDownload: "Download", navInstall: "Installeren", navSettings: "Instellingen",
    topDownload: "Downloaden", siteSettingsTitle: "Site-instellingen", siteSettingsSub: "Wijzigt alleen de taal van de website.",
    heroCopy: "Een centrale opdracht om apps te openen, games te starten, op het web te zoeken, te rekenen en met Nova Assistant te praten zonder je flow te breken.",
    downloadWindows: "Download voor Windows", tryDemo: "Probeer de demo", factVersion: "Versie", factSystem: "Systeem", factSize: "Grootte",
    demoTitle: "Nova direct in de site", demoBody: "Een fictief venster toont de app zoals op Windows. Je kunt klikken, zoeken en modi wisselen, maar er wordt niets echt geopend."
  }
};

let view = "all";
let locale = "fr";
let siteLocale = localStorage.getItem("nova.siteLocale") || "fr";
let selectedIds = new Set();
let anchorIndex = 0;
let clickTimer = 0;
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

function applySiteLocale(nextLocale) {
  siteLocale = siteTranslations[nextLocale] ? nextLocale : "fr";
  localStorage.setItem("nova.siteLocale", siteLocale);
  const table = siteTranslations[siteLocale];
  document.documentElement.lang = siteLocale;
  document.querySelectorAll("[data-site-i18n]").forEach((node) => {
    node.textContent = table[node.dataset.siteI18n] || siteTranslations.fr[node.dataset.siteI18n] || node.textContent;
  });
  document.querySelectorAll("[data-site-locale]").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.siteLocale === siteLocale);
  });
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

function localeCodeToBcp47(code) {
  const map = {
    fr: "fr-FR",
    en: "en-US",
    es: "es-ES",
    de: "de-DE",
    it: "it-IT",
    pt: "pt-PT",
    nl: "nl-NL",
    ja: "ja-JP",
    ko: "ko-KR",
    ar: "ar-SA"
  };
  return map[code] || code || "en-US";
}

const durationFactors = {
  week: 604800000,
  day: 86400000,
  hour: 3600000,
  minute: 60000,
  second: 1000,
  millisecond: 1
};

const durationTargets = {
  week: "day",
  day: "hour",
  hour: "minute",
  minute: "second",
  second: "millisecond",
  millisecond: "millisecond"
};

const durationUnitAliases = {
  ms: "millisecond",
  millisecond: "millisecond",
  milliseconds: "millisecond",
  milliseconde: "millisecond",
  millisecondes: "millisecond",
  s: "second",
  sec: "second",
  secs: "second",
  second: "second",
  seconds: "second",
  seconde: "second",
  secondes: "second",
  segundo: "second",
  segundos: "second",
  sekunde: "second",
  sekunden: "second",
  secondo: "second",
  secondi: "second",
  m: "minute",
  min: "minute",
  mins: "minute",
  minute: "minute",
  minutes: "minute",
  minuto: "minute",
  minutos: "minute",
  minuut: "minute",
  minuten: "minute",
  h: "hour",
  hr: "hour",
  hrs: "hour",
  hour: "hour",
  hours: "hour",
  heure: "hour",
  heures: "hour",
  hora: "hour",
  horas: "hour",
  stunde: "hour",
  stunden: "hour",
  ora: "hour",
  ore: "hour",
  uur: "hour",
  uren: "hour",
  j: "day",
  d: "day",
  day: "day",
  days: "day",
  jour: "day",
  jours: "day",
  dia: "day",
  dias: "day",
  tag: "day",
  tage: "day",
  giorno: "day",
  giorni: "day",
  dag: "day",
  dagen: "day",
  w: "week",
  week: "week",
  weeks: "week",
  semaine: "week",
  semaines: "week",
  semana: "week",
  semanas: "week",
  woche: "week",
  wochen: "week",
  settimana: "week",
  settimane: "week",
  weken: "week"
};

const durationUnitPattern = Object.keys(durationUnitAliases)
  .sort((a, b) => b.length - a.length)
  .join("|");

function normalizeTemporalText(text) {
  return String(text || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function parseDurationNumber(value) {
  const number = Number(String(value).replace(",", "."));
  return Number.isFinite(number) && number >= 0 ? number : null;
}

function parseDurationQuery(text) {
  const raw = String(text || "").trim();
  if (!raw) return null;
  const normalized = normalizeTemporalText(raw);

  const compactHourMinute = normalized.match(/^(\d+(?:[,.]\d+)?)h([0-5]?\d)$/);
  if (compactHourMinute) {
    const hours = parseDurationNumber(compactHourMinute[1]);
    const minutes = parseDurationNumber(compactHourMinute[2]);
    if (hours === null || minutes === null) return null;
    return {
      input: raw,
      totalMs: (hours * durationFactors.hour) + (minutes * durationFactors.minute),
      targetUnit: "minute"
    };
  }

  const termRegex = new RegExp(`(\\d+(?:[,.]\\d+)?)\\s*(${durationUnitPattern})`, "g");
  const terms = [];
  let cursor = 0;
  let match;

  while ((match = termRegex.exec(normalized)) !== null) {
    const gap = normalized.slice(cursor, match.index);
    if (!/^[\s,+-]*$/.test(gap)) return null;
    const value = parseDurationNumber(match[1]);
    const unit = durationUnitAliases[match[2]];
    if (value === null || !unit) return null;
    terms.push({ value, unit });
    cursor = termRegex.lastIndex;
  }

  if (!terms.length || !/^[\s,+-]*$/.test(normalized.slice(cursor))) return null;

  const totalMs = terms.reduce((sum, term) => sum + (term.value * durationFactors[term.unit]), 0);
  const largest = terms.reduce((best, term) => {
    return durationFactors[term.unit] > durationFactors[best.unit] ? term : best;
  }, terms[0]);

  return {
    input: raw,
    totalMs,
    targetUnit: durationTargets[largest.unit] || "millisecond"
  };
}

function formatDurationQuery(text, language = locale) {
  const parsed = parseDurationQuery(text);
  if (!parsed) return null;
  const value = parsed.totalMs / durationFactors[parsed.targetUnit];
  if (!Number.isFinite(value)) return null;
  const cleanValue = Math.abs(value) < 1e-9 ? 0 : value;
  const options = {
    style: "unit",
    unit: parsed.targetUnit,
    unitDisplay: "short",
    maximumFractionDigits: Number.isInteger(cleanValue) ? 0 : 2
  };

  try {
    return {
      input: parsed.input,
      output: new Intl.NumberFormat(localeCodeToBcp47(language), options).format(cleanValue)
    };
  } catch {
    return {
      input: parsed.input,
      output: `${new Intl.NumberFormat(localeCodeToBcp47(language), { maximumFractionDigits: 2 }).format(cleanValue)} ${parsed.targetUnit}`
    };
  }
}

function parseTimeQuery(text) {
  const raw = String(text || "").trim();
  if (!raw) return null;
  const normalized = normalizeTemporalText(raw);

  let match = normalized.match(/^([01]?\d|2[0-3])(?::([0-5]\d))(?::([0-5]\d))?$/);
  if (match) return { label: raw, hour: Number(match[1]), minute: Number(match[2]), second: Number(match[3] || 0) };

  match = normalized.match(/^(0?\d|1[0-2])(?:[:. ]([0-5]\d))?(?:[:. ]([0-5]\d))?\s*(am|pm)$/);
  if (match) {
    let hour = Number(match[1]) % 12;
    if (match[4] === "pm") hour += 12;
    return { label: raw, hour, minute: Number(match[2] || 0), second: Number(match[3] || 0) };
  }

  return null;
}

function formatTimeQuery(text, language = locale) {
  const parsed = parseTimeQuery(text);
  if (!parsed) return null;
  const date = new Date();
  date.setHours(parsed.hour, parsed.minute, parsed.second, 0);
  const options = { hour: "numeric", minute: "2-digit" };
  if (parsed.second) options.second = "2-digit";
  return {
    input: parsed.label,
    output: new Intl.DateTimeFormat(localeCodeToBcp47(language), options).format(date)
  };
}

function filteredApps() {
  const query = search.value.trim().toLowerCase();
  if (view === "app") return apps.filter((item) => item[2] === "app");
  if (view === "game") return apps.filter((item) => item[2] === "game");
  if (view === "recent") return apps.filter((item) => item[2] === "recent");
  if (!query || calcValue(query) !== null || formatDurationQuery(query) || formatTimeQuery(query) || query.includes("/")) return apps;
  return apps.filter((item) => `${item[0]} ${item[1]} ${item[2]}`.toLowerCase().includes(query));
}

function itemId(item) {
  return item[0];
}

function buildDemoGroups(items) {
  if (view === "all") {
    return [
      [t("suggestions"), items.slice(0, 6)],
      [t("applications"), apps.filter((item) => item[2] === "app").slice(0, 6)],
      [t("games"), apps.filter((item) => item[2] === "game").slice(0, 6)]
    ];
  }

  return [[tabs.find((tab) => tab.dataset.view === view)?.textContent || "Resultats", items]];
}

function uniqueVisibleItems(groups = buildDemoGroups(filteredApps())) {
  const seen = new Set();
  return groups
    .flatMap((group) => group[1])
    .filter((item) => {
      const id = itemId(item);
      if (seen.has(id)) return false;
      seen.add(id);
      return true;
    });
}

function syncSelection(visible, suppressDefault = false) {
  if (suppressDefault) {
    selectedIds = new Set();
    anchorIndex = 0;
    return;
  }

  const visibleIds = new Set(visible.map(itemId));
  const valid = [...selectedIds].filter((id) => visibleIds.has(id));

  if (valid.length) {
    selectedIds = new Set(valid);
    anchorIndex = Math.max(0, visible.findIndex((item) => itemId(item) === valid[0]));
    return;
  }

  if (visible.length) {
    selectedIds = new Set([itemId(visible[0])]);
    anchorIndex = 0;
  } else {
    selectedIds = new Set();
    anchorIndex = 0;
  }
}

function updateSelectionHint() {
  const visible = uniqueVisibleItems();
  const selected = visible.filter((item) => selectedIds.has(itemId(item)));
  if (selected.length === 1) {
    selectionHint.textContent = itemId(selected[0]);
    return;
  }
  if (selected.length > 1) {
    selectionHint.textContent = t("selectedCount", { count: selected.length });
    return;
  }
  selectionHint.textContent = t("select");
}

function updateSelectionUI() {
  sections.querySelectorAll(".tile").forEach((tile) => {
    const selected = selectedIds.has(tile.dataset.name);
    tile.classList.toggle("is-selected", selected);
    tile.setAttribute("aria-selected", String(selected));
  });
  updateSelectionHint();
}

function selectSingle(id) {
  const visible = uniqueVisibleItems();
  selectedIds = new Set([id]);
  anchorIndex = Math.max(0, visible.findIndex((item) => itemId(item) === id));
  updateSelectionUI();
}

function toggleSelection(id) {
  const next = new Set(selectedIds);
  if (next.has(id)) next.delete(id);
  else next.add(id);
  selectedIds = next;
  const visible = uniqueVisibleItems();
  anchorIndex = Math.max(0, visible.findIndex((item) => itemId(item) === id));
  updateSelectionUI();
}

function selectRange(toId) {
  const visible = uniqueVisibleItems();
  const toIndex = visible.findIndex((item) => itemId(item) === toId);
  if (toIndex < 0) return;
  const fromIndex = Math.max(0, Math.min(anchorIndex, visible.length - 1));
  const start = Math.min(fromIndex, toIndex);
  const end = Math.max(fromIndex, toIndex);
  selectedIds = new Set(visible.slice(start, end + 1).map(itemId));
  updateSelectionUI();
}

function tileByName(name) {
  return [...sections.querySelectorAll(".tile")].find((tile) => tile.dataset.name === name);
}

function gridColumnCount() {
  const grid = sections.querySelector(".tile-grid");
  if (!grid) return 6;
  const columns = window.getComputedStyle(grid).gridTemplateColumns.split(" ").filter(Boolean);
  return Math.max(1, columns.length || 6);
}

function selectAtIndex(index, extend = false) {
  const visible = uniqueVisibleItems();
  if (!visible.length) return;
  const nextIndex = Math.min(Math.max(index, 0), visible.length - 1);
  const id = itemId(visible[nextIndex]);
  if (extend) selectRange(id);
  else {
    selectedIds = new Set([id]);
    anchorIndex = nextIndex;
    updateSelectionUI();
  }
  tileByName(id)?.scrollIntoView({ block: "nearest", inline: "nearest" });
}

function selectOffset(offset, extend = false) {
  const visible = uniqueVisibleItems();
  if (!visible.length) return;
  const currentId = [...selectedIds][0] || itemId(visible[0]);
  const currentIndex = Math.max(0, visible.findIndex((item) => itemId(item) === currentId));
  selectAtIndex(currentIndex + offset, extend);
}

function selectedVisibleItems() {
  return uniqueVisibleItems().filter((item) => selectedIds.has(itemId(item)));
}

function simulateOpenSelection() {
  const selected = selectedVisibleItems();
  if (selected.length === 1) {
    showToast(t("simulated", { name: itemId(selected[0]) }));
    return;
  }
  if (selected.length > 1) {
    showToast(t("simulatedMany", { count: selected.length }));
    return;
  }
  showToast(t("blocked"));
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
          <button class="tile ${selectedIds.has(itemId(item)) ? "is-selected" : ""}" type="button" data-name="${safe(itemId(item))}" aria-selected="${selectedIds.has(itemId(item))}">
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
  const time = formatDurationQuery(query) || formatTimeQuery(query);
  const isWeb = query.includes("/") && calc === null && !time;

  calcCard.hidden = calc === null;
  timeCard.hidden = !time;
  webCard.hidden = !isWeb;
  aiPanel.hidden = true;
  launcher.classList.remove("is-ai-mode");
  aiProvider.hidden = true;

  if (calc !== null) {
    calcExpression.textContent = query;
    calcResult.textContent = calc;
  }

  if (time) {
    timeExpression.textContent = time.input;
    timeResult.textContent = time.output;
  }

  if (isWeb) {
    webQuery.textContent = query.split("/").map((part) => part.trim()).filter(Boolean).slice(0, 2).join(" + ");
  }

  const items = filteredApps();
  const groups = buildDemoGroups(items);
  const visible = uniqueVisibleItems(groups);
  syncSelection(visible, calc !== null || Boolean(time) || isWeb);

  sections.innerHTML = groups.filter((group) => group[1].length).map((group) => sectionFor(group[0], group[1])).join("");
  sections.querySelectorAll(".tile").forEach((tile) => {
    tile.addEventListener("click", (event) => {
      const id = tile.dataset.name;
      if (event.shiftKey) {
        window.clearTimeout(clickTimer);
        selectRange(id);
        return;
      }
      if (event.ctrlKey || event.metaKey) {
        window.clearTimeout(clickTimer);
        toggleSelection(id);
        return;
      }
      window.clearTimeout(clickTimer);
      clickTimer = window.setTimeout(() => selectSingle(id), 170);
    });
    tile.addEventListener("dblclick", (event) => {
      event.preventDefault();
      window.clearTimeout(clickTimer);
      selectSingle(tile.dataset.name);
      simulateOpenSelection();
    });
  });
  updateSelectionHint();
  statusText.textContent = t("status", { count: apps.length });
}

function openAiMode() {
  launcher.classList.add("is-ai-mode");
  aiPanel.hidden = false;
  calcCard.hidden = true;
  timeCard.hidden = true;
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
      <p>${safe(t("aiWelcome"))}</p>
    </article>
  `);
  aiMessages.scrollTop = aiMessages.scrollHeight;
  search.value = "";
}

function selectSettingsPage(page) {
  const titles = {
    appearance: [t("appearance"), t("appearanceSub")],
    shortcuts: [t("shortcuts"), t("shortcutsSub")],
    language: [t("language"), t("languageSub")]
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
  demoRoot.querySelectorAll("[data-demo-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.demoI18n);
  });
  demoRoot.querySelectorAll("[data-demo-placeholder]").forEach((node) => {
    node.setAttribute("placeholder", t(node.dataset.demoPlaceholder));
  });
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
    return;
  }

  if (!launcher.classList.contains("is-ai-mode") && ["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(event.key)) {
    event.preventDefault();
    const columns = gridColumnCount();
    const offsets = {
      ArrowDown: columns,
      ArrowUp: -columns,
      ArrowRight: 1,
      ArrowLeft: -1
    };
    selectOffset(offsets[event.key], event.shiftKey);
    return;
  }

  if (event.key === "Enter") {
    event.preventDefault();
    if (launcher.classList.contains("is-ai-mode")) {
      sendAiDemoMessage();
    } else if (calcValue(search.value.trim()) !== null) {
      showToast(t("calc"));
    } else if (formatDurationQuery(search.value.trim()) || formatTimeQuery(search.value.trim())) {
      showToast(t("timeCopied"));
    } else if (search.value.includes("/")) {
      showToast(t("web"));
    } else {
      simulateOpenSelection();
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
timeCard.addEventListener("click", () => showToast(t("timeCopied")));
demoRoot.querySelector("#demo-ai-reset").addEventListener("click", () => {
  aiMessages.innerHTML = `
    <article class="ai-message assistant">
      <strong>NOVA ASSISTANT</strong>
      <p>${safe(t("aiWelcome"))}</p>
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

const siteSettingsButton = document.querySelector("#site-settings-button");
const siteSettingsPanel = document.querySelector("#site-settings-panel");
const siteSettingsClose = document.querySelector("#site-settings-close");

function setSiteSettingsOpen(open) {
  siteSettingsPanel.hidden = !open;
  siteSettingsButton.classList.toggle("is-active", open);
}

siteSettingsButton?.addEventListener("click", () => setSiteSettingsOpen(siteSettingsPanel.hidden));
siteSettingsClose?.addEventListener("click", () => setSiteSettingsOpen(false));
siteSettingsPanel?.addEventListener("click", (event) => {
  if (event.target === siteSettingsPanel) setSiteSettingsOpen(false);
  const button = event.target.closest("[data-site-locale]");
  if (!button) return;
  applySiteLocale(button.dataset.siteLocale);
});

applySiteLocale(siteLocale);
applyLocale("fr");
renderTiles();
