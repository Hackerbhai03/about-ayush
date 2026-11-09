import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { soundManager } from '../utils/audio';
import { 
  FolderGit2, 
  ExternalLink, 
  Terminal, 
  Send, 
  Sparkles, 
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Telegram Bots', 'Web Platforms', 'APIs & Backend'];

  const filteredProjects = filter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);

  const handleFilterClick = (cat) => {
    soundManager.playClick();
    setFilter(cat);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 font-mono text-xs">
            <FolderGit2 className="size-3.5" />
            <span>DEPLOYED SYSTEMS // 03</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Things I've <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400">Put Online.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real production repositories, automation bots, and web utilities. Each project card opens the real site or repository in a new tab.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterClick(cat)}
              className={`px-4 py-2 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-600/30'
                  : 'bg-[#0e1424] text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#0c101c] border border-violet-500/20 hover:border-violet-500/60 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-violet-600/15 group relative overflow-hidden"
            >
              <div className="space-y-4">
                
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20 font-bold">
                    {project.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors flex items-center gap-1.5">
                  <span>{project.title}</span>
                  <ArrowUpRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.desc}
                </p>

                {/* Performance Metric Pill */}
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 text-[11px] font-mono text-cyan-300 flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-cyan-400 inline-block" />
                  <span>{project.metrics}</span>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>

              {/* Actions: Live Demo + GitHub */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playClick()}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs transition-colors shadow-sm"
                >
                  <span>Launch Link</span>
                  <ExternalLink className="size-3.5" />
                </a>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClick()}
                    className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="View Source on GitHub"
                  >
                    <GithubIcon className="size-4" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* GitHub Repositories Link CTA */}
        <div className="mt-14 text-center">
          <a
            href={portfolioData.profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playClick()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0e1424] hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-xs font-mono transition-all"
          >
            <GithubIcon className="size-4 text-violet-400" />
            <span>View All Public Repositories on GitHub (@{portfolioData.profile.githubUsername})</span>
            <ExternalLink className="size-3.5 text-slate-500" />
          </a>
        </div>

      </div>
    </section>
  );
}
