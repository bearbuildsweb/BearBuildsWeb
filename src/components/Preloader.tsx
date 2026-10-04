import React, { useEffect, useState } from "react";

// Woodshop Palette Types for the Lego Bricks
type BrickType = "walnut-dark" | "walnut-rich" | "brass-warm" | "brass-gold" | "timber-amber";

interface BearBrick {
  id: number;
  row: number; // 0 to 5
  col: number; // 0 to 6
  type: BrickType;
  // Starting flight trajectory offsets
  startX: number; // vw/px delta
  startY: number; // vh/px delta
  startRot: number; // degrees
  delay: number; // animation delay in ms
}

// 7 columns x 6 rows stylized Bear Head Layout
// Ears at top (row 0, cols 1 & 5)
// Forehead & Ears (row 1, cols 1,2,3,4,5)
// Brow & Temples (row 2, cols 0..6)
// Cheeks & Eyes (row 3, cols 0..6)
// Snout / Muzzle (row 4, cols 1..5)
// Chin (row 5, cols 2,3,4)
const BEAR_BRICKS: BearBrick[] = [
  // --- ROW 0: Ears Tips ---
  { id: 1, row: 0, col: 1, type: "brass-warm", startX: -280, startY: -350, startRot: -45, delay: 100 },
  { id: 2, row: 0, col: 5, type: "brass-warm", startX: 280, startY: -350, startRot: 50, delay: 120 },

  // --- ROW 1: Ears Base & Head Crown ---
  { id: 3, row: 1, col: 1, type: "brass-gold", startX: -320, startY: -180, startRot: -30, delay: 160 },
  { id: 4, row: 1, col: 2, type: "walnut-rich", startX: -80, startY: -400, startRot: 20, delay: 200 },
  { id: 5, row: 1, col: 3, type: "walnut-dark", startX: 0, startY: -420, startRot: -15, delay: 220 },
  { id: 6, row: 1, col: 4, type: "walnut-rich", startX: 90, startY: -400, startRot: 25, delay: 240 },
  { id: 7, row: 1, col: 5, type: "brass-gold", startX: 320, startY: -180, startRot: 35, delay: 180 },

  // --- ROW 2: Temples & Brow Width ---
  { id: 8, row: 2, col: 0, type: "walnut-dark", startX: -450, startY: -50, startRot: -60, delay: 260 },
  { id: 9, row: 2, col: 1, type: "walnut-rich", startX: -260, startY: -80, startRot: -20, delay: 290 },
  { id: 10, row: 2, col: 2, type: "walnut-dark", startX: -120, startY: -180, startRot: 15, delay: 320 },
  { id: 11, row: 2, col: 3, type: "walnut-rich", startX: 10, startY: -220, startRot: -10, delay: 350 },
  { id: 12, row: 2, col: 4, type: "walnut-dark", startX: 130, startY: -180, startRot: 20, delay: 380 },
  { id: 13, row: 2, col: 5, type: "walnut-rich", startX: 270, startY: -80, startRot: 30, delay: 310 },
  { id: 14, row: 2, col: 6, type: "walnut-dark", startX: 450, startY: -50, startRot: 55, delay: 280 },

  // --- ROW 3: Cheeks & Eyes/Muzzle Foundation ---
  { id: 15, row: 3, col: 0, type: "walnut-rich", startX: -480, startY: 120, startRot: -40, delay: 400 },
  { id: 16, row: 3, col: 1, type: "walnut-dark", startX: -290, startY: 100, startRot: -15, delay: 430 },
  { id: 17, row: 3, col: 2, type: "brass-gold", startX: -100, startY: 60, startRot: -25, delay: 490 }, // Eye accent
  { id: 18, row: 3, col: 3, type: "timber-amber", startX: 0, startY: 80, startRot: 10, delay: 520 },  // Center brow
  { id: 19, row: 3, col: 4, type: "brass-gold", startX: 100, startY: 60, startRot: 25, delay: 510 },  // Eye accent
  { id: 20, row: 3, col: 5, type: "walnut-dark", startX: 290, startY: 100, startRot: 15, delay: 450 },
  { id: 21, row: 3, col: 6, type: "walnut-rich", startX: 480, startY: 120, startRot: 45, delay: 420 },

  // --- ROW 4: Snout & Lower Cheeks ---
  { id: 22, row: 4, col: 1, type: "walnut-dark", startX: -250, startY: 300, startRot: -35, delay: 560 },
  { id: 23, row: 4, col: 2, type: "brass-warm", startX: -110, startY: 340, startRot: -20, delay: 600 }, // Snout left
  { id: 24, row: 4, col: 3, type: "brass-gold", startX: 0, startY: 380, startRot: 0, delay: 680 },     // Nose Keystone!
  { id: 25, row: 4, col: 4, type: "brass-warm", startX: 110, startY: 340, startRot: 20, delay: 620 },  // Snout right
  { id: 26, row: 4, col: 5, type: "walnut-dark", startX: 250, startY: 300, startRot: 35, delay: 580 },

  // --- ROW 5: Chin / Jaw Base ---
  { id: 27, row: 5, col: 2, type: "walnut-rich", startX: -130, startY: 450, startRot: -15, delay: 650 },
  { id: 28, row: 5, col: 3, type: "walnut-dark", startX: 0, startY: 480, startRot: 0, delay: 720 },
  { id: 29, row: 5, col: 4, type: "walnut-rich", startX: 130, startY: 450, startRot: 15, delay: 670 },
];

