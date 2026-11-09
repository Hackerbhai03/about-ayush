import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { soundManager } from '../utils/audio';
import { 
  Terminal, 
  Send, 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  Sparkles,
  ExternalLink,
  Code2
} from 'lucide-react';

export default function Navbar({ soundEnabled, setSoundEnabled, openTerminal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Dossier', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Bots Hub', href: '#bots' },
    { name: 'Terminal', onClick: openTerminal },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (link) => {
    soundManager.playClick();
    if (link.onClick) {
      link.onClick();
    }
    setMobileMenuOpen(false);
  };

  const handleSoundToggle = () => {
    const newState = soundManager.toggle();
    setSoundEnabled(newState);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#090a0f]/80 backdrop-blur-md border-b border-violet-500/15 py-3 shadow-lg shadow-black/40' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a 
            href="#home" 
            onClick={() => soundManager.playClick()}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="size-10 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
                <div className="size-full bg-[#0d111c] rounded-xl flex items-center justify-center font-mono font-black text-violet-400 text-lg">
                  K
                </div>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 size-3 bg-emerald-500 border-2 border-[#090a0f] rounded-full animate-pulse" />
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-white text-base tracking-tight group-hover:text-violet-300 transition-colors">
                  {portfolioData.profile.name}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-violet-500/10 border border-violet-500/30 text-violet-300 font-semibold uppercase tracking-wider">
                  {portfolioData.profile.alias}
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                @{portfolioData.profile.githubUsername}
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0f172a]/60 backdrop-blur-md border border-white/5 rounded-full px-4 py-1.5 shadow-inner">
            {navLinks.map((link) => (
              link.href ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-violet-600/20 transition-all"
                >
                  {link.name}
                </a>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono text-cyan-300 hover:text-cyan-100 hover:bg-cyan-500/15 border border-cyan-500/20 transition-all cursor-pointer"
                >
                  <Terminal className="size-3.5" />
                  CLI Mode
                </button>
              )
            ))}
          </nav>

          {/* Actions: Sound toggle + Telegram CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Audio Toggle Button */}
            <button
              onClick={handleSoundToggle}
              title={soundEnabled ? "Tactile Audio: Enabled" : "Tactile Audio: Muted"}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                soundEnabled 
                  ? 'bg-violet-500/20 border-violet-500/40 text-violet-300 shadow-sm shadow-violet-500/20' 
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              {soundEnabled ? <Volume2 className="size-4 animate-bounce" /> : <VolumeX className="size-4" />}
            </button>

            {/* Telegram Contact CTA */}
            <a
              href={portfolioData.profile.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playClick()}
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-violet-600/30 hover:shadow-violet-600/50 transition-all group overflow-hidden"
            >
              <Send className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>Let's Talk</span>
              <span className="size-1.5 rounded-full bg-emerald-400 animate-ping absolute top-2 right-2" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={handleSoundToggle}
              className={`p-2 rounded-lg border ${
                soundEnabled ? 'border-violet-500 text-violet-300' : 'border-white/10 text-slate-400'
              }`}
            >
              {soundEnabled ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
            </button>
            <button
              onClick={() => {
                soundManager.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090a0f]/95 border-b border-violet-500/20 px-6 py-6 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              link.href ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-slate-200 hover:bg-violet-600/20 hover:text-white transition-all"
                >
                  {link.name}
                </a>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 text-left"
                >
                  <Terminal className="size-4" />
                  Open Interactive Terminal
                </button>
              )
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={portfolioData.profile.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-violet-600 text-white text-sm font-semibold"
              >
                <Send className="size-4" />
                Message on Telegram
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
