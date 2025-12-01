export function initScrollEffects() {
  const header = document.getElementById('site-header');
  const backToTopBtn = document.getElementById('back-to-top');

  let lastScrollY = window.scrollY;
  const hideThreshold = 80;          
  const backToTopThreshold = 300;     

  function handleScroll() {
    const currentY = window.scrollY;

    if (currentY > lastScrollY && currentY > hideThreshold) {
      header?.classList.add('-translate-y-full');
    } else {
      header?.classList.remove('-translate-y-full');
    }

    if (currentY > backToTopThreshold) {
      backToTopBtn?.classList.remove('opacity-0', 'pointer-events-none');
    } else {
      backToTopBtn?.classList.add('opacity-0', 'pointer-events-none');
    }

    lastScrollY = currentY;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}