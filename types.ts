import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  content: string;
  image?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
}
