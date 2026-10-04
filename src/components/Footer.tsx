import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Copy, Check, ArrowUp } from "lucide-react";
import workshopPegboardImg from "../assets/images/workshop_pegboard_texture_1791126522414.jpg";
import charredTimberImg from "../assets/images/charred_timber_texture_1791126502415.jpg";
import wornLeatherImg from "../assets/images/worn_leather_texture_1791126539147.jpg";
import limewashBrickImg from "../assets/images/limewash_brick_1791131239146.jpg";

// Tactile Machined Brass / Copper Hardware Pin (Countersunk screw head)
function BrassHardwarePin({ 
  size = 10, 
  className = "" 
}: { 
  size?: number; 
  className?: string; 
}) {
  return (
    <div 
      style={{ width: size, height: size }}
      className={`relative rounded-full bg-gradient-to-br from-[#D4AF37]/80 via-[#9A6B34] to-[#453018] border border-black/70 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_1.5px_3px_rgba(0,0,0,0.8)] flex items-center justify-center select-none shrink-0 ${className}`}
      aria-hidden="true"
    >
      {/* Countersunk Chamfer Ring */}
      <div className="absolute inset-[1px] rounded-full border border-black/30 bg-gradient-to-tl from-[#785124] to-[#C99C4B]" />
      {/* Machined Slot */}
      <div className="relative w-[55%] h-[1.5px] bg-[#120B05] shadow-[inset_0_1px_1px_rgba(0,0,0,0.9)] rotate-45" />
    </div>
  );
}

