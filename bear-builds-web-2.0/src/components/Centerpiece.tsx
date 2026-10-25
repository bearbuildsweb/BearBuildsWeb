/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Palette } from 'lucide-react';
import { TeaLeaf } from './TeaLeaf.tsx';
import { PavedSteps } from './PavedSteps.tsx';
import { BearHeroIllustration } from './BearHeroIllustration.tsx';

export function Centerpiece() {
  const [leafSwirlTrigger, setLeafSwirlTrigger] = useState(0);

  const handleSwirl = () => {
    setLeafSwirlTrigger((prev) => prev + 1);
  };

  return (
    <div
      className="absolute left-1/2 z-10 pointer-events-auto cursor-pointer flex flex-col items-center"
      onClick={handleSwirl}
      style={{
        top: '67%',
        transform: 'translate(-50%, -64%)',
      }}
    >
      {/* Floating Botanical Tea Leaves (#4d5a26) - z-index: -1 behind the text */}
      <div
        className="relative w-full h-14 sm:h-16 flex justify-center pointer-events-none"
        style={{ zIndex: -1 }}
      >
        {/* Main Floating Leaf right above bear's sprout/ear */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            y: [0, -12, 0],
            rotate: [-5, 8, -5],
            scale: [1, 1.05, 1],
          }}
          transition={{
            opacity: { delay: 0.9, duration: 0.5 },
            y: { duration: 3.4, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 3.4, repeat: Infinity, ease: 'easeInOut' },
            scale: { duration: 3.4, repeat: Infinity, ease: 'easeInOut' },
          }}
          key={`leaf-main-${leafSwirlTrigger}`}
          className="absolute -top-4 sm:-top-6 z-30"
        >
          <TeaLeaf size={44} rotation={8} />
        </motion.div>

        {/* Left Accent Leaf */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            y: [0, -8, 0],
            x: [0, -4, 0],
            rotate: [12, -8, 12],
          }}
          transition={{
            opacity: { delay: 1.0, duration: 0.5 },
            y: { duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 },
            x: { duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 },
            rotate: { duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 },
          }}
          key={`leaf-left-${leafSwirlTrigger}`}
          className="absolute left-[32%] top-2 z-20"
        >
          <TeaLeaf size={30} rotation={-25} flip />
        </motion.div>

        {/* Right Accent Leaf */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            y: [0, -10, 0],
            x: [0, 5, 0],
            rotate: [-14, 6, -14],
          }}
          transition={{
            opacity: { delay: 1.1, duration: 0.5 },
            y: { duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 },
            x: { duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 },
            rotate: { duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 },
          }}
          key={`leaf-right-${leafSwirlTrigger}`}
          className="absolute right-[30%] top-1 z-20"
        >
          <TeaLeaf size={32} rotation={22} />
        </motion.div>
      </div>

      {/* Bear Emblem with lightweight construction-inspired preloader / entrance animation */}
      <BearHeroIllustration swirlTrigger={leafSwirlTrigger} />

      {/* Paved Steps (Replaces the saucer) */}
      <PavedSteps />

      {/* Hero Service Badges */}
      <div className="mt-3 mb-4 sm:mb-0 pb-2 sm:pb-0 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 z-20 max-w-[95vw] px-2">
        {/* Primary Badge: 🎨 WEB DESIGN | BRAND BASICS in #4d5a26 */}
        <div className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#4d5a26] border border-[#FDFAF2]/30 shadow-lg text-[#FDFAF2] text-[9.5px] min-[390px]:text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase select-none cursor-default whitespace-nowrap">
          <Palette
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FDFAF2] shrink-0"
            strokeWidth={2.4}
            fill="#4d5a26"
            stroke="#FDFAF2"
          />
          <span>WEB DESIGN</span>
          <span className="text-[#FDFAF2]/40 select-none">|</span>
          <span>BRAND BASICS</span>
        </div>

        {/* Standalone Badge: 🔍 GOOGLE PROFILE REFRESH in #f0ede6 */}
        <div className="flex items-center gap-1.5 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#f0ede6] border border-[#242c13]/20 shadow-lg text-[#242c13] text-[9.5px] min-[390px]:text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase select-none cursor-default whitespace-nowrap">
          <Search className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#242c13] shrink-0" strokeWidth={2.5} />
          <span>GOOGLE PROFILE OPTIMISATION</span>
        </div>
      </div>
    </div>
  );
}
