document.documentElement.classList.add("has-js");

const ES_STRINGS = {
  "title": "Den Reanin Gerasimov | Ingeniero en Ciberseguridad",
  "skip": "Saltar al contenido",
  "nav.menu": "Menú",
  "nav.work": "Proyectos destacados",
  "nav.skills": "Habilidades",
  "nav.archive": "Archivo",
  "nav.experience": "Experiencia",
  "nav.homelab": "Home lab",
  "nav.about": "Sobre mí",
  "nav.contact": 'Contacto <span aria-hidden="true">&#8599;</span>',
  "hero.eyebrow": '<span class="eyebrow-dot"></span> SEGURIDAD DE APLICACIONES / ALICANTE, ESPAÑA',
  "hero.intro": "Desarrollo herramientas prácticas de seguridad en aplicaciones y pruebas de vulnerabilidades web, apoyándome en mi base de Ingeniería Multimedia.",
  "hero.cta": 'Ver proyectos destacados <span aria-hidden="true">&#8595;</span>',
  "hero.contact": 'Contactar <span aria-hidden="true">&#8599;</span>',
  "copy.email": "Copiar email",
  "copy.copied": "Copiado",
  "hero.avail": '<span class="availability-mark"></span> Disponibilidad inmediata · Jornada completa (40 h/sem) — puestos junior y prácticas',
  "hero.meshTitle": "TOPOLOGÍA DE SUPERFICIE // MALLA DE NODOS",
  "hero.meshPill": "<i></i> INTERACTIVO",
  "hero.meshFootL": "APPSEC · INFRAESTRUCTURA · MULTIMEDIA",
  "hero.meshFootR": "MUEVE EL PUNTERO PARA EXPLORAR",
  "work.eyebrow": "01 / PROYECTOS DESTACADOS",
  "work.title": "Herramientas de seguridad. Sistemas interactivos.",
  "work.note": "La ciberseguridad guía la arquitectura; la ingeniería multimedia define cómo construyo y comunico la tecnología.",
  "work.secEyebrow": "CIBERSEGURIDAD / 3 PROYECTOS",
  "work.secTitle": "Seguridad en aplicaciones y herramientas defensivas",
  "work.mmEyebrow": "INGENIERÍA MULTIMEDIA / 3 PROYECTOS",
  "work.mmTitle": "Aprendizaje interactivo, 3D y visualización",
  "gung.topL": "01 — HERRAMIENTA DE SEGURIDAD",
  "gung.topR": "INDIVIDUAL / TFM MÁSTER",
  "gung.lede": "Escáner dinámico de seguridad centrado en formularios web, con comprobaciones basadas en evidencias e informes para flujos reales.",
  "gung.p1": "12 categorías de vulnerabilidades, incluyendo XSS, SQL injection y SSTI",
  "gung.p2": "Soporte con Playwright para aplicaciones SPA modernas",
  "gung.p3": "Exportación en HTML, JSON y SARIF para pipelines CI/CD",
  "gung.bar": "GUNG12 / CAPACIDADES",
  "gung.summary": "SEGURIDAD EN FORMULARIOS WEB",
  "gung.classes": "12 <small>clases</small>",
  "gung.out": "FORMATOS DE INFORME",
  "gung.bottom": "TRABAJO FIN DE MÁSTER · UNIVERSIDAD DE ALICANTE",
  "knotic.topL": "02 — IA APLICADA",
  "knotic.topR": "PROYECTO INDIVIDUAL / TALENTO SABADELL",
  "knotic.bar": "KNO-TIC / ANÁLISIS DE AMENAZAS",
  "knotic.status": "EXPLICABLE POR DISEÑO",
  "knotic.inLbl": "ENTRADA",
  "knotic.inVal": "Mensaje · URL · imagen",
  "knotic.outLbl": "SALIDA",
  "knotic.outVal": "Informe de riesgo",
  "knotic.ind1": "Urgencia",
  "knotic.ind2": "Suplantación",
  "knotic.ind3": "URL sospechosa",
  "knotic.cap": "Una explicación clara, no solo una alerta.",
  "knotic.lede": "Aplicación de análisis de phishing e ingeniería social que convierte mensajes, URLs y capturas en informes de riesgo comprensibles.",
  "knotic.bottom": "PROYECTO INDIVIDUAL",
  "mod.lede": "Repositorio seguro colaborativo centrado en cifrado de extremo a extremo, autenticación multifactor y registros de auditoría verificables.",
  "mod.link": 'Repositorio del equipo <span aria-hidden="true">&#8599;</span>',
  "mod.bottom": "PROYECTO EN EQUIPO",
  "link.source": 'Código fuente <span aria-hidden="true">&#8599;</span>',
  "link.releases": 'Versiones <span aria-hidden="true">&#8599;</span>',
  "link.demo": 'Demo en vivo <span aria-hidden="true">&#8599;</span>',
  "link.srcShort": 'Código <span aria-hidden="true">&#8599;</span>',
  "meta.ind": "INDIVIDUAL",
  "meta.team": "PROYECTO EN EQUIPO",
  "ct.lbl": "LÓGICA VISUAL / CODE-TRACER",
  "ct.cap": "FÓRMULA <i>&middot;</i> TABLA DE VERDAD <i>&middot;</i> DEMOSTRACIÓN",
  "ct.metaL": "TFG GRADO",
  "ct.desc": "Plataforma interactiva para aprender lógica proposicional y deducción natural mediante fórmulas visuales, tablas de verdad y flujos guiados.",
  "fm.lbl": "FIELDMASTER / DISEÑO TÁCTICO 3D",
  "fm.cap": "ESCENA <i>&middot;</i> CÁMARA <i>&middot;</i> REPRODUCCIÓN",
  "fm.metaR": "VERSIÓN DEMO",
  "fm.desc": "Plataforma para diseñar y analizar jugadas deportivas mediante un motor WebGL propio con escenas 3D, interacción y animación.",
  "fm.repo": 'Repositorio demo <span aria-hidden="true">&#8599;</span>',
  "fm.web": 'Cliente web <span aria-hidden="true">&#8599;</span>',
  "fm.note": "El repositorio público es una instantánea demo con los servicios desactivados.",
  "neo.lbl": "OBJETOS CERCANOS / DATOS EN VIVO",
  "neo.cap": "API NASA <i>&middot;</i> ÓRBITAS <i>&middot;</i> 3D",
  "neo.desc": "Visualización 3D de objetos cercanos a la Tierra con órbitas animadas, selección de asteroides y filtros de peligrosidad.",
  "skills.eyebrow": "02 / HABILIDADES TÉCNICAS",
  "skills.title": "Herramientas para detectar, corregir y reducir riesgos.",
  "skills.note": "Combinación de ingeniería de seguridad, AppSec y desarrollo multimedia.",
  "filter.all": "Todo",
  "skills.fAppsec": "Seguridad de aplicaciones",
  "skills.fInfra": "Infraestructura",
  "skills.fMon": "Monitorización y DFIR",
  "skills.fWeb": "Web y 3D",
  "skills.r1Tag": "01 / AUDITORÍA",
  "skills.r1Title": "Seguridad de aplicaciones",
  "skills.r1Desc": "Pruebas web y evaluación de vulnerabilidades",
  "skills.r2Tag": "02 / BASTIONADO",
  "skills.r2Title": "Ingeniería de seguridad",
  "skills.r2Desc": "Sistemas, control de acceso y seguridad de red",
  "skills.r3Tag": "03 / VISIBILIDAD",
  "skills.r3Title": "Monitorización y DFIR",
  "skills.r3Desc": "Observabilidad, integridad y análisis forense",
  "skills.r4Tag": "04 / AUTOMATIZACIÓN",
  "skills.r4Title": "DevSecOps y automatización",
  "skills.r4Desc": "Controles de seguridad integrados en entrega",
  "skills.r5Tag": "05 / FRONTEND",
  "skills.r5Title": "Desarrollo web y frontend",
  "skills.r5Desc": "Interfaces, plataformas y despliegue",
  "skills.r6Tag": "06 / BACKEND",
  "skills.r6Title": "Backend y APIs",
  "skills.r6Desc": "Servicios, datos y autenticación",
  "skills.r7Tag": "07 / MULTIMEDIA",
  "skills.r7Title": "3D y sistemas interactivos",
  "skills.r7Desc": "Base de Ingeniería Multimedia",
  "arch.eyebrow": "03 / ARCHIVO DE PROYECTOS",
  "arch.title": "Más proyectos desarrollados.",
  "arch.github": 'Todos los repositorios públicos <span aria-hidden="true">&#8599;</span>',
  "arch.fSec": "Seguridad",
  "arch.fWeb": "Web y utilidades",
  "arch.fInt": "Interactivos",
  "arch.searchLbl": "Buscar proyectos",
  "arch.searchPh": "Buscar proyectos",
  "arch.empty": "Ningún proyecto coincide con esa búsqueda.",
  "exp.eyebrow": "04 / EXPERIENCIA PROFESIONAL",
  "exp.title": "Práctica técnica y trabajo en equipo.",
  "exp.note": "Prácticas en desarrollo web, programas tecnológicos de ciberseguridad y retos colaborativos.",
  "exp.col1": "EXPERIENCIA PROFESIONAL",
  "exp.cinetikaDate": "JUL — AGO 2024",
  "exp.cinetikaRole": "Desarrollador Web en Prácticas",
  "exp.c1": "Rediseño y mantenimiento de sitios web corporativos en WordPress.",
  "exp.c2": "Mejora de la estructura del sitio y flujos de gestión de contenidos.",
  "exp.c3": "Administración de bases de datos y entornos de alojamiento.",
  "exp.otherTitle": "Experiencia previa no técnica",
  "exp.otherDesc": "Burger King · Consum Cooperativa · ServiPizza. Atención al cliente, coordinación de tareas y reparto en entornos de alta demanda.",
  "exp.col2": "PROGRAMAS TÉCNICOS Y ACTIVIDADES",
  "exp.sabadellTitle": "Programa de Mentoring Banco Sabadell",
  "exp.sabadellDesc": "Resolución de retos de tecnología, estrategia y ciberseguridad junto a profesionales del sector.",
  "exp.nasaDesc": "Desarrollo de NEO Tracker, visualización 3D interactiva de objetos cercanos a la Tierra con Angular y Three.js.",
  "exp.htbLbl": "PRÁCTICA CONTINUA",
  "exp.htbVal": "Laboratorios Hack The Box en explotación web, escalada de privilegios y auditoría de vulnerabilidades.",
  "exp.langLbl": "IDIOMAS",
  "exp.langVal": "Español · Nativo<br />Ruso · Nativo<br />Inglés · Intermedio alto (B2)<br />Valenciano · Intermedio alto (B2)",
  "exp.eduLbl": "FORMACIÓN",
  "exp.eduVal": "Máster en Ciberseguridad · Universidad de Alicante, 2026<br />Grado en Ingeniería Multimedia · Universidad de Alicante, 2025",
  "lab.eyebrow": "05 / HOME LAB",
  "lab.title": "Entorno privado para seguridad práctica.",
  "lab.note": "NAS Debian/Linux enfocado en soberanía de datos, servicios autoalojados, acceso remoto privado y copias recuperables.",
  "lab.mapTitle": "MAPA DE INFRAESTRUCTURA",
  "lab.mapSafe": "RESUMEN PÚBLICO SEGURO",
  "lab.l1Lbl": "CÓMPUTO",
  "lab.l2Lbl": "RED Y ACCESO REMOTO",
  "lab.l2Val": "VPN WireGuard <i>·</i> Segmentación",
  "lab.l3Lbl": "DNS Y SERVICIOS AUTOALOJADOS",
  "lab.l4Lbl": "CONTROL DE ACCESO",
  "lab.l4Val": "Bastionado SSH <i>·</i> MFA <i>·</i> Control de acceso",
  "lab.l5Lbl": "ALMACENAMIENTO Y RECUPERACIÓN",
  "lab.l5Val": "SSD <i>·</i> Btrfs <i>·</i> Copias 3-2-1",
  "lab.foot1": "INSTANTÁNEAS",
  "lab.foot2": "COPIAS LOCALES",
  "lab.foot3": "ALMACENAMIENTO EXTERNO",
  "lab.n1Idx": "A / REDUCIR EXPOSICIÓN",
  "lab.n1Title": "Privado por defecto.",
  "lab.n1Desc": "Segmentación de red y VPN WireGuard para acceso controlado manteniendo al mínimo la superficie externa.",
  "lab.n2Idx": "B / CONTROLAR ACCESOS",
  "lab.n2Title": "Puntos de entrada bastionados.",
  "lab.n2Desc": "SSH configurado únicamente con clave pública, autenticación en dos factores y listas de control.",
  "lab.n3Idx": "C / PLAN DE RECUPERACIÓN",
  "lab.n3Title": "Copias preparadas para restaurar.",
  "lab.n3Desc": "Snapshots diarios, réplica en disco separado y copia externa offline bajo estrategia 3-2-1 automatizada.",
  "lab.link": 'Ver proyectos públicos <span aria-hidden="true">&#8599;</span>',
  "lab.d1Tag": "01 / PLATAFORMA Y SERVICIOS",
  "lab.d1Title": "Qué corre en el laboratorio",
  "lab.d1Intro": "Servidor Debian/Linux con Docker Compose y virtualización KVM/QEMU. El SSD aloja contenedores, bases de datos y discos de VMs; el volumen Btrfs almacena fotos, documentos y multimedia.",
  "lab.d1s1L": "Núcleo de red",
  "lab.d1s1R": "Pi-hole gestiona DNS local, DHCP y filtrado. WireGuard ofrece acceso remoto cifrado y DDNS actualiza el punto de entrada cuando cambia la IP pública.",
  "lab.d1s2L": "Servicios personales",
  "lab.d1s2R": "Immich gestiona copias de fotos. Jellyfin reproduce la biblioteca en modo solo lectura con transcodificación por hardware Intel QSV/VAAPI. Homepage unifica los paneles internos.",
  "lab.d1s3L": "Cómputo y certificados",
  "lab.d1s3R": "Máquina virtual Debian sobre KVM/QEMU y renovación automatizada de certificados Let's Encrypt mediante DNS-01 con acme.sh.",
  "lab.d2Tag": "02 / RED Y SEGURIDAD",
  "lab.d2Title": "Limitar exposición, aislar servicios",
  "lab.d2i1": "Las interfaces administrativas quedan restringidas a la red local o WireGuard; no hay puertos web expuestos a internet.",
  "lab.d2i2": "Pi-hole usa red macvlan dedicada con un puente shim persistente en el host para resolver el aislamiento estándar de Linux.",
  "lab.d2i3": "DNS split-horizon responde IPs privadas en casa y validación DNS-01 sin abrir puerto HTTP 80 al exterior.",
  "lab.d2i4": "UPnP y DMZ desactivados; contenedores sin socket Docker expuesto y bibliotecas multimedia montadas en solo lectura (:ro).",
  "lab.d2i5": "Antivirus en tiempo real antes de incorporar archivos y secretos almacenados fuera de Git con permisos estrictos.",
  "lab.d3Tag": "03 / DATOS Y RECUPERACIÓN",
  "lab.d3Title": "Estrategia 3-2-1 en tres capas",
  "lab.d3b1": "<strong>Snapshots</strong>Instantáneas diarias copy-on-write en Btrfs para revertir cambios accidentales al momento.",
  "lab.d3b2": "<strong>Réplica local</strong>Espejo periódico de datos críticos, estudios y seguridad en un disco físico separado.",
  "lab.d3b3": "<strong>Copia offline</strong>Unidad externa conectada exclusivamente durante la copia manual y guardada desconectada.",
  "lab.d3Note": "Notas de recuperación: restaurar Immich requiere sincronizar biblioteca y base de datos; las VMs se respaldan únicamente apagadas para garantizar integridad.",
  "lab.d4Tag": "04 / MONITORIZACIÓN Y AUTOMATIZACIÓN",
  "lab.d4Title": "Operaciones observables y repetibles",
  "lab.d4p1": "Métricas del host, consultas Pi-hole, telemetría VPN, registros antivirus y logs SSH centralizados para visibilidad operativa.",
  "lab.d4p2": "Scripts y tareas cron automatizan mantenimiento, certificados y flujos de validación con control estricto de estado.",
  "lab.d4i1": "Unidades systemd restauran los puentes de red tras cada reinicio.",
  "lab.d4i2": "Los scripts distinguen éxito completo, parcial o error verificable en lugar de depender solo del código de salida.",
  "lab.d4i3": "Procedimientos documentados para transición DHCP segura, backups coherentes y recuperación ante fallos.",
  "lab.d5Tag": "05 / LECCIONES DE INGENIERÍA",
  "lab.d5Title": "Fallos reales que mejoraron el diseño",
  "lab.d5i1": "<strong>Aislamiento macvlan:</strong> el host Linux no ve directamente interfaces hijas macvlan sin un shim explícito.",
  "lab.d5i2": "<strong>Dispositivos en contenedor:</strong> mapear /dev/dri requiere asignar también permisos/grupos de ejecución (render/video).",
  "lab.d5i3": "<strong>Orden en OpenSSH:</strong> las directivas Include y first-match obligan a ubicar las reglas de bastionado en el orden exacto.",
  "lab.d5i4": "<strong>Transición DHCP:</strong> estabilizar la red fija del host antes de delegar DHCP al contenedor DNS.",
  "lab.d5i5": "<strong>Consistencia en backups:</strong> respaldar BD + biblioteca juntas y copiar discos de VM en frío.",
  "lab.d5i6": "<strong>Semántica Btrfs y SMB:</strong> cuidar subvolúmenes y nomenclatura uniforme en minúsculas entre Linux y clientes SMB.",
  "about.eyebrow": "06 / PERFIL Y FORMACIÓN",
  "about.title": "Criterio de seguridad.<br /><em>Enfoque multimedia.</em>",
  "about.copy": "Mi formación en Ingeniería Multimedia marcó cómo abordo la tecnología: entender el sistema completo, diseñar experiencias claras y construir para quien la usa. Ahora me centro en seguridad de aplicaciones, bastionado Linux y automatización de seguridad.",
  "about.linkedin": 'Conectar en LinkedIn <span aria-hidden="true">&#8599;</span>',
  "about.eduLbl": "EDUCACIÓN",
  "about.edu1": "<strong>Máster en Ciberseguridad</strong><br />Universidad de Alicante · 2026",
  "about.edu2": "<strong>Grado en Ingeniería Multimedia</strong><br />Universidad de Alicante · 2025",
  "about.focusLbl": "ÁREAS DE ENFOQUE",
  "about.focusVal": "Seguridad de aplicaciones · DAST<br />Bastionado Linux · DevSecOps<br />Automatización Python · Seguridad web<br />Docker · WireGuard · Home lab DNSSEC",
  "about.certLbl": "CERTIFICACIONES",
  "about.cert1": "<strong>ISC2 Certified in Cybersecurity (CC)</strong><br />Obtenida el 28 de septiembre de 2026",
  "about.cert2": "HCIA-Security V4.0 · Huawei<br />Introduction to Cybersecurity · Cisco<br />Networking Devices · Cisco",
  "about.availLbl": "DISPONIBILIDAD",
  "about.availVal": "<strong>Disponibilidad inmediata · Jornada completa (40 h/semana)</strong><br />Abierto a puestos junior, prácticas, programas graduate y contratación a tiempo completo en ciberseguridad o ingeniería (presencial, híbrido o remoto).",
  "about.cvLbl": "CV BAJO SOLICITUD",
  "about.cvDesc": "Puedo enviar un CV adaptado de forma privada para procesos acordes a mi perfil.",
  "about.cvBtn": 'Solicitar CV <span aria-hidden="true">&#8599;</span>',
  "footer.eyebrow": "¿TIENES UN RETO DE SEGURIDAD?",
  "footer.cta": 'Hablemos <span aria-hidden="true">&#8599;</span>',
  "footer.loc": "ALICANTE, ESPAÑA · 2026",
};

