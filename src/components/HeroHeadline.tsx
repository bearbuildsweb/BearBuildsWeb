/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export function HeroHeadline() {
  return (
    <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-start px-4 pt-1 sm:pt-3">

      {/* Central Typographic Lockup on #FDFAF2 (Elevated z-30 with backdrop blur & text-shadow) */}
      <div className="relative z-30 flex flex-col items-center text-center select-none backdrop-blur-[2px] bg-[#FDFAF2]/30 px-6 py-3 rounded-2xl">
        {/* Tracked Tagline (Uppercase) */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-1.5"
        >
          <span
            className="text-[12px] sm:text-xs md:text-sm font-semibold tracking-[0.18em] text-[#41474D]/85 uppercase"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
          >
            STAND OUT. BUILD TRUST. 🏗️
          </span>
        </motion.div>

        {/* Master Headline: "consistent presence" */}
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
          <span>consistent presence</span>
        </motion.h1>
      </div>
    </div>
  );
}
