"use client";

import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, ExternalLink, LockKeyhole } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { useRef, useState } from "react";
import type { Project } from "@/content/projects";
import { trackPortfolioEvent } from "@/lib/analytics";

export function ProjectShowcase({ projects }: { projects: Project[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const swipeStartX = useRef<number | null>(null);
  const project = projects[selectedIndex];
  const galleryImage = project.gallery[galleryIndex] ?? project.gallery[0];
  const hasMultipleImages = project.gallery.length > 1;

  function select(index: number, focus = false) {
    setSelectedIndex(index);
    setGalleryIndex(0);
    trackPortfolioEvent("project_selected", { project: projects[index].slug });
    if (focus) tabsRef.current[index]?.focus();
  }

  function moveGallery(direction: -1 | 1) {
    setGalleryIndex((current) =>
      (current + direction + project.gallery.length) % project.gallery.length
    );
  }

  function moveSelection(key: string) {
    let nextIndex = selectedIndex;
    if (key === "ArrowDown" || key === "ArrowRight") {
      nextIndex = (selectedIndex + 1) % projects.length;
    } else if (key === "ArrowUp" || key === "ArrowLeft") {
      nextIndex = (selectedIndex - 1 + projects.length) % projects.length;
    } else if (key === "Home") {
      nextIndex = 0;
    } else if (key === "End") {
      nextIndex = projects.length - 1;
    } else {
      return;
    }
    select(nextIndex, true);
  }

  return (
    <div className="showcase-shell">
      <div className="project-tabs" role="tablist" aria-label="Featured projects">
        {projects.map((item, index) => (
          <button
            key={item.slug}
            ref={(element) => {
              tabsRef.current[index] = element;
            }}
            id={`project-tab-${item.slug}`}
            role="tab"
            type="button"
            aria-selected={index === selectedIndex}
            aria-controls={`project-panel-${item.slug}`}
            tabIndex={index === selectedIndex ? 0 : -1}
            onClick={() => select(index)}
            onKeyDown={(event) => {
              if (["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"].includes(event.key)) {
                event.preventDefault();
                moveSelection(event.key);
              }
            }}
          >
            <span className="project-index">0{index + 1}</span>
            <span>
              <strong>{item.name}</strong>
              <small>{item.category}</small>
            </span>
            <ArrowRight aria-hidden="true" />
          </button>
        ))}
        <button
          className="project-tab-locked"
          role="tab"
          type="button"
          aria-selected="false"
          aria-disabled="true"
          aria-label="More completed projects; case studies coming soon"
          disabled
        >
          <span className="project-index">0{projects.length + 1}</span>
          <span>
            <strong>More projects <LockKeyhole aria-hidden="true" /></strong>
            <small>Case studies coming soon</small>
          </span>
        </button>
      </div>

      <div
        key={project.slug}
        id={`project-panel-${project.slug}`}
        className="project-panel"
        role="tabpanel"
        aria-labelledby={`project-tab-${project.slug}`}
        aria-live="polite"
      >
        <div className="project-artwork">
          <div className="browser-bar" aria-hidden="true">
            <span /><span /><span />
            <small>
              {project.category}
              {hasMultipleImages ? ` · ${galleryIndex + 1}/${project.gallery.length}` : ""}
            </small>
          </div>
          <div
            className="project-carousel"
            role="region"
            aria-roledescription="carousel"
            aria-label={`${project.name} project gallery`}
            onPointerDown={(event) => {
              if (hasMultipleImages && event.pointerType !== "mouse") {
                swipeStartX.current = event.clientX;
              }
            }}
            onPointerUp={(event) => {
              if (swipeStartX.current === null) return;
              const distance = event.clientX - swipeStartX.current;
              swipeStartX.current = null;
              if (Math.abs(distance) >= 48) moveGallery(distance < 0 ? 1 : -1);
            }}
            onPointerCancel={() => {
              swipeStartX.current = null;
            }}
          >
            <Image
              key={galleryImage.src}
              className="project-slide-image"
              src={galleryImage.src}
              alt={galleryImage.alt}
              width={1280}
              height={720}
              sizes="(max-width: 767px) 92vw, (max-width: 1199px) 65vw, 690px"
            />
            {hasMultipleImages ? (
              <>
                <button
                  className="carousel-arrow carousel-arrow-previous"
                  type="button"
                  aria-label={`Previous image for ${project.name}`}
                  onClick={() => moveGallery(-1)}
                >
                  <ChevronLeft aria-hidden="true" />
                </button>
                <button
                  className="carousel-arrow carousel-arrow-next"
                  type="button"
                  aria-label={`Next image for ${project.name}`}
                  onClick={() => moveGallery(1)}
                >
                  <ChevronRight aria-hidden="true" />
                </button>
                <div className="carousel-pagination" aria-label={`${project.name} gallery image selection`}>
                  {project.gallery.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      aria-label={`Show image ${index + 1} of ${project.gallery.length} for ${project.name}`}
                      aria-current={index === galleryIndex ? "true" : undefined}
                      onClick={() => setGalleryIndex(index)}
                    />
                  ))}
                </div>
              </>
            ) : null}
            <p className="sr-only" aria-live="polite">
              Image {galleryIndex + 1} of {project.gallery.length}. {galleryImage.caption}
            </p>
          </div>
        </div>
        <div className="project-copy">
          <div>
            <p className="meta-label">Role</p>
            <p>{project.role}</p>
          </div>
          <p className="project-summary">{project.summary}</p>
          <ul className="outcome-list">
            {project.outcomes.slice(0, 2).map((outcome) => (
              <li key={outcome}><CheckCircle2 aria-hidden="true" />{outcome}</li>
            ))}
          </ul>
          <div className="tag-list" aria-label="Technologies">
            {project.technologies.slice(0, 6).map((technology) => <span key={technology}>{technology}</span>)}
          </div>
          <div className="project-actions">
            <Link
              className="text-link"
              href={`/work/${project.slug}`}
              onClick={() => trackPortfolioEvent("case_study_opened", { project: project.slug })}
            >
              View {project.name} case study <ArrowRight aria-hidden="true" />
            </Link>
            {project.repositoryUrl ? (
              <a
                className="repository-link"
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackPortfolioEvent("project_repository_opened", { project: project.slug })}
              >
                <SiGithub aria-hidden="true" /> GitHub <ExternalLink aria-hidden="true" />
              </a>
            ) : (
              <span className="repository-status"><LockKeyhole aria-hidden="true" /> Private repository</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