const projects = [
  {
    name: "Tachón",
    symbol: "TC",
    category: "security",
    label: { en: "PRIVACY & SECURITY TOOL", es: "PRIVACIDAD Y SEGURIDAD" },
    description: {
      en: "Local PII and metadata redaction tool for PDFs and images (DNI, IBAN, phone numbers, EXIF) with zero cloud uploads.",
      es: "Herramienta local de borrado real de PII y metadatos en PDFs e imágenes (DNI, IBAN, teléfonos, EXIF) sin subir archivos a la nube.",
    },
    stack: "Python · PyMuPDF · Pillow · Privacy",
    links: [{ label: { en: "Source code", es: "Código fuente" }, href: "https://github.com/DenReanin/tachon" }],
  },
  {
    name: "File Encryption App",
    symbol: "AES",
    category: "security",
    label: { en: "SECURITY PROJECT", es: "PROYECTO DE SEGURIDAD" },
    description: {
      en: "Desktop file encryption tool combining RSA-OAEP key exchange, AES-256-GCM authenticated encryption and PBKDF2 login.",
      es: "Aplicación de escritorio para cifrado híbrido de archivos con intercambio RSA-OAEP, AES-256-GCM autenticado y acceso PBKDF2.",
    },
    stack: "Java · RSA-OAEP · AES-256-GCM · PBKDF2",
    links: [{ label: { en: "Source code", es: "Código fuente" }, href: "https://github.com/DenReanin/encryption-app" }],
  },
  {
    name: "ISC2-CC Study Adaptation",
    symbol: "CC",
    category: "security",
    label: { en: "FORK · STUDY TOOL", es: "FORK · MATERIAL DE ESTUDIO" },
    description: {
      en: "A personal adaptation of ISC2 Certified in Cybersecurity study material tailored for mobile review on a Google Pixel device.",
      es: "Adaptación personal del material de estudio de ISC2 Certified in Cybersecurity optimizada para repaso en dispositivo móvil.",
    },
    stack: "JavaScript · Security fundamentals",
    links: [
      { label: { en: "Study site", es: "Sitio de estudio" }, href: "https://samuel2793.github.io/ISC2-CC/" },
      { label: { en: "Repository", es: "Repositorio" }, href: "https://github.com/DenReanin/ISC2-CC" },
    ],
  },
  {
    name: "ReaninSystem",
    symbol: "RS",
    category: "web",
    label: { en: "DESKTOP HUB · PRIVATE", es: "HUB DE ESCRITORIO · PRIVADO" },
    description: {
      en: "Unified desktop launcher and updater that checks GitHub Releases, validates checksums and orchestrates local security tools.",
      es: "Lanzador unificado de escritorio que verifica versiones en GitHub Releases, valida hashes SHA-256 y ejecuta herramientas locales.",
    },
    stack: "TypeScript · React · Node.js · GitHub API",
    links: [{ label: { en: "UI preview", es: "Vista previa UI" }, href: "reaninsystem-preview.png" }],
    privateNote: true,
  },
  {
    name: "Stream Deck Tablet",
    symbol: "SD",
    category: "web",
    label: { en: "PERSONAL TOOL", es: "HERRAMIENTA PERSONAL" },
    description: {
      en: "Tablet-friendly WiFi PWA for triggering OBS scenes, Soundpad audio, macros and system shortcuts on Linux and Windows PCs.",
      es: "PWA WiFi para tablet y móvil que lanza escenas OBS, sonidos, macros y atajos en ordenadores Linux y Windows.",
    },
    stack: "Python · FastAPI · WebSocket · PWA",
    links: [{ label: { en: "Source code", es: "Código fuente" }, href: "https://github.com/DenReanin/stream-deck-tablet" }],
  },
  {
    name: "Chess Master",
    symbol: "CM",
    category: "interactive",
    label: { en: "INTERACTIVE ANALYZER", es: "ANALIZADOR INTERACTIVO" },
    description: {
      en: "Tactical chess analyzer for Chess.com and PGN imports powered by Stockfish + heuristic fallback, offline coach and puzzle drills.",
      es: "Analizador táctico de partidas Chess.com/PGN con Stockfish, respaldo heurístico local, coach IA/offline y ejercicios interactivos.",
    },
    stack: "Python · Stockfish · FastAPI · PWA",
    links: [{ label: { en: "Source code", es: "Código fuente" }, href: "https://github.com/DenReanin/chess-master" }],
  },
  {
    name: "AENA Exam Simulator",
    symbol: "AE",
    category: "interactive",
    label: { en: "INTERACTIVE SIMULATOR · PRIVATE", es: "SIMULADOR INTERACTIVO · PRIVADO" },
    description: {
      en: "Interactive psychometric and English B2 exam trainer featuring study mode, offline TTS listening, official scoring and history.",
      es: "Simulador interactivo psicotécnico e inglés B2 con modo estudio, audio TTS, puntuación oficial e historial de progreso.",
    },
    stack: "TypeScript · Web Audio / TTS · Scoring",
    links: [],
    privateNote: true,
  },
];

