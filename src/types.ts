export interface ServiceItem {
  id: string;
  focus: string;
  title?: string;
  subheading: string;
  paragraph: string;
  theme: "light" | "dark";
}

export type ProfessionType = "Photographer" | "Makeup Artist" | "Landscaper" | "";

export type CurrentToolType = "INSTAGRAM" | "WHATSAPP" | "EMAIL" | "PIXIE SET";

export interface SiteRequestFormData {
  name: string;
  tools: string[];
  profession?: ProfessionType;
  businessName?: string;
  whatsappNumber?: string;
}

export interface ScheduledCallData {
  date: string;
  time: string;
  callMedium: "whatsapp" | "meet";
}
