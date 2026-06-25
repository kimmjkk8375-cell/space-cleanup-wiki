const searchInput = document.querySelector("#wiki-search");
const searchableItems = Array.from(document.querySelectorAll(".searchable"));
const docSections = Array.from(document.querySelectorAll(".doc-section"));
const emptyState = document.querySelector("#empty-state");
const sideLinks = Array.from(document.querySelectorAll(".side-nav a"));

function normalize(value) {
  return value.trim().toLowerCase();
}

function updateSearch() {
  const query = normalize(searchInput.value);
  let visibleCount = 0;

  searchableItems.forEach((item) => {
    const text = normalize(`${item.dataset.title || ""} ${item.textContent}`);
    const isVisible = !query || text.includes(query);

    if (!item.classList.contains("doc-section")) {
      item.classList.toggle("is-hidden", !isVisible);
    }
  });

  docSections.forEach((section) => {
    const ownText = normalize(`${section.dataset.title || ""} ${section.querySelector("h2")?.textContent || ""}`);
    const children = Array.from(section.querySelectorAll(".searchable:not(.doc-section)"));
    const hasVisibleChild = children.some((child) => !child.classList.contains("is-hidden"));
    const showSection = !query || ownText.includes(query) || hasVisibleChild;

    section.classList.toggle("is-hidden", !showSection);
    if (showSection) {
      visibleCount += 1;
    }
  });

  emptyState.hidden = visibleCount !== 0;
}

function updateActiveLink() {
  const current = window.location.hash || "#overview";

  sideLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === current);
  });
}

searchInput.addEventListener("input", updateSearch);
window.addEventListener("hashchange", updateActiveLink);
updateActiveLink();