// Snapshot default English DOM values so switching ES -> EN restores exact markup
const EN_STRINGS = { title: document.title };
document.querySelectorAll("[data-t]").forEach((el) => {
  EN_STRINGS[el.dataset.t] = el.textContent;
});
document.querySelectorAll("[data-th]").forEach((el) => {
  EN_STRINGS[el.dataset.th] = el.innerHTML;
});
document.querySelectorAll("[data-tp]").forEach((el) => {
  EN_STRINGS[el.dataset.tp] = el.getAttribute("placeholder") || "";
});

let currentLang = "en";
let selectedFilter = "all";
let selectedSkillCategory = "all";

const projectGrid = document.querySelector("#project-grid");
const projectSearch = document.querySelector("#project-search");
const archiveCount = document.querySelector("#archive-count");
const archiveEmpty = document.querySelector("#archive-empty");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const skillFilterButtons = [...document.querySelectorAll(".skill-filter")];
const skillRows = [...document.querySelectorAll(".skill-row")];
const skillCount = document.querySelector("#skill-count");
const langToggle = document.querySelector("#lang-toggle");

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function updateSkillCounter(visibleLen) {
  if (currentLang === "es") {
    skillCount.textContent = `${visibleLen} ${visibleLen === 1 ? "área técnica" : "áreas técnicas"}`;
  } else {
    skillCount.textContent = `${visibleLen} ${visibleLen === 1 ? "skill area" : "skill areas"}`;
  }
}

