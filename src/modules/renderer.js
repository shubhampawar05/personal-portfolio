import {
  heroData, heroTechStack, aboutData, experienceData, projectsData,
  skillsData, aiLabData, exploringData, achievementsData, contactData
} from '../data/content.js';
import { getIcon } from '../icons/icons.js';

export function renderPortfolio() {
  renderHero();
  renderAbout();
  renderExperience();
  renderProjects();
  renderSkills();
  renderAiLab();
  renderExploring();
  renderAchievements();
  renderContact();
  renderFooter();
}

function renderHero() {
  const el = document.querySelector('#hero');
  if (!el) return;

  const techPills = heroTechStack.map(t =>
    `<span class="tech-pill"><span class="tech-dot" style="background:${t.color}"></span>${t.name}</span>`
  ).join('');

  el.innerHTML = `
    <div class="container">
      <div class="hero-grid reveal-element">
        <div class="hero-content">
          <div class="hero-badges">
            ${heroData.available ? '<span class="badge"><span class="badge-dot"></span>Available for opportunities</span>' : ''}
            <span class="badge">${getIcon('sparkle')} ${heroData.title}</span>
          </div>
          <h1 class="type-display">
            ${heroData.firstName} <span class="gradient-text">${heroData.lastName}</span>
          </h1>
          <p class="hero-location">${getIcon('mapPin')} ${heroData.location}</p>
          <p class="hero-headline">${heroData.headline}</p>
          <p class="tech-stack-label">Tech I work with</p>
          <div class="tech-stack-row">${techPills}</div>
          <div class="hero-cta">
            <a href="#projects" class="btn-primary">${getIcon('arrowRight')} View Projects</a>
            <a href="#contact" class="btn-secondary">Get in Touch</a>
          </div>
        </div>
        <div class="hero-image-wrapper">
          <div class="hero-image-glow"></div>
          <div class="hero-image-frame">
            <img src="./Profile.png" alt="${heroData.name}" loading="eager" />
            <span class="hero-image-badge">${heroData.title}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderAbout() {
  const el = document.querySelector('#about');
  if (!el) return;

  const stats = aboutData.stats.map(s =>
    `<div class="stat-item"><span class="stat-value">${s.value}</span><span class="stat-label">${s.label}</span></div>`
  ).join('');

  el.innerHTML = `
    <div class="container">
      <div class="section-header reveal-element">
        <span class="type-caption">About</span>
        <h2 class="type-h1">Who I am</h2>
      </div>
      <div class="about-grid reveal-element">
        <div>
          <p class="about-brand">${aboutData.brand}</p>
          ${aboutData.paragraphs.map(p => `<p class="type-body" style="margin-bottom:16px">${p}</p>`).join('')}
        </div>
        <div class="stats-row">${stats}</div>
      </div>
    </div>
  `;
}

function renderExperience() {
  const el = document.querySelector('#experience');
  if (!el) return;

  const cards = experienceData.map(exp => {
    const projects = exp.projects.map(p => `
      <div class="exp-project">
        <div class="exp-project-type">${p.type}</div>
        <div class="exp-project-name">${p.name}</div>
        <p class="type-body" style="font-size:0.9rem;margin-bottom:12px">${p.summary}</p>
        <ul class="exp-highlights">${p.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
        <div class="tech-tags">${p.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
      </div>
    `).join('');

    return `
      <div class="exp-card reveal-element">
        <div class="exp-header">
          <div>
            <div class="exp-company">${exp.company}</div>
            <div class="exp-role">${exp.role} · ${exp.location}</div>
          </div>
          <span class="exp-duration">${exp.duration}</span>
        </div>
        ${projects}
      </div>
    `;
  }).join('');

  el.innerHTML = `
    <div class="container">
      <div class="section-header reveal-element">
        <span class="type-caption">Experience</span>
        <h2 class="type-h1">Work History</h2>
        <p class="section-subtitle">Building production software across fintech, marketing platforms, and B2B marketplaces.</p>
      </div>
      ${cards}
    </div>
  `;
}

function renderMockup() {
  return `
    <div class="mockup-ui">
      <div class="mockup-bar">
        <span class="mockup-dot"></span>
        <span class="mockup-dot"></span>
        <span class="mockup-dot"></span>
      </div>
      <div class="mockup-body">
        <div class="mockup-line w-60"></div>
        <div class="mockup-line w-80"></div>
        <div class="mockup-blocks">
          <div class="mockup-block"></div>
          <div class="mockup-block"></div>
        </div>
        <div class="mockup-line w-40"></div>
        <div class="mockup-line w-80"></div>
        <div class="mockup-line w-60"></div>
      </div>
    </div>
  `;
}

function renderFeaturedProject(p) {
  const actions = [];
  if (p.links.live) actions.push(`<a href="${p.links.live}" target="_blank" rel="noopener" class="btn-primary">${getIcon('external')} Live Demo</a>`);
  if (p.links.demo) actions.push(`<a href="${p.links.demo}" target="_blank" rel="noopener" class="btn-outline">${getIcon('external')} App Demo</a>`);
  if (p.links.github) actions.push(`<a href="${p.links.github}" target="_blank" rel="noopener" class="btn-outline">${getIcon('github')} GitHub</a>`);

  return `
    <div class="project-featured reveal-element">
      <div class="project-featured-inner">
        <div class="project-mockup">${renderMockup()}</div>
        <div class="project-content">
          <div class="project-content-header">
            <h3 class="project-title">${p.title}</h3>
            <span class="badge-featured">Featured</span>
          </div>
          <p class="project-tagline">${p.tagline}</p>
          <ul class="project-highlights">${p.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
          <div class="project-tech-row">${p.technologies.map(t => `<span class="project-tech-pill">${t}</span>`).join('')}</div>
          <div class="project-actions">${actions.join('')}</div>
        </div>
      </div>
    </div>
  `;
}

function renderProjectCard(p) {
  return `
    <div class="project-card reveal-element">
      <div class="project-card-category">${p.category}</div>
      <h3 class="type-h2" style="margin-bottom:8px">${p.title}</h3>
      <p class="type-body" style="font-size:0.9rem;margin-bottom:16px">${p.tagline}</p>
      <div class="tech-tags">${p.technologies.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
    </div>
  `;
}

function renderProjects() {
  const el = document.querySelector('#projects');
  if (!el) return;

  const featured = projectsData.filter(p => p.featured);
  const rest = projectsData.filter(p => !p.featured);

  el.innerHTML = `
    <div class="container">
      <div class="section-header reveal-element">
        <span class="type-caption">Projects</span>
        <h2 class="type-h1">Featured work</h2>
        <p class="section-subtitle">Production-grade applications spanning SaaS, AI, and e-commerce.</p>
      </div>
      ${featured.map(renderFeaturedProject).join('')}
      <div class="projects-grid">${rest.map(renderProjectCard).join('')}</div>
    </div>
  `;
}

function renderSkills() {
  const el = document.querySelector('#skills');
  if (!el) return;

  const grid = skillsData.categories.map(cat => `
    <div class="skill-category reveal-element">
      <div class="skill-category-label">${cat.label}</div>
      <div class="skill-items">${cat.items.map(i => `<span class="skill-item">${i}</span>`).join('')}</div>
    </div>
  `).join('');

  el.innerHTML = `
    <div class="container">
      <div class="section-header reveal-element">
        <span class="type-caption">Engineering</span>
        <h2 class="type-h1">Tech stack</h2>
        <p class="section-subtitle">Technologies organized by engineering area — no arbitrary percentages.</p>
      </div>
      <div class="skills-grid">${grid}</div>
    </div>
  `;
}

function renderAiLab() {
  const el = document.querySelector('#ai-lab');
  if (!el) return;

  const cards = aiLabData.items.map(item => `
    <div class="ai-card reveal-element">
      <div class="ai-card-title">${item.title}</div>
      <p class="ai-card-desc">${item.description}</p>
    </div>
  `).join('');

  el.innerHTML = `
    <div class="container">
      <div class="section-header reveal-element">
        <span class="type-caption">AI Lab</span>
        <h2 class="type-h1">${aiLabData.title}</h2>
        <p class="section-subtitle">${aiLabData.subtitle}</p>
      </div>
      <div class="ai-lab-grid">${cards}</div>
    </div>
  `;
}

function renderExploring() {
  const el = document.querySelector('#exploring');
  if (!el) return;

  const cats = exploringData.categories.map(cat => `
    <div class="reveal-element">
      <div class="exploring-category-label">${cat.label}</div>
      <div class="exploring-pills">${cat.items.map(i => `<span class="exploring-pill">${i}</span>`).join('')}</div>
    </div>
  `).join('');

  el.innerHTML = `
    <div class="container">
      <div class="section-header reveal-element">
        <span class="type-caption">Learning</span>
        <h2 class="type-h1">${exploringData.title}</h2>
      </div>
      <div class="exploring-grid">${cats}</div>
    </div>
  `;
}

function renderAchievements() {
  const el = document.querySelector('#achievements');
  if (!el) return;

  const cards = achievementsData.map(a => `
    <div class="achievement-card reveal-element">
      <div class="achievement-title">${a.title}</div>
      <div class="achievement-detail">${a.detail}</div>
    </div>
  `).join('');

  el.innerHTML = `
    <div class="container">
      <div class="section-header reveal-element">
        <span class="type-caption">Milestones</span>
        <h2 class="type-h1">Achievements</h2>
      </div>
      <div class="achievements-grid">${cards}</div>
    </div>
  `;
}

function renderContact() {
  const el = document.querySelector('#contact');
  if (!el) return;

  el.innerHTML = `
    <div class="container">
      <div class="contact-box reveal-element">
        <h2 class="type-h1">Let's build something.</h2>
        <p class="type-body">I'm open to interesting software engineering opportunities, collaborations, and conversations around building products.</p>
        <div class="contact-actions">
          <a href="mailto:${contactData.email}" class="btn-primary">${getIcon('mail')} Email Me</a>
          <a href="${contactData.linkedin}" target="_blank" rel="noopener" class="social-link">${getIcon('linkedin')} LinkedIn</a>
          <a href="${contactData.github}" target="_blank" rel="noopener" class="social-link">${getIcon('github')} GitHub</a>
          <a href="${contactData.resume}" download class="social-link">${getIcon('download')} Resume</a>
        </div>
      </div>
    </div>
  `;
}

function renderFooter() {
  const el = document.querySelector('footer .footer-inner');
  if (!el) return;

  el.innerHTML = `
    <p class="footer-brand">© ${new Date().getFullYear()} ${heroData.name} · Built with Vite</p>
  `;
}
