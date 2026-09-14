/* Navigation Module: handles sticky nav scroll background, active section highlighting, and mobile menu */

export function initNavigation() {
  const nav = document.getElementById('nav');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerBtn = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"], .mobile-menu a[href^="#"]');
  const sections = document.querySelectorAll('main > section[id]');

  // Sticky nav scroll background threshold (40px)
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav?.classList.add('nav-scrolled');
    } else {
      nav?.classList.remove('nav-scrolled');
    }

    updateActiveNav();
  }, { passive: true });

  // Mobile menu toggle
  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      mobileMenu.setAttribute('aria-hidden', (!isOpen).toString());
    });
  }

  // Close mobile menu on link click
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu?.classList.remove('open');
      mobileMenu?.setAttribute('aria-hidden', 'true');
    });
  });

  // Smooth scroll handler for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Precise Scroll-Spy Active Nav Detection
  function updateActiveNav() {
    const scrollPosition = window.scrollY + 120;

    let currentSectionId = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    // If at the bottom of the page, highlight contact
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
      currentSectionId = 'contact';
    }

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${currentSectionId}`) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'true');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  // Initial call on load
  updateActiveNav();
}
