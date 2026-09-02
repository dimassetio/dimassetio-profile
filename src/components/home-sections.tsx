import Image from "next/image";
import {
  ArrowRight,
  BellRing,
  Blocks,
  Braces,
  BrainCircuit,
  Code2,
  CreditCard,
  Database,
  Mail,
  MapPin,
  MessageSquareCode,
  PlugZap,
  Smartphone,
} from "lucide-react";
import {
  SiDiscord,
  SiExpress,
  SiFastify,
  SiFirebase,
  SiFlutter,
  SiGoogleplay,
  SiLaravel,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiWhatsapp,
} from "react-icons/si";
import githubIcon from "@/app/Github.svg";
import linkedinIcon from "@/app/Linkedin.svg";
import { ProjectShowcase } from "@/components/project-showcase";
import { TrackedLink } from "@/components/tracked-link";
import { publishedProjects } from "@/content/projects";
import { siteConfig } from "@/content/site";

const capabilities = [
  {
    icon: Code2,
    title: "Web Applications",
    copy: "Responsive web products and administration systems shaped around clear, reliable workflows.",
    technologies: [
      { name: "React", icon: SiReact, color: "#087ea4" },
      { name: "Next.js", icon: SiNextdotjs, color: "#111827" },
      { name: "Laravel", icon: SiLaravel, color: "#ff2d20" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#0891b2" },
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    copy: "Cross-platform mobile experiences with dependable data, notifications, and backend integration.",
    technologies: [
      { name: "Flutter", icon: SiFlutter, color: "#02569b" },
      { name: "Firebase", icon: SiFirebase, color: "#e37400" },
      { name: "FCM", icon: BellRing, color: "#2563eb" },
      { name: "Play Store Deployment", icon: SiGoogleplay, color: "#01875f" },
    ],
  },
  {
    icon: Database,
    title: "Backend Systems & APIs",
    copy: "Maintainable services and APIs that connect product experiences, business logic, and data.",
    technologies: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#111827" },
      { name: "Fastify", icon: SiFastify, color: "#111827" },
      { name: "Laravel", icon: SiLaravel, color: "#ff2d20" },
      { name: "REST API", icon: Braces, color: "#2563eb" },
    ],
  },
  {
    icon: PlugZap,
    title: "Third-Party Integrations",
    copy: "External services connected into product workflows with clear and dependable data flows.",
    technologies: [
      { name: "WhatsApp Cloud API", icon: SiWhatsapp, color: "#128c7e" },
      { name: "Discord API", icon: SiDiscord, color: "#5865f2" },
      { name: "Midtrans", icon: CreditCard, color: "#0f82e6" },
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Products",
    copy: "Focused AI features integrated into product experiences to support real user workflows.",
    technologies: [
      { name: "LLM API", icon: BrainCircuit, color: "#7c3aed" },
      { name: "AI Chatbot", icon: MessageSquareCode, color: "#2563eb" },
    ],
  },
];

export function WorkSection() {
  return (
    <section className="section work-section" id="work" aria-labelledby="work-heading">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Selected work</p>
          <h2 id="work-heading">Products built for real workflows.</h2>
          <p>Four selected builds across communication, transport, learning, and community—part of a broader portfolio of products already delivered.</p>
        </div>
        <ProjectShowcase projects={publishedProjects} />
      </div>
    </section>
  );
}

export function CapabilitiesSection() {
  return (
    <section className="section section-soft" id="capabilities" aria-labelledby="capabilities-heading">
      <div className="container">
        <div className="section-intro centered-intro">
          <p className="eyebrow">Capabilities</p>
          <h2 id="capabilities-heading">From first interface to production delivery.</h2>
          <p>I work across the product stack, choosing the right layer for the problem instead of forcing every product into the same shape.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map(({ icon: Icon, ...capability }) => (
            <article className="capability-card" key={capability.title}>
              <div className="capability-icon"><Icon aria-hidden="true" /></div>
              <h3>{capability.title}</h3>
              <p>{capability.copy}</p>
              <ul className="technology-list" aria-label={`${capability.title} technologies`}>
                {capability.technologies.map(({ name, icon: TechnologyIcon, color }) => (
                  <li key={name}>
                    <span className="technology-item">
                      <TechnologyIcon aria-hidden="true" color={color} />
                      <span className="sr-only">{name}</span>
                      <span className="technology-name" aria-hidden="true">{name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-heading">
      <div className="container experience-grid">
        <div className="section-intro">
          <p className="eyebrow">Experience</p>
          <h2 id="experience-heading">Building products that have to work.</h2>
          <p>Hands-on experience across product development, integration, deployment, and production support.</p>
          <TrackedLink
            className="button button-secondary"
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            event="resume_downloaded"
          >
            View résumé <ArrowRight aria-hidden="true" />
          </TrackedLink>
        </div>
        <div className="timeline">
          <article className="timeline-entry">
            <div className="timeline-marker" aria-hidden="true" />
            <p className="timeline-date">July 2024 — present</p>
            <h3>Software Developer</h3>
            <p className="timeline-company">JokiProyek · Part-time</p>
            <ul>
              <li>Contributed to more than 20 web and mobile products.</li>
              <li>Worked across frontend, backend, integrations, deployment, and production support.</li>
              <li>Turned stakeholder requirements into practical product features.</li>
              <li>Provided technical support and guidance to stakeholders after application and feature releases.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="section section-soft" id="about" aria-labelledby="about-heading">
      <div className="container about-grid">
        <div className="section-intro">
          <p className="eyebrow">About me</p>
          <h2 id="about-heading">Practical technology, built around real needs.</h2>
        </div>
        <div className="about-copy">
          <p className="large-copy">My background in Informatics Education shaped how I approach software: understand the person, clarify the problem, then make the technology useful.</p>
          <p>I&apos;m comfortable moving between product thinking, interface details, backend systems, integrations, and deployment. That range helps me see how decisions in one layer affect the complete experience.</p>
          <div className="working-style">
            <p><Blocks aria-hidden="true" /><span><strong>End-to-end thinking</strong><small>From workflow and interface to infrastructure.</small></span></p>
            <p><MapPin aria-hidden="true" /><span><strong>Based in Malang</strong><small>{siteConfig.availability}.</small></span></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow eyebrow-on-dark">Start a conversation</p>
          <h2 id="contact-heading">Have a role or product in mind? Let&apos;s talk.</h2>
          <p>Recruiter and project enquiries are both welcome. Tell me what you&apos;re building or where I could help.</p>
        </div>
        <div className="contact-actions">
          <TrackedLink className="email-link" href={`mailto:${siteConfig.email}`} event="contact_cta_clicked" eventData={{ location: "contact" }}>
            <Mail aria-hidden="true" /><span><small>Email me</small>{siteConfig.email}</span><ArrowRight aria-hidden="true" />
          </TrackedLink>
          <div className="social-profiles">
            <p className="social-label">Find me online</p>
            <div className="social-links">
              <TrackedLink className="social-card" href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Find Dimas on LinkedIn" event="external_profile_opened" eventData={{ profile: "linkedin" }}>
                <Image src={linkedinIcon} alt="" aria-hidden="true" />
              </TrackedLink>
              <TrackedLink className="social-card" href={siteConfig.github} target="_blank" rel="noopener noreferrer" aria-label="Find Dimas on GitHub" event="external_profile_opened" eventData={{ profile: "github" }}>
                <Image src={githubIcon} alt="" aria-hidden="true" />
              </TrackedLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
