
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useMemo, useEffect } from 'react';
import { BID_DATA, DEVELOPER_INFO } from './constants';
import BidCard from './components/BidCard';
import ProcurementAssistant from './components/ProcurementAssistant';
import AiAnalysisCard from './components/AiAnalysisCard';
import AgencyIntegrator from './components/AgencyIntegrator';
import VerifiedBadge from './components/VerifiedBadge';
import SystemDefender from './components/SystemDefender';
import MultilingualDepartmentHub from './components/MultilingualDepartmentHub';
import { FilterState, AiBidAnalysis } from './types';
import { Zap, Globe, Search, Info, Sparkles, Terminal, Cpu, Network, Layers, Database, ShieldCheck, ShieldAlert, Cloud, Server, Code2 } from 'lucide-react';

const App: React.FC = () => {
  const [selectedBidId, setSelectedBidId] = useState<your string | null>(null);
  const [aiAnalysis, setAiAnalysis] = useState<AiBidAnalysis | null>(null);
  const [isAiAnalysisVisible, setIsAiAnalysisVisible] = useState(false);
  const [showAssistant, setShowAssistant] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const [filters, setFilters] = useState<FilterState>({
    category: 'All',
    budgetRange: 'All',
    search: '',
  });

  useEffect(() => {
    if (isDarkMode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const filteredBids = useMemo(() => {
    return BID_DATA.filter(bid => {
      const matchCategory = filters.category === 'All' || bid.category === filters.category;
      
      const searchLower = filters.search.toLowerCase();
      const matchSearch = filters.search === '' || 
        bid.title.toLowerCase().includes(searchLower) || 
        bid.agency.toLowerCase().includes(searchLower) ||
        bid.refNumber.toLowerCase().includes(searchLower) ||
        bid.location.toLowerCase().includes(searchLower);

      return matchCategory && matchSearch;
    });
  }, [filters]);

  const clearAnalysis = () => {
    setAiAnalysis(null);
    setIsAiAnalysisVisible(false);
  };

  return (
    <div className="h-screen w-screen bg-[#010101] text-zinc-100 font-sans overflow-hidden flex flex-col relative transition-all duration-1000">
      
      {/* Supreme Multiverse HUD Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-[-20%] right-[-20%] w-[2000px] h-[2000px] rounded-full bg-indigo-600/[0.05] blur-[400px] animate-pulse" />
          <div className="absolute bottom-[-20%] left-[-20%] w-[1800px] h-[1800px] rounded-full bg-cyan-600/[0.05] blur-[350px] animate-pulse" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#6366f1 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }} />
          <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'linear-gradient(to right, #111 2px, transparent 2px), linear-gradient(to bottom, #111 2px, transparent 2px)', backgroundSize: '250px 250px' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.01] to-transparent opacity-50" />
      </div>

      {/* Final Master Header */}
      <header className="relative z-50 h-36 border-b border-white/10 bg-black/80 backdrop-blur-[60px] shrink-0 px-20 flex items-center justify-between shadow-[0_0_100px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-16">
              <div className="relative group">
                <div className="absolute -inset-12 bg-indigo-500/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative w-24 h-24 bg-zinc-950 dark:bg-indigo-600 rounded-[3rem] flex items-center justify-center text-white shadow-[0_0_120px_rgba(99,102,241,0.5)] border border-white/10 group-hover:rotate-180 transition-all duration-1000 cursor-pointer overflow-hidden">
                    <ShieldCheck size={56} className="group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>
              <div className="flex flex-col">
                  <div className="flex items-center gap-6 mb-3">
                    <h1 className="text-6xl font-black tracking-tighter text-white uppercase leading-none drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">Supreme Transparency Hub</h1>
                    <VerifiedBadge size="lg" />
                  </div>
                  <div className="flex items-center gap-12">
                    <div className="flex items-center gap-4 px-6 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 shadow-inner">
                      <Cloud size={16} className="text-indigo-400" />
                      <span className="text-[15px] font-black text-indigo-400 uppercase tracking-[0.6em]">VERTEX AI // FIREBASE // PYTHON MULTICAST</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_30px_rgba(34,197,94,1)]" />
                      <span className="text-[13px] font-black text-zinc-500 uppercase tracking-[0.5em]">Direct Injection Sync: 100%</span>
                    </div>
                  </div>
              </div>
          </div>

          <div className="flex items-center gap-20">
              <div className="hidden xl:flex flex-col items-end border-r border-white/10 pr-20 mr-2">
                  <span className="text-[14px] font-black text-zinc-400 uppercase tracking-[0.5em] mb-3 italic">BlinkRenderer Engine Pro Activated</span>
                  <div className="flex items-center gap-6">
                    <span className="text-[13px] font-black text-indigo-500 uppercase tracking-widest">{DEVELOPER_INFO.name}</span>
                    <div className="w-2.5 h-2.5 bg-zinc-800 rounded-full" />
                    <span className="text-[13px] font-black text-zinc-500 uppercase tracking-widest">Master Architect</span>
                  </div>
              </div>
              <button 
                  onClick={toggleTheme}
                  className="p-7 rounded-[3rem] border border-white/10 bg-zinc-950 hover:bg-zinc-900 transition-all active:scale-90 shadow-3xl group ring-1 ring-indigo-500/20"
              >
                  {isDarkMode ? <Zap size={44} className="text-indigo-400 group-hover:scale-110 transition-transform" /> : <Globe size={44} className="text-zinc-500 group-hover:scale-110 transition-transform" />}
              </button>
          </div>
      </header>

      {/* Master Content Engine */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Supreme Sidebar */}
        <aside className="hidden xl:flex w-[38rem] border-r border-white/10 bg-black/60 p-16 flex-col gap-20 overflow-y-auto custom-scrollbar backdrop-blur-[80px]">
          <div className="space-y-12">
            <div className="flex items-center justify-between px-6">
              <h3 className="text-[16px] font-black text-zinc-500 uppercase tracking-[0.7em]">Vertex Intelligence</h3>
              <div className="px-6 py-2 rounded-full bg-indigo-500/10 text-[13px] font-black text-indigo-400 uppercase border border-indigo-500/40 shadow-[0_0_30px_rgba(99,102,241,0.3)] font-mono tracking-tighter">CLOUD-RUN LINKED</div>
            </div>
            <AgencyIntegrator />
          </div>

          <SystemDefender />
          <MultilingualDepartmentHub />

          <div className="mt-auto relative group">
            <div className="absolute -inset-10 bg-indigo-500/10 blur-[100px] group-hover:bg-indigo-500/30 transition-all rounded-[4rem]" />
            <div className="relative bg-[#030303] border border-white/10 rounded-[4rem] p-12 shadow-[0_0_200px_rgba(0,0,0,0.9)] ring-1 ring-indigo-500/10">
              <div className="flex items-center gap-8 mb-10">
                <div className="p-5 bg-indigo-500/10 rounded-3xl border border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                  <Code2 size={32} className="text-indigo-400" />
                </div>
                <span className="text-[16px] font-black text-zinc-200 uppercase tracking-[0.6em]">Master Auto-Fix Logs</span>
              </div>
              <div className="space-y-5 font-mono text-[13px] text-zinc-500 uppercase leading-relaxed font-black tracking-wider">
                <p className="text-indigo-400/90">&gt; CODEX: AUTO-CORRECTING YAML...</p>
                <p className="text-cyan-400/90">&gt; ANALYZE: MULTIMODAL-FLASH-SPEED</p>
                <p className="text-yellow-500/90">&gt; SYNC: CROSS-AGENCY-MULTICAST</p>
                <p className="text-green-500/90">&gt; RENDER: BLINKRENDERER-PRO-v2</p>
                <p className="text-zinc-600">&gt; DEPLOY: FIREBASE-CONTAINER-READY</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Global Registry Feed */}
        <main className="flex-1 flex flex-col overflow-hidden relative">
            
            <div className="p-16 lg:p-24 shrink-0">
                <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="relative flex-1 group w-full">
                        <div className="absolute inset-0 bg-indigo-500/5 blur-[200px] group-focus-within:bg-indigo-500/20 transition-all rounded-full" />
                        <div className="relative">
                          <Search className="absolute left-12 top-1/2 -translate-y-1/2 text-zinc-800 group-focus-within:text-indigo-500 transition-all" size={56} />
                          <input 
                            type="text" 
                            placeholder="Universal Master Registry Search: Multi-agency multicast activated..."
                            value={filters.search}
                            onChange={(e) => setFilters({...filters, search: e.target.value})}
                            className="w-full pl-32 pr-20 py-12 bg-white/[0.02] backdrop-blur-[100px] border-4 border-white/5 rounded-[5rem] focus:ring-[40px] focus:ring-indigo-500/5 focus:border-indigo-500/60 outline-none transition-all font-black text-5xl tracking-tighter shadow-3xl placeholder-zinc-900 text-white"
                          />
                        </div>
                    </div>
                    <button 
                      onClick={() => setShowAssistant(true)}
                      className="w-full md:w-auto px-28 py-12 bg-zinc-950 hover:bg-indigo-600 text-white font-black rounded-[5rem] flex items-center justify-center gap-10 transition-all shadow-[0_60px_150px_rgba(99,102,241,0.4)] hover:scale-105 active:scale-95 border-2 border-white/10 group uppercase text-2xl tracking-[0.6em] relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      <Sparkles size={52} className="group-hover:rotate-180 transition-transform duration-1000" />
                      <span>Master AI</span>
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-16 lg:p-24 custom-scrollbar">
                <div className="max-w-8xl mx-auto">
                    {filteredBids.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-20">
                          {filteredBids.map(bid => (
                              <BidCard 
                                  key={bid.id}
                                  bid={bid}
                                  isActive={selectedBidId === bid.id}
                                  onClick={() => setSelectedBidId(bid.id)}
                              />
                          ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-80 text-center relative">
                            <div className="absolute inset-0 bg-indigo-500/[0.04] blur-[400px] animate-pulse rounded-full" />
                            <div className="relative mb-24">
                              <div className="absolute -inset-24 bg-indigo-500/15 blur-[120px] animate-pulse rounded-full" />
                              <div className="relative w-64 h-64 bg-zinc-950 rounded-[5rem] flex items-center justify-center border-4 border-white/5 shadow-3xl ring-[32px] ring-indigo-500/5">
                                <Server size={140} className="text-zinc-900" />
                              </div>
                            </div>
                            <h3 className="text-7xl font-black text-white mb-10 uppercase tracking-tighter drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]">Uplink Desynchronized</h3>
                            <p className="text-zinc-600 mb-28 max-w-4xl font-black text-3xl leading-relaxed tracking-tight">Master Node-01 failed to detect regional multicast sync. Re-deploying Python Hub via Firebase.</p>
                            <button 
                              onClick={() => setFilters({category: 'All', budgetRange: 'All', search: ''})}
                              className="px-28 py-10 bg-white text-black font-black rounded-3xl transition-all hover:scale-110 active:scale-95 shadow-[0_40px_100px_rgba(255,255,255,0.3)] uppercase text-xl tracking-[0.8em]"
                            >
                              Refresh Multicast Hub
                            </button>
                        </div>
                    )}
                </div>
                <div className="h-64" />
            </div>
        </main>
      </div>

      {/* Supreme Global Footer */}
      <footer className="h-32 bg-black border-t border-white/10 px-20 flex items-center justify-between shrink-0 z-50 shadow-[0_-50px_100px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-24">
              <div className="flex items-center gap-6">
                <span className="text-[18px] font-black text-indigo-500 uppercase tracking-[0.7em]">Supreme Master Hub:</span>
                <span className="text-[18px] font-bold text-zinc-400 uppercase tracking-[0.4em]">VERTEX AI // FIREBASE SYNC // PYTHON CLUSTER</span>
              </div>
              <div className="hidden lg:flex items-center gap-8">
                <div className="w-5 h-5 bg-green-500 rounded-full animate-pulse shadow-[0_0_50px_rgba(34,197,94,1)]" />
                <span className="text-[18px] font-bold text-zinc-500 uppercase tracking-[0.5em]">Direct Injection: 100.0% (Zero Syndication Mode)</span>
              </div>
          </div>
          <div className="text-[18px] font-black text-zinc-600 uppercase tracking-[0.8em] hidden md:block italic">
              BlinkRenderer Engine Pro // Dagupan Master Node // Google Play Ready
          </div>
          <div className="text-[18px] font-bold text-zinc-500 uppercase flex items-center gap-8">
              <span className="text-indigo-500 font-black tracking-tighter">ICO-SUPREME-ARCHITECT</span> &copy; 2025 // Ph Transparency Supreme
          </div>
      </footer>

      {/* Modals Node */}
      {showAssistant && (
        <ProcurementAssistant 
            bids={BID_DATA}
            onAnalysis={(analysis) => {
                setAiAnalysis(analysis);
                setIsAiAnalysisVisible(true);
            }}
            onClose={() => setShowAssistant(false)}
        />
      )}

      {aiAnalysis && isAiAnalysisVisible && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-16 bg-black/98 backdrop-blur-[100px] animate-fade-in">
             <div className="absolute inset-0" onClick={clearAnalysis} />
             <AiAnalysisCard analysis={aiAnalysis} onClose={clearAnalysis} />
          </div>
      )}

      <style>{`
        .animate-spin-slow {
          animation: spin 15s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .shadow-3xl {
           box-shadow: 0 40px 100px -20px rgba(0,0,0,0.9);
        }
      `}</style>
    </div>
  );
};

export default App;
