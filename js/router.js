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
              <div class="hero-stats">
                <div class="stat-item">
                  <span class="stat-value" data-count="3">0</span>
                  <span class="stat-label">年工作经验</span>
                </div>
                <div class="stat-item">
                  <span class="stat-value" data-count="20">0</span>
                  <span class="stat-label">完成项目</span>
                </div>
                <div class="stat-item">
                  <span class="stat-value" data-count="99">0</span>
                  <span class="stat-label">客户满意度%</span>
                </div>
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
              <p>在过去的几年中，我参与了多个大型 Web 项目的开发与维护，积累了丰富的工程化实践经验。我深信优秀的代码不仅仅是功能的实现，更是可读性、可维护性与性能的完美平衡。</p>
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
            <p class="section-desc">这里展示了我近年来参与或独立完成的代表性项目。</p>
          </div>
          <div class="filter-bar">
            <button class="filter-btn active" data-filter="all">全部</button>
            <button class="filter-btn" data-filter="frontend">前端应用</button>
            <button class="filter-btn" data-filter="fullstack">全栈项目</button>
            <button class="filter-btn" data-filter="tool">工具库</button>
          </div>
          <div class="projects-grid stagger-children" id="projectsGrid">
            <article class="project-card reveal-scale" data-category="frontend">
              <div class="project-image">📊</div>
              <div class="project-content">
                <h3 class="project-title">数据可视化仪表盘</h3>
                <p class="project-desc">基于 ECharts 的实时数据监控平台，支持暗黑模式、响应式布局与多种图表类型。</p>
                <div class="project-tags">
                  <span class="project-tag">Vue 3</span>
                  <span class="project-tag">ECharts</span>
                  <span class="project-tag">TypeScript</span>
                </div>
                <div class="project-links">
                  <a href="#" class="project-link" target="_blank" rel="noopener">在线预览 →</a>
                  <a href="#" class="project-link" target="_blank" rel="noopener">源码 ↗</a>
                </div>
              </div>
            </article>
            <article class="project-card reveal-scale" data-category="fullstack">
              <div class="project-image">🛒</div>
              <div class="project-content">
                <h3 class="project-title">电商平台前端</h3>
                <p class="project-desc">完整的电商购物系统，包含商品展示、购物车、订单管理与支付流程。</p>
                <div class="project-tags">
                  <span class="project-tag">React</span>
                  <span class="project-tag">Redux</span>
                  <span class="project-tag">Node.js</span>
                </div>
                <div class="project-links">
                  <a href="#" class="project-link" target="_blank" rel="noopener">在线预览 →</a>
                  <a href="#" class="project-link" target="_blank" rel="noopener">源码 ↗</a>
                </div>
              </div>
            </article>
            <article class="project-card reveal-scale" data-category="frontend">
              <div class="project-image">📝</div>
              <div class="project-content">
                <h3 class="project-title">Markdown 编辑器</h3>
                <p class="project-desc">支持实时预览、语法高亮、本地存储的轻量级 Markdown 编辑工具。</p>
                <div class="project-tags">
                  <span class="project-tag">Vanilla JS</span>
                  <span class="project-tag"> marked</span>
                  <span class="project-tag">LocalStorage</span>
                </div>
                <div class="project-links">
                  <a href="#" class="project-link" target="_blank" rel="noopener">在线预览 →</a>
                  <a href="#" class="project-link" target="_blank" rel="noopener">源码 ↗</a>
                </div>
              </div>
            </article>
            <article class="project-card reveal-scale" data-category="tool">
              <div class="project-image">⚡</div>
              <div class="project-content">
                <h3 class="project-title">CLI 工具集</h3>
                <p class="project-desc">一套提升开发效率的命令行工具，包含项目脚手架、代码生成与自动化部署。</p>
                <div class="project-tags">
                  <span class="project-tag">Node.js</span>
                  <span class="project-tag">CLI</span>
                  <span class="project-tag">Inquirer</span>
                </div>
                <div class="project-links">
                  <a href="#" class="project-link" target="_blank" rel="noopener">文档 →</a>
                  <a href="#" class="project-link" target="_blank" rel="noopener">源码 ↗</a>
                </div>
              </div>
            </article>
            <article class="project-card reveal-scale" data-category="frontend">
              <div class="project-image">🎨</div>
              <div class="project-content">
                <h3 class="project-title">组件库文档站</h3>
                <p class="project-desc">为团队内部组件库搭建的文档站点，支持实时编辑、自动 props 表格生成。</p>
                <div class="project-tags">
                  <span class="project-tag">VitePress</span>
                  <span class="project-tag">Vue</span>
                  <span class="project-tag">MDX</span>
                </div>
                <div class="project-links">
                  <a href="#" class="project-link" target="_blank" rel="noopener">在线预览 →</a>
                  <a href="#" class="project-link" target="_blank" rel="noopener">源码 ↗</a>
                </div>
              </div>
            </article>
            <article class="project-card reveal-scale" data-category="fullstack">
              <div class="project-image">💬</div>
              <div class="project-content">
                <h3 class="project-title">实时聊天室</h3>
                <p class="project-desc">基于 WebSocket 的多人在线聊天应用，支持私聊、群聊、文件传输与消息已读。</p>
                <div class="project-tags">
                  <span class="project-tag">Socket.io</span>
                  <span class="project-tag">Express</span>
                  <span class="project-tag">MongoDB</span>
                </div>
                <div class="project-links">
                  <a href="#" class="project-link" target="_blank" rel="noopener">在线预览 →</a>
                  <a href="#" class="project-link" target="_blank" rel="noopener">源码 ↗</a>
                </div>
              </div>
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
          <div class="timeline">
            <div class="timeline-item reveal-left">
              <div class="timeline-dot"></div>
              <div class="timeline-date">2023 - 至今</div>
              <h3 class="timeline-title">高级前端工程师</h3>
              <div class="timeline-company">某知名互联网公司</div>
              <p class="timeline-desc">负责核心产品前端架构设计，主导微前端改造，提升团队开发效率 40%。建立前端性能监控体系，首屏加载时间优化 60%。</p>
            </div>
            <div class="timeline-item reveal-right">
              <div class="timeline-dot"></div>
              <div class="timeline-date">2021 - 2023</div>
              <h3 class="timeline-title">前端开发工程师</h3>
              <div class="timeline-company">某科技创业公司</div>
              <p class="timeline-desc">独立完成多个 SaaS 平台前端开发，从零搭建组件库与前端工程化体系。实现复杂数据可视化与实时协作功能。</p>
            </div>
            <div class="timeline-item reveal-left">
              <div class="timeline-dot"></div>
              <div class="timeline-date">2020 - 2021</div>
              <h3 class="timeline-title">初级前端工程师</h3>
              <div class="timeline-company">某软件外包公司</div>
              <p class="timeline-desc">参与多个企业官网与后台管理系统开发，扎实掌握 HTML/CSS/JS 基础，积累了丰富的页面还原与浏览器兼容经验。</p>
            </div>
          </div>
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
              <p>我通常会在 24 小时内回复邮件。如果你更习惯社交软件，也可以通过以下方式找到我。</p>
              <div class="contact-links">
                <a href="mailto:your.email@example.com" class="contact-link">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  <span>your.email@example.com</span>
                </a>
                <a href="#" class="contact-link" target="_blank" rel="noopener">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  <span>github.com/yourname</span>
                </a>
                <a href="#" class="contact-link" target="_blank" rel="noopener">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  <span>linkedin.com/in/yourname</span>
                </a>
              </div>
            </div>
            <form class="contact-form reveal-right" id="contactForm" novalidate>
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
                <span>发送消息</span>
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

  function render(route) {
    const pageFn = pages[route] || pages.home;
    if (!main) return;
    
    // Simple exit animation
    const current = main.querySelector('.page');
    if (current) {
      current.classList.add('page-exit');
      setTimeout(() => {
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
