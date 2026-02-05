/**
 * PROJECT DATA
 * ============
 * Replace this placeholder data with your actual projects.
 * 
 * Fields:
 * - id: Unique identifier (required)
 * - title: Project name (required)
 * - date: Project date/year (required)
 * - summary: Short description (optional)
 * - techStack: Array of technologies used (optional)
 * - category: For filtering - AI, Data, Cloud, DevOps, Web, Mobile, etc. (optional)
 * - links: Object with github, demo, article URLs (optional)
 * - featured: Boolean to highlight special projects (optional)
 * - image: Path to project image/screenshot (optional)
 */

export const projects = [
  {
    id: 'neural-forge',
    title: 'Neural Forge',
    date: '2025',
    summary: 'An AI-powered code generation platform that turns natural language into production-ready microservices. Think of it as a compiler for human thoughts.',
    techStack: ['Python', 'PyTorch', 'FastAPI', 'Kubernetes', 'Redis'],
    category: 'AI',
    links: {
      github: 'https://github.com/yourusername/neural-forge',
      demo: 'https://neural-forge.demo.com',
    },
    featured: true,
  },
  {
    id: 'data-pulse',
    title: 'DataPulse Analytics',
    date: '2024',
    summary: 'Real-time data streaming dashboard that processes millions of events per second. Because waiting for insights is so last century.',
    techStack: ['Apache Kafka', 'Spark', 'React', 'D3.js', 'PostgreSQL'],
    category: 'Data',
    links: {
      github: 'https://github.com/yourusername/datapulse',
    },
    featured: true,
  },
  {
    id: 'cloud-shepherd',
    title: 'Cloud Shepherd',
    date: '2024',
    summary: 'Infrastructure-as-code toolkit that herds your cloud resources with the precision of a well-trained border collie.',
    techStack: ['Terraform', 'AWS', 'Go', 'Prometheus', 'Grafana'],
    category: 'Cloud',
    links: {
      github: 'https://github.com/yourusername/cloud-shepherd',
      article: 'https://medium.com/@you/cloud-shepherd',
    },
    featured: false,
  },
  {
    id: 'pipeline-ninja',
    title: 'Pipeline Ninja',
    date: '2023',
    summary: 'CI/CD automation framework that makes deployments so smooth, your code practically deploys itself. Silently. Like a ninja.',
    techStack: ['GitHub Actions', 'Docker', 'ArgoCD', 'Helm', 'Bash'],
    category: 'DevOps',
    links: {
      github: 'https://github.com/yourusername/pipeline-ninja',
    },
    featured: false,
  },
  {
    id: 'quantum-viz',
    title: 'Quantum Viz',
    date: '2023',
    summary: 'Interactive visualization tool for quantum computing circuits. Making qubits look pretty since 2023.',
    techStack: ['Three.js', 'WebGL', 'Python', 'Qiskit', 'TypeScript'],
    category: 'AI',
    links: {
      demo: 'https://quantum-viz.demo.com',
    },
    featured: true,
  },
  {
    id: 'edge-sentinel',
    title: 'Edge Sentinel',
    date: '2022',
    summary: 'Distributed edge computing security monitor. Guards your IoT devices like a digital watchdog that never sleeps.',
    techStack: ['Rust', 'MQTT', 'InfluxDB', 'React Native', 'AWS IoT'],
    category: 'Cloud',
    links: {
      github: 'https://github.com/yourusername/edge-sentinel',
    },
    featured: false,
  },
];

export const categories = [
  { id: 'all', label: 'All Projects', icon: '⚡' },
  { id: 'AI', label: 'AI / ML', icon: '🧠' },
  { id: 'Data', label: 'Data', icon: '📊' },
  { id: 'Cloud', label: 'Cloud', icon: '☁️' },
  { id: 'DevOps', label: 'DevOps', icon: '🔧' },
  { id: 'Web', label: 'Web', icon: '🌐' },
  { id: 'Mobile', label: 'Mobile', icon: '📱' },
];
