// share.js — версия 1.0.3
// Общая библиотека «Поделиться» проекта «Классик».
// На мобильных устройствах вызывает системное меню (navigator.share).
// На десктопах открывает модалку с веб-почтами и копированием.
// ИСПРАВЛЕНО: Если атрибут url передан пустым, ссылка не подставляется в конец.

(() => {
  'use strict';

  const METRIKA_COUNTER_ID = 105817342;
  const MAX_URL_LENGTH = 8000; 

  // ---------- вспомогательное ----------

  function detectCatalog() {
    const path = window.location.pathname.replace(/index\.html$/i, '');
    const normalized = path.endsWith('/') ? path : path + '/';
    const match = normalized.match(
      /^\/(okpd2-pp1875|okpd2|oktmo|okved2|okato|okei|okogu|okopf|okfs|okv|oksm|okof|okz|okso|res-vchu|foreign-periodicals|svyaz-licenses|ori|trois|fstec-szi)\//
    );
    return match ? match[1] : 'other';
  }

  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
           (navigator.maxTouchPoints > 1 && /Macintosh/.test(navigator.userAgent));
  }

  function sendAnalytics(catalog, method, emailProvider) {
    const detail = { catalog, method };
    if (emailProvider) detail.email_provider = emailProvider;

    try {
      if (typeof window.ym === 'function') {
        window.ym(METRIKA_COUNTER_ID, 'reachGoal', 'share', detail);
      }
    } catch (e) { /* no-op */ }

    try {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'share', detail);
      }
    } catch (e) { /* no-op */ }
  }

  function buildEmailLinks(subject, body) {
    const s = encodeURIComponent(subject || '');
    const b = encodeURIComponent(body || '');
    return {
      gmail: 'https://mail.google.com/mail/?view=cm&fs=1&su=' + s + '&body=' + b,
      yandex: 'https://mail.yandex.ru/compose?subject=' + s + '&body=' + b,
      mailru: 'https://e.mail.ru/compose/?subject=' + s + '&body=' + b,
      outlook: 'https://outlook.live.com/mail/0/deeplink/compose?subject=' + s + '&body=' + b,
      yahoo: 'https://compose.mail.yahoo.com/?subject=' + s + '&body=' + b,
      mailto: 'mailto:?subject=' + s + '&body=' + b
    };
  }

  function fallbackCopy(text) {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'absolute';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      return ok;
    } catch (e) {
      return false;
    }
  }

  function copyToClipboard(text) {
    return new Promise((resolve) => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
          .then(() => resolve(true))
          .catch(() => resolve(fallbackCopy(text)));
      } else {
        resolve(fallbackCopy(text));
      }
    });
  }

  function escHtml(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  function getSafeEmailLinks(title, text, url) {
    // Если url пустой, вообще не добавляем его в текст письма
    const body = text + (text && url ? '\n\n' + url : '');
    const links = buildEmailLinks(title, body);

    const maxLen = Math.max(...Object.values(links).map(l => l.length));
    const isVeryLong = maxLen > MAX_URL_LENGTH;

    return { links, isTruncated: isVeryLong };
  }

  // ---------- компонент ----------

  class KlassikShare extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this._onClickBound = this._handleClick.bind(this);
      this._toastTimer = null;
    }

    connectedCallback() {
      if (!this.shadowRoot.firstChild) this.render();
      this.shadowRoot.addEventListener('click', this._onClickBound);
    }

    disconnectedCallback() {
      this.shadowRoot.removeEventListener('click', this._onClickBound);
      clearTimeout(this._toastTimer);
      document.body.style.overflow = '';
    }

    get catalog() {
      return this.getAttribute('catalog') || detectCatalog();
    }
    get shareTitle() {
      return this.getAttribute('title') || document.title || 'Поделиться';
    }
    get shareText() {
      return this.getAttribute('text') || '';
    }
    get shareUrl() {
      // Если атрибут url задан (даже пустой строкой), возвращаем его.
      // Если атрибута url нет вовсе — берем текущий адрес.
      if (this.hasAttribute('url')) {
        return this.getAttribute('url');
      }
      return location.href;
    }

    _handleClick(event) {
      const path = event.composedPath();

      for (const el of path) {
        if (el === this.shadowRoot) break;
        if (el && el.nodeType === 1 && el.classList) {
          if (el.classList.contains('ks-modal') ||
              el.classList.contains('ks-toast') ||
              el.tagName === 'DIALOG') {
            if (el.tagName === 'DIALOG' && event.target === el) {
               this._closeModal();
            }
            return;
          }
        }
      }

      const first = path[0];
      if (!first || first.nodeType !== 1) return;
      if (first.tagName !== 'BUTTON' &&
          first.tagName !== 'A' &&
          first.getAttribute('role') !== 'button') {
        return;
      }

      event.preventDefault();
      this._doShare();
    }

    async _doShare() {
      const title = this.shareTitle;
      const text = this.shareText;
      const url = this.shareUrl;
      const catalog = this.catalog;

      if (isMobileDevice() && typeof navigator.share === 'function') {
        try {
          await navigator.share({ title, text, url });
          this._emit('native', null, catalog, text, url);
          return;
        } catch (err) {
          const isAbort = err && err.name === 'AbortError';
          if (isAbort) {
            this._emit('native_cancelled', null, catalog, text, url);
            return;
          }
        }
      }

      this._openModal();
    }

    _openModal() {
      const modal = this.shadowRoot.querySelector('.ks-modal');
      if (!modal) return;
      
      if (typeof modal.showModal === 'function') {
        modal.showModal();
      } else {
        modal.setAttribute('open', '');
      }
      
      document.body.style.overflow = 'hidden';
      
      const closeBtn = modal.querySelector('.ks-close');
      if (closeBtn && closeBtn.focus) closeBtn.focus();
    }

    _closeModal() {
      const modal = this.shadowRoot.querySelector('.ks-modal');
      if (!modal) return;
      
      if (typeof modal.close === 'function') {
        modal.close();
      } else {
        modal.removeAttribute('open');
      }
      
      document.body.style.overflow = '';
    }

    _handleAction(action) {
      const catalog = this.catalog;
      const text = this.shareText;
      const url = this.shareUrl;

      if (action === 'copy_text') {
        // Если url пустой, не добавляем лишних переносов
        const fullText = text + (text && url ? '\n\n' + url : '');
        copyToClipboard(fullText).then((ok) => {
          if (ok) this._toast('Текст и ссылка скопированы!');
          this._emit('copy_text', null, catalog, text, url);
        });
      } else if (action === 'native') {
        if (typeof navigator.share === 'function') {
          navigator.share({ title: this.shareTitle, text, url })
            .then(() => {
              this._emit('native', null, catalog, text, url);
              this._closeModal();
            })
            .catch((err) => {
              if (err.name !== 'AbortError') {
                console.log('Share failed:', err);
              }
            });
        }
      }
    }

    _emit(method, emailProvider, catalog, text, url) {
      sendAnalytics(catalog, method, emailProvider);
      this.dispatchEvent(new CustomEvent('klassik-share', {
        bubbles: true,
        composed: true,
        detail: { catalog, method, email_provider: emailProvider || null, text, url }
      }));
    }

    _toast(message) {
      const toast = this.shadowRoot.querySelector('.ks-toast');
      if (!toast) return;
      toast.textContent = message;
      toast.classList.add('is-visible');
      clearTimeout(this._toastTimer);
      this._toastTimer = setTimeout(() => {
        toast.classList.remove('is-visible');
      }, 2000);
    }

    getStyles() {
      return `
        <style>
          :host { display: inline-block; }
          :host([hidden]) { display: none !important; }

          .ks-modal {
            position: fixed;
            inset: 0;
            z-index: 10000;
            display: none;
            align-items: center;
            justify-content: center;
            font-family: system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
            border: none;
            background: transparent;
            width: 100vw;
            height: 100vh;
            max-width: 100vw;
            max-height: 100vh;
            padding: 0;
            margin: 0;
          }
          .ks-modal[open] { display: flex; }
          .ks-modal::backdrop {
            background: rgba(0, 0, 0, 0.45);
            backdrop-filter: blur(2px);
          }

          .ks-dialog {
            position: relative;
            background: #ffffff;
            border-radius: 16px;
            padding: 24px;
            width: 90%;
            max-width: 520px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
            display: flex;
            flex-direction: column;
            gap: 12px;
            animation: ks-pop-in 0.2s ease;
            max-height: 85vh;
            overflow-y: auto;
            overflow-x: hidden;
            box-sizing: border-box;
            color: #1e293b;
          }

          @keyframes ks-pop-in {
            from { transform: scale(0.96); opacity: 0; }
            to   { transform: scale(1);    opacity: 1; }
          }

          .ks-close {
            position: absolute;
            top: 12px;
            right: 16px;
            background: none;
            border: none;
            font-size: 24px;
            line-height: 1;
            color: #a0aec0;
            cursor: pointer;
            padding: 0;
            font-family: inherit;
          }
          .ks-close:hover { color: #4a5568; }

          .ks-title { margin: 0; font-size: 18px; color: #0f172a; }
          .ks-hint { margin: 0; font-size: 13px; color: #718096; line-height: 1.5; }
          
          .ks-textarea {
            width: 100%;
            height: 120px;
            padding: 12px;
            border: 1px solid #cbd5e0;
            border-radius: 8px;
            font-family: var(--mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace);
            font-size: 13px;
            line-height: 1.5;
            color: #2d3748;
            background: #f7fafc;
            box-sizing: border-box;
            resize: vertical;
            white-space: pre-wrap; 
            word-break: break-word; 
            overflow-x: hidden;
          }
          
          .ks-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            padding: 10px 12px;
            border-radius: 8px;
            font: inherit;
            font-size: 14px;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.15s;
            box-sizing: border-box;
          }

          .ks-btn--primary {
            width: 100%;
            font-weight: 600;
            border: 1px solid #2563eb;
            background: #2563eb;
            color: #ffffff;
          }
          .ks-btn--primary:hover {
            background: #1d4ed8;
            border-color: #1d4ed8;
          }

          .ks-label { font-size: 13px; color: #718096; width: 100%; margin-bottom: -2px; margin-top: 4px; }

          .ks-mail-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            width: 100%;
            margin-bottom: 6px;
            justify-content: center;
          }
          .ks-mail-grid a {
            flex: 1 1 calc(33.333% - 6px);
            max-width: calc(33.333% - 6px);
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 10px 6px;
            font-size: 13px;
            font-weight: 500;
            background: #fff;
            color: #2d3748;
            border: 1px solid #cbd5e0;
            border-radius: 8px;
            text-decoration: none;
            transition: all 0.15s;
            white-space: nowrap;
            box-sizing: border-box;
          }
          .ks-mail-grid a:hover { background: #f7fafc; border-color: #a0aec0; }

          .ks-btn--native {
            display: none;
            width: 100%;
            margin-top: 4px;
            border: 1px dashed #cbd5e0;
            background: #f7fafc;
            color: #718096;
          }
          .ks-btn--native:hover { border-color: #2563eb; color: #2563eb; background: #eff6ff; }

          .ks-truncate-note {
            font-size: 12px;
            color: #e11d48;
            margin: -4px 0 4px;
            line-height: 1.4;
            background: #ffe4e6;
            padding: 8px;
            border-radius: 6px;
          }

          .ks-toast {
            position: fixed;
            left: 50%;
            bottom: 24px;
            transform: translateX(-50%) translateY(20px);
            background: #1a202c;
            color: #ffffff;
            padding: 10px 16px;
            border-radius: 10px;
            font-size: 14px;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.2s, transform 0.2s;
            z-index: 10001;
            white-space: nowrap;
            max-width: 90vw;
            overflow: hidden;
            text-overflow: ellipsis;
            box-shadow: 0 8px 24px rgba(0,0,0,0.25);
          }
          .ks-toast.is-visible { opacity: 1; transform: translateX(-50%) translateY(0); }

          @media (max-width: 640px) {
            .ks-dialog { padding: 20px; }
            .ks-mail-grid a { flex: 1 1 calc(50% - 4px); max-width: calc(50% - 4px); }
          }
          
          @media (prefers-color-scheme: dark) {
             .ks-dialog { background: #111a2c; color: #e6edf7; }
             .ks-title { color: #e6edf7; }
             .ks-hint { color: #94a3b8; }
             .ks-textarea { background: #0b1120; border-color: #1e293b; color: #e6edf7; }
             .ks-mail-grid a { background: #1e293b; color: #e6edf7; border-color: #334155; }
             .ks-mail-grid a:hover { background: #334155; }
             .ks-btn--native { background: #1e293b; color: #94a3b8; border-color: #334155; }
             .ks-truncate-note { background: rgba(225, 29, 72, 0.2); color: #fda4af; }
          }
        </style>
      `;
    }

    render() {
      const title = this.shareTitle;
      const text = this.shareText;
      const url = this.shareUrl;
      const { links: emailLinks, isTruncated } = getSafeEmailLinks(title, text, url);

      const body = text + (text && url ? '\n\n' + url : '');
      const hasNativeShare = typeof navigator.share === 'function';
      const nativeBtnStyle = hasNativeShare ? 'inline-flex' : 'none';

      const truncateNote = isTruncated
        ? '<p class="ks-truncate-note">⚠️ Текст очень длинный. Некоторые веб-почты могут обрезать ссылку. Рекомендуем нажать «Скопировать».</p>'
        : '';

      this.shadowRoot.innerHTML = `
        ${this.getStyles()}
        <slot></slot>

        <dialog class="ks-modal" aria-labelledby="ks-title">
          <div class="ks-dialog">
            <button type="button" class="ks-close" aria-label="Закрыть" title="Закрыть" data-ks-close>&times;</button>
            <h3 class="ks-title" id="ks-title">Отправить коллегам</h3>
            <p class="ks-hint">Полный текст карточки со ссылкой внизу. Можно скопировать и вставить в любой чат или почту.</p>

            <textarea class="ks-textarea" readonly aria-label="Текст для отправки"></textarea>

            <button type="button" class="ks-btn ks-btn--primary" data-ks-action="copy_text">
              📋 Скопировать текст и ссылку
            </button>

            ${truncateNote}

            <div class="ks-label">Отправить через веб-почту:</div>
            <div class="ks-mail-grid">
              <a href="${escHtml(emailLinks.gmail)}" target="_blank" rel="noopener" data-ks-action="email_gmail" data-ks-provider="gmail">Gmail</a>
              <a href="${escHtml(emailLinks.yandex)}" target="_blank" rel="noopener" data-ks-action="email_yandex" data-ks-provider="yandex">Яндекс</a>
              <a href="${escHtml(emailLinks.mailru)}" target="_blank" rel="noopener" data-ks-action="email_mailru" data-ks-provider="mailru">Mail.ru</a>
              <a href="${escHtml(emailLinks.outlook)}" target="_blank" rel="noopener" data-ks-action="email_outlook" data-ks-provider="outlook">Outlook</a>
              <a href="${escHtml(emailLinks.yahoo)}" target="_blank" rel="noopener" data-ks-action="email_yahoo" data-ks-provider="yahoo">Yahoo</a>
            </div>

            <div class="ks-label">Или откройте в установленной программе:</div>
            <a href="${escHtml(emailLinks.mailto)}" class="ks-btn ks-btn--native" data-ks-action="email_mailto" data-ks-provider="mailto" data-ks-native="true" style="display: inline-flex;">
              💻 Почтовый клиент
            </a>

            <button type="button" class="ks-btn ks-btn--native" data-ks-action="native" style="display: ${nativeBtnStyle};">
              📱 Системное меню
            </button>
          </div>
        </dialog>

        <div class="ks-toast" role="status" aria-live="polite"></div>
      `;

      const modal = this.shadowRoot.querySelector('.ks-modal');
      if (modal) {
        modal.addEventListener('close', () => {
          document.body.style.overflow = '';
        });
      }

      this.shadowRoot.querySelectorAll('[data-ks-close]').forEach((el) => {
        el.addEventListener('click', () => this._closeModal());
      });

      this.shadowRoot.querySelectorAll('[data-ks-action]').forEach((el) => {
        el.addEventListener('click', (e) => {
          const action = el.getAttribute('data-ks-action');
          const catalog = this.catalog;
          const sText = this.shareText;
          const sUrl = this.shareUrl;

          if (action.indexOf('email_') === 0) {
            const provider = el.getAttribute('data-ks-provider') || 'unknown';
            const isNative = el.getAttribute('data-ks-native') === 'true';

            sendAnalytics(catalog, 'email', provider);
            this.dispatchEvent(new CustomEvent('klassik-share', {
              bubbles: true,
              composed: true,
              detail: { catalog, method: 'email', email_provider: provider, text: sText, url: sUrl }
            }));

            if (!isNative) {
              setTimeout(() => this._closeModal(), 250);
            }
          } else {
            e.preventDefault();
            this._handleAction(action);
          }
        });
      });

      const ta = this.shadowRoot.querySelector('.ks-textarea');
      if (ta) {
        ta.value = body;
        ta.addEventListener('click', () => ta.select());
      }
    }
  }

  if (!customElements.get('klassik-share')) {
    customElements.define('klassik-share', KlassikShare);
  }

  console.log('✅ share.js v1.0.3 загружен');
})();
