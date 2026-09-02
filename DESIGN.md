# Design Specification: Dimas Portfolio Website

**Version:** 1.0  
**Status:** Ready for design and implementation  
**Companion document:** `PRD.md`  
**Last updated:** 21 August 2026

## 1. Design intent

The portfolio should present Dimas as a versatile full-stack developer who can turn a practical problem into a complete, production-ready digital product. The design must feel bright, credible, modern, and personable.

The visual language should combine:

- The clarity and confidence expected from a professional software portfolio.
- The friendliness appropriate for direct client conversations.
- The interaction quality of a polished product interface.
- Enough technical character to feel authentic without relying on dark-mode or cyberpunk clichés.

The final impression should be:

> Capable, practical, approachable, and comfortable owning a product from interface to infrastructure.

## 2. Design principles

### 2.1 Show products before tools

Lead with recognizable product interfaces, problems solved, and outcomes. Technology names support the story but should never dominate the page.

### 2.2 Use warmth with restraint

The site should feel personal through photography, conversational copy, organic shapes, and orange micro-accents. It should not become playful enough to resemble a children's product or informal personal blog.

### 2.3 Create hierarchy through scale and whitespace

Use fewer, stronger elements. Prefer one dominant message per viewport over multiple cards competing for attention.

### 2.4 Make interaction explain content

Motion should reveal selection, direction, or state. Avoid animation that exists only as decoration.

### 2.5 Design for evidence

Every major visual block should strengthen one of these ideas:

- Dimas builds across web, mobile, and backend.
- Dimas has delivered real systems.
- Dimas understands both technical and business needs.
- Dimas is available and easy to contact.

## 3. Visual personality

Use these adjectives to evaluate design decisions:

| Desired | Avoid |
| --- | --- |
| Bright | Sterile |
| Approachable | Childish |
| Confident | Aggressive |
| Modern | Trend-dependent |
| Technical | Cyberpunk |
| Product-focused | Résumé-like |
| Polished | Over-designed |

When uncertain, choose the simpler and clearer option.

## 4. Color system

### 4.1 Core palette

| Token | Value | Primary use |
| --- | --- | --- |
| `canvas` | `#FFFDF8` | Main warm page background |
| `surface` | `#FFFFFF` | Cards, menus, and raised controls |
| `surface-soft` | `#F7FAFF` | Alternate section background |
| `text-primary` | `#172033` | Headings and primary copy |
| `text-secondary` | `#667085` | Supporting copy and metadata |
| `text-tertiary` | `#8A94A6` | Nonessential labels only |
| `blue-500` | `#2563EB` | Primary CTA and active elements |
| `blue-600` | `#1D4ED8` | Primary hover state |
| `blue-100` | `#DBEAFE` | Soft blue surfaces and shapes |
| `blue-50` | `#EFF6FF` | Subtle selected backgrounds |
| `orange-500` | `#F59E0B` | Small highlights and annotations |
| `orange-100` | `#FEF3C7` | Soft accent surfaces |
| `green-500` | `#22A06B` | Availability and success states |
| `border` | `#E6EAF0` | Default borders and dividers |
| `border-strong` | `#CBD5E1` | Inputs and emphasized boundaries |

### 4.2 Color ratio

Aim for the following approximate visual distribution:

- 70% warm white and neutral surfaces.
- 20% text, screenshots, and structural neutrals.
- 8% blue accents.
- 2% orange and green micro-accents.

Orange should not be used as a competing primary color. Reserve it for underlines, icons, small shapes, hover details, and selected annotations.

### 4.3 Color usage rules

- Primary buttons use `blue-500` with white text.
- Standard links use `blue-500` and darken on hover.
- Orange is never used for long body text.
- Success green is reserved for genuine status or completion feedback.
- Large section backgrounds use only `canvas`, `surface`, or `surface-soft`.
- Project imagery may introduce additional colors, but its frame and surrounding UI remain neutral.
- All text and interactive states must pass WCAG AA contrast in the implemented context.

## 5. Typography

### 5.1 Font family

Use **Plus Jakarta Sans** as the primary typeface.

Fallback stack:

