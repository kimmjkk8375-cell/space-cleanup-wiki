const planetData = [
  {
    id: "beginner-guide",
    name: "Beginner Guide",
    description: "Core controls, early scavenging routes, and the first upgrades every collector should understand.",
    page: "pages/beginner-guide.html",
    color: "#8fd3ff",
    orbitRadius: 170,
    size: 30,
    speed: 0.00009,
    angle: 0.2,
  },
  {
    id: "world",
    name: "World",
    description: "A map of ruined machine zones, salvage routes, safe points, and the wider orbital frontier.",
    page: "pages/world.html",
    color: "#b9a8ff",
    orbitRadius: 220,
    size: 38,
    speed: 0.000072,
    angle: 1.18,
  },
  {
    id: "orbit-zero",
    name: "Orbit-Zero",
    description: "The first dead machine planet and the starting point of the JUNK COLLECTORS expedition.",
    page: "pages/orbit-zero.html",
    color: "#8fe6c8",
    orbitRadius: 270,
    size: 34,
    speed: 0.000066,
    angle: 2.08,
  },
  {
    id: "area-ai",
    name: "AREA AI",
    description: "A damaged guardian intelligence still maintaining the dead machine planet.",
    page: "pages/area-ai.html",
    color: "#7df6ff",
    orbitRadius: 220,
    size: 34,
    speed: 0.000078,
    angle: 3.05,
  },
  {
    id: "items",
    name: "Items",
    description: "Scrap, tools, upgrade parts, field supplies, and rare salvage found across the system.",
    page: "pages/items.html",
    color: "#d8c27a",
    orbitRadius: 315,
    size: 29,
    speed: 0.000052,
    angle: 3.92,
  },
  {
    id: "monsters",
    name: "Monsters",
    description: "Hostile machines, corrupted collectors, and roaming threats that patrol the abandoned zones.",
    page: "pages/monsters.html",
    color: "#c77d86",
    orbitRadius: 275,
    size: 36,
    speed: 0.000061,
    angle: 4.86,
  },
  {
    id: "updates",
    name: "Updates",
    description: "Patch notes, balance changes, new sectors, and wiki revision history.",
    page: "pages/updates.html",
    color: "#bdf7d0",
    orbitRadius: 350,
    size: 28,
    speed: 0.000048,
    angle: 5.72,
  },
];

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const stage = document.querySelector("#system-stage");
const orbitField = document.querySelector("#orbit-field");
const pageGrid = document.querySelector("#page-grid");
const panel = document.querySelector("#info-panel");
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
let pointerStartPlanetId = null;
let dragSettledAt = 0;
let selectedPlanetId = null;

function createPlanets() {
  planetData.forEach((planet) => {
    const button = document.createElement("button");
    button.className = "planet";
    button.type = "button";
    button.dataset.id = planet.id;
    button.style.setProperty("--planet-color", planet.color);
    button.style.width = `${planet.size}px`;
    button.style.height = `${planet.size}px`;
    button.setAttribute("aria-label", `Open ${planet.name} information`);

    const body = document.createElement("span");
    body.className = "planet-body";
    body.setAttribute("aria-hidden", "true");

    const label = document.createElement("span");
    label.className = "planet-label";
    label.textContent = planet.name;

    button.append(body, label);
    orbitField.appendChild(button);

    const card = document.createElement("a");
    card.className = "page-card";
    card.href = planet.page;
    card.innerHTML = `<strong>${planet.name}</strong><span>${planet.description}</span>`;
    pageGrid.appendChild(card);
  });
}

function openPanel(id) {
  const planet = planetData.find((item) => item.id === id);
  if (!planet) {
    return;
  }

  selectedPlanetId = id;
  panelTitle.textContent = planet.name;
  panelDescription.textContent = planet.description;
  panelLink.href = planet.page;
  panel.hidden = false;

  document.querySelectorAll(".planet").forEach((node) => {
    node.classList.toggle("is-selected", node.dataset.id === id);
  });
}

