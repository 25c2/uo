(() => {
  const el = document.getElementById('text');
  function onMove(x, y) {
    const w = window.innerWidth, h = window.innerHeight;
    const nx = (x - w / 2) / (w / 2);
    const ny = (y - h / 2) / (h / 2);
    const tx = (nx * 6).toFixed(2) + 'px';
    const ty = (ny * 6).toFixed(2) + 'px';
    const rot = (nx * 4).toFixed(2) + 'deg';
    el.style.setProperty('--tx', tx);
    el.style.setProperty('--ty', ty);
    el.style.setProperty('--rot', rot);
  }
  window.addEventListener('pointermove', e => onMove(e.clientX, e.clientY), { passive: true });
  window.addEventListener('touchmove', e => {
    const t = e.touches[0];
    if (t) onMove(t.clientX, t.clientY);
  }, { passive: true });
})();
