// Remove the template promotion overlays across all routes and screen sizes.
const promotionStyles = document.createElement('style');
promotionStyles.textContent = `
  .framer-ZQFle .framer-3uidz-container {
    display: none !important;
  }
  .framer-ZQFle .framer-oumexh-container,
  .framer-Qgjr4,
  .framer-1bgwlhu-container .framer-1dkka1-container {
    display: none !important;
  }
  .framer-y530rz .framer-5xp0v4 > .framer-1fyzsdr:nth-of-type(2),
  section.framer-1fh3df7,
  section.framer-1w5b90h {
    display: none !important;
  }
  .home-hero-eyebrow { display: none !important; }
  .framer-ZQFle .framer-hy1lqq h1 {
    font-family: "Microsoft YaHei", "Noto Sans SC", Inter, Arial, sans-serif !important;
    font-size: clamp(46px, 4.2vw, 64px) !important;
    font-style: normal !important;
    letter-spacing: .015em !important;
    line-height: 1 !important;
    text-transform: none !important;
  }
  .framer-ZQFle .framer-hy1lqq h1 em {
    display: flex;
    font-style: normal !important;
    margin-top: 0;
  }
  .framer-ZQFle .framer-hy1lqq h1::after {
    background: #ff5e2b;
    content: "";
    display: inline-block;
    height: .16em;
    margin-left: .12em;
    width: .16em;
  }
  .home-hero-intro {
    color: rgba(255, 255, 255, .78);
    font: 400 18px/1.6 "Microsoft YaHei", "Noto Sans SC", Inter, Arial, sans-serif;
    margin: 28px 0 0;
    max-width: 560px;
    letter-spacing: 2px;
    white-space: pre-line;
    position: relative !important;
    flex: none !important;
    opacity: 1 !important;
    visibility: visible !important;
    z-index: 2147483002 !important;
  }
  .home-hero-button {
    align-items: center;
    background: #fff;
    border-radius: 999px;
    box-sizing: border-box;
    color: #111;
    display: inline-flex;
    flex: none;
    font: 600 16px/1 "Microsoft YaHei", "Noto Sans SC", Inter, Arial, sans-serif;
    justify-content: center;
    margin-top: 48px;
    max-width: calc(100vw - 32px);
    min-height: 48px;
    padding: 0 28px;
    pointer-events: auto;
    position: relative;
    text-decoration: none;
    transition: transform .2s ease, background-color .2s ease;
    white-space: nowrap;
    opacity: 1 !important;
    visibility: visible !important;
    z-index: 2147483002 !important;
  }
  .home-hero-button:hover { background: #f0f0f0; transform: translateY(-2px); }
  .framer-ZQFle .framer-sk1gvi {
    align-items: flex-start !important;
    position: relative !important;
    overflow: visible !important;
    z-index: 2147483001 !important;
    isolation: isolate;
  }
  .framer-ZQFle .framer-sk1gvi .framer-hy1lqq { width: 100%; }
  .framer-ZQFle .framer-hy1lqq h1 { max-width: 760px; }
  .framer-ZQFle .framer-hy1lqq h1 { display: flex !important; flex-direction: column; gap: .26em; }
  .home-hero-title-line { display: block; }
  .framer-ZQFle .framer-hy1lqq h1::after { display: none; }
  .framer-ZQFle .framer-uzdyl9 { position: relative; z-index: 2; }
  .framer-ZQFle .framer-1u8snsn { z-index: 2; }
  .framer-ZQFle .framer-ecjbsz,
  .framer-ZQFle .framer-1m6i21z {
    overflow: visible !important;
    position: relative !important;
    z-index: 2147483000 !important;
  }
  .framer-ZQFle .framer-hy1lqq { text-align: left; }
  .framer-ZQFle .framer-ecjbsz { position: relative; }
  .framer-ZQFle .framer-9crsue { z-index: 0; }
  .framer-ZQFle .framer-1qfyukv, .framer-ZQFle .framer-1yrlke2 { z-index: 1; }
  .framer-ZQFle .framer-1m6i21z { align-items: flex-start !important; }
  .framer-ZQFle .framer-sk1gvi { padding-top: 0 !important; }
  .framer-ZQFle .framer-uzdyl9 { margin-top: 0; }
  .framer-ZQFle .framer-1m6i21z .home-hero-button { align-self: flex-start; }
  .framer-1byydip > .framer-130w0m4:nth-of-type(2) .framer-1e9s035 {
    display: none !important;
  }
  .home-hero-button:focus-visible { outline: 2px solid #fff; outline-offset: 3px; }
  .framer-tx7noa a[data-project-lightbox] { cursor: zoom-in; }
  .framer-tx7noa a [data-framer-component-type="RichTextContainer"] { display: none !important; }
  .project-lightbox {
    align-items: center;
    background: rgba(2, 7, 19, .92);
    box-sizing: border-box;
    display: flex;
    inset: 0;
    justify-content: center;
    padding: 28px;
    position: fixed;
    z-index: 2147483647;
  }
  .project-lightbox[hidden] { display: none; }
  .project-lightbox img, .project-lightbox video { border-radius: 12px; box-shadow: 0 24px 80px rgba(0,0,0,.48); max-height: calc(100vh - 56px); max-width: calc(100vw - 56px); object-fit: contain; }
  .project-lightbox video { aspect-ratio: 16 / 9; background: #000; display: block; height: auto; width: min(1200px, calc(100vw - 56px)); }
  .project-lightbox-close { background: #fff; border: 0; border-radius: 999px; color: #111; cursor: pointer; font: 500 28px/1 Arial, sans-serif; height: 42px; position: absolute; right: 22px; top: 22px; width: 42px; }
  .project-lightbox.project-lightbox-long { align-items: flex-start; overflow: auto; padding: 72px 24px 40px; }
  .project-lightbox-long .project-lightbox-media { margin: 0 auto; max-width: 1200px; width: 100%; }
  .project-lightbox-long img { display: block; height: auto; max-height: none; max-width: 100%; width: 100%; }
  .project-lightbox-long .project-lightbox-close { position: fixed; }
  .mexc-detail { background: #050811; box-sizing: border-box; color: #fff; font-family: "Microsoft YaHei", "Noto Sans SC", Inter, Arial, sans-serif; min-height: 100vh; padding: 32px clamp(20px, 6vw, 112px) 80px; }
  .mexc-detail-back { color: #fff; display: inline-block; font-size: 15px; margin-bottom: 56px; text-decoration: none; }
  .mexc-detail-heading { display: grid; gap: 28px; grid-template-columns: minmax(0, 1fr) minmax(300px, .9fr); margin: 0 auto 56px; max-width: 1440px; }
  .mexc-detail h1 { font-size: clamp(44px, 6vw, 104px); letter-spacing: -.04em; line-height: .95; margin: 0; }
  .mexc-detail p { color: rgba(255,255,255,.7); font-size: 18px; line-height: 1.6; margin: 0; max-width: 420px; }
  .mexc-detail-poster { display: block; margin: 0 auto; max-width: 1080px; width: 100%; }
  @media (max-width: 809.98px) { .project-lightbox { padding: 16px; } .project-lightbox img, .project-lightbox video { border-radius: 8px; max-height: calc(100vh - 32px); max-width: calc(100vw - 32px); } .project-lightbox.project-lightbox-long { padding: 60px 10px 24px; } .project-lightbox-long img { max-height: none; max-width: 100%; } .project-lightbox-close { right: 12px; top: 12px; } .mexc-detail { padding: 24px 16px 48px; } .mexc-detail-back { margin-bottom: 36px; } .mexc-detail-heading { display: block; margin-bottom: 36px; } .mexc-detail p { font-size: 15px; margin-top: 20px; } }
  @media (min-width: 810px) {
    .framer-ZQFle .framer-sk1gvi {
      margin-left: 0;
      padding-top: clamp(150px, 15vw, 220px) !important;
    }
  }
  .framer-ZQFle .framer-1u8snsn > [data-framer-background-image-wrapper] {
    display: none !important;
  }
  .home-portfolio-word {
    align-items: flex-end;
    color: white;
    display: flex;
    font: 700 clamp(84px, 13.4vw, 210px)/.76 Inter, Arial, sans-serif;
    height: 100%;
    letter-spacing: -.07em;
    white-space: nowrap;
    width: 100%;
  }
  .framer-ZQFle #portfolio {
    overflow: visible !important;
    position: relative !important;
  }
  .framer-ZQFle .framer-uzdyl9 {
    box-sizing: content-box !important;
    padding-bottom: 92px !important;
  }
  .framer-ZQFle #portfolio > .framer-11a5j59-container {
    bottom: 0 !important;
    flex: none !important;
    height: 60px !important;
    position: absolute !important;
    right: 0 !important;
    width: clamp(176px, 30vw, 380px) !important;
    z-index: 4 !important;
  }
  .framer-ZQFle #portfolio > .framer-11a5j59-container img {
    cursor: pointer;
    object-fit: cover !important;
    object-position: center !important;
  }
  .framer-ZQFle #portfolio > .framer-11a5j59-container img.home-hero-thumb-active {
    outline: 2px solid #fff;
    outline-offset: -2px;
  }
  .framer-ZQFle .framer-1qfyukv img.home-hero-selected-visual {
    height: 100% !important;
    object-fit: cover !important;
    object-position: center center !important;
    width: 100% !important;
  }
  @media (max-width: 420px) {
    .framer-ZQFle #portfolio > .framer-11a5j59-container {
      width: 160px !important;
    }
  }
  .framer-1f6zidz > a.framer-gmxzik > [data-framer-background-image-wrapper] {
    display: none !important;
  }
  .framer-1f6zidz > a.framer-gmxzik::after {
    align-items: center;
    color: white;
    content: "A";
    display: flex;
    font: 700 26px/1 Inter, Arial, sans-serif;
    height: 100%;
    justify-content: center;
    width: 100%;
  }
  @media (max-width: 809.98px) {
    .framer-ZQFle .framer-1qfyukv img {
      object-position: 78% center !important;
    }
    .framer-ZQFle .framer-hy1lqq h1 {
      font-size: 36px !important;
      line-height: 1 !important;
    }
    .framer-ZQFle .framer-hy1lqq h1 { gap: .22em; }
    .home-hero-intro {
      font-size: 14px;
      line-height: 1.55;
      margin-top: 22px;
      max-width: 300px;
    }
    .home-hero-button {
      font-size: 14px;
      margin-top: 30px;
      min-height: 42px;
      padding: 0 22px;
    }
    .home-portfolio-word {
      font-size: clamp(50px, 15.8vw, 64px);
      line-height: .82;
    }
  }
  #__framer-badge-container,
  .framer-13wmz3y-container,
  a[aria-label="Remix this project for free"] {
    display: none !important;
  }
  .framer-1kavpt8 img,
  .framer-11p1ax5 img,
  .framer-5a2twq img,
  .framer-rubrv9 img {
    object-fit: contain !important;
    object-position: center !important;
  }
  .framer-yfb7js .framer-hxc792 {
    left: 0 !important;
    position: absolute !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    width: 100% !important;
  }
`;
document.head.appendChild(promotionStyles);

