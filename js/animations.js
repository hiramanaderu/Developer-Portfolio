/**
 * Animation utilities: reveal, typewriter, counters, skill bars
 */
const Animations = (() => {
  let typeInterval;

  function initReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
      observer.observe(el);
    });
  }

  function typeWriter(elementId, texts, speed = 100, pause = 2000) {
    const el = document.getElementById(elementId);
    if (!el) return;
    clearInterval(typeInterval);

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function tick() {
      const currentText = texts[textIndex];
      if (isDeleting) {
        el.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        el.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      let nextSpeed = isDeleting ? speed / 2 : speed;

      if (!isDeleting && charIndex === currentText.length) {
        nextSpeed = pause;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        nextSpeed = 500;
      }

      typeInterval = setTimeout(tick, nextSpeed);
    }

    tick();
  }

  function initCounters() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          animateCounter(el, target, 1500);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-count]').forEach(el => observer.observe(el));
  }

  function animateCounter(el, target, duration) {
    const start = performance.now();
    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target;
    }
    requestAnimationFrame(update);
  }

  function initSkillBars() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
            bar.style.width = bar.dataset.width + '%';
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    const list = document.getElementById('skillsList');
    if (list) observer.observe(list);
  }

  return { initReveal, typeWriter, initCounters, initSkillBars };
})();
