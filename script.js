/* ===========================================================
   KALLOS MEDIA — script.js
   Animated timecode in the hero (pure decoration).
   =========================================================== */
(function tick(){
  const el = document.getElementById('tc');
  if(!el) return;
  let frame = 0;
  setInterval(() => {
    frame++;
    const f = frame % 30;
    const s = Math.floor(frame / 30) % 60;
    const m = Math.floor(frame / 1800) % 60;
    const h = Math.floor(frame / 108000);
    const pad = n => String(n).padStart(2, '0');
    el.textContent = `${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`;
  }, 1000/30);
})();