function updateHomeHeroCopy() {
  const hero = document.querySelector('.framer-y530rz');
  if (!hero) return;

  const content = hero.querySelector('.framer-sk1gvi');
  const heading = hero.querySelector('.framer-hy1lqq h1');
  if (content && !content.querySelector('.home-hero-eyebrow')) {
    const eyebrow = document.createElement('p');
    eyebrow.className = 'home-hero-eyebrow';
    eyebrow.textContent = '';
    content.prepend(eyebrow);
  }
  if (heading && !heading.querySelector('.home-hero-title-line')) {
    heading.innerHTML = '<span class="home-hero-title-line">为品牌创造辨识度</span><span class="home-hero-title-line">让视觉拥有更多可能</span>';
  }
  if (content && !content.querySelector('.home-hero-intro')) {
    const intro = document.createElement('p');
    intro.className = 'home-hero-intro';
    intro.textContent = '十年品牌视觉设计经验\n从品牌与IP设计，到自主模型训练与影像制作';
    content.append(intro);
  }
  if (content && !content.querySelector('.home-hero-button')) {
    const button = document.createElement('a');
    button.className = 'home-hero-button';
    button.href = '#selected-work';
    button.textContent = '查看作品集';
    button.addEventListener('click', event => {
      const selectedWork = document.querySelector('#selected-work');
      if (!selectedWork) return;
      event.preventDefault();
      selectedWork.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    content.append(button);
  }

  const logo = hero.querySelector('.framer-1u8snsn');
  if (logo && !logo.querySelector('.home-portfolio-word')) {
    const title = document.createElement('div');
    title.className = 'home-portfolio-word';
    title.textContent = 'ANIYA';
    logo.id = 'portfolio';
    logo.append(title);
  }
  const portfolioWord = logo?.querySelector('.home-portfolio-word');
  if (portfolioWord) portfolioWord.textContent = 'ANIYA';
  hero.querySelector('.framer-11a5j59-container')?.remove();
}

function removeRequestedHomeContent() {
  const hero = document.querySelector('.framer-y530rz');
  if (hero) {
    hero.querySelector('.framer-oumexh-container')?.remove();
    const socialHosts = ['linkedin.com', 'fb.com', 'facebook.com', 'twitter.com', 'x.com', 'youtube.com', 'youtu.be'];
    hero.querySelectorAll('a[href]').forEach(link => {
      let hostname = '';
      try { hostname = new URL(link.href, location.href).hostname.replace(/^www\./, ''); } catch {}
      if (socialHosts.some(host => hostname === host || hostname.endsWith(`.${host}`))) {
        link.parentElement?.remove();
      }
    });
  }

  document.querySelectorAll('p').forEach(node => {
    if (node.textContent.trim() === 'Follow Us') node.closest('.framer-Qgjr4')?.remove();
  });

  document.querySelectorAll('h2').forEach(node => {
    if (node.textContent.trim() === 'EXPAND SPECTRUM') node.textContent = 'DESIGNER PROFILE';
  });

  document.querySelectorAll('.framer-1bgwlhu-container .framer-1dkka1-container').forEach(menu => {
    (menu.closest('.framer-1c92e99') || menu).remove();
  });

  document.querySelectorAll('section').forEach(section => {
    const text = section.textContent.replace(/\s+/g, ' ').trim();
    if (section.classList.contains('framer-1fh3df7') || section.classList.contains('framer-1w5b90h') || text.includes('BUILT ON TRUST.') || text.includes('Working with Zentro felt like') || text.includes('OUR MISSION')) {
      section.remove();
    }
  });
}

function updateRequestedBrandCopy() {
  const exactText = (selector, from, to) => {
    document.querySelectorAll(selector).forEach(node => {
      if (node.textContent.trim() === from) node.textContent = to;
    });
  };
  exactText('.framer-ax499w p', 'Los Angeles Based', 'Aniya');
  exactText('p', 'We don’t just stick to one style or medium— we thrive on versatility.', 'Brand Identity · Character IP · AI Visual Creation');
  exactText('.framer-qu4q5r p', 'Based in New York', 'BRAND VISUAL DESIGN');
  exactText('.framer-1re9w15 p', 'Designing Worldwide', 'AI EXPLORATION');
  exactText('.framer-55eexg h2', "LET'S DREAM TOGETHER", "LET'S MAKE SOMETHING DISTINCTIVE.");

  const footerLinks = document.querySelector('footer.framer-u3lCf .framer-1yytzl2');
  if (footerLinks && footerLinks.dataset.contactUpdated !== 'true') {
    footerLinks.dataset.contactUpdated = 'true';
    footerLinks.innerHTML = '<div class="footer-contact-details"><div class="footer-contact-line"><span>微信：</span><span>396642760</span><button class="footer-copy-wechat" type="button" aria-label="复制微信号" title="复制微信号"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="7" width="13" height="15" rx="1.5"></rect><path d="M16 4V3.5A1.5 1.5 0 0 0 14.5 2h-10A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18H6"></path></svg></button></div><a class="footer-contact-email" href="mailto:396642760@qq.com">邮箱：396642760@qq.com</a><span class="footer-copy-status" aria-live="polite"></span></div>';
    if (!document.querySelector('#footer-contact-style')) {
      const style = document.createElement('style');
      style.id = 'footer-contact-style';
      style.textContent = '.footer-contact-details{display:flex;align-items:center;justify-content:center;gap:22px;flex-wrap:wrap;width:100%;font:inherit}.footer-contact-line{display:inline-flex;align-items:center;gap:0;white-space:nowrap;flex:none;font-size:13px;line-height:13px}.footer-contact-line>span{white-space:nowrap;flex:none}.footer-contact-email{display:inline-block;color:inherit;text-decoration:none;white-space:nowrap;flex:none}.footer-copy-wechat{display:inline-flex;align-items:center;justify-content:center;width:13px;height:13px;margin-left:4px;padding:0;border:0;background:transparent;color:inherit;cursor:pointer;flex:none}.footer-copy-wechat svg{width:13px;height:13px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}.footer-copy-status{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)}.footer-copyright-wrap{width:100%!important;justify-content:center!important;align-items:center!important;text-align:center!important}.footer-copyright{width:100%!important;text-align:center!important;font-size:14px!important;line-height:1.4!important}.framer-10kg1oh p{white-space:nowrap!important}@media(max-width:760px){.footer-contact-details{flex-direction:column;gap:12px}.framer-10kg1oh p{font-size:clamp(9px,2.3vw,14px)!important;letter-spacing:0!important}.footer-contact-line{font-size:13px!important;line-height:13px!important}.footer-copy-wechat,.footer-copy-wechat svg{width:13px!important;height:13px!important}.footer-copyright{font-size:13px!important}}';
      document.head.append(style);
    }
  }
}

document.addEventListener('click', async event => {
  const copyButton = event.target.closest('.footer-copy-wechat');
  if (!copyButton) return;
  event.preventDefault();
  event.stopPropagation();

  const wechatNumber = '396642760';
  let copied = false;

  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(wechatNumber);
      copied = true;
    } catch {
      copied = false;
    }
  }

  if (!copied) {
    const input = document.createElement('textarea');
    input.value = wechatNumber;
    input.setAttribute('readonly', '');
    input.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0';
    document.body.append(input);
    input.select();
    input.setSelectionRange(0, wechatNumber.length);
    try {
      copied = document.execCommand('copy');
    } catch {
      copied = false;
    }
    input.remove();
  }

  const status = copyButton.closest('.footer-contact-details')?.querySelector('.footer-copy-status');
  const feedback = copied ? '微信号已复制' : '复制失败，请手动复制微信号';
  if (status) status.textContent = feedback;
  copyButton.setAttribute('aria-label', feedback);
  copyButton.setAttribute('title', feedback);

  window.setTimeout(() => {
    if (status) status.textContent = '';
    copyButton.setAttribute('aria-label', '复制微信号');
    copyButton.setAttribute('title', '复制微信号');
  }, 1600);
});

