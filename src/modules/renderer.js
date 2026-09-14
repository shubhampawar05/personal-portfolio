/* Renderer Module: dynamic DOM rendering */
import { heroData, aboutData, experienceData, skillsData, projectsData, achievementsData, contactData } from '../data/content.js';
import { getIcon } from '../icons/icons.js';

export function renderPortfolio() {
  renderHero();
  renderAbout();
  renderExperience();
  renderProjects();
  renderSkills();
  renderAchievements();
  renderContact();
  renderFooter();
}

function renderHero() {
  const container = document.querySelector('#hero');
  if (!container) return;

  container.innerHTML = `
    <div class="hero-profile-box reveal-element">
      <div class="profile-avatar-wrapper">
        <img src="./Profile.png" alt="${heroData.name}" loading="eager" />
      </div>
      <div class="profile-info-group">
        <div style="display: flex; align-items: center; gap: 14px; flex-wrap: wrap;">
          <h1 class="type-display" style="font-family: var(--font-display); font-size: 48px; font-weight: 400; line-height: 1.1; margin: 0; color: var(--text-primary);">${heroData.name}</h1>
          <span class="status-badge"><span class="status-dot"></span> Open to Opportunities</span>
        </div>
        <p class="hero-tagline" style="font-family: var(--font-mono); font-size: 14px; color: var(--accent-secondary); margin: 4px 0 0;">${heroData.tagline}</p>
        <div class="phonetic-subtitle">
          <span class="devanagari">${heroData.sanskritName}</span>
          <span class="phonetic">${heroData.phonetic}</span>
        </div>
        <p class="definition-text">
          <em>adjective</em> &nbsp;·&nbsp; Sanskrit, <a href="${heroData.rootLink}" target="_blank" rel="noopener noreferrer" class="inline-link">${heroData.root}</a><br/>
          <strong>1.</strong> ${heroData.meaning}
        </p>
      </div>
    </div>
  `;
}

function renderAbout() {
  const container = document.querySelector('#about');
  if (!container) return;

  const paragraphHtml = aboutData.paragraphs.map(p =>
    `<p class="type-body" style="font-size: 16px; line-height: 1.7; color: var(--text-secondary); margin-bottom: var(--space-4);">${p}</p>`
  ).join('');

  const interestsHtml = aboutData.interests.map(item =>
    `<span class="skill-chip-sm">${item}</span>`
  ).join('');

  container.innerHTML = `
    <div class="reveal-element">
      <span class="overline type-caption" style="display: block; margin-bottom: var(--space-3); color: var(--text-tertiary); letter-spacing: 0.08em;">ABOUT ME</span>
      
      ${paragraphHtml}

      <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: var(--space-6);">
        ${interestsHtml}
      </div>

      <p class="type-body" style="font-size: 15px; line-height: 1.7; color: var(--text-secondary); margin-bottom: var(--space-6);">
        You can reach me at <a href="mailto:${contactData.email}" class="inline-link">${contactData.email}</a> or find me on the platforms below.
      </p>

      <div class="social-buttons-row">
        <a href="${contactData.linkedin}" target="_blank" rel="noopener noreferrer" class="social-pill-btn">
          ${getIcon('linkedin')} <span>LinkedIn</span>
        </a>
        <a href="${contactData.github}" target="_blank" rel="noopener noreferrer" class="social-pill-btn">
          ${getIcon('github')} <span>GitHub</span>
        </a>
        <a href="mailto:${contactData.email}" class="social-pill-btn">
          ${getIcon('mail')} <span>Email</span>
        </a>
      </div>
    </div>
  `;
}

