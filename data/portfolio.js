export const portfolio = {
  name: "Ishfat Abrar Islam",
  title: "CEO & Cofounder @ IMGNi Labs",
  tagline: "Building innovative software and AI-driven products at IMGNi Labs.",
  about:
    "I'm the CEO and cofounder of IMGNi Labs, where I lead the development of software at the intersection of AI and creative technology. I'm also a Computer Science student at the University of South Florida, a software development intern building Guardian, and a research assistant working on NLP and idea originality.",
  email: "ishfatabrar@usf.edu",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ishfat0001/" },
    { label: "GitHub", href: "https://github.com/IshfatAbrar" },
    { label: "Devpost", href: "https://devpost.com/ishfat0001abrar" },
  ],
  experience: [
    {
      title: "CEO & Cofounder",
      subtitle: "IMGNi Labs · Present",
      description:
        "Leading IMGNi Labs and building IMGN Voice, an agentic AI embedded on business websites that answers questions, calls APIs, and completes tasks for visitors around the clock in 70+ languages. Overseeing product development across API-native tool calling, voice and text modes, safety guardrails, and action analytics.",
      href: "https://imgnilabs.com/",
      tags: ["Agentic AI", "Voice AI", "API Integration", "LLMs"],
    },
    {
      title: "Software Development Intern",
      subtitle: "AI-Guardian Center · May 2025 – Present",
      description:
        "Engineering Guardiane, a real-time dual-role Android ecosystem with React Native and Firebase. Fine-tuned a RoBERTa NLP model for on-device text flagging (91% accuracy, 28% latency reduction) and improved backend sync speed by 40%.",
      href: "https://www.guardianeusa.com/",
      tags: ["React Native", "Firebase", "NLP", "Android"],
    },
    {
      title: "Undergraduate Research Assistant",
      subtitle: "USF CSSAI Lab · March 2025 – Present",
      description:
        "Co-authored MuseRAG (EMNLP 2025), implementing RAG and LLM-as-judge pipelines in Python, HuggingFace, and PyTorch. Curated datasets, designed statistical experiments, and improved pipeline evaluation accuracy by 18%.",
      href: "https://aclanthology.org/2025.emnlp-main.1009/",
      tags: ["Python", "PyTorch", "LLMs", "Research"],
    },
    {
      title: "Facilities Management Staff",
      subtitle: "Judy Genshaft Honors College · Jan 2026 – May 2026",
      description:
        "Supported daily operations at the Judy Genshaft Honors College by maintaining facilities, coordinating event setups, and assisting staff with building and space management to keep the college running smoothly for students and faculty.",
      href: "https://www.usf.edu/honors/",
      tags: ["Operations", "Facilities", "Event Support"],
    },
    {
      title: "Digital Shopper Associate",
      subtitle: "Walmart · May 2025 – Aug 2025 · Buffalo, NY",
      description:
        "Managed real-time order processing, inventory tracking, and customer fulfillment using Walmart's internal digital systems and handheld devices. Collaborated with cross-functional teams to resolve technical and logistical issues in a high-volume omnichannel environment, improving operational efficiency and data-driven decision-making.",
      href: null,
      tags: ["Retail Tech", "Inventory Systems", "Omnichannel"],
    },
  ],
  publications: [
    {
      title: "MuseScorer: Idea Originality Scoring At Scale",
      subtitle:
        "Ali Sarosh Bangash, Krish Veera, Ishfat Abrar Islam, Raiyan Abdul Baten · EMNLP 2025",
      description:
        "A fully automated system for frequency-based idea originality scoring that integrates LLMs with retrieval to cluster idea rephrasings without human annotation.",
      href: "https://aclanthology.org/2025.emnlp-main.1009/",
      tags: ["NLP", "LLMs", "Creativity Research"],
    },
  ],
  projects: [
    {
      title: "IMGN Voice",
      subtitle: "Present",
      description:
        "Agentic AI that lives on business websites to answer questions, call APIs, and complete tasks for visitors in 70+ languages. Supports voice and text, API-native tool calling, built-in actions like scheduling and form submission, and safety guardrails with action analytics.",
      href: "https://imgnilabs.com/",
      tags: ["Agentic AI", "Voice AI", "API Integration", "LLMs"],
    },
    {
      title: "Guardiane App",
      subtitle: "May 2025 – Present",
      description:
        "Dual-role Android ecosystem with separate parent and child apps built in React Native and Firebase. Parents set controls, link accounts, receive SOS alerts, and monitor behavior with on-device NLP; children complete interactive learning modules to regain restricted app access.",
      href: "https://play.google.com/store/apps/details?id=com.guardiane.parent",
      tags: ["React Native", "Firebase", "NLP", "Android"],
    },
    {
      title: "OnRoute AI",
      subtitle: "April 2025",
      description:
        "AI-powered semantic travel planner recommendation engine with Sentence Transformers and FAISS vector search. Deployed FastAPI microservices on AWS and integrated with a Next.js frontend for personalized travel planning.",
      href: null,
      tags: ["FastAPI", "FAISS", "Next.js", "AWS"],
    },
    {
      title: "TouchGrass",
      subtitle: "February 2025",
      description:
        "Scalable MERN stack app with JWT auth, TensorFlow recommendation systems, and real-time event management via WebSockets and Redis. Deployed on AWS EC2 with Docker and GitHub Actions CI/CD.",
      href: null,
      tags: ["React", "Node.js", "MongoDB", "TensorFlow", "AWS"],
    },
    {
      title: "Chauff",
      subtitle: "February 2024",
      description:
        "Full-stack ride platform with Google Maps GPS tracking, Stripe Connect payments, and cloud-native AWS backend. CI/CD pipelines reduced deployment downtime by 35%.",
      href: "https://chauff.vercel.app/",
      tags: ["Next.js", "React Native", "Stripe", "AWS"],
    },
    {
      title: "Aronnak POS",
      subtitle: "February 2024",
      description:
        "React Native (Expo) point-of-sale system with real-time order management, SQLite offline storage, automatic receipt printing, and exportable sales history.",
      href: null,
      tags: ["React Native", "Expo", "SQLite", "MongoDB"],
    },
    {
      title: "NDC Record Management System",
      subtitle: "May 2023",
      description:
        "Android app for high school administration to streamline student information retrieval by ID number, built with Java and Android Studio.",
      href: null,
      tags: ["Java", "Android Studio", "Backendless"],
    },
  ],
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Publications", href: "#publications" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
};
