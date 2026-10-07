import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
// @ts-ignore
import charredTimberImg from "../assets/images/charred_timber_texture_1791126502415.jpg";

interface WoodenShuttersProps {
  onShuttersToggle?: (isOpen: boolean) => void;
}

// Simple Architecturally Refined Brushed Brass Butt Hinge
function BrassHinge({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left";
  return (
    <div
      className={`absolute z-30 flex items-center ${
        isLeft ? "-left-1" : "-right-1 flex-row-reverse"
      }`}
      aria-hidden="true"
    >
      {/* Brass Hinge Knuckle Barrel */}
      <div className="relative w-2 h-7 sm:w-2.5 sm:h-9 rounded-xs bg-gradient-to-b from-[#FDE68A] via-[#D97706] to-[#78350F] border border-black/40 shadow-[0_2px_5px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.6)] flex flex-col justify-evenly items-center py-0.5">
        {/* Countersunk Brass Screws */}
        <div className="w-1 h-1 rounded-full bg-[#451A03] border border-amber-200/50" />
        <div className="w-1 h-1 rounded-full bg-[#451A03] border border-amber-200/50" />
      </div>
    </div>
  );
}

export default function WoodenShutters({ onShuttersToggle }: WoodenShuttersProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open smoothly after preloader completion
    const handlePreloaderFinished = () => {
      const timer = setTimeout(() => {
        setIsOpen(true);
        onShuttersToggle?.(true);
      }, 1500); // Opens smoothly after preloader finishes
      return () => clearTimeout(timer);
    };

    window.addEventListener("preloader-finished", handlePreloaderFinished);

    // Fallback timer: Preloader takes ~2.1s -> Opens at 3.6s
    const fallbackTimer = setTimeout(() => {
      setIsOpen(true);
      onShuttersToggle?.(true);
    }, 3600);

    return () => {
      window.removeEventListener("preloader-finished", handlePreloaderFinished);
      clearTimeout(fallbackTimer);
    };
  }, [onShuttersToggle]);

  const toggleShutters = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextState = !isOpen;
    setIsOpen(nextState);
    onShuttersToggle?.(nextState);
  };

  // Smooth, physical inward swing transition
  const shutterTransition = {
    duration: 1.8,
    ease: [0.22, 1, 0.36, 1], // Smooth natural door deceleration
  };

  return (
    <div
      onClick={toggleShutters}
      className="absolute inset-0 z-30 [perspective:1200px] select-none cursor-pointer"
      title={isOpen ? "Click to close shutters" : "Click to open shutters"}
    >
      {/* Brass Hinges on the Outer Edges */}
      <div className="absolute top-8 left-0">
        <BrassHinge side="left" />
      </div>
      <div className="absolute bottom-8 left-0">
        <BrassHinge side="left" />
      </div>
      <div className="absolute top-8 right-0">
        <BrassHinge side="right" />
      </div>
      <div className="absolute bottom-8 right-0">
        <BrassHinge side="right" />
      </div>

      {/* ===================================================================== */}
      {/* LEFT WARM WALNUT/OAK SHUTTER PANEL                                    */}
      {/* Folds inward rotating into 3D perspective to reveal portrait           */}
      {/* ===================================================================== */}
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{
          rotateY: isOpen ? 76 : 0,
        }}
        transition={shutterTransition}
        style={{
          transformOrigin: "left center",
          transformStyle: "preserve-3d",
        }}
        className="absolute top-0 bottom-0 left-0 w-1/2 rounded-l-lg sm:rounded-l-xl overflow-hidden border-r border-[#1E140C] shadow-[-6px_8px_22px_rgba(0,0,0,0.65)] z-20"
      >
        {/* Shutter Panel Face: Warm Walnut/Oak Wood with Visible Grain */}
        <div className="relative w-full h-full bg-[#382618] border-t border-l border-b border-[#6B4B32]/60 shadow-[inset_0_2px_4px_rgba(255,255,255,0.15)] flex flex-col justify-between p-2 sm:p-2.5">
          {/* Authentic Wood Grain Texture Overlay */}
          <img
            src={charredTimberImg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-multiply filter contrast-125"
          />

          {/* Warm Walnut / Oak Gradient Glaze */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2F1F13] via-[#4A3320] to-[#342215] opacity-90" />

          {/* Recessed Shaker Panel Detail */}
          <div className="relative w-full h-full rounded-sm border border-[#23170E] bg-[#3B281A]/85 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.7),0_1px_1px_rgba(255,255,255,0.08)] flex flex-col justify-between p-2 overflow-hidden">
            {/* Subtle Vertical Oak Plank Grooves */}
            <div className="absolute inset-0 flex justify-evenly pointer-events-none opacity-40">
              <div className="w-px h-full bg-black/70 shadow-[1px_0_0_rgba(255,255,255,0.06)]" />
              <div className="w-px h-full bg-black/70 shadow-[1px_0_0_rgba(255,255,255,0.06)]" />
            </div>

            {/* Top & Bottom Subtle Timber Rails */}
            <div className="h-2 sm:h-2.5 w-full bg-[#2C1D11]/60 rounded-xs border-b border-black/40" />
            <div className="h-2 sm:h-2.5 w-full bg-[#2C1D11]/60 rounded-xs border-t border-black/40" />

            {/* Amber Sunlight Glaze across Panel Face */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(251,191,36,0.18),transparent_70%)] pointer-events-none" />
          </div>

          {/* Center Seam Drop Shadow (meeting edge) */}
          <div className="absolute top-0 bottom-0 right-0 w-2.5 bg-gradient-to-l from-black/70 to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* ===================================================================== */}
      {/* RIGHT WARM WALNUT/OAK SHUTTER PANEL                                   */}
      {/* Folds inward rotating into 3D perspective to reveal portrait           */}
      {/* ===================================================================== */}
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{
          rotateY: isOpen ? -76 : 0,
        }}
        transition={shutterTransition}
        style={{
          transformOrigin: "right center",
          transformStyle: "preserve-3d",
        }}
        className="absolute top-0 bottom-0 right-0 w-1/2 rounded-r-lg sm:rounded-r-xl overflow-hidden border-l border-[#1E140C] shadow-[6px_8px_22px_rgba(0,0,0,0.65)] z-20"
      >
        {/* Shutter Panel Face: Warm Walnut/Oak Wood with Visible Grain */}
        <div className="relative w-full h-full bg-[#382618] border-t border-r border-b border-[#6B4B32]/60 shadow-[inset_0_2px_4px_rgba(255,255,255,0.15)] flex flex-col justify-between p-2 sm:p-2.5">
          {/* Authentic Wood Grain Texture Overlay */}
          <img
            src={charredTimberImg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-multiply filter contrast-125"
          />

          {/* Warm Walnut / Oak Gradient Glaze */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#2F1F13] via-[#4A3320] to-[#342215] opacity-90" />

          {/* Recessed Shaker Panel Detail */}
          <div className="relative w-full h-full rounded-sm border border-[#23170E] bg-[#3B281A]/85 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.7),0_1px_1px_rgba(255,255,255,0.08)] flex flex-col justify-between p-2 overflow-hidden">
            {/* Subtle Vertical Oak Plank Grooves */}
            <div className="absolute inset-0 flex justify-evenly pointer-events-none opacity-40">
              <div className="w-px h-full bg-black/70 shadow-[1px_0_0_rgba(255,255,255,0.06)]" />
              <div className="w-px h-full bg-black/70 shadow-[1px_0_0_rgba(255,255,255,0.06)]" />
            </div>

            {/* Top & Bottom Subtle Timber Rails */}
            <div className="h-2 sm:h-2.5 w-full bg-[#2C1D11]/60 rounded-xs border-b border-black/40" />
            <div className="h-2 sm:h-2.5 w-full bg-[#2C1D11]/60 rounded-xs border-t border-black/40" />

            {/* Amber Sunlight Glaze across Panel Face */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.18),transparent_70%)] pointer-events-none" />
          </div>

          {/* Center Seam Drop Shadow (meeting edge) */}
          <div className="absolute top-0 bottom-0 left-0 w-2.5 bg-gradient-to-r from-black/70 to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* Subtle Inset Ambient Shadow when Shutters are Open */}
      <motion.div
        animate={{ opacity: isOpen ? 0.35 : 0 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 pointer-events-none shadow-[inset_0_0_25px_rgba(0,0,0,0.8)] z-10"
      />
    </div>
  );
}
