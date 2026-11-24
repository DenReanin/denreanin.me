document.documentElement.classList.add("has-js");

const projects = [
  {
    name: "Tachón",
    symbol: "TC",
    category: "security",
    label: "PRIVACY & SECURITY TOOL",
    description: "Local PII and metadata redaction tool for PDFs and images (DNI, IBAN, phone numbers, EXIF) with zero cloud uploads.",
    stack: "Python · PyMuPDF · Pillow · Privacy",
    links: [{ label: "Source code", href: "https://github.com/DenReanin/tachon" }],
  },
  {
    name: "File Encryption App",
    symbol: "AES",
    category: "security",
    label: "SECURITY PROJECT",
    description: "Desktop file encryption tool combining RSA-OAEP key exchange, AES-256-GCM authenticated encryption and PBKDF2 login.",
    stack: "Java · RSA-OAEP · AES-256-GCM · PBKDF2",
    links: [{ label: "Source code", href: "https://github.com/DenReanin/encryption-app" }],
  },
  {
    name: "ISC2-CC Study Adaptation",
    symbol: "CC",
    category: "security",
    label: "FORK · STUDY TOOL",
    description: "A personal adaptation of ISC2 Certified in Cybersecurity study material tailored for mobile review on a Google Pixel device.",
    stack: "JavaScript · Security fundamentals",
    links: [
      { label: "Study site", href: "https://samuel2793.github.io/ISC2-CC/" },
      { label: "Repository", href: "https://github.com/DenReanin/ISC2-CC" },
    ],
  },
  {
    name: "ReaninSystem",
    symbol: "RS",
    category: "web",
    label: "DESKTOP HUB · PRIVATE",
    description: "Unified desktop launcher and updater that checks GitHub Releases, validates versions and orchestrates local security tools.",
    stack: "TypeScript · React · Node.js · GitHub API",
    links: [],
  },
  {
    name: "Stream Deck Tablet",
    symbol: "SD",
    category: "web",
    label: "PERSONAL TOOL",
    description: "Tablet-friendly WiFi PWA for triggering OBS scenes, Soundpad audio, macros and system shortcuts on Linux and Windows PCs.",
    stack: "Python · FastAPI · WebSocket · PWA",
    links: [{ label: "Source code", href: "https://github.com/DenReanin/stream-deck-tablet" }],
  },
  {
    name: "Chess Master",
    symbol: "CM",
    category: "interactive",
    label: "INTERACTIVE ANALYZER · PRIVATE",
    description: "Tactical chess analyzer for Chess.com and PGN imports powered by Stockfish evaluations, move classification and puzzle drills.",
    stack: "Python · Stockfish · Web UI · PGN",
    links: [],
  },
  {
    name: "AENA Exam Simulator",
    symbol: "AE",
    category: "interactive",
    label: "INTERACTIVE SIMULATOR · PRIVATE",
    description: "Interactive psychometric and English B2 exam trainer featuring study mode, offline TTS listening, official scoring and history.",
    stack: "TypeScript · Web Audio / TTS · Scoring",
    links: [],
  },
];

const projectGrid = document.querySelector("#project-grid");
const projectSearch = document.querySelector("#project-search");
const archiveCount = document.querySelector("#archive-count");
const archiveEmpty = document.querySelector("#archive-empty");
const filterButtons = [...document.querySelectorAll(".filter-button")];
let selectedFilter = "all";

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function renderProjects() {
  const query = projectSearch.value.trim().toLowerCase();
  const visibleProjects = projects.filter((project) => {
    const matchesFilter = selectedFilter === "all" || project.category === selectedFilter;
    const searchableText = `${project.name} ${project.label} ${project.description} ${project.stack}`.toLowerCase();
    return matchesFilter && searchableText.includes(query);
  });

  projectGrid.innerHTML = visibleProjects.map((project) => {
    const linksHtml = project.links.length
      ? project.links
          .map((link) => `<a href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)} <span aria-hidden="true">&#8599;</span></a>`)
          .join("")
      : `<span class="archive-card-private">Private repository</span>`;

    return `
      <article class="archive-card">
        <div class="archive-card-top"><span>${escapeHtml(project.label)}</span><span>${escapeHtml(project.category.toUpperCase())}</span></div>
        <div class="archive-card-symbol" aria-hidden="true">${escapeHtml(project.symbol)}</div>
        <h3>${escapeHtml(project.name)}</h3>
        <p>${escapeHtml(project.description)}</p>
        <p class="archive-card-stack">${escapeHtml(project.stack)}</p>
        <div class="archive-card-links">${linksHtml}</div>
      </article>
    `;
  }).join("");

  archiveCount.textContent = `${visibleProjects.length} ${visibleProjects.length === 1 ? "project" : "projects"}`;
  archiveEmpty.hidden = visibleProjects.length !== 0;
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

const skillFilterButtons = [...document.querySelectorAll(".skill-filter")];
const skillRows = [...document.querySelectorAll(".skill-row")];
const skillCount = document.querySelector("#skill-count");

skillFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.skillFilter;
    skillFilterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });

    const visibleRows = skillRows.filter((row) => {
      const isVisible = selectedCategory === "all" || row.dataset.skillCategory === selectedCategory;
      row.hidden = !isVisible;
      return isVisible;
    });

    skillCount.textContent = `${visibleRows.length} ${visibleRows.length === 1 ? "skill area" : "skill areas"}`;
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

// Copy email buttons
document.querySelectorAll("[data-copy-email]").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const email = btn.getAttribute("data-copy-email") || "";
    const original = btn.textContent;
    try {
      await navigator.clipboard.writeText(email);
      btn.textContent = "Copied";
      btn.classList.add("is-copied");
    } catch {
      btn.textContent = email;
    }
    setTimeout(() => {
      btn.textContent = original;
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
    gungProbeText.textContent = pill.dataset.desc || pill.textContent;
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

    // Subtle background grid
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

    // Connections
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

        // Occasional data pulse along first matching primary edge
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

    // Nodes
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

renderProjects();
initHeroMesh();
