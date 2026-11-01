// Mobile + offline helpers for Galactic Wars
(function () {
  var head = document.head;
  function meta(n, c) { var m = document.createElement('meta'); m.name = n; m.content = c; head.appendChild(m); }
  if (!document.querySelector('meta[name=viewport]')) meta('viewport', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover');
  meta('apple-mobile-web-app-capable', 'yes');
  meta('mobile-web-app-capable', 'yes');
  meta('theme-color', '#02040c');
  // block page scrolling / pinch-zoom / long-press menus so touch only steers the ship
  ['touchmove', 'gesturestart'].forEach(function (ev) {
    document.addEventListener(ev, function (e) { e.preventDefault(); }, { passive: false });
  });
  document.addEventListener('contextmenu', function (e) { e.preventDefault(); });
  // PWA: installable + playable offline when served from a website (GitHub Pages)
  if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0) {
    var l = document.createElement('link'); l.rel = 'manifest'; l.href = 'manifest.webmanifest'; head.appendChild(l);
    var a = document.createElement('link'); a.rel = 'apple-touch-icon'; a.href = 'apple-touch-icon.png'; head.appendChild(a);
    navigator.serviceWorker.register('sw.js').catch(function () {});
  }
})();
