import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { soundManager } from '../utils/audio';
import { 
  Cpu, 
  Send, 
  Bot, 
  Radio, 
  Layout, 
  Sparkles, 
  Code, 
  FileCode, 
  Terminal, 
  Server, 
  Box, 
  Cloud, 
  ShieldAlert, 
  Lock, 
  Laptop, 
  Crosshair,
  Layers,
  CheckCircle2
} from 'lucide-react';

const ICON_MAP = {
  Send: Send,
  Cpu: Cpu,
  Bot: Bot,
  Radio: Radio,
  Layout: Layout,
  Sparkles: Sparkles,
  Code: Code,
  FileCode: FileCode,
  Terminal: Terminal,
  Server: Server,
  Box: Box,
  Cloud: Cloud,
  ShieldAlert: ShieldAlert,
  Lock: Lock,
  Laptop: Laptop,
  Crosshair: Crosshair
};

export default function SkillsSection() {
  const categories = Object.keys(portfolioData.skills);
  const [activeTab, setActiveTab] = useState(categories[0]);

  const handleTabChange = (cat) => {
    soundManager.playClick();
    setActiveTab(cat);
  };

  return (
    <section id="skills" className="py-24 relative bg-[#07090f]/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs">
            <Layers className="size-3.5" />
            <span>TECHNICAL CAPABILITIES // 02</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Weapons of Choice & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-violet-400">Toolkit</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            These are things I practise and actively build with, not paper certificates. No artificial claims—just real code, real bots, and continuous experimentation.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleTabChange(cat)}
              className={`px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/30 border border-violet-400/40'
                  : 'bg-[#0e1424] text-slate-400 hover:text-slate-200 border border-white/5 hover:border-violet-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.skills[activeTab].map((skill, idx) => {
            const IconComponent = ICON_MAP[skill.icon] || Code;
            return (
              <div
                key={idx}
                onMouseEnter={() => soundManager.playKey()}
                className="p-6 rounded-2xl bg-[#0c101c] border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300 shadow-xl group hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="size-11 rounded-xl bg-violet-950/60 border border-violet-500/30 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Indicator */}
                <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Currently Exploring / Lab Strip */}
        <div className="mt-14 p-6 rounded-2xl bg-[#0c101c]/80 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-cyan-400 animate-ping inline-block" />
            <span className="font-mono text-xs text-slate-400 uppercase tracking-wider font-semibold">
              Currently In Lab:
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {[
              "MTProto v2 High Concurrency",
              "AI Agent Function Calling",
              "Advanced Telegram Channel Safeguards",
              "WebAssembly Edge Functions"
            ].map((topic, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 font-mono text-xs"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