function updateAnimatedBrandStrip() {
  const replacements = [
    {
      textSelector: '.framer-1p44spt p',
      text: 'GLOBAL VISUALS',
      imageSelector: '.framer-1kavpt8 img',
      image: '/assets/custom-ticker/markets.webp',
      alt: 'Blue modular visual system'
    },
    {
      textSelector: '.framer-7z5s8w p',
      text: 'CHARACTER IP',
      imageSelector: '.framer-11p1ax5 img',
      image: '/assets/custom-ticker/character-ip.webp',
      alt: 'MEXC character IP'
    },
    {
      textSelector: '.framer-dz5k3s p',
      text: 'AI MODELS',
      imageSelector: '.framer-5a2twq img',
      image: '/assets/custom-ticker/visual-models.webp',
      alt: 'AI visual model assets'
    },
    {
      textSelector: '.framer-myrx76 p',
      text: 'MOTION DESIGN',
      imageSelector: '.framer-rubrv9 img',
      image: '/assets/custom-ticker/ideas-motion.webp',
      alt: 'AI character in motion'
    }
  ];

  replacements.forEach(item => {
    document.querySelectorAll(item.textSelector).forEach(node => {
      if (node.textContent.trim() !== item.text) node.textContent = item.text;
    });
    document.querySelectorAll(item.imageSelector).forEach(image => {
      image.removeAttribute('srcset');
      image.removeAttribute('sizes');
      if (image.getAttribute('src') !== item.image) image.setAttribute('src', item.image);
      image.alt = item.alt;
    });
  });

  const statement = document.querySelector('.framer-yfb7js .framer-1b19t27');
  statement?.closest('.framer-6okxfd')?.remove();
}

