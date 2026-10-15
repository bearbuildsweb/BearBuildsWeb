/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Radio } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-30 w-full px-6 md:px-12 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#FDFAF2] shrink-0 border-t border-[#FDFAF2]/15 bg-[#41474D]/95 backdrop-blur-xs">
      {/* Left: Clean Location Tag */}
      <div className="flex items-center gap-2 text-xs md:text-sm font-medium">
        <span className="w-2 h-2 rounded-full bg-[#4d5a26] border border-[#FDFAF2]" />
        <span className="font-extrabold text-[#FDFAF2] uppercase tracking-wider">
          CAPE TOWN
        </span>
      </div>

      {/* Right: Region Status (Light / Not Bold) */}
      <div className="flex items-center gap-2 text-xs md:text-sm text-[#FDFAF2]">
        <Radio className="w-3.5 h-3.5 animate-pulse text-[#4d5a26]" />
        <span className="font-light uppercase tracking-wider text-[#FDFAF2]/90">
          SOUTH AFRICA
        </span>
      </div>
    </footer>
  );
}
