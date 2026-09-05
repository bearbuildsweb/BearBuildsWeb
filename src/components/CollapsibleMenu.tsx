import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";

interface CollapsibleMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onWhoIHelpClick: () => void;
}

export default function CollapsibleMenu({
  isOpen,
  onClose,
  onWhoIHelpClick,
}: CollapsibleMenuProps) {
  // Prevent scrolling and close on Escape key when open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const whatsappUrl = `https://wa.me/27680246914?text=${encodeURIComponent(
    "Hi Bear, I’d like to chat about a website."
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Subtle Dim Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#1A1A1A]/60 backdrop-blur-xs cursor-pointer"
            aria-label="Close menu backdrop"
          />

          {/* Slide-in Drawer with Editorial Aesthetic */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="absolute top-0 right-0 bottom-0 w-full max-w-xs sm:max-w-sm bg-[#FAF8F5] text-[#1A1A1A] border-l-2 border-[#1A1A1A] shadow-[-8px_0px_25px_rgba(26,26,26,0.18)] flex flex-col justify-between p-6 sm:p-8 select-none"
          >
            {/* Header: Logo & Close Button */}
            <div className="flex items-center justify-between pb-6 border-b border-[#1A1A1A]/15">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white text-sm shadow-xs">
                  <span>🐻</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[11px] font-black tracking-widest text-[#1A1A1A] uppercase leading-tight">
                    BEAR BUILDS WEB
                  </span>
                  <span className="font-mono text-[8.5px] font-bold tracking-wider text-[#8C6D46] uppercase">
                    NAVIGATION
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full border border-[#1A1A1A]/20 bg-white hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] transition-all duration-200 flex items-center justify-center cursor-pointer shadow-xs"
                title="Close menu"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Menu Items: Exactly 1 item "Clients I work with" */}
            <div className="flex-1 py-10 flex flex-col justify-center">
              <span className="font-mono text-[9px] font-black uppercase tracking-[0.2em] text-[#8C6D46] block mb-3">
                EXPLORE
              </span>
              <button
                onClick={() => {
                  onClose();
                  onWhoIHelpClick();
                }}
                className="w-full text-left font-display font-black text-3xl sm:text-4xl text-[#1A1A1A] hover:text-[#8C6D46] uppercase tracking-tight py-4 border-b-2 border-[#1A1A1A]/10 hover:border-[#8C6D46] flex items-center justify-between group cursor-pointer transition-all duration-200"
              >
                <span>Clients I work with</span>
                <ArrowRight className="w-6 h-6 text-[#8C6D46] transform group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

            {/* Footer of the Collapsible Menu: CTA for WhatsApp */}
            <div className="pt-6 border-t border-[#1A1A1A]/15 space-y-2.5">
              <span className="font-mono text-[9px] font-black uppercase tracking-[0.2em] text-[#8C6D46] block">
                GET IN TOUCH
              </span>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="group relative flex items-center justify-between w-full bg-[#1A1A1A] hover:bg-[#8C6D46] text-white border-2 border-[#1A1A1A] p-4 shadow-[4px_4px_0px_0px_#8C6D46] hover:shadow-[6px_6px_0px_0px_#1A1A1A] transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="font-mono text-[11px] font-black tracking-widest uppercase block text-white">
                      CHAT ON WHATSAPP
                    </span>
                    <span className="font-sans text-[10px] text-white/70 block">
                      Direct with Bear
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/80 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
