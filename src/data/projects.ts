export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  highlights: string[];
  repositoryUrl: string;
  websiteUrl?: string;
  featured?: boolean;
  preview: {
    image: string;
    alt: string;
    kind: 'website' | 'app';
    // Optional real app screenshot, relative to public/, for the phone frame.
    screenImage?: string;
    screenAlt?: string;
  };
}

// Images are relative to public/; ProjectCard resolves the GitHub Pages base path.
export const projects: Project[] = [
  {
    id: 'dluxe-beauty',
    featured: true,
    title: 'D’Luxe Beauty',
    category: 'Business website',
    description:
      'A nail studio website that helps visitors explore services, discover recent work, and request an appointment.',
    technologies: ['React', 'TypeScript', 'Vite'],
    highlights: [
      'Service menu and pricing',
      'Photo gallery and client reviews',
      'Appointment request flow',
    ],
    repositoryUrl: 'https://github.com/KHALIL-P-JACKSON/D-Scott-Site',
    websiteUrl: 'https://khalil-p-jackson.github.io/D-Scott-Site/',
    preview: {
      image: 'projects/dluxe-beauty.jpg',
      alt: 'D’Luxe Beauty website showing its nail studio introduction and gallery',
      kind: 'website',
    },
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    category: 'Portfolio website',
    description:
      'My home on the web, bringing together my experience, technical skills, and the projects I’m building.',
    technologies: ['React', 'TypeScript', 'Radix UI', 'Vite'],
    highlights: [
      'Responsive page layouts',
      'Experience and resume showcase',
      'Project and contact sections',
    ],
    repositoryUrl: 'https://github.com/KHALIL-P-JACKSON/Web-Dev-Project',
    websiteUrl: 'https://khalil-p-jackson.github.io/Web-Dev-Project/',
    preview: {
      image: 'projects/portfolio.jpg',
      alt: 'Khalil Jackson’s portfolio homepage with introduction and profile photo',
      kind: 'website',
    },
  },
  {
    id: 'gymtracker',
    title: 'GymTracker',
    category: 'Native iOS app',
    description:
      'An offline iPhone workout tracker for logging sets, organizing training plans, and following strength progress.',
    technologies: ['SwiftUI', 'SwiftData', 'Swift Charts'],
    highlights: [
      'Workout logging and history',
      'Custom training plans',
      'Strength progress charts',
    ],
    repositoryUrl: 'https://github.com/KHALIL-P-JACKSON/Gym-App',
    preview: {
      image: 'projects/gymtracker-icon.png',
      alt: 'GymTracker app icon',
      kind: 'app',
    },
  },
];
