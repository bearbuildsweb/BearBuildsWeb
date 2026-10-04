import React from "react";
import { motion } from "motion/react";
import { ArrowDown, Menu } from "lucide-react";
// @ts-ignore
import heroPortrait2 from "../assets/images/hero_potrait_2.png";
// @ts-ignore
import bearProcessPhoto from "../assets/images/bear_process_photo_1791127514355.jpg";
// @ts-ignore
import exposedBrickImg from "../assets/images/exposed_brick_texture_1791128124134.jpg";
// @ts-ignore
import charredTimberImg from "../assets/images/charred_timber_texture_1791126502415.jpg";
// @ts-ignore
import pegboardImg from "../assets/images/workshop_pegboard_texture_1791126522414.jpg";
// @ts-ignore
import wornLeatherImg from "../assets/images/worn_leather_texture_1791126539147.jpg";

interface HeroProps {
  onRequestSiteClick?: () => void;
  onContactClick: () => void;
  onWhoIHelpClick: () => void;
  onToggleMenu: () => void;
}

// Precision Mechanical Socket Hex Bolt with realistic countersunk washer
function SocketBolt({ 
  size = 14, 
  angle = 35, 
  className = "" 
}: { 
  size?: number; 
  angle?: number; 
  className?: string; 
}) {
  return (
    <div 
      style={{ width: size, height: size }}
      className={`relative rounded-full bg-gradient-to-br from-[#E2E8F0] via-[#94A3B8] to-[#475569] border border-black/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_1.5px_3px_rgba(0,0,0,0.45)] flex items-center justify-center select-none shrink-0 ${className}`}
      aria-hidden="true"
    >
      {/* Countersunk Washer Ring */}
      <div className="absolute inset-[1.5px] rounded-full border border-black/20 bg-gradient-to-tl from-[#64748B] to-[#CBD5E1]" />
      {/* 6-Sided Hex Socket */}
      <div 
        style={{
          clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
          transform: `rotate(${angle}deg)`
        }}
        className="relative w-[48%] h-[48%] bg-[#0B0F17] shadow-[inset_0_1px_2px_rgba(0,0,0,0.9)]"
      />
    </div>
  );
}

