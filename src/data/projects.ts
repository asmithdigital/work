import type { ImageMetadata } from 'astro';
import designImg from '../assets/images/raa-travel-home.png';
import devImg from '../assets/images/design-system-2.png';
import freeImg from '../assets/images/freelance-1a.png';

export type Project = { name: string; title: string; background: 'lime'|'cyan'|'lavender'|'mint'; variant: string; href: string; image: ImageMetadata; alt: string; imageClass: string };

export const projects: Project[] = [
  { name: 'Design', title: 'Product design for complex digital products, from discovery to shipped.', background: 'lime', variant: 'desktop', href: '/work/design', image: designImg, alt: 'RAA Travel homepage', imageClass: 'project-preview-image' },
  { name: 'Development', title: 'Twenty years of code: hand-built sites, a design system, and working prototypes.', background: 'cyan', variant: 'desktop', href: '/work/development', image: devImg, alt: 'Design system component documentation', imageClass: 'project-preview-image' },
  { name: 'Freelance', title: 'Websites designed, built and shipped for clients since 2004.', background: 'lavender', variant: 'desktop', href: '/work/freelance', image: freeImg, alt: 'Freelance website project', imageClass: 'project-preview-image' },
];
