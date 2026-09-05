import React from "react";
import { motion, AnimatePresence } from "motion/react";

interface WhatsAppWidgetProps {
  isHidden?: boolean;
}

export default function WhatsAppWidget({ isHidden = false }: WhatsAppWidgetProps) {
  // Pre-filled WhatsApp message
  const whatsappUrl = `https://wa.me/27680246914?text=${encodeURIComponent(
    "Hi Bear, I’d like to chat about a website."
  )}`;

  return (
    <AnimatePresence>
      {!isHidden && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.94 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 select-none"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2.5 sm:gap-3 bg-[#FAF8F5] hover:bg-[#FFFFFF] border-2 border-[#1A1A1A] px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xs shadow-[3.5px_3.5px_0px_0px_#1A1A1A] hover:shadow-[5px_5px_0px_0px_#8C6D46] -rotate-[1deg] hover:rotate-0 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            aria-label="Talk to Bear on WhatsApp"
          >
            {/* Subtle Pinned Washi Tape Accent at Top */}
            <div className="absolute -top-2 left-6 sm:left-8 w-8 sm:w-10 h-2.5 bg-[#E2D8C7]/90 border-x border-[#1A1A1A]/15 shadow-xs -rotate-2 group-hover:rotate-0 transition-transform duration-300 pointer-events-none" />

            {/* Understated Editorial WhatsApp Icon Capsule */}
            <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#1A1A1A]/5 border border-[#1A1A1A]/20 flex items-center justify-center text-[#1A1A1A] group-hover:text-[#8C6D46] group-hover:border-[#8C6D46]/40 transition-colors shrink-0">
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current transition-transform duration-300 group-hover:scale-105"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.886-9.884 9.886m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
              </svg>

              {/* Understated Live Status Pip */}
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#8C6D46] border border-[#FAF8F5]" />
            </div>

            {/* Editorial Text Slot with Animated Hover Reveal */}
            <div className="relative overflow-hidden h-4 flex items-center pr-0.5">
              {/* Default Label (desktop + mobile) */}
              <span className="font-mono text-[9.5px] sm:text-[10px] font-black uppercase tracking-[0.16em] text-[#1A1A1A] transition-all duration-300 group-hover:-translate-y-5 group-hover:opacity-0 flex items-center gap-1.5 whitespace-nowrap">
                TALK TO BEAR
              </span>

              {/* Hover Label (revealed on desktop hover) */}
              <span className="absolute inset-0 font-mono text-[9.5px] sm:text-[10px] font-black uppercase tracking-[0.16em] text-[#8C6D46] transition-all duration-300 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 flex items-center gap-1 whitespace-nowrap">
                <span>MESSAGE BEAR</span>
                <span className="font-sans font-bold text-xs">→</span>
              </span>
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
