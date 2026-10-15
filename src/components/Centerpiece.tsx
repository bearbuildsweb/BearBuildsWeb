/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Palette } from 'lucide-react';
import { TeaLeaf } from './TeaLeaf.tsx';
import { PavedSteps } from './PavedSteps.tsx';
import logoEmblemUrl from '../assets/images/logo_emblem.svg';

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
          animate={{
            y: [0, -12, 0],
            rotate: [-5, 8, -5],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3.4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          key={`leaf-main-${leafSwirlTrigger}`}
          className="absolute -top-4 sm:-top-6 z-30"
        >
          <TeaLeaf size={44} rotation={8} />
        </motion.div>

        {/* Left Accent Leaf */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            x: [0, -4, 0],
            rotate: [12, -8, 12],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.3,
          }}
          key={`leaf-left-${leafSwirlTrigger}`}
          className="absolute left-[32%] top-2 z-20"
        >
          <TeaLeaf size={30} rotation={-25} flip />
        </motion.div>

        {/* Right Accent Leaf */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            x: [0, 5, 0],
            rotate: [-14, 6, -14],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.6,
          }}
          key={`leaf-right-${leafSwirlTrigger}`}
          className="absolute right-[30%] top-1 z-20"
        >
          <TeaLeaf size={32} rotation={22} />
        </motion.div>
      </div>

      {/* Bear Emblem (Static, Text Omitted, Original Colors, No Tracking Animation) */}
      <div className="relative w-[210px] sm:w-[240px] md:w-[265px] flex items-center justify-center">
        <img
          src={logoEmblemUrl}
          alt="Bear Builds Web Emblem"
          className="w-full h-auto max-h-[240px] md:max-h-[265px] object-contain select-none pointer-events-none"
          style={{
            filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.18))',
          }}
        />
      </div>

      {/* Paved Steps (Replaces the saucer) */}
      <PavedSteps />

      {/* WEB DESIGN | BRAND FOUNDATIONS Badge in #4d5a26 */}
      <div className="mt-3 flex items-center gap-2 px-4 py-1 rounded-full bg-[#4d5a26] border border-[#FDFAF2]/30 shadow-lg text-[#FDFAF2] text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase hover:bg-[#3d471e] transition-all whitespace-nowrap z-20">
        <Palette className="w-3 h-3 text-[#FDFAF2] shrink-0" />
        <span>WEB DESIGN | BRAND FOUNDATIONS</span>
      </div>
    </div>
  );
}
