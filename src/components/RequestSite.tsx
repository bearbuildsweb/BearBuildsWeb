import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Calendar as CalendarIcon,
  Clock,
  Check,
  ChevronDown,
  MessageCircle,
  ArrowRight,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { SiteRequestFormData, ProfessionType, ScheduledCallData } from "../types";

// Helper to generate the next 7 business days
function getAvailableDates() {
  const dates: { dateStr: string; weekday: string; dayNum: string; monthStr: string }[] = [];
  const curr = new Date();
  let added = 0;
  
  // Start from tomorrow
  let pointer = new Date(curr);
  pointer.setDate(pointer.getDate() + 1);

  while (added < 4) {
    const day = pointer.getDay();
    // Skip Saturday (6) and Sunday (0)
    if (day !== 0 && day !== 6) {
      const weekday = pointer.toLocaleDateString("en-US", { weekday: "short" });
      const dayNum = pointer.getDate().toString().padStart(2, "0");
      const monthStr = pointer.toLocaleDateString("en-US", { month: "short" });
      const dateStr = `${weekday}, ${dayNum} ${monthStr}`;
      dates.push({ dateStr, weekday, dayNum, monthStr });
      added++;
    }
    pointer.setDate(pointer.getDate() + 1);
  }
  return dates;
}

const AVAILABLE_TIMES = [
  "10:30 SAST",
  "16:30 SAST",
];

