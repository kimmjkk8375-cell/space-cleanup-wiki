const planetData = [
  {
    id: "beginner-guide",
    name: "Beginner Guide",
    description: "Core controls, early scavenging routes, and the first upgrades every collector should understand.",
    page: "pages/beginner-guide.html",
    kind: "gas",
    category: "Wiki Planet",
    colors: ["#f3c9d8", "#a9e8ff", "#fff0a8"],
    orbitRadius: 220,
    size: 34,
    spinDuration: 8,
    spinDirection: 1,
    axialTilt: -12,
    speed: 0.0002,
    angle: 0.2,
    ring: {
      width: 4.9,
      height: 1.18,
      tilt: -15,
      colors: ["rgba(255, 236, 190, 0.58)", "rgba(130, 214, 255, 0.38)"],
    },
  },
  {
    id: "world",
    name: "World",
    description: "A map of ruined machine zones, salvage routes, safe points, and the wider orbital frontier.",
    page: "pages/world.html",
    kind: "rock",
    category: "Wiki Planet",
    colors: ["#b68a69", "#695346", "#d8c0a0"],
    orbitRadius: 285,
    size: 44,
    spinDuration: 13,
    spinDirection: 1,
    axialTilt: 8,
    speed: 0.000115,
    angle: 1.18,
    moons: [
      {
        orbit: 66,
        size: 11,
        duration: 10,
        angle: 35,
        color: "#d8c0a0",
        direction: 1,
      },
    ],
  },
  {
    id: "orbit-zero",
    name: "Orbit-Zero",
    description: "The first dead machine planet and the starting point of the JUNK COLLECTORS expedition.",
    page: "pages/orbit-zero.html",
    kind: "machine",
    category: "Wiki Planet",
    colors: ["#7fdcc9", "#4b6570", "#d8ffff"],
    orbitRadius: 440,
    size: 40,
    spinDuration: 10,
    spinDirection: -1,
    axialTilt: -24,
    speed: 0.000045,
    angle: 2.08,
    ring: {
      width: 4.65,
      height: 1.08,
      tilt: 18,
      colors: ["rgba(125, 246, 255, 0.48)", "rgba(180, 200, 215, 0.26)"],
    },
    moons: [
      {
        orbit: 62,
        size: 10,
        duration: 13,
        angle: 15,
        color: "#c6f8ff",
        direction: -1,
      },
      {
        orbit: 82,
        size: 8,
        duration: 21,
        angle: 156,
        color: "#92a6ad",
        direction: 1,
      },
    ],
  },
  {
    id: "area-ai",
    name: "AREA AI",
    description: "A damaged guardian intelligence still maintaining the dead machine planet.",
    page: "pages/area-ai.html",
    kind: "storm",
    category: "Wiki Planet",
    colors: ["#7df6ff", "#8b8cff", "#e9faff"],
    orbitRadius: 360,
    size: 38,
    spinDuration: 9,
    spinDirection: 1,
    axialTilt: 14,
    speed: 0.000072,
    angle: 3.05,
    moons: [
      {
        orbit: 64,
        size: 10,
        duration: 12,
        angle: 260,
        color: "#dffcff",
        direction: 1,
      },
    ],
  },
  {
    id: "items",
    name: "Items",
    description: "Scrap, tools, upgrade parts, field supplies, and rare salvage found across the system.",
    page: "pages/items.html",
    kind: "desert",
    category: "Wiki Planet",
    colors: ["#d8c27a", "#b88648", "#f4e2a6"],
    orbitRadius: 485,
    size: 33,
    spinDuration: 16,
    spinDirection: 1,
    axialTilt: -7,
    speed: 0.000026,
    angle: 4.2,
    ring: {
      width: 4.55,
      height: 1.08,
      tilt: -26,
      colors: ["rgba(244, 226, 166, 0.52)", "rgba(184, 134, 72, 0.32)"],
    },
  },
  {
    id: "monsters",
    name: "Monsters",
    description: "Hostile machines, corrupted collectors, and roaming threats that patrol the abandoned zones.",
    page: "pages/monsters.html",
    kind: "cracked",
    category: "Wiki Planet",
    colors: ["#c77d86", "#432c3e", "#ffb2a8"],
    orbitRadius: 525,
    size: 42,
    spinDuration: 11,
    spinDirection: -1,
    axialTilt: 22,
    speed: 0.000017,
    angle: 4.86,
    moons: [
      {
        orbit: 72,
        size: 11,
        duration: 15,
        angle: 310,
        color: "#7d6470",
        direction: -1,
      },
    ],
  },
  {
    id: "updates",
    name: "Updates",
    description: "Patch notes, balance changes, new sectors, and wiki revision history.",
    page: "pages/updates.html",
    kind: "ice",
    category: "Wiki Planet",
    colors: ["#bdf7d0", "#9ed4ff", "#ffffff"],
    orbitRadius: 560,
    size: 32,
    spinDuration: 20,
    spinDirection: 1,
    axialTilt: 4,
    speed: 0.000012,
    angle: 4.95,
    ring: {
      width: 4.35,
      height: 1.02,
      tilt: 12,
      colors: ["rgba(220, 255, 238, 0.52)", "rgba(158, 212, 255, 0.34)"],
    },
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
    size: 104,
    fixed: true,
    fixedX: -0.86,
    fixedY: 0.34,
    fixedScale: 0.92,
    fixedOpacity: 0.72,
    fixedZIndex: 64,
  },
  {
    id: "quasar",
    name: "Quasar Gate",
    description: "A distant blue-white beacon used for long-range navigation, signal archives, and future expansion notes.",
    page: "pages/quasar.html",
    kind: "quasar",
    category: "Deep-Space Object",
    colors: ["#c9f5ff", "#5a7cff", "#fff6bd"],
    size: 96,
    fixed: true,
    fixedX: 0.88,
    fixedY: -0.34,
    fixedScale: 0.78,
    fixedOpacity: 0.68,
    fixedZIndex: 66,
  },
  {
    id: "relic-comet",
    name: "Relic Comet",
    description: "A slow-moving ice-and-scrap body carrying fragments of old machines and rare field rumors.",
    page: "pages/relic-comet.html",
    kind: "comet",
    category: "Deep-Space Object",
    colors: ["#e6fbff", "#8bd7ff", "#d2b6ff"],
    orbitRadius: 575,
    size: 34,
    speed: 0.000006,
    angle: 0.98,
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
const OBJECT_HOLD_DELAY = 320;
const OBJECT_HOLD_MOVE_CANCEL = 8;
const OBJECT_RETURN_DELAY = 1000;
const OBJECT_RETURN_DURATION = 760;

let rotation = 0;
let zoom = 1;
let autoAngle = 0;
let orbitTime = 0;
let lastTime = 0;
let dragStartX = 0;
let dragStartY = 0;
let dragStartRotation = 0;
let isDragging = false;
let didDrag = false;
let pointerStartObjectId = null;
let dragSettledAt = 0;
let selectedObjectId = null;
let focusedObjectId = null;
let stars = [];
let lastFixedLayoutKey = "";
let animationFrameId = null;
let renderFallbackId = null;
let resizeFrameId = null;
let holdTimer = null;
let objectPressCandidateId = null;
let objectDragId = null;
let objectDragOffsetX = 0;
let objectDragOffsetY = 0;
const objectPositions = new Map();
const objectOverrides = new Map();
const objectNodes = [];
const objectNodeMap = new Map();

function createObjects() {
  allObjects.forEach((item) => {
    const button = document.createElement("button");
    button.className = `${celestialData.includes(item) ? "celestial" : "planet"} orbital-object ${item.kind}${item.fixed ? " fixed-object" : ""}`;
    button.type = "button";
    button.dataset.id = item.id;
    button.dataset.kind = item.kind;
    button.style.setProperty("--object-a", item.colors[0]);
    button.style.setProperty("--object-b", item.colors[1]);
    button.style.setProperty("--object-c", item.colors[2]);
    button.style.setProperty("--spin-duration", `${item.spinDuration || 64}s`);
    button.style.setProperty("--spin-direction", item.spinDirection < 0 ? "reverse" : "normal");
    button.style.setProperty("--axial-tilt", `${item.axialTilt || 0}deg`);
    button.style.width = `${item.size}px`;
    button.style.height = `${item.size}px`;
    button.setAttribute("aria-label", `Open ${item.name} information`);

    if (item.ring) {
      const ring = document.createElement("span");
      ring.className = "planet-ring";
      ring.style.width = `${item.size * item.ring.width}px`;
      ring.style.height = `${item.size * item.ring.height}px`;
      ring.style.setProperty("--ring-tilt", `${item.ring.tilt}deg`);
      ring.style.setProperty("--ring-a", item.ring.colors[0]);
      ring.style.setProperty("--ring-b", item.ring.colors[1]);
      ring.setAttribute("aria-hidden", "true");
      button.appendChild(ring);
    }

    const body = document.createElement("span");
    body.className = celestialData.includes(item) ? "celestial-body" : "planet-body";
    body.setAttribute("aria-hidden", "true");

    if (!celestialData.includes(item)) {
      const surface = document.createElement("span");
      surface.className = "surface-drift";
      body.appendChild(surface);
    }

    if (item.moons) {
      item.moons.forEach((moon) => {
        const moonOrbit = document.createElement("span");
        moonOrbit.className = "moon-orbit";
        moonOrbit.style.width = `${moon.orbit * 2}px`;
        moonOrbit.style.height = `${moon.orbit * 2}px`;
        moonOrbit.style.setProperty("--moon-size", `${moon.size}px`);
        moonOrbit.style.setProperty("--moon-duration", `${moon.duration}s`);
        moonOrbit.style.setProperty("--moon-angle", `${moon.angle}deg`);
        moonOrbit.style.setProperty("--moon-color", moon.color);
        moonOrbit.style.setProperty("--moon-direction", moon.direction < 0 ? "reverse" : "normal");
        moonOrbit.setAttribute("aria-hidden", "true");

        const moonBody = document.createElement("span");
        moonBody.className = "moon-body";
        moonOrbit.appendChild(moonBody);
        button.appendChild(moonOrbit);
      });
    }

    const label = document.createElement("span");
    label.className = "object-label";
    label.textContent = item.name;

    button.append(body, label);
    orbitField.appendChild(button);
    objectNodes.push(button);
    objectNodeMap.set(item.id, button);

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

  objectNodes.forEach((node) => {
    node.classList.toggle("is-selected", node.dataset.id === id);
  });
}

function closePanel() {
  selectedObjectId = null;
  panel.hidden = true;
  objectNodes.forEach((node) => node.classList.remove("is-selected"));
}

function focusObject(id) {
  if (focusedObjectId === id) {
    return;
  }

  focusedObjectId = id;
  stage.classList.add("is-focusing");
  objectNodes.forEach((node) => {
    const isFocused = node.dataset.id === id;
    node.classList.toggle("is-focused", isFocused);
    node.classList.toggle("is-dimmed", !isFocused);
  });
}

function clearFocus() {
  if (objectDragId) {
    return;
  }

  if (!focusedObjectId) {
    return;
  }

  focusedObjectId = null;
  stage.classList.remove("is-focusing");
  objectNodes.forEach((node) => {
    node.classList.remove("is-focused", "is-dimmed");
  });
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function easeOutCubic(value) {
  return 1 - Math.pow(1 - value, 3);
}

function lerp(start, end, amount) {
  return start + (end - start) * amount;
}

function getStageScale() {
  const width = stage.clientWidth;
  if (width < 520) {
    return 0.3;
  }
  if (width < 760) {
    return 0.48;
  }
  if (width < 980) {
    return 0.68;
  }
  if (width < 1040) {
    return 0.78;
  }
  if (width < 1180) {
    return 0.82;
  }
  return 1;
}

function getFixedScale() {
  const width = stage.clientWidth;
  if (width < 520) {
    return 0.62;
  }
  if (width < 760) {
    return 0.78;
  }
  return 1;
}

function getFixedObjectPosition(item) {
  const scale = getFixedScale();
  return {
    x: item.fixedX * stage.clientWidth * 0.5,
    y: item.fixedY * stage.clientHeight * 0.5,
    scale: item.fixedScale * scale,
    opacity: item.fixedOpacity,
    zIndex: item.fixedZIndex,
  };
}

function layoutFixedObjects() {
  const layoutKey = `${stage.clientWidth}:${stage.clientHeight}:${getFixedScale()}`;
  if (layoutKey === lastFixedLayoutKey) {
    return;
  }

  lastFixedLayoutKey = layoutKey;

  allObjects.forEach((item, index) => {
    if (!item.fixed) {
      return;
    }

    const node = objectNodes[index];
    const fixedPosition = getFixedObjectPosition(item);
    node.style.transform = `translate(-50%, -50%) translate3d(${fixedPosition.x}px, ${fixedPosition.y}px, 0) scale(${fixedPosition.scale})`;
    node.style.zIndex = String(fixedPosition.zIndex);
    node.style.opacity = String(fixedPosition.opacity);

    objectPositions.set(item.id, {
      x: fixedPosition.x,
      y: fixedPosition.y,
      scale: fixedPosition.scale,
      opacity: fixedPosition.opacity,
      zIndex: fixedPosition.zIndex,
      orbitX: fixedPosition.x,
      orbitY: fixedPosition.y,
      orbitScale: fixedPosition.scale,
      orbitOpacity: fixedPosition.opacity,
      orbitZIndex: fixedPosition.zIndex,
    });
  });
}

function getScenePoint(clientX, clientY) {
  const rect = stage.getBoundingClientRect();
  return {
    x: clientX - (rect.left + rect.width / 2),
    y: clientY - (rect.top + rect.height / 2),
  };
}

function clearHoldTimer() {
  if (holdTimer) {
    window.clearTimeout(holdTimer);
    holdTimer = null;
  }
  objectPressCandidateId = null;
}

function getObjectNode(id) {
  return objectNodeMap.get(id);
}

function getPointerObjectId(event) {
  const directObject = event.target.closest(".orbital-object");
  if (directObject) {
    return directObject.dataset.id;
  }

  const hitObject = document.elementFromPoint(event.clientX, event.clientY)?.closest(".orbital-object");
  if (hitObject) {
    return hitObject.dataset.id;
  }

  let nearestId = null;
  let nearestDistance = Infinity;

  objectNodes.forEach((node) => {
    const rect = node.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.hypot(event.clientX - centerX, event.clientY - centerY);
    const hitRadius = Math.max(rect.width, rect.height) / 2 + 18;

    if (distance < hitRadius && distance < nearestDistance) {
      nearestId = node.dataset.id;
      nearestDistance = distance;
    }
  });

  return nearestId;
}

function beginObjectDrag(id, point) {
  const node = getObjectNode(id);
  const current = objectPositions.get(id);
  if (!node || !current || !isDragging) {
    return;
  }

  clearHoldTimer();
  objectDragId = id;
  didDrag = true;

  const scenePoint = getScenePoint(point.clientX, point.clientY);
  objectDragOffsetX = current.x - scenePoint.x;
  objectDragOffsetY = current.y - scenePoint.y;

  objectOverrides.set(id, {
    mode: "dragging",
    x: current.x,
    y: current.y,
    scale: current.scale * 1.2,
    opacity: 1,
    zIndex: 460,
  });

  node.classList.add("is-lifted", "is-object-dragging");
  document.body.classList.add("is-object-dragging");
  focusObject(id);
}

function updateObjectDrag(point) {
  if (!objectDragId) {
    return;
  }

  const scenePoint = getScenePoint(point.clientX, point.clientY);
  const current = objectOverrides.get(objectDragId) || objectPositions.get(objectDragId);
  objectOverrides.set(objectDragId, {
    ...current,
    mode: "dragging",
    x: scenePoint.x + objectDragOffsetX,
    y: scenePoint.y + objectDragOffsetY,
    scale: current.scale,
    opacity: 1,
    zIndex: 460,
  });
}

function finishObjectDrag() {
  if (!objectDragId) {
    return;
  }

  const node = getObjectNode(objectDragId);
  const current = objectOverrides.get(objectDragId) || objectPositions.get(objectDragId);
  const now = performance.now();

  if (current) {
    objectOverrides.set(objectDragId, {
      ...current,
      mode: "released",
      releaseAt: now,
    });
  }

  node?.classList.remove("is-object-dragging");
  document.body.classList.remove("is-object-dragging");
  dragSettledAt = now;
  objectDragId = null;
}

function scheduleRender() {
  if (animationFrameId !== null) {
    return;
  }

  animationFrameId = requestAnimationFrame(renderObjects);
  renderFallbackId = window.setTimeout(() => {
    if (animationFrameId === null) {
      return;
    }

    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
    renderObjects(performance.now());
  }, 220);
}

function renderObjects(time = 0) {
  animationFrameId = null;
  if (renderFallbackId !== null) {
    window.clearTimeout(renderFallbackId);
    renderFallbackId = null;
  }
  const delta = lastTime ? time - lastTime : 16;
  lastTime = time;
  const now = performance.now();

  const dragCoolingDown = now - dragSettledAt < 1200;
  if (!isDragging && !dragCoolingDown) {
    const motionScale = prefersReducedMotion ? 0.35 : 1;
    autoAngle += delta * 0.000001 * motionScale;
    orbitTime += delta * motionScale;
  }

  const stageScale = getStageScale() * zoom;
  const tilt = 0.26;
  layoutFixedObjects();

  allObjects.forEach((item, index) => {
    if (item.fixed) {
      return;
    }

    const node = objectNodes[index];
    const angle = item.angle + autoAngle + rotation + orbitTime * item.speed;
    const radius = item.orbitRadius * stageScale;
    const z = Math.sin(angle);
    const x = Math.cos(angle) * radius;
    const y = z * radius * tilt;
    const depthScale = 0.66 + (z + 1) * 0.18;
    const opacity = 0.68 + (z + 1) * 0.14;
    const zIndex = Math.round(92 + (z + 1) * 96);

    let renderX = x;
    let renderY = y;
    let renderScale = depthScale;
    let renderOpacity = opacity;
    let renderZIndex = zIndex;
    let override = objectOverrides.get(item.id);

    if (override?.mode === "released" && now - override.releaseAt >= OBJECT_RETURN_DELAY) {
      override = {
        ...override,
        mode: "returning",
        returnStartAt: now,
        fromX: override.x,
        fromY: override.y,
        fromScale: override.scale,
        fromOpacity: override.opacity,
      };
      objectOverrides.set(item.id, override);
      node.classList.add("is-returning");
    }

    if (override?.mode === "dragging" || override?.mode === "released") {
      renderX = override.x;
      renderY = override.y;
      renderScale = override.scale;
      renderOpacity = override.opacity;
      renderZIndex = override.zIndex;
    }

    if (override?.mode === "returning") {
      const progress = clamp((now - override.returnStartAt) / OBJECT_RETURN_DURATION, 0, 1);
      const eased = easeOutCubic(progress);
      renderX = lerp(override.fromX, x, eased);
      renderY = lerp(override.fromY, y, eased);
      renderScale = lerp(override.fromScale, depthScale, eased);
      renderOpacity = lerp(override.fromOpacity, opacity, eased);
      renderZIndex = Math.round(lerp(override.zIndex, zIndex, eased));

      if (progress >= 1) {
        objectOverrides.delete(item.id);
        node.classList.remove("is-lifted", "is-returning");
        if (focusedObjectId === item.id) {
          clearFocus();
        }
        renderX = x;
        renderY = y;
        renderScale = depthScale;
        renderOpacity = opacity;
        renderZIndex = zIndex;
      }
    }

    node.style.transform = `translate(-50%, -50%) translate3d(${renderX}px, ${renderY}px, 0) scale(${renderScale})`;
    node.style.zIndex = String(renderZIndex);
    node.style.opacity = String(renderOpacity);

    objectPositions.set(item.id, {
      x: renderX,
      y: renderY,
      scale: renderScale,
      opacity: renderOpacity,
      zIndex: renderZIndex,
      orbitX: x,
      orbitY: y,
      orbitScale: depthScale,
      orbitOpacity: opacity,
      orbitZIndex: zIndex,
    });
  });

  scheduleRender();
}

function setZoom(nextZoom) {
  zoom = clamp(nextZoom, 0.82, 1.04);
}

function setupStars() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const count = Math.floor(Math.min(520, Math.max(180, width * height * 0.00028)));

  stars = Array.from({ length: count }, (_, index) => ({
    x: (Math.sin(index * 92.173) * 0.5 + 0.5) * width,
    y: (Math.sin(index * 38.519 + 8) * 0.5 + 0.5) * height,
    radius: 0.38 + ((index * 17) % 13) * 0.09,
    phase: index * 0.77,
    glow: index % 8 === 0,
    sparkle: index % 31 === 0,
  }));
}

function drawStarfield(time = 0) {
  const context = starfield.getContext("2d");
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
  const width = window.innerWidth;
  const height = window.innerHeight;
  const canvasWidth = Math.floor(width * pixelRatio);
  const canvasHeight = Math.floor(height * pixelRatio);
  const needsResize = starfield.width !== canvasWidth || starfield.height !== canvasHeight;

  if (needsResize) {
    starfield.width = canvasWidth;
    starfield.height = canvasHeight;
    starfield.style.width = `${width}px`;
    starfield.style.height = `${height}px`;
    setupStars();
  }

  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  context.clearRect(0, 0, width, height);
  context.fillStyle = "#000000";
  context.fillRect(0, 0, width, height);

  stars.forEach((star) => {
    const twinkle = 0.5 + Math.sin(star.phase) * 0.18;
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
}

function handlePointerDown(event) {
  isDragging = true;
  didDrag = false;
  pointerStartObjectId = getPointerObjectId(event);
  objectPressCandidateId = findObject(pointerStartObjectId)?.fixed ? null : pointerStartObjectId;
  dragStartX = event.clientX;
  dragStartY = event.clientY;
  dragStartRotation = rotation;
  stage.setPointerCapture(event.pointerId);
  document.body.classList.add("is-dragging");

  if (objectPressCandidateId) {
    holdTimer = window.setTimeout(() => {
      beginObjectDrag(objectPressCandidateId, {
        clientX: dragStartX,
        clientY: dragStartY,
      });
    }, OBJECT_HOLD_DELAY);
  }
}

function handlePointerMove(event) {
  if (!isDragging) {
    return;
  }

  if (objectDragId) {
    didDrag = true;
    updateObjectDrag(event);
    return;
  }

  const movement = event.clientX - dragStartX;
  const totalMovement = Math.hypot(event.clientX - dragStartX, event.clientY - dragStartY);
  if (objectPressCandidateId && totalMovement > OBJECT_HOLD_MOVE_CANCEL) {
    clearHoldTimer();
  }

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
  clearHoldTimer();
  dragSettledAt = performance.now();
  stage.releasePointerCapture(event.pointerId);
  document.body.classList.remove("is-dragging");

  if (objectDragId) {
    finishObjectDrag();
    pointerStartObjectId = null;
    return;
  }

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

  window.addEventListener("resize", () => {
    if (resizeFrameId !== null) {
      return;
    }

    resizeFrameId = requestAnimationFrame(() => {
      resizeFrameId = null;
      lastFixedLayoutKey = "";
      layoutFixedObjects();
      drawStarfield();
    });
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      lastTime = 0;
      return;
    }

    lastTime = 0;
    lastFixedLayoutKey = "";
    drawStarfield();
    scheduleRender();
  });
}

createObjects();
bindEvents();
renderObjects(0);
drawStarfield(0);
