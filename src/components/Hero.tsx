import React from "react";
import { motion } from "motion/react";
import { ArrowDown, Mail, Award, CheckCircle2, BadgeCheck } from "lucide-react";
// @ts-ignore
import bearPortrait from "../assets/images/heroIMG.png";

interface HeroProps {
  onContactClick: () => void;
  onWhoIHelpClick: () => void;
}

export default function Hero({ onContactClick, onWhoIHelpClick }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] bg-brand-bg px-6 lg:px-16 pt-16 pb-24 flex flex-col justify-center overflow-hidden border-b border-brand-text/10">
      {/* Subtle modern vector mesh or glow backing */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-[400px] h-[400px] bg-brand-text/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Column: Huge typography and action triggers */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-12 lg:pr-6">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-brand-text/5 border border-brand-text/10 rounded-none text-brand-text text-[10px] font-mono font-bold uppercase tracking-widest"
            >
              <span className="w-1.5 h-1.5 bg-brand-accent animate-pulse" />
              <span>Less admin. More appointments.</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-black text-5xl md:text-7xl lg:text-[80px] text-brand-text leading-[0.9] tracking-tighter uppercase"
            >
              FOR<br />
              SOLO<br />
              <span className="italic font-serif text-brand-accent lowercase font-bold">professionals</span>.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-base font-medium text-brand-text/80 max-w-xl leading-relaxed"
            >
              CPUT engineering student building smarter booking systems for appointment-based professionals who'd rather be working than managing admin.
            </motion.p>
          </div>

          {/* Action triggers and Email layout */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-8"
          >
            <button
              onClick={onWhoIHelpClick}
              className="bg-brand-text hover:bg-brand-accent text-brand-bg hover:text-white font-sans font-black text-xs uppercase tracking-widest px-8 py-4 rounded-none transition-all duration-300 transform hover:translate-y-[-2px] cursor-pointer border-2 border-brand-text"
            >
              clients i work with
            </button>
            
            <button 
              onClick={onContactClick}
              className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest font-bold text-brand-text/80 hover:text-brand-accent transition-colors py-2 border-b-2 border-brand-text hover:border-brand-accent cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-brand-accent" />
              <span>work with bear</span>
            </button>
          </motion.div>

        </div>

        {/* Right Column: Beautiful Image styled as high fashion editorial */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center items-center"
        >
          {/* Main Visual Container */}
          <div className="relative w-full max-w-[350px] md:max-w-[400px] aspect-square">
            
            {/* Elegant rectangular layered shadows and colored sheets characteristic of modern editorial design */}
            <div className="absolute inset-0 bg-brand-accent/5 border border-brand-accent/20 rotate-[-4deg] scale-102 pointer-events-none transition-all duration-500" />
            <div className="absolute inset-0 bg-brand-text/5 border border-brand-text/20 rotate-[4deg] scale-102 pointer-events-none transition-all duration-500" />
            
            {/* The Image itself - styled with a thick classy dark border */}
            <div className="relative w-full h-full overflow-hidden border-2 border-brand-text bg-brand-accent/5">
              <img 
                src={bearPortrait} 
                alt="Bear - Custom Web Specialist" 
                className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating brand slogan matching visual collage style */}
            <div className="absolute -bottom-6 -left-6 bg-brand-bg p-5 rounded-none border-2 border-brand-text max-w-[220px] shadow-md">
              <p className="font-serif italic font-medium text-sm text-brand-text leading-snug">
                Full stack web-developer with customer service experience
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-brand-accent font-mono font-bold text-[11px] tracking-widest uppercase">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>MOEMEDI "BEAR"</span>
              </div>
            </div>

            {/* Float badge with golden touch */}
            <div className="absolute -top-4 -right-4 bg-brand-accent text-white p-3.5 border-2 border-brand-text shadow-sm flex items-center justify-center">
              <BadgeCheck className="w-6 h-6 text-white" />
            </div>
          </div>
        </motion.div>

      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none opacity-40">
        <span className="font-mono text-[9px] tracking-widest uppercase font-bold text-brand-text">Scroll to explore</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-brand-accent" />
      </div>
    </section>
  );
}
