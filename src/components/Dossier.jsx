import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { soundManager } from '../utils/audio';
import { 
  FileText, 
  ShieldCheck, 
  Terminal, 
  Heart, 
  Compass, 
  MapPin, 
  Cpu, 
  Flame, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function Dossier() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 font-mono text-xs">
            <FileText className="size-3.5" />
            <span>CLASSIFIED DOSSIER // 01</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Curious First, <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400">Builder Always.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            I don't pretend to know everything. I believe honesty, curiosity, experimenting, and steady learning matter far more than fake certifications or boasting titles.
          </p>
        </div>

        {/* Dossier Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Tech Spec Sheet (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#0d121f]/90 border border-violet-500/30 p-6 shadow-xl backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-violet-400 animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-300 font-bold">
                    Identity Parameters
                  </span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
                  VERIFIED BUILDER
                </span>
              </div>

              {/* Specification List */}
              <dl className="space-y-4 font-mono text-xs sm:text-sm">
                <div className="flex items-center justify-between py-2 border-b border-slate-800/60">
                  <dt className="text-slate-400 flex items-center gap-2">
                    <span className="text-violet-400">&gt;</span> Legal Name
                  </dt>
                  <dd className="text-white font-bold">{portfolioData.profile.name}</dd>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-slate-800/60">
                  <dt className="text-slate-400 flex items-center gap-2">
                    <span className="text-violet-400">&gt;</span> Known As (Alias)
                  </dt>
                  <dd className="text-cyan-300 font-bold bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    {portfolioData.profile.alias}
                  </dd>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-slate-800/60">
                  <dt className="text-slate-400 flex items-center gap-2">
                    <span className="text-violet-400">&gt;</span> GitHub Tag
                  </dt>
                  <dd className="text-slate-200">@{portfolioData.profile.githubUsername}</dd>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-slate-800/60">
                  <dt className="text-slate-400 flex items-center gap-2">
                    <span className="text-violet-400">&gt;</span> Core Principle
                  </dt>
                  <dd className="text-amber-300 font-medium">{portfolioData.profile.principle}</dd>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-slate-800/60">
                  <dt className="text-slate-400 flex items-center gap-2">
                    <span className="text-violet-400">&gt;</span> Religion & Roots
                  </dt>
                  <dd className="text-rose-400 font-semibold">{portfolioData.profile.religion}</dd>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-slate-800/60">
                  <dt className="text-slate-400 flex items-center gap-2">
                    <span className="text-violet-400">&gt;</span> Location
                  </dt>
                  <dd className="text-slate-200 flex items-center gap-1">
                    <MapPin className="size-3.5 text-rose-400" />
                    <span>{portfolioData.profile.location}</span>
                  </dd>
                </div>

                <div className="flex items-center justify-between py-2">
                  <dt className="text-slate-400 flex items-center gap-2">
                    <span className="text-violet-400">&gt;</span> Primary Focus
                  </dt>
                  <dd className="text-emerald-400 font-medium">Bots & Web Architecture</dd>
                </div>
              </dl>

              {/* Bottom Quote Banner */}
              <div className="mt-6 p-4 rounded-xl bg-violet-950/30 border border-violet-500/20 text-xs text-slate-300 leading-relaxed font-mono">
                <span className="text-violet-400 font-bold block mb-1">LOGGED RECORD:</span>
                "I know some code, I build real things with it, and I enjoy learning a little more every week."
              </div>
            </div>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {portfolioData.stats.slice(0, 2).map((st, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#0d121f] border border-white/5 space-y-1">
                  <span className="text-2xl font-black font-mono text-cyan-300">{st.value}</span>
                  <p className="text-xs font-medium text-slate-200">{st.label}</p>
                  <p className="text-[11px] text-slate-400 font-mono">{st.change}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative & Values (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Story Cards */}
            <div className="rounded-2xl bg-[#0d121f]/90 border border-white/10 p-6 sm:p-8 space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="size-5 text-violet-400" />
                The Story Behind the Code
              </h3>
              
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I'm <strong className="text-white">Ayush</strong>, known in digital communities as <strong className="text-cyan-300">Kanha</strong>. 
                  I fell in love with software by asking one simple question: <em className="text-violet-300">"How does this actually work behind the scenes?"</em>
                </p>
                <p>
                  From writing simple Python automation scripts to engineering high-concurrency Telegram bots capable of serving thousands of chat rooms simultaneously, 
                  I like turning an idea into something working, then improving it bit by bit.
                </p>
                <p>
                  Beyond web development and coding, I have a strict moral compass. 
                  When I see abusive Telegram channels or malicious groups misusing girls' pictures or harassing individuals, 
                  I don't look away. I use automation and reporting networks to permanently take them down.
                </p>
              </div>

              {/* Key Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-200 font-medium">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Curiosity-driven development</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-200 font-medium">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Telegram bot automation expert</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-200 font-medium">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Respect for everyone, no ego</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-200 font-medium">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Active anti-abuse enforcement</span>
                </div>
              </div>
            </div>

            {/* Core Values Pillars */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                Fundamental Code of Conduct
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {portfolioData.coreValues.map((val, idx) => (
                  <div 
                    key={idx}
                    className={`p-5 rounded-2xl bg-gradient-to-br ${val.color} border ${val.border} backdrop-blur-sm space-y-2 hover:scale-[1.01] transition-all`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`text-base font-bold ${val.accent}`}>{val.title}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
