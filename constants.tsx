import React from 'react';
import { Skill, ExperienceItem, SocialLink, Project } from './types';

// SVG Icons for Skills
const JavaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M12.5 12H12v6h2.5a2.5 2.5 0 0 0 0-5Z"></path><path d="M8 12h2.5a2.5 2.5 0 1 1-2.5 2.5V12Z"></path></svg>
);

const PythonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.5 9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5zm-4 0a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5z"/><path d="M11.96 15.5a.5.5 0 0 0 .992 0H12a.5.5 0 0 0-.04-.5z"/><path d="M10.79 16.5h.42c.13.28.32.55.57.78.25.23.54.42.86.55s.68.2 1.05.2c.78 0 1.4-.24 1.84-.72.44-.48.66-1.1.66-1.86v-1.28c0-.79-.22-1.45-.67-1.97-.45-.52-1.05-.78-1.8-.78h-1.6v3.94h1.55c.37 0 .68-.07.91-.21.24-.14.4-.35.48-.63h.01c.08.28.24.49.48.63.24.14.54.21.91.21.78 0 1.4-.24 1.84-.72.44-.48.66-1.1.66-1.86v-1.28c0-.79-.22-1.45-.67-1.97-.45-.52-1.05-.78-1.8-.78H13v3.94h-1.04v-3.94h-1.6c-.75 0-1.35.26-1.8.78-.45.52-.67 1.18-.67 1.97v1.28c0 .76.22 1.38.66 1.86.44.48 1.06.72 1.84.72.37 0 .7-.07 1.05-.2.32-.13.6-.32.86-.55.25-.23.44-.5.57-.78h.42v1z"/></svg>
);

const CIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.88 12a4.4 4.4 0 0 1-4.2 4.4 4.4 4.4 0 0 1-4.2-4.4 4.4 4.4 0 0 1 4.2-4.4 4.4 4.4 0 0 1 4.2 4.4Zm0 0H20.4"/></svg>
);

const ManagementIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>
);

// Skills Data
export const SKILLS: Skill[] = [
  { name: 'Java', icon: <JavaIcon /> },
  { name: 'Python', icon: <PythonIcon /> },
  { name: 'C', icon: <CIcon /> },
  { name: 'Management', icon: <ManagementIcon /> },
];

// Experience Data
export const EXPERIENCE: ExperienceItem[] = [
  {
    date: '2024',
    title: 'Hackathon - IEM Phycathon',
    description: 'Led a team of four to develop a web-based solution for local community management, securing first place among 50+ teams.',
    tags: ['Leadership', 'Java', 'React', 'Teamwork'],
  },
  {
    date: '2024',
    title: 'Tech Fest Volunteer',
    description: 'Co-organized the annual tech fest at IEM, managing logistics for workshops and coding competitions for over 1000 participants.',
    tags: ['Management', 'Event Planning', 'Communication'],
  },
  {
    date: '2024',
    title: 'Smart Maker Fest Participant',
    description: 'Developed a prototype for a government-led initiative focusing on sustainable agriculture using Python and data analytics.',
    tags: ['Python', 'Data Analysis', 'Problem Solving'],
  },
  {
    date: '2024',
    title: 'IEM Heals',
    description: 'Attende a poster making workshop and created a poster on the topic of "Mental Health Awareness" for the IEM Heals initiative.',
    tags: ['social awareness', 'creativity', 'teamwork'],
  },
];

// Projects Data
export const PROJECTS: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'My personal corner of the internet, showcasing my skills and projects. You are here right now! Built with React and Tailwind CSS.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com/swapnilchakraborty',
    liveUrl: '#',
  },
];


// SVG Icons for Socials
const LinkedInIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>);
const GithubIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>);
const MailIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>);

// Social Links Data
export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/swapnil-chakraborty-a3b719321', icon: <LinkedInIcon /> },
  { name: 'GitHub', url: 'https://github.com/Swapnil-2004', icon: <GithubIcon /> },
  { name: 'Email', url: 'mailto:chakrabortyswapnil06@gmail.com', icon: <MailIcon /> },
];