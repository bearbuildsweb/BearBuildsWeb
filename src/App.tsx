/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header.tsx';
import { HeroHeadline } from './components/HeroHeadline.tsx';
import { Centerpiece } from './components/Centerpiece.tsx';
import { Footer } from './components/Footer.tsx';
import { ContactModal } from './components/ContactModal.tsx';
import { GbpDisclosureModal } from './components/GbpDisclosureModal.tsx';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isDisclosureOpen, setIsDisclosureOpen] = useState(false);

  // Sync disclosure modal with hash route: /#GBP-management-disclosure
  useEffect(() => {
    const checkHashRoute = () => {
      if (window.location.hash === '#GBP-management-disclosure') {
        setIsDisclosureOpen(true);
      } else if (window.location.hash.toLowerCase() === '#gbp-management-disclosure') {
        setIsDisclosureOpen(true);
      }
    };

    checkHashRoute();
    window.addEventListener('hashchange', checkHashRoute);
    return () => window.removeEventListener('hashchange', checkHashRoute);
  }, []);

  const handleOpenDisclosure = useCallback(() => {
    setIsDisclosureOpen(true);
    if (window.location.hash !== '#GBP-management-disclosure') {
      window.location.hash = 'GBP-management-disclosure';
    }
  }, []);

  const handleCloseDisclosure = useCallback(() => {
    setIsDisclosureOpen(false);
    if (window.location.hash.toLowerCase() === '#gbp-management-disclosure') {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <div className="relative w-full h-screen min-h-[720px] overflow-x-hidden overflow-y-auto sm:overflow-hidden flex flex-col justify-between select-none font-['Kanit'] bg-[#41474D]">
      {/* ─────────────────────────────────────────────────────────────
          2-TONE BACKGROUND DIVIDER:
          - Top Background: #FDFAF2 (Warm Vintage Ivory, exactly 67%)
          - Bottom Background: #41474D (Deep Slate Gray, exactly 33%)
          Horizon line is locked at top: 67%
          ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top 67% (#FDFAF2) with subtle paper & craft grain texture */}
        <div className="w-full h-[67%] bg-[#FDFAF2] relative overflow-hidden">
          <div className="paper-grain absolute inset-0 pointer-events-none" />
        </div>
        {/* Horizon Divider Line & Bottom 33% (#41474D) */}
        <div className="w-full h-[33%] bg-[#41474D] relative border-t border-[#41474D]/25 shadow-inner" />
      </div>

      {/* Header (Brand mark & CTA) */}
      <Header onOpenContact={() => setIsContactOpen(true)} />

      {/* Upper Hero Headline */}
      <HeroHeadline />

      {/* Centerpiece (Bear Emblem, Floating Leaves, Paved Steps, Badge) */}
      <Centerpiece />

      {/* Footer */}
      <Footer onOpenDisclosure={handleOpenDisclosure} />

      {/* Contact Atelier Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Google Business Profile Disclosure Modal */}
      <GbpDisclosureModal isOpen={isDisclosureOpen} onClose={handleCloseDisclosure} />
    </div>
  );
}
