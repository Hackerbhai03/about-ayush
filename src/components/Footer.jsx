import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { soundManager } from '../utils/audio';
import { ArrowUp, Heart, Terminal, Send } from 'lucide-react';
import { GithubIcon, InstagramIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    soundManager.playChirp(400, 800, 0.05);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070c] border-t border-slate-900 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Brand info */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="size-10 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-500 p-[1.5px]">
              <div className="size-full bg-[#0a0d16] rounded-xl flex items-center justify-center font-mono font-black text-violet-400">
                K
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-sm">{portfolioData.profile.name}</span>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-500/20 px-1.5 rounded">
                  {portfolioData.profile.alias}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-mono">
                Still Learning. Still Building. Always Curious.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={portfolioData.profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href={portfolioData.profile.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
              title="Telegram"
            >
              <Send className="size-4" />
            </a>
            <a
              href={portfolioData.profile.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-rose-400 transition-colors"
              title="Instagram"
            >
              <InstagramIcon className="size-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0d121f] hover:bg-violet-600/20 border border-white/5 hover:border-violet-500/30 text-xs font-mono text-slate-300 hover:text-white transition-all cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="size-3.5" />
          </button>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Ayush (Kanha). All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built with precision & passion</span>
            <span className="size-1 rounded-full bg-emerald-500 inline-block" />
            <span className="text-emerald-400">All systems operational</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
