
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { BidOpportunity } from '../types';
import { Calendar, MapPin, Building2, Tag, ArrowUpRight, ShieldCheck, Activity } from 'lucide-react';

interface BidCardProps {
  bid: BidOpportunity;
  isActive: boolean;
  onClick: () => void;
}

const BidCard: React.FC<BidCardProps> = ({ bid, isActive, onClick }) => {
  const formattedABC = new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
  }).format(bid.abc);

  return (
    <div 
        className={`group relative bg-white dark:bg-zinc-900 border transition-all duration-300 flex flex-col h-full cursor-pointer rounded-2xl overflow-hidden ${isActive ? 'border-indigo-500 ring-2 ring-indigo-500/20' : 'border-zinc-200 dark:border-zinc-800 hover:border-indigo-400 dark:hover:border-indigo-700'}`}
        onClick={onClick}
        role="button"
        tabIndex={0}
    >
      {/* Top Banner */}
      <div className="h-2 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500"></div>

      <div className="p-5 flex flex-col h-full">
        {/* Header Tags */}
        <div className="flex items-center justify-between mb-4">
            <div className="flex gap-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-[10px] font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-tighter">
                  {bid.refNumber}
              </span>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-indigo-500/5 border border-indigo-500/10 text-[9px] font-bold text-indigo-500 uppercase">
                <Activity size={10} /> {bid.integrityRating}%
              </div>
            </div>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tighter border ${bid.status === 'Active' ? 'bg-green-50 dark:bg-green-900/20 text-green-600 border-green-200 dark:border-green-800' : 'bg-red-50 dark:bg-red-900/20 text-red-600 border-red-200 dark:border-red-800'}`}>
                {bid.status}
            </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2 leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
            {bid.title}
        </h3>

        {/* Agency */}
        <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-sm mb-4">
            <Building2 size={14} className="shrink-0" />
            <span className="truncate">{bid.agency}</span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800">
            <div className="space-y-1">
                <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase">Budget (ABC)</span>
                <p className="text-sm font-bold text-zinc-900 dark:text-white truncate">{formattedABC}</p>
            </div>
            <div className="space-y-1">
                <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase">Deadline</span>
                <div className="flex items-center gap-1.5 text-zinc-900 dark:text-white">
                    <Calendar size={12} className="text-indigo-500" />
                    <p className="text-sm font-bold">{bid.deadline}</p>
                </div>
            </div>
        </div>

        {/* Footer info */}
        <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-[11px] text-zinc-400">
                    <MapPin size={10} />
                    <span>{bid.location}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-zinc-400">
                    <Tag size={10} />
                    <span>{bid.category}</span>
                </div>
            </div>
            <div className="text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={18} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default BidCard;
