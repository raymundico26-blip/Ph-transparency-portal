
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { AGENCIES } from '../constants';
import { Database, Wifi, Cpu, ShieldAlert, Activity, Globe, Download, Zap, Hexagon } from 'lucide-react';

const AgencyIntegrator: React.FC = () => {
  return (
    <div className="relative group">
      {/* Intense Background Glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 via-indigo-600/30 to-blue-500/30 rounded-[2.5rem] blur-3xl opacity-30 group-hover:opacity-70 transition-opacity duration-1000" />
      
      <div className="relative bg-black/80 border border-white/10 rounded-[2.5rem] p-8 w-full backdrop-blur-3xl shadow-2xl overflow-hidden">
        {/* Inner Core Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,240,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.3) 1px, transparent 1px)', backgroundSize: '15px 15px' }} />

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
              <Cpu size={24} className="text-cyan-400 animate-pulse" />
            </div>
            <div>
              <h4 className="text-[12px] font-black text-white uppercase tracking-[0.3em] leading-none mb-1">
                Google Inner Core
              </h4>
              <div className="flex items-center gap-2">
                <span className="text-[8px] font-bold text-cyan-500 uppercase">Transparency Portal v5</span>
                <div className="w-1 h-1 bg-cyan-500 rounded-full animate-ping" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-black text-cyan-400 uppercase tracking-[0.2em]">
            <Zap size={10} className="text-yellow-500" /> Linked HQ
          </div>
        </div>

        {/* Honeycomb Connectivity Visual */}
        <div className="grid grid-cols-3 gap-2 mb-8 p-4 bg-white/[0.02] rounded-3xl border border-white/5">
            {AGENCIES.slice(0, 9).map((agency, i) => (
                <div key={i} className="aspect-square bg-zinc-900 border border-white/10 rounded-xl flex flex-col items-center justify-center gap-1 group/hex hover:border-cyan-500/50 transition-all cursor-pointer relative overflow-hidden">
                    <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover/hex:opacity-100 transition-opacity" />
                    <Hexagon size={16} className={`${agency.status === 'auditing' ? 'text-yellow-500 animate-pulse' : 'text-cyan-500'} group-hover/hex:scale-110 transition-transform`} />
                    <span className="text-[8px] font-black text-zinc-400 group-hover/hex:text-white uppercase">{agency.acronym}</span>
                </div>
            ))}
        </div>

        <div className="space-y-4 max-h-[300px] overflow-y-auto custom-scrollbar pr-4">
          {AGENCIES.map(agency => (
            <div key={agency.id} className="relative group/item flex items-center justify-between p-4 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-cyan-500/50 hover:bg-white/[0.04] transition-all duration-500 cursor-default overflow-hidden">
              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className={`w-3 h-3 rounded-sm rotate-45 ${
                    agency.status === 'online' ? 'bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)]' :
                    agency.status === 'auditing' ? 'bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.8)] animate-pulse' :
                    agency.status === 'absorbing' ? 'bg-indigo-500 shadow-[0_0_15px_rgba(79,70,229,0.8)] animate-spin' :
                    'bg-red-500'
                  }`} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-[11px] font-black text-zinc-100 group-hover/item:text-cyan-400 transition-colors uppercase tracking-[0.2em]">
                      {agency.acronym}
                    </p>
                    {agency.region && (
                       <span className="text-[7px] bg-white/10 text-zinc-400 px-1.5 py-0.5 rounded-sm font-black border border-white/10">REG-{agency.region}</span>
                    )}
                  </div>
                  <p className="text-[9px] text-zinc-500 truncate max-w-[120px] font-bold mt-0.5">
                    {agency.name}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-end gap-1.5">
                <span className="text-[8px] font-black text-zinc-600 uppercase tracking-tighter">
                   {agency.status === 'auditing' ? 'COA Audit Active' : `Sync: ${agency.lastSync}`}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-4">
          <div className="bg-cyan-500/5 p-4 rounded-[1.5rem] border border-cyan-500/20 shadow-inner relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <ShieldAlert size={16} className="text-cyan-500" />
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">Transparency Integrity</span>
              </div>
              <span className="text-xs font-black text-green-500">100% LINKED</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <Activity size={14} className="text-zinc-600" />
              <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-[0.3em]">
                PH-TRANS-PORTAL-01 // HUB: NCR-HQ
              </span>
            </div>
            <Globe size={14} className="text-zinc-700 animate-spin-slow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyIntegrator;
