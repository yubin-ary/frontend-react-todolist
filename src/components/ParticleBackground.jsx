import { useEffect, useRef } from "react";

const PALETTE = [
  { r: 160, g: 40,  b: 20  }, // dark red
  { r: 170, g: 80,  b: 15  }, // burnt orange
  { r: 150, g: 110, b: 10  }, // dark amber
  { r: 130, g: 60,  b: 20  }, // red-orange
];

const SPACING = 42;
const BASE_RADIUS = 1.8;
const REPULSION_RADIUS = 130;
const SPRING = 0.07;
const DAMPING = 0.72;

function pickColor(col, row) {
  return PALETTE[(col * 3 + row * 7) % PALETTE.length];
}

function buildDots(w, h) {
  const cols = Math.ceil(w / SPACING) + 1;
  const rows = Math.ceil(h / SPACING) + 1;
  const dots = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const ox = col * SPACING;
      const oy = row * SPACING;
      dots.push({
        ox, oy, x: ox, y: oy,
        vx: 0, vy: 0,
        color: pickColor(col, row),
        r: BASE_RADIUS,
        alpha: 0.55,
      });
    }
  }
  return dots;
}

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let dots = [];
    const mouse = { x: -9999, y: -9999 };

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      dots = buildDots(canvas.width, canvas.height);
    }

    function drawBg() {
      const g = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.4, 0,
        canvas.width * 0.5, canvas.height * 0.5,
        Math.max(canvas.width, canvas.height) * 0.85
      );
      g.addColorStop(0, "#0d0020");
      g.addColorStop(0.6, "#060012");
      g.addColorStop(1, "#020008");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function drawDot(dot) {
      const { x, y, r, color: { r: cr, g: cg, b: cb }, alpha } = dot;

      if (alpha > 0.56) {
        const glowR = r * 7;
        const glow = ctx.createRadialGradient(x, y, 0, x, y, glowR);
        glow.addColorStop(0, `rgba(${cr},${cg},${cb},${(alpha - 0.55) * 2.5})`);
        glow.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);
        ctx.beginPath();
        ctx.arc(x, y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${cr},${cg},${cb},${alpha})`;
      ctx.fill();
    }

    function update() {
      for (const dot of dots) {
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < REPULSION_RADIUS && dist > 0.5) {
          const t = 1 - dist / REPULSION_RADIUS;
          const force = t * t * 55;
          dot.vx += (dx / dist) * force * 0.12;
          dot.vy += (dy / dist) * force * 0.12;
          dot.r = BASE_RADIUS + t * 4.5;
          dot.alpha = 0.55 + t * 0.45;
        } else {
          dot.r += (BASE_RADIUS - dot.r) * 0.12;
          dot.alpha += (0.55 - dot.alpha) * 0.12;
        }

        dot.vx += (dot.ox - dot.x) * SPRING;
        dot.vy += (dot.oy - dot.y) * SPRING;
        dot.vx *= DAMPING;
        dot.vy *= DAMPING;
        dot.x += dot.vx;
        dot.y += dot.vy;
      }
    }

    function loop() {
      drawBg();
      update();
      for (const dot of dots) drawDot(dot);
      animId = requestAnimationFrame(loop);
    }

    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    resize();
    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
