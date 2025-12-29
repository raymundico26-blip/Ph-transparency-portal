
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { AiBidAnalysis } from '../types';
import { ShieldCheck, Calendar, FileText, CheckCircle2, User, Globe, X, ExternalLink, Gavel, Cpu, Network, Zap, Sparkles, Database, Layers, SearchCode, ShieldAlert, Activity, FileCode, Code2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import VerifiedBadge from './VerifiedBadge';

interface AiAnalysisCardProps {
  analysis: AiBidAnalysis;
  onClose: () => void;
}

const AiAnalysisCard: React.FC<AiAnalysisCardProps> = ({ analysis, onClose }) => {
  return (
    <div className="w-full max-w-[95vw] bg-black rounded-[6rem] shadow-[0_0_300px_rgba(0,0,0,1)] overflow-hidden border border-white/10 animate-slide-up flex flex-col max-h-[98vh] relative group/card">
        
        {/* Master HUD Border */}
        <div className="absolute inset-0 border-[4px] border-cyan-500/10 rounded-[6rem] pointer-events-none group-hover/card:border-cyan-500/40 transition-colors duration-1000" />
        <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-red-600 via-cyan-500 via-indigo-600 to-red-600 bg-[length:200%_100%] animate-[gradient_5s_linear_infinite]" />

        {/* Header Section */}
        <div className="p-20 border-b border-white/5 flex items-center justify-between bg-[#050505]/95 backdrop-blur-3xl shrink-0">
            <div className="flex items-center gap-12">
                <div className="relative group">
                    <div className="absolute -inset-10 bg-indigo-500/30 blur-[100px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse" />
                    <div className="relative w-28 h-28 bg-zinc-950 rounded-[3rem] flex items-center justify-center text-indigo-400 shadow-[0_0_80px_rgba(99,102,241,0.4)] border border-white/10 ring-8 ring-indigo-500/5 hover:rotate-90 transition-transform duration-1000">
                        <Cpu size={64} />
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-8 mb-4">
                        <h2 className="text-7xl font-black text-white tracking-tighter uppercase leading-none">Flash Blink IntelCore</h2>
                        <VerifiedBadge size="lg" />
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[14px] font-black text-indigo-400 uppercase tracking-widest">
                        <ShieldAlert size={20} /> VERTEX AI HUB ACTIVE
                      </div>
                      <div className="w-2 h-2 bg-zinc-700 rounded-full" />
                      <div className="flex items-center gap-3">
                         <span className="text-[14px] font-black text-zinc-500 uppercase tracking-[0.5em]">System Integrity:</span>
                         <span className="text-2xl font-black text-green-500 font-mono">{(analysis.analyticsScore || 99.9).toFixed(1)}%</span>
                      </div>
                    </div>
                </div>
            </div>
            <button onClick={onClose} className="p-10 bg-white/5 rounded-[4rem] text-zinc-400 hover:text-red-500 hover:bg-red-500/10 transition-all shadow-3xl active:scale-90 border border-white/10">
                <X size={56} />
            </button>
        </div>

        {/* Content HUD */}
        <div className="p-20 overflow-y-auto custom-scrollbar flex-1 bg-[#020202]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                
                {/* Main Content Column */}
                <div className="lg:col-span-8 space-y-20">
                    
                    {/* Auto-Corrected Codex Section */}
                    <section className="relative p-16 rounded-[5rem] border border-indigo-500/30 bg-gradient-to-br from-indigo-500/[0.1] via-black to-cyan-500/[0.1] overflow-hidden group">
                        <div className="absolute top-0 right-0 p-16 text-indigo-500/5 animate-pulse">
                          <Code2 size={280} />
                        </div>
                        <h3 className="text-3xl font-black text-indigo-400 uppercase tracking-[0.6em] mb-12 flex items-center gap-6">
                            <Zap size={44} className="text-yellow-500 animate-pulse" /> Auto-Fixed Master Codex
                        </h3>
                        <div className="text-2xl text-zinc-200 leading-relaxed font-mono bg-black/80 p-12 rounded-[4rem] border border-white/10 backdrop-blur-3xl shadow-3xl ring-1 ring-indigo-500/20 max-h-[500px] overflow-y-auto custom-scrollbar">
                            <ReactMarkdown>{analysis.universalCodexMerge || "No codex errors detected in signal. System is pure."}</ReactMarkdown>
                        </div>
                    </section>

                    {/* Multimodal Decision Matrix */}
                    <section className="p-16 rounded-[4.5rem] bg-zinc-900/40 border border-white/5 shadow-2xl relative group/intel">
                        <div className="absolute -top-10 -left-10 text-cyan-500/10 blur-xl group-hover:text-cyan-500/20 transition-all">
                            <Sparkles size={200} />
                        </div>
                        <h3 className="text-[16px] font-black text-zinc-500 uppercase tracking-[0.7em] mb-12 flex items-center gap-6">
                            <Database size={32} className="text-cyan-500" /> Multimodal Decision Stream
                        </h3>
                        <div className="prose prose-2xl prose-zinc dark:prose-invert max-w-none text-zinc-300 font-bold leading-relaxed tracking-tight">
                            <ReactMarkdown>{analysis.multidimensionalInsights}</ReactMarkdown>
                        </div>
                    </section>
                </div>

                {/* Sidebar HUD */}
                <div className="lg:col-span-4 space-y-16">
                    {/* Multicast Audit HUD */}
                    <div className="bg-gradient-to-b from-indigo-600 to-black rounded-[5rem] p-16 text-white shadow-[0_50px_150px_rgba(99,102,241,0.5)] relative overflow-hidden group/card-side">
                        <div className="absolute -bottom-20 -right-20 text-white/10 group-hover/card-side:scale-110 transition-transform duration-1000">
                          <ShieldCheck size={400} />
                        </div>
                        <h4 className="text-[18px] font-black uppercase tracking-[0.6em] mb-12 flex items-center gap-6">
                            <Globe size={32} className="animate-spin-slow" /> Multicast Registry
                        </h4>
                        <ul className="space-y-10 relative z-10">
                            {analysis.keyDeadlines.map((date, i) => (
                                <li key={i} className="text-xl font-black flex items-center gap-6 bg-white/10 p-8 rounded-[3rem] border border-white/10 backdrop-blur-2xl hover:bg-white/20 transition-all cursor-pointer">
                                    <div className="w-4 h-4 bg-indigo-300 rounded-full shadow-[0_0_20px_#a5b4fc] animate-pulse" />
                                    {date}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Integrated Footprints */}
                    <div className="bg-zinc-950 rounded-[5rem] p-16 border border-white/10 shadow-3xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
                        <h4 className="text-[14px] font-black text-zinc-500 uppercase tracking-[0.6em] mb-12">Merged PH Agency Footprints</h4>
                        <ul className="space-y-8">
                            {analysis.eligibilityRequirements.map((req, i) => (
                                <li key={i} className="text-[16px] font-black text-zinc-200 flex items-start gap-8 p-7 bg-white/[0.03] rounded-[3rem] border border-white/5 hover:border-indigo-500/60 hover:bg-white/[0.05] transition-all">
                                    <CheckCircle2 size={32} className="text-green-500 shrink-0" />
                                    <span className="leading-tight tracking-tight">{req}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Developer Signature */}
                    <div className="p-16 rounded-[5rem] border-2 border-dashed border-indigo-500/30 bg-indigo-500/[0.02] text-center relative group/sign">
                        <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover/sign:opacity-100 transition-opacity" />
                        <h4 className="text-[14px] font-black text-indigo-400 uppercase tracking-[0.7em] mb-8 flex items-center justify-center gap-6">
                            <User size={24} /> Multimodal Architect
                        </h4>
                        <p className="text-2xl font-black text-white mb-10 leading-none tracking-tighter uppercase">
                            {analysis.developerCredit || "Raymund De Vera Ico"}
                        </p>
                        <a 
                            href="http://jethroaiservices.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-6 p-9 bg-indigo-600 rounded-[3rem] text-white hover:bg-indigo-500 transition-all group shadow-[0_30px_80px_rgba(99,102,241,0.5)] active:scale-95 border border-white/10"
                        >
                            <span className="text-[16px] font-black uppercase tracking-[0.6em]">Jethro AI Multicast</span>
                            <ExternalLink size={32} className="group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform" />
                        </a>
                    </div>
                </div>

            </div>
        </div>

        {/* HUD Footer */}
        <div className="p-16 bg-[#010101] border-t border-white/10 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-20">
                <div className="flex items-center gap-6">
                    <Globe size={32} className="text-indigo-500 animate-spin-slow" />
                    <span className="text-[14px] font-black text-zinc-400 uppercase tracking-[0.6em]">Uplink: GLOBAL-SUPREME-DAGUPAN</span>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <span className="text-[14px] font-black text-indigo-500 uppercase tracking-[0.6em]">Deployed via Vertex AI Python Container</span>
            </div>
            <div className="text-[12px] font-black text-zinc-700 uppercase tracking-[1em]">MANAGED BY MASTER-ICO-MULTICAST</div>
        </div>
    </div>
  );
};

export default AiAnalysisCard;
