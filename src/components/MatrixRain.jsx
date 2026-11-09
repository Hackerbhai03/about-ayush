import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export default function MatrixRain({ active, onClose }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const characters = 'KANHA01AYUSHABCDEF0123456789$#@%&*+=~';
    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    const drops = new Array(columns).fill(1);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.fillStyle = 'rgba(9, 10, 15, 0.08)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#00ff88';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Alternate glowing accents
        if (Math.random() > 0.95) {
          ctx.fillStyle = '#ffffff';
        } else if (Math.random() > 0.85) {
          ctx.fillStyle = '#38bdf8';
        } else {
          ctx.fillStyle = '#10b981';
        }

        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [active, onClose]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black">
      <canvas ref={canvasRef} className="block size-full" />
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 rounded-full bg-slate-900/80 text-emerald-400 hover:text-white border border-emerald-500/40 hover:bg-slate-800 transition-all cursor-pointer font-mono text-xs flex items-center gap-2"
      >
        <X className="size-5" />
        <span>Exit Matrix (Esc)</span>
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none px-4 py-2 rounded-full bg-black/70 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
        System Protocol: Matrix Rain Active | Ayush (Kanha) Cyberpunk Kernel
      </div>
    </div>
  );
}