const projectCards = {
  'dream-foundry': { image: '/assets/projects/mexc-national-line.png', title: 'MEXC 国家线运营视觉', description: 'AI素材体系｜品牌视觉应用', detail: true },
  'echo-form': { image: '/assets/projects/mexc-character.png', title: 'MEXC 品牌IP形象', description: '角色设计｜视觉识别' },
  'neon-grain': { image: '/assets/projects/midsummer-collection.png', title: '仲夏收藏夹', description: '虚拟人视觉｜系列创作' }
};

function setCardText(card, oldText, newText) {
  for (const node of card.querySelectorAll('p,h1,h2,h3,h4,h5,h6')) {
    if (node.textContent.trim() === oldText) node.textContent = newText;
  }
}

let projectsReplacementStarted = false;

function updateProjects() {
  const section = document.querySelector('section.framer-tx7noa');
  if (!section || projectsReplacementStarted) return;
  projectsReplacementStarted = true;
  Promise.all([
    fetch('/portfolio/selected-work.html?v=portfolio-copy-logo-20261025').then(response => {
      if (!response.ok) throw new Error('精选作品内容加载失败');
      return response.text();
    }),
    fetch('/portfolio/portfolio.css').then(response => {
      if (!response.ok) throw new Error('精选作品样式加载失败');
      return response.text();
    })
  ]).then(([markup, stylesheet]) => {
    if (!section.isConnected) {
      projectsReplacementStarted = false;
      updateProjects();
      return;
    }
    const host = document.createElement('selected-work-portfolio');
    host.id = 'selected-work';
    host.style.cssText = 'display:block;width:100%;background:#fff;contain:layout style;';
    const shadow = host.attachShadow({ mode: 'open' });
    shadow.innerHTML = `<style>${stylesheet}</style>${markup}`;
    section.replaceWith(host);
    projectsReplacementStarted = false;

    const filters = [...shadow.querySelectorAll('[data-filter]')];
    const cards = [...shadow.querySelectorAll('[data-category]')];
    const editorials = [...shadow.querySelectorAll('[data-editorial]')];
    const showcase = shadow.querySelector('.featured-grid');
    const counter = shadow.querySelector('#work-count');
    const status = shadow.querySelector('#filter-status');
    const projectPreviews = [
      { title: 'MEXC 国家线运营视觉', image: '/assets/projects/mexc-national-line-long.webp' },
      { title: 'MEXC 模型训练与视觉升级', image: '/assets/projects/mexc-ai-assets-long.webp' },
      { title: 'MEXC 品牌 IP · AI 生产体系', image: '/assets/projects/mexc-ip-long.webp' },
      { title: '虚拟人·角色视觉', image: '/assets/projects/virtual-human-long.webp' },
      { title: '粽子·万圣节主题视频', video: '/assets/projects/halloween-theme.mp4' },
      { title: '优乐美创意广告视频', video: '/assets/projects/youlemei-ad.mp4' },
      { title: '虚拟人·情绪短视频', video: '/assets/projects/virtual-human-emotion.mp4' }
    ];
    projectPreviews.forEach(preview => {
      const projectLink = [...shadow.querySelectorAll('article.feature-card a')].find(link => link.querySelector('h3')?.textContent.trim() === preview.title);
      if (!projectLink) return;
      const source = preview.image || preview.video;
      const isVideo = Boolean(preview.video);
      projectLink.href = source;
      projectLink.dataset.projectLightbox = source;
      projectLink.dataset.projectLabel = `${preview.title}${isVideo ? '视频' : '完整项目长图'}`;
      projectLink.dataset.projectLong = String(!isVideo);
      projectLink.setAttribute('aria-label', `${isVideo ? '播放' : '放大查看'}${preview.title}${isVideo ? '' : '长图'}`);
    });
    shadow.addEventListener('click', event => {
      const projectLink = event.target.closest('a[data-project-lightbox]');
      if (!projectLink) return;
      event.preventDefault();
      event.stopPropagation();
      openProjectLightbox(projectLink.dataset.projectLightbox, projectLink.dataset.projectLabel || '项目预览', projectLink.dataset.projectLong === 'true');
    }, true);
    filters.forEach(button => {
      button.addEventListener('click', () => {
        const selected = button.dataset.filter;
        let count = 0;
        cards.forEach(card => {
          const show = selected === 'all' || card.dataset.category.split(' ').includes(selected);
          card.hidden = !show;
          if (show) count += 1;
        });
        editorials.forEach(block => { block.hidden = selected !== 'all'; });
        showcase?.classList.toggle('is-filtered', selected !== 'all');
        filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
        if (counter) counter.textContent = `${String(count).padStart(2, '0')} PROJECTS`;
        if (status) status.textContent = `已显示${button.textContent.trim()}中的 ${count} 个项目`;
      });
    });
  }).catch(error => {
    projectsReplacementStarted = false;
    console.error(error);
  });
}

