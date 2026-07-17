(() => {
  let escHandler = null;

  const observer = new MutationObserver(() => {
    const pageTitle = document.querySelector('h1');
    if (pageTitle && !pageTitle.querySelector('.imdbplay-btn')) {
      const btn = document.createElement('span');
      btn.className = 'imdbplay-btn';
      btn.title = 'Click to play in overlay · Ctrl/Cmd+click to open in new tab';
      btn.setAttribute('aria-label', 'Play');
      btn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="34" height="34"
              style="vertical-align:middle;margin-left:10px;cursor:pointer;
                      fill:#f5c518;filter:drop-shadow(0 1px 5px rgba(0,0,0,.55));
                      transition:transform .15s,filter .15s;">
            <circle cx="13" cy="13" r="11.8" fill="none" stroke="rgba(255,255,255,0.72)" stroke-width="1.4"/>
            <circle cx="13" cy="13" r="11" fill="rgba(0,0,0,0.60)"/>
            <polygon points="10.2,8.2 19.2,13 10.2,17.8" fill="#f5c518"/>
          </svg>`;

      btn.addEventListener('click', (e) => {
        const segments = window.location.pathname.split('/').filter(Boolean);
        const imdb_id = segments[1];
        const media_type = document.querySelector('meta[property="og:type"]')?.content;
        const base_url = 'https://proxy.garageband.rocks/embed';
        let video_url = base_url + '/movie/' + imdb_id;
        if (media_type === 'video.tv_show') {
          video_url = base_url + '/tv/' + imdb_id + '?autonext=1';
        }
        if (e.ctrlKey || e.metaKey) {
          window.open(video_url);
        } else {
          createLightbox(video_url);
        }
      });

      pageTitle.appendChild(btn);
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  function createLightbox(iframeSrc) {
    // Remove any existing lightbox
    document.querySelector('#imdbplay-lightbox')?.remove();

    // Remove previous ESC handler
    if (escHandler) {
      document.removeEventListener('keyup', escHandler);
    }

    const overlay = document.createElement('div');
    overlay.id = 'imdbplay-lightbox';
    Object.assign(overlay.style, {
      position: 'fixed',
      inset: '0',
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.88)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '2147483647',
      animation: 'imdbplay-fadein .2s ease',
    });

    // Inject styles once
    if (!document.getElementById('imdbplay-style')) {
      const style = document.createElement('style');
      style.id = 'imdbplay-style';
      style.textContent = `
        @keyframes imdbplay-fadein { from { opacity:0 } to { opacity:1 } }
        @keyframes imdbplay-spin { to { transform: rotate(360deg) } }
        #imdbplay-lightbox .imdbplay-frame-wrap {
          position: relative;
          width: 92vw;
          max-width: 1200px;
          height: min(82vh, 675px);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 48px rgba(0,0,0,.8);
          background: #000;
        }
        #imdbplay-lightbox iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: calc(100% - 32px);
          border: none;
          outline: none;
          background: #000;
        }
        #imdbplay-lightbox .imdbplay-spinner {
          position: absolute;
          inset: 0;
          bottom: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }
        #imdbplay-lightbox .imdbplay-spinner::after {
          content:'';
          width: 48px;
          height: 48px;
          border: 4px solid rgba(245,197,24,.25);
          border-top-color: #f5c518;
          border-radius: 50%;
          animation: imdbplay-spin .8s linear infinite;
        }
        #imdbplay-lightbox .imdbplay-close {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #f5c518;
          border: none;
          cursor: pointer;
          font-size: 22px;
          line-height: 42px;
          text-align: center;
          color: #000;
          font-weight: 700;
          box-shadow: 0 2px 12px rgba(0,0,0,.6);
          transition: background .15s, transform .15s;
          z-index: 10;
        }
        #imdbplay-lightbox .imdbplay-close:hover {
          background: #fff;
          transform: scale(1.12);
        }
        #imdbplay-lightbox .imdbplay-footer {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 32px;
          background: rgba(10,10,10,0.92);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          font-size: 11px;
          color: #555;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          letter-spacing: 0.1px;
          z-index: 5;
        }
        #imdbplay-lightbox .imdbplay-newtab {
          color: #f5c518;
          text-decoration: none;
          font-weight: 600;
          font-size: 11px;
          transition: color .12s;
        }
        #imdbplay-lightbox .imdbplay-newtab:hover {
          color: #fff;
        }
      `;
      document.head.appendChild(style);
    }

    const wrap = document.createElement('div');
    wrap.className = 'imdbplay-frame-wrap';

    const spinner = document.createElement('div');
    spinner.className = 'imdbplay-spinner';

    const closeBtn = document.createElement('button');
    closeBtn.className = 'imdbplay-close';
    closeBtn.textContent = '✕';
    closeBtn.title = 'Close (Esc)';
    closeBtn.addEventListener('click', close);

    const iframe = document.createElement('iframe');
    iframe.setAttribute('allow', 'autoplay *; fullscreen *; encrypted-media *');
    iframe.setAttribute('referrerpolicy', 'origin');
    iframe.setAttribute('loading', 'eager');
    iframe.setAttribute('frameborder', '0');
    iframe.src = iframeSrc;

    iframe.addEventListener('load', () => spinner.remove());

    // Footer: always-visible fallback to open in new tab
    const footer = document.createElement('div');
    footer.className = 'imdbplay-footer';
    const fallbackLink = document.createElement('a');
    fallbackLink.className = 'imdbplay-newtab';
    fallbackLink.href = iframeSrc;
    fallbackLink.target = '_blank';
    fallbackLink.rel = 'noopener';
    fallbackLink.textContent = 'Open in new tab ↗';
    footer.append('Having trouble? ', fallbackLink);

    wrap.appendChild(spinner);
    wrap.appendChild(iframe);
    wrap.appendChild(closeBtn);
    wrap.appendChild(footer);
    overlay.appendChild(wrap);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) close();
    });

    escHandler = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keyup', escHandler);

    function close() {
      overlay.remove();
      document.removeEventListener('keyup', escHandler);
      escHandler = null;
    }
  }
})();
