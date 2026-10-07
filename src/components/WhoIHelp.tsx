import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ServiceItem } from "../types";

const services: ServiceItem[] = [
  {
    id: "focus-01",
    focus: "FOCUS 01",
    subheading: "Turn interest into better enquiries.",
    paragraph:
      "Give potential clients a clear path from discovering your work to making an enquiry — with the right questions asked upfront, so you spend more time with serious prospects.",
    theme: "light",
  },
  {
    id: "focus-02",
    focus: "FOCUS 02",
    subheading: "Bring your scattered platforms into one hub",
    paragraph:
      "Bring your portfolio ° enquiries ° reviews ° gallery gateway together under one roof — giving clients one clear, consistent place to experience your brand.",
    theme: "dark",
  },
];

export default function WhoIHelp() {
  // Focus 02 is expanded by default; Focus 01 is collapsed by default.
  // Expanding one collapses the other and vice versa.
  const [activeFocusId, setActiveFocusId] = useState<string | null>("focus-02");

  // Automatically activate focus-02 if navigated to from menu or hero
  useEffect(() => {
    const handleExpand = () => {
      if (!activeFocusId) {
        setActiveFocusId("focus-02");
      }
    };
    window.addEventListener("expand-who-i-help", handleExpand);
    return () => window.removeEventListener("expand-who-i-help", handleExpand);
  }, [activeFocusId]);

  const toggleFocus = (id: string) => {
    // Expanding one collapses the other and vice versa
    setActiveFocusId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="who-i-help"
      className="bg-brand-bg py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-16 border-b border-[#18181B]/10 scroll-mt-10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Editorial Section Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#18181B]/12">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse shrink-0" />
            <span className="font-mono text-[10px] sm:text-[11px] font-black text-brand-accent tracking-[0.2em] uppercase block">
              A BETTER CLIENT JOURNEY
            </span>
          </div>
        </div>

        {/* Section Body */}
        <div className="pt-2">
          {/* Mutual Accordion Dossier Grid:
              One card is expanded by default; clicking the other collapses the active one and expands the selected one */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
            {services.map((service) => {
              const isDark = service.theme === "dark";
              const isExpanded = activeFocusId === service.id;

              return (
                <motion.div
                  key={service.id}
                  layout
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => !isExpanded && toggleFocus(service.id)}
                  className={`group relative rounded-2xl border transition-all duration-300 select-none overflow-hidden ${
                    !isExpanded ? "cursor-pointer hover:-translate-y-0.5" : ""
                  } ${
                    isDark
                      ? isExpanded
                        ? "bg-[#161719] text-white border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5),0_2px_4px_rgba(0,0,0,0.2)]"
                        : "bg-[#18191B]/95 text-white/80 border-white/10 hover:border-white/25 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.35)]"
                      : isExpanded
                      ? "bg-[#FAF8F5] text-brand-text border-[#18181B]/20 shadow-[0_25px_60px_-15px_rgba(24,24,27,0.09),0_1px_3px_rgba(24,24,27,0.03)]"
                      : "bg-[#FAF8F5]/90 text-brand-text/80 border-[#18181B]/10 hover:border-[#18181B]/25 shadow-[0_4px_20px_rgba(24,24,27,0.03)] hover:shadow-[0_10px_28px_rgba(24,24,27,0.07)]"
                  }`}
                >
                  {/* Subtle Archival Corner Registration Marks */}
                  <span className="absolute top-2.5 left-2.5 font-mono text-[8px] opacity-20 pointer-events-none select-none">
                    +
                  </span>
                  <span className="absolute top-2.5 right-2.5 font-mono text-[8px] opacity-20 pointer-events-none select-none">
                    +
                  </span>
                  <span className="absolute bottom-2.5 left-2.5 font-mono text-[8px] opacity-20 pointer-events-none select-none">
                    +
                  </span>
                  <span className="absolute bottom-2.5 right-2.5 font-mono text-[8px] opacity-20 pointer-events-none select-none">
                    +
                  </span>

                  {/* Editorial Archival Plate Inset Frame */}
                  <div className="p-6 sm:p-8 lg:p-9 relative">
                    {/* Top Utility Header Row */}
                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-current/10">
                      {/* Left: Focus Label */}
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-mono text-[10px] tracking-[0.2em] font-black uppercase ${
                            isDark ? "text-zinc-300" : "text-brand-accent"
                          }`}
                        >
                          {service.focus}
                        </span>
                      </div>

                      {/* Right: Architectural Accordion Toggle Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFocus(service.id);
                        }}
                        aria-expanded={isExpanded}
                        aria-label={`${isExpanded ? "Collapse" : "Expand"} ${service.focus}`}
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border font-mono text-[9px] font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                          isDark
                            ? isExpanded
                              ? "bg-white/15 border-white/30 text-white hover:bg-white/20"
                              : "bg-white/5 border-white/15 text-white/70 hover:bg-white/10 hover:text-white"
                            : isExpanded
                            ? "bg-[#18181B]/10 border-[#18181B]/20 text-[#18181B] hover:bg-[#18181B]/15"
                            : "bg-[#18181B]/5 border-[#18181B]/10 text-[#18181B]/70 hover:bg-[#18181B]/10 hover:text-[#18181B]"
                        }`}
                      >
                        <span>{isExpanded ? "COLLAPSE" : "EXPAND"}</span>
                        <span className="font-mono text-[10px] leading-none">
                          {isExpanded ? "−" : "+"}
                        </span>
                      </button>
                    </div>

                    {/* Subheading: Interactive Title */}
                    <div
                      onClick={(e) => {
                        if (isExpanded) {
                          e.stopPropagation();
                          toggleFocus(service.id);
                        }
                      }}
                      className={`w-full text-left transition-opacity duration-200 ${
                        isExpanded ? "cursor-pointer" : ""
                      }`}
                    >
                      <h3
                        className={`font-sans font-bold text-2xl sm:text-[26px] lg:text-[28px] leading-snug tracking-tight mb-3 antialiased transition-colors duration-200 ${
                          isDark
                            ? isExpanded
                              ? "text-white"
                              : "text-zinc-200 group-hover:text-white"
                            : isExpanded
                            ? "text-[#18181B]"
                            : "text-[#18181B]/85 group-hover:text-[#18181B]"
                        }`}
                      >
                        {service.subheading}
                      </h3>
                    </div>

                    {/* Collapsible Card Paragraph:
                        Opens smoothly on the active focus, collapses smoothly on the other */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key={`paragraph-${service.id}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-2 pb-1">
                            <p
                              className={`font-sans text-sm sm:text-base leading-relaxed antialiased ${
                                isDark ? "text-zinc-300" : "text-[#18181B]/85"
                              }`}
                            >
                              {service.paragraph}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Collapsed Invitation Cue */}
                    {!isExpanded && (
                      <div className="pt-2 flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                        <span>[ CLICK TO UNPACK ]</span>
                        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    )}

                    {/* Card Footer: STATUS: UNPACKED when expanded */}
                    {isExpanded && (
                      <div className="mt-6 pt-3.5 border-t border-current/10 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isDark ? "bg-white/60" : "bg-brand-accent"
                            } shrink-0`}
                            aria-hidden="true"
                          />
                          <span className="font-mono text-[9px] uppercase tracking-widest opacity-50 font-bold">
                            STATUS: UNPACKED
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