function renderProjects() {
  const query = projectSearch.value.trim().toLowerCase();
  const visibleProjects = projects.filter((project) => {
    const matchesFilter = selectedFilter === "all" || project.category === selectedFilter;
    const desc = project.description[currentLang];
    const lbl = project.label[currentLang];
    const searchableText = `${project.name} ${lbl} ${desc} ${project.stack}`.toLowerCase();
    return matchesFilter && searchableText.includes(query);
  });

  const privBadge = currentLang === "es" ? "Repositorio privado" : "Private repository";
  projectGrid.innerHTML = visibleProjects.map((project) => {
    const linkItems = project.links
      .map((link) => `<a href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer">${escapeHtml(link.label[currentLang])} <span aria-hidden="true">&#8599;</span></a>`)
      .join("");
    const privateTag = project.privateNote
      ? `<span class="archive-card-private">${privBadge}</span>`
      : "";

    return `
      <article class="archive-card">
        <div class="archive-card-top"><span>${escapeHtml(project.label[currentLang])}</span><span>${escapeHtml(project.category.toUpperCase())}</span></div>
        <div class="archive-card-symbol" aria-hidden="true">${escapeHtml(project.symbol)}</div>
        <h3>${escapeHtml(project.name)}</h3>
        <p>${escapeHtml(project.description[currentLang])}</p>
        <p class="archive-card-stack">${escapeHtml(project.stack)}</p>
        <div class="archive-card-links">${linkItems}${privateTag}</div>
      </article>
    `;
  }).join("");

  if (currentLang === "es") {
    archiveCount.textContent = `${visibleProjects.length} ${visibleProjects.length === 1 ? "proyecto" : "proyectos"}`;
  } else {
    archiveCount.textContent = `${visibleProjects.length} ${visibleProjects.length === 1 ? "project" : "projects"}`;
  }
  archiveEmpty.hidden = visibleProjects.length !== 0;
}

