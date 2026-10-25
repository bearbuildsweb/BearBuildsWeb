/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface TeaLeafProps {
  size?: number;
  rotation?: number;
  flip?: boolean;
  className?: string;
}

export function TeaLeaf({
  size = 46,
  rotation = 0,
  flip = false,
  className = '',
}: TeaLeafProps) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 60 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-lg overflow-visible select-none pointer-events-none ${className}`}
      style={{
        transform: `rotate(${rotation}deg) ${flip ? 'scaleX(-1)' : ''}`,
      }}
    >
      <defs>
        {/* Botanical tea leaf in #4d5a26 olive workshop gradient */}
        <linearGradient id="teaLeafGradOlive" x1="30" y1="5" x2="30" y2="85" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#677A34" />
          <stop offset="40%" stopColor="#4d5a26" />
          <stop offset="100%" stopColor="#353E1A" />
        </linearGradient>

        <linearGradient id="leafVeinGradCream" x1="30" y1="10" x2="30" y2="85" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FDFAF2" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FDFAF2" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Main Leaf Body in #4d5a26 */}
      <path
        d="M30 4 C44 24, 58 45, 52 68 C47 84, 38 88, 30 88 C22 88, 13 84, 8 68 C2 45, 16 24, 30 4 Z"
        fill="url(#teaLeafGradOlive)"
        stroke="#2E3716"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Primary Stem / Central Vein */}
      <path
        d="M30 8 C30 35, 30 65, 30 92"
        stroke="url(#leafVeinGradCream)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Secondary Leaf Veins */}
      <path d="M30 32 C37 27, 44 26, 48 29" stroke="#FDFAF2" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M30 35 C23 30, 16 29, 12 32" stroke="#FDFAF2" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M30 46 C39 41, 47 42, 50 46" stroke="#FDFAF2" strokeWidth="1" strokeLinecap="round" opacity="0.55" />
      <path d="M30 50 C21 45, 13 46, 10 50" stroke="#FDFAF2" strokeWidth="1" strokeLinecap="round" opacity="0.55" />
      <path d="M30 62 C38 58, 44 60, 47 65" stroke="#FDFAF2" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M30 66 C22 62, 16 64, 13 69" stroke="#FDFAF2" strokeWidth="1" strokeLinecap="round" opacity="0.5" />

      {/* Subtle Leaf Rim Specular */}
      <path
        d="M30 6 C38 22, 48 38, 48 55"
        stroke="#809943"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  );
}
