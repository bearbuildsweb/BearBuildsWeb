/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface HeaderProps {
  onOpenContact?: () => void;
}

export function Header({ onOpenContact }: HeaderProps) {
  const whatsappUrl = `https://wa.me/27680246914?text=${encodeURIComponent("Hi Bear, I'm interested in your services")}`;

  return (
    <header className="relative z-30 w-full px-6 md:px-12 pt-6 pb-2 flex items-center justify-between gap-8 shrink-0">
      {/* Zone 1: Brand Mark Lockup in #41474D with #4d5a26 "web" badge */}
      <div className="flex items-center gap-2.5 shrink-0">
        <div className="flex flex-col leading-none">
          <span className="text-xl md:text-2xl font-extrabold tracking-tight text-[#41474D] uppercase">
            BEAR
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-sm md:text-base font-bold tracking-wider text-[#41474D] uppercase">
              BUILDS
            </span>
            <span className="w-4 h-[2px] bg-[#4d5a26] inline-block" />
          </div>
        </div>

        {/* Green Badge with lowercase "web" */}
        <div className="border border-[#4d5a26] bg-[#4d5a26] px-1.5 py-0.5 rounded shadow-xs flex items-center justify-center self-center">
          <span className="text-[10px] md:text-xs font-bold text-[#FDFAF2] tracking-wide leading-none lowercase">
            web
          </span>
        </div>
      </div>

      {/* Zone 2: Primary Action - WhatsApp Icon with 3D Depth Shadow */}
      <div className="flex items-center shrink-0">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Chat with Bear on WhatsApp"
          aria-label="Chat with Bear on WhatsApp (+27 68 024 6914)"
          className="group relative inline-flex items-center justify-center transition-all duration-200 hover:scale-108 hover:-translate-y-0.5 active:scale-95 active:translate-y-0.5 cursor-pointer shrink-0"
          style={{
            /* 3D depth shadow oriented along same downward direction (0 4px 12px) as hero headline */
            filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.22)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.12))',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-10 h-10 md:w-11 md:h-11 transition-transform duration-200 group-hover:rotate-3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="headerWhatsappGrad" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#55642a" />
                <stop offset="45%" stopColor="#4d5a26" />
                <stop offset="100%" stopColor="#404b20" />
              </linearGradient>
            </defs>
            {/* WhatsApp Speech Bubble */}
            <path
              d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.9C17.18 3.03 14.69 2 12.04 2Z"
              fill="url(#headerWhatsappGrad)"
            />
            {/* Handset Icon in matching vintage ivory #FDFAF2 */}
            <path
              d="M17.52 14.36C17.22 14.21 15.75 13.48 15.48 13.38C15.21 13.28 15.01 13.23 14.81 13.53C14.61 13.83 14.04 14.5 13.86 14.7C13.69 14.9 13.51 14.93 13.21 14.78C12.91 14.63 11.95 14.32 10.81 13.3C9.92 12.51 9.32 11.53 9.15 11.23C8.98 10.93 9.13 10.77 9.28 10.62C9.41 10.49 9.57 10.27 9.72 10.1C9.87 9.92 9.92 9.79 10.02 9.59C10.12 9.39 10.07 9.22 9.99 9.07C9.92 8.92 9.32 7.45 9.07 6.85C8.83 6.27 8.58 6.35 8.4 6.34C8.23 6.33 8.03 6.33 7.83 6.33C7.63 6.33 7.31 6.41 7.04 6.7C6.77 7 6 7.72 6 9.19C6 10.66 7.07 12.08 7.22 12.28C7.37 12.48 9.33 15.5 12.33 16.8C13.05 17.11 13.61 17.3 14.05 17.44C14.77 17.67 15.43 17.64 15.95 17.56C16.53 17.47 17.74 16.82 17.99 16.12C18.24 15.42 18.24 14.82 18.17 14.7C18.1 14.58 17.92 14.51 17.62 14.36Z"
              fill="#FDFAF2"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}