export default function Preloader() {
  const [stage, setStage] = useState<"animating" | "complete" | "hidden">("animating");

  useEffect(() => {
    // 1. Bricks fly in and snap into place: 0 to ~1200ms
    // 2. Lock & settle with warm specular sheen: ~1300ms to 2000ms
    // 3. Fade out full screen loader: ~2100ms
    const completeTimer = setTimeout(() => {
      setStage("complete");
    }, 2100);

    // 4. Remove completely from DOM after fade-out transition (600ms)
    const hideTimer = setTimeout(() => {
      setStage("hidden");
    }, 2750);

    return () => {
      clearTimeout(completeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (stage === "hidden") return null;

  // Brick Color Styling Mapping
  const getBrickStyles = (type: BrickType) => {
    switch (type) {
      case "walnut-dark":
        return {
          bg: "bg-gradient-to-b from-[#2F241C] via-[#201812] to-[#140F0B]",
          studBg: "bg-gradient-to-b from-[#3D2E24] via-[#241A13] to-[#120D09]",
          borderLight: "border-t-[#5E4737] border-l-[#443327]",
          borderDark: "border-b-[#0A0705] border-r-[#100C09]",
          studRing: "border-black/50",
          shadow: "shadow-[0_2px_4px_rgba(0,0,0,0.6)]",
        };
      case "walnut-rich":
        return {
          bg: "bg-gradient-to-b from-[#4A382A] via-[#35271D] to-[#201711]",
          studBg: "bg-gradient-to-b from-[#5E4736] via-[#38291F] to-[#1A130E]",
          borderLight: "border-t-[#785B45] border-l-[#5E4635]",
          borderDark: "border-b-[#120C08] border-r-[#18110B]",
          studRing: "border-black/50",
          shadow: "shadow-[0_2px_4px_rgba(0,0,0,0.6)]",
        };
      case "brass-warm":
        return {
          bg: "bg-gradient-to-b from-[#B45309] via-[#853B06] to-[#502202]",
          studBg: "bg-gradient-to-b from-[#D97706] via-[#92400E] to-[#451A03]",
          borderLight: "border-t-[#FBBF24]/80 border-l-[#F59E0B]/50",
          borderDark: "border-b-[#2D1201] border-r-[#3C1902]",
          studRing: "border-amber-950/60",
          shadow: "shadow-[0_2px_6px_rgba(180,83,9,0.35)]",
        };
      case "brass-gold":
        return {
          bg: "bg-gradient-to-b from-[#F59E0B] via-[#C97706] to-[#78350F]",
          studBg: "bg-gradient-to-b from-[#FDE047] via-[#D97706] to-[#78350F]",
          borderLight: "border-t-[#FEF08A] border-l-[#FDE047]/70",
          borderDark: "border-b-[#451A03] border-r-[#5B2203]",
          studRing: "border-amber-950/70",
          shadow: "shadow-[0_2px_8px_rgba(245,158,11,0.5)]",
        };
      case "timber-amber":
        return {
          bg: "bg-gradient-to-b from-[#7C4E28] via-[#5A3619] to-[#361E0C]",
          studBg: "bg-gradient-to-b from-[#9C6536] via-[#613A1B] to-[#2D1809]",
          borderLight: "border-t-[#BA7F4D] border-l-[#9C6536]",
          borderDark: "border-b-[#1A0C04] border-r-[#241206]",
          studRing: "border-black/50",
          shadow: "shadow-[0_2px_4px_rgba(0,0,0,0.6)]",
        };
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0F1013] transition-opacity duration-700 select-none overflow-hidden ${
        stage === "complete" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* Woodshop Charcoal Background Textures */}
      {/* Subtle Radial Warm Incandescent Tungsten Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(245,158,11,0.12)_0%,rgba(180,83,9,0.05)_40%,transparent_70%)] pointer-events-none" />

      {/* Blueprint Grid Lines (Fine Drafting Lines) */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Center Lego Grid Stage */}
      <div className="relative flex flex-col items-center justify-center">
        
        {/* Soft Drop Shadow under assembled Bear Logo */}
        <div className="absolute -bottom-6 w-52 sm:w-64 h-10 rounded-full bg-black/70 blur-xl pointer-events-none" />

        {/* 7 Columns x 6 Rows CSS Grid Container */}
        <div
          className="relative grid grid-cols-7 gap-1 sm:gap-1.5 p-3 sm:p-4 rounded-2xl bg-[#14161B]/80 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-md"
          style={{ width: "min(88vw, 310px)", height: "min(78vw, 275px)" }}
        >
          {/* Subtle Grid Mounting Plate Screw Fasteners */}
          <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-amber-500/40 border border-black/40 shadow-xs" />
          <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-amber-500/40 border border-black/40 shadow-xs" />
          <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-amber-500/40 border border-black/40 shadow-xs" />
          <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-amber-500/40 border border-black/40 shadow-xs" />

          {BEAR_BRICKS.map((brick) => {
            const styles = getBrickStyles(brick.type);

            return (
              <div
                key={brick.id}
                style={{
                  gridColumnStart: brick.col + 1,
                  gridRowStart: brick.row + 1,
                  // Custom CSS properties for flight animation
                  ["--start-x" as string]: `${brick.startX}px`,
                  ["--start-y" as string]: `${brick.startY}px`,
                  ["--start-rot" as string]: `${brick.startRot}deg`,
                  animationDelay: `${brick.delay}ms`,
                }}
                className={`group relative w-full h-full rounded-[4.5px] sm:rounded-[6px] ${styles.bg} ${styles.shadow} border-t-2 border-l border-b-2 border-r ${styles.borderLight} ${styles.borderDark} flex items-center justify-center animate-brick-snap cursor-default`}
              >
                {/* 3D Lego Stud on Top */}
                <div
                  className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full ${styles.studBg} border border-white/30 ${styles.studRing} shadow-[0_1px_2px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.45)] flex items-center justify-center`}
                >
                  {/* Inner Stud Emboss Ring */}
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full border border-black/30 bg-white/10" />
                </div>

                {/* Specular Highlight along Top Bevel */}
                <div className="absolute inset-x-0.5 top-0 h-[1px] bg-white/25 rounded-t-sm pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Brand Wordmark Below the Preloader Logo */}
        <div className="mt-6 flex flex-col items-center gap-1.5 select-none animate-fade-in-delayed">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.8)] animate-ping" />
            <span className="font-sans font-black text-xs sm:text-sm tracking-[0.24em] text-white uppercase antialiased">
              BEAR BUILDS WEB
            </span>
          </div>
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-[#D4C3B3]/60 uppercase antialiased">
            FOR YOUR TOOLS
          </span>
        </div>

      </div>

      {/* Embedded CSS Animations for the Brick Snap-in flight physics */}
      <style>{`
        @keyframes brickSnap {
          0% {
            opacity: 0;
            transform: translate3d(var(--start-x), var(--start-y), 0) rotate(var(--start-rot)) scale(0.1);
          }
          65% {
            opacity: 1;
            transform: translate3d(0, 0, 0) rotate(0deg) scale(1.18);
          }
          85% {
            transform: scale(0.94);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
          }
        }

        @keyframes fadeInDelayed {
          0%, 40% {
            opacity: 0;
            transform: translateY(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-brick-snap {
          opacity: 0;
          animation-name: brickSnap;
          animation-duration: 720ms;
          animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
          animation-fill-mode: forwards;
        }

        .animate-fade-in-delayed {
          animation: fadeInDelayed 1100ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}
