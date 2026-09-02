import Image from "next/image";
import { ArrowUp, Mail } from "lucide-react";
import githubIcon from "@/app/Github.svg";
import linkedinIcon from "@/app/Linkedin.svg";
import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        <nav aria-label="Footer navigation">
          <a href={`mailto:${siteConfig.email}`} aria-label="Email Dimas"><Mail aria-hidden="true" /></a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Dimas on LinkedIn"><Image src={linkedinIcon} alt="" aria-hidden="true" /></a>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" aria-label="Dimas on GitHub"><Image src={githubIcon} alt="" aria-hidden="true" /></a>
        </nav>
        <a className="back-to-top" href="#top">Back to top <ArrowUp aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
