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
    id: 'polymarket-llm',
    title: 'Polymarket Prediction Market Analysis using Fine-tuned LLMs',
    date: 'December 2025',
    summary: 'Fine-tuned Gemma and Mistral-7B LLMs with QLORA for prediction market analysis (55-71.5% accuracy); integrated RAG evaluation.',
    techStack: ['Python', 'PyTorch', 'QLORA', 'LLM', 'RAG', 'Gemma', 'Mistral-7B'],
    category: 'AI/ML',
    links: { github: 'https://github.com/bbarathsrinivasan/PolymarketLM' },
    featured: true,
  },
  {
    id: 'elita',
    title: 'ELITA: Enhanced Logging and Intelligent Telemetry Assistant',
    date: 'June 2025',
    summary: 'Designed and deployed a RAG agent (Python/Django, OpenAI embeddings, ServiceNow ITSM ingestion, MongoDB); containerized on Kubernetes, hosted on Azure VMs; achieved ~35% faster incident triage and ~50% reduction in manual lookup time.',
    techStack: ['Python', 'Django', 'OpenAI', 'RAG', 'Kubernetes', 'MongoDB', 'Azure', 'ServiceNow'],
    category: 'AI/ML',
    links: { github: 'https://github.com/firaz-bug/ELITA-Enhanced-Logging-and-Telemetry-Assistant' },
    featured: true,
  },
  {
    id: 'agees',
    title: 'AGeES: Automatic Multiple Choice Question (MCQ) Generation from Extractive Summary of Video Lectures Using BertSum',
    date: 'August 2023',
    summary: 'Developed an automated MCQ generation system using BERTSum for extractive summarization and T5 transformer for question formation to create accurate, dynamic MCQs from video lecture content.',
    techStack: ['Python', 'BERT', 'T5', 'NLP', 'Machine Learning'],
    category: 'Publication',
    links: {
      article: 'https://link.springer.com/chapter/10.1007/978-981-99-5961-7_3',
    },
    featured: true,
    image: '/assets/img/portfolio/p-2.webp',
  },
  {
    id: 'hand-sign-detection',
    title: 'Dynamic Hand Sign Detection',
    date: 'August 2023',
    summary: 'Designed a dynamic sign language recognition system to identify hand gestures for words and alphabets through video classification. Leveraged image preprocessing, CNN, LSTM, and GTTS to accurately process and classify gestures from video inputs.',
    techStack: ['Python', 'CNN', 'LSTM', 'GTTS', 'Computer Vision'],
    category: 'AI/ML',
    links: {
      github: 'https://github.com/firaz-bug/Dynamic-Hand-Sign-Detection',
    },
    featured: true,
    image: '/assets/img/portfolio/p-4.webp',
  },
  {
    id: 'coviprotec',
    title: 'CoviProtec',
    date: 'June 2022',
    summary: 'Designed and developed a comprehensive web application to streamline Covid vaccination bookings, allowing users to schedule appointments and enabling hospitals to manage booking details through a dedicated interface.',
    techStack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP', 'MySQL', 'Heroku'],
    category: 'Web',
    links: {
      github: 'https://github.com/firaz-bug/CoviProtec',
    },
    featured: false,
    image: '/assets/img/portfolio/p-3.webp',
  },
  {
    id: 'image-caption',
    title: 'Image Caption Generation using a Deep Architecture',
    date: 'June 2022',
    summary: 'Built a deep learning model for automatic image captioning that generates precise descriptions upon first exposure. Utilized image preprocessing, CNN, GRU, and an Attention Mechanism to enhance caption accuracy and relevance.',
    techStack: ['Python', 'CNN', 'GRU', 'Attention Mechanism', 'Deep Learning'],
    category: 'AI/ML',
    links: {
      github: 'https://github.com/firaz-bug/Image-Caption-Genreation-Using-Deep-Architecture',
    },
    featured: true,
    image: '/assets/img/portfolio/p-5.webp',
  },
  {
    id: 'news-app',
    title: 'NEWS Web App',
    date: 'June 2022',
    summary: 'Built a web application using Django that allows users to view news tailored to their interests, with categories for easy navigation. Integrated NEWS API and WEATHER API for real-time updates and enhanced user experience.',
    techStack: ['Django', 'HTML', 'CSS', 'Tailwind', 'Python', 'Google Cloud'],
    category: 'Web',
    links: {
      github: 'https://github.com/firaz-bug/newsapp',
    },
    featured: false,
    image: '/assets/img/portfolio/p-6.webp',
  },
  {
    id: 'invoice-generator',
    title: 'Invoice Generator',
    date: '2022',
    summary: 'The Invoice Project is a Django web app for creating, managing, and tracking invoices, with features like client management and payment tracking.',
    techStack: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript'],
    category: 'Web',
    links: {
      github: 'https://github.com/firaz-bug/Invoice-Generator',
    },
    featured: false,
    image: '/assets/img/portfolio/p-1.webp',
  },
  {
    id: 'loan-management',
    title: 'Loan Management',
    date: '2022',
    summary: 'The Loan App is a tool for managing loans, allowing users to apply for loans and track payments, balances, and due dates.',
    techStack: ['React', 'JavaScript', 'HTML', 'CSS'],
    category: 'Web',
    links: {
      github: 'https://github.com/firaz-bug/loan-management-frontend',
    },
    featured: false,
    image: '/assets/img/portfolio/p-7.webp',
  },
  {
    id: 'university-predictor',
    title: 'University Admit Eligibility Predictor',
    date: 'November 2022',
    summary: 'The University Admit Eligibility Predictor is a web application that helps students evaluate their chances of university admission using a machine learning model developed on Google Colab. Deployed on IBM Cloud for robust performance.',
    techStack: ['Flask', 'Python', 'Machine Learning', 'HTML', 'CSS', 'IBM Cloud'],
    category: 'AI/ML',
    links: {
      github: 'https://github.com/firaz-bug/University-Admit-Eligibility-Predictor',
    },
    featured: false,
    image: '/assets/img/portfolio/p-8.webp',
  },
  {
    id: 'handwritten-number',
    title: 'Handwritten Number Recognition',
    date: '2022',
    summary: 'Neural network model to recognize handwritten numbers.',
    techStack: ['Python', 'Neural Networks', 'Machine Learning'],
    category: 'AI/ML',
    links: {
      github: 'https://github.com/firaz-bug/Handwritten-number-recognization-',
    },
    featured: false,
    image: '/assets/img/portfolio/p-9.webp',
  },
  {
    id: 'membership-api',
    title: 'Membership Registration REST API',
    date: '2022',
    summary: 'This project is a REST API for managing membership generation, providing endpoints to create, update, and delete memberships. It supports features like user registration, membership tier management, and tracking membership status.',
    techStack: ['REST API', 'Backend', 'Database'],
    category: 'Web',
    links: {
      github: 'https://github.com/firaz-bug/regiteration_api',
    },
    featured: false,
    image: '/assets/img/portfolio/p-10.webp',
  },
  {
    id: 'chatbot',
    title: 'Chatbot',
    date: '2022',
    summary: 'Chatbot created using nltk and tensorflow.',
    techStack: ['Python', 'NLTK', 'TensorFlow', 'NLP'],
    category: 'AI/ML',
    links: {
      github: 'https://github.com/firaz-bug/chatbot',
    },
    featured: false,
    image: '/assets/img/portfolio/p-1.webp',
  },
];

export const categories = [
  { id: 'all', label: 'All', icon: '⚡' },
  { id: 'Publication', label: 'Publications', icon: '📚' },
  { id: 'AI/ML', label: 'AI/ML', icon: '🤖' },
  { id: 'Web', label: 'Web', icon: '🌐' },
];
