export const portfolio = {
  name: "Lalit Shelkar",
  title: "Software Developer",
  company: "Cognizant",
  role: "Software Developer",
  location: "Pune, Maharashtra, India",
  email: "lalitshelkar2424@gmail.com",
  phone: "+91 7385624021",
  github: "https://github.com/lalit-shelkar",
  resumeUrl: "/LalitShelkar_Resume.pdf",
  summary:
    "Software Developer with 1 year of professional experience at Cognizant, building enterprise applications using Java and Spring Boot. Also starting out as a freelancer — available for web development, backend APIs, and custom software projects for businesses and individuals.",
  freelancing: {
    available: true,
    tagline: "Available for Freelance Projects",
    description:
      "I take on freelance work alongside my full-time role — from backend APIs and Spring Boot applications to full-stack web projects. If you have an idea or a product to build, let's talk.",
    services: [
      "Backend & REST API development",
      "Java / Spring Boot applications",
      "Full-stack web development",
      "Bug fixes & feature enhancements",
    ],
  },
  skillCategories: [
    {
      name: "Backend & APIs",
      skills: ["Java", "Spring Boot", "Microservices", "MySQL", "REST APIs"],
    },
    {
      name: "Frontend & Mobile",
      skills: ["HTML, CSS, JavaScript", "Flutter"],
    },
    {
      name: "Core & Tools",
      skills: ["OOP", "Git", "Agile", "DBMS"],
    },
  ],
  stats: [
    { label: "Experience", value: "1+ Yrs" },
    { label: "Employer", value: "Cognizant" },
    { label: "Freelancing", value: "Open" },
  ],
  experience: [
    {
      company: "Cognizant",
      role: "Software Developer",
      period: "2025 – Present",
      location: "Pune, India",
      description:
        "Developing and maintaining enterprise-grade applications for global clients in a collaborative agile environment.",
      highlights: [
        "Build and enhance backend services using Java and Spring Boot",
        "Develop RESTful APIs and integrate with databases and third-party systems",
        "Collaborate with cross-functional teams on design, development, and delivery",
        "Follow coding standards, code reviews, and best practices in production workflows",
      ],
    },
  ],
  projects: [
    {
      name: "Pet-Guardian",
      period: "Mar 2025 – Jun 2025",
      description:
        "Desktop platform for pet owners built using JavaFX. Managed project structure and API connectivity with strong use of OOP, exception handling, and collections.",
      tech: ["Java", "JavaFX", "OOP", "Collections"],
    },
    {
      name: "Foodixpress",
      period: "Mar 2025 – May 2025",
      description:
        "Food delivery platform with a full ordering workflow — menu browsing, cart management, and order processing using Spring Boot and MySQL.",
      tech: ["Spring Boot", "Spring MVC", "MySQL", "HTML", "CSS"],
    },
  ],
  education: [
    {
      degree: "B.E. – Computer Science & Engineering",
      school: "Sinhgad College of Engineering, Pune",
    },
  ],
  languages: [
    { name: "English", level: "Proficient" },
    { name: "Hindi", level: "Proficient" },
    { name: "Marathi", level: "Proficient" },
  ],
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Hire Me", href: "#hire-me", highlight: true },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
