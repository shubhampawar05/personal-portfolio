export function initNavigation() {
  const nav = document.getElementById('nav');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerBtn = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelectorAll('.nav-pill a, .mobile-menu a[href^="#"]');
  const sections = document.querySelectorAll('main > section[id]');

  window.addEventListener('scroll', () => {
    nav?.classList.toggle('nav-scrolled', window.scrollY > 20);
    updateActiveNav();
  }, { passive: true });

  hamburgerBtn?.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    mobileMenu.setAttribute('aria-hidden', (!isOpen).toString());
  });

  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu?.classList.remove('open');
      mobileMenu?.setAttribute('aria-hidden', 'true');
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  function updateActiveNav() {
    const scrollPos = window.scrollY + 120;
    let current = '';

    sections.forEach(section => {
      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        current = section.id;
      }
    });

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
      current = 'contact';
    }

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === `#${current}`);
    });
  }

  updateActiveNav();
}
