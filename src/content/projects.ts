export type PublicationStatus = "draft" | "published";

export type ProjectGalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  problem: string;
  role: string;
  contributions: string[];
  outcomes: string[];
  technologies: string[];
  coverImage: string;
  gallery: ProjectGalleryImage[];
  workflows: string[];
  architectureDecisions: string[];
  challenges: Array<{ challenge: string; response: string }>;
  liveUrl?: string;
  repositoryUrl?: string;
  featured: boolean;
  status: PublicationStatus;
};

export const projects: Project[] = [
  {
    slug: "aether",
    name: "Aether",
    category: "Private Communication Hub",
    summary:
      "A private, real-time communication hub that connects clients on WhatsApp with engineers on Discord—without exposing either party’s contact information.",

    problem:
      "Client and engineer communication was fragmented across WhatsApp, Discord, and internal systems. Operational teams had to manually relay messages while protecting sensitive contact information.",

    role: "Full-stack product development and system integration",

    contributions: [
      "Developed a centralized interface for Key Account teams to manage client and engineer conversations.",
      "Integrated WhatsApp, Discord, and internal business systems through a shared real-time messaging workflow.",
      "Implemented manual and automatic message forwarding between communication channels.",
      "Built AI-assisted confidential-data checking to prevent sensitive information from being forwarded.",
      "Added AI reply suggestions to help operational teams respond more consistently and efficiently.",
      "Supported backend services, production deployment, and ongoing system reliability.",
    ],

    outcomes: [
      "Enabled clients and engineers to communicate in real time without sharing personal contact details.",
      "Consolidated cross-platform conversations into one operational workflow.",
      "Reduced repetitive message handling through automatic forwarding and AI-assisted responses.",
      "Improved visibility by connecting communication activity with the internal project dashboard.",
    ],

    technologies: [
      "Next.js",
      "Laravel",
      "Node.js",
      "PostgreSQL",
      "WhatsApp Cloud API",
      "Discord.js",
      "REST APIs",
      "Docker",
    ],

    coverImage: "/images/projects/aether-cover.png",

    gallery: [
      {
        src: "/images/projects/aether-cover.png",
        alt: "Aether communication workflow connecting a client on WhatsApp, a Key Account dashboard, and an engineer on Discord.",
        caption:
          "A private communication workflow connecting clients, Key Account teams, and engineers across WhatsApp, Aether, and Discord.",
      },
    ],

    workflows: [
      "Receive client messages from WhatsApp in real time.",
      "Centralize conversations inside the Aether Key Account dashboard.",
      "Check outgoing messages for confidential information using AI.",
      "Forward approved messages manually or automatically to the corresponding Discord project channel.",
      "Return engineer responses to clients without exposing either party’s identity or contact details.",
      "Synchronize communication activity with the internal project dashboard.",
    ],

    architectureDecisions: [
      "Use Aether as a privacy-preserving communication layer between WhatsApp clients and Discord-based engineers.",
      "Normalize messages from different platforms into a shared conversation model.",
      "Separate WhatsApp, Discord, message storage, and product-interface responsibilities into independently maintainable services.",
      "Map client conversations to project channels without exposing personal contact information.",
      "Support both manual and automatic forwarding so operational teams retain control over sensitive conversations.",
    ],

    challenges: [
      {
        challenge:
          "Maintaining real-time communication across platforms with different message formats and delivery behaviors.",
        response:
          "Normalized incoming and outgoing messages into a shared model with consistent delivery states and project mappings.",
      },
      {
        challenge:
          "Allowing clients and engineers to collaborate without revealing their personal contact details.",
        response:
          "Used Aether as an intermediary layer and added AI-assisted confidential-data checking before messages were forwarded.",
      },
      {
        challenge:
          "Balancing automation with the operational team’s need to review sensitive messages.",
        response:
          "Implemented configurable manual and automatic forwarding supported by delivery indicators and AI reply suggestions.",
      },
    ],

    featured: true,
    status: "published",
  },
  {
    slug: "sirkelbus",
    name: "SirkelBus",
    category: "Transport booking",
    summary:
      "A transport booking product combining Flutter applications with a Next.js administration system.",
    problem:
      "A booking product needs customer-facing mobile flows and a practical way for teams to administer them.",
    role: "Full-stack product development",
    contributions: [
      "Built booking experiences with Flutter.",
      "Supported operations through a Next.js administration system.",
    ],
    outcomes: [
      "Delivered connected customer and administrative product surfaces.",
      "Supported booking workflows across mobile and web interfaces.",
    ],
    technologies: ["Flutter", "Next.js", "REST APIs"],
    repositoryUrl: "https://github.com/dimassetio/sirkelbus_app",
    coverImage: "/images/projects/sirkelbus/sirkelbus-cover.png",
    gallery: [
      {
        src: "/images/projects/sirkelbus/sirkelbus-cover.png",
        alt: "SirkelBus product overview showing the admin dashboard, user and driver mobile apps, booking, routing, and live tracking features.",
        caption:
          "SirkelBus connects school-bus booking, driver operations, live tracking, dynamic routing, and administration across web and mobile interfaces.",
      },
      {
        src: "/images/projects/sirkelbus/Sirkelbus-Gallery-1.png",
        alt: "SirkelBus admin dashboard showing booking monitoring, live operations, trip schedules, and bus dispatch planning.",
        caption:
          "The administration control center brings booking monitoring, trip planning, bus assignment, and live operations into one dashboard.",
      },
      {
        src: "/images/projects/sirkelbus/Sirkelbus-Gallery-2.png",
        alt: "SirkelBus mobile booking screens showing trip selection, map-based stop selection, ticket details, and a QR boarding ticket.",
        caption:
          "Parents and students can choose a trip and stop, review booking details, and use a digital QR ticket when boarding.",
      },
      {
        src: "/images/projects/sirkelbus/Sirkelbus-Gallery-3.png",
        alt: "SirkelBus driver app and dispatch interface showing assigned trips, route details, bus assignment, and live tracking.",
        caption:
          "The connected dispatch workflow carries admin trip plans into the driver app with assignments, route details, and live location updates.",
      },
    ],
    workflows: [
      "Support booking tasks through Flutter application interfaces.",
      "Give administrators a web interface for operational work.",
      "Connect customer and administration experiences around the same product.",
    ],
    architectureDecisions: [
      "Use Flutter for mobile booking experiences and Next.js for the administration interface.",
      "Separate customer and operational interfaces while keeping their workflows connected.",
    ],
    challenges: [
      {
        challenge: "Serving customer booking and internal administration needs in one product.",
        response: "Use purpose-built Flutter and Next.js interfaces for each audience.",
      },
    ],
    featured: true,
    status: "published",
  },
  {
    slug: "ailearn",
    name: "AiLearn",
    category: "Interactive learning",
    summary:
      "An interactive learning platform that combines guided product experiences with an AI chatbot.",
    problem:
      "The learning experience needed an interactive product surface with integrated AI assistance.",
    role: "Full-stack product development",
    contributions: [
      "Built interactive learning product flows.",
      "Integrated an AI chatbot into the learning experience.",
    ],
    outcomes: [
      "Delivered a learning experience with contextual AI support.",
      "Produced a platform suitable for measured product validation.",
    ],
    technologies: ["Next.js", "AI integration", "REST APIs"],
    repositoryUrl: "https://github.com/dimassetio/ai_learn",
    coverImage: "/images/projects/ailearn/ailearn-cover.png",
    gallery: [
      {
        src: "/images/projects/ailearn/ailearn-cover.png",
        alt: "AiLearn product overview showing its student dashboard, structured materials, learning history, and contextual AI tutor.",
        caption:
          "AiLearn combines structured learning materials, progress tracking, and a context-aware AI tutor in one student-focused platform.",
      },
      {
        src: "/images/projects/ailearn/ailearn-gallery-1.png",
        alt: "AiLearn personalized dashboard and student profile showing learning materials, chatbot activity, study time, and recent lessons.",
        caption:
          "A personalized learning hub brings materials, AI support, recent activity, and student progress into one focused dashboard.",
      },
      {
        src: "/images/projects/ailearn/ailearn-gallery-2.png",
        alt: "AiLearn material library and lesson view showing organized courses, a PDF learning resource, and contextual AI chat.",
        caption:
          "Structured learning materials combine an organized lesson library, PDF resources, and contextual support within each topic.",
      },
      {
        src: "/images/projects/ailearn/ailearn-gallery-3.png",
        alt: "AiLearn context-aware AI tutor answering questions alongside an object-oriented programming lesson.",
        caption:
          "The AI tutor stays grounded in the active material to provide focused, step-by-step explanations without interrupting the lesson flow.",
      },
      {
        src: "/images/projects/ailearn/ailearn-gallery-4.png",
        alt: "AiLearn learning history dashboard showing studied materials, reading time, question count, sessions, and recent activity.",
        caption:
          "Learning activity tracking summarizes reading time, completed materials, sessions, and AI interactions in one place.",
      },
    ],
    workflows: [
      "Present interactive learning content through the product interface.",
      "Make AI chatbot support available within the learning journey.",
      "Support product validation without publishing unapproved measurements.",
    ],
    architectureDecisions: [
      "Integrate the chatbot as part of the learning experience instead of positioning it as a separate product.",
      "Keep validation results out of public copy until the exact measurements are approved.",
    ],
    challenges: [
      {
        challenge: "Adding AI assistance without letting it overpower the core learning experience.",
        response: "Position the chatbot as support within structured learning workflows.",
      },
    ],
    featured: true,
    status: "published",
  },
  {
    slug: "mosq",
    name: "Mosq",
    category: "Community operations",
    summary:
      "A Flutter and Firebase application supporting mosque operations and community information.",
    problem:
      "Mosque operations and community information need a practical, accessible digital channel.",
    role: "Mobile product development",
    contributions: [
      "Built the application experience with Flutter.",
      "Used Firebase to support the product's application services.",
    ],
    outcomes: [
      "Delivered a shared product for operational and community information needs.",
      "Made core information accessible through a mobile application.",
    ],
    technologies: ["Flutter", "Firebase"],
    coverImage: "/images/projects/mosq/mosq-cover.png",
    gallery: [
      {
        src: "/images/projects/mosq/mosq-cover.png",
        alt: "Mosq product overview showing mosque finance, community information, attendance, and daily worship features on mobile screens.",
        caption:
          "Mosq brings mosque management and daily worship together through connected finance, attendance, community, and religious features.",
      },
      {
        src: "/images/projects/mosq/Mosq-Gallery-1.png",
        alt: "Mosq mobile app screens showing a mosque profile, community features, and the mosque discovery home screen.",
        caption:
          "A connected mosque management experience for profiles, organizations, activities, inventory, and community discovery.",
      },
      {
        src: "/images/projects/mosq/Mosq-Gallery-2.png",
        alt: "Mosq finance screens showing zakat receipts, mosque cash flow, and zakat distribution records.",
        caption:
          "Finance and zakat tools bring cash-flow tracking, receipts, and distribution records into one clear workflow.",
      },
      {
        src: "/images/projects/mosq/Mosq-Gallery-3.png",
        alt: "Mosq attendance screens showing a map-based mosque check-in and imam attendance history.",
        caption:
          "Location-based attendance verifies check-ins near the mosque and keeps attendance history organized.",
      },
      {
        src: "/images/projects/mosq/Mosq-Gallery-4.png",
        alt: "Mosq worship screens showing prayer times, a Quran chapter list, audio playback, and tafsir content.",
        caption:
          "Daily worship features combine prayer times with Quran reading, audio playback, and tafsir access.",
      },
    ],
    workflows: [
      "Provide a mobile surface for mosque operational information.",
      "Share useful information with the surrounding community.",
      "Use Firebase-backed services for the application experience.",
    ],
    architectureDecisions: [
      "Use Flutter for a focused mobile experience.",
      "Use Firebase as the supporting application platform.",
    ],
    challenges: [
      {
        challenge: "Serving both operational and community information needs in one application.",
        response: "Organize both needs within a shared mobile product experience.",
      },
    ],
    featured: true,
    status: "published",
  },
];

