// Mock data for Polaris Inova Labs website

export const mockProjects = [
  {
    id: 1,
    title: "E-Commerce Revolution Platform",
    category: "Web Application",
    description: "A cutting-edge e-commerce platform that increased client sales by 340% using AI-powered recommendations and lightning-fast checkout processes.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    technologies: ["React", "Node.js", "AI/ML", "PostgreSQL", "AWS"],
    results: {
      performance: "+340% Sales Increase",
      speed: "2x Faster Loading",
      conversion: "+180% Conversion Rate"
    },
    client: "TechFlow Commerce",
    duration: "4 months",
    featured: true
  },
  {
    id: 2,
    title: "AI-Powered Analytics Dashboard",
    category: "Data Analytics",
    description: "Intelligent business intelligence platform that transforms complex data into actionable insights with predictive analytics capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    technologies: ["Python", "TensorFlow", "React", "MongoDB", "Docker"],
    results: {
      efficiency: "+250% Data Processing",
      accuracy: "99.7% Prediction Rate",
      savings: "$2M Cost Reduction"
    },
    client: "DataDrive Analytics",
    duration: "6 months",
    featured: true
  },
  {
    id: 3,
    title: "Cloud Infrastructure Migration",
    category: "Cloud Solutions",
    description: "Complete cloud transformation enabling 99.99% uptime and infinite scalability with automated deployment pipelines.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    technologies: ["AWS", "Kubernetes", "Docker", "Terraform", "Jenkins"],
    results: {
      uptime: "99.99% Availability",
      scalability: "Auto-scaling",
      costs: "-60% Infrastructure Costs"
    },
    client: "ScaleUp Ventures",
    duration: "3 months",
    featured: false
  },
  {
    id: 4,
    title: "Mobile-First Banking App",
    category: "Mobile Application",
    description: "Secure, intuitive banking application with biometric authentication and real-time transaction processing.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    technologies: ["React Native", "Node.js", "Blockchain", "MongoDB"],
    results: {
      users: "1M+ Active Users",
      security: "Zero Breaches",
      rating: "4.9/5 App Rating"
    },
    client: "NextGen Bank",
    duration: "8 months",
    featured: true
  },
  {
    id: 5,
    title: "IoT Smart Factory System",
    category: "IoT Solutions",
    description: "Industrial IoT platform monitoring 10,000+ sensors in real-time with predictive maintenance capabilities.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80",
    technologies: ["IoT", "Python", "InfluxDB", "Grafana", "Edge Computing"],
    results: {
      efficiency: "+180% Production",
      maintenance: "-75% Downtime",
      quality: "+95% Quality Score"
    },
    client: "Industrial Innovations",
    duration: "10 months",
    featured: false
  }
];

export const mockServices = [
  {
    id: 1,
    title: "Web Application Development",
    shortDesc: "Lightning-fast, scalable web applications",
    fullDesc: "We create powerful, responsive web applications using cutting-edge technologies like React, Next.js, and Node.js. Our applications are built for performance, scalability, and user experience.",
    icon: "Globe",
    features: [
      "React & Next.js Development",
      "Progressive Web Apps (PWA)",
      "Real-time Applications",
      "API Development & Integration",
      "Performance Optimization",
      "Cross-browser Compatibility"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "MongoDB"],
    pricing: "Starting from $15,000",
    duration: "3-6 months",
    gradient: "from-lime-400 to-emerald-400"
  },
  {
    id: 2,
    title: "AI & Machine Learning",
    shortDesc: "Intelligent solutions that learn and adapt",
    fullDesc: "Transform your business with AI-powered solutions including predictive analytics, natural language processing, computer vision, and automated decision-making systems.",
    icon: "Cpu",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Recommendation Systems",
      "Process Automation",
      "Custom AI Models"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "scikit-learn", "Pandas"],
    pricing: "Starting from $25,000",
    duration: "4-8 months",
    gradient: "from-yellow-400 to-orange-400"
  },
  {
    id: 3,
    title: "Cloud Solutions & DevOps",
    shortDesc: "Scalable, secure cloud infrastructure",
    fullDesc: "Build robust, scalable cloud infrastructure with automated deployment, monitoring, and security. We specialize in AWS, Azure, and Google Cloud platforms.",
    icon: "Cloud",
    features: [
      "Cloud Architecture Design",
      "Automated CI/CD Pipelines",
      "Container Orchestration",
      "Infrastructure as Code",
      "Monitoring & Logging",
      "Security & Compliance"
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Prometheus"],
    pricing: "Starting from $20,000",
    duration: "2-4 months",
    gradient: "from-cyan-400 to-blue-400"
  },
  {
    id: 4,
    title: "Data Analytics & BI",
    shortDesc: "Transform data into actionable insights",
    fullDesc: "Unlock the power of your data with advanced analytics, business intelligence dashboards, and data visualization tools that drive informed decision-making.",
    icon: "Database",
    features: [
      "Business Intelligence Dashboards",
      "Data Warehouse Design",
      "ETL Pipeline Development",
      "Real-time Analytics",
      "Data Visualization",
      "Reporting Automation"
    ],
    technologies: ["Python", "Tableau", "Power BI", "Apache Spark", "PostgreSQL", "Elasticsearch"],
    pricing: "Starting from $18,000",
    duration: "3-5 months",
    gradient: "from-emerald-400 to-cyan-400"
  }
];

