/**
 * Main Application Logic
 */
const App = (() => {
  const els = {};

  function cacheElements() {
    els.header = document.getElementById('header');
    els.nav = document.getElementById('nav');
    els.menuToggle = document.getElementById('menuToggle');
    els.themeToggle = document.getElementById('themeToggle');
    els.scrollProgress = document.getElementById('scrollProgress');
    els.backToTop = document.getElementById('backToTop');
    els.toastContainer = document.getElementById('toastContainer');
    els.main = document.getElementById('main');
  }

  /* ========== Theme ========== */
  function initTheme() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    setTheme(theme);

    els.themeToggle?.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  /* ========== Mobile Menu ========== */
  function initMenu() {
    els.menuToggle?.addEventListener('click', () => {
      els.menuToggle.classList.toggle('active');
      els.nav?.classList.toggle('open');
    });

    // Close menu when clicking a nav link
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-nav]')) {
        els.menuToggle?.classList.remove('active');
        els.nav?.classList.remove('open');
      }
    });
  }

  /* ========== Scroll Progress & Back to Top ========== */
  function initScrollEffects() {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
          if (els.scrollProgress) els.scrollProgress.style.width = progress + '%';

          // Header shadow on scroll
          if (els.header) {
            els.header.style.boxShadow = scrollTop > 10 ? 'var(--shadow-md)' : 'none';
          }

          // Back to top
          if (els.backToTop) {
            els.backToTop.classList.toggle('visible', scrollTop > 500);
          }

          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    els.backToTop?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ========== Toast ========== */
  function showToast(message, type = 'success') {
    if (!els.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        ${type === 'success'
          ? '<polyline points="20 6 9 17 4 12"></polyline>'
          : '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>'}
      </svg>
      <span>${message}</span>
    `;
    els.toastContainer.appendChild(toast);
    toast.addEventListener('animationend', (e) => {
      if (e.animationName === 'toastOut') toast.remove();
    });
  }

  /* ========== Form Validation ========== */
  function initForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const validators = {
      name: (v) => v.trim().length >= 2,
      email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      message: (v) => v.trim().length >= 10,
    };

    function validateField(input) {
      const name = input.name;
      const valid = validators[name]?.(input.value) ?? true;
      input.classList.toggle('error', !valid);
      return valid;
    }

    form.querySelectorAll('.form-input, .form-textarea').forEach(input => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => {
        if (input.classList.contains('error')) validateField(input);
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputs = form.querySelectorAll('.form-input, .form-textarea');
      let allValid = true;
      inputs.forEach(input => {
        if (!validateField(input)) allValid = false;
      });

      if (allValid) {
        const btn = document.getElementById('submitBtn');
        const original = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = `<span class="skeleton" style="width:80px;height:16px;display:inline-block;"></span>`;
        
        // Simulate API call
        setTimeout(() => {
          btn.disabled = false;
          btn.innerHTML = original;
          form.reset();
          showToast('消息已发送，我会尽快回复你！', 'success');
        }, 1500);
      } else {
        showToast('请检查表单填写是否正确', 'error');
      }
    });
  }

  /* ========== Project Filter ========== */
  function initProjectFilter() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    const buttons = document.querySelectorAll('.filter-btn');
    const cards = grid.querySelectorAll('.project-card');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        cards.forEach(card => {
          const category = card.dataset.category;
          const match = filter === 'all' || category === filter;
          card.style.display = match ? '' : 'none';
          if (match) {
            card.style.animation = 'none';
            card.offsetHeight; // trigger reflow
            card.style.animation = 'scaleIn 0.4s ease';
          }
        });
      });
    });
  }

  /* ========== Page Render Hooks ========== */
  function onPageRender(e) {
    const route = e.detail.route;

    // Re-init per-page features
    Animations.initReveal();
    Animations.initCounters();
    Animations.initSkillBars();
    initForm();
    initProjectFilter();

    if (route === 'home') {
      Animations.typeWriter('typewriter', [
        '用代码构建优雅的交互体验',
        '专注于现代 Web 前端开发',
        '热爱开源，追求极致性能'
      ], 80, 2500);
    }
  }

  /* ========== Keyboard Shortcuts ========== */
  function initKeyboard() {
    document.addEventListener('keydown', (e) => {
      // ESC to close menu
      if (e.key === 'Escape') {
        els.menuToggle?.classList.remove('active');
        els.nav?.classList.remove('open');
      }
      // / to focus first input
      if (e.key === '/' && !e.target.matches('input, textarea')) {
        e.preventDefault();
        const input = document.querySelector('.form-input');
        input?.focus();
      }
    });
  }

  function init() {
    cacheElements();
    Router.init();
    initTheme();
    initMenu();
    initScrollEffects();
    initKeyboard();

    window.addEventListener('pagerender', onPageRender);

    // Initial page render hook (since first render happens before listener)
    setTimeout(() => {
      onPageRender({ detail: { route: Router.getCurrentRoute() } });
    }, 0);
  }

  return { init, showToast };
})();

// Boot
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', App.init);
} else {
  App.init();
}
