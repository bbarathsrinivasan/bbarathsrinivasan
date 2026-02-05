/**
 * PORTFOLIO CONTENT
 * =================
 * Easily customize all text content from this single file.
 * Replace placeholders with your actual information.
 */

export const personalInfo = {
  name: 'Barath Srinivasan',
  firstName: 'Barath',
  lastName: 'Srinivasan',
  role: 'Full Stack Developer & Cloud Architect',
  tagline: 'Compiling dreams into production-ready reality',
  
  // Fun rotating subtitles for hero
  rotatingTitles: [
    'Building the future, one commit at a time',
    'Turning caffeine into code since forever',
    'Making servers do the heavy lifting',
    'Debugging reality, deploying solutions',
    'Cloud whisperer & code conjurer',
  ],
  
  // About section (short version for hero)
  shortBio: "I'm a developer who believes that great code should be as elegant as it is functional. When I'm not architecting cloud solutions or training neural networks, you'll find me optimizing everything from database queries to my coffee brewing process.",
  
  // Social links
  social: {
    github: 'https://github.com/bbarathsrinivasan',
    linkedin: 'https://linkedin.com/in/yourprofile',
    twitter: 'https://twitter.com/yourhandle',
    email: 'your.email@example.com',
  },
  
  // Resume/CV link (optional)
  resumeUrl: '/resume.pdf',
};

export const heroContent = {
  greeting: "Hello, World! I'm",
  ctaPrimary: 'View Projects',
  ctaSecondary: 'Contact Me',
};

export const projectsContent = {
  title: 'Projects',
  subtitle: 'A collection of things I\'ve built, broken, and rebuilt better.',
  emptyState: 'No projects found. Try adjusting your filters.',
  filterLabel: 'Filter by:',
};

export const contactContent = {
  title: "Let's Connect",
  subtitle: "Whether you want to discuss a project, talk tech, or debate tabs vs spaces, I'm all ears.",
  
  // Fun closing lines (randomly selected)
  closingLines: [
    "May your builds always pass and your bugs be minor.",
    "Now go forth and commit amazing things.",
    "Remember: It's not a bug, it's an undocumented feature.",
    "Stay curious, keep coding, never stop learning.",
    "The only constant is change (and dependency updates).",
  ],
  
  // CTA
  emailCta: 'Drop me a line',
  socialCta: 'Or find me on the interwebs',
};

export const funSectionContent = {
  title: 'Achievement Unlocked',
  subtitle: 'Collect all the tokens to reveal a secret project!',
  
  // Guide character lines (appears as the character "speaks")
  characterLines: {
    intro: "Hey there! I'm Pixel, your guide. Scroll around to discover cool stuff!",
    projects: "Nice! Check out these projects. Hover for more details.",
    contact: "You made it! Let's connect and build something awesome together.",
    secret: "Whoa! You found the secret zone. You're clearly a power user.",
    hint: "Psst... try clicking on the floating orbs!",
  },
  
  // Mini-game content
  game: {
    instructions: 'Click the glowing tokens to collect them!',
    progress: 'tokens collected',
    complete: "You did it! Here's a hidden project just for explorers like you.",
  },
};

export const navItems = [
  { id: 'hero', label: 'Home', icon: '🏠' },
  { id: 'projects', label: 'Projects', icon: '💼' },
  { id: 'fun', label: 'Explore', icon: '🎮' },
  { id: 'contact', label: 'Contact', icon: '📬' },
];

// Easter eggs and fun interactions
export const easterEggs = {
  konamiCode: "You found the Konami code! Here's a virtual high-five: 🖐️",
  clickCount: {
    10: "You really like clicking, huh?",
    50: "Okay, that's dedication.",
    100: "Achievement Unlocked: Click Master!",
  },
};
