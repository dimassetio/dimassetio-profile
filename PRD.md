# Product Requirements Document: Dimas Portfolio Website

**Version:** 1.0  
**Status:** Ready for implementation  
**Owner:** Dimas Setio Muhammad  
**Last updated:** 21 August 2026

## 1. Product overview

Build a fast, responsive personal portfolio website that presents Dimas as a versatile full-stack developer capable of delivering complete web, mobile, backend, integration, and deployment solutions.

The website must serve two audiences equally well:

1. Recruiters and hiring managers evaluating Dimas for software development roles.
2. Prospective clients or founders looking for a developer to build a digital product.

The primary conversion goal is for a qualified visitor to contact Dimas about a work opportunity. The experience should feel professional, bright, approachable, and product-oriented rather than resembling a conventional résumé page.

## 2. Product goals

### 2.1 Primary goals

- Communicate Dimas's full-stack positioning within the first 10 seconds.
- Demonstrate practical experience through interactive product showcases and outcome-focused case studies.
- Establish credibility with production experience, technical breadth, and clear ownership of delivered work.
- Make contacting Dimas easy from any important point in the visitor journey.
- Provide a polished experience on desktop, tablet, and mobile.

### 2.2 Secondary goals

- Provide recruiters with a downloadable résumé and clear career history.
- Give technical reviewers enough detail to understand architecture and engineering decisions.
- Allow non-technical clients to understand the business value of each project.
- Create a reusable foundation that can be updated with future projects.

### 2.3 Non-goals for version 1

- User accounts or authentication.
- A content management system.
- A full blog platform.
- Complex 3D scenes or continuous decorative animations.
- Automatic multilingual content.
- Public comments, ratings, or testimonials without verified source material.

## 3. Target audiences

### 3.1 Recruiter or hiring manager

**Needs:** Quickly identify Dimas's role, experience level, technology coverage, location or availability, strongest projects, and résumé.  
**Desired action:** Review projects, download the résumé, and contact Dimas about a role.

### 3.2 Technical reviewer

**Needs:** Understand Dimas's individual contributions, architecture decisions, engineering challenges, deployment experience, and technical depth.  
**Desired action:** Open case studies, inspect code when available, and recommend Dimas for the next hiring stage.

### 3.3 Client or founder

**Needs:** Understand what Dimas can build, whether he can manage a product end to end, and how to begin a conversation.  
**Desired action:** Contact Dimas with a project brief.

## 4. Positioning and messaging

### 4.1 Core positioning

> A versatile full-stack developer who builds complete, reliable digital products from interface to infrastructure.

### 4.2 Hero content

**Eyebrow:**  
`Hello, I'm Dimas — Web and mobile apps developer`

**Headline:**  
`I build complete digital products, from interface to infrastructure.`

**Supporting copy:**  
`I create reliable web applications, mobile products, backend systems, and business integrations that solve real problems and work confidently in production.`

**Primary CTA:** `Contact me`  
**Secondary CTA:** `Explore my work`

**Supporting proof points:**

- `10+ products delivered`
- `Web, mobile & backend`
- `Available for opportunities`

### 4.3 Voice and tone

- Professional, direct, and confident.
- Friendly without becoming overly casual.
- Outcome-focused rather than adjective-heavy.
- Clear enough for non-technical readers.
- Technical detail should appear progressively rather than dominate the first screen.

## 5. Information architecture

### 5.1 Primary navigation

- Home
- Work
- Capabilities
- Experience
- About
- Contact

The desktop navigation may omit `Home` as a visible label and use the `Dimas.` logo as the home link. The mobile version must use an accessible menu button and navigation drawer or dropdown.

### 5.2 Routes

| Route | Purpose |
| --- | --- |
| `/` | Main single-page portfolio experience |
| `/work/[slug]` | Detailed project case study |
| `/resume.pdf` | Downloadable résumé |
| `/404` | Branded not-found state with return-to-home action |

Version 1 may launch with only the home page if case studies are displayed in accessible dialogs or expandable sections. Dedicated case-study routes are preferred for SEO and shareability.

## 6. Page requirements

### 6.1 Header

The header must contain:

- `Dimas.` wordmark linked to the top of the page.
- Navigation links.
- A visually prominent `Let's talk` action.
- A compact mobile navigation pattern below the desktop breakpoint.

The header should become slightly more defined after scrolling, using a light translucent surface or subtle border. It must not consume excessive vertical space.

### 6.2 Hero section

The hero must contain:

- Eyebrow, headline, supporting paragraph, and two CTAs.
- Dimas's extracted professional portrait on the right at desktop sizes.
- An organic light-blue shape or similarly restrained visual treatment behind the portrait.
- A small availability badge with an accessible text label.
- Two compact proof points below the CTA row.

#### Hero behavior

- `Contact me` scrolls to or opens the contact section.
- `Explore my work` scrolls to the project showcase.
- The portrait may respond to pointer movement with a subtle tilt on pointer-capable devices.
- The orange underline accent may animate once or respond on hover.
- Motion must stop or simplify when `prefers-reduced-motion` is enabled.

#### Hero acceptance criteria

- At 1440 px wide, copy and portrait appear side by side with balanced visual weight.
- At widths below approximately 768 px, content stacks with copy first and portrait second.
- Headline remains fully readable without awkward word clipping at 320 px.
- Both CTAs are visible without scrolling on common desktop viewport heights.
- The portrait retains natural proportions and clean edges.

### 6.3 Interactive project showcase

The showcase is the main evidence section and must feel like a compact product explorer rather than a static card grid.

#### Initial projects

1. **Aether** — WhatsApp, Discord, and internal-system communication hub.
2. **SirkelBus** — Flutter booking applications with a Next.js administration system.
3. **AiLearn** — Interactive learning platform with an AI chatbot and measured validation results.
4. **Mosq** — Flutter and Firebase application supporting mosque operations and community information.

#### Showcase requirements

- Display a project selector using tabs, buttons, or a compact list.
- Switching projects updates the preview, summary, role, outcome, and technology list without a page refresh.
- Support keyboard navigation and clear selected states.
- Use real screenshots wherever available.
- Present screenshots inside restrained browser or device frames.
- Provide `View case study`, `Live demo`, and `Source code` actions only when valid destinations exist.
- Do not render disabled or dead links.

#### Required project fields

```ts
type Project = {
  slug: string;
  name: string;
  summary: string;
  problem: string;
  role: string;
  contributions: string[];
  outcomes: string[];
  technologies: string[];
  coverImage: string;
  gallery: Array<{ src: string; alt: string }>;
  liveUrl?: string;
  repositoryUrl?: string;
  featured: boolean;
};
```

#### Content guideline

Lead with user or business value. Technology labels support the story but must not become the primary message.

Example:

> A communication hub connecting WhatsApp, Discord, and internal business systems so operational teams can manage conversations in one workflow.

### 6.4 Case-study pages

Each case study should include:

1. Project summary and key metadata.
2. Context and problem.
3. Dimas's role and scope of ownership.
4. Solution and key workflows.
5. Technical architecture or important decisions.
6. Challenges and how they were solved.
7. Results or measurable outcomes.
8. Screenshot gallery.
9. Links to the next project and contact section.

Confidential company information, credentials, internal URLs, customer data, and unapproved metrics must never be published.

### 6.5 Capabilities

Organize skills around deliverables instead of displaying a logo cloud.

| Capability | Supporting technologies |
| --- | --- |
| Web applications | React, Next.js, Laravel, Tailwind CSS |
| Mobile applications | Flutter, Firebase |
| Backend systems and APIs | Node.js, Fastify, Laravel, REST APIs |
| Data and persistence | PostgreSQL, MySQL, MongoDB, Firebase |
| Integrations and deployment | WhatsApp, Discord, payment gateways, Docker |

Each capability should contain one short value statement and reference a relevant project.

### 6.6 Experience

Use a compact vertical timeline or structured list.

The JokiProyek entry should emphasize:

- Part-time software development experience from July 2024 to present.
- Work across more than 20 web and mobile products.
- Product development rather than short-term client gig framing.
- Frontend, backend, integration, deployment, and production-support responsibilities.
- Collaboration with stakeholders and other engineers.

Do not duplicate the entire résumé on the page. Include a `Download résumé` action for complete details.

### 6.7 About

The About section should be concise and human:

- Introduce Dimas's background in Informatics Education.
- Explain his interest in turning real operational needs into practical technology.
- Mention his comfort working across product, interface, backend, and deployment concerns.
- Include one or two personal details only if they reinforce approachability and do not distract from professional positioning.

### 6.8 Contact

The contact section is the primary conversion endpoint.

#### Required content

- Friendly heading such as `Have a role or product in mind? Let's talk.`
- Short reassurance that recruiter and freelance enquiries are welcome.
- Email address.
- LinkedIn profile.
- GitHub profile.
- Optional WhatsApp link if Dimas wants direct client contact.
- Copy-email action with visible success feedback.

#### Contact-form option

If a form is included, fields are:

- Name
- Email
- Enquiry type: `Job opportunity` or `Project enquiry`
- Message

The form must provide server-side validation, spam protection, accessible error messages, a success state, and a fallback email address. No sensitive information should be requested.

### 6.9 Footer

Include:

- Copyright year generated at build or runtime.
- Dimas's name.
- Links to GitHub, LinkedIn, and email.
- `Back to top` control.

## 7. Visual design system

### 7.1 Design principles

- Bright and approachable.
- Professional with controlled personality.
- Generous whitespace and strong typographic hierarchy.
- Real product imagery over decorative illustrations.
- Rounded details without making every section a floating card.
- Blue communicates trust; orange adds warmth and emphasis.

### 7.2 Color tokens

| Token | Suggested value | Usage |
| --- | --- | --- |
| Background | `#FFFDF8` | Main warm light background |
| Surface | `#FFFFFF` | Cards and floating controls |
| Foreground | `#172033` | Main text |
| Muted foreground | `#667085` | Supporting text |
| Primary | `#2563EB` | CTAs, links, selected states |
| Primary dark | `#173B67` | Deep accent or hover state |
| Accent | `#F59E0B` | Small highlights and annotations |
| Border | `#E6EAF0` | Dividers and card borders |
| Success | `#22A06B` | Availability indicator and success feedback |

All final combinations must meet WCAG AA contrast requirements. If these suggested values fail in their actual context, adjust them rather than preserving the exact hex value.

### 7.3 Typography

- Primary recommendation: Plus Jakarta Sans.
- Fallback: Manrope, Inter, system sans-serif.
- Use fluid typography with `clamp()` for the hero headline.
- Keep body text comfortable at approximately 16–18 px on desktop.
- Limit body-copy line length to approximately 60–75 characters.

### 7.4 Image treatment

- Use the transparent-background portrait in the hero.
- Serve modern formats such as AVIF or WebP with a safe fallback.
- Prevent layout shift by supplying intrinsic width and height.
- Use descriptive alternative text when the image communicates identity; use empty alt text for purely decorative duplicates.
- Compress project screenshots while preserving legibility.

## 8. Motion and interaction

Motion should feel friendly and noticeable but purposeful.

Allowed interactions:

- One-time entrance transition for hero elements.
- Subtle pointer-responsive portrait depth.
- Smooth project-preview transitions.
- Orange underline or annotation response.
- Button arrow movement on hover.
- Clear copied-email and form-success feedback.

Constraints:

- No continuous looping animation.
- No animation that blocks content interaction.
- Prefer transforms and opacity for performance.
- Honor `prefers-reduced-motion` across all components.
- Mobile interactions must not depend on hover.

## 9. Functional requirements

### 9.1 Responsive behavior

Support at minimum:

- Mobile: 320–767 px.
- Tablet: 768–1023 px.
- Desktop: 1024–1439 px.
- Large desktop: 1440 px and above.

The design must remain usable at 200% browser zoom and with long translated-like strings, even though version 1 is English only.

### 9.2 Accessibility

- Meet WCAG 2.2 AA where practical.
- Provide semantic heading order and landmark elements.
- Ensure all functionality is keyboard accessible.
- Show visible focus indicators.
- Provide accessible names for icon-only controls.
- Do not use color as the only selected-state indicator.
- Provide meaningful alt text for project screenshots.
- Announce form errors and copy-success messages to assistive technology.
- Avoid automatic carousels.

### 9.3 SEO and social sharing

- Unique page titles and descriptions.
- Canonical URL.
- Open Graph and Twitter/X preview metadata.
- Person and WebSite structured data.
- Project or CreativeWork structured data on case-study pages where appropriate.
- XML sitemap and robots.txt.
- Human-readable URLs.
- Branded social-share image.

Suggested home title:

`Dimas Setio Muhammad — Full-Stack Developer`

Suggested meta description:

`Full-stack developer building reliable web applications, mobile products, backend systems, and business integrations.`

### 9.4 Analytics

Analytics must be privacy-conscious and should track only useful product events:

- `contact_cta_clicked`
- `project_selected`
- `case_study_opened`
- `resume_downloaded`
- `email_copied`
- `contact_form_submitted`
- `external_profile_opened`

Do not collect message contents or personally sensitive form values in analytics payloads.

## 10. Technical requirements

### 10.1 Recommended stack

- Next.js using the App Router.
- TypeScript with strict mode enabled.
- Tailwind CSS for styling.
- Framer Motion only where motion adds clear value; CSS transitions otherwise.
- Next.js Image for optimized raster assets.
- Static local project data for version 1.
- Vercel or an equivalent platform for hosting.