export default function RequestSite() {
  // Form State
  const [formData, setFormData] = useState<SiteRequestFormData>({
    name: "",
    profession: "",
  });

  // Validation / Error state
  const [errors, setErrors] = useState<{ [K in keyof SiteRequestFormData]?: string }>({});

  // Workflow step: 1 = Form Intake, 2 = Calendar Scheduler, 3 = Confirmation Receipt
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

  // Calendar State
  const availableDates = getAvailableDates();
  const [selectedDate, setSelectedDate] = useState<string>(availableDates[0]?.dateStr || "");
  const [selectedTime, setSelectedTime] = useState<string>(AVAILABLE_TIMES[0]);

  // Handle Form Submit
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [K in keyof SiteRequestFormData]?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }
    if (!formData.profession) {
      newErrors.profession = "Please select your profession";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setCurrentStep(2);
  };

  // Handle Calendar Confirmation
  const handleConfirmCall = () => {
    setCurrentStep(3);
  };

  // Pre-filled WhatsApp message for confirmation
  const whatsappUrl = `https://wa.me/27680246914?text=${encodeURIComponent(
    `Hi Bear! I'm ${formData.name}${formData.profession ? ` (${formData.profession})` : ""}. I just requested a site on Bear Builds Web and scheduled our discovery call for ${selectedDate} at ${selectedTime} via WhatsApp. Looking forward to connecting!`
  )}`;

  return (
    <section
      id="request-site"
      className="bg-brand-bg py-20 sm:py-28 px-4 sm:px-6 lg:px-16 border-b border-brand-text/10 relative overflow-hidden scroll-mt-10"
    >
      {/* Top Border with Corner Industrial Bolts */}
      <div 
        className="absolute top-0 inset-x-0 h-6 border-b border-dashed border-[#1A1A1A]/10 flex items-center justify-between px-6 sm:px-12 pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* Left Corner Industrial Bolt */}
        <div 
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br from-[#ECE8E1] via-[#D5CFC3] to-[#B3ABA0] border border-[#1A1A1A]/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_1px_2px_rgba(0,0,0,0.12)] flex items-center justify-center rotate-[33deg] select-none shrink-0" 
          title="Mounting Bolt" 
        >
          <div className="relative w-2 h-2 flex items-center justify-center">
            <div className="absolute w-1.5 sm:w-2 h-px bg-[#1A1A1A]/60 rounded-xs shadow-[0_0.5px_0.5px_rgba(0,0,0,0.4)]" />
            <div className="absolute h-1.5 sm:h-2 w-px bg-[#1A1A1A]/60 rounded-xs shadow-[0_0.5px_0.5px_rgba(0,0,0,0.4)]" />
          </div>
        </div>

        {/* Right Corner Industrial Bolt */}
        <div 
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br from-[#ECE8E1] via-[#D5CFC3] to-[#B3ABA0] border border-[#1A1A1A]/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_1px_2px_rgba(0,0,0,0.12)] flex items-center justify-center rotate-[68deg] select-none shrink-0" 
          title="Mounting Bolt" 
        >
          <div className="relative w-2 h-2 flex items-center justify-center">
            <div className="absolute w-1.5 sm:w-2 h-px bg-[#1A1A1A]/60 rounded-xs shadow-[0_0.5px_0.5px_rgba(0,0,0,0.4)]" />
            <div className="absolute h-1.5 sm:h-2 w-px bg-[#1A1A1A]/60 rounded-xs shadow-[0_0.5px_0.5px_rgba(0,0,0,0.4)]" />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center sm:text-left space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 font-mono text-[9px] sm:text-[10px] font-black text-brand-accent tracking-[0.22em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
            <span>START HERE</span>
            <span className="text-[#1A1A1A]/30">//</span>
          </div>

          <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-brand-text uppercase leading-[0.9]">
            LET’S TALK ABOUT YOUR SITE.
          </h2>
        </div>

        {/* The Tactile Workshop Intake Card */}
        <div className="relative max-w-3xl mx-auto w-full">
          
          {/* Top Washi Tape Strip with rugged angle */}
          <div 
            className="absolute -top-3.5 left-8 sm:left-14 z-30 w-24 sm:w-28 h-5 bg-[#E2D8C7]/90 backdrop-blur-xs border-y border-[#1A1A1A]/12 shadow-[0_1px_3px_rgba(0,0,0,0.06)] -rotate-2 select-none pointer-events-none"
            aria-hidden="true"
          />

          {/* Stamped Brass Eyelet / Corner Markings */}
          <div 
            className="hidden sm:flex absolute -top-3 -right-3 z-30 w-7 h-7 rounded-full bg-white border border-[#1A1A1A]/20 shadow-xs items-center justify-center font-mono text-[10px] text-[#8C6D46] font-bold select-none"
            title="Intake punch mark"
            aria-hidden="true"
          >
            #1
          </div>

          {/* Physical Workshop Card Body */}
          <div className="relative bg-[#FAF8F5] border-2 border-[#1A1A1A] rounded-2xl shadow-[6px_6px_0px_0px_#1A1A1A] sm:shadow-[8px_8px_0px_0px_#1A1A1A] p-6 sm:p-10 transition-all duration-300">
            
            {/* Header Ledger Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b-2 border-dashed border-[#1A1A1A]/15 select-none">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-xs bg-[#8C6D46]" />
                <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A]">
                  PULL UP A CHAIR // START HERE.
                </span>
              </div>

              {/* Step indicator pills */}
              <div className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] uppercase font-bold tracking-widest">
                <span className={`px-2.5 py-1 rounded-sm border ${
                  currentStep === 1 
                    ? "bg-[#1A1A1A] text-white border-[#1A1A1A]" 
                    : "bg-white text-[#1A1A1A]/60 border-[#1A1A1A]/20"
                }`}>
                  01. INTAKE
                </span>
                <span className="text-[#1A1A1A]/30">→</span>
                <span className={`px-2.5 py-1 rounded-sm border ${
                  currentStep >= 2 
                    ? "bg-[#1A1A1A] text-white border-[#1A1A1A]" 
                    : "bg-white text-[#1A1A1A]/40 border-[#1A1A1A]/10"
                }`}>
                  02. CALENDAR
                </span>
              </div>
            </div>

            {/* CONTENT VIEWS WITH ANIMATION */}
            <AnimatePresence mode="wait">
              
              {/* STEP 1: INTAKE FORM */}
              {currentStep === 1 && (
                <motion.form
                  key="step-1"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  onSubmit={handleFormSubmit}
                  className="space-y-7"
                  noValidate
                >
                  {/* Subtle Workshop Note */}
                  <div className="flex items-center gap-2 text-[#8C6D46] font-mono text-[9.5px] uppercase tracking-wider font-semibold bg-[#8C6D46]/8 border border-[#8C6D46]/20 px-3 py-2 rounded-md">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>Good design starts with details.</span>
                  </div>

                  {/* 2-Column Grid for Name & Business Name */}
                  {/* FIELD 01: NAME */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label 
                        htmlFor="client-name"
                        className="font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#1A1A1A] flex items-center gap-1.5"
                      >
                        <span className="text-[#8C6D46] font-bold">[01]</span>
                        <span>NAME</span>
                      </label>
                      {errors.name && (
                        <span className="font-mono text-[9px] text-red-600 font-bold uppercase tracking-wider">
                          {errors.name}
                        </span>
                      )}
                    </div>
                    <div className="relative">
                      <input
                        id="client-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, name: e.target.value }));
                          if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                        }}
                        placeholder="Your name"
                        className={`w-full bg-white text-[#1A1A1A] font-sans text-sm sm:text-base px-4 py-3.5 rounded-lg border-2 transition-colors duration-200 outline-none placeholder:text-[#1A1A1A]/35 ${
                          errors.name
                            ? "border-red-500 focus:border-red-600"
                            : "border-[#1A1A1A]/20 hover:border-[#1A1A1A]/45 focus:border-[#1A1A1A] focus:bg-[#FFFDFB]"
                        }`}
                      />
                    </div>
                  </div>

                  {/* FIELD 02: PROFESSION (Dropdown / Select + Tactile Quick-Selection) */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <label 
                        htmlFor="profession-select"
                        className="font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#1A1A1A] flex items-center gap-1.5"
                      >
                        <span className="text-[#8C6D46] font-bold">[02]</span>
                        <span>PROFESSION</span>
                      </label>
                      {errors.profession && (
                        <span className="font-mono text-[9px] text-red-600 font-bold uppercase tracking-wider">
                          {errors.profession}
                        </span>
                      )}
                    </div>

                    {/* Standard Select Dropdown with bespoke styling */}
                    <div className="relative">
                      <select
                        id="profession-select"
                        value={formData.profession}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, profession: e.target.value as ProfessionType }));
                          if (errors.profession) setErrors((prev) => ({ ...prev, profession: undefined }));
                        }}
                        className={`w-full appearance-none bg-white text-[#1A1A1A] font-sans text-sm sm:text-base px-4 py-3.5 pr-10 rounded-lg border-2 transition-colors duration-200 outline-none cursor-pointer ${
                          !formData.profession ? "text-[#1A1A1A]/40" : "text-[#1A1A1A] font-medium"
                        } ${
                          errors.profession
                            ? "border-red-500 focus:border-red-600"
                            : "border-[#1A1A1A]/20 hover:border-[#1A1A1A]/45 focus:border-[#1A1A1A] focus:bg-[#FFFDFB]"
                        }`}
                      >
                        <option value="" disabled>
                          Select your profession...
                        </option>
                        <option value="Photographer">Photographer</option>
                        <option value="Makeup Artist">Makeup Artist</option>
                        <option value="Landscaper">Landscaper</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-[#1A1A1A]/50 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>

                    {/* Tactile Workshop Quick-Pick Chips */}
                    <div className="pt-1 flex flex-wrap gap-2">
                      {(["Photographer", "Makeup Artist", "Landscaper"] as const).map((item) => {
                        const isSelected = formData.profession === item;
                        return (
                          <button
                            key={item}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, profession: item }));
                              if (errors.profession) setErrors((prev) => ({ ...prev, profession: undefined }));
                            }}
                            className={`px-3 py-1.5 rounded-md font-mono text-[10px] uppercase font-bold tracking-wider transition-all duration-200 cursor-pointer border ${
                              isSelected
                                ? "bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-xs"
                                : "bg-white/80 hover:bg-white text-[#1A1A1A]/75 border-[#1A1A1A]/15 hover:border-[#1A1A1A]/35"
                            }`}
                          >
                            {isSelected ? `✓ ${item}` : `+ ${item}`}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submit Action Strip with Tactile Button */}
                  <div className="pt-4 sm:pt-6 border-t border-dashed border-[#1A1A1A]/15 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-4">
                    <button
                      id="submit-intake-btn"
                      type="submit"
                      className="group relative inline-flex items-center justify-center gap-3 bg-[#1A1A1A] hover:bg-[#8C6D46] text-white font-mono text-xs sm:text-sm font-black uppercase tracking-widest px-8 py-4.5 rounded-lg border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#8C6D46] hover:shadow-[4px_4px_0px_0px_#1A1A1A] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#1A1A1A] transition-all duration-200 cursor-pointer select-none"
                    >
                      <span>LET'S BUILD IT</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.form>
              )}

              {/* STEP 2: CALL SCHEDULING / CALENDAR INTERFACE */}
              {currentStep === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="space-y-8"
                >
                  {/* Workshop Ticket Stub for Registered Client with Edit Action */}
                  <div className="bg-[#FAF6EE] border border-[#1A1A1A]/15 rounded-xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-bold text-sm">
                        {formData.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-bold text-[#1A1A1A] uppercase text-xs sm:text-sm">
                          {formData.name}
                        </p>
                        <p className="text-[10px] text-[#8C6D46] font-semibold uppercase tracking-wider">
                          {formData.profession}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-white hover:bg-[#FAF8F5] border border-[#1A1A1A]/15 hover:border-[#1A1A1A]/40 text-[9px] text-[#1A1A1A]/50 hover:text-[#1A1A1A] uppercase font-bold tracking-wider cursor-pointer transition-all duration-150"
                      title="Edit intake details"
                    >
                      <RotateCcw className="w-3 h-3 text-[#1A1A1A]/50" />
                      <span>EDIT DETAILS</span>
                    </button>
                  </div>

                  {/* Step 02 Heading Segment */}
                  <div className="border-b-2 border-dashed border-[#1A1A1A]/15 pb-5">
                    <div className="space-y-1">
                      <span className="font-mono text-[9px] font-black uppercase tracking-[0.2em] text-[#8C6D46] block">
                        STEP 02 // LET'S TALK
                      </span>
                      <h3 className="font-display font-black text-3xl sm:text-4xl text-[#1A1A1A] uppercase tracking-tight">
                        BOOK THE CONVERSATION
                      </h3>
                    </div>
                  </div>

                  {/* Date Selection */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#1A1A1A] flex items-center gap-1.5">
                        <CalendarIcon className="w-3.5 h-3.5 text-[#8C6D46]" />
                        <span>SELECT DATE</span>
                      </label>
                      <span className="font-mono text-[9px] text-[#1A1A1A]/40 uppercase tracking-wider">
                        Available Business Days
                      </span>
                    </div>

                    {/* Horizontal Date Picker Cards (4 Days) */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                      {availableDates.map((item) => {
                        const isSelected = selectedDate === item.dateStr;
                        return (
                          <button
                            key={item.dateStr}
                            type="button"
                            onClick={() => setSelectedDate(item.dateStr)}
                            className={`p-3 rounded-lg border-2 flex flex-col items-center justify-center gap-1 transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? "bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-[2px_2px_0px_0px_#8C6D46]"
                                : "bg-white hover:bg-[#FAF8F5] text-[#1A1A1A] border-[#1A1A1A]/15 hover:border-[#1A1A1A]/40"
                            }`}
                          >
                            <span className={`font-mono text-[9px] uppercase tracking-widest ${
                              isSelected ? "text-white/70" : "text-[#1A1A1A]/50"
                            }`}>
                              {item.weekday}
                            </span>
                            <span className="font-sans font-extrabold text-lg sm:text-xl leading-none">
                              {item.dayNum}
                            </span>
                            <span className={`font-mono text-[8.5px] uppercase tracking-wider ${
                              isSelected ? "text-white/70" : "text-[#1A1A1A]/50"
                            }`}>
                              {item.monthStr}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time Slot Selection */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#1A1A1A] flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#8C6D46]" />
                        <span>SELECT TIME SLOT (SOUTH AFRICA / SAST)</span>
                      </label>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {AVAILABLE_TIMES.map((timeSlot) => {
                        const isSelected = selectedTime === timeSlot;
                        return (
                          <button
                            key={timeSlot}
                            type="button"
                            onClick={() => setSelectedTime(timeSlot)}
                            className={`px-3 py-3 rounded-lg border-2 font-mono text-xs font-bold tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 ${
                              isSelected
                                ? "bg-[#8C6D46] text-white border-[#8C6D46] shadow-[2px_2px_0px_0px_#1A1A1A]"
                                : "bg-white hover:bg-[#FAF8F5] text-[#1A1A1A] border-[#1A1A1A]/15 hover:border-[#1A1A1A]/40"
                            }`}
                          >
                            <span>{timeSlot}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Confirmation Action */}
                  <div className="pt-6 border-t border-dashed border-[#1A1A1A]/15 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div className="text-left font-mono text-[10px] text-[#1A1A1A]/60 uppercase tracking-widest">
                      Reservation: <span className="font-bold text-[#1A1A1A]">{selectedDate}</span> at{" "}
                      <span className="font-bold text-[#1A1A1A]">{selectedTime}</span>
                    </div>

                    <a
                      id="step2-confirm-whatsapp-btn"
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleConfirmCall}
                      className="group relative inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-mono text-xs sm:text-sm font-black uppercase tracking-widest px-8 py-4.5 rounded-lg border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-x-0.5 active:translate-y-0.5 transition-all duration-200 cursor-pointer select-none"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>CONFIRM ON WHATSAPP</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: TICKET RECEIPT CONFIRMATION */}
              {currentStep === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="space-y-8 text-center sm:text-left"
                >
                  {/* Stamped Banner */}
                  <div className="bg-[#FAF5EC] border-2 border-[#8C6D46] rounded-xl p-6 sm:p-8 relative overflow-hidden shadow-xs">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#8C6D46]/10 text-[#8C6D46] font-mono text-[9px] uppercase font-black tracking-widest">
                        <Check className="w-3 h-3" />
                        <span>REQUEST TICKET</span>
                      </div>
                      <h3 className="font-display font-black text-3xl sm:text-5xl text-[#1A1A1A] uppercase tracking-tight">
                        YOU'RE ON THE SCHEDULE.
                      </h3>
                      <div className="font-mono text-xs sm:text-sm text-[#1A1A1A]/65 max-w-xl space-y-1 pt-1 leading-relaxed">
                        <p>
                          Hi <span className="font-bold text-[#1A1A1A]">{formData.name}</span> — request received.
                        </p>
                      </div>
                    </div>

                    {/* Booking Details Grid */}
                    <div className="mt-6 pt-6 border-t border-dashed border-[#8C6D46]/30 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left font-mono">
                      <div className="bg-white/80 p-3.5 rounded-lg border border-[#8C6D46]/20">
                        <span className="text-[9px] text-[#1A1A1A]/50 uppercase tracking-widest block">DATE</span>
                        <span className="text-sm font-black text-[#1A1A1A] uppercase">{selectedDate}</span>
                      </div>
                      <div className="bg-white/80 p-3.5 rounded-lg border border-[#8C6D46]/20">
                        <span className="text-[9px] text-[#1A1A1A]/50 uppercase tracking-widest block">TIME</span>
                        <span className="text-sm font-black text-[#1A1A1A] uppercase">{selectedTime}</span>
                      </div>
                      <div className="bg-white/80 p-3.5 rounded-lg border border-[#8C6D46]/20">
                        <span className="text-[9px] text-[#1A1A1A]/50 uppercase tracking-widest block">MEDIUM</span>
                        <span className="text-sm font-black text-[#1A1A1A] uppercase">
                          WhatsApp
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions for User */}
                  <div className="flex items-center justify-end pt-2">
                    {/* Done / Reset Form and redirect to top */}
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ name: "", profession: "" });
                        setSelectedDate(availableDates[0]?.dateStr || "");
                        setSelectedTime(AVAILABLE_TIMES[0]);
                        setErrors({});
                        setCurrentStep(1);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#1A1A1A] hover:text-[#8C6D46] px-6 py-3.5 rounded-lg border border-[#1A1A1A]/20 bg-white hover:border-[#1A1A1A]/50 transition-colors uppercase tracking-wider cursor-pointer shadow-xs"
                    >
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>DONE</span>
                    </button>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>

          </div>

          {/* Bottom Card Specifications Footnote */}
          <div className="mt-4 px-3 flex items-center justify-between font-mono text-[8.5px] sm:text-[9.5px] text-[#1A1A1A]/45 uppercase tracking-wider select-none">
            <span>CRAFTED IN SOUTH AFRICA</span>
            <span className="hidden sm:inline"></span>
            <span>BEAR BUILDS WEB</span>
          </div>

        </div>

      </div>
    </section>
  );
}
