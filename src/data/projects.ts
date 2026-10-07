export interface AppScreenshot {
  id: string;
  label: string;
  image: string;
  alt: string;
  width: number;
  height: number;
}

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
    // Real app screenshots, with image paths relative to public/.
    screenshots?: AppScreenshot[];
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
      screenshots: [
        {
          id: 'home',
          label: 'Home',
          image: 'projects/gymtracker-home.jpg',
          alt: 'GymTracker Home screen with Start Workout, day streak, workout count, and volume summary',
          width: 588,
          height: 1280,
        },
        {
          id: 'workout',
          label: 'Workout',
          image: 'projects/gymtracker-workout.jpg',
          alt: 'GymTracker Workout screen with exercise search, custom exercises, and a chest exercise list',
          width: 588,
          height: 1280,
        },
        {
          id: 'plan',
          label: 'Plan',
          image: 'projects/gymtracker-plan.jpg',
          alt: 'GymTracker Plan screen showing Push Day, Pull Day, and Leg Day preset splits with Add to Workout buttons',
          width: 588,
          height: 1280,
        },
      ],
    },
  },
];