function applyLanguage(lang, persist = true) {
  currentLang = lang === "es" ? "es" : "en";
  const dict = currentLang === "es" ? ES_STRINGS : EN_STRINGS;
  document.documentElement.lang = currentLang;
  document.title = dict.title || EN_STRINGS.title;

  document.querySelectorAll("[data-t]").forEach((el) => {
    const k = el.dataset.t;
    if (dict[k] !== undefined) el.textContent = dict[k];
  });
  document.querySelectorAll("[data-th]").forEach((el) => {
    const k = el.dataset.th;
    if (dict[k] !== undefined) el.innerHTML = dict[k];
  });
  document.querySelectorAll("[data-tp]").forEach((el) => {
    const k = el.dataset.tp;
    if (dict[k] !== undefined) el.setAttribute("placeholder", dict[k]);
  });

  if (langToggle) {
    langToggle.textContent = currentLang === "es" ? "EN" : "ES";
    langToggle.setAttribute("aria-label", currentLang === "es" ? "Switch to English" : "Cambiar a español");
  }

  const activePill = document.querySelector(".coverage-grid span.is-scanning");
  const probeSpan = document.querySelector(".gung-probe-line span");
  if (activePill && probeSpan) {
    probeSpan.textContent = currentLang === "es"
      ? (activePill.dataset.descEs || activePill.dataset.desc)
      : activePill.dataset.desc;
  }

  const visibleSkillLen = skillRows.filter((row) => !row.hidden).length;
  updateSkillCounter(visibleSkillLen);
  renderProjects();

  if (persist) {
    try { localStorage.setItem("den_lang", currentLang); } catch {}
  }
}

