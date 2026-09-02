import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, LockKeyhole } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { getAdjacentProjects, getPublishedProject, publishedProjects } from "@/content/projects";
import { siteConfig } from "@/content/site";

export function generateStaticParams() {
  return publishedProjects.map((project) => ({ slug: project.slug }));
}

type ProjectPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata(props: ProjectPageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getPublishedProject(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      url: `/work/${project.slug}`,
      title: `${project.name} — ${siteConfig.name}`,
      description: project.summary,
      images: [{ url: project.coverImage, alt: project.gallery[0].alt }],
    },
  };
}

export default async function ProjectPage(props: ProjectPageProps) {
  const { slug } = await props.params;
  const project = getPublishedProject(slug);
  if (!project) notFound();

  const adjacent = getAdjacentProjects(project.slug);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.summary,
    url: `${siteConfig.url}/work/${project.slug}`,
    creator: { "@type": "Person", name: siteConfig.name, url: siteConfig.url },
    keywords: project.technologies.join(", "),
  };

  return (
    <article className="case-study">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <header className="case-hero section-soft">
        <div className="container">
          <Link className="back-link" href="/#work"><ArrowLeft aria-hidden="true" /> Back to selected work</Link>
          <div className="case-title-grid">
            <div>
              <p className="eyebrow">{project.category}</p>
              <h1>{project.name}</h1>
              <p className="case-summary">{project.summary}</p>
            </div>
            <dl className="case-meta">
              <div><dt>Role</dt><dd>{project.role}</dd></div>
              <div><dt>Stack</dt><dd>{project.technologies.join(" · ")}</dd></div>
            </dl>
          </div>
          <div className="project-artwork case-cover">
            <div className="browser-bar" aria-hidden="true"><span /><span /><span /><small>{project.category}</small></div>
            <Image src={project.coverImage} alt={project.gallery[0].alt} width={1280} height={720} priority sizes="(max-width: 1199px) 92vw, 1120px" />
          </div>
        </div>
      </header>

      <div className="container case-body">
        <section aria-labelledby="context-heading">
          <p className="eyebrow">Context</p>
          <h2 id="context-heading">The problem</h2>
          <p className="large-copy">{project.problem}</p>
        </section>
        <section className="case-two-column section-rule" aria-labelledby="contribution-heading">
          <div><p className="eyebrow">Ownership</p><h2 id="contribution-heading">Contribution</h2></div>
          <ul className="detail-list">{project.contributions.map((item) => <li key={item}><CheckCircle2 aria-hidden="true" />{item}</li>)}</ul>
        </section>
        <section className="case-two-column section-rule" aria-labelledby="workflow-heading">
          <div><p className="eyebrow">Solution</p><h2 id="workflow-heading">Key workflows</h2></div>
          <ol className="workflow-list">{project.workflows.map((item, index) => <li key={item}><span>0{index + 1}</span><p>{item}</p></li>)}</ol>
        </section>
        <section className="case-two-column section-rule" aria-labelledby="decisions-heading">
          <div><p className="eyebrow">Engineering</p><h2 id="decisions-heading">Important decisions</h2></div>
          <div className="decision-list">{project.architectureDecisions.map((item) => <p key={item}>{item}</p>)}</div>
        </section>
        <section className="case-two-column section-rule" aria-labelledby="challenges-heading">
          <div><p className="eyebrow">Problem solving</p><h2 id="challenges-heading">Challenges</h2></div>
          <div className="challenge-list">{project.challenges.map((item) => <article key={item.challenge}><h3>{item.challenge}</h3><p>{item.response}</p></article>)}</div>
        </section>
        <section className="case-two-column section-rule" aria-labelledby="results-heading">
          <div><p className="eyebrow">Results</p><h2 id="results-heading">Delivered outcomes</h2></div>
          <ul className="detail-list">{project.outcomes.map((item) => <li key={item}><CheckCircle2 aria-hidden="true" />{item}</li>)}</ul>
        </section>
        <section className="gallery-section section-rule" aria-labelledby="gallery-heading">
          <div><p className="eyebrow">Product view</p><h2 id="gallery-heading">Gallery</h2></div>
          <div className="case-gallery">{project.gallery.map((image) => <figure key={image.src}><Image src={image.src} alt={image.alt} width={1280} height={800} sizes="(max-width: 1199px) 92vw, 1120px" /><figcaption>{image.caption}</figcaption></figure>)}</div>
        </section>
        <div className="case-actions">
          {project.liveUrl ? <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live demo <ExternalLink aria-hidden="true" /></a> : null}
          {project.repositoryUrl ? (
            <a className="button button-secondary" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer"><SiGithub aria-hidden="true" /> View on GitHub <ExternalLink aria-hidden="true" /></a>
          ) : (
            <span className="repository-status"><LockKeyhole aria-hidden="true" /> Private repository</span>
          )}
        </div>
      </div>

      <nav className="container case-navigation" aria-label="Project navigation">
        {adjacent.previous ? <Link href={`/work/${adjacent.previous.slug}`}><ArrowLeft aria-hidden="true" /><span><small>Previous project</small>{adjacent.previous.name}</span></Link> : <span />}
        {adjacent.next ? <Link href={`/work/${adjacent.next.slug}`}><span><small>Next project</small>{adjacent.next.name}</span><ArrowRight aria-hidden="true" /></Link> : null}
      </nav>
      <section className="case-contact"><div className="container"><p className="eyebrow eyebrow-on-dark">Let&apos;s build something useful</p><h2>Have a role or product in mind?</h2><a className="button button-on-dark" href={`mailto:${siteConfig.email}`}>Contact me <ArrowRight aria-hidden="true" /></a></div></section>
    </article>
  );
}