```css
font-family: "Plus Jakarta Sans", "Manrope", "Inter", system-ui, sans-serif;
```

Use no more than two font weights in most sections:

- `400` for body copy.
- `500` or `600` for emphasis and headings.

Avoid very heavy `800` or `900` weights unless the rendered font requires more optical strength in the hero.

### 5.2 Type scale

| Style | Desktop | Mobile | Weight | Suggested line height |
| --- | ---: | ---: | ---: | ---: |
| Display hero | 64–72 px | 40–48 px | 600 | 1.05–1.1 |
| Section heading | 42–48 px | 32–36 px | 600 | 1.15 |
| Subsection heading | 28–32 px | 24–28 px | 600 | 1.2 |
| Card title | 20–24 px | 19–22 px | 600 | 1.25 |
| Large body | 18–20 px | 17–18 px | 400 | 1.65 |
| Body | 16–18 px | 16 px | 400 | 1.6 |
| Small/meta | 13–14 px | 13–14 px | 500 | 1.45 |

Implement large type with `clamp()` rather than abrupt breakpoint changes.

Suggested hero sizing:

```css
font-size: clamp(2.5rem, 5.5vw, 4.5rem);
```

### 5.3 Typography rules

- Hero headline should occupy no more than four lines at common desktop widths.
- Body copy should have a maximum width of approximately 62 characters.
- Use sentence case for headings and buttons.
- Avoid all-caps section headings; use small eyebrow labels sparingly.
- Highlight only one phrase in the hero headline using blue.
- Use the orange underline as a supporting gesture, not a second highlighted phrase.
- Do not use monospaced type for normal copy. It may appear only for brief technical labels or code snippets inside case studies.

## 6. Spacing and layout system

### 6.1 Base spacing scale

Use a 4 px base grid.

```text
4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 144
```

Prefer these semantic choices:

- 8–12 px: icon and label gaps.
- 16 px: compact component padding.
- 20–24 px: normal card padding.
- 32–48 px: spacing between related content groups.
- 80–120 px: desktop section padding.
- 64–80 px: mobile section padding.

### 6.2 Container

- Maximum content width: `1200px`.
- Recommended primary width: `1120px`.
- Desktop side padding: `32–48px`.
- Tablet side padding: `24–32px`.
- Mobile side padding: `20px`, never below `16px`.
- Full-width background treatments may extend beyond the container, but primary copy and controls remain aligned to the same grid.

### 6.3 Grid

Use a 12-column desktop grid, 8-column tablet grid, and 4-column mobile grid.

Suggested desktop hero split:

- Copy: 7 columns.
- Visual: 5 columns.
- Gap: 56–80 px.

Suggested project showcase split:

- Selector and description: 4 columns.
- Product visual: 8 columns.

Reverse the visual balance only when it improves a later section's rhythm. Do not alternate every section mechanically.

### 6.4 Vertical rhythm

Each section should follow:

1. Eyebrow or context label, optional.
2. Section title.
3. Short supporting paragraph.
4. Main visual or content block.

Maintain at least 32 px between section introduction and its primary content on mobile and 48–64 px on desktop.

## 7. Shape, border, and depth

### 7.1 Radius scale

| Token | Value | Usage |
| --- | ---: | --- |
| `radius-sm` | 8 px | Tags and compact controls |
| `radius-md` | 12 px | Buttons and inputs |
| `radius-lg` | 20 px | Cards and screenshot frames |
| `radius-xl` | 28–32 px | Large visual panels |
| `radius-pill` | 999 px | Status badges only |

Do not apply rounded cards to every section. Large text sections should sit directly on the page canvas.

### 7.2 Borders

- Default: 1 px solid `border`.
- Active or focused: 2 px blue ring, offset by 2 px.
- Screenshot frames may use a 1 px neutral border plus subtle shadow.
- Avoid thick decorative outlines around entire sections.

### 7.3 Shadows

Use shadows sparingly and with low contrast.

```css
--shadow-sm: 0 4px 16px rgb(23 32 51 / 0.06);
--shadow-md: 0 16px 44px rgb(23 32 51 / 0.10);
--shadow-photo: 0 28px 70px rgb(23 32 51 / 0.14);
```

