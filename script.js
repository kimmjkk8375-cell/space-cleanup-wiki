const planetData = [
  {
    id: "beginner-guide",
    name: "Beginner Guide",
    description: "Core controls, early scavenging routes, and the first upgrades every collector should understand.",
    page: "pages/beginner-guide.html",
    kind: "gas",
    category: "Wiki Planet",
    colors: ["#f3c9d8", "#a9e8ff", "#fff0a8"],
    orbitRadius: 212,
    size: 34,
    spinDuration: 52,
    speed: 0.000032,
    angle: 0.2,
  },
  {
    id: "world",
    name: "World",
    description: "A map of ruined machine zones, salvage routes, safe points, and the wider orbital frontier.",
    page: "pages/world.html",
    kind: "rock",
    category: "Wiki Planet",
    colors: ["#b68a69", "#695346", "#d8c0a0"],
    orbitRadius: 288,
    size: 44,
    spinDuration: 68,
    speed: 0.000026,
    angle: 1.18,
  },
  {
    id: "orbit-zero",
    name: "Orbit-Zero",
    description: "The first dead machine planet and the starting point of the JUNK COLLECTORS expedition.",
    page: "pages/orbit-zero.html",
    kind: "machine",
    category: "Wiki Planet",
    colors: ["#7fdcc9", "#4b6570", "#d8ffff"],
    orbitRadius: 358,
    size: 40,
    spinDuration: 74,
    speed: 0.000023,
    angle: 2.08,
  },
  {
    id: "area-ai",
    name: "AREA AI",
    description: "A damaged guardian intelligence still maintaining the dead machine planet.",
    page: "pages/area-ai.html",
    kind: "storm",
    category: "Wiki Planet",
    colors: ["#7df6ff", "#8b8cff", "#e9faff"],
    orbitRadius: 286,
    size: 38,
    spinDuration: 58,
    speed: 0.000028,
    angle: 3.05,
  },
  {
    id: "items",
    name: "Items",
    description: "Scrap, tools, upgrade parts, field supplies, and rare salvage found across the system.",
    page: "pages/items.html",
    kind: "desert",
    category: "Wiki Planet",
    colors: ["#d8c27a", "#b88648", "#f4e2a6"],
    orbitRadius: 424,
    size: 33,
    spinDuration: 63,
    speed: 0.000019,
    angle: 3.92,
  },
  {
    id: "monsters",
    name: "Monsters",
    description: "Hostile machines, corrupted collectors, and roaming threats that patrol the abandoned zones.",
    page: "pages/monsters.html",
    kind: "cracked",
    category: "Wiki Planet",
    colors: ["#c77d86", "#432c3e", "#ffb2a8"],
    orbitRadius: 382,
    size: 42,
    spinDuration: 71,
    speed: 0.000022,
    angle: 4.86,
  },
  {
    id: "updates",
    name: "Updates",
    description: "Patch notes, balance changes, new sectors, and wiki revision history.",
    page: "pages/updates.html",
    kind: "ice",
    category: "Wiki Planet",
    colors: ["#bdf7d0", "#9ed4ff", "#ffffff"],
    orbitRadius: 488,
    size: 32,
    spinDuration: 78,
    speed: 0.000017,
    angle: 5.72,
  },
];

const celestialData = [
  {
    id: "black-hole",
    name: "Black Hole",
    description: "A silent gravity well at the edge of the route map. It stores lore about lost sectors and forbidden salvage.",
    page: "pages/black-hole.html",
    kind: "black-hole",
    category: "Deep-Space Object",
    colors: ["#000000", "#7aa3ff", "#e8f8ff"],
    orbitRadius: 544,
    size: 82,
    speed: 0.000011,
    angle: 2.74,
  },
  {
    id: "quasar",
    name: "Quasar Gate",
    description: "A distant blue-white beacon used for long-range navigation, signal archives, and future expansion notes.",
    page: "pages/quasar.html",
    kind: "quasar",
    category: "Deep-Space Object",
    colors: ["#c9f5ff", "#5a7cff", "#fff6bd"],
    orbitRadius: 586,
    size: 74,
    speed: 0.000009,
    angle: 0.96,
  },
  {
    id: "relic-comet",
    name: "Relic Comet",
    description: "A slow-moving ice-and-scrap body carrying fragments of old machines and rare field rumors.",
    page: "pages/relic-comet.html",
    kind: "comet",
    category: "Deep-Space Object",
    colors: ["#e6fbff", "#8bd7ff", "#d2b6ff"],
    orbitRadius: 512,
    size: 30,
    speed: 0.000014,
    angle: 5.28,
  },
];

