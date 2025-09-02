(() => {
  const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mql.matches) return;
  const c = document.getElementById('bg-ribbons');
  if (!c) return;
  const ctx = c.getContext('2d', { alpha: true });

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  function size() {
    ctx.setTransform(1,0,0,1,0,0);
    c.width  = c.clientWidth  * dpr;
    c.height = c.clientHeight * dpr;
    ctx.scale(dpr, dpr);
  }
  size();
  new ResizeObserver(size).observe(c);

  const W = () => c.clientWidth;
  const H = () => c.clientHeight;

  // Génère N rubans avec des sinusoïdes mêlées
  const N = 12;
  const ribbons = Array.from({length:N}, (_,i)=>({
    amp: 20 + Math.random()*40,
    base: ((i+1)/(N+1)) * H(),
    phase: Math.random()*Math.PI*2,
    speed: 0.003 + Math.random()*0.004,
    thick: 1 + Math.random()*2
  }));

  function frame(t){
    ctx.clearRect(0,0,c.width,dpr*H());
    const grad = ctx.createLinearGradient(0,0,c.width,0);
    grad.addColorStop(0,'rgba(120,102,204,0.75)');
    grad.addColorStop(1,'rgba(200,210,255,0.75)');
    ctx.strokeStyle = grad;
    ctx.shadowColor = getComputedStyle(document.documentElement)
                      .getPropertyValue('--ribbon-glow') || 'rgba(120,102,204,.35)';
    ctx.shadowBlur = 8;

    ribbons.forEach(r=>{
      const A = r.amp, y0 = r.base;
      const k1 = 0.0035, k2 = 0.0017;
      ctx.beginPath();
      for (let x=0; x<=W(); x+=8){
        const y = y0
                + Math.sin(x*k1 + r.phase)*A
                + Math.sin(x*k2 + r.phase*0.7)*A*0.4;
        x===0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
      }
      ctx.globalAlpha = 0.55;
      ctx.lineWidth = r.thick;
      ctx.stroke();
      r.phase += r.speed * (1 + Math.sin(t*0.001));
      r.base  += Math.sin(t*0.0005 + r.phase)*0.05; // légère dérive verticale
    });
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
