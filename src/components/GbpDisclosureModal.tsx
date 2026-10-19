/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Check, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface GbpDisclosureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GbpDisclosureModal({ isOpen, onClose }: GbpDisclosureModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="gbp-disclosure-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Subtle Dim Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#2b2f33]/65 backdrop-blur-[2px]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="relative z-10 w-full max-w-xl max-h-[88vh] flex flex-col bg-[#FDFAF2] text-[#41474D] border border-[#41474D]/20 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-auto select-text font-['Kanit'] paper-grain"
          >
            {/* Top Workshop Measure Line */}
            <div className="h-1.5 w-full bg-[#4d5a26] shrink-0" />

            {/* Modal Header */}
            <div className="relative px-6 sm:px-8 pt-6 pb-5 border-b border-[#41474D]/15 bg-[#FDFAF2] shrink-0">
              {/* Title Lockup */}
              <h2
                id="gbp-disclosure-title"
                className="text-xl sm:text-2xl font-medium text-[#41474D] tracking-tight leading-snug pr-8"
              >
                Google Business Profile Management Disclosure
              </h2>

              {/* Close Button: persistent pill background & on hover slightly rotates -10 degrees */}
              <button
                type="button"
                onClick={onClose}
                className="group absolute top-5 sm:top-6 right-5 sm:right-6 p-2 rounded-full bg-[#41474D]/10 text-[#41474D] hover:bg-[#41474D]/18 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#4d5a26]"
                aria-label="Close disclosure modal"
              >
                <X className="w-5 h-5 transition-transform duration-200 group-hover:-rotate-[10deg]" />
              </button>
            </div>

            {/* Editorial Content Body */}
            <div className="relative px-6 sm:px-8 py-6 overflow-y-auto space-y-5 text-xs sm:text-sm leading-relaxed text-[#41474D]">
              {/* Introductory Statement */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#41474D]/[0.04] border border-[#41474D]/15">
                <p className="font-medium text-[#41474D] text-sm sm:text-base leading-snug">
                  BEAR BUILDS WEB provides independent Google Business Profile audit, optimisation and management services.
                </p>
              </div>

              {/* Pricing & Free Google Service Clause */}
              <div className="space-y-2 pt-1">
                <p className="text-[#41474D]/90">
                  Google Business Profile is provided by Google at no extra cost.
                </p>
                <p className="text-[#41474D]/90">
                  BEAR BUILDS WEB charges separately for the agreed professional services involved in auditing, improving and managing a client&apos;s profile.
                </p>
              </div>

              {/* Affiliation & Optimisation Practices */}
              <div className="pt-4 border-t border-[#41474D]/12 space-y-2.5">
                <p className="font-medium text-[#41474D]">
                  BEAR BUILDS WEB is an independent service provider, not affiliated with Google.
                </p>
                
                <div className="flex items-start gap-2.5 pl-1 text-[#41474D]/90">
                  <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#4d5a26]/15 text-[#4d5a26] shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </span>
                  <span>
                    Applying proven optimisation practices to strengthen your Google Business Profile’s visibility and performance.
                  </span>
                </div>

                <p className="text-[#41474D]/75 text-[11px] sm:text-xs pl-6 sm:pl-6.5 italic">
                  Specific rankings and enquiry volumes cannot be guaranteed.
                </p>
              </div>

              {/* Client Ownership & Sovereignty */}
              <div className="pt-4 border-t border-[#41474D]/12 space-y-2.5">
                <div className="flex items-start gap-2.5 pl-1">
                  <span className="inline-flex items-center justify-center w-4 h-4 rounded bg-[#4d5a26] text-[#FDFAF2] shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span className="font-medium text-[#41474D]">
                    Clients retain ownership of their Google Business Profiles
                  </span>
                </div>

                <div className="flex items-start gap-2.5 pl-1">
                  <span className="inline-flex items-center justify-center w-4 h-4 rounded bg-[#4d5a26] text-[#FDFAF2] shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span className="font-medium text-[#41474D]">
                    Clients have complete control over the level of permission granted to BEAR BUILDS WEB.
                  </span>
                </div>

                <p className="text-[#41474D]/85 pt-1 pl-1">
                  The management work is performed only with the client&apos;s express authorisation.
                </p>
              </div>

              {/* Official Google Guidance Reference Link */}
              <div className="pt-3">
                <a
                  href="https://support.google.com/business/answer/7353941?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 sm:p-4 rounded-xl border border-[#41474D]/20 bg-[#41474D]/[0.03] hover:border-[#4d5a26] hover:bg-[#4d5a26]/[0.06] transition-all text-xs sm:text-sm text-[#41474D]"
                >
                  <span className="flex items-center gap-2.5 pr-2">
                    <ShieldCheck className="w-4 h-4 text-[#4d5a26] shrink-0" />
                    <span className="font-normal">
                      For further information about working with third-party profile managers, please read{' '}
                      <span className="text-[#4d5a26] font-semibold underline decoration-[#4d5a26]/40 underline-offset-2">
                        Google&apos;s guidance on working with third parties
                      </span>
                    </span>
                  </span>
                  <ExternalLink className="w-4 h-4 text-[#41474D]/60 group-hover:text-[#4d5a26] group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>
              </div>
            </div>

            {/* Modal Footer Bar */}
            <div className="px-6 sm:px-8 py-4 bg-[#FDFAF2] border-t border-[#41474D]/15 flex items-center justify-end shrink-0">
              <button
                type="button"
                onClick={onClose}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 rounded-lg sm:rounded-xl bg-[#4d5a26] text-[#FDFAF2] text-sm sm:text-base font-light tracking-wide hover:bg-[#3d471e] active:scale-98 transition-all shadow-sm cursor-pointer text-center"
              >
                <span>UNDERSTOOD</span>
                <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.2] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
