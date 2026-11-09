import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { soundManager } from '../utils/audio';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Trash2 } from 'lucide-react';

export default function TerminalSection({ isOpen, onClose, triggerMatrix }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: '⚡ Kanha OS v2.6.0 (x86_64-ayush-linux)' },
    { type: 'output', text: 'Type "help" to display available commands. Try "matrix", "skills", or "projects".' }
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMaximized, setIsMaximized] = useState(false);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const trimmed = input.trim().toLowerCase();
      soundManager.playChirp(350, 700, 0.05);

      const newHistory = [...history, { type: 'input', text: `kanha@system:~$ ${input}` }];
      if (trimmed) {
        setCommandHistory((prev) => [...prev, input]);
        setHistoryIndex(-1);
      }

      switch (trimmed) {
        case 'help':
          newHistory.push({
            type: 'output',
            text: `Available Commands:
  • about / whoami  - Learn about Ayush (Kanha)
  • skills          - Inspect tech stack & capabilities
  • projects        - View flagship live projects
  • bots            - Telegram automation bots & channels
  • matrix          - Toggle digital Matrix rain effect
  • contact         - Show direct contact channels
  • kanha           - The story behind the alias
  • clear           - Clear terminal screen
  • date            - Display current system time
  • sudo            - Request administrator rights
  • exit            - Close this terminal modal`
          });
          break;

        case 'about':
        case 'whoami':
          newHistory.push({
            type: 'output',
            text: `[DOSSIER ENTRY]
Name: ${portfolioData.profile.name}
Alias: ${portfolioData.profile.alias}
Role: ${portfolioData.profile.tagline}
GitHub: @${portfolioData.profile.githubUsername}
Philosophy: ${portfolioData.profile.principle}
Stand: Respect for women & proactive takedown of abusive channels.`
          });
          break;

        case 'skills':
          newHistory.push({
            type: 'output',
            text: `TECH ARSENAL:
[Telegram & Bots]  Pyrogram, Telethon, BotFather, MTProto, AsyncIO
[Web & UI]         React, Next.js, Tailwind CSS, TypeScript, Modern HTML/CSS
[Backend & APIs]   Python, Node.js, Express, FastAPI, REST, Docker
[Cyber & Defense]  Anti-Abuse Reporting, API Security, Linux/Bash, Auditing`
          });
          break;

        case 'projects':
          newHistory.push({
            type: 'output',
            text: `FLAGSHIP PROJECTS:
1. Anony Bot Engine        - High performance Telegram media & group bot
2. Chatbot-API Microservice - Intelligent REST AI conversational gateway
3. Purvi Box Cloud Vault   - Encrypted fast file hosting web portal
4. Sonic Stream Music      - Web-based modern music streamer
5. Vehicle & RTO Intel     - Instant registration verification tool`
          });
          break;

        case 'bots':
          newHistory.push({
            type: 'output',
            text: `TELEGRAM BOTS ECOSYSTEM:
• @PurviBots       - Primary bot network for streaming & group tools
• @Purvi_Bots      - Official updates, bot status & release notes
• @KingxAra        - Direct contact & anti-abuse channel reporting`
          });
          break;

        case 'matrix':
          newHistory.push({ type: 'output', text: 'Initializing Matrix Rain protocol...' });
          if (triggerMatrix) triggerMatrix();
          break;

        case 'kanha':
          newHistory.push({
            type: 'output',
            text: `Behind the name "Kanha":
Kanha represents dedication, standing up for what is right, protecting the vulnerable, and building tools with relentless focus. Curiosity first, expert later.`
          });
          break;

        case 'contact':
          newHistory.push({
            type: 'output',
            text: `DIRECT CONTACT:
• Telegram:  ${portfolioData.profile.socials.telegram}
• GitHub:    ${portfolioData.profile.socials.github}
• Instagram: ${portfolioData.profile.socials.instagram}
• Email:     ${portfolioData.profile.socials.email}`
          });
          break;

        case 'sudo':
          newHistory.push({
            type: 'output',
            text: 'Permission denied: Even sudo cannot bypass Kanha\'s dedication.'
          });
          break;

        case 'date':
          newHistory.push({
            type: 'output',
            text: new Date().toString()
          });
          break;

        case 'clear':
          setHistory([]);
          setInput('');
          return;

        case 'exit':
        case 'quit':
          onClose();
          setInput('');
          return;

        case '':
          break;

        default:
          newHistory.push({
            type: 'output',
            text: `Command not recognized: "${trimmed}". Type "help" for a list of valid commands.`
          });
          break;
      }

      setHistory(newHistory);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInput(commandHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < commandHistory.length) {
          setHistoryIndex(nextIdx);
          setInput(commandHistory[nextIdx]);
        } else {
          setHistoryIndex(-1);
          setInput('');
        }
      }
    } else {
      soundManager.playKey();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className={`w-full bg-[#0a0d16] border border-violet-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          isMaximized ? 'h-[94vh] max-w-[96vw]' : 'h-[620px] max-w-3xl'
        }`}
      >
        {/* Terminal Header */}
        <div className="bg-[#111726] border-b border-white/5 px-4 py-3 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span 
              onClick={onClose} 
              className="size-3 rounded-full bg-rose-500 hover:opacity-80 cursor-pointer inline-block" 
              title="Close"
            />
            <span 
              onClick={() => setIsMaximized(!isMaximized)} 
              className="size-3 rounded-full bg-amber-500 hover:opacity-80 cursor-pointer inline-block" 
              title="Toggle Size"
            />
            <span 
              onClick={() => setHistory([])} 
              className="size-3 rounded-full bg-emerald-500 hover:opacity-80 cursor-pointer inline-block" 
              title="Clear"
            />
            <span className="text-xs font-mono text-slate-300 ml-2 flex items-center gap-1.5 font-medium">
              <TerminalIcon className="size-3.5 text-cyan-400" />
              kanha@interactive-shell:~
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setHistory([])}
              className="text-slate-400 hover:text-white p-1 rounded hover:bg-white/5"
              title="Clear Output"
            >
              <Trash2 className="size-3.5" />
            </button>
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="text-slate-400 hover:text-white p-1 rounded hover:bg-white/5"
            >
              {isMaximized ? <Minimize2 className="size-3.5" /> : <Maximize2 className="size-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-rose-400 p-1 rounded hover:bg-white/5"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        {/* Terminal Content Body */}
        <div 
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-5 overflow-y-auto font-mono text-xs sm:text-sm text-slate-200 space-y-2.5 bg-[#090c14]/90 scanlines"
        >
          {history.map((item, idx) => (
            <div key={idx} className="leading-relaxed">
              {item.type === 'input' ? (
                <div className="text-cyan-300 font-semibold">{item.text}</div>
              ) : (
                <pre className="text-slate-300 whitespace-pre-wrap font-mono text-xs sm:text-sm">
                  {item.text}
                </pre>
              )}
            </div>
          ))}

          {/* Interactive input row */}
          <div className="flex items-center gap-2 pt-1 text-slate-100">
            <span className="text-violet-400 font-bold shrink-0">kanha@system:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="flex-1 bg-transparent border-none outline-none font-mono text-slate-100 text-xs sm:text-sm focus:ring-0 p-0"
              autoFocus
              spellCheck={false}
            />
          </div>
          <div ref={bottomRef} />
        </div>

        {/* Terminal footer status bar */}
        <div className="bg-[#0e1424] border-t border-white/5 px-4 py-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="text-emerald-400 font-semibold">● ACTIVE</span>
            <span>UTF-8</span>
            <span>BASH</span>
          </div>
          <div>
            Press <kbd className="px-1 py-0.5 rounded bg-white/10 text-slate-200">Enter</kbd> to execute, type <span className="text-cyan-400 font-semibold">'help'</span>
          </div>
        </div>

      </div>
    </div>
  );
}
