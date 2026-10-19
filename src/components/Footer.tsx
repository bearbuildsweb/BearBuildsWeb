/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { FolderOpen } from 'lucide-react';

interface FooterProps {
  onOpenDisclosure?: () => void;
}

export function Footer({ onOpenDisclosure }: FooterProps) {
  return (
    <footer className="relative z-30 w-full mt-4 sm:mt-0 top-4 sm:top-0 mb-4 sm:mb-0 px-6 md:px-12 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#FDFAF2] shrink-0 border-t border-[#FDFAF2]/15 bg-[#41474D]/95 backdrop-blur-xs">
      {/* Left: Copyright & Brand Tag */}
      <div className="flex items-center gap-2 text-xs md:text-sm font-light">
        <span className="font-light tracking-wide text-[#c6cbba]">
          ©2026 | BEAR BUILDS WEB
        </span>
      </div>

      {/* Right: Indented Pill CTA for Google Business Profile Disclosure */}
      <a
        href="/#GBP-management-disclosure"
        onClick={(e) => {
          e.preventDefault();
          onOpenDisclosure?.();
        }}
        className="group inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#34393e] border border-[#FDFAF2]/20 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.45)] hover:bg-[#2c3035] hover:border-[#FDFAF2]/30 active:translate-y-px transition-all cursor-pointer text-xs md:text-sm text-[#FDFAF2]/90 hover:text-[#FDFAF2] focus:outline-none focus:ring-1 focus:ring-[#4d5a26] no-underline"
        title="Google Business Profile Disclosure"
      >
        <FolderOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FDFAF2]/80 group-hover:text-[#FDFAF2] transition-colors shrink-0" strokeWidth={2} />
        <span className="font-light tracking-wide text-[#FDFAF2]/90">
          Google Business Profile Disclosure
        </span>
      </a>
    </footer>
  );
}
