import {
  AboutSection,
  CapabilitiesSection,
  ContactSection,
  ExperienceSection,
  WorkSection,
} from "@/components/home-sections";
import { Hero } from "@/components/hero";
import { publishedProjects } from "@/content/projects";
import { siteConfig } from "@/content/site";

export default function Home() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
      email: `mailto:${siteConfig.email}`,
      jobTitle: "Full-Stack Developer",
      homeLocation: { "@type": "Place", name: siteConfig.location },
      sameAs: [siteConfig.linkedin, siteConfig.github],
      knowsAbout: ["Web applications", "Mobile applications", "Backend systems", "Business integrations"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: `${siteConfig.name} Portfolio`,
      url: siteConfig.url,
      description: siteConfig.description,
    },
    ...publishedProjects.map((project) => ({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.name,
      description: project.summary,
      url: `${siteConfig.url}/work/${project.slug}`,
      creator: { "@type": "Person", name: siteConfig.name },
    })),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <WorkSection />
      <CapabilitiesSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
