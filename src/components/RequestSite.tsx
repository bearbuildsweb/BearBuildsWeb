import React, { useState } from "react";
import {
  Check,
  MessageCircle,
  ArrowRight,
  Instagram,
  Mail,
  Image as ImageIcon,
  CheckCheck,
} from "lucide-react";
import { SiteRequestFormData, CurrentToolType } from "../types";

// Current tools offered for selection
const CURRENT_TOOLS: CurrentToolType[] = [
  "INSTAGRAM",
  "WHATSAPP",
  "EMAIL",
  "PIXIE SET",
];

// Helper to render dedicated icon for each tool tab
function getToolIcon(tool: CurrentToolType) {
  switch (tool) {
    case "INSTAGRAM":
      return <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" strokeWidth={2} />;
    case "WHATSAPP":
      return <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" strokeWidth={2} />;
    case "EMAIL":
      return <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" strokeWidth={2} />;
    case "PIXIE SET":
      return <ImageIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" strokeWidth={2} />;
  }
}

export default function RequestSite() {
  // Form State (Single-step intake)
  const [formData, setFormData] = useState<SiteRequestFormData>({
    name: "",
    tools: [],
  });

  // Validation / Error state
  const [errors, setErrors] = useState<{ [K in keyof SiteRequestFormData]?: string }>({});

  // Dynamic preview text calculation
  const clientNameDisplay = formData.name.trim() || "[name]";
  const toolsDisplay =
    formData.tools.length > 0 ? formData.tools.join(", ") : "[select tools]";

  const whatsappUrl = `https://wa.me/27680246914?text=${encodeURIComponent(
    `Hi Bear! I’m ${formData.name.trim() || "[name]"}.  my current tools are: ${
      formData.tools.length > 0 ? formData.tools.join(", ") : "[select tools]"
    }\nI’d love to chat about building a digital front door for my work. Looking forward to connecting.`
  )}`;

  // Handle Form Submit
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [K in keyof SiteRequestFormData]?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }
    if (!formData.tools || formData.tools.length === 0) {
      newErrors.tools = "Please select at least one tool";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    // Open WhatsApp directly with prefilled message
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="request-site"
      className="bg-brand-bg py-20 sm:py-28 px-4 sm:px-6 lg:px-16 border-b border-brand-text/10 relative overflow-hidden scroll-mt-10"
    >
      {/* Top Border with Corner Industrial Bolts */}
      <div 
        className="absolute top-0 inset-x-0 h-6 border-b border-dashed border-[#18181B]/10 flex items-center justify-between px-6 sm:px-12 pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* Left Corner Industrial Bolt */}
        <div 
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br from-[#F3F4F6] via-[#D1D5DB] to-[#9CA3AF] border border-[#18181B]/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_1px_2px_rgba(0,0,0,0.12)] flex items-center justify-center rotate-[33deg] select-none shrink-0" 
          title="Mounting Bolt" 
        >
          <div className="relative w-2 h-2 flex items-center justify-center">
            <div className="absolute w-1.5 sm:w-2 h-px bg-[#18181B]/60 rounded-xs shadow-[0_0.5px_0.5px_rgba(0,0,0,0.4)]" />
            <div className="absolute h-1.5 sm:h-2 w-px bg-[#18181B]/60 rounded-xs shadow-[0_0.5px_0.5px_rgba(0,0,0,0.4)]" />
          </div>
        </div>

        {/* Right Corner Industrial Bolt */}
        <div 
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br from-[#F3F4F6] via-[#D1D5DB] to-[#9CA3AF] border border-[#18181B]/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_1px_2px_rgba(0,0,0,0.12)] flex items-center justify-center rotate-[68deg] select-none shrink-0" 
          title="Mounting Bolt" 
        >
          <div className="relative w-2 h-2 flex items-center justify-center">
            <div className="absolute w-1.5 sm:w-2 h-px bg-[#18181B]/60 rounded-xs shadow-[0_0.5px_0.5px_rgba(0,0,0,0.4)]" />
            <div className="absolute h-1.5 sm:h-2 w-px bg-[#18181B]/60 rounded-xs shadow-[0_0.5px_0.5px_rgba(0,0,0,0.4)]" />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center sm:text-left space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 font-mono text-[9px] sm:text-[10px] font-black text-brand-accent tracking-[0.22em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
            <span>START HERE</span>
            <span className="text-[#18181B]/30">//</span>
          </div>

          <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-brand-text uppercase leading-[0.9]">
            LET’S GIVE YOUR WORK A FRONT DOOR.
          </h2>
        </div>

        {/* The Tactile Workshop Intake Card */}
        <div className="relative max-w-3xl mx-auto w-full">
          
          {/* Top Washi Tape Strip with rugged angle */}
          <div 
            className="absolute -top-3.5 left-8 sm:left-14 z-30 w-24 sm:w-28 h-5 bg-[#E5E7EB]/90 backdrop-blur-xs border-y border-[#18181B]/12 shadow-[0_1px_3px_rgba(0,0,0,0.06)] -rotate-2 select-none pointer-events-none"
            aria-hidden="true"
          />

          {/* Physical Workshop Card Body */}
          <div className="relative bg-white sm:bg-[#F8F9FA] border-2 border-[#18181B] rounded-2xl shadow-[6px_6px_0px_0px_#18181B] sm:shadow-[8px_8px_0px_0px_#18181B] p-6 sm:p-10 transition-all duration-300">
            
            {/* Header Ledger Strip */}
            <div className="flex items-center justify-between pb-6 mb-8 border-b-2 border-dashed border-[#18181B]/15 select-none">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-xs bg-[#18181B]" />
                <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#18181B]">
                  REQUEST YOURS
                </span>
              </div>
            </div>

            {/* SINGLE-STEP INTAKE FORM */}
            <form onSubmit={handleFormSubmit} className="space-y-8" noValidate>
              
              {/* FIELD 01: NAME */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label 
                    htmlFor="client-name"
                    className="font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#18181B] flex items-center gap-1.5"
                  >
                    <span className="text-[#52525B] font-bold">[01]</span>
                    <span>YOUR NAME</span>
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
                    placeholder="Erica Dube"
                    className={`w-full bg-white text-[#18181B] font-sans text-sm sm:text-base px-4 py-3.5 rounded-lg border-2 transition-all duration-200 outline-none placeholder:text-[#18181B]/35 caret-[#18181B] selection:bg-[#18181B] selection:text-white ${
                      errors.name
                        ? "border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-500/15"
                        : "border-[#18181B]/20 hover:border-[#18181B]/40 focus:border-[#18181B] focus:bg-white focus:ring-2 focus:ring-[#18181B]/10 shadow-xs focus:shadow-[0_2px_8px_rgba(24,24,27,0.06)]"
                    }`}
                  />
                </div>
              </div>

              {/* FIELD 02: CURRENT TOOLS (Multiple Selection Tabs) */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label 
                    className="font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#18181B] flex items-center gap-1.5"
                  >
                    <span className="text-[#52525B] font-bold">[02]</span>
                    <span>YOUR CURRENT TOOLS</span>
                  </label>
                  {errors.tools && (
                    <span className="font-mono text-[9px] text-red-600 font-bold uppercase tracking-wider">
                      {errors.tools}
                    </span>
                  )}
                </div>

                <p className="font-mono text-[9px] sm:text-[10px] text-[#18181B]/55 uppercase tracking-wider">
                  Select all that apply:
                </p>

                {/* Multiple selection tabs: INSTAGRAM | WHATSAPP | EMAIL | PIXIE SET */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-1">
                  {CURRENT_TOOLS.map((tool) => {
                    const isSelected = formData.tools.includes(tool);
                    return (
                      <button
                        key={tool}
                        type="button"
                        onClick={() => {
                          setFormData((prev) => {
                            const exists = prev.tools.includes(tool);
                            const updatedTools = exists
                              ? prev.tools.filter((t) => t !== tool)
                              : [...prev.tools, tool];
                            return { ...prev, tools: updatedTools };
                          });
                          if (errors.tools) setErrors((prev) => ({ ...prev, tools: undefined }));
                        }}
                        className={`group relative p-3 sm:p-3.5 rounded-xl border-2 transition-all duration-200 cursor-pointer flex flex-col justify-between gap-3 text-left select-none ${
                          isSelected
                            ? "bg-[#18181B] text-white border-[#18181B] shadow-[3px_3px_0px_0px_#52525B] -translate-y-0.5"
                            : "bg-white hover:bg-[#FAF8F5] text-[#18181B] border-[#18181B]/15 hover:border-[#18181B]/40 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(24,24,27,0.08)]"
                        }`}
                      >
                        {/* Top Row: Icon Badge & Checkmark Indicator */}
                        <div className="flex items-center justify-between w-full">
                          <div
                            className={`w-7 h-7 rounded-md flex items-center justify-center transition-colors ${
                              isSelected
                                ? "bg-white/15 text-white"
                                : "bg-[#18181B]/5 text-[#18181B] group-hover:bg-[#18181B]/10"
                            }`}
                          >
                            {getToolIcon(tool)}
                          </div>
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                              isSelected
                                ? "bg-white text-[#18181B] border-white font-black"
                                : "border-[#18181B]/25 bg-transparent text-transparent group-hover:border-[#18181B]/45"
                            }`}
                            aria-hidden="true"
                          >
                            <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                          </div>
                        </div>

                        {/* Bottom Row: Tool Name */}
                        <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider uppercase truncate">
                          {tool}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* WHATSAPP MESSAGE PREVIEW */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2 font-mono text-[9.5px] sm:text-[10.5px] font-black uppercase tracking-wider text-[#18181B]">
                  <span className="w-2 h-2 rounded-full bg-[#1B8755]" />
                  <span>MESSAGE PREVIEW</span>
                </div>

                {/* WhatsApp Chat Card Container */}
                <div className="relative rounded-2xl bg-[#EFEAE2] border-2 border-[#18181B]/20 p-4 sm:p-5 shadow-inner overflow-hidden">
                  {/* Subtle WhatsApp wallpaper pattern styling */}
                  <div 
                    className="absolute inset-0 opacity-[0.035] pointer-events-none"
                    style={{
                      backgroundImage: "radial-gradient(#18181B 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                    }}
                  />

                  {/* WhatsApp Message Bubble */}
                  <div className="relative z-10 flex justify-end">
                    <div className="relative max-w-full sm:max-w-xl bg-[#DCF8C6] border border-[#25D366]/30 text-[#111B21] rounded-2xl rounded-tr-xs p-3.5 sm:p-4 shadow-sm text-left">
                      <p className="font-sans text-[13px] sm:text-[14.5px] leading-relaxed text-[#111B21]">
                        Hi Bear! I’m{" "}
                        <span className="font-bold text-[#111B21]">
                          {clientNameDisplay}
                        </span>
                        . &nbsp;my current tools are:{" "}
                        <span className="font-bold text-[#111B21]">
                          {toolsDisplay}
                        </span>
                        <br />
                        I’d love to chat about building a digital front door for my work. Looking forward to connecting.
                      </p>

                      {/* Bubble Meta (Timestamp & Double Tick) */}
                      <div className="flex items-center justify-end gap-1 mt-2 text-[10px] font-mono text-[#18181B]/60 font-semibold">
                        <span>Just now</span>
                        <CheckCheck className="w-3.5 h-3.5 text-[#34B7F1]" strokeWidth={2.2} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Action Strip with Tactile WhatsApp Button */}
              <div className="pt-4 sm:pt-6 border-t border-dashed border-[#18181B]/15 flex items-center justify-end">
                <button
                  id="submit-intake-btn"
                  type="submit"
                  className="group relative inline-flex items-center justify-center gap-3 bg-[#1B8755] hover:bg-[#146C43] text-white font-mono text-xs sm:text-sm font-black uppercase tracking-widest px-8 py-4 sm:py-4.5 rounded-lg border-2 border-[#18181B] shadow-[4px_4px_0px_0px_#18181B] hover:shadow-[6px_6px_0px_0px_#18181B] active:translate-x-0.5 active:translate-y-0.5 transition-all duration-200 cursor-pointer select-none w-full sm:w-auto"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>SEND ON WHATSAPP</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </form>

          </div>

          {/* Bottom Card Specifications Footnote */}
          <div className="mt-4 px-3 flex items-center justify-between font-mono text-[8.5px] sm:text-[9.5px] text-[#18181B]/45 uppercase tracking-wider select-none">
            <span>CRAFTED IN SOUTH AFRICA</span>
            <span className="hidden sm:inline"></span>
            <span>BEAR BUILDS WEB</span>
          </div>

        </div>

      </div>
    </section>
  );
}
