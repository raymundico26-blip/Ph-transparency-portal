
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';

const VerifiedBadge: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-[8px] gap-1',
    md: 'px-3 py-1 text-[10px] gap-1.5',
    lg: 'px-6 py-2 text-xs gap-2'
  };

  return (
    <div className={`inline-flex items-center font-black uppercase tracking-[0.1em] rounded-full bg-[#34A853]/10 border border-[#34A853]/40 text-[#34A853] shadow-[0_0_15px_rgba(52,168,83,0.2)] ${sizeClasses[size]}`}>
      <div className="bg-[#34A853] text-white rounded-full p-0.5">
        <Check size={size === 'lg' ? 14 : 10} strokeWidth={4} />
      </div>
      <span>Verified</span>
    </div>
  );
};

export default VerifiedBadge;