The product requirements are framework-agnostic. An alternative stack is acceptable if it meets all performance, accessibility, SEO, and maintainability requirements.

### 10.2 Suggested structure

```text
app/
  page.tsx
  work/[slug]/page.tsx
  layout.tsx
  sitemap.ts
  robots.ts
components/
  header.tsx
  hero.tsx
  project-showcase.tsx
  project-preview.tsx
  capabilities.tsx
  experience.tsx
  about.tsx
  contact.tsx
  footer.tsx
content/
  projects.ts
public/
  images/
  resume.pdf
```

### 10.3 Content management

Project content should live in typed data or MDX so Dimas can add a project without editing showcase component logic. A CMS is not required for version 1.

### 10.4 Security and privacy

- Keep all secrets server-side.
- Rate-limit form submissions.
- Validate and sanitize all form input server-side.
- Avoid publishing private repositories or internal company details.
- Add a privacy notice if analytics or a contact-form processor stores personal data.
- Use `rel="noopener noreferrer"` where applicable for external targets.

## 11. Performance requirements

Target Lighthouse scores on the production home page:

| Category | Target |
| --- | ---: |
| Performance | 90+ |
| Accessibility | 95+ |
| Best practices | 95+ |
| SEO | 95+ |

Core Web Vitals targets at the 75th percentile:

- LCP: 2.5 seconds or less.
- INP: 200 milliseconds or less.
- CLS: 0.1 or less.

Implementation considerations:

- Prioritize the hero portrait without loading all gallery images eagerly.
- Lazy-load below-the-fold screenshots.
- Use optimized font loading and minimal font weights.
- Avoid large client-side animation bundles.
- Render meaningful content before JavaScript hydration.

## 12. Content requirements before launch

The following content must be confirmed:

- Public email address.
- LinkedIn URL.
- GitHub URL.
- WhatsApp availability and URL, if included.
- Current résumé PDF.
- Availability statement.
- Location and remote-work preference.
- Final descriptions for Aether, SirkelBus, AiLearn, and Mosq.
- Approved project screenshots.
- Public demo and repository links.
- Metrics that can be published without confidentiality concerns.

Unknown information must not be invented. Hide optional actions until their content is available.

## 13. Success metrics

Initial product success should be evaluated using:

- Contact CTA click-through rate.
- Qualified contact enquiries received.
- Case-study open rate.
- Average engagement with the project showcase.
- Résumé downloads.
- Percentage of visitors reaching the contact section.
- Mobile bounce rate and Core Web Vitals.

Because portfolio traffic may initially be low, qualitative recruiter and client feedback is also an important success signal.

## 14. Delivery phases

### Phase 1: Foundation and hero

- Project setup and design tokens.
- Responsive header and hero.
- Optimized portrait asset.
- Core metadata and analytics foundation.

### Phase 2: Work and credibility

- Interactive project showcase.
- Initial project data and screenshots.
- Capabilities and experience sections.
- Résumé download.

### Phase 3: Conversion and case studies

- About and contact sections.
- Contact form or direct-contact workflow.
- Dedicated case-study pages.
- SEO structured data and social image.

### Phase 4: Quality assurance and launch

- Cross-browser and responsive testing.
- Accessibility audit.
- Performance optimization.
- Copy review and confidentiality check.
- Production deployment and analytics verification.

## 15. Definition of done

Version 1 is complete when:

- All required home-page sections are implemented and responsive from 320 px upward.
- Hero content and portrait match the approved bright blue-and-orange direction.
- At least three projects are available in the interactive showcase.
- Every published project accurately distinguishes Dimas's role and contribution.
- Contact actions work and provide clear feedback.
- Resume download works.
- Keyboard navigation, focus states, reduced motion, and screen-reader labels are verified.
- No broken links, placeholder copy, or missing images remain.
- Production metadata, sitemap, robots.txt, and social preview are configured.
- Lighthouse and Core Web Vitals targets are met or documented with an accepted exception.
- Analytics events are verified without capturing sensitive data.
- Project owner approves copy, imagery, and all publicly disclosed details.

## 16. Open decisions

These decisions can be finalized during implementation without blocking project setup:

1. Final portfolio domain.
2. Direct email link versus server-backed contact form.
3. Whether WhatsApp appears as a public contact method.
4. Exact résumé filename and public URL.
5. Which project receives the default selected state after Aether.
6. Whether version 1 launches with dedicated case-study routes or expands them in place.
7. Analytics provider.

