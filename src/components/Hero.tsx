import React from "react";
import { motion } from "motion/react";
import { ArrowDown, MessageCircle, Menu } from "lucide-react";
// @ts-ignore
import bearPortrait from "../assets/images/hero-UPDATE.png";

interface HeroProps {
  onContactClick: () => void;
  onWhoIHelpClick: () => void;
  onToggleMenu: () => void;
}

export default function Hero({ onContactClick, onWhoIHelpClick, onToggleMenu }: HeroProps) {
  return (
    <section className="relative w-full px-2 sm:px-4 lg:px-8 pt-2 pb-16 lg:pb-24 overflow-hidden bg-[#F4F1EA]">
      
      {/* Outer Framed Editorial Poster Canvas */}
      <div className="relative max-w-[1440px] mx-auto rounded-[28px] sm:rounded-[38px] lg:rounded-[48px] overflow-hidden border border-[#1A1A1A]/15 shadow-[0_35px_90px_rgba(26,26,26,0.08)] bg-gradient-to-b from-[#5E6D5D] via-[#7D8C7C] via-40% to-[#FDFCF9] to-75%">
        
        {/* Subtle Fine Geometric Grid & Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#FFFFFF_1.2px,transparent_1.2px)] [background-size:32px_32px] opacity-15 pointer-events-none" />
        
        {/* Radial Architectural Glow behind Center */}
        <div className="absolute top-[26%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[600px] lg:w-[780px] aspect-square rounded-full bg-[#414F40]/45 blur-[90px] pointer-events-none" />

        {/* Poster Registration Marks (Brutalist Top Corners) */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 font-mono text-[9px] text-white/30 select-none pointer-events-none hidden sm:block">
          + 33.9249° S / 18.4241° E
        </div>
        <div className="absolute top-4 right-4 sm:top-6 right-6 font-mono text-[9px] text-white/30 select-none pointer-events-none hidden sm:block">
          SYS.V26 // CAPE TOWN
        </div>

        {/* Top Header / Brand Bar inside the Editorial Card */}
        <div className="relative z-30 px-5 sm:px-10 lg:px-14 pt-5 sm:pt-7 pb-4 flex items-center justify-between border-b border-white/10 backdrop-blur-[2px]">
          
          {/* Brand Emblem & Tagline */}
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 group cursor-pointer"
            onClick={onContactClick}
          >
            {/* Bear Emblem Circle */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/15 border border-white/30 backdrop-blur-md flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:bg-white/25">
              <span className="text-base sm:text-lg">🐻</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[11px] sm:text-[12px] font-black tracking-widest text-white uppercase leading-tight">
                BEAR BUILDS WEB
              </span>
              <span className="font-mono text-[9px] font-medium tracking-wider text-white/70 uppercase">
                I BUILD VISUAL BOOKINGS
              </span>
            </div>
          </motion.div>

          {/* Top-Right Editorial Nav: Hamburger Menu + WhatsApp Chat Bubble Action */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 sm:gap-4 font-mono text-[11px] uppercase tracking-wider text-white/90"
          >
            {/* Hamburger Icon Toggle */}
            <button
              onClick={onToggleMenu}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/40 bg-white/15 hover:bg-white/25 hover:border-white text-white transition-all duration-300 flex items-center justify-center cursor-pointer backdrop-blur-md shadow-sm group hover:scale-105"
              title="Open Navigation Menu"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
            </button>

            {/* WhatsApp Chat Bubble */}
            <a
              href="https://wa.me/27680246914"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/40 bg-white/15 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white text-white transition-all duration-300 flex items-center justify-center cursor-pointer backdrop-blur-md shadow-sm group hover:scale-105"
              title="Chat with Bear on WhatsApp"
              aria-label="WhatsApp Contact"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>

        </div>

        {/* Hero Central Stage: Integrated Art-Directed Headline & Overlapping Portrait */}
        <div className="relative z-20 px-3 sm:px-8 lg:px-14 pt-4 sm:pt-8 pb-12 sm:pb-20 flex flex-col items-center">
          
          {/* Brutalist Editorial Container with Depth Stacking */}
          <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center mt-2 sm:mt-4">
            
            {/* Background Layer: Massive Architectural "FOR SOLO" Headline */}
            <motion.div 
              initial={{ opacity: 0, y: -25, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="w-full text-center select-none relative z-10"
            >
              {/* Micro Tag Floating Above "LESS ADMIN" */}
              <div className="inline-flex items-center gap-2 mb-2 sm:mb-3 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 font-mono text-[9px] sm:text-[10px] tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5D7BE] animate-pulse" />
                <span>FOR SOLO PROFESSIONALS</span>
              </div>

              <h1 className="font-display font-black text-[20vw] sm:text-[16vw] lg:text-[160px] xl:text-[190px] text-white/95 leading-[0.80] tracking-tight uppercase drop-shadow-[0_8px_20px_rgba(0,0,0,0.18)]">
                LESS ADMIN
              </h1>
            </motion.div>

            {/* Overlapping Central Composition: Image Capsule breaking the grid + Dramatic "More Bookings." */}
            <div className="relative w-full flex flex-col lg:flex-row items-center justify-center -mt-10 sm:-mt-20 md:-mt-24 lg:-mt-28 z-20">
              
              {/* Left Editorial Metadata Bracket (Desktop only - adds art direction depth) */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hidden xl:flex flex-col items-start gap-3 absolute left-0 top-1/2 -translate-y-1/2 text-left z-15 select-none"
              >
                <div className="border-l-2 border-white/40 pl-3.5 py-1">
                  <p className="font-mono text-[10px] text-white/90 font-bold uppercase tracking-wider">
                    SPEC. 01 // ARCHITECTURE
                  </p>
                  <p className="font-mono text-[9px] text-white/60 uppercase tracking-widest mt-0.5">
                    Zero-Friction Scheduling
                  </p>
                </div>
                <div className="border-l-2 border-[#1A1A1A]/30 pl-3.5 py-1">
                  <p className="font-mono text-[10px] text-[#1A1A1A] font-bold uppercase tracking-wider">
                    DEV & DESIGN
                  </p>
                  <p className="font-mono text-[9px] text-[#1A1A1A]/60 uppercase tracking-widest mt-0.5">
                    Tailored For Solo Practices
                  </p>
                </div>
              </motion.div>

              {/* Central Art-Directed Photograph Capsule (Offset & Breaking the Grid) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.88, y: 35, rotate: -3 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotate: -1.5 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-56 sm:w-68 md:w-80 lg:w-[330px] aspect-[10/13] group shrink-0 cursor-pointer my-4 lg:my-0"
              >
                {/* Brutalist Wireframe Offset Shadow Frame */}
                <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-t-full rounded-b-[40px] border-2 border-dashed border-[#1A1A1A]/30 bg-[#1A1A1A]/5 pointer-events-none transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
                
                {/* Secondary Ambient Halo Ring */}
                <div className="absolute -inset-3 rounded-t-full rounded-b-[44px] border border-white/30 pointer-events-none transition-transform duration-500 group-hover:scale-102" />

                {/* Corner Film Crop Marks */}
                <div className="hidden sm:flex absolute -top-3 -left-3 font-mono text-xs text-white font-bold bg-[#1A1A1A] w-6 h-6 rounded-md border border-white/20 shadow-md z-30 items-center justify-center leading-none">
                  *
                </div>
                <div className="absolute -bottom-3 -right-3 font-mono text-[9px] text-[#1A1A1A] font-bold bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#1A1A1A]/20 shadow-md z-30 tracking-widest uppercase">
                  SOUTH AFRICA
                </div>

                {/* Main Mask Capsule with Grayscale-to-Color Editorial Grading */}
                <div className="relative w-full h-full rounded-t-full rounded-b-[38px] overflow-hidden border-[4px] border-white bg-gradient-to-b from-[#7A8A79] via-[#9AA899] to-[#EAE4D9] shadow-[0_30px_70px_rgba(26,26,26,0.30)]">
                  <img 
                    src={bearPortrait} 
                    alt="Moemedi 'Bear' Leeu - Web Specialist & Developer" 
                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-106 transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle lighting vignette and bottom tone blend */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 via-transparent to-transparent pointer-events-none" />
                </div>

              </motion.div>

              {/* Forefront Accent Word: "More Bookings." with Dynamic Stagger & Heavy Presence (Cleanly visible on desktop) */}
              <motion.div 
                initial={{ opacity: 0, x: 30, y: 15 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="hidden sm:block mt-4 lg:mt-0 lg:ml-4 xl:ml-6 text-center lg:text-left z-25 select-none"
              >
                <div className="relative inline-block">
                  <span className="font-serif italic font-semibold text-5xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[120px] text-[#1A1A1A] leading-[0.9] tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.08)] block whitespace-nowrap">
                    More Bookings.
                  </span>
                  
                  {/* Blank Accent Dot beside the Serif Period */}
                  <span className="hidden sm:inline-block absolute bottom-2 sm:bottom-4 -right-3 sm:-right-4 w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#8C6D46] shadow-xs" />
                </div>
              </motion.div>

            </div>

          </div>

          {/* Editorial Content Section Below Composition */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.4 }}
            className="w-full max-w-2xl mt-8 sm:mt-12 lg:mt-16 flex flex-col items-center text-center space-y-6"
          >
            {/* Scrapbook Note Artifact: Pinned / Taped Personal Note */}
            <div className="relative max-w-xl mx-auto w-full group">
              {/* Pinned Washi Tape Strip at top */}
              <div className="absolute -top-3 left-8 sm:left-12 z-20 w-16 sm:w-20 h-4 bg-[#E2D8C7]/90 backdrop-blur-xs border-y border-[#1A1A1A]/10 shadow-[0_1px_3px_rgba(0,0,0,0.06)] -rotate-2 select-none pointer-events-none opacity-85 group-hover:rotate-0 transition-transform duration-300" />

              {/* The Tactile Paper Card */}
              <div className="relative bg-[#FAF8F5] sm:bg-[#FDFCF9] border border-[#1A1A1A]/12 rounded-2xl p-5 sm:p-7 shadow-[0_10px_35px_-8px_rgba(26,26,26,0.08),0_2px_4px_rgba(26,26,26,0.03)] -rotate-[0.6deg] sm:-rotate-1 group-hover:rotate-0 transition-transform duration-500 ease-out text-left">
                
                {/* Micro Editorial Annotation Header */}
                <div className="flex items-center justify-between gap-3 pb-3 mb-3 border-b border-[#1A1A1A]/8 select-none">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D46]" />
                    <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-[0.18em] uppercase text-[#8C6D46]">
                      A NOTE // FROM BEAR
                    </span>
                  </div>
                  {/* Mounting Bolt matching Hero Footer */}
                  <div 
                    className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#ECE8E1] via-[#D5CFC3] to-[#B3ABA0] border border-[#1A1A1A]/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_1px_2px_rgba(0,0,0,0.12)] flex items-center justify-center rotate-[38deg] select-none shrink-0" 
                    title="Mounting Bolt" 
                    aria-hidden="true"
                  >
                    <div className="relative w-2 h-2 flex items-center justify-center">
                      <div className="absolute w-1.5 h-px bg-[#1A1A1A]/60 rounded-xs shadow-[0_0.5px_0.5px_rgba(0,0,0,0.4)]" />
                      <div className="absolute h-1.5 w-px bg-[#1A1A1A]/60 rounded-xs shadow-[0_0.5px_0.5px_rgba(0,0,0,0.4)]" />
                    </div>
                  </div>
                </div>

                {/* Exact Required Narrative Copy with Tactile Typography */}
                <p className="font-sans text-base sm:text-lg lg:text-[19px] font-normal text-[#1A1A1A]/90 leading-relaxed">
                  Hi...<span className="text-[#1A1A1A]/50">I’m Moemedi</span> “<span className="font-serif italic font-bold text-[#8C6D46] text-[1.12em] tracking-tight">Bear</span>”...i make bookings visual.
                </p>

                {/* Subtle Scrapbook Footnote / Technical Spec Stamp */}
                <div className="pt-3 mt-3 border-t border-dashed border-[#1A1A1A]/8 flex items-center justify-end font-mono text-[8px] sm:text-[9px] text-[#1A1A1A]/45 uppercase tracking-wider select-none">
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#8C6D46] font-bold">#</span>
                    <span>THOUGHTFUL DESIGN</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Poster Frame Footer: Corner Bolts & Clickable Scroll CTA */}
        <div className="relative pb-5 sm:pb-6 px-6 sm:px-10 flex items-center justify-between border-t border-[#1A1A1A]/8 pt-3.5 sm:pt-4">
          
          {/* Left Corner Industrial Bolt / Screw */}
          <div 
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br from-[#ECE8E1] via-[#D5CFC3] to-[#B3ABA0] border border-[#1A1A1A]/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_1px_2px_rgba(0,0,0,0.12)] flex items-center justify-center rotate-[26deg] select-none shrink-0" 
            title="Mounting Bolt" 
            aria-hidden="true"
          >
            <div className="relative w-2 h-2 flex items-center justify-center">
              <div className="absolute w-1.5 sm:w-2 h-px bg-[#1A1A1A]/60 rounded-xs shadow-[0_0.5px_0.5px_rgba(0,0,0,0.4)]" />
              <div className="absolute h-1.5 sm:h-2 w-px bg-[#1A1A1A]/60 rounded-xs shadow-[0_0.5px_0.5px_rgba(0,0,0,0.4)]" />
            </div>
          </div>

          {/* Clickable "Scroll to explore" CTA targeting next section */}
          <button
            type="button"
            onClick={onWhoIHelpClick}
            className="group inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-[0.16em] uppercase font-bold text-[#1A1A1A]/75 hover:text-[#8C6D46] px-4 py-1.5 rounded-full hover:bg-white/60 border border-transparent hover:border-[#1A1A1A]/10 transition-all duration-300 cursor-pointer shadow-none hover:shadow-xs"
            aria-label="Scroll to explore clients and services"
          >
            <span>Scroll to explore</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#8C6D46] group-hover:translate-y-1 transition-transform duration-300 animate-bounce" />
          </button>

          {/* Right Corner Industrial Bolt / Screw */}
          <div 
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br from-[#ECE8E1] via-[#D5CFC3] to-[#B3ABA0] border border-[#1A1A1A]/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_1px_2px_rgba(0,0,0,0.12)] flex items-center justify-center rotate-[74deg] select-none shrink-0" 
            title="Mounting Bolt" 
            aria-hidden="true"
          >
            <div className="relative w-2 h-2 flex items-center justify-center">
              <div className="absolute w-1.5 sm:w-2 h-px bg-[#1A1A1A]/60 rounded-xs shadow-[0_0.5px_0.5px_rgba(0,0,0,0.4)]" />
              <div className="absolute h-1.5 sm:h-2 w-px bg-[#1A1A1A]/60 rounded-xs shadow-[0_0.5px_0.5px_rgba(0,0,0,0.4)]" />
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
