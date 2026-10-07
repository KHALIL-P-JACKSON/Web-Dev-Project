// Image paths are relative to public/. Keep the GitHub Pages base path out of data.
export const portrait = {
  image: 'photos/khalil-headshot.jpg',
  alt: 'Headshot of Khalil Jackson smiling, wearing glasses and a collared shirt',
  position: '50% 40%',
  width: 800,
  height: 800,
};

export const fieldPhotos = [
  {
    image: 'photos/chick-fil-a-software-testing.jpg',
    alt: 'Khalil Jackson checking a tablet while a Chick-fil-A team member serves a drive-thru guest',
    title: 'Testing in the drive-thru',
    caption: 'Checking software in the environment where it’s used.',
  },
  {
    image: 'photos/chick-fil-a-drive-thru-testing.jpg',
    alt: 'Khalil Jackson and a colleague observing a Chick-fil-A drive-thru interaction with tablets in hand',
    title: 'Observing the workflow',
    caption: 'Seeing how software fits into the restaurant’s day-to-day work.',
  },
  {
    image: 'photos/chick-fil-a-field-discussion.jpg',
    alt: 'Khalil Jackson discussing field testing with a Chick-fil-A colleague outside the restaurant',
    title: 'Comparing notes',
    caption: 'Talking through observations with the team in the field.',
  },
  {
    image: 'photos/chick-fil-a-team-collaboration.jpg',
    alt: 'Khalil Jackson and a Chick-fil-A colleague collaborating with tablets near the drive-thru',
    title: 'Working with the team',
    caption:
      'Connecting the people building software with the people using it.',
  },
];

export const currentBuild = {
  title: 'A portfolio that feels like me.',
  description:
    'Bringing more personality to my corner of the web—with thoughtful motion, richer project stories, and a fresh look in light and dark.',
  technologies: ['React', 'TypeScript', 'Radix UI'],
  repositoryUrl:
    'https://github.com/KHALIL-P-JACKSON/Web-Dev-Project/tree/creative/site-pop',
};

// Milestones use labels instead of dates until exact dates are supplied.
export const milestones = [
  {
    id: 'education',
    label: 'The foundation',
    title: 'Kennesaw State University',
    role: 'Information Technology · Honors Scholar',
    description:
      'Building a foundation in technology, problem-solving, and human-centered design.',
  },
  {
    id: 'leadership',
    label: 'The people side',
    title: 'Learning to lead',
    role: 'Chick-fil-A Area Supervisor · Clayton County CTAE MC',
    description:
      'Leading teams and taking the stage taught me to listen, communicate clearly, and stay adaptable.',
  },
  {
    id: 'engineering',
    label: 'Where I am now',
    title: 'Building at Chick-fil-A',
    role: 'Software Developer Co-op',
    description:
      'Bringing that same care for people into scalable software and intuitive digital experiences.',
  },
];
