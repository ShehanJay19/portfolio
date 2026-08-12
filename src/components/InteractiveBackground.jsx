import { useEffect, useRef } from "react";

// Canvas-drawn dot grid (replaces the old CSS radial-gradient background).
// Dots near the cursor grow and pick up a touch of the accent color,
// like they're being pulled toward it; everywhere else stays static.
const SPACING = 32;
const RADIUS_BASE = 1;
const RADIUS_MAX = 2.6;
const ALPHA_BASE = 0.07;
const ALPHA_MAX = 0.55;
const INFLUENCE = 150;

const INK = [237, 237, 236];
const ACCENT = [217, 119, 87];

const lerp = (a, b, t) => a + (b - a) * t;
const smoothstep = (t) => t * t * (3 - 2 * t);

function InteractiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let mouseX = -9999;
    let mouseY = -9999;
    let scheduled = false;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * SPACING;
          const y = row * SPACING;

          let t = 0;
          const dx = x - mouseX;
          const dy = y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < INFLUENCE) {
            t = smoothstep(1 - dist / INFLUENCE);
          }

          const radius = lerp(RADIUS_BASE, RADIUS_MAX, t);
          const alpha = lerp(ALPHA_BASE, ALPHA_MAX, t);
          const r = Math.round(lerp(INK[0], ACCENT[0], t));
          const g = Math.round(lerp(INK[1], ACCENT[1], t));
          const b = Math.round(lerp(INK[2], ACCENT[2], t));

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
          ctx.fill();
        }
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };

    const scheduleDraw = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        draw();
      });
    };

    const handlePointerMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      scheduleDraw();
    };

    const handlePointerOut = (e) => {
      if (e.relatedTarget) return;
      mouseX = -9999;
      mouseY = -9999;
      scheduleDraw();
    };

    window.addEventListener("resize", resize);
    if (!prefersReducedMotion) {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
      window.addEventListener("pointerout", handlePointerOut, { passive: true });
    }

    resize();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerout", handlePointerOut);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}

export default InteractiveBackground;