// Antiqued Brass Corner Gusset Bracket
function BrassCornerBracket({ 
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
      className={`absolute w-6 h-6 sm:w-7 sm:h-7 ${getStyles()} border-white/15 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-30 flex items-center justify-center opacity-60`}
      aria-hidden="true"
    >
      <BrassHardwarePin size={8} />
    </div>
  );
}

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@bearbuildsweb.co.za");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative w-full px-2 sm:px-4 lg:px-8 pt-6 pb-14 overflow-hidden scroll-mt-10 bg-[#E8E4DD]">
      
      {/* Lime Washed Fireplace Tile Brick Section Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <img 
          src={limewashBrickImg} 
          alt="" 
          className="w-full h-full object-cover object-center contrast-[108%] brightness-[97%]" 
          referrerPolicy="no-referrer"
        />
        {/* Lime wash chalky powdery glaze overlay */}
        <div className="absolute inset-0 bg-[#F6F3ED]/25 mix-blend-soft-light" />
        {/* Natural masonry shadow vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35 pointer-events-none" />
        {/* Ambient soft hearth depth gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_95%_75%_at_50%_50%,transparent_50%,rgba(0,0,0,0.25)_100%)] pointer-events-none" />
      </div>

      {/* Outer Framed Workshop Canvas: Quiet Charcoal-Walnut Card with Calming Overlay */}
      <div className="relative max-w-[1440px] mx-auto rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] overflow-hidden border border-white/15 shadow-[0_35px_90px_rgba(10,12,15,0.65),0_12px_30px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.06)] bg-gradient-to-b from-[#14161A] via-[#101115] to-[#0B0C0E] text-[#F4F5F7] px-6 sm:px-10 lg:px-16 py-12 sm:py-16">
        
        {/* Dark Walnut Wood Texture Underlay (Quiet and Subtle) */}
        <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none overflow-hidden">
          <img src={charredTimberImg} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Deep Dark Calming Veil to Guarantee Zero Clashing with Typography */}
        <div className="absolute inset-0 bg-[#0E1013]/70 pointer-events-none" />

        {/* Soft, Understated Warm Ambient Incandescent Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(245,158,11,0.05),transparent_70%)] pointer-events-none" />

        {/* Antiqued Brass Corner Gusset Brackets */}
        <BrassCornerBracket position="top-left" />
        <BrassCornerBracket position="top-right" />
        <BrassCornerBracket position="bottom-left" />
        <BrassCornerBracket position="bottom-right" />

        {/* Top Edge Alignment Fasteners (Subtle and Muted) */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-6 pointer-events-none opacity-40">
          <BrassHardwarePin size={9} />
          <BrassHardwarePin size={9} />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center lg:items-end gap-10">
          
          {/* Left Side: Logo & Monospace Intro Description */}
          <div className="space-y-2.5 w-full lg:w-80 text-center lg:text-left">
            <p className="font-mono text-[11px] sm:text-xs text-zinc-400 max-w-xs leading-relaxed mx-auto lg:mx-0 uppercase tracking-[0.2em]">
              One deliberate digital home.
            </p>
            <h3 className="text-xl md:text-2xl uppercase tracking-normal whitespace-nowrap flex items-center justify-center lg:justify-start gap-1.5">
              <span className="font-sans font-black text-white">BEAR </span>
              <span className="text-zinc-400 italic font-serif font-bold lowercase">builds web</span>
            </h3>
          </div>

          {/* Right Side: Stamped Tag Email & Tactile Control */}
          <div className="w-full lg:w-auto flex flex-col items-center lg:flex-row lg:items-center justify-center lg:justify-end gap-3.5 sm:gap-4">
            
            {/* Tactile Push-Button: Subtle Gunmetal / Antique Brass Bevel */}
            <button 
              onClick={copyEmail}
              className="order-1 lg:order-2 relative p-[2px] rounded-xl bg-gradient-to-b from-[#4B4E57] via-[#2F323A] to-[#18191E] shadow-[0_4px_8px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.18)] hover:from-[#646875] hover:via-[#3C404B] hover:to-[#22242B] group active:translate-y-0.5 transition-all duration-150 cursor-pointer shrink-0"
              title="Copy email to clipboard"
              aria-label="Copy email to clipboard"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[9.5px] bg-gradient-to-b from-[#1F2127] via-[#141519] to-[#0D0E11] border border-white/10 flex items-center justify-center text-zinc-300 shadow-[inset_0_2px_2px_rgba(255,255,255,0.12),inset_0_-2px_4px_rgba(0,0,0,0.85)] group-hover:text-white transition-colors">
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                    >
                      <Check className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-amber-300" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                    >
                      <Copy className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-zinc-300 group-hover:text-white transition-colors" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Subdued Toast Tooltip */}
              <AnimatePresence>
                {copied && (
                  <motion.span
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: -42, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 px-3 py-1 bg-[#1A1C22] border border-white/15 text-zinc-200 text-[9.5px] font-mono uppercase tracking-wider rounded-sm shadow-2xl whitespace-nowrap pointer-events-none z-10"
                  >
                    Copied Email!
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Stamped Leather / Embossed Metal Tag for Email Address */}
            <a 
              href="mailto:hello@bearbuildsweb.co.za"
              className="order-2 lg:order-1 group relative inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-gradient-to-b from-[#1A1C22]/90 via-[#131418] to-[#0C0D10] border border-white/15 shadow-[inset_0_2px_4px_rgba(0,0,0,0.85),0_6px_16px_rgba(0,0,0,0.5),inset_0_-1px_1px_rgba(255,255,255,0.06)] hover:border-white/30 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Subtle Texture Grain Underlay */}
              <img 
                src={wornLeatherImg} 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay pointer-events-none" 
              />

              {/* Left Brass Hardware Pin Rivet */}
              <div className="mr-3 sm:mr-4.5 hidden xs:block opacity-60">
                <BrassHardwarePin size={8} />
              </div>

              {/* Clean, Non-Clashing Off-White Embossed Typography */}
              <span className="relative z-10 font-sans font-bold text-sm sm:text-base md:text-xl lg:text-2xl text-zinc-200 tracking-wider sm:tracking-[0.14em] select-all break-all sm:break-normal [text-shadow:_0_1px_2px_rgba(0,0,0,0.95)] group-hover:text-white transition-colors">
                HELLO@BEARBUILDSWEB.CO.ZA
              </span>

              {/* Right Brass Hardware Pin Rivet */}
              <div className="ml-3 sm:ml-4.5 hidden xs:block opacity-60">
                <BrassHardwarePin size={8} />
              </div>
            </a>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* Subtle Antique Brass Inlay Divider Strip                                  */}
        {/* ========================================================================= */}
        <div className="relative w-full my-10 sm:my-12">
          {/* Routed Channel Groove */}
          <div className="w-full h-[4px] rounded-full bg-[#08090C] shadow-[inset_0_2px_3px_rgba(0,0,0,0.95),0_1px_1px_rgba(255,255,255,0.05)] flex items-center px-1">
            {/* Polished Subtle Brass Inlay Ribbon */}
            <div className="w-full h-[1.5px] rounded-full bg-gradient-to-r from-transparent via-[#C29B38]/40 via-[#E5C158]/65 via-[#A17C26]/30 to-transparent shadow-[0_0_8px_rgba(194,155,56,0.2)] relative">
              {/* Soft Specular Highlight */}
              <div className="absolute inset-x-0 top-0 h-[0.5px] bg-white/40" />
            </div>
          </div>

          {/* Flush Countersunk Brass Inlay Alignment Pins */}
          <div className="absolute top-1/2 left-4 sm:left-10 -translate-y-1/2 opacity-50">
            <BrassHardwarePin size={8} />
          </div>
          <div className="absolute top-1/2 right-4 sm:right-10 -translate-y-1/2 opacity-50">
            <BrassHardwarePin size={8} />
          </div>
        </div>

        {/* Bottom Bar: Tactile Up-Arrow Button, Copyright & Review Link */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Tactile Push-Button: Subtle Gunmetal / Antique Brass Bevel for Scroll to Top */}
          <button 
            onClick={scrollToTop}
            className="relative p-[2px] rounded-xl bg-gradient-to-b from-[#4B4E57] via-[#2F323A] to-[#18191E] shadow-[0_4px_8px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.18)] hover:from-[#646875] hover:via-[#3C404B] hover:to-[#22242B] group active:translate-y-0.5 transition-all duration-150 cursor-pointer shrink-0"
            title="Back to top"
            aria-label="Scroll back to top"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[9.5px] bg-gradient-to-b from-[#1F2127] via-[#141519] to-[#0D0E11] border border-white/10 flex items-center justify-center text-zinc-300 shadow-[inset_0_2px_2px_rgba(255,255,255,0.12),inset_0_-2px_4px_rgba(0,0,0,0.85)] group-hover:text-white transition-colors">
              <ArrowUp className="w-4 h-4 sm:w-4.5 sm:h-4.5 group-hover:scale-110 transition-transform" />
            </div>
          </button>

          <span className="text-[11px] sm:text-[12px] font-sans font-normal text-zinc-400 uppercase tracking-wider text-center antialiased">
            © 2026 Bear Builds Web. YOUR TOOLS. ONE PLACE.
          </span>

          <a
            href="#testimonial"
            className="text-[10px] sm:text-[11px] font-mono text-zinc-400 hover:text-zinc-200 transition-colors uppercase tracking-widest underline decoration-white/20 underline-offset-4"
          >
            Review Bear
          </a>
        </div>

      </div>
    </footer>
  );
}