let capabilitiesReplacementStarted = false;
let capabilitiesReplacementReady = false;

function updateCapabilitiesAbout() {
  if (!capabilitiesReplacementReady) return;
  const section = document.querySelector('section.framer-99wld3');
  if (!section || capabilitiesReplacementStarted) return;
  capabilitiesReplacementStarted = true;
  Promise.all([
    fetch('/portfolio/approach-about.html?v=about-section-removed-20261026').then(response => {
      if (!response.ok) throw new Error('能力与关于内容加载失败');
      return response.text();
    }),
    fetch('/portfolio/portfolio.css').then(response => {
      if (!response.ok) throw new Error('能力与关于样式加载失败');
      return response.text();
    })
  ]).then(([markup, stylesheet]) => {
    if (!section.isConnected) {
      capabilitiesReplacementStarted = false;
      updateCapabilitiesAbout();
      return;
    }
    const host = document.createElement('capabilities-about-portfolio');
    host.id = 'capabilities-about';
    host.style.cssText = 'display:block;width:100%;background:#fff;contain:layout style;';
    const shadow = host.attachShadow({ mode: 'open' });
    shadow.innerHTML = `<style>${stylesheet}</style>${markup}`;
    const responsibilityLists = {
      'MEXC数字货币交易所': [
        '制定 OKR，高效完成',
        '负责完成日常设计需求与设计标准审核',
        '进行品牌形象优化升级',
        '设计 IP 形象，建立本土化形象',
        '为国家事业线的各个国家做本土化设计',
        '利用 AI，提高工作效率'
      ],
      '世纪星播': [
        '负责品牌视觉设计、品牌手册及对外传播物料的整体设计与延展。',
        '参与展会视觉、宣传展板、企业画册及线下展示物料设计。',
        '服务企业及国企客户，完成户外宣传牌、导视与活动视觉延展。',
        '将创意提案转化为可执行的落地物料，并协同制作输出。',
        '负责公众号排版'
      ],
      '正午广告': [
        '负责新项目品牌提案与视觉设计，涵盖品牌 VI 手册及基础视觉系统构建。',
        '负责产品包装设计，并延展海报、宣传物料等应用视觉。'
      ],
      '金仕达': [
        '负责地产项目主视觉、楼书、折页及销售物料设计',
        '参与户外广告、围挡、道旗及推广宣传物料输出',
        '支持展会活动、节点营销及公司内部节日海报设计',
        '协调设计执行与团队协作，保障项目高效落地。'
      ],
      '众明智赢科技': [
        '服务多行业客户，负责网页、APP界面与电商详情页设计。',
        '参与品牌VI、营销物料与多尺寸适配输出。',
        '配合前端与开发完成页面落地、版本迭代及交付协同。',
        '支持提案创意、模板规范与跨团队协作执行。'
      ]
    };
    const responsibilityStyles = document.createElement('style');
    responsibilityStyles.textContent = '#approach,#approach .wrap,#approach summary,#approach summary:focus,#approach summary:focus-visible{outline:none!important;box-shadow:none!important;-webkit-tap-highlight-color:transparent}.responsibility-list{margin:0;padding-left:1.45em}.responsibility-list li{margin:.35em 0;padding-left:.25em}.approach-list summary{column-gap:20px;row-gap:0}.approach-list .service-title{display:contents}.service-title-main,.service-title-sub{display:block;grid-column:2;letter-spacing:1px}.service-title-main{grid-row:1;font-weight:700}.service-title-sub{grid-row:2;margin-top:.35em;font-size:.56em;font-weight:400;color:rgba(255,255,255,.62);line-height:1.45}.approach-list .number{grid-column:1;grid-row:1}.approach-list .service-en{grid-column:3;grid-row:1;align-self:center;margin:0}.approach-list .plus{grid-column:4;grid-row:1}.approach{padding-top:48px}.designer-profile-reference{display:block;width:100vw;margin:0 0 60px calc(50% - 50vw);overflow:hidden}.designer-profile-reference img{display:block;width:100%;height:auto}.designer-profile-mobile{display:none}.approach-list .number{color:#fff}@media(max-width:760px){.approach{padding-top:24px}.designer-profile-reference{display:none}.designer-profile-mobile{display:grid;gap:0;margin:0 0 72px}.designer-profile-mobile-visual{aspect-ratio:2400/2652;background:#000;margin:0;overflow:hidden}.designer-profile-mobile-visual img{display:block;width:100%;height:100%;object-fit:cover}.designer-profile-mobile-copy{width:min(100%,560px);margin:-12px auto 0;padding:0 2px;text-align:center}.designer-profile-mobile-eyebrow{font-size:10px;letter-spacing:.08em;color:rgba(255,255,255,.72)}.designer-profile-mobile-copy h2{font-size:38px;line-height:1.25;letter-spacing:-.04em;margin:14px 0 22px}.designer-profile-mobile-copy p{font-size:13px;line-height:2;color:rgba(255,255,255,.72);margin:0 0 18px}.designer-profile-mobile-meta{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;column-gap:24px;border-top:1px solid rgba(255,255,255,.25);padding-top:22px;margin-top:28px}.designer-profile-mobile-stat{display:flex;align-items:baseline;justify-content:flex-start;gap:12px}.designer-profile-mobile-stat strong{font-size:64px;font-weight:400;line-height:1}.designer-profile-mobile-stat span{font-size:12px}.designer-profile-mobile-tags{text-align:left;white-space:nowrap;font-size:9px;line-height:1.8;letter-spacing:.04em;color:rgba(255,255,255,.72)}.approach-list summary{grid-template-columns:35px minmax(0,1fr) auto 20px;column-gap:8px;row-gap:0;align-items:center}.approach-list .service-en{display:block;white-space:nowrap;text-align:right;font-size:9px}}';
    shadow.append(responsibilityStyles);
    shadow.querySelectorAll('#approach details').forEach(item => {
      const title = item.querySelector('.service-title')?.textContent.trim();
      const responsibilities = responsibilityLists[title];
      const paragraph = item.querySelector('.service-content > p');
      if (!responsibilities || !paragraph) return;
      const list = document.createElement('ol');
      list.className = 'responsibility-list';
      responsibilities.forEach(text => {
        const entry = document.createElement('li');
        entry.textContent = text;
        list.append(entry);
      });
      paragraph.replaceWith(list);
      if (title === '正午广告') item.querySelector('.process')?.remove();
    });
    const titleSubtitles = {
      'MEXC数字货币交易所': '国家线用户增长资深设计',
      '世纪星播': '品牌视觉设计师',
      '正午广告': '品牌视觉设计师',
      '金仕达': '平面设计师组长',
      '众明智赢科技': '视觉设计师'
    };
    const employmentDates = {
      'MEXC数字货币交易所': '2022.9 - 2025.10',
      '世纪星播': '2021.11 - 2022.4',
      '正午广告': '2020.12 - 2021.10',
      '金仕达': '2019.5 - 2020.11',
      '众明智赢科技': '2016.7 - 2018.9'
    };
    shadow.querySelectorAll('#approach .service-title').forEach(titleElement => {
      const title = titleElement.textContent.trim();
      const subtitleText = titleSubtitles[title];
      if (!subtitleText) return;
      const dateElement = titleElement.closest('summary')?.querySelector('.service-en');
      if (dateElement && employmentDates[title]) dateElement.textContent = employmentDates[title];
      titleElement.textContent = '';
      const mainTitle = document.createElement('span');
      mainTitle.className = 'service-title-main';
      mainTitle.textContent = title;
      const subtitle = document.createElement('span');
      subtitle.className = 'service-title-sub';
      subtitle.textContent = subtitleText;
      titleElement.append(mainTitle, subtitle);
    });
    section.replaceWith(host);
    capabilitiesReplacementStarted = false;
  }).catch(error => {
    capabilitiesReplacementStarted = false;
    console.error(error);
  });
}

