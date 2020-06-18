'use strict';

(function () {
  if ('localhost' === window.location.hostname) {
    return;
  }

  (function (m, e, t, r, i) {
    m[i] = m[i] || function () {
      (m[i].a = m[i].a || []).push(arguments);
    };
    m[i].l = 1 * new Date();
    var k = e.createElement(t);
    var a = e.getElementsByTagName(t)[0];
    k.async = true;
    k.src = r;
    a.parentNode.insertBefore(k, a);
  })(window, document, 'script', 'https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js', 'ym');

  ym(64763683, 'init', {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    trackHash: true
  });
})();