Use `shadow-photo` only for the hero portrait or similarly dominant visual. Avoid stacking a border, strong shadow, and filled background on the same small component.

## 8. Iconography and illustration

- Use one outline icon family, such as Lucide.
- Default icon size: 18–20 px.
- Use 24 px icons for capability headings.
- Keep stroke width consistent.
- Icons support visible text; do not rely on unfamiliar icon-only controls.
- Use blue or orange icon surfaces for proof points, but keep the icon itself high contrast.
- Organic background shapes should be simple CSS or SVG forms with low-opacity fills.
- Avoid stock technology illustrations, floating laptop renders, and generic code screenshots in the hero.

## 9. Photography and product imagery

### 9.1 Hero portrait

Use the extracted transparent portrait of Dimas.

Required treatment:

- Place Dimas on the right side of the desktop hero.
- Preserve his natural face, smile, crossed-arm pose, clothing, and body proportions.
- Crop between mid-torso and lower torso depending on viewport height.
- Keep the full head and shoulders visible.
- Place a low-contrast organic `blue-100` or warm-neutral shape behind him.
- Add no artificial rim light or strong color overlay.
- Use a soft shadow only when separation from the background is needed.
- Place the availability badge near the lower-right edge without covering the face or hands.

On mobile:

- Center the portrait below the hero actions.
- Reduce the decorative background shape.
- Place the availability badge inside the visual bounds.
- Avoid a portrait height that pushes the project section excessively far down.

### 9.2 Project screenshots

- Use actual product screenshots wherever confidentiality allows.
- Create a consistent image canvas for each project preview.
- Desktop products use a restrained browser frame with a simple top bar.
- Mobile products may show one primary phone frame and one partially offset supporting screen.
- Avoid realistic device mockups with large bezels or brand-specific hardware.
- Do not skew screenshots so far that content becomes unreadable.
- Provide gallery zoom or full-screen viewing only if screenshots contain useful detail.
- Never place sensitive customer names, phone numbers, credentials, or internal URLs in screenshots.

### 9.3 Image aspect ratios

| Asset | Preferred ratio |
| --- | --- |
| Hero composition | Flexible, approximately 4:5 portrait area |
| Project cover | 16:10 |
| Browser screenshot | 16:10 or native product ratio |
| Mobile screenshot | 9:19.5 or native device ratio |
| Social preview | 1.91:1 |

## 10. Component specifications

### 10.1 Header

**Desktop**

- Height: 72–80 px.
- Logo aligned left.
- Navigation and `Let's talk` aligned right.
- Gap between links: 28–36 px.
- Header initially transparent.
- After scroll, introduce a subtle translucent warm-white surface, bottom border, and backdrop blur.

**Mobile**

- Height: 64–72 px.
- Logo left, menu button right.
- Menu opens a compact surface below the header or as a right-side sheet.
- First focus moves to the first menu item; closing restores focus to the trigger.

**Logo**

- Text: `Dimas.`
- Weight: 600.
- Use dark foreground text and a blue dot.
- Do not add a complex standalone symbol in version 1.

### 10.2 Buttons

#### Primary

- Blue fill, white text.
- 12 px radius.
- Minimum height: 48 px.
- Horizontal padding: 22–28 px.
- Arrow icon shifts 3–4 px on hover.
- Hover darkens the fill without changing size.

#### Secondary

- Transparent or white surface.
- Blue text and 1 px blue border.
- Same height and radius as primary.
- Hover uses `blue-50`.

#### Text link

- Foreground or blue text with arrow.
- Underline appears on hover or focus.
- Never use a disabled-looking style for an available action.

All buttons require visible keyboard focus and at least a 44 × 44 px pointer target.

### 10.3 Badges and tags

- Availability badge: white surface, green dot, foreground text, pill shape.
- Technology tags: neutral or blue-soft background, short text, 8 px radius.
- Do not use more than six visible technology tags in one project preview; place the remainder in the case study.
- Do not use colored tags to represent technologies individually.

### 10.4 Cards