let projectLightboxReturnY = null;

function openProjectLightbox(source, label, longImage = false) {
  projectLightboxReturnY = window.scrollY;
  let modal = document.querySelector('.project-lightbox');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'project-lightbox';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.innerHTML = '<button type="button" class="project-lightbox-close" aria-label="关闭预览">×</button><div class="project-lightbox-media"></div>';
    document.body.append(modal);
    modal.addEventListener('click', event => {
      if (event.target === modal || event.target.closest('.project-lightbox-close') || event.target.matches('.project-lightbox-media img')) {
        closeProjectLightbox();
      }
    });
    modal.addEventListener('wheel', event => {
      if (!modal.classList.contains('project-lightbox-long')) return;
      event.preventDefault();
      modal.scrollTop += event.deltaY;
    }, { passive: false });
  }
  modal.classList.toggle('project-lightbox-long', longImage);
  modal.scrollTop = 0;
  const isVideo = /\.(mp4|webm|mov)(\?|$)/i.test(source);
  modal.querySelector('.project-lightbox-media').innerHTML = isVideo ? `<video src="${source}" controls preload="metadata" playsinline aria-label="${label}"></video>` : `<img src="${source}" alt="${label}">`;
  document.body.style.overflow = 'hidden';
  modal.addEventListener('remove', () => { document.body.style.overflow = ''; }, { once: true });
}

