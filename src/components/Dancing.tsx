"use client";

import { useEffect, useRef, useState } from "react";
import { Music, Radio, Sparkles } from "lucide-react";

interface DancingProps {
  danceMode: boolean;
  toggleDanceMode: () => void;
}

export default function Dancing({ danceMode, toggleDanceMode }: DancingProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle canvas wave animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let phase = 0;

    // Resize handler
    const resizeCanvas = () => {
      if (containerRef.current && canvas) {
        canvas.width = containerRef.current.clientWidth;
        canvas.height = 180;
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Render loop
    const render = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // We draw 3 overlapping sine waves
      const wavesCount = 3;
      const colors = danceMode
        ? ["rgba(224, 64, 251, 0.4)", "rgba(236, 72, 153, 0.35)", "rgba(168, 85, 247, 0.25)"]
        : ["rgba(255, 107, 107, 0.35)", "rgba(255, 211, 182, 0.3)", "rgba(255, 217, 61, 0.2)"];

      phase += danceMode ? 0.04 : 0.02; // Speed up in dance mode

      for (let i = 0; i < wavesCount; i++) {
        ctx.beginPath();
        ctx.lineWidth = i === 0 ? 3 : 1.5;
        ctx.strokeStyle = colors[i];

        const amplitude =
          (danceMode ? 35 : 18) +
          (mousePos.y > 0 ? (1 - mousePos.y / canvas.height) * 25 : 0) +
          i * 5;
        const frequency = 0.005 + i * 0.002;

        for (let x = 0; x < canvas.width; x++) {
          // Calculate wave height y
          // Sine function shifted by phase
          const y =
            canvas.height / 2 +
            Math.sin(x * frequency + phase + i * 1.5) *
              amplitude *
              Math.sin((x / canvas.width) * Math.PI); // Pin the ends to 0 amplitude
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [danceMode, mousePos]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      id="dancing"
      ref={containerRef}
      className={`py-16 md:py-24 px-4 sm:px-6 relative transition-all duration-700 overflow-hidden ${
        danceMode
          ? "bg-slate-950 text-purple-100"
          : "bg-[#1f2324] text-white"
      }`}
    >
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl transition-all duration-1000 ${
            danceMode
              ? "bg-purple-600/30 animate-pulse-slow"
              : "bg-coral-500/10"
          }`}
        />
      </div>

      <div className="max-w-5xl mx-auto z-10 relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Silhouette illustration */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-72 h-72 rounded-full overflow-hidden flex items-center justify-center border-4 border-white/5 bg-black/40 shadow-2xl group">
            {/* Animated aura ring */}
            <div
              className={`absolute inset-0 rounded-full transition-all duration-700 blur-md ${
                danceMode
                  ? "bg-gradient-to-tr from-purple-500 to-pink-500 opacity-60 animate-spin-slow"
                  : "bg-gradient-to-tr from-coral-500 to-peach-300 opacity-20"
              }`}
            />
            {/* Dancer silhouette vector */}
            <svg
              viewBox="0 0 100 100"
              className={`w-56 h-56 transition-all duration-500 ${
                danceMode ? "text-purple-300 scale-105" : "text-gray-400"
              }`}
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Silhouette dancer path */}
              <path
                d="M50 15C52.2091 15 54 13.2091 54 11C54 8.79086 52.2091 7 50 7C47.7909 7 46 8.79086 46 11C46 13.2091 47.7909 15 50 15Z"
                className="animate-float"
              />
              <path
                d="M51 17H49C44 17 40 21 40 26V38C40 39.5 41.5 40 42 38.5L46 30L44 48L32 60C31 61 31.5 62 33 61.5L46 54L48 78L36 92C35 93 36 94.5 37.5 93.5L50 82L62.5 93.5C64 94.5 65 93 64 92L52 78L54 54L67 61.5C68.5 62 69 61 68 60L56 48L54 30L58 38.5C58.5 40 60 39.5 60 38V26C60 21 56 17 51 17Z"
                className="origin-center transition-transform duration-700"
                style={{
                  transform: danceMode ? "rotate(4deg) scaleY(1.02)" : "none",
                }}
              />
            </svg>
          </div>
        </div>

        {/* Right Column: Title, Quote, Toggle & Live Wave Canvas */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          <div className="space-y-3">
            <span
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-block ${
                danceMode
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                  : "bg-white/10 text-gray-300"
              }`}
            >
              Creative Outlet ⚡
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              Dancing: My Happy Place 💃
            </h2>
          </div>

          <blockquote className="border-l-4 border-accent pl-4 text-left italic max-w-xl mx-auto lg:mx-0">
            <p className="text-lg text-gray-300 dark:text-gray-200 leading-relaxed font-dancing">
              {"Dance is the hidden language of the soul — and mine speaks joy."}
            </p>
          </blockquote>

          <p className="text-sm text-gray-400 max-w-xl leading-relaxed mx-auto lg:mx-0">
            For me, HR and dance share a deep connection: both are about rhythm, energy, synchronization, and understanding the core movement of people. Toggling <strong>Dance Mode</strong> transforms this website into a celebration of that energy!
          </p>

          {/* Dance Mode Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button
              onClick={toggleDanceMode}
              className={`group flex items-center gap-3 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer ${
                danceMode
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-purple-500/25"
                  : "bg-white text-slate-900 hover:bg-gray-100"
              }`}
            >
              <Music size={18} className={danceMode ? "animate-spin-slow" : ""} />
              <span>{danceMode ? "Stop Dance Mode" : "Activate Dance Mode!"}</span>
              <Sparkles size={16} className="text-yellow-300" />
            </button>
          </div>

          {/* Interactive Live Wave Canvas */}
          <div className="w-full bg-black/30 border border-white/5 rounded-3xl p-4 relative">
            <div className="absolute top-3 right-4 flex items-center gap-1.5 text-[10px] font-bold text-gray-500 uppercase tracking-widest pointer-events-none">
              <Radio size={12} className="text-accent" />
              <span>Interactive Wave Visualizer</span>
            </div>
            <canvas
              ref={canvasRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="w-full h-32 cursor-pointer relative z-10"
            />
            <p className="text-[10px] text-gray-500 text-center mt-1 pointer-events-none">
              Hover your cursor over the visualizer to alter wave dynamics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
