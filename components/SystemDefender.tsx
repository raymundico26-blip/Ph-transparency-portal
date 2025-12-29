
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { ShieldCheck, Lock, Eye, AlertTriangle, Cpu, Terminal, Zap, ShieldAlert, Activity, Wifi, RefreshCcw, Network, Layers } from 'lucide-react';

const SystemDefender: React.FC = () => {
  const [threatLevel, setThreatLevel] = useState(0);
  const [isThreatDetected, setIsThreatDetected] = useState(false);
  const [activePackets, setActivePackets] = useState<number[]>([]);
  const [renderSpeed, setRenderSpeed] = useState(144);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLevel = isThreatDetected ? Math.floor(Math.random() * 4) + 6 : Math.floor(Math.random() * 2);
      setThreatLevel(newLevel);
      if (!isThreatDetected && Math.random() < 0.05) {
        triggerThreatSequence();
      }
    }, 4000);

    const packetInterval = setInterval(() => {
      setActivePackets(prev => {
        const next = [...prev, Date.now()];
        if (next.length > 8) next.shift();
        return next;
      });
      setRenderSpeed(Math.floor(Math.random() * 20) + 140);
    }, 600);

    return () => {
      clearInterval(interval);
      clearInterval(packetInterval);
    };
  }, [isThreatDetected]);

  const triggerThreatSequence = () => {
    setIsThreatDetected(true);
    setThreatLevel(9);
    setTimeout(() => {
      setIsThreatDetected(false);
      setThreatLevel(1);
    }, 5000);
  };

  const themeColor = isThreatDetected ? 'text-red-500' : 'text-indigo-400';
  const glowColor = isThreatDetected ? 'rgba(239, 68, 68, 0.4)' : 'rgba(99, 102, 241, 0.3)';
  const borderColor = isThreatDetected ? 'border-red-500/50' : 'border-white/10';

  return (
    <div className="relative group">
      <div 
        className="absolute -inset-1 rounded-[2rem] blur-xl opacity-40 group-hover:opacity-80 transition-all duration-1000"
        style={{ background: isThreatDetected ? 'linear-gradient(to right, #ef4444, #f97316)' : 'linear-gradient(to right, #6366f1, #06b6d4)' }}
      />
      
      <div className={`relative bg-zinc-950 border ${borderColor} rounded-[2rem] p-8 overflow-hidden shadow-2xl transition-colors duration-500`}>
        
        {/* Dynamic Multicast Flow */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg width="100%" height="100%" className="absolute inset-0">
            <pattern id="grid-master" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="0.5" className={themeColor} />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-master)" />
            
            {activePackets.map((id) => (
              <circle key={id} r="2.5" fill="currentColor" className={themeColor}>
                <animateMotion
                  dur="2s"
                  repeatCount="indefinite"
                  path="M -10,40 L 400,40 M 150, -10 L 150, 400"
                />
              </circle>
            ))}
          </svg>
        </div>

        {/* BlinkRenderer Scanning */}
        <div 
          className={`absolute top-0 left-0 w-full h-[3px] transition-colors duration-500 ${isThreatDetected ? 'bg-red-500 shadow-[0_0_25px_#ef4444]' : 'bg-indigo-500 shadow-[0_0_20px_#6366f1]'} animate-[scan_3s_linear_infinite] z-10`} 
        />

        <div className="flex items-center justify-between mb-8 relative z-20">
          <div className="flex items-center gap-4">
             <div className={`p-3 rounded-2xl border transition-all duration-500 ${isThreatDetected ? 'bg-red-500/10 border-red-500/20' : 'bg-indigo-500/10 border-indigo-500/20'} shadow-[0_0_20px_${glowColor}]`}>
                {isThreatDetected ? (
                  <ShieldAlert size={28} className="text-red-500 animate-bounce" />
                ) : (
                  <ShieldCheck size={28} className="text-indigo-400 animate-pulse" />
                )}
             </div>
             <div>
                <h4 className={`text-[13px] font-black text-white uppercase tracking-[0.4em] leading-none mb-1 transition-colors duration-500`}>
                  {isThreatDetected ? 'FIREWALL OVERRIDE' : 'IntelCore Defender'}
                </h4>
                <div className="flex items-center gap-2">
                   <div className={`w-1.5 h-1.5 rounded-full animate-ping ${isThreatDetected ? 'bg-red-500' : 'bg-green-500'}`} />
                   <span className={`text-[9px] font-bold uppercase tracking-widest ${themeColor}`}>
                     {isThreatDetected ? 'Direct Injection Purge' : 'Vertex-Firebase Linked'}
                   </span>
                </div>
             </div>
          </div>
        </div>

        {/* Telemetry Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8 relative z-20">
           <div className="bg-white/5 p-4 rounded-2xl border border-white/5 group-hover:border-indigo-500/30 transition-all">
              <div className="flex items-center gap-2 mb-2 text-zinc-500">
                 <RefreshCcw size={12} className="animate-spin-slow" />
                 <span className="text-[8px] font-black uppercase tracking-widest">BlinkRenderer Pro</span>
              </div>
              <div className="text-xl font-black text-white font-mono flex items-end gap-1">
                {renderSpeed} <span className="text-[10px] text-zinc-600 mb-1">FPS</span>
              </div>
           </div>
           <div className="bg-white/5 p-4 rounded-2xl border border-white/5 group-hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-2 mb-2 text-zinc-500">
                 <Network size={12} />
                 <span className="text-[8px] font-black uppercase tracking-widest">Multicast Injection</span>
              </div>
              <div className="text-xl font-black text-cyan-400 font-mono">1.2 Gbps</div>
           </div>
        </div>

        <div className="space-y-4 relative z-20">
           <div className="flex items-center justify-between bg-zinc-900/60 p-3 rounded-xl border border-white/5 group/log hover:bg-zinc-900 transition-all">
              <div className="flex items-center gap-3">
                 <Layers size={12} className={`${isThreatDetected ? 'text-red-500' : 'text-indigo-500'} animate-pulse`} />
                 <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Master Codex Auto-Fix</span>
              </div>
              <span className={`text-[10px] font-black uppercase ${isThreatDetected ? 'text-red-500' : 'text-green-500'}`}>
                {isThreatDetected ? 'ERROR' : 'SYNCED'}
              </span>
           </div>
           <div className="flex items-center justify-between bg-zinc-900/60 p-3 rounded-xl border border-white/5">
              <div className="flex items-center gap-3">
                 <Wifi size={12} className="text-cyan-500" />
                 <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Python-Hub (dagupan-01)</span>
              </div>
              <span className="text-[10px] font-black text-cyan-500 uppercase">ONLINE</span>
           </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 relative z-20">
           <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Supreme System Load</span>
              <span className={`text-[9px] font-black uppercase tracking-widest ${isThreatDetected ? 'text-red-500 animate-pulse' : 'text-indigo-500'}`}>
                Threat Level: {threatLevel}/10
              </span>
           </div>
           <div className="flex gap-1 h-2">
              {[...Array(10)].map((_, i) => (
                <div key={i} className={`flex-1 rounded-full transition-all duration-500 ${i < threatLevel ? (isThreatDetected ? 'bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)]' : 'bg-indigo-500') : 'bg-zinc-800'}`} />
              ))}
           </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { transform: translateY(400px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default SystemDefender;