// Modular Lego-inspired Stud Strip (Tactile coupling array)
function ModularStuds({ 
  count = 4, 
  orientation = "horizontal", 
  className = "" 
}: { 
  count?: number; 
  orientation?: "horizontal" | "vertical"; 
  className?: string; 
}) {
  return (
    <div 
      className={`inline-flex ${orientation === "horizontal" ? "flex-row gap-1.5 sm:gap-2" : "flex-col gap-1.5 sm:gap-2"} items-center p-1 sm:p-1.5 rounded-sm bg-[#16181D]/90 border border-white/15 shadow-[inset_0_1px_2px_rgba(0,0,0,0.7)] ${className}`}
      aria-hidden="true"
    >
      {Array.from({ length: count }).map((_, i) => (
        <div 
          key={i}
          className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-gradient-to-b from-[#565A64] via-[#353940] to-[#1E2025] border border-white/25 shadow-[0_1.5px_2px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)] flex items-center justify-center relative group-hover:border-white/40 transition-colors"
        >
          {/* Inner stud ring */}
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-t from-black/50 to-white/30 border border-black/40" />
        </div>
      ))}
    </div>
  );
}

// Milled Corner Metal Gusset Bracket with Hex Screws
function CornerBracket({ 
  position = "top-left", 
}: { 
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right"; 
}) {
  const getStyles = () => {
    switch (position) {
      case "top-left":
        return "top-0 left-0 border-t-2 border-l-2 rounded-tl-sm";
      case "top-right":
        return "top-0 right-0 border-t-2 border-r-2 rounded-tr-sm";
      case "bottom-left":
        return "bottom-0 left-0 border-b-2 border-l-2 rounded-bl-sm";
      case "bottom-right":
        return "bottom-0 right-0 border-b-2 border-r-2 rounded-br-sm";
    }
  };

  return (
    <div 
      className={`absolute w-6 h-6 sm:w-7 sm:h-7 ${getStyles()} border-[#94A3B8]/40 bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-30 flex items-center justify-center`}
      aria-hidden="true"
    >
      <SocketBolt size={10} angle={position.includes("right") ? 75 : 25} />
    </div>
  );
}

// Workshop Debris: Fine sawdust motes and curled metal shavings
function WorkshopDebris({ className = "" }: { className?: string }) {
  return (
    <svg className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      {/* Scattered Sawdust Motes (warm golden/amber flecks catching the tungsten light) */}
      <circle cx="7%" cy="14%" r="1.8" fill="#F59E0B" opacity="0.65" />
      <circle cx="12%" cy="28%" r="1.2" fill="#D97706" opacity="0.6" />
      <circle cx="19%" cy="10%" r="1.6" fill="#FBBF24" opacity="0.55" />
      <circle cx="26%" cy="42%" r="2.2" fill="#B45309" opacity="0.65" />
      <circle cx="34%" cy="22%" r="1.4" fill="#F59E0B" opacity="0.6" />
      <circle cx="41%" cy="65%" r="1.7" fill="#D97706" opacity="0.55" />
      <circle cx="49%" cy="14%" r="2" fill="#FBBF24" opacity="0.5" />
      <circle cx="58%" cy="38%" r="1.3" fill="#F59E0B" opacity="0.7" />
      <circle cx="67%" cy="25%" r="1.9" fill="#D97706" opacity="0.6" />
      <circle cx="76%" cy="54%" r="1.5" fill="#B45309" opacity="0.6" />
      <circle cx="84%" cy="18%" r="2.1" fill="#FBBF24" opacity="0.6" />
      <circle cx="91%" cy="44%" r="1.4" fill="#F59E0B" opacity="0.55" />
      <circle cx="16%" cy="74%" r="1.9" fill="#D97706" opacity="0.6" />
      <circle cx="32%" cy="80%" r="1.3" fill="#F59E0B" opacity="0.65" />
      <circle cx="64%" cy="72%" r="1.6" fill="#B45309" opacity="0.55" />
      <circle cx="81%" cy="78%" r="1.5" fill="#FBBF24" opacity="0.6" />

      {/* Curled Metal Shavings (warm brass and specular aluminum spiral slivers) */}
      <path d="M 140 190 Q 145 197 150 193 T 155 198" fill="none" stroke="#FDE047" strokeWidth="1.2" opacity="0.5" strokeLinecap="round" />
      <path d="M 320 110 Q 325 104 330 108 T 335 103" fill="none" stroke="#FBBF24" strokeWidth="1.1" opacity="0.5" strokeLinecap="round" />
      <path d="M 690 160 Q 696 168 702 163 T 708 170" fill="none" stroke="#E2E8F0" strokeWidth="1.3" opacity="0.55" strokeLinecap="round" />
      <path d="M 890 280 Q 895 273 901 278 T 907 272" fill="none" stroke="#FBBF24" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
      <path d="M 1040 180 Q 1046 188 1052 183 T 1058 190" fill="none" stroke="#CBD5E1" strokeWidth="1.2" opacity="0.45" strokeLinecap="round" />
      <path d="M 450 490 Q 456 498 462 493 T 468 500" fill="none" stroke="#FDE047" strokeWidth="1.2" opacity="0.5" strokeLinecap="round" />
      <path d="M 780 540 Q 785 533 791 538 T 797 532" fill="none" stroke="#FBBF24" strokeWidth="1" opacity="0.45" strokeLinecap="round" />
      <path d="M 230 620 Q 236 628 242 623 T 248 630" fill="none" stroke="#E2E8F0" strokeWidth="1.2" opacity="0.45" strokeLinecap="round" />
    </svg>
  );
}

export default function Hero({ onRequestSiteClick, onContactClick, onWhoIHelpClick, onToggleMenu }: HeroProps) {
  return (
    <section id="hero" className="relative w-full px-2 sm:px-4 lg:px-8 pt-2 pb-16 lg:pb-24 overflow-hidden bg-[#ECEEF1]">
      
      {/* Outer Framed Modular Poster Canvas: Charred Timber, Dark Slate & Workshop Pegboard Wall */}
      <div className="relative max-w-[1440px] mx-auto rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] overflow-hidden border-2 border-[#18181B]/30 shadow-[0_35px_90px_rgba(24,24,27,0.18)] bg-[#141518]">
        
        {/* ========================================================================= */}
        {/* Overhead Exposed Filament Pendant Bulb (Warm Tungsten Lighting Source)     */}
        {/* ========================================================================= */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-25 pointer-events-none flex flex-col items-center">
          {/* Braided Vintage Textile Wire */}
          <div className="w-[1.5px] h-7 sm:h-11 bg-gradient-to-b from-[#2A231C] to-[#4A3B2C]" />
          {/* Antique Turned Brass Socket */}
          <div className="w-3.5 h-3 bg-gradient-to-b from-[#B45309] via-[#D97706] to-[#78350F] rounded-t-xs border-t border-amber-200/50 shadow-xs" />
          {/* Handblown Glass Bulb with Glowing Tungsten Filament */}
          <div className="relative w-6 h-7 rounded-b-full bg-gradient-to-b from-amber-200/40 via-amber-400/50 to-amber-500/70 border border-amber-300/60 shadow-[0_0_24px_rgba(245,158,11,0.95),0_0_65px_rgba(217,119,6,0.65)] flex items-center justify-center">
            {/* Curled Glowing Filament Wire */}
            <div className="w-1.5 h-2.5 rounded-full border border-amber-100 shadow-[0_0_8px_#FEF3C7] animate-pulse" />
          </div>
        </div>

        {/* Primary Warm Exposed Bulb Conical Light Beam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[950px] lg:w-[1250px] h-[580px] sm:h-[750px] rounded-full bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.26)_0%,rgba(245,158,11,0.16)_35%,rgba(217,119,6,0.06)_65%,transparent_80%)] blur-[30px] pointer-events-none z-10" />

        {/* Secondary Warm Ambient Pool illuminating the Process Photography & Desk */}
        <div className="absolute top-[32%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[720px] lg:w-[900px] aspect-square rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.14)_0%,rgba(180,83,9,0.06)_50%,transparent_75%)] blur-[80px] pointer-events-none z-10" />

        {/* ========================================================================= */}
        {/* Tactile Workshop Background Layers                                        */}
        {/* ========================================================================= */}

        {/* Layer 1: High-Res Charred Timber (Shou Sugi Ban) Wood Grain Texture */}
        <div className="absolute inset-0 pointer-events-none opacity-45 mix-blend-luminosity overflow-hidden">
          <img 
            src={charredTimberImg} 
            alt="" 
            className="w-full h-full object-cover object-center filter contrast-125"
          />
        </div>

        {/* Layer 2: Workshop Pegboard Wall Perforation Texture */}
        <div className="absolute inset-0 pointer-events-none opacity-35 mix-blend-overlay overflow-hidden">
          <img 
            src={pegboardImg} 
            alt="" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Layer 3: Procedural Workshop Pegboard Perforated Hole Grid */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(#050608 2.2px, transparent 2.2px),
              radial-gradient(rgba(251,191,36,0.12) 1px, transparent 1px)
            `,
            backgroundSize: '28px 28px',
            backgroundPosition: '0 0, 1px 1px'
          }}
        />

        {/* Layer 4: Vertical Charred Timber Plank Seams */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.6) 1px, transparent 1px, transparent 140px)',
            backgroundSize: '140px 100%'
          }}
        />

        {/* Layer 5: Dark Slate Warm Amber Glaze */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#161514]/85 via-[#1A1816]/75 via-55% to-[#F4F5F7] to-94% pointer-events-none" />

        {/* Layer 6: Sawdust Motes and Curled Metal Shavings */}
        <WorkshopDebris className="z-10 opacity-75" />

        {/* Structural Metal Corner Bolts on the Main Poster */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-40 hidden sm:flex items-center">
          <SocketBolt size={13} angle={40} className="opacity-60" />
        </div>

        <div className="absolute top-4 right-4 sm:top-6 right-6 z-40 hidden sm:flex items-center">
          <SocketBolt size={13} angle={85} className="opacity-60" />
        </div>

        {/* ========================================================================= */}
        {/* Top Header / Brand Bar (Curated Editorial Style)                          */}
        {/* ========================================================================= */}
        <div className="relative z-30 px-4 sm:px-10 lg:px-14 pt-4 sm:pt-6 pb-4 flex items-center justify-between border-b border-amber-900/30 bg-[#141210]/80 backdrop-blur-xs">
          
          {/* Brand Emblem (Linked to WhatsApp with prefilled message) */}
          <motion.a 
            href={`https://wa.me/27680246914?text=${encodeURIComponent(
              "Hi Bear, I’d like to talk about building a DIGITAL FRONT DOOR for my work."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 sm:gap-3.5 group cursor-pointer"
            title="Chat with Bear on WhatsApp"
            aria-label="WhatsApp Contact"
          >
            {/* Machined Emblem Housing */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#2E2822] to-[#171411] border border-amber-200/25 shadow-[inset_0_1px_1px_rgba(251,191,36,0.3),0_2px_8px_rgba(0,0,0,0.5)] flex items-center justify-center text-white transition-all duration-300 group-hover:border-amber-300/50 group-hover:scale-105">
              <span className="text-base sm:text-lg">🐻</span>
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 border border-black shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
            </div>

            <div className="flex flex-col">
              <span className="font-sans text-[12px] sm:text-[13px] font-bold tracking-[0.16em] text-[#FDFCF7] uppercase leading-tight antialiased">
                BEAR BUILDS WEB
              </span>
              <span className="font-sans text-[9px] sm:text-[10px] font-medium tracking-[0.18em] text-[#D4C3B3] uppercase antialiased">
                YOUR TOOLS. ONE PLACE.
              </span>
            </div>
          </motion.a>

          {/* Center Connector Studs (Visible on Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="h-px w-10 bg-amber-200/20" />
            <ModularStuds count={6} orientation="horizontal" />
            <div className="h-px w-10 bg-amber-200/20" />
          </div>

          {/* Action Controls: Menu */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center"
          >
            {/* Menu Button */}
            <button
              onClick={onToggleMenu}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/30 bg-gradient-to-b from-[#2A2E36] to-[#181B20] hover:from-[#353A44] hover:to-[#22262D] hover:border-amber-300/60 text-white transition-all duration-200 flex items-center justify-center cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_2px_4px_rgba(0,0,0,0.4)] group active:translate-y-0.5"
              title="Open Navigation Menu"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-200 group-hover:scale-110 transition-transform" />
            </button>
          </motion.div>

        </div>

        {/* ========================================================================= */}
        {/* Hero Central Stage (Curated Home Renovation Magazine Composition)           */}
        {/* ========================================================================= */}
        <div className="relative z-20 px-3 sm:px-8 lg:px-14 pt-4 sm:pt-8 pb-10 sm:pb-16 flex flex-col items-center">
          
          {/* Main Stage Grid Container */}
          <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center mt-2">
            
            {/* Background Layer: Curated Editorial Masthead "YOUR TOOLS" */}
            <motion.div 
              initial={{ opacity: 0, y: -25, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="w-full text-center select-none relative z-10"
            >
              {/* Curated Editorial Tag: DEAR PHOTOGRAPHER */}
              <div className="inline-flex items-center gap-2 mb-2 sm:mb-4 px-3.5 py-1 rounded-full bg-[#1F1B17]/95 border border-amber-900/40 text-[#EADBCE] shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)] animate-pulse shrink-0" />
                <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] text-[#EADBCE] uppercase antialiased">
                  DEAR PHOTOGRAPHER
                </span>
              </div>

              {/* Masthead Title: Curated High-End Magazine Serif */}
              <h1 className="font-serif font-normal text-[15vw] sm:text-[13vw] lg:text-[132px] xl:text-[150px] text-[#FDFCF7] leading-[0.84] tracking-[-0.01em] uppercase drop-shadow-[0_12px_35px_rgba(0,0,0,0.65)] antialiased">
                YOUR TOOLS
              </h1>
            </motion.div>

            {/* Central Composition: Photography Capsule + "One Experience." */}
            <div className="relative w-full flex flex-col lg:flex-row items-center justify-center -mt-3.5 sm:mt-1 md:-mt-2 lg:-mt-4 z-20">
              
              {/* Photography Capsule: Prevalent on mobile with a subtle, gentle baseline overlap on "YOUR TOOLS" */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.88, y: 25, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotate: -1 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-[214px] sm:w-56 md:w-64 lg:w-72 aspect-[10/13] group shrink-0 cursor-pointer my-2 lg:my-0"
              >
                {/* Worn Leather / Charred Wood Backing Frame */}
                <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 sm:translate-x-3.5 sm:translate-y-3.5 rounded-t-full rounded-b-[32px] border-2 border-[#543825]/40 bg-[#1A1512]/80 pointer-events-none transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 overflow-hidden shadow-lg">
                  <img src={wornLeatherImg} alt="" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
                </div>
                
                {/* Outer Machined Tension Ring with Warm Specular Accent */}
                <div className="absolute -inset-2.5 rounded-t-full rounded-b-[38px] border border-amber-200/20 pointer-events-none transition-transform duration-500 group-hover:scale-102" />

                {/* Visible Metal Bracket Mounts on Portrait */}
                <div className="absolute -top-2 left-4 z-30 flex items-center bg-[#1E2229] border border-white/30 p-1 rounded-full shadow-lg">
                  <SocketBolt size={9} angle={45} />
                </div>
                <div className="absolute -top-2 right-4 z-30 flex items-center bg-[#1E2229] border border-white/30 p-1 rounded-full shadow-lg">
                  <SocketBolt size={9} angle={120} />
                </div>

                {/* Bottom Left Corner Stud Array */}
                <div className="absolute -bottom-3 -left-2 z-30 hidden sm:block">
                  <ModularStuds count={3} orientation="horizontal" />
                </div>

                {/* Stamped Editorial Tag at bottom right */}
                <div className="absolute -bottom-2.5 -right-2 font-mono text-[9px] sm:text-[10px] text-[#1C1814] font-extrabold bg-gradient-to-r from-[#FDFBF7] to-[#EADBCE] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-sm border border-amber-900/30 shadow-xl z-30 tracking-widest uppercase antialiased flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
                  <span>CPT // ZA</span>
                </div>

                {/* Main Mask Capsule with Warm Editorial Grading */}
                <div className="relative w-full h-full rounded-t-full rounded-b-[32px] overflow-hidden border-[3px] sm:border-[4px] border-[#F1EBE1] bg-gradient-to-b from-[#2C2621] via-[#453A30] to-[#DDD2C4] shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
                  <img 
                    src={heroPortrait2} 
                    alt="Moemedi 'Bear' Leeu - Web Specialist & Developer" 
                    className="w-full h-full object-cover contrast-[104%] group-hover:scale-105 transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  {/* Warm amber incandescent glow reflection from the exposed bulb */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141518]/65 via-transparent to-amber-400/10 pointer-events-none" />
                </div>

              </motion.div>

              {/* Forefront Accent Word: "One Experience." (Hidden on mobile) */}
              <motion.div 
                initial={{ opacity: 0, x: 20, y: 15 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="hidden sm:block mt-3 sm:mt-4 lg:mt-0 lg:ml-6 xl:ml-8 text-center lg:text-left z-25 select-none shrink-0"
              >
                <div className="relative inline-block">
                  <span className="font-serif italic font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[62px] xl:text-[76px] text-[#F5EBE1] leading-[0.95] tracking-tight drop-shadow-[0_4px_28px_rgba(0,0,0,0.85)] block whitespace-nowrap">
                    One Experience.
                  </span>
                  
                  {/* Curated Amber Filament Dot beside the Serif Period */}
                  <span className="inline-block absolute bottom-1 sm:bottom-2 md:bottom-3 -right-2 sm:-right-2.5 w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 shadow-[0_2px_8px_rgba(245,158,11,0.8)] border border-amber-200/40" />
                </div>
              </motion.div>

            </div>

          </div>

          {/* ========================================================================= */}
          {/* "A NOTE FROM BEAR" — WRAPPED IN AUTHENTIC EXPOSED BRICK                   */}
          {/* ========================================================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.4 }}
            className="w-full max-w-2xl mt-8 sm:mt-12 lg:mt-16 flex flex-col items-center"
          >
            {/* Precision Modular Assembly Container */}
            <div className="relative w-full group">
              
              {/* Top Structural Stud Connectors */}
              <div className="absolute -top-3 left-10 sm:left-14 z-30 hidden sm:flex items-center">
                <ModularStuds count={4} orientation="horizontal" />
              </div>

              {/* Outer Exposed Brick Plinth Wrapping the Hero Paragraph */}
              <div className="relative rounded-xl p-2 sm:p-2.5 bg-[#3B1910] border-2 border-[#5C2B1D]/80 shadow-[0_25px_60px_-10px_rgba(0,0,0,0.65),inset_0_2px_4px_rgba(255,255,255,0.15)] overflow-hidden">
                
                {/* Authentic Exposed Red Brick Masonry Texture */}
                <div className="absolute inset-0 pointer-events-none opacity-90 overflow-hidden">
                  <img 
                    src={exposedBrickImg} 
                    alt="" 
                    className="w-full h-full object-cover object-center filter contrast-110 saturate-105" 
                  />
                </div>

                {/* Subtle Mortar & Ambient Masonry Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/45 pointer-events-none" />

                {/* Inner Anodized / Dark Slate Plate containing the Note */}
                <div className="relative bg-gradient-to-br from-[#141519]/95 via-[#1B1E24]/95 to-[#101114]/95 border border-white/20 rounded-lg p-5 sm:p-7 shadow-[0_15px_35px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.2)] text-left overflow-hidden backdrop-blur-xs">
                  
                  {/* 4 Corner Metal Brackets with Hex Screws */}
                  <CornerBracket position="top-left" />
                  <CornerBracket position="top-right" />
                  <CornerBracket position="bottom-left" />
                  <CornerBracket position="bottom-right" />

                  {/* Laser-Etched Blueprint Drafting Grid Overlay in Warm Tones */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,158,11,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,158,11,0.06)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
                  
                  {/* Major Blueprint Datum Grid (80px) */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,158,11,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,158,11,0.08)_1px,transparent_1px)] [background-size:80px_80px] pointer-events-none" />

                  {/* Plate Header Block */}
                  <div className="relative z-10 flex items-center justify-between gap-2 pb-3 mb-4 border-b border-white/15 select-none pt-1">
                    <div className="flex items-center gap-2.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)]" />
                      </span>
                      <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.18em] uppercase text-zinc-200">
                        NOTE // FROM BEAR
                      </span>
                    </div>
                  </div>

                  {/* Narrative Paragraph with Clean, Modern, Less-Editorial Sans Font */}
                  <div className="relative z-10 font-sans text-[15px] sm:text-[17px] lg:text-[18px] font-normal text-zinc-100 leading-[2.1] sm:leading-[2.0] tracking-normal">
                    I build digital homes for photographers — bringing your{' '}
                    
                    {/* Modular Chip 01: Portfolio */}
                    <span className="inline-flex items-center gap-1.5 mx-1 px-2.5 py-0.5 bg-gradient-to-b from-[#2E333D] to-[#1C2026] text-white border border-white/30 rounded-xs shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_2px_4px_rgba(0,0,0,0.5)] font-mono text-[0.88em] font-semibold tracking-tight hover:border-amber-400 transition-colors cursor-default select-none align-middle group/chip">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 shadow-[0_0_4px_rgba(251,191,36,0.6)]" />
                      <span className="font-sans font-medium text-white">portfolio</span>
                    </span>{' '}
                    
                    {/* Connector Joint Pin */}
                    <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#333842] border border-white/20 align-middle shadow-inner" aria-hidden="true">
                      <span className="w-0.5 h-0.5 bg-white/60 rounded-full" />
                    </span>{' '}
                    
                    {/* Modular Chip 02: Enquiries */}
                    <span className="inline-flex items-center gap-1.5 mx-1 px-2.5 py-0.5 bg-gradient-to-b from-[#3D3326] to-[#241E15] text-[#FDE047] border border-[#CA8A04]/50 rounded-xs shadow-[inset_0_1px_0_rgba(253,224,71,0.3),0_2px_4px_rgba(0,0,0,0.5)] font-serif italic font-semibold text-[0.94em] hover:border-[#FDE047] transition-colors cursor-default select-none align-middle group/chip">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308] shadow-[0_0_4px_rgba(234,179,8,0.6)]" />
                      <span>enquiries</span>
                    </span>{' '}
                    
                    {/* Connector Joint Pin */}
                    <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#333842] border border-white/20 align-middle shadow-inner" aria-hidden="true">
                      <span className="w-0.5 h-0.5 bg-white/60 rounded-full" />
                    </span>{' '}
                    
                    {/* Modular Chip 03: Reviews */}
                    <span className="inline-flex items-center gap-1.5 mx-1 px-2.5 py-0.5 bg-gradient-to-b from-[#2E3138] to-[#1B1D22] text-zinc-200 border border-white/25 rounded-xs shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_2px_4px_rgba(0,0,0,0.5)] font-mono text-[0.84em] font-medium tracking-tight hover:border-white/50 transition-colors cursor-default select-none align-middle group/chip">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 shadow-[0_0_4px_rgba(52,211,153,0.6)]" />
                      <span>reviews</span>
                    </span>{' '}
                    
                    {/* Connector Joint Pin */}
                    <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#333842] border border-white/20 align-middle shadow-inner" aria-hidden="true">
                      <span className="w-0.5 h-0.5 bg-white/60 rounded-full" />
                    </span>{' '}
                    
                    {/* Modular Chip 04: Gallery Gateway */}
                    <span className="inline-flex items-center gap-1.5 mx-1 px-2.5 py-0.5 bg-gradient-to-b from-[#142A38] to-[#0A1821] text-amber-200 border border-amber-500/50 rounded-xs shadow-[inset_0_1px_0_rgba(251,191,36,0.3),0_2px_4px_rgba(0,0,0,0.5)] font-sans font-medium text-[0.88em] tracking-tight hover:border-amber-300 transition-colors cursor-default select-none align-middle group/chip">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_4px_rgba(251,191,36,0.8)]" />
                      <span>gallery gateway</span>
                    </span>{' '}
                    under one roof.
                  </div>

                  {/* Plate Bottom Rail: Trigger CTA */}
                  <div className="relative z-10 pt-4 mt-4 border-t border-white/15 flex items-center justify-end">
                    <a
                      href="#request-site"
                      id="hero-request-design-cta"
                      onClick={(e) => {
                        e.preventDefault();
                        if (onRequestSiteClick) {
                          onRequestSiteClick();
                        } else {
                          document.getElementById("request-site")?.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-gradient-to-b from-[#282E3A] to-[#171B22] hover:from-[#353D4D] hover:to-[#222833] text-white border border-amber-400/40 hover:border-amber-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_2px_6px_rgba(0,0,0,0.5)] font-mono text-[9px] sm:text-[10px] font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer group/cta active:translate-y-0.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_5px_rgba(251,191,36,0.8)]" />
                      <span>REQUEST YOURS</span>
                      <span className="text-amber-200 font-sans text-xs transition-transform group-hover/cta:translate-x-1">→</span>
                    </a>
                  </div>

                </div>

              </div>

              {/* Bottom Structural Stud Connectors */}
              <div className="absolute -bottom-3 right-10 sm:right-14 z-30 hidden sm:flex items-center">
                <ModularStuds count={4} orientation="horizontal" />
              </div>

            </div>
          </motion.div>

        </div>

        {/* ========================================================================= */}
        {/* Bottom Poster Frame Footer: Mechanical Plunger CTA & Corner Anchors         */}
        {/* ========================================================================= */}
        <div className="relative pb-5 sm:pb-6 px-4 sm:px-10 flex items-center justify-between border-t-2 border-[#18181B]/15 pt-3.5 sm:pt-4 bg-white/40 backdrop-blur-xs">
          
          {/* Left Mechanical Corner Anchor */}
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-sm bg-[#E2E8F0] border border-[#18181B]/20 shadow-xs flex items-center justify-center">
              <SocketBolt size={12} angle={26} />
            </div>
            {/* Modular stud boss */}
            <div className="hidden sm:block">
              <ModularStuds count={2} orientation="horizontal" className="bg-[#E2E8F0] border-[#18181B]/15" />
            </div>
          </div>

          {/* Mechanical Plunger "Scroll to explore" Button */}
          <button
            type="button"
            onClick={onWhoIHelpClick}
            className="group relative inline-flex items-center gap-2.5 font-sans text-[10px] sm:text-[11px] tracking-[0.22em] uppercase font-semibold text-[#18181B] px-5 py-2 rounded-sm bg-gradient-to-b from-white to-[#E2E8F0] hover:from-[#F8FAFC] hover:to-[#CBD5E1] border border-[#18181B]/30 shadow-[0_2px_4px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-200 cursor-pointer active:translate-y-0.5"
            aria-label="Scroll to explore why this works"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#18181B] group-hover:bg-amber-600 transition-colors" />
            <span>SCROLL TO EXPLORE</span>
            <div className="w-4 h-4 rounded-xs bg-[#18181B]/10 border border-[#18181B]/15 flex items-center justify-center">
              <ArrowDown className="w-2.5 h-2.5 text-[#18181B] group-hover:translate-y-0.5 transition-transform duration-200" />
            </div>
          </button>

          {/* Right Mechanical Corner Anchor */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <ModularStuds count={2} orientation="horizontal" className="bg-[#E2E8F0] border-[#18181B]/15" />
            </div>
            <div className="p-1.5 rounded-sm bg-[#E2E8F0] border border-[#18181B]/20 shadow-xs flex items-center justify-center">
              <SocketBolt size={12} angle={74} />
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
