# Neo-Orange Portfolio

A futuristic, interactive personal portfolio website with a striking neo-orange visual identity, featuring Three.js 3D graphics, smooth animations, and playful interactions.

![Preview](https://via.placeholder.com/1200x630/030303/ff6b00?text=Neo-Orange+Portfolio)

## Features

- **Stunning 3D Background**: Floating particles, glass geometric shapes, and animated grid floor using Three.js
- **Glassmorphism Design**: Modern frosted glass effects with the neo-orange color palette
- **Interactive Mini-Game**: Collect glowing tokens to unlock a secret project
- **Guide Character**: Animated "Pixel" bot that provides hints and reacts to your progress
- **Smooth Animations**: Scroll-triggered reveals, hover effects, and micro-interactions via Framer Motion
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Accessibility First**: Semantic HTML, keyboard navigation, ARIA labels, and reduced motion support
- **Dark Mode First**: Designed for dark backgrounds with high contrast

## Tech Stack

- **React 18** - Component-based UI
- **Vite** - Fast build tool and dev server
- **Three.js** - 3D graphics and WebGL
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three-fiber
- **Framer Motion** - Animation library
- **GSAP** - Advanced animations (available for extended use)

## Quick Start

```bash
# Navigate to the portfolio directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── sections/          # Page sections (Hero, Projects, etc.)
│   │   ├── three/             # Three.js 3D components
│   │   └── ui/                # Reusable UI components
│   ├── data/
│   │   ├── content.js         # All text content (easily editable)
│   │   └── projects.js        # Project data
│   ├── hooks/
│   │   └── useScrollProgress.js
│   ├── styles/
│   │   ├── design-tokens.css  # Color tokens, typography, spacing
│   │   └── global.css         # Global styles and utilities
│   ├── App.jsx                # Main app component
│   └── main.jsx               # Entry point
├── index.html
└── package.json
```

## Customization Guide

### 1. Personal Information
Edit `src/data/content.js`:
```javascript
export const personalInfo = {
  name: 'Your Name',
  firstName: 'First',
  lastName: 'Last',
  role: 'Your Role',
  tagline: 'Your tagline',
  // ... social links, bio, etc.
};
```

### 2. Projects
Edit `src/data/projects.js`:
```javascript
export const projects = [
  {
    id: 'unique-id',
    title: 'Project Name',
    date: '2024',
    summary: 'Brief description',
    techStack: ['Tech1', 'Tech2'],
    category: 'AI', // AI, Data, Cloud, DevOps, Web, Mobile
    links: {
      github: 'https://...',
      demo: 'https://...',
    },
    featured: true,
  },
  // ... more projects
];
```

### 3. Color Palette
Edit `src/styles/design-tokens.css`:
```css
:root {
  /* Core orange palette */
  --orange-500: #f97316;
  --neon-orange: #ff6b00;
  --amber: #ffbf00;
  
  /* Backgrounds */
  --bg-darkest: #030303;
  --bg-dark: #0a0a0a;
  
  /* Customize as needed */
}
```

### 4. Typography
The design uses these font pairings (loaded from Google Fonts):
- **Headings**: Space Grotesk (futuristic, geometric)
- **Body**: Inter (clean, readable)
- **Code**: JetBrains Mono (monospace)

## Animation System

### Scroll-Based Animations (Framer Motion)
- Each section uses `whileInView` for entrance animations
- `viewport={{ once: true }}` ensures animations play once
- Staggered children create cascading effects

### Three.js Background
- **ParticleField**: 600 floating particles with additive blending
- **FloatingGeometry**: Glass-effect geometric shapes
- **GridFloor**: Custom shader for animated grid perspective
- **Post-processing**: Bloom, Chromatic Aberration, Vignette

### Hover Interactions
- Project cards scale and glow
- Buttons have ripple effects
- Social links lift on hover

### Micro-Interactions
- Rotating taglines in hero
- Filter chips with animated indicator
- Token collection game with progress
- Guide character responds to progress

## Performance Tips

1. **Reduce particle count** for lower-end devices:
   ```jsx
   <ParticleField count={300} />
   ```

2. **Disable post-processing** if needed:
   ```jsx
   // Comment out in Scene.jsx
   {/* <Effects /> */}
   ```

3. **Use production build** for best performance:
   ```bash
   npm run build
   ```

## Accessibility Features

- Semantic HTML5 structure
- ARIA labels on interactive elements
- Keyboard focus states
- Skip-to-content link
- Reduced motion support:
  ```css
  @media (prefers-reduced-motion: reduce) {
    * { animation-duration: 0.01ms !important; }
  }
  ```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Note: WebGL support required for 3D effects.

## License

MIT License - Feel free to use this template for your own portfolio!

---

Built with ⚡ and lots of ☕ by [Barath Srinivasan](https://github.com/bbarathsrinivasan)
