import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Copy, Check, ArrowUp } from "lucide-react";

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
    <footer id="contact" className="bg-[#18181B] text-[#F4F5F7] py-16 px-6 lg:px-16 border-t-2 border-brand-text relative overflow-hidden scroll-mt-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
        
        {/* Left Side: Logo & Description */}
        <div className="space-y-2 w-full lg:w-72 text-center lg:text-left">
          <p className="font-sans text-xs text-white/50 max-w-xs leading-relaxed mx-auto lg:mx-0">
            One deliberate digital home.
          </p>
          <h3 className="text-xl md:text-2xl uppercase tracking-normal whitespace-nowrap">
            <span className="font-sans font-black text-white">BEAR </span>
            <span className="text-[#A1A1AA] italic font-serif font-bold lowercase">builds web</span>
          </h3>
        </div>

        {/* Right Side: Email Action */}
        <div className="w-full lg:w-auto flex flex-col items-center lg:items-end gap-4 overflow-hidden">
          <span className="font-mono text-[9px] uppercase font-black tracking-widest text-zinc-400">
            FOR A MORE FORMAL INTRODUCTION
          </span>

          <div className="relative group flex items-center justify-center lg:justify-end gap-2 sm:gap-3 max-w-full">
            <a 
              href="mailto:bearbuildsweb@gmail.com"
              className="font-sans font-extrabold text-base sm:text-xl md:text-2xl lg:text-3xl text-white/65 hover:text-white transition-colors tracking-wide select-all break-all sm:break-normal text-center lg:text-right"
            >
              BEARBUILDSWEB@GMAIL.COM
            </a>

            <button 
              onClick={copyEmail}
              className="p-2.5 rounded-none bg-white/5 hover:bg-zinc-800 border border-white/10 hover:border-zinc-500 text-white/60 hover:text-white transition-all cursor-pointer relative shrink-0"
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
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 px-2.5 py-1 bg-zinc-800 text-white text-[9px] font-mono uppercase tracking-wider rounded-none shadow-lg whitespace-nowrap pointer-events-none"
                  >
                    Copied Email!
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

      </div>

      {/* Centered Copyright & Back to Top */}
      <div className="max-w-7xl mx-auto pt-10 mt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between relative gap-4">
        <button 
          onClick={scrollToTop}
          className="p-2.5 rounded-none bg-white/5 hover:bg-zinc-800 hover:text-white border border-white/10 hover:border-zinc-500 transition-all text-white/60 cursor-pointer shrink-0"
          title="Back to top"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

        <span className="text-[11px] sm:text-[12px] font-sans font-medium text-white/60 uppercase tracking-wider text-center antialiased">
          © 2026 Bear Builds Web. YOUR TOOLS. ONE PLACE.
        </span>

        <a
          href="#testimonial"
          className="text-[10px] sm:text-[11px] font-mono text-white/50 hover:text-white transition-colors uppercase tracking-widest underline decoration-white/20 underline-offset-4"
        >
          Review Bear
        </a>
      </div>
    </footer>
  );
}