function validatePublishedProject(project: Project) {
  const requiredStrings = [
    project.slug,
    project.name,
    project.category,
    project.summary,
    project.problem,
    project.role,
    project.coverImage,
  ];

  if (requiredStrings.some((value) => value.trim().length === 0)) {
    throw new Error(`Published project "${project.name}" has missing required content.`);
  }

  const requiredLists = [
    project.contributions,
    project.outcomes,
    project.technologies,
    project.gallery,
    project.workflows,
    project.architectureDecisions,
    project.challenges,
  ];

  if (requiredLists.some((items) => items.length === 0)) {
    throw new Error(`Published project "${project.name}" has an incomplete case study.`);
  }

  if (project.gallery.some((image) => image.alt.trim().length === 0)) {
    throw new Error(`Published project "${project.name}" has gallery imagery without alt text.`);
  }
}

export const publishedProjects = projects.filter((project) => {
  if (project.status !== "published") return false;
  validatePublishedProject(project);
  return true;
});

if (process.env.NODE_ENV === "production" && publishedProjects.length < 3) {
  throw new Error("Production requires at least three published portfolio projects.");
}

export function getPublishedProject(slug: string) {
  return publishedProjects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = publishedProjects.findIndex((project) => project.slug === slug);
  if (index === -1) return {};

  return {
    previous: publishedProjects[(index - 1 + publishedProjects.length) % publishedProjects.length],
    next: publishedProjects[(index + 1) % publishedProjects.length],
  };
}
