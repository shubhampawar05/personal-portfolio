/* Scroll Reveal Module: triggers CSS entrance animations via IntersectionObserver */

export function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // If reduced motion preferred, ensure elements are visible
    document.querySelectorAll('.reveal-element').forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Fire once only
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-element').forEach(el => revealObserver.observe(el));
}