function renderExperience() {
  const container = document.querySelector('#experience .experience-list');
  if (!container) return;

  const companyIconMap = {
    'synthlane': 'synthlane',
    'fibonacci': 'fibonacci'
  };

  container.innerHTML = experienceData.map(exp => {
    const iconKey = Object.keys(companyIconMap).find(k => exp.company.toLowerCase().includes(k));
    const iconName = iconKey ? companyIconMap[iconKey] : 'projectRepo';
    return `
    <div class="experience-timeline-item reveal-element">
      <div class="experience-header-row">
        <div class="company-logo-wrapper">
          ${getIcon(iconName)}
        </div>
        <div style="flex-grow: 1;">
          <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 8px;">
            <h3 style="font-family: var(--font-display); font-size: 26px; font-weight: 500; color: var(--text-primary); margin: 0;">${exp.company}</h3>
            <span class="type-body-sm" style="color: var(--text-tertiary); font-family: var(--font-mono); font-size: 13px;">${exp.duration}</span>
          </div>
          <p style="font-family: var(--font-body); font-size: 15px; font-weight: 500; color: var(--accent-secondary); margin-top: 2px; margin-bottom: 0;">${exp.role}${exp.location ? ` · ${exp.location}` : ''}</p>
        </div>
      </div>

      <div class="experience-body-content">
        <p class="type-body" style="font-size: 15px; line-height: 1.65; color: var(--text-secondary); margin-bottom: var(--space-4);">${exp.summary}</p>
        <div style="display: flex; flex-wrap: wrap; gap: 6px;">
          ${exp.techStack.map(tech => `<span class="skill-chip-sm">${tech}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
  }).join('');
}

function renderProjects() {
  const container = document.querySelector('#projects .project-list');
  if (!container) return;

  const iconMap = {
    'track-io': 'projectTrackIO',
    'simple123': 'projectRepo',
    'acumatic': 'projectEval'
  };

  container.innerHTML = projectsData.map(project => {
    const iconName = iconMap[project.id] || 'projectRepo';
    return `
    <div class="experience-timeline-item reveal-element">
      <div class="experience-header-row">
        <div class="company-logo-wrapper">
          ${getIcon(iconName)}
        </div>
        <div style="flex-grow: 1;">
          <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 8px;">
            <h3 style="font-family: var(--font-display); font-size: 26px; font-weight: 500; color: var(--text-primary); margin: 0;">${project.title}</h3>
            <span class="type-caption tag-secondary">${project.category}</span>
          </div>
          ${project.client ? `<p style="font-family: var(--font-body); font-size: 14px; font-weight: 500; color: var(--text-tertiary); margin-top: 2px; margin-bottom: 0;">${project.client}</p>` : ''}
        </div>
      </div>

      <div class="experience-body-content">
        <p class="type-body" style="font-size: 15px; line-height: 1.65; color: var(--text-secondary); margin-bottom: var(--space-4);">${project.description}</p>
        <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: var(--space-3);">
          ${project.technologies.map(tech => `<span class="skill-chip-sm">${tech}</span>`).join('')}
        </div>
        <p class="type-body-sm" style="color: var(--text-tertiary); display: flex; align-items: center; gap: 6px;">
          <span style="color: var(--accent-secondary); font-weight: 500;">Impact:</span> <span>${project.impact}</span>
        </p>
      </div>
    </div>
  `;
  }).join('');
}

function renderSkills() {
  const featuredContainer = document.querySelector('#skills .skills-featured-row');
  const container = document.querySelector('#skills .skill-list');

  if (featuredContainer) {
    featuredContainer.innerHTML = `
      <div class="featured-skills-box reveal-element" style="margin-bottom: var(--space-6);">
        <span style="font-family: var(--font-mono); font-size: 12px; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 10px;">CORE TECH STACKS</span>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${skillsData.featured.map(item => `<span class="featured-skill-pill">${item}</span>`).join('')}
        </div>
      </div>
    `;
  }

  if (container) {
    const categoryIconMap = {
      languages: 'catLanguages',
      frontend: 'catFrontend',
      backend: 'catBackend',
      databases: 'catDatabases',
      aiTools: 'catAI',
      devops: 'catInfra'
    };

    const categoriesEntries = Object.entries(skillsData.categories);
    container.innerHTML = categoriesEntries.map(([key, cat]) => {
      const iconName = categoryIconMap[key] || 'catLanguages';
      return `
      <div class="experience-timeline-item reveal-element">
        <div class="experience-header-row">
          <div class="company-logo-wrapper">
            ${getIcon(iconName)}
          </div>
          <div style="flex-grow: 1;">
            <h3 style="font-family: var(--font-display); font-size: 24px; font-weight: 500; color: var(--text-primary); margin: 0;">${cat.label}</h3>
          </div>
        </div>

        <div class="experience-body-content">
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            ${cat.items.map(skill => `<span class="skill-chip">${skill}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
    }).join('');
  }
}