function renderMexcProjectDetail() {
  if (!location.pathname.includes('/projects/dream-foundry')) return;
  const main = document.querySelector('#main');
  if (!main || main.querySelector('.mexc-detail')) return;
  main.innerHTML = '<main class="mexc-detail"><a class="mexc-detail-back" href="/">← 返回首页</a><section class="mexc-detail-heading"><h1>MEXC<br>国家线运营视觉</h1><p>AI素材体系与品牌视觉应用。<br>本项目展示国家线运营视觉的完整海报设计。</p></section><img class="mexc-detail-poster" src="/assets/projects/mexc-national-line-detail.jpg" alt="MEXC 国家线运营视觉完整项目海报"></main>';
}

function closeProjectLightbox() {
  document.querySelector('.project-lightbox')?.remove();
  document.body.style.overflow = '';
  if (projectLightboxReturnY !== null) {
    const returnY = projectLightboxReturnY;
    projectLightboxReturnY = null;
    requestAnimationFrame(() => window.scrollTo({ top: returnY, left: 0, behavior: 'auto' }));
  }
}

document.addEventListener('click', event => {
  const card = event.target.closest('a[data-project-lightbox]');
  if (!card) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  openProjectLightbox(card.dataset.projectLightbox, card.querySelector('img')?.alt || '项目预览');
}, true);
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeProjectLightbox(); });

