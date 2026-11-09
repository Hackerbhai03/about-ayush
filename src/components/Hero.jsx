import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { soundManager } from '../utils/audio';
import { 
  ArrowRight, 
  Send, 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Bot, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { GithubIcon } from './Icons';

const ROLES = [
  "Telegram Bot Architect",
  "Full-Stack Web Craftsman",
  "Cyber Anti-Abuse Defender",
  "Custom Automation Engineer",
  "Python & Node.js Developer"
];

export default function Hero({ openTerminal }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && displayedRole.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayedRole(current.slice(0, displayedRole.length + 1));
      }, 70);
    } else if (isDeleting && displayedRole.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedRole(current.slice(0, displayedRole.length - 1));
      }, 35);
    } else if (!isDeleting && displayedRole.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayedRole.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-[95vh] pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Cyber Grids & Glows */}
      <div className="absolute inset-0 bg-grid-cyber opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status / Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Custom Bots & Projects</span>
              <span className="text-slate-500">|</span>
              <span className="text-cyan-400 font-semibold">2026 Ready</span>
            </div>

            {/* Main Greeting & Headline */}
            <div className="space-y-2">
              <p className="text-slate-400 text-sm sm:text-base font-mono flex items-center gap-2">
                <span className="text-violet-400">~/welcome $</span> Hey Dear, Myself
              </p>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                {portfolioData.profile.name} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300">
                  Also Known As {portfolioData.profile.alias}
                </span>
              </h1>
            </div>

            {/* Dynamic Typewriter Title */}
            <div className="flex items-center gap-2 text-lg sm:text-2xl font-mono text-slate-300 min-h-[36px]">
              <span className="text-cyan-400">&gt;</span>
              <span className="text-violet-300 font-semibold">{displayedRole}</span>
              <span className="w-2.5 h-6 bg-cyan-400 animate-pulse inline-block" />
            </div>

            {/* Bio statement */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              I'm not a corporate suit—I'm an independent builder who loves code. 
              I design <strong className="text-white font-medium">high-speed Telegram bots</strong>, 
              scalable <strong className="text-white font-medium">web utilities</strong>, and 
              actively <strong className="text-rose-300 font-medium">take down abusive channels</strong> to protect innocent people. 
              Still learning, still experimenting, always moving forward.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={() => soundManager.playClick()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="size-4" />
              </a>

              <a
                href={portfolioData.profile.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClick()}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#0f172a] hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white text-sm font-medium transition-all"
              >
                <Send className="size-4 text-cyan-400" />
                <span>Telegram DM</span>
              </a>

              <button
                onClick={() => {
                  soundManager.playChirp(400, 800, 0.05);
                  openTerminal();
                }}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-violet-950/40 hover:bg-violet-900/40 border border-violet-500/30 text-violet-300 hover:text-white text-sm font-mono transition-all cursor-pointer"
              >
                <Terminal className="size-4 text-violet-400" />
                <span>Launch CLI</span>
              </button>
            </div>

            {/* Quick Micro Tags */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-emerald-400" />
                <span>Ethical & Anti-Abuse Stance</span>
              </div>
              <div className="flex items-center gap-2">
                <Bot className="size-4 text-violet-400" />
                <span>Custom Telegram Bots</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="size-4 text-cyan-400" />
                <span>Ultra-Fast APIs</span>
              </div>
            </div>

          </div>

          {/* Right Hero Card / Interactive Cyber Dossier (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 opacity-30 blur-xl group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-pulse-glow" />

              {/* Main Cyber Box */}
              <div className="relative rounded-2xl bg-[#0d121f] border border-violet-500/30 p-6 shadow-2xl backdrop-blur-xl space-y-5">
                
                {/* Header bar */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="size-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="size-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="size-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="text-[11px] font-mono text-slate-400 ml-2">kanha@main-node</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                    ONLINE
                  </div>
                </div>

                {/* Profile Avatar & Identity */}
                <div className="flex items-center gap-4">
                  <div className="relative size-20 sm:size-24 rounded-2xl p-[2px] bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400 shadow-lg shadow-violet-500/20 shrink-0">
                    {!imgError ? (
                      <img
                        src={portfolioData.profile.avatar}
                        alt="Ayush (Kanha)"
                        onError={() => setImgError(true)}
                        className="size-full object-cover rounded-2xl bg-slate-900"
                      />
                    ) : (
                      <div className="size-full rounded-2xl bg-gradient-to-tr from-slate-900 to-violet-950 flex items-center justify-center font-mono font-black text-3xl text-violet-400">
                        AK
                      </div>
                    )}
                    <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded bg-slate-900 border border-violet-500 text-[9px] font-mono text-cyan-300 font-bold">
                      PRO
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-xl font-bold text-white tracking-tight">Ayush</h3>
                      <span className="text-xs font-mono text-violet-400 bg-violet-500/15 border border-violet-500/30 px-1.5 py-0.2 rounded font-semibold">
                        Kanha
                      </span>
                    </div>
                    <p className="text-xs font-mono text-slate-400">@{portfolioData.profile.githubUsername}</p>
                    <p className="text-xs text-slate-300 line-clamp-2">
                      Telegram Bot Architect & Web Developer.
                    </p>
                  </div>
                </div>

                {/* Spec details grid */}
                <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-slate-900/60 p-3 rounded-xl border border-white/5">
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Specialty</span>
                    <span className="text-slate-200 font-medium">Telegram Bots</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Principle</span>
                    <span className="text-amber-300 font-medium">Humanity & Respect</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Primary Stack</span>
                    <span className="text-cyan-300 font-medium">Python • React • Node</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Ethical Stance</span>
                    <span className="text-emerald-400 font-medium">Anti-Abuse Guard</span>
                  </div>
                </div>

                {/* Floating Metrics Pill */}
                <div className="grid grid-cols-3 gap-2 text-center pt-1">
                  <div className="bg-violet-900/20 border border-violet-500/20 p-2.5 rounded-xl">
                    <span className="block text-lg font-black font-mono text-violet-300">20+</span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Bots Active</span>
                  </div>
                  <div className="bg-cyan-900/20 border border-cyan-500/20 p-2.5 rounded-xl">
                    <span className="block text-lg font-black font-mono text-cyan-300">99.9%</span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Uptime</span>
                  </div>
                  <div className="bg-emerald-900/20 border border-emerald-500/20 p-2.5 rounded-xl">
                    <span className="block text-lg font-black font-mono text-emerald-300">100%</span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Passion</span>
                  </div>
                </div>

                {/* Interactive CLI trigger pill */}
                <button
                  onClick={() => {
                    soundManager.playKey();
                    openTerminal();
                  }}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 text-left font-mono text-xs text-slate-400 hover:text-cyan-300 flex items-center justify-between transition-colors group cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-cyan-400">$</span>
                    <span>type 'help' to inspect system</span>
                  </span>
                  <span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-colors">
                    CLI
                  </span>
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle scroll down indicator */}
      <a
        href="#about"
        onClick={() => soundManager.playClick()}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-violet-400 transition-colors text-xs font-mono"
      >
        <span>DISCOVER</span>
        <ChevronDown className="size-4 animate-bounce" />
      </a>
    </section>
  );
}
