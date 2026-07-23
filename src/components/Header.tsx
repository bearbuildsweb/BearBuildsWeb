import React from "react";
import { motion } from "motion/react";

interface HeaderProps {
  onContactClick?: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-40 bg-brand-bg/95 backdrop-blur-md border-b border-brand-text/10 px-6 lg:px-16 py-5 flex items-center justify-end"
    >
      <div className="flex items-center gap-2">
        <a href="#" className="font-display font-black text-xl md:text-2xl text-brand-text tracking-tighter hover:opacity-80 transition-opacity uppercase">
          bear <span className="text-brand-accent italic font-serif font-semibold lowercase">builds web</span>
        </a>
      </div>
    </motion.header>
  );
}
