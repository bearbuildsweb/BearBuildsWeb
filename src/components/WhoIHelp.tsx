import React, { useState } from "react";
import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";

export default function WhoIHelp() {
  const [creativeExpanded, setCreativeExpanded] = useState<string | null>(null);
  const [serviceExpanded, setServiceExpanded] = useState<string | null>(null);

  const toggleCreative = (id: string) => {
    setCreativeExpanded((prev) => (prev === id ? null : id));
  };

  const toggleService = (id: string) => {
    setServiceExpanded((prev) => (prev === id ? null : id));
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

        {/* Two Parent Category Panels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* CATEGORY 01: CREATIVE PROFESSIONALS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-brand-bg border-2 border-brand-text p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] space-y-6 relative"
          >
            {/* Category Header */}
            <div className="space-y-2 border-b border-brand-text/15 pb-6">
              <span className="font-mono text-[10px] tracking-widest text-brand-accent font-black uppercase block">
                CATEGORY 01
              </span>
              <h3 className="font-display font-black text-2xl md:text-3xl text-brand-text uppercase tracking-tight">
                CREATIVE PROFESSIONALS
              </h3>
              <p className="font-serif font-bold italic text-base text-brand-text/80 leading-snug">
                Build a booking experience that lets your work sell itself.
              </p>
            </div>

            {/* Profession Cards Stack */}
            <div className="space-y-4">
              
              {/* Photographer */}
              {(() => {
                const isExpanded = creativeExpanded === "photographer";
                return (
                  <div
                    onClick={() => toggleCreative("photographer")}
                    className="bg-white text-brand-text border-2 border-brand-text p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] transition-all duration-300 cursor-pointer select-none group"
                  >
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <div>
                        <span className="font-mono text-[9px] tracking-widest text-brand-accent font-black uppercase block mb-1">
                          FOCUS 01
                        </span>
                        <h4 className="font-display font-black text-xl md:text-2xl text-brand-text uppercase tracking-tight">
                          Photographer
                        </h4>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="font-mono text-[9px] text-brand-text/40 uppercase tracking-wider group-hover:text-brand-accent transition-colors duration-200 hidden sm:inline">
                          {isExpanded ? "[ Collapse ]" : "[ Expand ]"}
                        </span>
                        <div className="w-7 h-7 border border-brand-text/20 flex items-center justify-center bg-brand-bg/50 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
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

                    <p className="font-serif font-bold italic text-sm md:text-base text-brand-text leading-tight">
                      "Spend less time quoting. More time shooting."
                    </p>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isExpanded ? "auto" : 0,
                        opacity: isExpanded ? 1 : 0,
                        marginTop: isExpanded ? 16 : 0,
                      }}
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-brand-text/10 pt-4">
                        <span className="font-black font-mono text-[9px] text-brand-accent uppercase tracking-widest block mb-1.5">
                          BEAR'S APPROACH
                        </span>
                        <p className="text-brand-text/95 text-xs font-semibold leading-relaxed bg-brand-accent/5 p-3.5 border-l-2 border-brand-accent font-sans">
                          A booking platform that answers common questions, showcases your portfolio, and lets clients book while you're out creating your next masterpiece.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                );
              })()}

              {/* Makeup Artist */}
              {(() => {
                const isExpanded = creativeExpanded === "makeup";
                return (
                  <div
                    onClick={() => toggleCreative("makeup")}
                    className="bg-[#1A1A1A] text-white border-2 border-brand-text p-5 md:p-6 shadow-[4px_4px_0px_0px_#A67C52] hover:shadow-[6px_6px_0px_0px_#A67C52] transition-all duration-300 cursor-pointer select-none group"
                  >
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <div>
                        <span className="font-mono text-[9px] tracking-widest text-brand-accent font-black uppercase block mb-1">
                          FOCUS 02
                        </span>
                        <h4 className="font-display font-black text-xl md:text-2xl text-white uppercase tracking-tight">
                          Makeup Artist
                        </h4>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="font-mono text-[9px] text-white/40 uppercase tracking-wider group-hover:text-brand-accent transition-colors duration-200 hidden sm:inline">
                          {isExpanded ? "[ Collapse ]" : "[ Expand ]"}
                        </span>
                        <div className="w-7 h-7 border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
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

                    <p className="font-serif font-bold italic text-sm md:text-base text-white leading-tight">
                      "Less time replying. More time applying."
                    </p>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isExpanded ? "auto" : 0,
                        opacity: isExpanded ? 1 : 0,
                        marginTop: isExpanded ? 16 : 0,
                      }}
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/10 pt-4">
                        <span className="font-black font-mono text-[9px] text-brand-accent uppercase tracking-widest block mb-1.5">
                          BEAR'S APPROACH
                        </span>
                        <p className="text-white/95 text-xs font-semibold leading-relaxed bg-white/5 p-3.5 border-l-2 border-brand-accent font-sans">
                          One place for your services, pricing, availability, and bookings—so your clients get answers, and you get your time back.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                );
              })()}

            </div>
          </motion.div>

          {/* CATEGORY 02: SERVICE PROFESSIONALS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-brand-bg border-2 border-brand-text p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] space-y-6 relative"
          >
            {/* Category Header */}
            <div className="space-y-2 border-b border-brand-text/15 pb-6">
              <span className="font-mono text-[10px] tracking-widest text-brand-accent font-black uppercase block">
                CATEGORY 02
              </span>
              <h3 className="font-display font-black text-2xl md:text-3xl text-brand-text uppercase tracking-tight">
                SERVICE PROFESSIONALS
              </h3>
              <p className="font-serif font-bold italic text-base text-brand-text/80 leading-snug">
                Built for businesses where every missed call is a missed booking.
              </p>
            </div>

            {/* Profession Cards Stack */}
            <div className="space-y-4">
              
              {/* Mobile Physiotherapist */}
              {(() => {
                const isExpanded = serviceExpanded === "physio";
                return (
                  <div
                    onClick={() => toggleService("physio")}
                    className="bg-white text-brand-text border-2 border-brand-text p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] transition-all duration-300 cursor-pointer select-none group"
                  >
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <div>
                        <span className="font-mono text-[9px] tracking-widest text-brand-accent font-black uppercase block mb-1">
                          FOCUS 03
                        </span>
                        <h4 className="font-display font-black text-xl md:text-2xl text-brand-text uppercase tracking-tight">
                          Mobile Physiotherapist
                        </h4>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="font-mono text-[9px] text-brand-text/40 uppercase tracking-wider group-hover:text-brand-accent transition-colors duration-200 hidden sm:inline">
                          {isExpanded ? "[ Collapse ]" : "[ Expand ]"}
                        </span>
                        <div className="w-7 h-7 border border-brand-text/20 flex items-center justify-center bg-brand-bg/50 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
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

                    <p className="font-serif font-bold italic text-sm md:text-base text-brand-text leading-tight">
                      "The only thing you should be chasing is recovery—not missed calls."
                    </p>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isExpanded ? "auto" : 0,
                        opacity: isExpanded ? 1 : 0,
                        marginTop: isExpanded ? 16 : 0,
                      }}
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-brand-text/10 pt-4">
                        <span className="font-black font-mono text-[9px] text-brand-accent uppercase tracking-widest block mb-1.5">
                          BEAR'S APPROACH
                        </span>
                        <p className="text-brand-text/95 text-xs font-semibold leading-relaxed bg-brand-accent/5 p-3.5 border-l-2 border-brand-accent font-sans">
                          A booking platform that keeps appointments moving while you focus on the patient in front of you.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                );
              })()}

              {/* Landscaper */}
              {(() => {
                const isExpanded = serviceExpanded === "landscaper";
                return (
                  <div
                    onClick={() => toggleService("landscaper")}
                    className="bg-[#1A1A1A] text-white border-2 border-brand-text p-5 md:p-6 shadow-[4px_4px_0px_0px_#A67C52] hover:shadow-[6px_6px_0px_0px_#A67C52] transition-all duration-300 cursor-pointer select-none group"
                  >
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <div>
                        <span className="font-mono text-[9px] tracking-widest text-brand-accent font-black uppercase block mb-1">
                          FOCUS 04
                        </span>
                        <h4 className="font-display font-black text-xl md:text-2xl text-white uppercase tracking-tight">
                          Landscaper
                        </h4>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="font-mono text-[9px] text-white/40 uppercase tracking-wider group-hover:text-brand-accent transition-colors duration-200 hidden sm:inline">
                          {isExpanded ? "[ Collapse ]" : "[ Expand ]"}
                        </span>
                        <div className="w-7 h-7 border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
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

                    <p className="font-serif font-bold italic text-sm md:text-base text-white leading-tight">
                      "Less time answering enquiries. More time transforming gardens."
                    </p>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isExpanded ? "auto" : 0,
                        opacity: isExpanded ? 1 : 0,
                        marginTop: isExpanded ? 16 : 0,
                      }}
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/10 pt-4">
                        <span className="font-black font-mono text-[9px] text-brand-accent uppercase tracking-widest block mb-1.5">
                          BEAR'S APPROACH
                        </span>
                        <p className="text-white/95 text-xs font-semibold leading-relaxed bg-white/5 p-3.5 border-l-2 border-brand-accent font-sans">
                          A booking platform that explains your services, captures job requests, and schedules site visits—so you're working outside instead of replying inside.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                );
              })()}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