export const mockTeam = [
  {
    id: 1,
    name: "Alex Rodriguez",
    role: "CEO & Founder",
    bio: "15+ years in tech leadership, former Silicon Valley executive passionate about transforming businesses through innovation.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    expertise: ["Strategic Leadership", "Business Development", "Innovation Strategy"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "alex@polarisinovalabs.com"
    }
  },
  {
    id: 2,
    name: "Dr. Sarah Kim",
    role: "CTO & AI Director",
    bio: "PhD in Machine Learning from MIT, former Google AI researcher with 50+ published papers and 10 patents.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80",
    expertise: ["Artificial Intelligence", "Machine Learning", "Data Science"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@polarisinovalabs.com"
    }
  },
  {
    id: 3,
    name: "Marcus Chen",
    role: "Lead Full-Stack Developer",
    bio: "Full-stack architect with expertise in scalable systems, passionate about clean code and performance optimization.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    expertise: ["React/Node.js", "System Architecture", "Performance Optimization"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "marcus@polarisinovalabs.com"
    }
  },
  {
    id: 4,
    name: "Emily Watson",
    role: "Head of Design",
    bio: "Award-winning UX/UI designer with 12+ years creating beautiful, intuitive user experiences for Fortune 500 companies.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    expertise: ["UX/UI Design", "Design Systems", "User Research"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "emily@polarisinovalabs.com"
    }
  }
];

export const mockStats = {
  projectsCompleted: 150,
  happyClients: 50,
  teamMembers: 12,
  yearsExperience: 8,
  clientRetentionRate: 98,
  averageProjectRating: 4.9,
  technologiesMastered: 50,
  industryAwards: 15
};

export const mockBlogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business: 2025 Predictions",
    excerpt: "Explore how artificial intelligence will reshape industries and create new opportunities in the coming year.",
    content: "Artificial intelligence continues to revolutionize how businesses operate...",
    author: "Dr. Sarah Kim",
    date: "2024-12-15",
    readTime: "8 min read",
    category: "AI & Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tags: ["AI", "Machine Learning", "Business Strategy", "Future Tech"]
  },
  {
    id: 2,
    title: "Building Scalable Web Applications: Best Practices",
    excerpt: "Learn the essential principles for creating web applications that can handle millions of users.",
    content: "Scalability is crucial for modern web applications...",
    author: "Marcus Chen",
    date: "2024-12-10",
    readTime: "12 min read",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80",
    tags: ["Web Development", "Scalability", "Architecture", "Performance"]
  },
  {
    id: 3,
    title: "Cloud Migration Strategies for Modern Businesses",
    excerpt: "A comprehensive guide to moving your infrastructure to the cloud safely and efficiently.",
    content: "Cloud migration is no longer optional for businesses...",
    author: "Alex Rodriguez",
    date: "2024-12-05",
    readTime: "10 min read",
    category: "Cloud Computing",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    tags: ["Cloud Computing", "Migration", "AWS", "Strategy"]
  }
];

export const mockContactInfo = {
  office: {
    address: "123 Innovation District, Tech Valley, CA 94025",
    phone: "+1 (555) 123-4567",
    email: "hello@polarisinovalabs.com",
    hours: "Monday - Friday: 9AM - 6PM PST"
  },
  social: {
    linkedin: "https://linkedin.com/company/polaris-inova-labs",
    twitter: "https://twitter.com/polarisinova",
    github: "https://github.com/polarisinova",
    instagram: "https://instagram.com/polarisinova"
  }
};