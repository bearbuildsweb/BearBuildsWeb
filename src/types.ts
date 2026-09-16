export interface ServiceItem {
  id: string;
  focus: string;
  title: string;
  quote: string;
  approach: string;
  theme: "light" | "dark";
}

export type ProfessionType = "Photographer" | "Makeup Artist" | "Landscaper" | "";

export interface SiteRequestFormData {
  name: string;
  profession: ProfessionType;
  businessName?: string;
  whatsappNumber?: string;
}

export interface ScheduledCallData {
  date: string;
  time: string;
  callMedium: "whatsapp" | "meet";
}
