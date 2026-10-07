import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, XCircle } from "lucide-react";

export type ReactionLevel = "terrible" | "bad" | "ok" | "good" | "great";

interface ReactionOption {
  id: ReactionLevel;
  label: string;
  value: number;
}

const REACTIONS: ReactionOption[] = [
  { id: "terrible", label: "TERRIBLE", value: 1 },
  { id: "bad", label: "BAD", value: 2 },
  { id: "ok", label: "OK", value: 3 },
  { id: "good", label: "GOOD", value: 4 },
  { id: "great", label: "GREAT", value: 5 },
];

export interface TestimonialItem {
  id: string;
  name: string;
  role?: string;
  rating: ReactionLevel;
  review: string;
  date: string;
}

export default function TestimonialModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState<ReactionLevel | null>("good");
  const [hoveredReaction, setHoveredReaction] = useState<ReactionLevel | null>(null);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Synchronize state with window.location.hash
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === "#testimonial" || hash === "#testimonials") {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    // Check on initial load
    checkHash();

    // Listen to hash changes & browser back/forward
    window.addEventListener("hashchange", checkHash);
    window.addEventListener("popstate", checkHash);

    return () => {
      window.removeEventListener("hashchange", checkHash);
      window.removeEventListener("popstate", checkHash);
    };
  }, []);

  // Handle Escape key and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeModal = () => {
    const currentHash = window.location.hash.toLowerCase();
    if (currentHash === "#testimonial" || currentHash === "#testimonials") {
      // Clear hash cleanly without full page refresh
      if (window.history.pushState) {
        window.history.pushState(
          null,
          "",
          window.location.pathname + window.location.search
        );
      } else {
        window.location.hash = "";
      }
    }
    setIsOpen(false);
    // Reset transient feedback state after exit transition
    setTimeout(() => {
      setIsSubmitted(false);
      setError(null);
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!review.trim()) {
      setError("Please write a few words about your experience.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    // Save review to localStorage for persistence
    try {
      const newReview: TestimonialItem = {
        id: "rev_" + Date.now(),
        name: name.trim(),
        role: "Client",
        rating: rating || "good",
        review: review.trim(),
        date: new Date().toLocaleDateString("en-ZA", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
      };

      const existingRaw = localStorage.getItem("bear_reviews_store");
      const existingReviews: TestimonialItem[] = existingRaw ? JSON.parse(existingRaw) : [];
      localStorage.setItem(
        "bear_reviews_store",
        JSON.stringify([newReview, ...existingReviews])
      );
    } catch (err) {
      console.warn("Could not save to localStorage", err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Dim Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeModal}
            className="fixed inset-0 bg-[#18181B]/60 backdrop-blur-xs cursor-pointer"
            aria-label="Close modal overlay"
          />

          {/* Modal Container (Inspired by Image 2 with Neo-editorial refinement) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 14 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[560px] bg-white rounded-2xl sm:rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.22)] border border-[#18181B]/10 overflow-hidden z-10 my-auto text-[#18181B]"
          >
            {/* Modal Header */}
            <div className="px-6 sm:px-8 pt-7 pb-4 flex items-center justify-between border-b border-[#18181B]/10">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#18181B]" />
                <h2 className="text-xl sm:text-2xl font-bold font-sans text-[#18181B] tracking-tight">
                  REVIEW
                </h2>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#18181B]/50 hover:text-[#18181B] hover:bg-[#18181B]/5 transition-colors cursor-pointer"
                aria-label="Close review modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-6 sm:px-8 py-6">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-zinc-100 text-zinc-800 border border-zinc-300 mx-auto flex items-center justify-center shadow-xs">
                    <Check className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#18181B] leading-relaxed">
                      {name.trim() ? (
                        <>
                          thanks{" "}
                          <span className="inline-block -rotate-[1.2deg] my-1 mx-1 px-2.5 sm:px-3 py-0.5 bg-[#FAF8F5] text-[#18181B] border border-[#18181B]/20 rounded-[4px] shadow-[0_1px_3px_rgba(24,24,27,0.07)] font-sans font-bold text-[0.92em] tracking-tight hover:rotate-0 transition-transform duration-200 cursor-default select-none align-middle">
                            {name.trim()}
                          </span>{" "}
                          for your review!
                        </>
                      ) : (
                        "thanks for your review!"
                      )}
                    </h3>
                    <p className="text-sm text-[#18181B]/70 max-w-sm mx-auto leading-relaxed">
                      your feedback helps future clients get the best from BEAR.
                    </p>
                  </div>
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-8 py-2.5 bg-[#18181B] hover:bg-[#27272A] text-white font-semibold rounded-lg text-sm tracking-wider uppercase transition-colors cursor-pointer shadow-xs"
                    >
                      DONE
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Intro Description */}
                  <p className="text-[13.5px] sm:text-sm text-[#18181B]/70 leading-relaxed font-sans">
                    good design should make a difference. rate BEAR....
                  </p>

                  {/* Rating Section */}
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-[#18181B]">
                      Rating
                    </label>

                    {/* Reaction faces row */}
                    <div className="bg-[#F8F9FA] border border-[#18181B]/15 rounded-xl p-3 sm:p-4">
                      <div
                        role="radiogroup"
                        aria-label="Rating"
                        className="grid grid-cols-5 gap-1.5 sm:gap-3"
                      >
                        {REACTIONS.map((item) => {
                          const isSelected = rating === item.id;
                          const isHovered = hoveredReaction === item.id;

                          return (
                            <button
                              key={item.id}
                              type="button"
                              role="radio"
                              aria-checked={isSelected}
                              onMouseEnter={() => setHoveredReaction(item.id)}
                              onMouseLeave={() => setHoveredReaction(null)}
                              onClick={() => setRating(item.id)}
                              className="group relative flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all cursor-pointer focus:outline-hidden"
                            >
                              {/* Soft circular background indicator on hover / select */}
                              <div
                                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-transform duration-150 ${
                                  isSelected
                                    ? "bg-white shadow-md scale-105 ring-2 ring-[#18181B]"
                                    : isHovered
                                    ? "bg-[#18181B]/10 scale-105"
                                    : "bg-transparent hover:bg-[#18181B]/5"
                                }`}
                              >
                                <ReactionFaceIcon
                                  type={item.id}
                                  isSelected={isSelected}
                                  isHovered={isHovered}
                                />
                              </div>

                              {/* Reaction Label in uppercase */}
                              <span
                                className={`mt-2 font-mono text-[9px] sm:text-[10px] tracking-wider transition-colors ${
                                  isSelected
                                    ? "font-black text-[#18181B]"
                                    : "font-semibold text-[#18181B]/55 group-hover:text-[#18181B]"
                                }`}
                              >
                                {item.label}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Client Info (Name) */}
                  <div>
                    <label className="block text-xs font-semibold text-[#18181B] mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (error) setError(null);
                      }}
                      placeholder="e.g. Vuyo Smith"
                      className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#18181B]/20 bg-white placeholder-[#18181B]/35 focus:outline-none focus:border-[#18181B] focus:ring-1 focus:ring-[#18181B] transition-all"
                    />
                  </div>

                  {/* Textarea: What was your experience? */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-[#18181B]">
                      What was your experience?
                    </label>
                    <textarea
                      rows={4}
                      value={review}
                      onChange={(e) => {
                        setReview(e.target.value);
                        if (error) setError(null);
                      }}
                      placeholder="Write your review"
                      className="w-full text-sm px-4 py-3 rounded-xl border border-[#18181B]/20 bg-white placeholder-[#18181B]/35 focus:outline-none focus:border-[#18181B] focus:ring-1 focus:ring-[#18181B] transition-all resize-none font-sans"
                    />
                    {error && (
                      <p className="text-xs text-red-600 font-medium">
                        {error}
                      </p>
                    )}
                  </div>

                  {/* Actions (X inside circle to Cancel & Share CTA) */}
                  <div className="pt-2 flex items-center justify-between border-t border-[#18181B]/10">
                    <button
                      type="button"
                      onClick={closeModal}
                      title="Cancel"
                      aria-label="Cancel"
                      className="text-[#18181B]/40 hover:text-[#18181B] transition-colors cursor-pointer flex items-center justify-center p-1 rounded-full hover:bg-[#18181B]/5"
                    >
                      <XCircle className="w-8 h-8 stroke-[1.8]" />
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-7 py-2.5 rounded-lg bg-[#18181B] hover:bg-[#27272A] text-white text-sm font-semibold transition-all cursor-pointer shadow-xs disabled:opacity-50 flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sharing...</span>
                        </>
                      ) : (
                        <span>Share</span>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

/**
 * High-fidelity SVG Faces exactly replicating Image 1:
 * - terrible: slanted sleepy eyes, deep sad mouth
 * - bad: two dots, sad curved mouth
 * - ok: two dots, straight horizontal mouth
 * - good: two dots, cheerful upturned smile
 * - great: two red hearts for eyes, wide open happy grin mouth
 */
interface ReactionFaceIconProps {
  type: ReactionLevel;
  isSelected: boolean;
  isHovered: boolean;
}

function ReactionFaceIcon({ type, isSelected, isHovered }: ReactionFaceIconProps) {
  const strokeColor = isSelected ? "#18181B" : "#262626";

  switch (type) {
    case "terrible":
      return (
        <svg
          viewBox="0 0 48 48"
          className="w-8 h-8 sm:w-9 sm:h-9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Head circle */}
          <circle
            cx="24"
            cy="24"
            r="19"
            stroke={strokeColor}
            strokeWidth="2.8"
            fill="none"
          />
          {/* Slanted / Sleepy downturned eyes (Image 1 style) */}
          <path
            d="M 14 19 Q 18.5 16 22 19"
            stroke={strokeColor}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M 26 19 Q 29.5 16 34 19"
            stroke={strokeColor}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {/* Downturned sad mouth */}
          <path
            d="M 16 33 Q 24 25.5 32 33"
            stroke={strokeColor}
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        </svg>
      );

    case "bad":
      return (
        <svg
          viewBox="0 0 48 48"
          className="w-8 h-8 sm:w-9 sm:h-9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Head circle */}
          <circle
            cx="24"
            cy="24"
            r="19"
            stroke={strokeColor}
            strokeWidth="2.8"
            fill="none"
          />
          {/* Two dot eyes */}
          <circle cx="17.5" cy="19.5" r="2.4" fill={strokeColor} />
          <circle cx="30.5" cy="19.5" r="2.4" fill={strokeColor} />
          {/* Sad curved mouth */}
          <path
            d="M 17 32 Q 24 26.5 31 32"
            stroke={strokeColor}
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        </svg>
      );

    case "ok":
      return (
        <svg
          viewBox="0 0 48 48"
          className="w-8 h-8 sm:w-9 sm:h-9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Head circle */}
          <circle
            cx="24"
            cy="24"
            r="19"
            stroke={strokeColor}
            strokeWidth="2.8"
            fill="none"
          />
          {/* Two dot eyes */}
          <circle cx="17.5" cy="19.5" r="2.4" fill={strokeColor} />
          <circle cx="30.5" cy="19.5" r="2.4" fill={strokeColor} />
          {/* Straight neutral mouth */}
          <path
            d="M 17.5 30.5 L 30.5 30.5"
            stroke={strokeColor}
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        </svg>
      );

    case "good":
      return (
        <svg
          viewBox="0 0 48 48"
          className="w-8 h-8 sm:w-9 sm:h-9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Head circle */}
          <circle
            cx="24"
            cy="24"
            r="19"
            stroke={strokeColor}
            strokeWidth="2.8"
            fill="none"
          />
          {/* Two dot eyes */}
          <circle cx="17.5" cy="19.5" r="2.4" fill={strokeColor} />
          <circle cx="30.5" cy="19.5" r="2.4" fill={strokeColor} />
          {/* Happy upturned smile */}
          <path
            d="M 16.5 28.5 Q 24 35.5 31.5 28.5"
            stroke={strokeColor}
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        </svg>
      );

    case "great":
      return (
        <svg
          viewBox="0 0 48 48"
          className="w-8 h-8 sm:w-9 sm:h-9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Head circle shifted slightly left to accommodate the thumbs-up hand */}
          <circle
            cx="20"
            cy="24"
            r="16.5"
            stroke={strokeColor}
            strokeWidth="2.8"
            fill="none"
          />

          {/* Two happy eyes */}
          <circle cx="15" cy="19.5" r="2.2" fill={strokeColor} />
          <circle cx="25" cy="19.5" r="2.2" fill={strokeColor} />

          {/* Cheerful open smile */}
          <path
            d="M 14.5 25.5 L 25.5 25.5 C 25.5 31.5 14.5 31.5 14.5 25.5 Z"
            stroke={strokeColor}
            strokeWidth="2.4"
            strokeLinejoin="round"
            fill={isSelected || isHovered ? strokeColor : "none"}
          />

          {/* Thumbs up hand at bottom right */}
          <g transform="translate(26, 17) scale(0.9)">
            {/* White solid backing mask so hand cuts over head border */}
            <path
              d="M 4 10 L 7 10 L 10.5 3.5 C 11.5 2 13.5 2 14.5 3.5 C 15 5 14.2 7.5 13.5 10 L 19.5 10 C 21 10 22 11.2 21.6 12.6 L 19.5 20 C 19.2 21.2 18.2 22 17 22 L 4 22 C 2.9 22 2 21.1 2 20 L 2 12 C 2 10.9 2.9 10 4 10 Z"
              fill="white"
              stroke="white"
              strokeWidth="5"
              strokeLinejoin="round"
            />
            {/* Hand contour */}
            <path
              d="M 4 10 L 7 10 L 10.5 3.5 C 11.5 2 13.5 2 14.5 3.5 C 15 5 14.2 7.5 13.5 10 L 19.5 10 C 21 10 22 11.2 21.6 12.6 L 19.5 20 C 19.2 21.2 18.2 22 17 22 L 4 22 C 2.9 22 2 21.1 2 20 L 2 12 C 2 10.9 2.9 10 4 10 Z"
              fill={isSelected || isHovered ? "#18181B" : "white"}
              stroke={isSelected || isHovered ? "#18181B" : strokeColor}
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Cuff line */}
            <path
              d="M 7 10.5 L 7 21.5"
              stroke={isSelected || isHovered ? "white" : strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        </svg>
      );
  }
}
