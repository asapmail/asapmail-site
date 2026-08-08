# Asapmail Design System

Status: implemented home-page direction.

## Design read

Asapmail is a senior practitioner-led retention and lifecycle studio. The page must make a technical operating model legible to SaaS, FinTech, Web3, and e-commerce teams, while remaining credible to partner-program reviewers. It avoids the visual language of a large performance-marketing agency: no borrowed logos, fake dashboards, inflated metrics, testimonials, partner badges, or anonymous “results.”

The core subject is signal routing: product behavior enters as events, becomes segments, is orchestrated into journeys, delivered as messages, and returns as retention learning. The visual identity treats this chain as both information architecture and interface.

## Direction: signal workshop

The design combines an editorial studio with an operational control board. Warm paper, dark green-black ink, exposed rules, numbered modules, and mono labels suggest rigor without looking like generic enterprise software. A vivid vermilion signal color marks movement and decisions; acid lime is reserved for connected-system outcomes.

The deliberate aesthetic risk is the oversized lifecycle signal board in the hero. Rather than using a decorative product mockup, it makes the agency’s mental model the dominant visual artifact. The rest of the page stays disciplined and typographic so the board remains memorable.

## Tokens

### Color

- `paper` — `#F2F0E7`: primary warm background.
- `paper-bright` — `#FAF9F4`: lifted editorial surfaces.
- `ink` — `#17221D`: primary text and dark sections.
- `ink-soft` — `#405048`: secondary text on light surfaces.
- `fog` — `#CDD5CD`: structural offset and quiet borders.
- `signal` — `#FF5F3D`: lifecycle movement and primary CTA field.
- `signal-dark` — `#C73920`: accessible signal text and focus ring on light surfaces.
- `lime` — `#C8F36B`: connected state and outcome surface.

Text/background combinations used in the page meet WCAG AA for normal text. Bright signal and lime are not used for small body text on white.

### Typography

No runtime font request is made.

- Display: Georgia / Times fallback. Human, editorial, and intentionally distinct from SaaS grotesks.
- Body: Arial / Helvetica fallback. Neutral and highly legible.
- Utility: SFMono-Regular / Consolas / Liberation Mono. Used for system labels, numbering, and disclosures.
- Display scale: fluid `clamp()` values from 2.5rem to 8rem with tight leading (0.9–0.98).
- Body scale: 0.76rem for compact operational copy through 1.2rem for introductions.

### Grid

- Desktop shell: 3.5vw side gutters.
- Primary editorial split: `0.55fr / 1.35fr`.
- Hero split: `0.9fr / 1.1fr`, with a minimum 31rem signal board.
- Cards: 3 columns for services, 2 for experience, 5 stages for lifecycle.
- Tablet collapses the hero and lifecycle rail; mobile uses one column throughout.

### Spacing

A practical 4px base is applied through a restrained set of repeated values: 0.5rem, 0.75rem, 1rem, 1.5rem, 2rem, 3rem, 5rem, and fluid 5–9vw section space. Dense system artifacts use tighter spacing than narrative sections.

### Radius, borders, and elevation

- Radius: none for primary surfaces and controls; circles only indicate nodes, status, or numbering.
- Borders: 1px structural rules, usually 18% ink on light and 22% white on dark.
- Elevation: no soft shadows. The hero board uses one solid `fog` offset to read like a physical systems sheet.

## Motion

- Duration: 180ms.
- Easing: CSS `ease` for the single arrow translation on actionable links.
- No scroll-triggered motion, looping animation, parallax, or motion-only information.
- `prefers-reduced-motion: reduce` disables smooth scrolling and reduces all transition/animation durations.

## Signature element

The lifecycle signal board diagrams:

`events → segments → journeys → messages → retention`

It uses real taxonomy examples, channel roles, route nodes, and an outcome bar. It is not an analytics screenshot and makes no metric claim. The same sequence reappears later as an accessible ordered list, turning the signature into the page’s explanatory backbone rather than decoration.

## Component states

- Links: underline or directional translation on hover.
- Buttons: dark-to-signal or paper-to-lime surface change on hover.
- Keyboard focus: 3px `signal-dark` outline with 4px offset.
- Skip link: hidden off-canvas until focused.
- Disabled/loading/error/success states are not present because the MVP has no active form or asynchronous controls.

## Responsive rules

- Above 1050px: full three-part navigation, split hero, multi-column cards, horizontal lifecycle rail.
- 701–1050px: primary navigation is removed in favor of logo plus audit anchor; hero and lifecycle rail stack; cards reduce to two columns.
- At 700px and below: 1rem gutters, single-column cards and process, all signal-board stages stack, CTA options stack, and footer becomes two columns.
- Content order and semantics remain identical at every breakpoint.
- No horizontal scrolling is required at a 320px viewport.

## Accessibility and content rationale

The page uses a skip link, one `h1`, sequential section headings, semantic `header`, `nav`, `main`, `section`, `article`, ordered/unordered lists, and `footer`. Decorative SVGs and diagram internals are hidden where surrounding text already provides the accessible meaning. All navigation works without JavaScript. Compatibility and experience disclosures appear next to the relevant claims rather than in legal fine print.

The review-phase contact block intentionally does not invent a corporate email or submit to an unverified endpoint. It states that the contact channel is shared directly during review. A validated form, privacy policy route, legal entity details, and public corporate contact remain launch prerequisites.
