import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
// @ts-ignore
import charredTimberImg from "../assets/images/charred_timber_texture_1791126502415.jpg";

interface WoodenShuttersProps {
  onShuttersToggle?: (isOpen: boolean) => void;
}

// Brushed Brass Butt Hinge on outer frame junction
function BrassHinge({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left";
  return (
    <div
      className={`absolute z-30 flex items-center ${
        isLeft ? "-left-1.5" : "-right-1.5 flex-row-reverse"
      }`}
      aria-hidden="true"
    >
      <div className="relative w-2 h-7 sm:w-2.5 sm:h-8 rounded-xs bg-gradient-to-b from-[#FDE68A] via-[#D97706] to-[#78350F] border border-black/50 shadow-[0_2px_4px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.6)] flex flex-col justify-evenly items-center py-0.5">
        <div className="w-1 h-1 rounded-full bg-[#451A03] border border-amber-200/50" />
        <div className="w-1 h-1 rounded-full bg-[#451A03] border border-amber-200/50" />
      </div>
    </div>
  );
}

// Forged Iron Shutter Pull Handle
function ShutterHandle({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left";
  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 ${
        isLeft ? "right-2.5 sm:right-3.5" : "left-2.5 sm:left-3.5"
      } z-30 flex items-center justify-center`}
      aria-hidden="true"
    >
      <div className="w-1.5 sm:w-2 h-8 sm:h-10 rounded-sm bg-gradient-to-r from-[#1C1F26] via-[#333842] to-[#14161C] border border-black/60 shadow-[0_2px_6px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)] flex flex-col justify-between items-center py-1">
        <div className="w-1 h-1 rounded-full bg-[#0E1014] border border-white/20" />
        <div className="w-1 h-1 rounded-full bg-[#0E1014] border border-white/20" />
      </div>
    </div>
  );
}

export default function WoodenShutters({ onShuttersToggle }: WoodenShuttersProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open smoothly 3.0s after preloader finishes, lasting 4.0s
    const handlePreloaderFinished = () => {
      const timer = setTimeout(() => {
        setIsOpen(true);
        onShuttersToggle?.(true);
      }, 3000); // 3 seconds after pre-loader completes
      return () => clearTimeout(timer);
    };

    window.addEventListener("preloader-finished", handlePreloaderFinished);

    // Fallback timer: Preloader takes ~2.1s -> 2.1s + 3.0s = 5.1s
    const fallbackTimer = setTimeout(() => {
      setIsOpen(true);
      onShuttersToggle?.(true);
    }, 5100);

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

  // Stately, deliberate 4.0-second sliding animation
  const slideTransition = {
    duration: 4.0,
    ease: [0.25, 1, 0.4, 1], // Smooth, mechanical slide deceleration
  };

  return (
    <div
      onClick={toggleShutters}
      className="absolute inset-0 z-30 select-none cursor-pointer"
      title={isOpen ? "Click to close side shutters" : "Click to open side shutters"}
      aria-label="Wooden craftsman shutters"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const nextState = !isOpen;
          setIsOpen(nextState);
          onShuttersToggle?.(nextState);
        }
      }}
    >
      {/* Top & Bottom Exterior Craftsman Sliding Track Rails (Permanent architectural fixtures) */}
      <div 
        className="absolute -top-3.5 left-[-4%] right-[-4%] h-2.5 rounded-sm bg-gradient-to-b from-[#2B303A] via-[#1E2229] to-[#121418] border border-black/60 shadow-[0_2px_6px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.2)] z-40 pointer-events-none flex items-center justify-between px-1"
        aria-hidden="true"
      >
        {/* Left Track Stop & Socket Bolt */}
        <div className="w-1.5 h-3.5 rounded-xs bg-[#475569] border border-black/50 shadow-sm" />
        {/* Center Guide Notch */}
        <div className="w-4 h-1 rounded-full bg-black/70" />
        {/* Right Track Stop & Socket Bolt */}
        <div className="w-1.5 h-3.5 rounded-xs bg-[#475569] border border-black/50 shadow-sm" />
      </div>

      <div 
        className="absolute -bottom-3.5 left-[-4%] right-[-4%] h-2.5 rounded-sm bg-gradient-to-b from-[#2B303A] via-[#1E2229] to-[#121418] border border-black/60 shadow-[0_2px_6px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.2)] z-40 pointer-events-none flex items-center justify-between px-1"
        aria-hidden="true"
      >
        <div className="w-1.5 h-3.5 rounded-xs bg-[#475569] border border-black/50 shadow-sm" />
        <div className="w-4 h-1 rounded-full bg-black/70" />
        <div className="w-1.5 h-3.5 rounded-xs bg-[#475569] border border-black/50 shadow-sm" />
      </div>

      {/* Outer Edge Brass Hinges on Window Casing */}
      <div className="absolute top-6 left-0">
        <BrassHinge side="left" />
      </div>
      <div className="absolute bottom-6 left-0">
        <BrassHinge side="left" />
      </div>
      <div className="absolute top-6 right-0">
        <BrassHinge side="right" />
      </div>
      <div className="absolute bottom-6 right-0">
        <BrassHinge side="right" />
      </div>

      {/* ===================================================================== */}
      {/* LEFT WARM WALNUT/OAK SHUTTER PANEL (Permanent Architectural Fixture)    */}
      {/* Slides from center to flank the left side of the square frame          */}
      {/* ===================================================================== */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{
          x: isOpen ? "-100%" : "0%",
        }}
        transition={slideTransition}
        className="absolute top-0 bottom-0 left-0 w-1/2 rounded-l-lg sm:rounded-l-xl overflow-hidden border-r border-[#1E140C] shadow-[-8px_10px_26px_rgba(0,0,0,0.75)] z-30"
      >
        {/* Shutter Panel Face: Warm Walnut/Oak Wood with Visible Grain */}
        <div className="relative w-full h-full bg-[#382618] border-t-2 border-l-2 border-b-2 border-[#6B4B32]/60 shadow-[inset_0_2px_4px_rgba(255,255,255,0.15)] flex flex-col justify-between p-1.5 sm:p-2">
          {/* Authentic Wood Grain Texture Overlay */}
          <img
            src={charredTimberImg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-55 mix-blend-multiply filter contrast-125"
          />

          {/* Warm Walnut / Oak Gradient Glaze */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2F1F13] via-[#4A3320] to-[#342215] opacity-90 pointer-events-none" />

          {/* Recessed Shaker Panel Detail with Architectural Vertical Slats */}
          <div className="relative w-full h-full rounded-sm border border-[#23170E] bg-[#3B281A]/85 shadow-[inset_0_1.5px_4px_rgba(0,0,0,0.8),0_1px_1px_rgba(255,255,255,0.08)] flex flex-col justify-between p-1.5 overflow-hidden">
            {/* Authentic Vertical Plank Grooves */}
            <div className="absolute inset-0 flex justify-evenly pointer-events-none opacity-45">
              <div className="w-px h-full bg-black/80 shadow-[1px_0_0_rgba(255,255,255,0.06)]" />
              <div className="w-px h-full bg-black/80 shadow-[1px_0_0_rgba(255,255,255,0.06)]" />
            </div>

            {/* Architectural Diagonal Z-Brace Batten */}
            <div 
              style={{
                clipPath: "polygon(0% 12%, 100% 88%, 100% 100%, 0% 24%)",
              }}
              className="absolute inset-0 bg-gradient-to-br from-[#2D1C10] via-[#452D1A] to-[#25170D] opacity-80 border-y border-black/40 pointer-events-none"
            />

            {/* Top & Bottom Solid Timber Rails */}
            <div className="relative h-2 sm:h-2.5 w-full bg-[#2C1D11]/80 rounded-xs border-b border-black/50 shadow-sm" />
            <div className="relative h-2 sm:h-2.5 w-full bg-[#2C1D11]/80 rounded-xs border-t border-black/50 shadow-sm" />

            {/* Amber Sunlight Glaze across Panel Face */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(251,191,36,0.18),transparent_70%)] pointer-events-none" />
          </div>

          {/* Forged Iron Handle */}
          <ShutterHandle side="left" />

          {/* Center Seam Drop Shadow (meeting edge) */}
          <div className="absolute top-0 bottom-0 right-0 w-3 bg-gradient-to-l from-black/80 to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* ===================================================================== */}
      {/* RIGHT WARM WALNUT/OAK SHUTTER PANEL (Permanent Architectural Fixture)   */}
      {/* Slides from center to flank the right side of the square frame         */}
      {/* ===================================================================== */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{
          x: isOpen ? "100%" : "0%",
        }}
        transition={slideTransition}
        className="absolute top-0 bottom-0 right-0 w-1/2 rounded-r-lg sm:rounded-r-xl overflow-hidden border-l border-[#1E140C] shadow-[8px_10px_26px_rgba(0,0,0,0.75)] z-30"
      >
        {/* Shutter Panel Face: Warm Walnut/Oak Wood with Visible Grain */}
        <div className="relative w-full h-full bg-[#382618] border-t-2 border-r-2 border-b-2 border-[#6B4B32]/60 shadow-[inset_0_2px_4px_rgba(255,255,255,0.15)] flex flex-col justify-between p-1.5 sm:p-2">
          {/* Authentic Wood Grain Texture Overlay */}
          <img
            src={charredTimberImg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-55 mix-blend-multiply filter contrast-125"
          />

          {/* Warm Walnut / Oak Gradient Glaze */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#2F1F13] via-[#4A3320] to-[#342215] opacity-90 pointer-events-none" />

          {/* Recessed Shaker Panel Detail with Architectural Vertical Slats */}
          <div className="relative w-full h-full rounded-sm border border-[#23170E] bg-[#3B281A]/85 shadow-[inset_0_1.5px_4px_rgba(0,0,0,0.8),0_1px_1px_rgba(255,255,255,0.08)] flex flex-col justify-between p-1.5 overflow-hidden">
            {/* Authentic Vertical Plank Grooves */}
            <div className="absolute inset-0 flex justify-evenly pointer-events-none opacity-45">
              <div className="w-px h-full bg-black/80 shadow-[1px_0_0_rgba(255,255,255,0.06)]" />
              <div className="w-px h-full bg-black/80 shadow-[1px_0_0_rgba(255,255,255,0.06)]" />
            </div>

            {/* Architectural Diagonal Z-Brace Batten */}
            <div 
              style={{
                clipPath: "polygon(0% 88%, 100% 12%, 100% 24%, 0% 100%)",
              }}
              className="absolute inset-0 bg-gradient-to-bl from-[#2D1C10] via-[#452D1A] to-[#25170D] opacity-80 border-y border-black/40 pointer-events-none"
            />

            {/* Top & Bottom Solid Timber Rails */}
            <div className="relative h-2 sm:h-2.5 w-full bg-[#2C1D11]/80 rounded-xs border-b border-black/50 shadow-sm" />
            <div className="relative h-2 sm:h-2.5 w-full bg-[#2C1D11]/80 rounded-xs border-t border-black/50 shadow-sm" />

            {/* Amber Sunlight Glaze across Panel Face */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.18),transparent_70%)] pointer-events-none" />
          </div>

          {/* Forged Iron Handle */}
          <ShutterHandle side="right" />

          {/* Center Seam Drop Shadow (meeting edge) */}
          <div className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-black/80 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
}
