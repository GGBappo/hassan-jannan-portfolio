(function () {
  const content = window.PORTFOLIO_CONTENT;

  if (!content) {
    return;
  }

  const root = document.documentElement;
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("project");
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

  document.title = project.title + " | " + (((content.profile || {}).name) || "Portfolio");
  setText("project-category", project.category, "Project");
  setText("project-title", project.title, "Project");
  setText("project-summary", project.description, "");
  setText("project-focus", (project.tags || []).slice(0, 2).join(" / "), "Gameplay and systems");
  setText("project-role-summary", summarizeRole(project.details || []), "Project contributions");
  setText("project-details-heading", project.detailsHeading || "What I worked on", "What I worked on");

  const liveLink = firstExternalProjectLink(project.links || []);
  const liveLinkNode = byId("project-live-link");
  if (liveLink) {
    liveLinkNode.href = liveLink.href;
    liveLinkNode.target = "_blank";
    liveLinkNode.rel = "noreferrer";
    liveLinkNode.textContent = liveLink.label || "View Project";
  } else {
    liveLinkNode.href = "index.html#projects";
    liveLinkNode.removeAttribute("target");
    liveLinkNode.removeAttribute("rel");
    liveLinkNode.textContent = "Back to Projects";
  }

  renderActions(project);
  renderOverview((project.detailOverview && project.detailOverview.length) ? project.detailOverview : [project.description || ""]);
  renderList("project-details-list", project.details || []);
  renderList("project-learnings-list", project.learnings || []);
  renderMedia(project.media || []);

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

    buttons.push('<a class="button secondary" href="index.html#projects">Back to Portfolio</a>');
    actions.innerHTML = buttons.join("");
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

  function renderMedia(items) {
    const grid = byId("project-media-grid");
    grid.innerHTML = items.map(function (item) {
      return [
        '<figure class="media-card reveal visible">',
        '<img src="' + escapeAttr(item.src || "") + '" alt="' + escapeAttr(item.alt || "Project media") + '" loading="lazy">',
        item.caption ? '<figcaption>' + escapeHtml(item.caption) + "</figcaption>" : "",
        "</figure>"
      ].join("");
    }).join("");

    byId("project-gallery-section").hidden = items.length === 0;
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