if (langToggle) {
  langToggle.addEventListener("click", () => {
    applyLanguage(currentLang === "en" ? "es" : "en");
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedFilter = button.dataset.filter;
    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });
    renderProjects();
  });
});

projectSearch.addEventListener("input", renderProjects);

skillFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedSkillCategory = button.dataset.skillFilter;
    skillFilterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });

    const visibleRows = skillRows.filter((row) => {
      const isVisible = selectedSkillCategory === "all" || row.dataset.skillCategory === selectedSkillCategory;
      row.hidden = !isVisible;
      return isVisible;
    });

    updateSkillCounter(visibleRows.length);
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  siteNav.classList.toggle("is-open", isOpen);
});

siteNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
  }
});

document.querySelectorAll("[data-copy-email]").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const email = btn.getAttribute("data-copy-email") || "";
    try {
      await navigator.clipboard.writeText(email);
      btn.textContent = currentLang === "es" ? ES_STRINGS["copy.copied"] : "Copied";
      btn.classList.add("is-copied");
    } catch {
      btn.textContent = email;
    }
    setTimeout(() => {
      btn.textContent = currentLang === "es" ? ES_STRINGS["copy.email"] : EN_STRINGS["copy.email"];
      btn.classList.remove("is-copied");
    }, 1800);
  });
});