const allObjects = [...planetData, ...celestialData];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const stage = document.querySelector("#system-stage");
const orbitField = document.querySelector("#orbit-field");
const pageGrid = document.querySelector("#page-grid");
const panel = document.querySelector("#info-panel");
const panelKicker = document.querySelector("#panel-kicker");
const panelTitle = document.querySelector("#panel-title");
const panelDescription = document.querySelector("#panel-description");
const panelLink = document.querySelector("#panel-link");
const panelClose = document.querySelector(".panel-close");
const starfield = document.querySelector("#starfield");

let rotation = 0;
let zoom = 1;
let autoAngle = 0;
let orbitTime = 0;
let lastTime = 0;
let dragStartX = 0;
let dragStartRotation = 0;
let isDragging = false;
let didDrag = false;
let pointerStartObjectId = null;
let dragSettledAt = 0;
let selectedObjectId = null;
let focusedObjectId = null;
let stars = [];

function createObjects() {
  allObjects.forEach((item) => {
    const button = document.createElement("button");
    button.className = `${celestialData.includes(item) ? "celestial" : "planet"} orbital-object ${item.kind}`;
    button.type = "button";
    button.dataset.id = item.id;
    button.dataset.kind = item.kind;
    button.style.setProperty("--object-a", item.colors[0]);
    button.style.setProperty("--object-b", item.colors[1]);
    button.style.setProperty("--object-c", item.colors[2]);
    button.style.setProperty("--spin-duration", `${item.spinDuration || 64}s`);
    button.style.width = `${item.size}px`;
    button.style.height = `${item.size}px`;
    button.setAttribute("aria-label", `Open ${item.name} information`);

    const body = document.createElement("span");
    body.className = celestialData.includes(item) ? "celestial-body" : "planet-body";
    body.setAttribute("aria-hidden", "true");

    const label = document.createElement("span");
    label.className = "object-label";
    label.textContent = item.name;

    button.append(body, label);
    orbitField.appendChild(button);

    button.addEventListener("pointerenter", () => focusObject(item.id));
    button.addEventListener("pointerleave", () => clearFocus());
    button.addEventListener("focus", () => focusObject(item.id));
    button.addEventListener("blur", () => clearFocus());

    const card = document.createElement("a");
    card.className = "page-card";
    card.href = item.page;
    card.innerHTML = `<strong>${item.name}</strong><span>${item.description}</span>`;
    pageGrid.appendChild(card);
  });
}

function findObject(id) {
  return allObjects.find((item) => item.id === id);
}

function openPanel(id) {
  const item = findObject(id);
  if (!item) {
    return;
  }

  selectedObjectId = id;
  panelKicker.textContent = item.category;
  panelTitle.textContent = item.name;
  panelDescription.textContent = item.description;
  panelLink.href = item.page;
  panel.hidden = false;

  document.querySelectorAll(".orbital-object").forEach((node) => {
    node.classList.toggle("is-selected", node.dataset.id === id);
  });
}

function closePanel() {
  selectedObjectId = null;
  panel.hidden = true;
  document.querySelectorAll(".orbital-object").forEach((node) => node.classList.remove("is-selected"));
}

function focusObject(id) {
  focusedObjectId = id;
  stage.classList.add("is-focusing");
  document.querySelectorAll(".orbital-object").forEach((node) => {
    const isFocused = node.dataset.id === id;
    node.classList.toggle("is-focused", isFocused);
    node.classList.toggle("is-dimmed", !isFocused);
  });
}

