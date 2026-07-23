import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

export default function WhoIHelp() {
  const [focus1Expanded, setFocus1Expanded] = useState(false);
  const [focus2Expanded, setFocus2Expanded] = useState(false);
  const [focus3Expanded, setFocus3Expanded] = useState(false);

  return (
    <section id="who-i-help" className="bg-brand-bg py-24 px-6 lg:px-16 border-b border-brand-text/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Grid */}
        <div className="mb-12">
          <span className="font-mono text-[10px] font-black text-brand-accent tracking-[0.2em] uppercase block">
            CLIENTS I WORK WITH
          </span>
        </div>

        {/* Three contrasting columns side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* FOCUS 01: Photographers (Light theme) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={() => setFocus1Expanded(!focus1Expanded)}
            className="bg-white text-brand-text border-2 border-brand-text p-6 lg:p-8 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] hover:shadow-[12px_12px_0px_0px_rgba(26,26,26,1)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden cursor-pointer select-none group"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] tracking-widest text-brand-accent font-black uppercase">
                    FOCUS 01
                  </span>
                  <span className="font-mono text-[9px] text-brand-text/40 uppercase tracking-wider group-hover:text-brand-accent transition-colors duration-200">
                    {focus1Expanded ? "[ Click to collapse ]" : "[ Click to expand ]"}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-none border border-brand-text/20 flex items-center justify-center bg-brand-bg/50 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  <motion.div
                    animate={{ rotate: focus1Expanded ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {focus1Expanded ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </motion.div>
                </div>
              </div>

              <div>
                <h3 className="font-display font-black text-2xl lg:text-3xl text-brand-text uppercase tracking-tighter mb-4">
                  Photographers
                </h3>
                <p className="font-serif font-bold italic text-lg lg:text-xl text-brand-text leading-tight tracking-tight">
                  "Spend less time quoting. More time shooting."
                </p>
              </div>

              {/* Collapsible Content wrapper */}
              <motion.div
                initial={false}
                animate={{
                  height: focus1Expanded ? "auto" : 0,
                  opacity: focus1Expanded ? 1 : 0,
                  marginTop: focus1Expanded ? 24 : 0
                }}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                className="overflow-hidden"
              >
                <div className="border-t border-brand-text/10 pt-6">
                  <div>
                    <span className="font-black font-mono text-[9px] text-brand-accent uppercase tracking-widest block mb-2">
                      BEAR'S APPROACH
                    </span>
                    <p className="text-brand-text/95 text-xs font-semibold leading-relaxed bg-brand-accent/5 p-4 border-l-2 border-brand-accent font-sans">
                      A booking platform that answers the common questions, showcases your portfolio, and lets clients book you while you're out creating your next masterpiece.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* FOCUS 02: Makeup Artists (Dark theme) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => setFocus2Expanded(!focus2Expanded)}
            className="bg-[#1A1A1A] text-white border-2 border-brand-text p-6 lg:p-8 shadow-[8px_8px_0px_0px_#A67C52] hover:shadow-[12px_12px_0px_0px_#A67C52] transition-all duration-300 flex flex-col justify-between relative overflow-hidden cursor-pointer select-none group"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] tracking-widest text-brand-accent font-black uppercase">
                    FOCUS 02
                  </span>
                  <span className="font-mono text-[9px] text-white/40 uppercase tracking-wider group-hover:text-brand-accent transition-colors duration-200">
                    {focus2Expanded ? "[ Click to collapse ]" : "[ Click to expand ]"}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-none border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  <motion.div
                    animate={{ rotate: focus2Expanded ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {focus2Expanded ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </motion.div>
                </div>
              </div>

              <div>
                <h3 className="font-display font-black text-2xl lg:text-3xl text-white uppercase tracking-tighter mb-4">
                  Makeup Artists
                </h3>
                <p className="font-serif font-bold italic text-lg lg:text-xl text-white leading-tight tracking-tight">
                  "Less time replying. More time applying."
                </p>
              </div>

              {/* Collapsible Content wrapper */}
              <motion.div
                initial={false}
                animate={{
                  height: focus2Expanded ? "auto" : 0,
                  opacity: focus2Expanded ? 1 : 0,
                  marginTop: focus2Expanded ? 24 : 0
                }}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                className="overflow-hidden"
              >
                <div className="border-t border-white/10 pt-6">
                  <div>
                    <span className="font-black font-mono text-[9px] text-brand-accent uppercase tracking-widest block mb-2">
                      BEAR'S APPROACH
                    </span>
                    <p className="text-white/95 text-xs font-semibold leading-relaxed bg-white/5 p-4 border-l-2 border-brand-accent font-sans">
                      One place for your services, pricing, availability, and bookings—so your clients get answers, and you get your time back.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* FOCUS 03: Mobile Physiotherapists (Light theme) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => setFocus3Expanded(!focus3Expanded)}
            className="bg-white text-brand-text border-2 border-brand-text p-6 lg:p-8 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] hover:shadow-[12px_12px_0px_0px_rgba(26,26,26,1)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden cursor-pointer select-none group"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] tracking-widest text-brand-accent font-black uppercase">
                    FOCUS 03
                  </span>
                  <span className="font-mono text-[9px] text-brand-text/40 uppercase tracking-wider group-hover:text-brand-accent transition-colors duration-200">
                    {focus3Expanded ? "[ Click to collapse ]" : "[ Click to expand ]"}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-none border border-brand-text/20 flex items-center justify-center bg-brand-bg/50 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  <motion.div
                    animate={{ rotate: focus3Expanded ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {focus3Expanded ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </motion.div>
                </div>
              </div>

              <div>
                <h3 className="font-display font-black text-2xl lg:text-3xl text-brand-text uppercase tracking-tighter mb-4">
                  Mobile Physios
                </h3>
                <p className="font-serif font-bold italic text-lg lg:text-xl text-brand-text leading-tight tracking-tight">
                  "The only thing you should be chasing is recovery—not missed calls."
                </p>
              </div>

              {/* Collapsible Content wrapper */}
              <motion.div
                initial={false}
                animate={{
                  height: focus3Expanded ? "auto" : 0,
                  opacity: focus3Expanded ? 1 : 0,
                  marginTop: focus3Expanded ? 24 : 0
                }}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                className="overflow-hidden"
              >
                <div className="border-t border-brand-text/10 pt-6">
                  <div>
                    <span className="font-black font-mono text-[9px] text-brand-accent uppercase tracking-widest block mb-2">
                      BEAR'S APPROACH
                    </span>
                    <p className="text-brand-text/95 text-xs font-semibold leading-relaxed bg-brand-accent/5 p-4 border-l-2 border-brand-accent font-sans">
                      A booking platform that keeps appointments moving while you focus on the patient in front of you.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