Use cards only for bounded, repeatable objects such as capability summaries, proof points, or project selectors.

Default card:

- White surface.
- 1 px neutral border.
- 20–24 px radius.
- 24–32 px padding.
- No shadow until hover unless elevation is necessary.

Hover behavior:

- Translate upward by no more than 4 px.
- Slightly strengthen border or shadow.
- Do not rotate content cards.

### 10.5 Form inputs

- Minimum height: 48 px.
- 12 px radius.
- White surface with `border-strong` boundary.
- Label displayed above the field.
- Placeholder must not replace the label.
- Focus ring uses blue.
- Error text uses a high-contrast red and appears below the field.
- Success feedback appears near the submit action and is announced accessibly.

## 11. Section-by-section design guidance

### 11.1 Hero

**Desktop composition**

- Minimum vertical space: approximately 720 px including header.
- Text group vertically centered in the available area.
- Eyebrow in blue with a waving-hand glyph.
- Headline uses dark foreground with `complete` or `interface` highlighted blue.
- One orange hand-drawn-style underline or short stroke appears below the highlighted word.
- Supporting paragraph remains neutral and no wider than 620 px.
- CTAs sit in one row with 12–16 px gap.
- Proof points appear below as two compact items, not a dense statistic dashboard.
- Portrait sits inside or over an asymmetrical organic shape.
- Small dot pattern or spark may appear once near the portrait.

**Mobile composition**

- Eyebrow, headline, paragraph, actions, proof points, then portrait.
- Buttons may become full-width below 390 px.
- Proof points wrap or stack naturally.
- Headline should use two highlighted lines at most.
- Decorative shapes must not create horizontal overflow.

### 11.2 Featured work introduction

- Use a small `Selected work` eyebrow.
- Heading example: `Products built for real workflows.`
- Supporting copy should explain that the selection spans communication, transport, learning, and community products.
- Position the introduction above the interactive showcase rather than beside it at tablet and mobile widths.

### 11.3 Interactive project showcase

**Desktop**

- Build one dominant showcase surface.
- Left column contains project selector, short value statement, role, and outcomes.
- Right column contains the main product preview.
- Selected project is indicated by label, blue accent, and position—not color alone.
- Keep preview ratio stable when switching projects to prevent layout shift.

**Project selector**

- Each item contains project name and product category.
- Do not show full descriptions in every inactive item.
- Hover reveals a subtle blue-soft background.
- Selection transition: 200–300 ms.

**Preview transition**

- Fade and translate content by 8–16 px.
- Do not animate device frames with large rotations.
- Update text and image as one coordinated state.
- Preserve focus and announce selection changes for assistive technology where needed.

**Mobile**

- Use horizontally scrollable tabs with visible overflow hint, or a native select if space is limited.
- Place preview first after selection, followed by summary and actions.
- Do not require horizontal scrolling to read project content.

### 11.4 Capabilities

- Use a 2 × 2 desktop grid and single-column mobile stack.
- Each capability contains one icon, title, 1–2 sentence explanation, and a small supporting technology line.
- Connect each capability to a project using a text link such as `See it in Aether`.
- Keep cards visually quieter than the project showcase.

### 11.5 Experience

- Use a clean vertical timeline with dates aligned consistently.
- A thin neutral rule provides structure.
- Blue marks the active or current position.
- Each role shows title, company, period, and up to four outcome-focused bullets.
- Avoid decorative logos unless high-quality official assets are available.
- Place the résumé download action near the section heading or after the timeline.

### 11.6 About

- Use a two-column layout on desktop.
- One column contains concise personal copy.
- The supporting column may contain a small working-style list or candid professional photo.
- Avoid repeating the hero portrait in the same treatment.
- Use one orange highlight to make the section warmer.
- Do not include generic percentage skill bars.

### 11.7 Contact

- Give the final contact section strong visual presence using `blue-500` or a deep-blue surface.
- Text must remain comfortably readable with high contrast.
- Use orange only for a small visual accent.
- Provide direct email, LinkedIn, and GitHub options even if a form exists.
- Separate recruiter and client intent through copy or enquiry-type choice, not through two competing contact sections.
- Keep the form no wider than approximately 640 px.