function clearFocus() {
  focusedObjectId = null;
  stage.classList.remove("is-focusing");
  document.querySelectorAll(".orbital-object").forEach((node) => {
    node.classList.remove("is-focused", "is-dimmed");
  });
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getStageScale() {
  const width = stage.clientWidth;
  if (width < 520) {
    return 0.56;
  }
  if (width < 760) {
    return 0.76;
  }
  return 1;
}

function renderObjects(time = 0) {
  const delta = lastTime ? time - lastTime : 16;
  lastTime = time;

  const dragCoolingDown = performance.now() - dragSettledAt < 1200;
  if (!prefersReducedMotion && !isDragging && !dragCoolingDown) {
    autoAngle += delta * 0.000023;
    orbitTime += delta;
  }

  const stageScale = getStageScale() * zoom;
  const tilt = 0.34;
  const nodes = document.querySelectorAll(".orbital-object");

  allObjects.forEach((item, index) => {
    const node = nodes[index];
    const angle = item.angle + autoAngle + rotation + orbitTime * item.speed;
    const radius = item.orbitRadius * stageScale;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle);
    const y = Math.sin(angle) * radius * tilt;
    const depthScale = 0.7 + (z + 1) * 0.16;
    const opacity = 0.7 + (z + 1) * 0.13;

    node.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) scale(${depthScale})`;
    node.style.zIndex = String(Math.round((z + 1) * 100));
    node.style.opacity = String(opacity);
  });

  requestAnimationFrame(renderObjects);
}

function setZoom(nextZoom) {
  zoom = clamp(nextZoom, 0.76, 1.14);
}

function setupStars() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const count = Math.floor(Math.min(980, Math.max(320, width * height * 0.0005)));

  stars = Array.from({ length: count }, (_, index) => ({
    x: (Math.sin(index * 92.173) * 0.5 + 0.5) * width,
    y: (Math.sin(index * 38.519 + 8) * 0.5 + 0.5) * height,
    radius: 0.38 + ((index * 17) % 13) * 0.09,
    phase: index * 0.77,
    glow: index % 6 === 0,
    sparkle: index % 23 === 0,
  }));
}

function drawStarfield(time = 0) {
  const context = starfield.getContext("2d");
  const pixelRatio = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;

  if (starfield.width !== Math.floor(width * pixelRatio) || starfield.height !== Math.floor(height * pixelRatio)) {
    starfield.width = Math.floor(width * pixelRatio);
    starfield.height = Math.floor(height * pixelRatio);
    starfield.style.width = `${width}px`;
    starfield.style.height = `${height}px`;
    setupStars();
  }

  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  context.clearRect(0, 0, width, height);
  context.fillStyle = "#000000";
  context.fillRect(0, 0, width, height);

  stars.forEach((star) => {
    const twinkle = prefersReducedMotion ? 0.7 : 0.58 + Math.sin(time * 0.00038 + star.phase) * 0.22;
    context.beginPath();
    context.fillStyle = `rgba(222, 242, 255, ${twinkle})`;
    context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    context.fill();

    if (star.glow) {
      const glow = context.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius * 7);
      glow.addColorStop(0, `rgba(190, 232, 255, ${twinkle * 0.32})`);
      glow.addColorStop(1, "rgba(170, 220, 255, 0)");
      context.fillStyle = glow;
      context.fillRect(star.x - star.radius * 7, star.y - star.radius * 7, star.radius * 14, star.radius * 14);
    }

    if (star.sparkle) {
      context.strokeStyle = `rgba(225, 246, 255, ${twinkle * 0.46})`;
      context.lineWidth = 0.5;
      context.beginPath();
      context.moveTo(star.x - star.radius * 4, star.y);
      context.lineTo(star.x + star.radius * 4, star.y);
      context.moveTo(star.x, star.y - star.radius * 4);
      context.lineTo(star.x, star.y + star.radius * 4);
      context.stroke();
    }
  });

  requestAnimationFrame(drawStarfield);
}

function handlePointerDown(event) {
  isDragging = true;
  didDrag = false;
  pointerStartObjectId = event.target.closest(".orbital-object")?.dataset.id || null;
  dragStartX = event.clientX;
  dragStartRotation = rotation;
  stage.setPointerCapture(event.pointerId);
  document.body.classList.add("is-dragging");
}

function handlePointerMove(event) {
  if (!isDragging) {
    return;
  }

  const movement = event.clientX - dragStartX;
  if (Math.abs(movement) > 4) {
    didDrag = true;
  }
  rotation = dragStartRotation + movement * 0.0065;
}

function handlePointerUp(event) {
  if (!isDragging) {
    return;
  }

  isDragging = false;
  dragSettledAt = performance.now();
  stage.releasePointerCapture(event.pointerId);
  document.body.classList.remove("is-dragging");

  if (!didDrag && pointerStartObjectId) {
    openPanel(pointerStartObjectId);
  }

  pointerStartObjectId = null;
}

function bindEvents() {
  stage.addEventListener("pointerdown", handlePointerDown);
  stage.addEventListener("pointermove", handlePointerMove);
  stage.addEventListener("pointerup", handlePointerUp);
  stage.addEventListener("pointercancel", handlePointerUp);

  stage.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();
      setZoom(zoom + (event.deltaY < 0 ? 0.04 : -0.04));
    },
    { passive: false },
  );

  document.querySelectorAll("[data-zoom]").forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.zoom === "in" ? 1 : -1;
      setZoom(zoom + direction * 0.07);
    });
  });

  panelClose.addEventListener("click", closePanel);

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !panel.hidden) {
      closePanel();
    }
  });

  window.addEventListener("resize", setupStars);
}

createObjects();
bindEvents();
setupStars();
openPanel("beginner-guide");
requestAnimationFrame(renderObjects);
requestAnimationFrame(drawStarfield);
