(function () {
  const content = window.PORTFOLIO_CONTENT;

  if (!content) {
    return;
  }

  const root = document.documentElement;
  const params = new URLSearchParams(window.location.search);
  const requestedSlug = params.get("project");
  const slug = requestedSlug === "improvised" ? "rcbdr" : requestedSlug;
  const projects = Array.isArray(content.projects) ? content.projects : [];
  const project = projects.find(function (item) {
    return item.slug === slug;
  }) || projects[0];

  applyTheme(content.theme || {});
  renderBrand((content.profile && content.profile.name) || "Portfolio");

  if (!project) {
    document.title = "Project Not Found";
    byId("project-title").textContent = "Project not found";
    byId("project-summary").textContent = "The requested project page is missing.";
    return;
  }

  const projectsHref = project.slug === "rcbdr"
    ? "game-development.html#voyager-signal-games"
    : "game-development.html#projects";
  document.querySelectorAll("[data-projects-link]").forEach(function (link) {
    link.href = projectsHref;
  });

  document.title = project.title + " | " + (((content.profile || {}).name) || "Portfolio");
  setText("project-category", project.category, "Project");
  setText("project-title", project.title, "Project");
  setText("project-summary", project.description, "");
  setText("project-details-heading", project.detailsHeading || "What I worked on", "What I worked on");
  const pending = Boolean(project.caseStudyPending);
  document.body.classList.toggle("case-study-pending", pending);
  if (pending) {
    document.querySelector(".project-page-facts").hidden = true;
    document.querySelector(".detail-column-narrow").hidden = true;
    byId("project-contributions-section").hidden = true;
  } else {
    renderProjectFacts(project);
  }
  setText("project-challenge", (project.caseStudy || {}).challenge, "Build a focused, playable experience while making the most of limited development time.");
  setText("project-approach", (project.caseStudy || {}).approach, "Use clear, modular systems and iterative testing to support the project's player experience.");

  const liveLink = firstExternalProjectLink(project.links || []);
  const liveLinkNode = byId("project-live-link");
  if (liveLink) {
    liveLinkNode.href = liveLink.href;
    liveLinkNode.target = "_blank";
    liveLinkNode.rel = "noreferrer";
    liveLinkNode.textContent = liveLink.label || "View Project";
  } else {
    liveLinkNode.href = projectsHref;
    liveLinkNode.removeAttribute("target");
    liveLinkNode.removeAttribute("rel");
    liveLinkNode.textContent = "Back to Projects";
  }

  renderActions(project);
  renderOverview((project.detailOverview && project.detailOverview.length) ? project.detailOverview : [project.description || ""]);
  renderList("project-details-list", project.details || []);
  renderList("project-learnings-list", project.learnings || []);
  if (project.slug === "rcbdr" && !pending) {
    const shop = byId("item-shop-feature");
    shop.replaceWith(shop.content.cloneNode(true));
    renderOutfitCloset();
    setText("project-gallery-title", "More clips to watch");
    byId("project-contributions-section").after(byId("project-gallery-section"));
  }
  window.ProjectGallery.render(project.media || []);

  function renderOutfitCloset() {
    const template = byId("outfit-closet-feature");
    const feature = template.content.cloneNode(true);
    const image = feature.querySelector("img");
    const button = feature.querySelector("button");
    const stillImage = image.getAttribute("src");

    function setPlaying(playing) {
      image.src = playing ? image.dataset.animation : stillImage;
      button.setAttribute("aria-pressed", String(playing));
      button.textContent = playing ? "Stop closet demo" : "Play closet demo";
    }

    button.addEventListener("click", function () {
      setPlaying(button.getAttribute("aria-pressed") !== "true");
    });
    window.addEventListener("portfolio-motion-change", function (event) {
      if (event.detail.reduced && button.getAttribute("aria-pressed") === "true") {
        setPlaying(false);
      }
    });
    template.replaceWith(feature);
  }

  function applyTheme(theme) {
    setVar("--accent", theme.accent);
    setVar("--accent-strong", theme.accentStrong);
    setVar("--warm-accent", theme.warmAccent);
    setVar("--bg", theme.bg);
    setVar("--bg-alt", theme.bgAlt);
    setVar("--panel", theme.panel);
    setVar("--text", theme.text);
    setVar("--muted", theme.muted);
    setVar("--border", theme.border);
    setVar("--accent-rgb", rgbFromHex(theme.accent));
    setVar("--accent-strong-rgb", rgbFromHex(theme.accentStrong));
    setVar("--warm-accent-rgb", rgbFromHex(theme.warmAccent));
    setVar("--bg-rgb", rgbFromHex(theme.bg));
    setVar("--bg-alt-rgb", rgbFromHex(theme.bgAlt));
    setVar("--panel-rgb", rgbFromHex(theme.panel));
    setVar("--text-rgb", rgbFromHex(theme.text));
    setVar("--bg-alt-soft", theme.bgAlt ? rgbaFromHex(theme.bgAlt, 0.86) : "");
    setVar("--panel-soft", theme.panel ? rgbaFromHex(theme.panel, 0.9) : "");
  }

  function renderBrand(name) {
    const brand = byId("project-brand-name");
    const parts = String(name).trim().split(/\s+/);
    if (parts.length > 1) {
      const accent = parts.pop();
      brand.innerHTML = escapeHtml(parts.join(" ")) + ' <span class="accent">' + escapeHtml(accent) + "</span>";
    } else {
      brand.textContent = name;
    }
  }

  function renderActions(projectItem) {
    const actions = byId("project-page-actions");
    const buttons = [];

    (projectItem.links || []).forEach(function (link) {
      if (!link || !link.href) {
        return;
      }

      if (/project\.html/i.test(link.href)) {
        return;
      }

      buttons.push(renderButton(link));
    });

    buttons.push('<a class="button secondary" href="' + projectsHref + '">Back to Game Development</a>');
    actions.innerHTML = buttons.join("");
  }

  function renderProjectFacts(projectItem) {
    const caseStudy = projectItem.caseStudy || {};
    const facts = [
      { label: "Role", value: caseStudy.role || summarizeRole(projectItem.details || []) },
      { label: "Timeline", value: caseStudy.timeline || "Project development" },
      { label: "Team", value: caseStudy.team || "Collaborative project" },
      { label: "Tools", value: caseStudy.tools || (projectItem.tags || []).join(" / ") }
    ];

    byId("project-fact-grid").innerHTML = facts.map(function (fact) {
      return [
        '<div class="fact-card">',
        '<p class="fact-label">' + escapeHtml(fact.label) + "</p>",
        '<p class="fact-value">' + escapeHtml(fact.value) + "</p>",
        "</div>"
      ].join("");
    }).join("");
  }

  function renderOverview(paragraphs) {
    const container = byId("project-overview");
    container.innerHTML = paragraphs.map(function (paragraph) {
      return "<p>" + escapeHtml(paragraph) + "</p>";
    }).join("");
  }

  function renderList(id, items) {
    const container = byId(id);
    container.innerHTML = items.map(function (item) {
      return "<li>" + escapeHtml(item) + "</li>";
    }).join("");
  }

  function firstExternalProjectLink(links) {
    return links.find(function (link) {
      return /^https?:\/\//i.test(link.href || "");
    });
  }

  function summarizeRole(details) {
    if (!details.length) {
      return "Project contributions";
    }

    return details.slice(0, 2).join(" ");
  }

  function renderButton(link) {
    const href = link.href || "#";
    const style = link.style === "secondary" ? "secondary" : "primary";
    return [
      '<a class="button ' + style + '" href="' + escapeAttr(href) + '"' + linkAttrs(href, link.newTab) + ">",
      icon(link.icon || "arrow-up-right"),
      "<span>" + escapeHtml(link.label || "Open") + "</span>",
      "</a>"
    ].join("");
  }

  function setText(id, value, fallback) {
    const node = byId(id);
    if (node) {
      node.textContent = value || fallback || "";
    }
  }

  function setVar(name, value) {
    if (value) {
      root.style.setProperty(name, value);
    }
  }

  function byId(id) {
    return document.getElementById(id);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeAttr(value) {
    return escapeHtml(value);
  }

  function linkAttrs(href, forceNewTab) {
    if (forceNewTab || /^https?:\/\//i.test(href)) {
      return ' target="_blank" rel="noreferrer"';
    }

    return "";
  }

  function rgbFromHex(hex) {
    const clean = String(hex || "").replace("#", "");
    if (clean.length !== 6) {
      return "";
    }
    const r = parseInt(clean.slice(0, 2), 16);
    const g = parseInt(clean.slice(2, 4), 16);
    const b = parseInt(clean.slice(4, 6), 16);
    return [r, g, b].join(", ");
  }

  function rgbaFromHex(hex, alpha) {
    const rgb = rgbFromHex(hex);
    return rgb ? "rgba(" + rgb + ", " + alpha + ")" : "";
  }

  function icon(name) {
    const icons = {
      "arrow-up-right": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M9 7h8v8"/></svg>',
      layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z"/><path d="m3 12 9 4.5 9-4.5"/><path d="m3 16.5 9 4.5 9-4.5"/></svg>',
      linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56c0-1.02-.76-1.84-1.92-1.84-1.13 0-1.91.82-1.91 1.84 0 1 .76 1.82 1.88 1.82h.02c1.16 0 1.93-.82 1.93-1.82Zm12.28 7.87c0-2.97-1.58-4.35-3.7-4.35-1.7 0-2.46.94-2.88 1.59V8.5H9.48c.04 1.03 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.69.13-.93.27-.69.88-1.39 1.9-1.39 1.33 0 1.87 1.04 1.87 2.56V20h3.38v-6.99Z"/></svg>'
    };

    return icons[name] || icons["arrow-up-right"];
  }
})();
