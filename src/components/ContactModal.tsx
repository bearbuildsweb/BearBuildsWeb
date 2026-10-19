/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Check, X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState<'commission' | 'matcha' | 'visit'>('commission');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Scrim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#25282B]/80 backdrop-blur-xs"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg bg-[#41474D] border border-[#FDFAF2]/20 rounded-2xl p-6 md:p-8 shadow-2xl text-[#FDFAF2] overflow-hidden"
          >
            {/* Grain texture in modal */}
            <div className="workshop-grain absolute inset-0 pointer-events-none opacity-40" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-[#FDFAF2]/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {contactSubmitted ? (
              <div className="py-8 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-[#4d5a26] flex items-center justify-center mb-4 text-[#FDFAF2] shadow-lg">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#FDFAF2] mb-2">Message Dispatched</h3>
                <p className="text-[#FDFAF2]/80 text-sm max-w-xs mb-6 font-normal">
                  Our Cape Town team will review your inquiry within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setContactSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#4d5a26] text-[#FDFAF2] font-extrabold text-sm hover:bg-[#3d471e] transition-all cursor-pointer shadow-md"
                >
                  Return to Atelier
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#FDFAF2] bg-[#4d5a26] px-2 py-0.5 rounded font-bold">
                    Direct Line
                  </span>
                  <span className="text-xs text-[#FDFAF2]/60">· Cape Town, South Africa</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-[#FDFAF2] mb-2 tracking-tight">
                  Connect With The Workshop
                </h3>
                <p className="text-sm text-[#FDFAF2]/75 mb-6">
                  Inquire about web design systems, brand blueprints, or Google profile foundations.
                </p>

                {/* Inquiry Type Tabs */}
                <div className="grid grid-cols-3 gap-2 p-1 bg-[#32373B] rounded-xl mb-5">
                  <button
                    type="button"
                    onClick={() => setInquiryType('commission')}
                    className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      inquiryType === 'commission'
                        ? 'bg-[#4d5a26] text-[#FDFAF2] shadow-sm'
                        : 'text-[#FDFAF2]/70 hover:text-white'
                    }`}
                  >
                    Web Design
                  </button>
                  <button
                    type="button"
                    onClick={() => setInquiryType('matcha')}
                    className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      inquiryType === 'matcha'
                        ? 'bg-[#4d5a26] text-[#FDFAF2] shadow-sm'
                        : 'text-[#FDFAF2]/70 hover:text-white'
                    }`}
                  >
                    Brand Blueprint
                  </button>
                  <button
                    type="button"
                    onClick={() => setInquiryType('visit')}
                    className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      inquiryType === 'visit'
                        ? 'bg-[#4d5a26] text-[#FDFAF2] shadow-sm'
                        : 'text-[#FDFAF2]/70 hover:text-white'
                    }`}
                  >
                    Google Profiles
                  </button>
                </div>

                {/* Form */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setContactSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#FDFAF2]/80 font-semibold mb-1">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Liam Tanaka"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#32373B] border border-[#FDFAF2]/20 text-[#FDFAF2] placeholder-[#FDFAF2]/30 text-sm focus:outline-none focus:border-[#4d5a26] focus:ring-1 focus:ring-[#4d5a26] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#FDFAF2]/80 font-semibold mb-1">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="name@workshop.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#32373B] border border-[#FDFAF2]/20 text-[#FDFAF2] placeholder-[#FDFAF2]/30 text-sm focus:outline-none focus:border-[#4d5a26] focus:ring-1 focus:ring-[#4d5a26] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#FDFAF2]/80 font-semibold mb-1">
                      Note or Request
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us about your brand vision or web project..."
                      className="w-full px-4 py-2.5 rounded-lg bg-[#32373B] border border-[#FDFAF2]/20 text-[#FDFAF2] placeholder-[#FDFAF2]/30 text-sm focus:outline-none focus:border-[#4d5a26] focus:ring-1 focus:ring-[#4d5a26] transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-[#FDFAF2]/50 font-mono">
                      Direct reply within 24h
                    </span>

                    {/* Modal CTA in #4d5a26 */}
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#4d5a26] text-[#FDFAF2] font-extrabold text-sm hover:bg-[#3d471e] active:scale-95 transition-all shadow-lg cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5 text-[#FDFAF2]" />
                      <span>Send Note</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
