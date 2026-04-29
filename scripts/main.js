(function () {
  const content = window.PORTFOLIO_CONTENT;

  if (!content) {
    return;
  }

  const root = document.documentElement;
  const profile = content.profile || {};
  const highlights = Array.isArray(content.highlights) ? content.highlights : [];
  const expertise = Array.isArray(content.expertise) ? content.expertise : [];
  const experience = Array.isArray(content.experience) ? content.experience : [];
  const education = Array.isArray(content.education) ? content.education : [];
  const projects = Array.isArray(content.projects) ? content.projects : [];
  const contact = content.contact || {};
  const sectionHeaders = content.sectionHeaders || {};

  applyTheme(content.theme || {});
  document.title = content.siteTitle || [profile.name, "Portfolio"].filter(Boolean).join(" | ");

  renderBrand(profile.name || "Your Name");
  renderNav(content.navigation || []);
  renderSectionHeaders(sectionHeaders);
  renderHero(profile);
  renderHighlights(highlights);
  renderExpertise(expertise);
  renderExperience(experience);
  renderEducation(education);
  renderProjects(projects);
  renderContact(contact, profile.name || "Your Name");
  renderFooter(content.footerNote || "", profile.name || "Your Name");
  initBehavior();

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
    const brand = byId("brand-name");
    const footerName = byId("footer-name");
    const parts = String(name).trim().split(/\s+/);

    if (parts.length > 1) {
      const accent = parts.pop();
      brand.innerHTML = escapeHtml(parts.join(" ")) + ' <span class="accent">' + escapeHtml(accent) + "</span>";
    } else {
      brand.textContent = name;
    }

    footerName.textContent = name;
  }

  function renderNav(items) {
    const nav = byId("nav-links");
    nav.innerHTML = items.map(function (item) {
      const href = item.href || "#hero";
      const className = item.style === "button" ? "nav-link button-link" : "nav-link";
      return '<li><a class="' + className + '" href="' + escapeAttr(href) + '"' + linkAttrs(href) + ">" + escapeHtml(item.label || "Link") + "</a></li>";
    }).join("");
  }

  function renderSectionHeaders(headers) {
    setText("skills-kicker", headers.skills && headers.skills.kicker, "Core Stack");
    setText("highlights-kicker", headers.highlights && headers.highlights.kicker, "Quick Snapshot");
    setText("expertise-kicker", headers.expertise && headers.expertise.kicker, "Core Expertise");
    setText("expertise-title", headers.expertise && headers.expertise.title, "Capabilities that anchor the work.");
    setText("experience-kicker", headers.experience && headers.experience.kicker, "Experience");
    setText("experience-title", headers.experience && headers.experience.title, "How the story has unfolded so far.");
    setText("education-kicker", headers.education && headers.education.kicker, "Education");
    setText("education-title", headers.education && headers.education.title, "Training, craft, and steady refinement.");
    setText("projects-kicker", headers.projects && headers.projects.kicker, "Selected Work");
    setText("projects-title", headers.projects && headers.projects.title, "A portfolio grid you can actually tailor.");
    setText("contact-kicker", headers.contact && headers.contact.kicker, "Contact");
  }

  function renderHero(data) {
    setText("hero-role", data.role, "");
    byId("hero-title").innerHTML = renderHeroTitle(data.heroHeading || [], Number.isInteger(data.accentLine) ? data.accentLine : -1);
    setText("hero-summary", data.summary, "");
    setText("contact-bubble-label", data.contactLabel, "Get in touch");
    setText("contact-bubble-copy", data.contactCopy, "");

    const emailHref = data.email ? "mailto:" + data.email.replace(/^mailto:/, "") : "#contact";
    const preferredContactHref = data.contactHref || emailHref;
    const contactLink = byId("contact-bubble-link");
    contactLink.href = preferredContactHref;
    syncLinkBehavior(contactLink, preferredContactHref);
    contactLink.textContent = data.contactLinkLabel || data.email || "Contact";

    const heroImage = byId("hero-image");
    if (heroImage) {
      heroImage.src = data.heroImage || "assets/profile-placeholder.svg";
      heroImage.alt = (data.name || "Profile") + " image";
    }

    byId("skill-ribbon").innerHTML = (data.skills || []).map(function (item) {
      return '<span class="skill-pill">' + escapeHtml(item) + "</span>";
    }).join("");

    byId("hero-actions").innerHTML = (data.actions || []).map(function (action) {
      return renderButton(action, "button");
    }).join("");
  }

  function renderHighlights(items) {
    const grid = byId("highlights-grid");
    grid.innerHTML = items.map(function (item) {
      return [
        '<article class="highlight-card">',
        '<p class="highlight-label">' + escapeHtml(item.label || "") + "</p>",
        '<p class="highlight-value">' + escapeHtml(item.value || "") + "</p>",
        "</article>"
      ].join("");
    }).join("");
  }

  function renderExpertise(items) {
    const grid = byId("expertise-grid");
    grid.innerHTML = items.map(function (item) {
      const tags = (item.tags || []).map(function (tag) {
        return '<span class="tag">' + escapeHtml(tag) + "</span>";
      }).join("");

      return [
        '<article class="expertise-card reveal">',
        '<div class="icon-badge">' + icon(item.icon) + "</div>",
        '<h3 class="card-title">' + escapeHtml(item.title || "") + "</h3>",
        '<p class="card-copy">' + escapeHtml(item.description || "") + "</p>",
        '<div class="tag-row">' + tags + "</div>",
        "</article>"
      ].join("");
    }).join("");

    toggleSection("expertise", items.length > 0);
  }

  function renderExperience(items) {
    const list = byId("experience-list");
    list.innerHTML = items.map(function (item) {
      const bullets = (item.bullets || []).map(function (point) {
        return "<li><span>" + escapeHtml(point) + "</span></li>";
      }).join("");

      return [
        '<article class="timeline-item reveal">',
        '<div class="timeline-head">',
        "<div>",
        '<h3 class="timeline-role">' + escapeHtml(item.role || "") + "</h3>",
        '<span class="timeline-company">' + escapeHtml(item.company || "") + "</span>",
        "</div>",
        '<span class="timeline-date">' + escapeHtml(item.date || "") + "</span>",
        "</div>",
        '<p class="timeline-summary">' + escapeHtml(item.summary || "") + "</p>",
        '<ul class="timeline-points">' + bullets + "</ul>",
        "</article>"
      ].join("");
    }).join("");

    toggleSection("experience", items.length > 0);
  }

  function renderEducation(items) {
    const grid = byId("education-grid");
    grid.innerHTML = items.map(function (item) {
      return [
        '<article class="education-card reveal">',
        '<div class="icon-badge">' + icon(item.icon) + "</div>",
        '<div class="education-head">',
        '<h3 class="card-title">' + escapeHtml(item.title || "") + "</h3>",
        '<span class="education-date">' + escapeHtml(item.date || "") + "</span>",
        "</div>",
        '<p class="education-place">' + escapeHtml(item.place || "") + "</p>",
        '<p class="card-copy">' + escapeHtml(item.description || "") + "</p>",
        "</article>"
      ].join("");
    }).join("");

    toggleSection("education", items.length > 0);
  }

  function renderProjects(items) {
    const grid = byId("project-grid");
    grid.innerHTML = items.map(function (item) {
      const tags = (item.tags || []).map(function (tag) {
        return '<span class="tag">' + escapeHtml(tag) + "</span>";
      }).join("");
      const details = Array.isArray(item.details) ? item.details : [];
      const detailsMarkup = details.length
        ? [
            '<div class="project-details">',
            '<p class="project-details-heading">' + escapeHtml(item.detailsHeading || "What I worked on") + "</p>",
            '<ul class="project-details-list">',
            details.map(function (point) {
              return "<li>" + escapeHtml(point) + "</li>";
            }).join(""),
            "</ul>",
            "</div>"
          ].join("")
        : "";
      const links = (item.links || []).map(function (link) {
        return renderButton(link, "button");
      }).join("");

      return [
        '<article class="project-card reveal">',
        '<div class="project-media">',
        '<img src="' + escapeAttr(item.image || "assets/project-editorial.svg") + '" alt="' + escapeAttr(item.title || "Project preview") + '">',
        "</div>",
          '<div class="project-body">',
          '<p class="project-category">' + escapeHtml(item.category || "") + "</p>",
          '<h3 class="project-title">' + escapeHtml(item.title || "") + "</h3>",
          '<p class="card-copy">' + escapeHtml(item.description || "") + "</p>",
          detailsMarkup,
          '<div class="tag-row">' + tags + "</div>",
          '<div class="project-links">' + links + "</div>",
          "</div>",
          "</article>"
        ].join("");
    }).join("");

    toggleSection("projects", items.length > 0);
  }

  function renderContact(data, name) {
    setText("contact-heading", data.heading, "Get in touch");
    setText("contact-summary", data.summary, "");
    setText("contact-location", data.location, "");
    byId("social-links").innerHTML = (data.socials || []).map(function (item) {
      const iconMarkup = item.icon ? icon(item.icon) : "";
      if (!item.href) {
        return [
          '<div class="social-link social-text">',
          iconMarkup,
          "<span>" + escapeHtml(item.label || "Contact") + "</span>",
          "</div>"
        ].join("");
      }

      const href = item.href;
      return [
        '<a class="social-link" href="' + escapeAttr(href) + '"' + linkAttrs(href) + ">",
        iconMarkup,
        "<span>" + escapeHtml(item.label || "Link") + "</span>",
        "</a>"
      ].join("");
    }).join("");

    toggleSection("contact", (data.socials || []).length > 0 || Boolean(data.summary));
    byId("brand-link").setAttribute("aria-label", "Back to " + name + " home");
  }

  function renderFooter(note, name) {
    const footerNote = byId("footer-note");
    footerNote.textContent = note;
    footerNote.hidden = !note;
    byId("footer-name").textContent = name;
    byId("copyright-year").textContent = new Date().getFullYear();
  }

  function initBehavior() {
    const nav = byId("site-nav");
    const menuToggle = byId("menu-toggle");
    const navLinks = byId("nav-links");

    const syncNav = function () {
      nav.classList.toggle("scrolled", window.scrollY > 18);
    };

    syncNav();
    window.addEventListener("scroll", syncNav, { passive: true });

    menuToggle.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      }, { threshold: 0.18 });

      document.querySelectorAll(".reveal").forEach(function (node) {
        observer.observe(node);
      });
    } else {
      document.querySelectorAll(".reveal").forEach(function (node) {
        node.classList.add("visible");
      });
    }
  }

  function renderHeroTitle(lines, accentLine) {
    return lines.map(function (line, index) {
      const className = index === accentLine ? "accent-line" : "";
      return '<span class="' + className + '">' + escapeHtml(line) + "</span>";
    }).join("");
  }

  function renderButton(link, classBase) {
    const href = link.href || "#";
    const style = link.style === "secondary" ? "secondary" : "primary";
    return [
      '<a class="' + classBase + " " + style + '" href="' + escapeAttr(href) + '"' + linkAttrs(href) + ">",
      icon(link.icon || "arrow-up-right"),
      "<span>" + escapeHtml(link.label || "Open") + "</span>",
      "</a>"
    ].join("");
  }

  function toggleSection(id, shouldShow) {
    const section = byId(id);
    if (!section) {
      return;
    }

    section.hidden = !shouldShow;
  }

  function setText(id, value, fallback) {
    const node = byId(id);
    if (!node) {
      return;
    }

    node.textContent = value || fallback || "";
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

  function syncLinkBehavior(node, href) {
    if (/^https?:\/\//i.test(href)) {
      node.target = "_blank";
      node.rel = "noreferrer";
      return;
    }

    node.removeAttribute("target");
    node.removeAttribute("rel");
  }

  function linkAttrs(href) {
    if (/^https?:\/\//i.test(href)) {
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
      mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>',
      globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18"/><path d="M12 3a15 15 0 0 0 0 18"/></svg>',
      github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.69c-2.78.61-3.37-1.18-3.37-1.18-.46-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.09 2.93.83.09-.65.35-1.09.64-1.35-2.22-.25-4.56-1.1-4.56-4.92 0-1.09.39-1.97 1.03-2.67-.1-.26-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02A9.54 9.54 0 0 1 12 6.8c.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.2 2.41.1 2.67.64.7 1.03 1.58 1.03 2.67 0 3.83-2.34 4.66-4.58 4.91.36.31.68.92.68 1.86l-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>',
      linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56c0-1.02-.76-1.84-1.92-1.84-1.13 0-1.91.82-1.91 1.84 0 1 .76 1.82 1.88 1.82h.02c1.16 0 1.93-.82 1.93-1.82Zm12.28 7.87c0-2.97-1.58-4.35-3.7-4.35-1.7 0-2.46.94-2.88 1.59V8.5H9.48c.04 1.03 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.69.13-.93.27-.69.88-1.39 1.9-1.39 1.33 0 1.87 1.04 1.87 2.56V20h3.38v-6.99Z"/></svg>',
      download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M4 20h16"/></svg>',
      spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z"/><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z"/></svg>',
      layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z"/><path d="m3 12 9 4.5 9-4.5"/><path d="m3 16.5 9 4.5 9-4.5"/></svg>',
      briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7"/><path d="M3 12h18"/></svg>',
      cap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m2 9 10-5 10 5-10 5L2 9Z"/><path d="M6 11.5V16c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-4.5"/></svg>',
      code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m8 16-4-4 4-4"/><path d="m16 8 4 4-4 4"/><path d="m14 4-4 16"/></svg>',
      users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9.5" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
    };

    return icons[name] || icons["arrow-up-right"];
  }
})();