// Gung12 interactive coverage scanner
const gungGrid = document.querySelector(".coverage-grid");
const gungProbeText = document.querySelector(".gung-probe-line span");
if (gungGrid && gungProbeText) {
  const pills = [...gungGrid.querySelectorAll("span")];
  let gungIdx = 0;
  let gungPaused = false;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const activatePill = (pill) => {
    pills.forEach((p) => p.classList.remove("is-scanning"));
    pill.classList.add("is-scanning");
    gungProbeText.textContent = currentLang === "es"
      ? (pill.dataset.descEs || pill.dataset.desc || pill.textContent)
      : (pill.dataset.desc || pill.textContent);
  };

  pills.forEach((pill, i) => {
    pill.tabIndex = 0;
    const onFocusOrHover = () => {
      gungPaused = true;
      gungIdx = i;
      activatePill(pill);
    };
    pill.addEventListener("mouseenter", onFocusOrHover);
    pill.addEventListener("focus", onFocusOrHover);
    pill.addEventListener("click", onFocusOrHover);
  });
  gungGrid.addEventListener("mouseleave", () => {
    gungPaused = false;
  });

  if (!reducedMotion && pills.length > 0) {
    setInterval(() => {
      if (gungPaused || document.hidden) return;
      gungIdx = (gungIdx + 1) % pills.length;
      activatePill(pills[gungIdx]);
    }, 1700);
  }
}

// Kno-Tic bar fill & subtle Scroll-Reveal + ScrollSpy
const revealTargets = [...document.querySelectorAll(".featured-project, .multimedia-project, .lab-map, .lab-note")];
revealTargets.forEach((el) => el.setAttribute("data-reveal", ""));

const knoticPreview = document.querySelector(".knotic-preview");
if ("IntersectionObserver" in window) {
  const revObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          if (entry.target.contains(knoticPreview) && knoticPreview) {
            knoticPreview.classList.add("is-bars-active");
          }
          revObs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  revealTargets.forEach((el) => revObs.observe(el));

  const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
  const sections = navLinks
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);
  const spyObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = `#${entry.target.id}`;
        navLinks.forEach((a) => a.classList.toggle("is-current", a.getAttribute("href") === id));
      });
    },
    { rootMargin: "-25% 0px -60% 0px" },
  );
  sections.forEach((sec) => spyObs.observe(sec));
} else {
  revealTargets.forEach((el) => el.classList.add("is-revealed"));
  if (knoticPreview) knoticPreview.classList.add("is-bars-active");
}

