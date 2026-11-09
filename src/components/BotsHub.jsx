import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { soundManager } from '../utils/audio';
import { Bot, Send, Radio, Shield, Terminal, Sparkles, Check, ExternalLink } from 'lucide-react';

const BOT_COMMANDS = [
  { 
    cmd: '/start', 
    response: '👋 Namaste! I am the Kanha Bot Engine. Fast, lightweight, and engineered for high uptime. How can I assist you today?' 
  },
  { 
    cmd: '/play [song]', 
    response: '🎵 [AnupriyaaMusic] Connected to voice chat. Streaming 320kbps high-fidelity audio stream. Queue active.' 
  },
  { 
    cmd: '/report_abuse', 
    response: '🛡️ [Anti-Abuse Sentinel] Incident report initialized. Please forward channel link. We review and dispatch takedown requests within 2 hours.' 
  },
  { 
    cmd: '/stats', 
    response: '📊 [System Status] Uptime: 99.98% | Active Sessions: 1,420 | Memory: 38MB | Latency: 16ms' 
  }
];

export default function BotsHub() {
  const [activeCmd, setActiveCmd] = useState(BOT_COMMANDS[0]);

  const handleCmdSelect = (cmdObj) => {
    soundManager.playKey();
    setActiveCmd(cmdObj);
  };

  return (
    <section id="bots" className="py-24 relative bg-[#07090f]/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs">
            <Bot className="size-3.5" />
            <span>TELEGRAM ECOSYSTEM // 04</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Bots Hub & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-violet-400">Automation Network</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Bots living right inside Telegram. Designed for real-time media streaming, community governance, and cyber safety enforcement.
          </p>
        </div>

        {/* Grid: 3 Bot Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {portfolioData.botHub.map((bot, idx) => (
            <div 
              key={idx}
              className="rounded-2xl bg-[#0c101c] border border-cyan-500/20 hover:border-cyan-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/40 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="size-11 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    {idx === 0 ? <Radio className="size-5" /> : idx === 1 ? <Bot className="size-5" /> : <Shield className="size-5" />}
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                    ACTIVE
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {bot.name}
                  </h3>
                  <span className="text-xs font-mono text-violet-400 font-medium">
                    {bot.handle}
                  </span>
                  <p className="text-xs text-slate-400 mt-1 font-mono">{bot.role}</p>
                </div>

                {/* Features list */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  {bot.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="size-3.5 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bot Launch Button */}
              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <a
                  href={bot.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playClick()}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0f182c] hover:bg-cyan-600 border border-cyan-500/30 hover:border-transparent text-cyan-300 hover:text-white font-mono text-xs font-semibold transition-all group-hover:shadow-md group-hover:shadow-cyan-500/20"
                >
                  <Send className="size-3.5" />
                  <span>Open in Telegram</span>
                  <ExternalLink className="size-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Telegram Bot Command Simulator */}
        <div className="rounded-2xl bg-[#0a0e1a] border border-violet-500/30 p-6 sm:p-8 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <Terminal className="size-4 text-violet-400" />
              <span className="text-xs font-mono text-slate-200 font-bold uppercase tracking-wider">
                Live Bot Command Simulator
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              Click a command to test Telegram bot response
            </span>
          </div>

          {/* Command Buttons */}
          <div className="flex flex-wrap gap-2 mb-6">
            {BOT_COMMANDS.map((c, i) => (
              <button
                key={i}
                onClick={() => handleCmdSelect(c)}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all cursor-pointer ${
                  activeCmd.cmd === c.cmd
                    ? 'bg-violet-600 text-white font-bold shadow-md shadow-violet-600/30'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-white/5'
                }`}
              >
                {c.cmd}
              </button>
            ))}
          </div>

          {/* Response Box */}
          <div className="p-4 rounded-xl bg-[#060810] border border-slate-800 font-mono text-xs sm:text-sm space-y-2">
            <div className="text-violet-400 font-semibold flex items-center gap-2">
              <span>user@telegram:</span>
              <span className="text-white">{activeCmd.cmd}</span>
            </div>
            <div className="text-cyan-300 pl-4 border-l-2 border-cyan-500/40 leading-relaxed">
              {activeCmd.response}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
