import { LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  recommended?: boolean;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
  tags: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
  stepNumber: number;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
}