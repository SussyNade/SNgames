const jogos = [

  // ===== EM ALTA / POPULARES =====
  {
    id: "gd",
    nome: "Geometry Dash",
    thumb: "assets/thumbnail/Geometrydash.webp",
    type: "iframe",
    url: "https://geometrydash.com/game/index.html",
    tags: ["acao", "casual", "alta", "populares", "ritmo"]
  },
  {
    id: "stumble",
    nome: "Stumble Guys",
    thumb: "assets/thumbnail/Stumbleguys.webp",
    type: "iframe",
    url: "https://www.stumbleguys.com/pt-BR/play",
    tags: ["acao", "casual", "amigos", "alta", "populares"]
  },
  {
    id: "fnf",
    nome: "Friday Night Funkin",
    thumb: "assets/thumbnail/FNF.webp",
    type: "external",
    url: "https://ninja-muffin24.itch.io/funkin",
    tags: ["ritmo", "alta", "populares"]
  },
  {
    id: "suika",
    nome: "Suika World",
    thumb: "assets/thumbnail/suika.webp",
    type: "external",
    url: "https://suika.world/play/offline",
    tags: ["casual", "puzzle", "alta"]
  },

  // ===== IO GAMES =====
  {
    id: "krunker",
    nome: "Krunker.io",
    thumb: "assets/thumbnail/Krunker.webp",
    type: "iframe",
    url: "https://krunker.io/",
    tags: ["io", "acao", "amigos", "alta"],
    firefoxWarn: true   // bug de mouse no Firefox
  },
  {
    id: "shellshock",
    nome: "Shell Shockers",
    thumb: "assets/thumbnail/ShellShockers.webp",
    type: "iframe",
    url: "https://shellshock.io/",
    tags: ["io", "acao", "amigos"],
    firefoxWarn: true   // bug de mouse no Firefox
  },
  {
    id: "surviv",
    nome: "Surviv.io",
    thumb: "assets/thumbnail/Surviv.webp",
    type: "iframe",
    url: "https://surviv.io/",
    tags: ["io", "acao", "amigos", "alta"]
  },
  {
    id: "territorial",
    nome: "Territorial.io",
    thumb: "assets/thumbnail/Territorial.webp",
    type: "iframe",
    url: "https://territorial.io/",
    tags: ["io", "amigos", "estrategia"]
  },
  {
    id: "deeeep",
    nome: "Deeeep.io",
    thumb: "assets/thumbnail/Deeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeep.webp",
    type: "iframe",
    url: "https://deeeep.io/",
    tags: ["io", "casual", "amigos"]
  },
  {
    id: "slither",
    nome: "Slither.io",
    thumb: "assets/thumbnail/Slitherio.webp",
    type: "iframe",
    url: "https://slither.io/",
    tags: ["io", "casual", "amigos"]
  },
  {
    id: "agar",
    nome: "Agar.io",
    thumb: "assets/thumbnail/Agar.webp",
    type: "external",
    url: "https://agar.io/",
    tags: ["io", "casual", "amigos"]
  },
  {
    id: "smashkarts",
    nome: "Smash Karts",
    thumb: "assets/thumbnail/Placeholder.webp",
    type: "iframe",
    url: "https://smashkarts.io/",
    tags: ["io", "amigos", "acao", "corrida", "populares"]
  },
  {
    id: "zombsroyale",
    nome: "ZombsRoyale",
    thumb: "assets/thumbnail/Placeholder.webp",
    type: "iframe",
    url: "https://zombsroyale.io/",
    tags: ["io", "amigos", "acao"]
  },
  {
    id: "skribbl",
    nome: "skribbl.io",
    thumb: "assets/thumbnail/Placeholder.webp",
    type: "iframe",
    url: "https://skribbl.io/",
    tags: ["io", "amigos", "criatividade"]
  },

  // ===== AÇÃO =====
  {
    id: "vampiresurvivor",
    nome: "Vampire Survivors",
    thumb: "assets/thumbnail/vampiresurvivor.webp",
    type: "external",
    url: "https://poncle.itch.io/vampire-survivors",
    tags: ["acao"]
  },

  // ===== PUZZLE =====
  {
    id: "2048",
    nome: "2048",
    thumb: "assets/thumbnail/2048.webp",
    type: "self",
    url: "games/2048/index.html",
    tags: ["puzzle", "casual"]
  },
  {
    id: "gridland",
    nome: "Gridland",
    thumb: "assets/thumbnail/gridland.webp",
    type: "iframe",
    url: "https://gridland.doublespeakgames.com/",
    tags: ["puzzle", "estrategia", "casual"]
  },
  {
    id: "penrose",
    nome: "Penrose",
    thumb: "assets/thumbnail/Placeholder.webp",
    type: "iframe",
    url: "https://penrose.doublespeakgames.com/",
    tags: ["puzzle", "criatividade"]
  },
  {
    id: "darkroom",
    nome: "A Dark Room",
    thumb: "assets/thumbnail/Placeholder.webp",
    type: "iframe",
    url: "https://adarkroom.doublespeakgames.com/",
    tags: ["puzzle", "estrategia"]
  },
  {
    id: "radum",
    nome: "Radüm",
    thumb: "assets/thumbnail/Placeholder.webp",
    type: "iframe",
    url: "https://radum.doublespeakgames.com/",
    tags: ["puzzle", "estrategia", "amigos"]
  },
  {
    id: "puddingmonster",
    nome: "Pudding Monsters",
    thumb: "assets/thumbnail/cuttheropemagic.webp",
    type: "external",
    url: "https://yell0wsuit.page/assets/games/pudding-monsters/index.html",
    tags: ["casual", "puzzle"]
  },

  // ===== CASUAL =====
  {
    id: "minecraft",
    nome: "Minecraft",
    thumb: "assets/thumbnail/Minecraft.webp",
    type: "external",
    url: "https://eaglercraft.com/",
    tags: ["criatividade", "populares", "amigos"]
  },
  {
    id: "uselessweb",
    nome: "The Useless Web",
    thumb: "assets/thumbnail/Uselessweb.webp",
    type: "iframe",
    url: "https://theuselessweb.com/",
    tags: ["casual"]
  },
  {
    id: "cookieclicker",
    nome: "Cookie Clicker",
    thumb: "assets/thumbnail/CookieClicker.webp",
    type: "external",
    url: "https://orteil.dashnet.org/cookieclicker/",
    tags: ["casual", "populares"]
  },
  {
    id: "flightoffancy",
    nome: "A Flight of Fancy",
    thumb: "assets/thumbnail/Placeholder.webp",
    type: "iframe",
    url: "https://doublespeakgames.com/flight-of-fancy.html",
    tags: ["criatividade", "casual"]
  },
  {
    id: "minimetro",
    nome: "Mini Metro (beta)",
    thumb: "assets/thumbnail/Placeholder.webp",
    type: "iframe",
    url: "http://old.dinopoloclub.com/minimetro/",
    tags: ["criatividade", "casual"]
  },

  // ===== EDUCACIONAL =====
  {
    id: "neal",
    nome: "NEAL.FUN",
    thumb: "assets/thumbnail/Neal.webp",
    type: "external",
    url: "https://neal.fun/",
    tags: ["edu", "casual"]
  },
  {
    id: "wordle",
    nome: "Wordle",
    thumb: "assets/thumbnail/Wordle.webp",
    type: "external",
    url: "https://www.nytimes.com/games/wordle/index.html",
    tags: ["edu", "puzzle"]
  },
  {
    id: "termo",
    nome: "Termo",
    thumb: "assets/thumbnail/Termo.webp",
    type: "iframe",
    url: "https://term.ooo/",
    tags: ["edu", "puzzle"]
  },
  {
    id: "openguessr",
    nome: "OpenGuessr",
    thumb: "assets/thumbnail/openguessr.webp",
    type: "iframe",
    url: "https://openguessr.com/",
    tags: ["edu", "casual"]
  },
  {
    id: "littlealchemy",
    nome: "Little Alchemy 2",
    thumb: "assets/thumbnail/LittleAlchemist.webp",
    type: "iframe",
    url: "https://littlealchemy2.com/",
    tags: ["puzzle", "edu", "casual", "populares", "criatividade"]
  },

  // ===== ESTRATÉGIA =====
  {
    id: "bloons",
    nome: "Bloons TD 5",
    thumb: "assets/thumbnail/BloonsTD5.webp",
    type: "external",
    url: "https://www.newgrounds.com/portal/view/610995",
    tags: ["estrategia"]
  },

  // ===== CRIATIVIDADE / SOCIAL =====
  {
    id: "gartic",
    nome: "GarticPhone",
    thumb: "assets/thumbnail/GarticP.webp",
    type: "external",
    url: "https://garticphone.com/",
    tags: ["casual", "amigos", "criatividade"]
  },

  // ===== DOCE (Cut the Rope e similares) =====
  {
    id: "cuttherope",
    nome: "Cut the Rope",
    thumb: "assets/thumbnail/cuttherope.webp",
    type: "iframe",
    url: "https://ctrhome.github.io/games/cut-the-rope/play/famobi/",
    tags: ["casual", "puzzle", "doce"]
  },
  {
    id: "cuttheropeexp",
    nome: "Cut the Rope Experiments",
    thumb: "assets/thumbnail/cuttheropeexp.webp",
    type: "iframe",
    url: "https://ctrhome.github.io/play/cut-the-rope-experiments/",
    tags: ["casual", "puzzle", "doce"]
  },
  {
    id: "cuttheropeholiday",
    nome: "Cut the Rope Holiday Gift",
    thumb: "assets/thumbnail/cuttheropeholiday.webp",
    type: "iframe",
    url: "https://ctrhome.github.io/games/cut-the-rope-holiday-gift/play/",
    tags: ["casual", "puzzle", "doce"]
  },
  {
    id: "cuttheropett",
    nome: "Cut the Rope Time Travel",
    thumb: "assets/thumbnail/cuttheropett.webp",
    type: "iframe",
    url: "https://ctrhome.github.io/play/cut-the-rope-time-travel/",
    tags: ["casual", "puzzle", "doce"]
  },
  {
    id: "cuttherope2",
    nome: "Cut the Rope 2",
    thumb: "assets/thumbnail/cuttherope2.webp",
    type: "external",
    url: "https://yell0wsuit.page/assets/games/ctr2/index.html/",
    tags: ["casual", "puzzle", "doce"]
  },
  {
    id: "cuttheropemagic",
    nome: "Cut the Rope Magic",
    thumb: "assets/thumbnail/cuttheropemagic.webp",
    type: "iframe",
    url: "https://ctrhome.github.io/play/cut-the-rope-magic/",
    tags: ["casual", "puzzle", "doce"]
  },

  // ===== CLÁSSICOS FLASH (via Ruffle) =====
  // Para hospedar: baixe o .swf, coloque em games/flash/nomedojogo/jogo.swf
  // e crie um index.html com o Ruffle carregando o arquivo
  {
    id: "papas",
    nome: "Papa's Freezeria (beta)",
    thumb: "assets/thumbnail/Placeholder.webp",
    type: "self",
    url: "games/flash/papas/index.html",
    tags: ["flash", "casual"]
  },
  {
    id: "bloons1",
    nome: "Bloons (original) (beta)",
    thumb: "assets/thumbnail/Placeholder.webp",
    type: "self",
    url: "games/flash/bloons/index.html",
    tags: ["flash", "puzzle", "casual"]
  },

];
