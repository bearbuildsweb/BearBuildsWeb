import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { ContactFormData } from "../types";
import { submitQuestionnaire } from "../lib/supabase";

export default function Steps() {
  // Current step state
  const [step, setStep] = useState(1);
  const [validationError, setValidationError] = useState("");

  // Form submission state
  const [formData, setFormData] = useState<ContactFormData>({
    profession: "",
    onlinePresence: "",
    bookingProcess: "Instagram DMs",
    slowingDown: "",
    email: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleReset = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setFormData({
      profession: "",
      onlinePresence: "",
      bookingProcess: "Instagram DMs",
      slowingDown: "",
      email: ""
    });
    setStep(1);
    setIsSubmitted(false);
    setIsSubmitting(false);
    setValidationError("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear validation error when typing/selecting
    if (value.trim()) {
      setValidationError("");
    }
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      bookingProcess: value
    }));
  };

  const handleNextStep = () => {
    if (!formData.profession) {
      setValidationError("Please select your profession.");
      return;
    }
    if (!formData.onlinePresence.trim()) {
      setValidationError("Please paste a link to where I can see your work.");
      return;
    }
    setValidationError("");
    setStep(2);
  };

  const handlePrevStep = () => {
    setValidationError("");
    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.slowingDown) {
      setValidationError("Please select the biggest bottleneck in your day.");
      return;
    }
    // Final validations
    if (!formData.email.trim()) {
      return;
    }

    setIsSubmitting(true);
    setValidationError("");

    try {
      // Submit questionnaire response directly to Supabase via SDK
      // Looks up client where slug = 'bear-builds-web', retrieves UUID, and inserts into submissions table
      const result = await submitQuestionnaire(formData);

      if (!result.success) {
        console.error("[Steps] Supabase submission error:", result.error);
        setValidationError(result.error || "Failed to submit questionnaire. Please try again.");
      } else {
        console.log("[Steps] Successfully recorded submission in Supabase:", result.data);
      }
    } catch (err: any) {
      console.error("[Steps] Exception handling submission:", err);
      setValidationError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Save inquiry to localStorage for local client session persistence
      try {
        const previousInquiries = JSON.parse(localStorage.getItem("bear_inquiries") || "[]");
        previousInquiries.push({
          ...formData,
          date: new Date().toISOString()
        });
        localStorage.setItem("bear_inquiries", JSON.stringify(previousInquiries));
      } catch (e) {
        console.error("Failed saving inquiry to localStorage:", e);
      }
    }
  };

  const bookingOptions = [
    "Instagram DMs",
    "WhatsApp",
    "Phone Calls",
    "Email",
    "Facebook",
    "Google Business",
    "I don't have a booking process yet"
  ];

  return (
    <section id="process" className="bg-brand-bg py-24 px-6 lg:px-16 border-b border-brand-text/10 scroll-mt-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Title and Intro */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-[10px] font-black text-brand-accent tracking-[0.2em] uppercase block">
                WORK WITH BEAR
              </span>
              <h2 id="contact" className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-brand-text tracking-tighter leading-none uppercase">
                Make It Easier.
              </h2>
              <div className="space-y-5 pt-2">
                <p className="font-serif italic font-bold text-xl lg:text-2xl text-brand-text leading-tight">
                  Stop paying yourself to do work your website could be doing for free.
                </p>
                <p className="font-sans text-xs text-brand-text/70 leading-relaxed pt-2">
                  Answer a few questions and I'll build you a free working prototype—complete with a personalised project estimate.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Multi-Step Questionnaire Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-brand-bg p-6 md:p-8 rounded-none border-2 border-brand-text shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] space-y-6 relative">
              
              {/* Step Progress Header */}
              {!isSubmitted && (
                <div className="flex items-center justify-between border-b border-brand-text/10 pb-4 mb-2">
                  <div className="space-y-0.5">
                    <span className="font-mono text-[9px] font-black text-brand-accent uppercase tracking-widest block">
                      Step {step} of 2
                    </span>
                    <h3 className="font-display font-black text-lg text-brand-text uppercase tracking-tight">
                      {step === 1 ? "Let's Make It Easier." : "What's Slowing You Down?"}
                    </h3>
                  </div>
                  {/* Progress Line */}
                  <div className="w-20 h-1.5 bg-brand-text/10 rounded-none overflow-hidden">
                    <div 
                      className="h-full bg-brand-accent transition-all duration-500 ease-out"
                      style={{ width: step === 1 ? "50%" : "100%" }}
                    />
                  </div>
                </div>
              )}

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key={`step-${step}`}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    initial={{ opacity: 0, x: step === 1 ? -15 : 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: step === 1 ? 15 : -15 }}
                    transition={{ duration: 0.25 }}
                  >
                    <input type="hidden" name="form-name" value="prototype-inquiry" />
                    <input type="hidden" name="subject" value={`🐻 New inquiry from a ${formData.profession || "client"}!`} />
                    {step === 1 ? (
                      /* STEP 1 */
                      <div className="space-y-6">
                        
                        {/* What best describes you? / Choose your profession. */}
                        <div className="space-y-1.5">
                          <div className="flex flex-col">
                            <label className="font-mono text-[10px] uppercase font-black tracking-widest text-brand-text">
                              What best describes you?
                            </label>
                            <span className="font-serif italic text-xs text-brand-text/60 mt-0.5">
                              Choose your profession.
                            </span>
                          </div>
                          <div className="relative">
                            <select
                              name="profession"
                              value={formData.profession}
                              onChange={handleInputChange}
                              className="w-full font-sans text-xs p-3.5 rounded-none bg-brand-bg border-2 border-brand-text/15 focus:border-brand-text outline-none transition-all cursor-pointer text-brand-text appearance-none"
                              required
                            >
                              <option value="" disabled>Choose what you do...</option>
                              <option value="Photographer">Photographer</option>
                              <option value="Makeup Artist">Makeup Artist</option>
                              <option value="Mobile Physio">Mobile Physio</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-text">
                              <span className="text-[10px]">▼</span>
                            </div>
                          </div>
                        </div>

                        {/* Where can I see your work? */}
                        <div className="space-y-1.5">
                          <div className="flex flex-col">
                            <label className="font-mono text-[10px] uppercase font-black tracking-widest text-brand-text">
                              Where can I see your work?
                            </label>
                            <span className="font-serif italic text-xs text-brand-text/60 mt-0.5">
                              Instagram, Facebook, Google Business... wherever your clients already find you.
                            </span>
                          </div>
                          <input
                            type="text"
                            name="onlinePresence"
                            required
                            value={formData.onlinePresence}
                            onChange={handleInputChange}
                            placeholder="Paste a link"
                            className="w-full font-sans text-xs p-3.5 rounded-none bg-brand-bg border-2 border-brand-text/15 focus:border-brand-text outline-none transition-all placeholder:text-brand-text/30"
                          />
                          {validationError && (
                            <p className="text-red-500 font-mono text-[10px] font-bold uppercase mt-1">
                              {validationError}
                            </p>
                          )}
                        </div>

                        {/* How do people book you today? */}
                        <div className="space-y-2">
                          <div className="flex flex-col mb-1">
                            <label className="font-mono text-[10px] uppercase font-black tracking-widest text-brand-text">
                              How do people book you today?
                            </label>
                            <span className="font-serif italic text-xs text-brand-text/60 mt-0.5">
                              Show me your current workflow.
                            </span>
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {bookingOptions.map((opt) => {
                              const isChecked = formData.bookingProcess === opt;
                              return (
                                <button
                                  key={opt}
                                  type="button"
                                  onClick={() => handleRadioChange(opt)}
                                  className={`flex items-center gap-3 p-3 text-left border-2 rounded-none transition-all cursor-pointer ${
                                    isChecked
                                      ? "border-brand-text bg-brand-text/5 shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]"
                                      : "border-brand-text/10 hover:border-brand-text/30 bg-brand-bg"
                                  }`}
                                >
                                  <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                                    isChecked ? "border-brand-accent bg-brand-accent/5" : "border-brand-text/30"
                                  }`}>
                                    {isChecked && (
                                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                                    )}
                                  </div>
                                  <span className="font-sans text-[11px] font-semibold text-brand-text">
                                    {opt}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Continue Button */}
                        <button
                          type="button"
                          onClick={handleNextStep}
                          className="w-full py-4 px-6 bg-brand-text hover:bg-brand-accent text-brand-bg hover:text-white font-sans font-black text-xs uppercase tracking-widest rounded-none border-2 border-brand-text transition-all flex items-center justify-center gap-2 cursor-pointer mt-4 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]"
                        >
                          <span>Continue to Step 2</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      /* STEP 2 */
                      <div className="space-y-6">
                        
                        {/* What's slowing you down the most? */}
                        <div className="space-y-1.5">
                          <div className="flex flex-col">
                            <label className="font-mono text-[10px] uppercase font-black tracking-widest text-brand-text">
                              WHAT'S SLOWING YOU DOWN THE MOST?
                            </label>
                            <span className="font-serif italic text-xs text-brand-text/60 mt-0.5">
                              Select the biggest bottleneck in your day
                            </span>
                          </div>
                          <div className="relative">
                            <select
                              name="slowingDown"
                              value={formData.slowingDown}
                              onChange={handleInputChange}
                              className="w-full font-sans text-xs p-3.5 rounded-none bg-brand-bg border-2 border-brand-text/15 focus:border-brand-text outline-none transition-all cursor-pointer text-brand-text appearance-none"
                              required
                            >
                              <option value="" disabled>Choose the biggest time thief...</option>
                              <option value="Too many enquiries">Too many enquiries</option>
                              <option value="Too much back-and-forth">Too much back-and-forth</option>
                              <option value="Missed bookings">Missed bookings</option>
                              <option value="Clients ask the same questions">Clients ask the same questions</option>
                              <option value="My website needs an upgrade">My website needs an upgrade</option>
                              <option value="Other...">Other...</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-text">
                              <span className="text-[10px]">▼</span>
                            </div>
                          </div>
                        </div>

                        {/* Where should I send your prototype? / drop your email */}
                        <div className="space-y-1.5">
                          <div className="flex flex-col">
                            <label className="font-mono text-[10px] uppercase font-black tracking-widest text-brand-text">
                              WHERE SHOULD I SEND YOUR PROTOTYPE?
                            </label>
                            <span className="font-serif italic text-xs text-brand-text/60 mt-0.5">
                              drop your email
                            </span>
                          </div>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="e.g. you@yourbrand.com"
                            className="w-full font-sans text-xs p-3.5 rounded-none bg-brand-bg border-2 border-brand-text/15 focus:border-brand-text outline-none transition-all placeholder:text-brand-text/30"
                          />
                          {validationError && (
                            <p className="text-red-500 font-mono text-[10px] font-bold uppercase mt-1">
                              {validationError}
                            </p>
                          )}
                        </div>

                        {/* Back and Submit Actions Grid */}
                        <div className="flex items-center gap-3 pt-2">
                          <button
                            type="button"
                            onClick={handlePrevStep}
                            className="py-4 px-5 bg-transparent hover:bg-brand-text/5 text-brand-text font-sans font-black text-xs uppercase tracking-widest rounded-none border-2 border-brand-text/20 hover:border-brand-text transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0"
                          >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            <span>Back</span>
                          </button>
                          
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 py-4 px-6 bg-brand-text hover:bg-brand-accent text-brand-bg hover:text-white font-sans font-black text-xs uppercase tracking-widest rounded-none border-2 border-brand-text transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:pointer-events-none shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]"
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-4 h-4 border-2 border-brand-bg/30 border-t-brand-bg rounded-full animate-spin" />
                                <span>Preparing Blueprint...</span>
                              </>
                            ) : (
                              <span>Build My Prototype</span>
                            )}
                          </button>
                        </div>

                      </div>
                    )}
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    className="text-center py-8 space-y-6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-accent/10 border-2 border-brand-accent text-brand-accent mx-auto rounded-none">
                      <CheckCircle2 className="w-8 h-8 text-brand-accent" />
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-display font-black text-lg md:text-xl text-brand-text uppercase tracking-tight leading-snug">
                        PROTOTYPE REQUEST RECEIVED 🐻✅
                      </h4>
                      <p className="font-serif italic font-bold text-sm md:text-base text-brand-text">
                        You're in.
                      </p>
                      <p className="font-sans text-xs text-brand-text/75 max-w-md mx-auto leading-relaxed">
                        Your prototype is now queued for build, and is on its way to{" "}
                        <span className="bg-brand-accent/10 border border-brand-accent/20 px-1.5 py-0.5 text-brand-accent font-bold break-all inline-block select-all">
                          {formData.email}
                        </span>
                      </p>
                    </div>
                    <div className="pt-4">
                      <a 
                        href="#process" 
                        onClick={handleReset}
                        className="font-mono text-xs font-black text-brand-accent hover:text-brand-text underline underline-offset-4 decoration-2 uppercase transition-all tracking-widest"
                      >
                        [ Back to Form ]
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
