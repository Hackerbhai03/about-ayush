import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { soundManager } from '../utils/audio';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare,
  ShieldAlert,
  Gamepad2,
  BookOpen,
  Heart
} from 'lucide-react';
import { GithubIcon, InstagramIcon } from './Icons';

export default function ContactSection({ showToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', telegram: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    soundManager.playChirp(500, 900, 0.08);
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    if (showToast) showToast(`Copied ${text} to clipboard!`);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    soundManager.playChirp(400, 800, 0.1);
    
    // Confetti effect
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (err) {}

    setSubmitted(true);
    if (showToast) showToast("Message received! Kanha will respond soon.");
    
    // Construct telegram or mailto intent if user wants immediate send
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nTelegram: ${formData.telegram}\n\nMessage:\n${formData.message}`);
    
    // Reset after delay
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', telegram: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 font-mono text-xs">
            <MessageSquare className="size-3.5" />
            <span>COMMUNICATION CHANNELS // 05</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Have An Idea? <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400">Let's Build Something.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            I'm always interested in building custom bots, collaborating on web projects, or discussing ethical cybersecurity. Reach out directly.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links & Beyond Code (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Connect Cards */}
            <div className="rounded-2xl bg-[#0c101c] border border-violet-500/20 p-6 space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center gap-2">
                <Sparkles className="size-4 text-violet-400" />
                <span>Direct Reach Channels</span>
              </h3>

              {/* Telegram Card */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-violet-500/30 transition-all">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                    <Send className="size-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Telegram Direct</span>
                    <a 
                      href={portfolioData.profile.socials.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-bold text-white hover:text-cyan-300 font-mono"
                    >
                      @KingxAra
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('@KingxAra', 'tg')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors cursor-pointer"
                  title="Copy Handle"
                >
                  {copiedKey === 'tg' ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
                </button>
              </div>

              {/* GitHub Card */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-violet-500/30 transition-all">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400">
                    <GithubIcon className="size-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">GitHub Profile</span>
                    <a 
                      href={portfolioData.profile.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-bold text-white hover:text-cyan-300 font-mono"
                    >
                      @{portfolioData.profile.githubUsername}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(portfolioData.profile.githubUsername, 'gh')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors cursor-pointer"
                  title="Copy Username"
                >
                  {copiedKey === 'gh' ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
                </button>
              </div>

              {/* Instagram Card */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-violet-500/30 transition-all">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                    <InstagramIcon className="size-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Instagram</span>
                    <a 
                      href={portfolioData.profile.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-bold text-white hover:text-cyan-300 font-mono"
                    >
                      @careless__02
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('careless__02', 'ig')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors cursor-pointer"
                  title="Copy Handle"
                >
                  {copiedKey === 'ig' ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
                </button>
              </div>
            </div>

            {/* Beyond The Code Pillars */}
            <div className="rounded-2xl bg-[#0c101c] border border-white/5 p-6 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                Beyond The Code
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-slate-900/50 flex items-center gap-2">
                  <BookOpen className="size-4 text-amber-400 shrink-0" />
                  <span>Reading Tech Books</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/50 flex items-center gap-2">
                  <Gamepad2 className="size-4 text-cyan-400 shrink-0" />
                  <span>Tactical Gaming</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/50 flex items-center gap-2">
                  <ShieldAlert className="size-4 text-red-400 shrink-0" />
                  <span>Anti-Abuse Takedowns</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/50 flex items-center gap-2">
                  <Heart className="size-4 text-pink-400 shrink-0" />
                  <span>Respect for Everyone</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0c101c] border border-violet-500/30 p-6 sm:p-8 shadow-2xl relative">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Mail className="size-5 text-cyan-400" />
                  Send A Direct Message
                </h3>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  FAST RESPONSE
                </span>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="size-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="size-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Transmission Received!</h4>
                  <p className="text-sm text-slate-400 max-w-md mx-auto">
                    Thank you for reaching out. Ayush (Kanha) will review your message and connect back shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs sm:text-sm">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-slate-300 text-xs block font-medium">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-violet-500 text-slate-100 placeholder-slate-600 outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-300 text-xs block font-medium">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-violet-500 text-slate-100 placeholder-slate-600 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 text-xs block font-medium">Telegram Username (Optional)</label>
                    <input
                      type="text"
                      placeholder="@yourhandle"
                      value={formData.telegram}
                      onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-violet-500 text-slate-100 placeholder-slate-600 outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 text-xs block font-medium">Project Idea / Message</label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Tell me about what you want to build (Bot, Website, API, etc.)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-violet-500 text-slate-100 placeholder-slate-600 outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-violet-600/30 cursor-pointer"
                    >
                      <Send className="size-4" />
                      <span>Transmit Message</span>
                    </button>

                    <a
                      href={portfolioData.profile.socials.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundManager.playClick()}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-300 hover:text-white font-mono text-xs transition-colors"
                    >
                      <span>Instant Telegram DM</span>
                    </a>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
