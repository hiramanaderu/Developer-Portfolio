/**
 * Simple Hash Router with page templates
 */
const Router = (() => {
  const main = document.getElementById('main');

  const pages = {
    home: () => `
      <section class="page">
        <div class="hero">
          <div class="container hero-inner">
            <div class="hero-content">
              <div class="hero-greeting">你好，我是</div>
              <h1 class="hero-title">前端<br><span class="highlight">开发者</span></h1>
              <p class="hero-subtitle typing-cursor" id="typewriter"></p>
              <div class="hero-actions">
                <a href="#projects" class="btn btn-primary" data-nav>查看作品</a>
                <a href="#contact" class="btn btn-secondary" data-nav>联系我</a>
              </div>
            </div>
            <div class="hero-visual">
              <div class="hero-avatar">Dev</div>
              <div class="hero-tech-stack">
                <div class="tech-orbit" style="animation: orbit1 12s linear infinite;">JS</div>
                <div class="tech-orbit" style="animation: orbit2 15s linear infinite;">CSS</div>
                <div class="tech-orbit" style="animation: orbit3 10s linear infinite;">HTML</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,

    about: () => `
      <section class="page section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">01. 关于我</span>
            <h2 class="section-title">热爱代码，追求极致体验</h2>
            <p class="section-desc">专注于构建高性能、可访问、视觉精美的现代 Web 应用。</p>
          </div>
          <div class="about-grid">
            <div class="about-text reveal-left">
              <p>我是一名专注于前端开发的工程师，热衷于将设计转化为流畅、优雅的交互体验。</p>
              <p>我通过实际项目练习界面开发、数据处理与工程化。我深信优秀的代码不仅仅是功能的实现，更是可读性、可维护性与性能的完美平衡。</p>
              <p>工作之余，我喜欢研究新技术、贡献开源项目，并持续打磨自己的技术栈。</p>
              <div class="skill-tags">
                <span class="skill-tag">React</span>
                <span class="skill-tag">Vue.js</span>
                <span class="skill-tag">TypeScript</span>
                <span class="skill-tag">Node.js</span>
                <span class="skill-tag">Webpack</span>
                <span class="skill-tag">Vite</span>
                <span class="skill-tag">Tailwind</span>
                <span class="skill-tag">Git</span>
              </div>
            </div>
            <div class="skills reveal-right">
              <h3 class="skills-title">技能掌握</h3>
              <div class="skills-list" id="skillsList">
                <div class="skill-item">
                  <div class="skill-header">
                    <span class="skill-name">HTML / CSS</span>
                    <span class="skill-percent">95%</span>
                  </div>
                  <div class="skill-bar"><div class="skill-bar-fill" data-width="95"></div></div>
                </div>
                <div class="skill-item">
                  <div class="skill-header">
                    <span class="skill-name">JavaScript / ES6+</span>
                    <span class="skill-percent">90%</span>
                  </div>
                  <div class="skill-bar"><div class="skill-bar-fill" data-width="90"></div></div>
                </div>
                <div class="skill-item">
                  <div class="skill-header">
                    <span class="skill-name">React / Next.js</span>
                    <span class="skill-percent">85%</span>
                  </div>
                  <div class="skill-bar"><div class="skill-bar-fill" data-width="85"></div></div>
                </div>
                <div class="skill-item">
                  <div class="skill-header">
                    <span class="skill-name">Vue.js / Nuxt</span>
                    <span class="skill-percent">80%</span>
                  </div>
                  <div class="skill-bar"><div class="skill-bar-fill" data-width="80"></div></div>
                </div>
                <div class="skill-item">
                  <div class="skill-header">
                    <span class="skill-name">UI / UX 设计</span>
                    <span class="skill-percent">75%</span>
                  </div>
                  <div class="skill-bar"><div class="skill-bar-fill" data-width="75"></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,

    projects: () => `
      <section class="page section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">02. 作品集</span>
            <h2 class="section-title">精选项目展示</h2>
            <p class="section-desc">这里展示了我的公开项目，可以直接查看源码和运行说明。</p>
          </div>
          <div class="filter-bar">
            <button class="filter-btn active" data-filter="all">全部</button>
            <button class="filter-btn" data-filter="frontend">前端应用</button>
            <button class="filter-btn" data-filter="fullstack">全栈项目</button>
            <button class="filter-btn" data-filter="tool">工具库</button>
          </div>
          <div class="projects-grid stagger-children" id="projectsGrid">
<article class="project-card reveal-scale" data-category="fullstack">
  <div class="project-content"><h3 class="project-title">AuraWeather</h3>
  <p class="project-desc">Flutter 天气与 AI 出行建议项目。查看仓库了解实现和运行说明。</p><p class="project-tags">Flutter · Dart · AI</p>
  <div class="project-links"><a class="project-link" href="https://github.com/hiramanaderu/AuraWeather" target="_blank" rel="noopener noreferrer">源码与说明 ↗</a></div></div>
</article>
<article class="project-card reveal-scale" data-category="tool">
  <div class="project-content"><h3 class="project-title">Smart-Organizer</h3>
  <p class="project-desc">Python 文件分析、重复检测与分类整理工具，包含预览与撤销功能。</p><p class="project-tags">Python · CLI · 文件处理</p>
  <div class="project-links"><a class="project-link" href="https://github.com/hiramanaderu/Smart-Organizer" target="_blank" rel="noopener noreferrer">源码与说明 ↗</a></div></div>
</article>
<article class="project-card reveal-scale" data-category="frontend">
  <div class="project-content"><h3 class="project-title">Developer-Portfolio</h3>
  <p class="project-desc">使用原生 HTML、CSS、JavaScript 构建的个人作品集。</p><p class="project-tags">HTML · CSS · JavaScript</p>
  <div class="project-links"><a class="project-link" href="https://github.com/hiramanaderu/Developer-Portfolio" target="_blank" rel="noopener noreferrer">源码与说明 ↗</a></div></div>
</article>
          </div>
        </div>
      </section>
    `,

    experience: () => `
      <section class="page section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">03. 工作经历</span>
            <h2 class="section-title">职业历程</h2>
            <p class="section-desc">我的前端开发成长之路。</p>
          </div>
          <p>经历信息待补充，当前可通过项目源码了解我的实践。</p>
        </div>
      </section>
    `,

    contact: () => `
      <section class="page section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">04. 联系我</span>
            <h2 class="section-title">开启合作</h2>
            <p class="section-desc">有项目想法或工作机会？欢迎随时与我联系。</p>
          </div>
          <div class="contact-grid">
            <div class="contact-info reveal-left">
              <h3>联系方式</h3>
              <p>欢迎查看我的 GitHub 项目。其他联系方式待补充。</p>
              <div class="contact-links">
                <a href="https://github.com/hiramanaderu" class="contact-link" target="_blank" rel="noopener noreferrer">github.com/hiramanaderu</a>
              </div>
            </div>
            <form class="contact-form reveal-right" id="contactForm" novalidate>
              <p>此表单仅用于整理和复制留言，不会发送消息。</p>
              <div class="form-group">
                <label class="form-label" for="name">姓名</label>
                <input type="text" id="name" name="name" class="form-input" placeholder="你的名字" required minlength="2">
                <span class="form-error-msg">请输入至少 2 个字符的姓名</span>
              </div>
              <div class="form-group">
                <label class="form-label" for="email">邮箱</label>
                <input type="email" id="email" name="email" class="form-input" placeholder="your@email.com" required>
                <span class="form-error-msg">请输入有效的邮箱地址</span>
              </div>
              <div class="form-group">
                <label class="form-label" for="message">留言</label>
                <textarea id="message" name="message" class="form-textarea" placeholder="想对我说点什么..." required minlength="10"></textarea>
                <span class="form-error-msg">留言内容至少需要 10 个字符</span>
              </div>
              <button type="submit" class="btn btn-primary form-submit" id="submitBtn">
                <span>复制留言草稿</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </form>
          </div>
        </div>
      </section>
      <footer class="footer">
        <div class="container">
          <p class="footer-text">© ${new Date().getFullYear()} Built with pure HTML · CSS · JavaScript</p>
        </div>
      </footer>
    `,
  };

  let renderTimer;

  function render(route) {
    clearTimeout(renderTimer);
    const pageFn = pages[route] || pages.home;
    if (!main) return;
    
    // Simple exit animation
    const current = main.querySelector('.page');
    if (current) {
      current.classList.add('page-exit');
      renderTimer = setTimeout(() => {
        main.innerHTML = pageFn();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        dispatchEvent(new CustomEvent('pagerender', { detail: { route } }));
      }, 250);
    } else {
      main.innerHTML = pageFn();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      dispatchEvent(new CustomEvent('pagerender', { detail: { route } }));
    }
  }

  function navigate(route) {
    if (route.startsWith('#')) route = route.slice(1);
    if (!route) route = 'home';
    window.location.hash = route;
  }

  function getCurrentRoute() {
    return window.location.hash.slice(1) || 'home';
  }

  function init() {
    render(getCurrentRoute());
    updateNavActive();
    window.addEventListener('hashchange', () => {
      render(getCurrentRoute());
      updateNavActive();
    });
  }

  function updateNavActive() {
    const route = getCurrentRoute();
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href')?.slice(1) || 'home';
      link.classList.toggle('active', href === route);
    });
  }

  return { init, navigate, getCurrentRoute, render };
})();

