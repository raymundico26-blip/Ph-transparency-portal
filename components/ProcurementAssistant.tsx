
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { Sparkles, Loader2, X, ArrowRight, ShieldCheck, FileText, Search, Gavel, Cpu, Database, Image as ImageIcon, Trash2, Globe, Zap, Network, Scale, ShieldAlert, Code2, Terminal } from 'lucide-react';
import { BidOpportunity, AiBidAnalysis, Attachment } from '../types';
import VerifiedBadge from './VerifiedBadge';

interface ProcurementAssistantProps {
  bids: BidOpportunity[];
  onAnalysis: (analysis: AiBidAnalysis) => void;
  onClose: () => void;
}

const ProcurementAssistant: React.FC<ProcurementAssistantProps> = ({ bids, onAnalysis, onClose }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    textAreaRef.current?.focus();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (readerEvent) => {
        const base64 = (readerEvent.target?.result as string).split(',')[1];
        setAttachments([{
          mimeType: file.type,
          data: base64,
          url: URL.createObjectURL(file)
        }]);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeAttachment = () => {
    setAttachments([]);
  };

  const handleAnalyze = async () => {
    if (!query.trim() && attachments.length === 0) return;
    setLoading(true);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const contents = {
        parts: [
          { text: `
            ROLE: OPTIMUS AI3 - SUPREME MULTIMODAL ARCHITECT.
            DEVELOPER: Raymund De Vera Ico.
            CORE ENGINE: Gemini-3-Pro-Image-Preview (NANO BANANA PRO).
            INFRASTRUCTURE: Vertex AI / Python Hub / Firebase Container.

            DIRECTIVES:
            1. MULTIMODAL AUDIT: Sanitize and extract deep registry data from images of UACS, PhilGEPS, or COA documents.
            2. AUTO-FIX CODEX: Identify and automatically correct syntax errors in HTML, YAML, JSON, or Markdown structures found in input.
            3. MULTILINGUAL MERGE: Synchronize regional PH data nodes (Tagalog, Bisaya, Ilocano, English) with 100% parity.
            4. SYSTEM INTEGRITY: Verify data against master footprints for SSS, GSIS, BIR, and Bureau of Treasury.

            OUTPUT SCHEMA:
            - Provide structured analysis.
            - "universalCodexMerge" must contain the AUTO-FIXED code snippets (HTML/YAML) if errors were detected.
            - Ensure "auditTrail" reflects the multicast merging process.

            Current Portal Context:
            ${JSON.stringify(bids)}

            Uplink Signal: "${query}"
          ` },
          ...attachments.map(att => ({
            inlineData: { mimeType: att.mimeType, data: att.data }
          }))
        ]
      };

      const response = await ai.models.generateContent({
        model: attachments.length > 0 ? 'gemini-3-pro-image-preview' : 'gemini-3-pro-preview',
        contents: contents,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              summary: { type: Type.STRING },
              eligibilityRequirements: { type: Type.ARRAY, items: { type: Type.STRING } },
              keyDeadlines: { type: Type.ARRAY, items: { type: Type.STRING } },
              swornDeclarationCheck: { type: Type.STRING },
              technicalSpecs: { type: Type.STRING },
              legalBasis: { type: Type.STRING },
              multidimensionalInsights: { type: Type.STRING },
              universalCodexMerge: { type: Type.STRING, description: "AUTO-FIXED HTML/YAML/DOCUMENT CODEX" },
              auditTrail: { type: Type.STRING },
              analyticsScore: { type: Type.NUMBER },
              developerCredit: { type: Type.STRING }
            }
          }
        }
      });

      const result = JSON.parse(response.text || '{}');
      onAnalysis(result);
      onClose();
    } catch (err) {
      console.error("Multiverse Hub Error:", err);
      setError("System Defender: Master Node Sync Failure. Threat detected in data uplink. Deploying backup Vertex container.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/98 backdrop-blur-[60px] animate-fade-in" onClick={onClose}></div>
      <div className="relative w-full max-w-5xl bg-[#030303] rounded-[5rem] border border-cyan-500/30 shadow-[0_0_250px_rgba(6,182,212,0.3)] overflow-hidden animate-slide-up">
        
        <div className="absolute top-0 inset-x-0 h-[4px] bg-gradient-to-r from-transparent via-cyan-500 via-indigo-600 via-cyan-500 to-transparent animate-pulse" />

        <div className="p-16">
          <div className="flex justify-between items-start mb-12">
            <div className="flex items-center gap-10">
              <div className="relative group">
                <div className="absolute -inset-10 bg-cyan-500/20 blur-[80px] rounded-full animate-pulse" />
                <div className="relative w-24 h-24 bg-zinc-900 rounded-[2.5rem] flex items-center justify-center text-cyan-400 border border-white/10 group-hover:rotate-180 transition-all duration-1000 shadow-[0_0_60px_rgba(6,182,212,0.5)]">
                  <Terminal size={52} />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-5 mb-3">
                  <div className="flex items-center gap-2">
                    <Globe size={22} className="text-cyan-500 animate-spin-slow" />
                    <span className="text-[13px] font-black uppercase tracking-[0.6em] text-cyan-500">NANO BANANA PRO // BLINK ENGINE v2.2</span>
                  </div>
                  <VerifiedBadge size="lg" />
                </div>
                <h2 className="text-6xl font-black text-white tracking-tighter uppercase leading-none">Multimodal Audit</h2>
              </div>
            </div>
            <button onClick={onClose} className="p-8 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-[2.5rem] transition-all border border-white/5">
              <X size={44} />
            </button>
          </div>

          <div className="space-y-16">
            <div className="relative group">
              <div className="absolute inset-0 bg-cyan-500/5 blur-[150px] opacity-0 group-focus-within:opacity-100 transition-opacity" />
              <textarea
                ref={textAreaRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="DIRECT INJECTION: Analyze document images. Auto-fix HTML/YAML. Merge regional data nodes..."
                className="relative w-full h-80 bg-white/[0.04] rounded-[4rem] p-16 text-4xl font-black text-white border-2 border-white/5 focus:border-cyan-500/60 outline-none transition-all resize-none shadow-3xl placeholder-zinc-800 leading-tight tracking-tighter"
                disabled={loading}
              />
              
              {attachments.length > 0 && (
                <div className="absolute bottom-12 left-12 right-12 p-10 bg-zinc-900/98 backdrop-blur-3xl border border-cyan-500/50 rounded-[3rem] flex items-center justify-between animate-slide-up shadow-3xl">
                  <div className="flex items-center gap-10">
                    <div className="w-24 h-24 rounded-3xl overflow-hidden border border-white/10 ring-8 ring-cyan-500/10 shadow-2xl">
                      <img src={attachments[0].url} alt="Attached" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[14px] font-black text-cyan-400 uppercase tracking-[0.4em]">Multimodal Matrix Input</span>
                      <span className="text-2xl text-zinc-400 font-black italic tracking-tight">Direct Injection Sync Active</span>
                    </div>
                  </div>
                  <button onClick={removeAttachment} className="p-6 text-red-500 hover:bg-red-500/10 rounded-[2rem] transition-all border border-red-500/20">
                    <Trash2 size={32} />
                  </button>
                </div>
              )}
            </div>

            <div className="flex items-center gap-10">
              <input type="file" ref={fileInputRef} onChange={handleFileUpload} accept="image/*" className="hidden" />
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="flex-1 flex items-center justify-center gap-6 py-9 bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white font-black rounded-[3rem] transition-all uppercase text-lg tracking-[0.4em] border border-white/5 shadow-2xl"
              >
                <ImageIcon size={32} />
                <span>Upload Document Matrix</span>
              </button>
              
              <button
                onClick={handleAnalyze}
                disabled={loading || (!query.trim() && attachments.length === 0)}
                className="flex-[2] flex items-center justify-center gap-8 py-9 bg-cyan-600 hover:bg-cyan-500 text-white font-black rounded-[3rem] transition-all shadow-[0_40px_100px_rgba(6,182,212,0.4)] active:scale-95 disabled:opacity-50 uppercase text-2xl tracking-[0.5em] relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                {loading ? <Loader2 size={44} className="animate-spin" /> : <Zap size={44} className="fill-current" />}
                <span>Master Fix Inject</span>
                <ArrowRight size={44} />
              </button>
            </div>

            <div className="pt-12 border-t border-white/10 flex justify-between items-center text-zinc-600">
              <div className="flex items-center gap-8">
                 <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_30px_rgba(6,182,212,1)] animate-pulse" />
                    <span className="text-[14px] font-black uppercase tracking-[0.4em]">CONTAINER: FIREBASE-VERTEX-PYTHON-HUB</span>
                 </div>
                 <div className="w-px h-8 bg-white/10" />
                 <span className="text-[14px] font-black uppercase tracking-[0.4em] text-zinc-500">Auto-Correct Codex: Active</span>
              </div>
              <p className="text-[12px] font-bold text-cyan-500/40 uppercase tracking-[0.6em]">Renderer: BlinkRenderer Pro v2.2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcurementAssistant;
