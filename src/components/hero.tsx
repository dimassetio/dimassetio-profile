import { ArrowDownRight, ArrowRight } from "lucide-react";
import { Portrait } from "@/components/portrait";
import { TrackedLink } from "@/components/tracked-link";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span aria-hidden="true"></span> Hi, I&apos;m Dimas</p>
          <h1 id="hero-title">
            I turn ideas into <span className="highlight-word">useful products.</span>
          </h1>
          <p className="hero-lede">
            Full-stack developer working across Web, Mobile, and AI Integrations.
          </p>
          <div className="hero-actions">
            <a className="button button-secondary" href="#work">
              See my work <ArrowDownRight aria-hidden="true" />
            </a>
            <TrackedLink className="button button-primary" href="#contact" event="contact_cta_clicked" eventData={{ location: "hero" }}>
              Let&apos;s connect <ArrowRight aria-hidden="true" />
            </TrackedLink>
          </div>
        </div>
        <Portrait />
      </div>
    </section>
  );
}
