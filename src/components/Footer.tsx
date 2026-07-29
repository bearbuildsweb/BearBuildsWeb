import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Copy, Check, ArrowUp, Linkedin } from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("bearbuildsweb@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1A1A1A] text-[#FDFCF9] py-16 px-6 lg:px-16 border-t-2 border-brand-text relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
        
        {/* Left Side: Logo, Navigation & Professional Presence */}
        <div className="space-y-6 w-full lg:w-auto text-center lg:text-left">
          <div className="space-y-2">
            <h3 className="font-display font-black text-xl md:text-2xl tracking-tighter uppercase text-white whitespace-nowrap">
              bear <span className="text-brand-accent italic font-serif font-semibold lowercase">builds web</span>
            </h3>
            <p className="font-sans text-xs text-white/50 max-w-xs leading-relaxed mx-auto lg:mx-0">
              Your website shouldn't just look good. It should take work off your plate.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 font-sans text-[10px] uppercase font-black tracking-widest text-white/60">
            <a href="#who-i-help" className="hover:text-brand-accent transition-colors">Clients I Work With</a>
            <a href="#process" className="hover:text-brand-accent transition-colors">Work with Bear</a>
          </nav>

          <div className="pt-2 space-y-2">
            <span className="font-mono text-[9px] uppercase font-black tracking-widest text-brand-accent block">
              PROFESSIONAL PRESENCE
            </span>
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-y-2.5 sm:gap-x-6 font-sans text-[10px] uppercase font-black tracking-widest text-white/60">
              <a 
                href="https://www.linkedin.com/in/albert-moemedi-leeu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-brand-accent transition-colors group"
              >
                <Linkedin className="w-3.5 h-3.5 text-white/60 group-hover:text-brand-accent transition-colors shrink-0" />
                <span>LINKEDIN</span>
              </a>
              <a 
                href="https://wa.me/27680246914" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-brand-accent transition-colors group"
              >
                <svg 
                  className="w-3.5 h-3.5 text-white/60 group-hover:text-brand-accent transition-colors shrink-0" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Big prominent Email Action matching collage */}
        <div className="w-full lg:w-auto flex flex-col items-center lg:items-end gap-4 overflow-hidden">
          <span className="font-mono text-[9px] uppercase font-black tracking-widest text-brand-accent">
            START A DISCUSSION
          </span>

          <div className="relative group flex items-center justify-center lg:justify-end gap-2 sm:gap-3 max-w-full">
            <a 
              href="mailto:bearbuildsweb@gmail.com"
              className="font-display font-black text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white hover:text-brand-accent transition-colors tracking-tighter select-all break-all sm:break-normal text-center lg:text-right"
            >
              BEARBUILDSWEB@GMAIL.COM
            </a>

            <button 
              onClick={copyEmail}
              className="p-2.5 rounded-none bg-white/5 hover:bg-brand-accent border border-white/10 hover:border-brand-accent text-white/60 hover:text-white transition-all cursor-pointer relative shrink-0"
              title="Copy email to clipboard"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                  >
                    <Check className="w-4 h-4 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                  >
                    <Copy className="w-4 h-4 text-white/80" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Toast tooltip */}
              <AnimatePresence>
                {copied && (
                  <motion.span
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: -35, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 px-2.5 py-1 bg-brand-accent text-white text-[9px] font-mono uppercase tracking-wider rounded-none shadow-lg whitespace-nowrap pointer-events-none"
                  >
                    Copied Email!
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Socials & Back to top button */}
          <div className="flex flex-col items-center lg:items-end gap-2 mt-2 w-full">
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2 sm:gap-4 w-full">
              <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest text-center lg:text-right">
                © 2026 Bear Builds Web. Less admin. More appointments. 🐻
              </span>
              <span className="text-white/10 hidden sm:inline">|</span>
              <button 
                onClick={scrollToTop}
                className="p-2.5 rounded-none bg-white/5 hover:bg-brand-accent hover:text-white border border-white/10 hover:border-brand-accent transition-all text-white/60 cursor-pointer shrink-0"
                title="Back to top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
