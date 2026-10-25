import type { Area } from './areas';
import type { IconName } from './icons';

// Everything about you that is not a project or an activity lives here.
// Keep it in line with the résumé (BALDANO-Frederick-CV-2026.docx / public/resume.pdf).

export const profile = {
  name: 'Frederick Baldano',
  firstName: 'Frederick',
  role: 'IT student and web developer',
  course: 'BS Information Technology',
  yearLevel: '4th',
  school: 'Bicol University',
  location: 'Legazpi City, Albay',
  timezone: 'Philippines (UTC+8)',

  // The photo is src/assets/profile.jpg; without it the hero shows these initials.
  initials: 'FB',

  // The landing screen: the big heading and the italic line under it.
  greeting: 'Hi, I am Frederick',
  tagline: 'Your 4th year BSIT student',

  // Shown in search results and link previews.
  description:
    'Frederick Baldano, IT student and web developer from Legazpi City, Albay: software development, UI/UX design and network configuration.',

  email: 'fbb2023-8422-44800@bicol-u.edu.ph',
  github: 'https://github.com/spiderfbb',
  linkedin: 'https://www.linkedin.com/in/frederickbaldano',

  // The "Download résumé" file, exported from BALDANO-Frederick-CV-2026.docx.
  resume: '/resume.pdf',
  resumeFile: 'BALDANO-Frederick-Resume.pdf',

  // Optional: a Formspree (or similar) form endpoint, e.g. 'https://formspree.io/f/abcdwxyz'.
  // Left empty, the contact form opens the visitor's email app with the message filled in.
  formEndpoint: '',

  // The large quote that opens the About section, followed by the paragraphs.
  aboutLead: 'I learn fastest by building things people actually use.',
  about: [
    "I'm Frederick, a 4th year BS Information Technology student at Bicol University, from Legazpi City, Albay. Since starting college in 2023 I have worked across IT rather than in one corner of it: writing software, designing interfaces, troubleshooting hardware and configuring networks.",
    "I care about technology that is easy to use, works the way it should and doesn't waste anyone's time. I learn best by doing, so I keep building, testing and picking up new tools along the way.",
  ],
};

export interface Skill {
  name: string;
  icon: IconName;
  areas: Area[];
}

// Grouped as on the page, one tool per entry so each gets its own logo (see icons.ts).
export const skills: { group: string; items: Skill[] }[] = [
  {
    group: 'Languages',
    items: [
      { name: 'JavaScript', icon: 'javascript', areas: ['frontend', 'backend'] },
      { name: 'HTML', icon: 'html', areas: ['frontend', 'design'] },
      { name: 'CSS', icon: 'css', areas: ['frontend', 'design'] },
      { name: 'PHP', icon: 'php', areas: ['backend'] },
      { name: 'Python', icon: 'python', areas: ['backend'] },
      { name: 'C', icon: 'c', areas: ['backend'] },
      { name: 'SQL', icon: 'sql', areas: ['database'] },
      { name: 'PowerShell', icon: 'powershell', areas: ['backend'] },
    ],
  },
  {
    group: 'Frameworks',
    items: [
      { name: 'React', icon: 'react', areas: ['frontend'] },
      { name: 'Next.js', icon: 'nextjs', areas: ['frontend', 'backend'] },
      { name: 'Vue 3', icon: 'vue', areas: ['frontend'] },
      { name: 'Express', icon: 'express', areas: ['backend'] },
      { name: 'Tailwind CSS', icon: 'tailwind', areas: ['frontend', 'design'] },
      { name: 'Astro', icon: 'astro', areas: ['frontend'] },
      { name: 'Chart.js', icon: 'chartjs', areas: ['frontend'] },
      { name: 'Leaflet', icon: 'leaflet', areas: ['frontend'] },
    ],
  },
  {
    group: 'Tools',
    items: [
      { name: 'Git', icon: 'git', areas: ['frontend', 'backend', 'database', 'design'] },
      { name: 'GitHub', icon: 'github', areas: ['frontend', 'backend', 'database', 'design'] },
      { name: 'Vite', icon: 'vite', areas: ['frontend'] },
      { name: 'Vitest', icon: 'vitest', areas: ['frontend', 'backend'] },
      { name: 'Figma', icon: 'figma', areas: ['design'] },
      { name: 'Vercel', icon: 'vercel', areas: ['frontend', 'backend'] },
      { name: 'OBS Studio', icon: 'obs', areas: ['design'] },
      { name: 'Cisco Packet Tracer', icon: 'cisco', areas: ['backend'] },
    ],
  },
  {
    group: 'Databases',
    items: [
      { name: 'MySQL', icon: 'mysql', areas: ['database', 'backend'] },
      { name: 'PostgreSQL', icon: 'postgresql', areas: ['database', 'backend'] },
      { name: 'Supabase', icon: 'supabase', areas: ['database', 'backend'] },
    ],
  },
];