// Hero Option 2: Lightweight Interactive Node Mesh Canvas
function initHeroMesh() {
  const canvas = document.getElementById("hero-mesh");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const NODE_COUNT = 28;
  const LINK_DIST = 115;
  let width = 0;
  let height = 0;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let visible = true;
  const pointer = { x: -999, y: -999, active: false };

  const nodes = Array.from({ length: NODE_COUNT }, (_, idx) => ({
    x: ((idx * 97) % 100) / 100,
    y: ((idx * 53 + 17) % 100) / 100,
    vx: (Math.sin(idx * 1.9) * 0.28) || 0.14,
    vy: (Math.cos(idx * 2.3) * 0.26) || -0.14,
    r: idx % 5 === 0 ? 3.2 : 2.1,
    core: idx % 5 === 0,
  }));

  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = Math.max(260, Math.round(rect.width || 460));
    height = Math.max(200, Math.round(rect.height || 290));
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  let initializedPositions = false;
  function ensurePixelPositions() {
    if (initializedPositions) return;
    nodes.forEach((n) => {
      n.px = 20 + n.x * (width - 40);
      n.py = 20 + n.y * (height - 40);
    });
    initializedPositions = true;
  }

  let frame = 0;
  function draw() {
    frame += 1;
    ensurePixelPositions();
    ctx.clearRect(0, 0, width, height);

    ctx.strokeStyle = "rgba(169, 194, 255, 0.06)";
    ctx.lineWidth = 1;
    for (let gx = 40; gx < width; gx += 40) {
      ctx.beginPath();
      ctx.moveTo(gx, 0);
      ctx.lineTo(gx, height);
      ctx.stroke();
    }
    for (let gy = 40; gy < height; gy += 40) {
      ctx.beginPath();
      ctx.moveTo(0, gy);
      ctx.lineTo(width, gy);
      ctx.stroke();
    }

    if (!reduced) {
      nodes.forEach((n) => {
        if (pointer.active) {
          const dx = pointer.x - n.px;
          const dy = pointer.y - n.py;
          const d = Math.hypot(dx, dy);
          if (d > 8 && d < 120) {
            n.px += (dx / d) * 0.25;
            n.py += (dy / d) * 0.25;
          }
        }
        n.px += n.vx;
        n.py += n.vy;
        if (n.px < 12 || n.px > width - 12) n.vx *= -1;
        if (n.py < 12 || n.py > height - 12) n.vy *= -1;
        n.px = Math.max(10, Math.min(width - 10, n.px));
        n.py = Math.max(10, Math.min(height - 10, n.py));
      });
    }

    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = i + 1; j < nodes.length; j += 1) {
        const a = nodes[i];
        const b = nodes[j];
        const dist = Math.hypot(a.px - b.px, a.py - b.py);
        if (dist > LINK_DIST) continue;
        const alpha = (1 - dist / LINK_DIST) * 0.42;
        ctx.strokeStyle = `rgba(142, 175, 255, ${alpha.toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.px, a.py);
        ctx.lineTo(b.px, b.py);
        ctx.stroke();

        if (!reduced && (i + j) % 7 === 0 && a.core) {
          const t = ((frame * 0.014 + i * 0.2) % 1);
          const tx = a.px + (b.px - a.px) * t;
          const ty = a.py + (b.py - a.py) * t;
          ctx.fillStyle = "rgba(169, 194, 255, 0.9)";
          ctx.beginPath();
          ctx.arc(tx, ty, 1.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (pointer.active) {
        const pDist = Math.hypot(nodes[i].px - pointer.x, nodes[i].py - pointer.y);
        if (pDist < 130) {
          ctx.strokeStyle = `rgba(45, 99, 232, ${((1 - pDist / 130) * 0.7).toFixed(3)})`;
          ctx.beginPath();
          ctx.moveTo(nodes[i].px, nodes[i].py);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }
      }
    }

    nodes.forEach((n) => {
      if (n.core) {
        ctx.strokeStyle = "rgba(169, 194, 255, 0.35)";
        ctx.beginPath();
        ctx.arc(n.px, n.py, n.r + 4, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.fillStyle = n.core ? "#a9c2ff" : "#4b7bec";
      ctx.beginPath();
      ctx.arc(n.px, n.py, n.r, 0, Math.PI * 2);
      ctx.fill();
    });

    if (visible && !reduced && !document.hidden) {
      requestAnimationFrame(draw);
    }
  }

  canvas.addEventListener("pointermove", (ev) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ev.clientX - rect.left;
    pointer.y = ev.clientY - rect.top;
    pointer.active = true;
  });
  canvas.addEventListener("pointerleave", () => {
    pointer.active = false;
  });

  window.addEventListener("resize", () => {
    initializedPositions = false;
    resize();
    if (reduced) draw();
  });

  if ("IntersectionObserver" in window) {
    new IntersectionObserver((entries) => {
      const wasVisible = visible;
      visible = Boolean(entries[0] && entries[0].isIntersecting);
      if (visible && !wasVisible && !reduced) {
        requestAnimationFrame(draw);
      }
    }).observe(canvas);
  }

  resize();
  draw();
}

// Determine initial language cleanly from ?lang= or localStorage (default English)
const urlLang = new URLSearchParams(window.location.search).get("lang");
let savedLang = null;
try { savedLang = localStorage.getItem("den_lang"); } catch {}
const initialLang = (urlLang === "es" || urlLang === "en") ? urlLang : (savedLang === "es" ? "es" : "en");
applyLanguage(initialLang, false);
initHeroMesh();
