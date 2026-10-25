/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export function PavedSteps() {
  return (
    <div className="relative w-[210px] sm:w-[240px] md:w-[260px] flex flex-col items-center mt-3 z-10">
      <svg
        width="240"
        height="34"
        viewBox="0 0 240 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[190px] sm:w-[215px] md:w-[240px] select-none drop-shadow-md"
      >
        <defs>
          <linearGradient id="pavedTopGrad" x1="120" y1="2" x2="120" y2="13" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#FDFAF2" />
            <stop offset="100%" stopColor="#ECE6D8" />
          </linearGradient>
          <linearGradient id="pavedMidGrad" x1="120" y1="12" x2="120" y2="23" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FAF6ED" />
            <stop offset="60%" stopColor="#EFE9DC" />
            <stop offset="100%" stopColor="#DDD6C5" />
          </linearGradient>
          <linearGradient id="pavedBaseGrad" x1="120" y1="22" x2="120" y2="33" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F2EDE2" />
            <stop offset="60%" stopColor="#E5DFD1" />
            <stop offset="100%" stopColor="#CFC8B7" />
          </linearGradient>
        </defs>

        {/* Ambient Shadow on bottom #41474D ground */}
        <ellipse cx="120" cy="33" rx="108" ry="3.5" fill="#14171A" opacity="0.55" />

        {/* Step 3: Base Paved Step (widest foundation) */}
        <g id="base-step">
          <rect x="18" y="22" width="204" height="10" rx="3.5" fill="url(#pavedBaseGrad)" stroke="#2B3035" strokeWidth="1" />
          {/* Masonry joint lines */}
          <line x1="84" y1="22" x2="84" y2="32" stroke="#2B3035" strokeWidth="0.8" opacity="0.35" />
          <line x1="156" y1="22" x2="156" y2="32" stroke="#2B3035" strokeWidth="0.8" opacity="0.35" />
          {/* Step riser shadow */}
          <rect x="18" y="29.5" width="204" height="2.5" rx="1.2" fill="#202428" opacity="0.25" />
        </g>

        {/* Step 2: Middle Paved Step */}
        <g id="middle-step">
          <rect x="38" y="12" width="164" height="10" rx="3" fill="url(#pavedMidGrad)" stroke="#2B3035" strokeWidth="1" />
          {/* Masonry joint lines */}
          <line x1="102" y1="12" x2="102" y2="22" stroke="#2B3035" strokeWidth="0.8" opacity="0.35" />
          <line x1="138" y1="12" x2="138" y2="22" stroke="#2B3035" strokeWidth="0.8" opacity="0.35" />
          {/* Step riser shadow */}
          <rect x="38" y="19.5" width="164" height="2.5" rx="1.2" fill="#202428" opacity="0.2" />
        </g>

        {/* Step 1: Top Paved Step (closest to bear) */}
        <g id="top-step">
          <rect x="58" y="2" width="124" height="10" rx="3" fill="url(#pavedTopGrad)" stroke="#2B3035" strokeWidth="1" />
          {/* Top stone highlight chamfer */}
          <line x1="60" y1="3.5" x2="180" y2="3.5" stroke="#FFFFFF" strokeWidth="1" opacity="0.75" />
          {/* Masonry joint line */}
          <line x1="118" y1="2" x2="118" y2="12" stroke="#2B3035" strokeWidth="0.8" opacity="0.35" />
          {/* Step riser shadow */}
          <rect x="58" y="9.5" width="124" height="2.5" rx="1.2" fill="#202428" opacity="0.18" />
        </g>
      </svg>
    </div>
  );
}