function renderAchievements() {
  const container = document.querySelector('#achievements .achievements-list');
  if (!container) return;

  const achievementIconMap = {
    '500+ DSA Problems': 'achieveTrophy',
    'HackerRank 5★ Rating': 'achieveMedal',
    'Geekathon Top Performer': 'achieveScholar'
  };

  container.innerHTML = achievementsData.map(ach => {
    const iconName = achievementIconMap[ach.title] || 'achieveTrophy';
    return `
    <div class="experience-timeline-item reveal-element">
      <div class="experience-header-row">
        <div class="company-logo-wrapper">
          ${getIcon(iconName)}
        </div>
        <div style="flex-grow: 1;">
          <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 8px;">
            <h3 style="font-family: var(--font-display); font-size: 24px; font-weight: 500; color: var(--text-primary); margin: 0;">${ach.title}</h3>
            <span class="type-body-sm" style="color: var(--text-tertiary); font-family: var(--font-mono); font-size: 13px;">${ach.year}</span>
          </div>
          <p class="type-body" style="font-size: 15px; line-height: 1.6; color: var(--text-secondary); margin-top: 4px; margin-bottom: 0;">${ach.detail}</p>
        </div>
      </div>
    </div>
  `;
  }).join('');
}

function renderContact() {
  const container = document.querySelector('#contact .contact-content');
  if (!container) return;

  container.innerHTML = `
    <div class="reveal-element" style="text-align: center; max-width: 600px; margin: 0 auto; background: rgba(19, 21, 26, 0.45); border: 1px solid var(--border-subtle); border-radius: var(--border-radius-lg); padding: var(--space-8) var(--space-6);">
      <h2 class="type-h1" style="margin-bottom: var(--space-3); font-family: var(--font-display); font-size: 36px; font-weight: 400;">Let's Connect</h2>
      <p class="type-body" style="margin-bottom: var(--space-6); color: var(--text-secondary); line-height: 1.6;">
        Building scalable full-stack applications & enterprise platforms. Reach out for opportunities, collaboration, or just to say hello.
      </p>
      <div style="display: flex; gap: var(--space-4); justify-content: center; align-items: center; flex-wrap: wrap;">
        <a href="mailto:${contactData.email}" class="social-pill-btn pill-accent" style="padding: 10px 24px; font-size: 15px;">${getIcon('mail')} <span>Email Me</span></a>
        <a href="${contactData.resume}" class="social-pill-btn pill-blue" download style="padding: 10px 24px; font-size: 15px;">${getIcon('download')} <span>Download Resume</span></a>
      </div>
    </div>
  `;
}

function renderFooter() {
  const container = document.querySelector('footer .container');
  if (!container) return;

  container.innerHTML = `
    <div class="footer-content-centralized">
      <blockquote class="footer-quote">
        "The best way to predict the future is to build it."
        <cite class="footer-author">— Peter Drucker</cite>
      </blockquote>
      <div class="footer-meta-row">
        <span style="color: var(--text-tertiary); font-size: 13px;">© ${new Date().getFullYear()} Shubham Chopde</span>
        <span class="footer-divider-dot">·</span>
        <span style="color: var(--text-tertiary); font-size: 13px;">Built with Vite</span>
      </div>
    </div>
  `;
}
