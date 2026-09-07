import React, { useState } from "react";
import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { ServiceItem } from "../types";

const services: ServiceItem[] = [
  {
    id: "photographer",
    focus: "FOCUS 01",
    title: "Photographer",
    quote: "“Spend less time quoting. More time shooting.”",
    approach:
      "Showcase your photography beautifully, give clients the confidence to choose you, and make booking effortless.",
    theme: "light",
  },
  {
    id: "makeup",
    focus: "FOCUS 02",
    title: "Makeup Artist",
    quote: "“Less time replying. More time applying.”",
    approach:
      "A bespoke home for your artistry — designed to showcase your signature work and guide the right clients naturally towards booking.",
    theme: "dark",
  },
  {
    id: "landscaper",
    focus: "FOCUS 03",
    title: "Landscaper",
    quote: "“Less time answering enquiries. More time transforming gardens.”",
    approach:
      "A booking platform that explains your services, captures job requests, and schedules site visits—so you're working outside instead of replying inside.",
    theme: "light",
  },
];

export default function WhoIHelp() {
  // Collapsed by default across all viewports; only the clicked card expands
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="who-i-help" className="bg-brand-bg py-24 px-6 lg:px-16 border-b border-brand-text/10 scroll-mt-10">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header Tag */}
        <div>
          <span className="font-mono text-[10px] font-black text-brand-accent tracking-[0.2em] uppercase block">
            CLIENTS I WORK WITH
          </span>
        </div>

        {/* Ungrouped Services Grid with independent card heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {services.map((service, index) => {
            const isExpanded = expandedId === service.id;
            const isDark = service.theme === "dark";

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                onClick={() => toggleService(service.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleService(service.id);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={isExpanded}
                aria-label={`${service.title}: ${isExpanded ? "Collapse" : "Expand"} details`}
                className={`h-auto self-start border-2 border-brand-text p-6 md:p-7 transition-all duration-300 cursor-pointer select-none group flex flex-col focus:outline-none focus:ring-2 focus:ring-brand-accent ${
                  isDark
                    ? "bg-[#1A1A1A] text-white shadow-[6px_6px_0px_0px_#A67C52] hover:shadow-[8px_8px_0px_0px_#A67C52]"
                    : "bg-white text-brand-text shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] hover:shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]"
                }`}
              >
                <div className="flex flex-col">
                  {/* Top utility row: Focus tag on left, Collapse action on right */}
                  <div className="flex justify-between items-center h-7 mb-3">
                    <span className="font-mono text-[9px] tracking-widest text-brand-accent font-black uppercase">
                      {service.focus}
                    </span>

                    <div className="flex items-center gap-2">
                      <span
                        className={`font-mono text-[9px] uppercase tracking-wider transition-colors duration-200 hidden sm:inline ${
                          isDark
                            ? "text-white/40 group-hover:text-brand-accent"
                            : "text-brand-text/40 group-hover:text-brand-accent"
                        }`}
                      >
                        {isExpanded ? "[ Collapse ]" : "[ Expand ]"}
                      </span>
                      <div
                        className={`w-7 h-7 border flex items-center justify-center transition-all duration-300 ${
                          isDark
                            ? "border-white/10 bg-white/5 group-hover:bg-brand-accent group-hover:text-white"
                            : "border-brand-text/20 bg-brand-bg/50 group-hover:bg-brand-accent group-hover:text-white"
                        }`}
                      >
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          {isExpanded ? (
                            <Minus className="w-3.5 h-3.5" />
                          ) : (
                            <Plus className="w-3.5 h-3.5" />
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Title row with standardized minimum height */}
                  <div className="min-h-[3.25rem] md:min-h-[3.75rem] flex items-start mb-3">
                    <h3
                      className={`font-display font-black text-2xl md:text-3xl uppercase tracking-[0.06em] leading-tight ${
                        isDark ? "text-white" : "text-brand-text"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Quote row with compact standardized height matching top padding */}
                  <div className="min-h-[3.75rem] sm:min-h-[4rem] lg:min-h-[4.25rem] flex items-start">
                    <p
                      className={`font-serif italic font-medium text-base sm:text-lg md:text-xl leading-[1.38] tracking-[0.015em] antialiased ${
                        isDark ? "text-[#FAF8F5]/90" : "text-[#1A1A1A]/85"
                      }`}
                    >
                      {service.quote}
                    </p>
                  </div>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0,
                    marginTop: isExpanded ? 24 : 0,
                  }}
                  transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                  className="overflow-hidden"
                >
                  <div className={`border-t pt-4 flex flex-col ${isDark ? "border-white/10" : "border-brand-text/10"}`}>
                    <span className="font-black font-mono text-[9px] text-brand-accent uppercase tracking-widest block mb-2">
                      BEAR'S APPROACH
                    </span>
                    <p
                      className={`text-xs font-semibold leading-relaxed p-4 border-l-2 border-brand-accent font-sans min-h-[5.5rem] flex items-center ${
                        isDark ? "text-white/95 bg-white/5" : "text-brand-text/95 bg-brand-accent/5"
                      }`}
                    >
                      {service.approach}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