document.addEventListener('DOMContentLoaded', () => {
  updateHomeHeroCopy();
  updateRequestedBrandCopy();
  removeRequestedHomeContent();
  updateAnimatedBrandStrip();
  updateProjects();
  setTimeout(() => {
    capabilitiesReplacementReady = true;
    updateCapabilitiesAbout();
  }, 1800);
  setTimeout(renderMexcProjectDetail, 900);
  setTimeout(renderMexcProjectDetail, 2200);
  const main = document.querySelector('#main');
  if (main) {
    const observer = new MutationObserver(() => requestAnimationFrame(() => { updateHomeHeroCopy(); updateRequestedBrandCopy(); removeRequestedHomeContent(); updateAnimatedBrandStrip(); updateProjects(); updateCapabilitiesAbout(); }));
    observer.observe(main, { childList: true, subtree: true });
  }
});

// Preserve Framer CMS range reads on static hosting.
const nativeFetch = globalThis.fetch.bind(globalThis);
const cmsFiles = new Map();
globalThis.fetch = async function(input, init) {
  const url = new URL(typeof input === 'string' || input instanceof URL ? input : input.url, location.href);
  if (url.origin === location.origin && url.pathname.endsWith('.framercms') && url.searchParams.has('range')) {
    let body = cmsFiles.get(url.pathname);
    if (!body) {
      body = nativeFetch(url.pathname).then(response => {
        if (!response.ok) throw new Error('CMS file unavailable');
        return response.arrayBuffer();
      });
      cmsFiles.set(url.pathname, body);
    }
    const bytes = new Uint8Array(await body);
    const parts = url.searchParams.get('range').split(',').map(range => {
      const [start,end] = range.split('-').map(Number);
      return bytes.slice(start,end+1);
    });
    return new Response(new Blob(parts), {status:200,headers:{'Content-Type':'application/octet-stream'}});
  }
  return nativeFetch(input,init);
};

// Keep the reproduced contact form from sending to the reference site's inbox.
document.addEventListener('submit', function(event) {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  if (!form.reportValidity()) return;
  let notice = form.querySelector('[data-preview-form-notice]');
  if (!notice) {
    notice = document.createElement('p');
    notice.setAttribute('data-preview-form-notice','');
    notice.setAttribute('role','status');
    notice.style.cssText='font:400 14px/1.6 Inter,Arial,sans-serif;color:#eee;background:#252626;border:1px solid #444;border-radius:8px;padding:14px 16px;margin:16px 0 0;width:100%;box-sizing:border-box';
    form.appendChild(notice);
  }
  notice.textContent = 'This is a preview. Your message has not been sent.';
  notice.scrollIntoView({behavior:'smooth',block:'nearest'});
}, true);

// Keep the footer attribution consistent after Framer hydrates the page.
function updateFooterAttribution() {
  document.querySelectorAll('p').forEach((node) => {
    const text = node.textContent.trim();
    if (text === 'Privacy Policy' || text === 'Terms & Conditions') {
      node.closest('a')?.remove();
      return;
    }
    if (node.children.length === 0 && text === '© 2025 Zentro®. All rights reserved.') {
      node.textContent = '© 2026 Aniya®. All rights reserved.';
    }
    if (node.textContent.trim() === '© 2026 Aniya®. All rights reserved.') {
      node.classList.add('footer-copyright');
      node.parentElement?.classList.add('footer-copyright-wrap');
    }
  });
}

document.addEventListener('DOMContentLoaded', updateFooterAttribution);
new MutationObserver(updateFooterAttribution).observe(document.documentElement, { childList: true, subtree: true });
new MutationObserver(updateRequestedBrandCopy).observe(document.documentElement, { childList: true, subtree: true });
