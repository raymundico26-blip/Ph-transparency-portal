
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { Languages, MessageSquare, Loader2, X, ChevronRight, Volume2, ShieldCheck, Zap } from 'lucide-react';
import { AGENCIES, LANGUAGES } from '../constants';
import { AgencyConnection, LanguageCode, MultilingualBriefing } from '../types';

const MultilingualDepartmentHub: React.FC = () => {
  const [selectedAgency, setSelectedAgency] = useState<AgencyConnection | null>(null);
  const [selectedLang, setSelectedLang] = useState<LanguageCode>('fil');
  const [briefing, setBriefing] = useState<MultilingualBriefing | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchBriefing = async (agency: AgencyConnection, lang: LanguageCode) => {
    setLoading(true);
    setSelectedAgency(agency);
    setSelectedLang(lang);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `
        You are OPTIMUS AI3 - Multilingual Translation Hub.
        AGENCY: ${agency.name} (${agency.acronym})
        TARGET LANGUAGE: ${LANGUAGES.find(l => l.code === lang)?.name}
        
        Task: 
        Provide a concise briefing about this agency's role in the Ph Transparency Portal.
        Translate into ${lang} with 100% accuracy.
        Include their current integration status and mission for the Filipino people.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              agencyName: { type: Type.STRING },
              brief: { type: Type.STRING },
              mission: { type: Type.STRING },
              status: { type: Type.STRING },
              translationNote: { type: Type.STRING }
            }
          }
        }
      });

      const result = JSON.parse(response.text || '{}');
      setBriefing(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-4">
        <h3 className="text-[14px] font-black text-zinc-500 uppercase tracking-[0.5em] flex items-center gap-2">
          <Languages size={16} className="text-cyan-500" /> Language Hub
        </h3>
        <span className="text-[10px] font-bold text-zinc-600 uppercase">Live Translation</span>
      </div>

      <div className="bg-zinc-900/60 border border-white/5 rounded-[2rem] p-6 backdrop-blur-xl">
        {/* Language Selection Bar */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          {LANGUAGES.map(lang => (
            <button
              key={lang.code}
              onClick={() => setSelectedLang(lang.code)}
              className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                selectedLang === lang.code 
                ? 'bg-cyan-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]' 
                : 'bg-white/5 text-zinc-500 hover:bg-white/10'
              }`}
            >
              {lang.code}
            </button>
          ))}
        </div>

        {/* Agency Multilingual List */}
        <div className="space-y-2 max-h-[400px] overflow-y-auto custom-scrollbar pr-2">
          {AGENCIES.map(agency => (
            <button
              key={agency.id}
              onClick={() => fetchBriefing(agency, selectedLang)}
              className="w-full flex items-center justify-between p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/50 hover:bg-white/[0.04] transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                  <MessageSquare size={14} />
                </div>
                <span className="text-[11px] font-black text-zinc-300 uppercase tracking-widest group-hover:text-white transition-colors">{agency.acronym}</span>
              </div>
              <ChevronRight size={14} className="text-zinc-600 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all" />
            </button>
          ))}
        </div>
      </div>

      {/* Multilingual Command Window (Floating Sidebar Card) */}
      {(loading || briefing) && (
        <div className="fixed bottom-32 left-[31rem] w-96 z-[100] animate-slide-up">
           <div className="bg-black/90 border border-cyan-500/30 rounded-[2.5rem] p-8 backdrop-blur-3xl shadow-[0_0_100px_rgba(6,182,212,0.2)] relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-600 to-cyan-500" />
              
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-cyan-500/10 rounded-xl">
                      <Volume2 size={18} className="text-cyan-400 animate-pulse" />
                   </div>
                   <div>
                      <h4 className="text-[11px] font-black text-white uppercase tracking-[0.2em] leading-none">Multilingual Intel</h4>
                      <span className="text-[8px] font-bold text-cyan-500 uppercase">{selectedLang} v5.2 Active</span>
                   </div>
                </div>
                <button 
                  onClick={() => setBriefing(null)}
                  className="p-2 bg-white/5 hover:bg-white/10 rounded-xl text-zinc-500 hover:text-white transition-all"
                >
                  <X size={16} />
                </button>
              </div>

              {loading ? (
                <div className="py-20 flex flex-col items-center justify-center gap-4">
                   <Loader2 size={32} className="text-cyan-500 animate-spin" />
                   <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em]">Absorbing Language Codex...</p>
                </div>
              ) : briefing && (
                <div className="space-y-6">
                   <div>
                      <h5 className="text-sm font-black text-white uppercase tracking-tight mb-2 flex items-center gap-2">
                        <ShieldCheck size={14} className="text-green-500" />
                        {briefing.agencyName}
                      </h5>
                      <p className="text-xs text-zinc-400 leading-relaxed font-bold italic">
                        {briefing.brief}
                      </p>
                   </div>
                   
                   <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                      <span className="text-[8px] font-black text-cyan-500 uppercase tracking-widest mb-2 block">System Mission</span>
                      <p className="text-[11px] text-zinc-300 font-medium leading-relaxed">
                        {briefing.mission}
                      </p>
                   </div>

                   <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Zap size={10} className="text-yellow-500" />
                        <span className="text-[9px] font-black text-zinc-500 uppercase">{briefing.status}</span>
                      </div>
                      <span className="text-[7px] text-zinc-600 font-mono italic">{briefing.translationNote}</span>
                   </div>
                </div>
              )}
           </div>
        </div>
      )}
    </div>
  );
};

export default MultilingualDepartmentHub;