### 11.8 Footer

- Use the same dark-blue or warm-light family as the contact section depending on whether they are visually connected.
- Keep it compact.
- Maintain clear separation between legal/meta text and external links.
- `Back to top` includes both text and an upward arrow.

## 12. Motion system

### 12.1 Timing

| Motion | Duration | Easing |
| --- | ---: | --- |
| Hover feedback | 120–180 ms | ease-out |
| Small state transition | 180–240 ms | ease-out |
| Project preview change | 240–320 ms | cubic-bezier(0.22, 1, 0.36, 1) |
| Section entrance | 400–600 ms | cubic-bezier(0.22, 1, 0.36, 1) |

### 12.2 Entrance motion

- Hero eyebrow, headline, body, and CTAs may enter with a short stagger.
- Total stagger should complete within approximately 700 ms.
- Portrait may rise 16 px and settle once.
- Do not hide critical content for long animation delays.

### 12.3 Interactive motion

- Portrait tilt maximum: approximately 4 degrees.
- Card lift maximum: 4 px.
- Button arrow shift maximum: 4 px.
- Underline expands from left to right once or on hover.
- Navigation indicator may slide between active anchors.

### 12.4 Reduced motion

When `prefers-reduced-motion: reduce` is active:

- Remove stagger delays.
- Replace translations and tilts with immediate state changes.
- Keep essential focus, selection, and success feedback.
- Disable smooth scrolling if it causes motion discomfort.

## 13. Responsive design

### 13.1 Breakpoint guidance

```text
sm: 640 px
md: 768 px
lg: 1024 px
xl: 1280 px
2xl: 1536 px
```

Breakpoints should respond to content pressure rather than device names. Add a local component breakpoint if a layout fails before the global breakpoint.

### 13.2 Desktop, 1280 px and above

- Use full two-column hero.
- Display complete navigation.
- Keep the project selector beside the preview.
- Cap content at 1120–1200 px.

### 13.3 Tablet, 768–1279 px

- Maintain two-column hero only if the portrait and headline retain sufficient width.
- Reduce hero gap and decorative shapes.
- Project showcase may stack selector above preview.
- Capabilities remain two columns.

### 13.4 Mobile, below 768 px

- Stack all primary two-column layouts.
- Keep important actions close to related content.
- Use native vertical page scrolling; avoid nested scroll containers.
- Maintain at least 16 px page padding.
- Do not reduce body text below 16 px.
- Ensure controls remain at least 44 px high.

### 13.5 Small mobile, 320–389 px

- Make hero CTAs full width.
- Reduce card padding to 20 px.
- Wrap proof points vertically.
- Avoid long unbroken technology labels.
- Test the logo and menu with 200% zoom.

## 14. Accessibility design guidance

- Design visible focus styles at the same time as hover states.
- Keep focus order consistent with visual order.
- Do not communicate selected projects only through blue color; include a marker and `aria-selected` state.
- Support keyboard arrow navigation for tab-style project selectors.
- Use descriptive link labels such as `View Aether case study`.
- Avoid text embedded inside screenshot images when that text is required to understand the portfolio.
- Provide captions for screenshots where the interface alone is ambiguous.
- Ensure decorative shapes are ignored by assistive technology.
- Maintain readable contrast over colored contact-section backgrounds.
- Validate the complete page at 200% zoom and 320 CSS pixels wide.

## 15. Content design rules

- Start each project with the problem and product value.
- Write contribution statements with a strong verb: `Designed`, `Built`, `Integrated`, `Deployed`, or `Improved`.
- Avoid claims such as `expert`, `world-class`, or `best` without evidence.
- Keep card descriptions to approximately 160 characters.
- Keep hero supporting copy to 2–3 lines on desktop when possible.
- Use consistent labels: `Role`, `Contribution`, `Outcome`, and `Stack`.
- If a project metric is unavailable, describe a concrete delivered capability instead of inventing a number.
- Never disclose confidential project information.

## 16. Interaction and state inventory

Every implemented component must include applicable states:

| Component | Required states |
| --- | --- |
| Navigation link | Default, hover, focus, active |
| Primary button | Default, hover, focus, pressed, loading, disabled |
| Secondary button | Default, hover, focus, pressed, disabled |
| Project selector | Default, hover, focus, selected |
| Project image | Loading, loaded, unavailable fallback |
| Form input | Default, hover, focus, filled, error, disabled |
| Form submission | Idle, submitting, success, error |
| Copy email | Default, copied confirmation, failure fallback |
| External link | Default, hover, focus |

Do not ship components that visibly jump between states because borders or font weights change their dimensions.

## 17. Empty, loading, and error states

- Project data should render statically; a loading skeleton is unnecessary unless data becomes remote.
- If a project screenshot is unavailable, use a branded neutral placeholder containing the project name and product type.
- If a live demo or repository is private, omit the action entirely.
- Contact-form errors should preserve entered data and offer the direct email fallback.
- If JavaScript fails, core content, navigation anchors, contact links, and project summaries must remain usable.

## 18. SEO and social visual guidance

### 18.1 Favicon

- Use a simple blue circle or rounded square containing a white `D`.
- Provide SVG plus common PNG sizes.
- Ensure it remains recognizable at 16 × 16 px.

### 18.2 Social preview

- Canvas: 1200 × 630 px.
- Warm off-white background.
- Left side: Dimas's name, full-stack positioning, and blue accent.
- Right side: extracted portrait over organic blue shape.
- Keep all essential content inside safe margins of at least 64 px.
- Do not reproduce the entire hero paragraph.

### 18.3 Browser theme

- Use warm off-white as the light browser theme color.
- If dark theme is added later, treat it as a separate tested design system rather than automatically inverting colors.

## 19. Design QA checklist

### Visual consistency

- [ ] All sections use the same container alignment.
- [ ] Blue remains the dominant action color.
- [ ] Orange appears only as a supporting accent.
- [ ] Border radii follow the defined scale.
- [ ] Shadows are subtle and limited to elevated elements.
- [ ] Typography follows the documented hierarchy.
- [ ] Product imagery remains the strongest evidence after the hero.

### Responsive quality

- [ ] Layout is verified at 320, 375, 768, 1024, 1280, and 1440 px.
- [ ] No decorative element creates horizontal overflow.
- [ ] Headline wrapping is intentional at each breakpoint.
- [ ] Project controls remain usable without hover.
- [ ] Contact actions remain easy to reach on mobile.

### Accessibility

- [ ] Text contrast passes WCAG AA.
- [ ] All interactive components have visible focus states.
- [ ] Keyboard order matches visual order.
- [ ] Reduced-motion mode is verified.
- [ ] Images have appropriate alternative text.
- [ ] Form error and success states are accessible.

### Content and assets

- [ ] Portrait uses a transparent, optimized asset.
- [ ] Screenshots contain no confidential information.
- [ ] Every project clearly states Dimas's individual contribution.
- [ ] No dead, placeholder, or disabled-looking links remain.
- [ ] Social preview and favicon are present.

## 20. Handoff requirements

The final design handoff should provide:

- Desktop and mobile page designs.
- Component states for buttons, navigation, project selector, and forms.
- Color and type styles represented as reusable tokens.
- Hero portrait and optimized image exports.
- Project screenshot assets at consistent dimensions.
- Spacing, maximum width, and responsive behavior annotations.
- Motion notes with timing and reduced-motion alternatives.
- Accessibility notes for selection, focus, and form feedback.

Implementation should use semantic design tokens rather than scattering raw hex values and arbitrary dimensions throughout components.

## 21. Recommended design order

1. Establish typography, color tokens, container, and spacing scale.
2. Finalize the desktop and mobile hero.
3. Design the interactive project showcase and all of its states.
4. Design capabilities, experience, and case-study templates.
5. Design the contact conversion section and form states.
6. Complete responsive adaptations.
7. Add purposeful motion specifications.
8. Run accessibility and consistency review.
9. Create social preview, favicon, and final asset exports.

This order protects the strongest product decisions—the positioning, hero hierarchy, and work evidence—before decorative details are introduced.