function closePanel() {
  selectedPlanetId = null;
  panel.hidden = true;
  document.querySelectorAll(".planet").forEach((node) => node.classList.remove("is-selected"));
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getStageScale() {
  const width = stage.clientWidth;
  if (width < 520) {
    return 0.66;
  }
  if (width < 760) {
    return 0.82;
  }
  return 1;
}

function renderPlanets(time = 0) {
  const delta = lastTime ? time - lastTime : 16;
  lastTime = time;

  const dragCoolingDown = performance.now() - dragSettledAt < 900;
  if (!prefersReducedMotion && !isDragging && !dragCoolingDown) {
    autoAngle += delta * 0.000055;
    orbitTime += delta;
  }

  const stageScale = getStageScale() * zoom;
  const tilt = 0.34;
  const nodes = document.querySelectorAll(".planet");

  planetData.forEach((planet, index) => {
    const node = nodes[index];
    const angle = planet.angle + autoAngle + rotation + orbitTime * planet.speed;
    const radius = planet.orbitRadius * stageScale;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle);
    const y = Math.sin(angle) * radius * tilt;
    const depthScale = 0.76 + (z + 1) * 0.18;
    const opacity = 0.62 + (z + 1) * 0.19;

    node.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) scale(${depthScale})`;
    node.style.zIndex = String(Math.round((z + 1) * 100));
    node.style.opacity = String(opacity);
  });

  requestAnimationFrame(renderPlanets);
}

function setZoom(nextZoom) {
  zoom = clamp(nextZoom, 0.78, 1.16);
}

function drawStarfield() {
  const context = starfield.getContext("2d");
  const pixelRatio = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;

  starfield.width = Math.floor(width * pixelRatio);
  starfield.height = Math.floor(height * pixelRatio);
  starfield.style.width = `${width}px`;
  starfield.style.height = `${height}px`;
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  context.clearRect(0, 0, width, height);

  const gradient = context.createRadialGradient(width * 0.52, height * 0.44, 0, width * 0.52, height * 0.44, Math.max(width, height) * 0.72);
  gradient.addColorStop(0, "rgba(65, 135, 180, 0.11)");
  gradient.addColorStop(0.45, "rgba(15, 31, 53, 0.18)");
  gradient.addColorStop(1, "rgba(3, 6, 12, 0)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);

  const starCount = Math.floor(Math.min(240, Math.max(90, width * height * 0.00013)));
  for (let i = 0; i < starCount; i += 1) {
    const x = (Math.sin(i * 92.173) * 0.5 + 0.5) * width;
    const y = (Math.sin(i * 38.519 + 8) * 0.5 + 0.5) * height;
    const radius = 0.35 + ((i * 17) % 9) * 0.08;
    const alpha = 0.22 + ((i * 13) % 8) * 0.055;

    context.beginPath();
    context.fillStyle = `rgba(212, 238, 255, ${alpha})`;
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
  }

  for (let i = 0; i < 46; i += 1) {
    const x = (Math.sin(i * 71.7 + 4) * 0.5 + 0.5) * width;
    const y = (Math.sin(i * 29.9 + 2) * 0.5 + 0.5) * height;
    const radius = 24 + ((i * 19) % 46);
    const nebula = context.createRadialGradient(x, y, 0, x, y, radius);
    nebula.addColorStop(0, "rgba(92, 155, 198, 0.05)");
    nebula.addColorStop(1, "rgba(92, 155, 198, 0)");
    context.fillStyle = nebula;
    context.fillRect(x - radius, y - radius, radius * 2, radius * 2);
  }
}

function handlePointerDown(event) {
  isDragging = true;
  didDrag = false;
  pointerStartPlanetId = event.target.closest(".planet")?.dataset.id || null;
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
  rotation = dragStartRotation + movement * 0.008;
}

function handlePointerUp(event) {
  if (!isDragging) {
    return;
  }

  isDragging = false;
  dragSettledAt = performance.now();
  stage.releasePointerCapture(event.pointerId);
  document.body.classList.remove("is-dragging");

  if (!didDrag && pointerStartPlanetId) {
    openPanel(pointerStartPlanetId);
  }

  pointerStartPlanetId = null;
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
      setZoom(zoom + (event.deltaY < 0 ? 0.045 : -0.045));
    },
    { passive: false },
  );

  document.querySelectorAll("[data-zoom]").forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.zoom === "in" ? 1 : -1;
      setZoom(zoom + direction * 0.08);
    });
  });

  panelClose.addEventListener("click", closePanel);

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !panel.hidden) {
      closePanel();
    }
  });

  window.addEventListener("resize", drawStarfield);
}

createPlanets();
bindEvents();
drawStarfield();
openPanel("beginner-guide");
requestAnimationFrame(renderPlanets);
