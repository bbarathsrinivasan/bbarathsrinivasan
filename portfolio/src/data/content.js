/**
 * PORTFOLIO CONTENT
 * =================
 * Easily customize all text content from this single file.
 * Replace placeholders with your actual information.
 */

export const personalInfo = {
  name: 'Barath Srinivasan Basavaraj',
  firstName: 'Barath',
  lastName: 'Srinivasan Basavaraj',
  role: 'Research Fellow & Software Engineer',
  tagline: 'Compiling dreams into production-ready reality',
  
  // Fun rotating subtitles for hero (first one shown on load)
  rotatingTitles: [
    'Building the future, one commit at a time',
    'Research Fellow',
    'Software Engineer',
    'AI Safety Researcher',
    'Turning caffeine into code since forever',
  ],
  
  // About section (short version for hero)
  shortBio: "Research Fellow at CMU AI Safety Initiative and Software Engineer with expertise in AI, machine learning, and blockchain. Passionate about AI safety, ethical data solutions, and building secure, user-centered systems.",
  
  // Personal details
  personalDetails: {
    birthday: '1 Aug 2001',
    age: 23,
    website: 'https://bbarathsrinivasan.vercel.app/',
    phone: '(412) 320-5240',
    city: 'Pittsburgh, Pennsylvania',
    degree: 'Master of Computational Data Science',
    email: 'bbarathsrinivasan@cmu.edu',
    freelance: 'Not Available',
  },
  
  // Social links
  social: {
    github: 'https://github.com/bbarathsrinivasan',
    linkedin: 'https://www.linkedin.com/in/b-barath-srinivasan-4721b220b/',
    email: 'bbarathsrinivasan@cmu.edu',
  },
  
  // Resume/CV link (optional)
  resumeUrl: '/assets/B Barath Srinivasan.pdf',
};

export const heroContent = {
  greeting: "Hello, World! I'm",
  ctaPrimary: 'View Projects',
  ctaSecondary: 'Contact Me',
  /** Terminal "about me" — code-style block with typing effect. Use \n for new lines. */
  terminalAbout: `// TL;DR — the only constant that matters 📌
tld = "I teach machines better manners, design systems with guardrails, and ship with curiosity + discipline. 🚀🛡️🤖"

// education.patch (applying latest updates 🎓)
masters = "Pursuing my Master's in Computational Data Science at Carnegie Mellon University, where data, systems, and intelligent decision-making all collide (in a good way)."

// builder.module — no bundler required 🔧
builder = "I like turning messy, real-world problems into reliable AI products that actually help people."

// ai_safety.guardrails (red-team approved 🛡️)
ai_safety = "Think of it as teaching powerful models to be smart, secure, and well-behaved."

// personality.vibe (runtime: always on ⚡)
vibe = "Researcher mindset, builder energy, startup curiosity."

// final.compile() — linking all modules 🚀
Barath = tld +  masters  + builder  + ai_safety  + vibe`,
};

export const aboutContent = {
  title: 'About',
  subtitle: 'Software Engineer & Entrepreneur.',
  description: 'Innovative and driven individual with a strong foundation in computer science, AI, and blockchain, seeking to leverage advanced technical expertise and entrepreneurial experience in a dynamic environment. Aspiring to contribute to pioneering developments in AI safety, ethical data solutions, and blockchain technology, while building impactful and user-centered systems that address real-world challenges. I am looking to refine my skills further and expand my knowledge through meaningful opportunities that align with a vision of creating secure and accessible technology for the future.',
};

export const skillsContent = {
  title: 'Skills',
  subtitle: 'Technologies I work with',
};

export const resumeContent = {
  title: 'Resume',
  summary: {
    name: 'Barath Srinivasan Basavaraj',
    description: 'Research Fellow at CMU AI Safety Initiative and Software Engineer with expertise in AI, machine learning, and blockchain. Passionate about AI safety, ethical data solutions, and building secure, user-centered systems.',
    location: 'Pittsburgh, Pennsylvania',
    phone: '(412) 320-5240',
    email: 'bbarathsrinivasan@cmu.edu',
  },
};

export const projectsContent = {
  title: 'Portfolio',
  subtitle: 'Here are some of my tech projects. Click on the links to view the code on GitHub.',
  emptyState: 'No projects found. Try adjusting your filters.',
  filterLabel: 'Filter by:',
};

export const contactContent = {
  title: "Contact",
  subtitle: "Need to reach me urgently? Send a carrier pigeon, smoke signals, or just use the good ol' contact information below!",
  
  // Contact details
  location: 'Pittsburgh, Pennsylvania',
  email: 'bbarathsrinivasan@cmu.edu',
  phone: '(412) 320-5240',
  
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
  { id: 'skills', label: 'Skills', icon: '⚡' },
  { id: 'resume', label: 'Resume', icon: '📄' },
  { id: 'projects', label: 'Portfolio', icon: '💼' },
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
