export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarSeed: string;
}

export interface ContactFormData {
  profession: string;
  onlinePresence: string;
  bookingProcess: string;
  slowingDown: string;
  email: string;
}

export interface ProjectSolutionEstimate {
  estimatedTime: string;
  complexity: 'Simple Core' | 'Custom Full-Stack' | 'Premium Brand Presence';
  suggestedDeliverables: string[];
}
