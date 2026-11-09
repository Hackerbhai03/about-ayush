import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dossier from './components/Dossier';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import BotsHub from './components/BotsHub';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TerminalSection from './components/TerminalSection';
import MatrixRain from './components/MatrixRain';
import { soundManager } from './utils/audio';
import { Terminal, Send, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [matrixActive, setMatrixActive] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleOpenTerminal = () => {
    soundManager.playChirp(400, 800, 0.05);
    setTerminalOpen(true);
  };

  const triggerMatrix = () => {
    setMatrixActive(true);
  };

  return (
    <div className="relative min-h-screen bg-[#090a0f] text-slate-100 flex flex-col selection:bg-violet-600 selection:text-white">
      {/* Matrix Canvas Modal */}
      <MatrixRain active={matrixActive} onClose={() => setMatrixActive(false)} />

      {/* Main Navbar */}
      <Navbar 
        soundEnabled={soundEnabled} 
        setSoundEnabled={setSoundEnabled}
        openTerminal={handleOpenTerminal}
      />

      {/* Hero Section */}
      <Hero openTerminal={handleOpenTerminal} />

      {/* Classified Dossier / About */}
      <Dossier />

      {/* Technical Arsenal & Skills */}
      <SkillsSection />

      {/* Deployed Projects */}
      <ProjectsSection />

      {/* Bots Hub & Command Tester */}
      <BotsHub />

      {/* Contact Channels */}
      <ContactSection showToast={showToast} />

      {/* Footer */}
      <Footer />

      {/* Interactive Terminal Modal */}
      <TerminalSection 
        isOpen={terminalOpen} 
        onClose={() => setTerminalOpen(false)}
        triggerMatrix={triggerMatrix}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-violet-950/90 border border-violet-500/40 text-slate-100 font-mono text-xs shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom duration-300">
          <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Floating CLI Quick Access Button */}
      <button
        onClick={handleOpenTerminal}
        className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#0d121f]/90 hover:bg-violet-900/60 border border-violet-500/30 text-violet-300 hover:text-white font-mono text-xs shadow-xl backdrop-blur-md transition-all cursor-pointer group hover:scale-105"
        title="Open Kanha Interactive CLI"
      >
        <Terminal className="size-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
        <span className="hidden md:inline">CLI Shell</span>
      </button>
    </div>
  );
}
