/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';

export function HeroHeadline() {
  return (
    <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-start px-4 pt-0 sm:pt-1 pb-4 sm:pb-0">

      {/* Central Typographic Lockup on #FDFAF2 (Elevated z-30 with backdrop blur & text-shadow) */}
      <div className="relative z-30 flex flex-col items-center text-center select-none backdrop-blur-[2px] bg-[#FDFAF2]/30 px-6 py-2 sm:py-2.5 rounded-2xl -translate-y-2.5 sm:-translate-y-4 md:-translate-y-6">
        {/* Tracked Tagline: "GET FOUND LOCALLY" with search icon (repositioned down closer to headline) */}
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1 translate-y-1 sm:translate-y-1.5"
        >
          <span
            className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider text-[#41474D] uppercase"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
          >
            get found locally
          </span>
          <Search
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#41474D]/85 stroke-[2.25] shrink-0"
            aria-hidden="true"
          />
        </motion.div>

        {/* Master Headline: "build recognition" */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#41474D] leading-[0.98] drop-shadow-xs max-w-4xl text-center"
          style={{
            textWrap: 'balance',
            textShadow: '0 4px 12px rgba(0,0,0,0.15)',
          }}
        >
          <span>build recognition</span>
        </motion.h1>
      </div>
    </div>
  );
}
