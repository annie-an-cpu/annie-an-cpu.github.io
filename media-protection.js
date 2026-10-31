(function () {
  'use strict';

  if (window.__aniyaMediaProtectionInstalled) return;
  window.__aniyaMediaProtectionInstalled = true;

  const MEDIA_SELECTOR = 'img, video, audio, picture, canvas, svg image';
  const MEDIA_URL_RE = /\.(?:avif|gif|jpe?g|png|svg|webp|mp4|m4v|mov|webm|ogv|mp3|m4a|ogg|wav)(?:$|[?#])/i;

  const style = document.createElement('style');
  style.textContent = [
    'img,video,audio,picture,canvas,svg image{',
    '  -webkit-user-drag:none!important;',
    '  user-drag:none!important;',
    '  -webkit-touch-callout:none!important;',
    '}',
  ].join('\n');
  (document.head || document.documentElement).appendChild(style);

  function protectMedia(root) {
    if (!root || !root.querySelectorAll) return;
    const items = [];
    if (root.nodeType === 1 && root.matches && root.matches(MEDIA_SELECTOR)) items.push(root);
    items.push(...root.querySelectorAll(MEDIA_SELECTOR));

    items.forEach(function (item) {
      item.setAttribute('draggable', 'false');
      item.addEventListener('dragstart', function (event) { event.preventDefault(); }, { capture: true });

      if (item.tagName === 'VIDEO') {
        item.setAttribute('controlsList', 'nodownload noremoteplayback');
        item.setAttribute('disablePictureInPicture', '');
        item.disablePictureInPicture = true;
        if (item.controlsList && item.controlsList.add) {
          item.controlsList.add('nodownload');
          item.controlsList.add('noremoteplayback');
        }
      }
    });

    root.querySelectorAll('*').forEach(function (element) {
      if (element.shadowRoot) installRoot(element.shadowRoot);
    });
  }

  function installRoot(root) {
    if (!root || root.__aniyaMediaProtectionRoot) return;
    root.__aniyaMediaProtectionRoot = true;
    protectMedia(root);

    root.addEventListener('contextmenu', function (event) {
      event.preventDefault();
    }, { capture: true });

    root.addEventListener('dragstart', function (event) {
      const path = event.composedPath ? event.composedPath() : [event.target];
      if (path.some(function (node) { return node && node.matches && node.matches(MEDIA_SELECTOR); })) {
        event.preventDefault();
      }
    }, { capture: true });

    root.addEventListener('click', function (event) {
      const path = event.composedPath ? event.composedPath() : [event.target];
      const link = path.find(function (node) { return node && node.tagName === 'A'; });
      if (link && link.hasAttribute('download') && MEDIA_URL_RE.test(link.href || '')) {
        event.preventDefault();
      }
    }, { capture: true });

    new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (node) {
          if (node.nodeType === 1 || node.nodeType === 11) protectMedia(node);
        });
      });
    }).observe(root, { childList: true, subtree: true });
  }

  const nativeAttachShadow = Element.prototype.attachShadow;
  if (nativeAttachShadow) {
    Element.prototype.attachShadow = function (init) {
      const shadowRoot = nativeAttachShadow.call(this, init);
      installRoot(shadowRoot);
      return shadowRoot;
    };
  }

  document.addEventListener('keydown', function (event) {
    const key = String(event.key || '').toLowerCase();
    if ((event.ctrlKey || event.metaKey) && (key === 's' || key === 'u')) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }, { capture: true });

  installRoot(document);
})();
