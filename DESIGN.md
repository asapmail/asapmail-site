# Asapmail Design System

Status: implemented design variant for the agency home page.

## Design read

A senior-led B2B agency page for technical buyers and partner-program reviewers. The visual language is systems-editorial rather than generic agency polish: precise, dark, high-contrast and operational. The composition treats the lifecycle as a routed signal moving through one accountable system.

Design dials:

- Design variance: 8/10. Asymmetric hero, irregular service grid and varied section structures.
- Motion intensity: 4/10. Restrained load-in and signal-path motion only.
- Visual density: 4/10. Editorial whitespace with enough technical detail for due diligence.

## Design rationale

The audience needs evidence of systems thinking before decoration. A charcoal field suggests an operating environment; acid lime identifies the single customer signal moving from event to retention. Sharp geometry avoids the soft SaaS-card aesthetic and supports the idea of implementation discipline. Claims are deliberately conservative: platform names are framed as familiarity and compatibility, while unpublished case proof is described honestly.

## Tokens

### Color

| Role | Token | Value | Use |
| --- | --- | --- | --- |
| Canvas | `--ink` | `#10120f` | Global background |
| Raised surface | `--ink-soft` | `#181b17` | Hero media and grouped content |
| Primary text | `--paper` | `#eef0e9` | Headings and key copy |
| Secondary text | `--paper-muted` | `#b7bcb1` | Supporting copy |
| Structure | `--line` | `#3c4139` | Borders and routing lines |
| Signal | `--signal` | `#c7f43d` | One accent across the page |
| Signal text | `--signal-ink` | `#182000` | Text on the signal color |
| Focus | `--focus` | `#e6ff91` | Keyboard focus ring |

The page is theme-locked to dark. The lime CTA combinations and all body text are designed for WCAG AA contrast. No section introduces a second accent.

### Typography

- Display and body: local system stack, `Helvetica Neue`, `Nimbus Sans L`, Arial, sans-serif.
- Utility and technical annotation: `SFMono-Regular`, Consolas, `Liberation Mono`, monospace.
- No runtime font request is made.
- Display type uses tight tracking and moderate weight instead of extreme size.
- Hero scale: `clamp(3.2rem, 6.2vw, 6.7rem)` desktop and `clamp(3.1rem, 15vw, 4.6rem)` mobile.
- Body copy is generally 13-19px with 1.5-1.65 line height.

### Grid

- Maximum composition width: 1600px.
- Global gutter: `clamp(1rem, 4vw, 4.5rem)`.
- Desktop hero: asymmetric 1.04 / 0.96 split.
- Services: 1.2 / 0.8 / 1 grid with intentional vertical offsets.
- Signal path: five equal stages, changing to two columns on tablet and a linear stack on mobile.
- Process: sticky editorial statement plus sequential build steps.
- Platform groups: 1.25 / 1 / 0.75 columns.

Each major section uses a distinct layout family to avoid template repetition.

### Spacing

- Section padding: `clamp(5rem, 10vw, 9rem)`.
- Mobile section padding: 4.5rem.
- Header height: 72px desktop, 64px mobile.
- Component spacing uses a 4px base rhythm, with common steps at 12, 16, 24, 32, 48 and 64px.

### Shape and material

- Cards, images, controls and badges use square corners.
- Borders are 1px and communicate grouping or sequence.
- No generic outer drop shadows are used.
- The only background texture is a fixed, low-opacity grain layer to avoid scroll repaint cost.

### Motion

- Hero copy enters in a short sequence to establish reading order.
- Hero media follows with a horizontal reveal.
- The lifecycle connector moves to communicate signal direction.
- Hover and active transforms provide button feedback.
- Motion affects only opacity and transform, except the lightweight background-position change on the 2px signal line.
- `prefers-reduced-motion: reduce` disables animation, smooth scrolling and long transitions.

## Signature element

The signal path is the design's organizing device. It appears first as a generated tactile routing-board photograph, then becomes a semantic ordered sequence:

`Events -> Segments -> Journeys -> Messages -> Retention`

The visual was generated specifically for this variant and stored locally as an optimized WebP at `public/lifecycle-routing-board.webp`. It contains no text, people, logos, partner marks or remote runtime dependencies.

## Components and states

- Primary CTA: lime field with dark text; hover brightens and lifts; active presses down; focus receives a 3px high-contrast ring.
- Text links: visible underline, lime hover and high-contrast focus.
- Platform labels: structural bordered labels, not badges or certification marks.
- Skip link: hidden off-canvas until focused, then fixed above the page.
- Contact state: an explicit pending-domain status replaces a fake or non-functional form submission.

No loading, error or success state is required because the page is statically rendered and has no network-backed form or interactive data.

## Responsive rules

### Desktop, 1024px and above

- Full single-line navigation and CTA.
- Hero fits the initial dynamic viewport under the 72px header.
- Five-stage lifecycle path runs horizontally.
- Process statement remains sticky while the sequence scrolls.

### Tablet, 768-1023px

- Navigation links collapse while the audit CTA remains visible.
- Service grid becomes two columns.
- Lifecycle stages become a two-column composition with a full-width final stage.
- Platform and process layouts retain their desktop structure where space permits.

### Mobile, below 768px

- Every multi-column section becomes one column.
- Hero copy precedes the 26rem media panel.
- Lifecycle stages become a compact vertical ordered list.
- Sticky behavior is removed.
- Platform groups and service tiles become full width.
- Horizontal experience capabilities remain intentionally scrollable without causing page overflow.

## Accessibility and content integrity

- Semantic header, navigation, main, sections, ordered lists, figure and footer.
- One H1 and a logical heading hierarchy.
- Keyboard-visible skip link and focus states.
- Generated image has concise descriptive alt text.
- Decorative arrow glyphs and signal numbers are hidden where appropriate.
- Partner-status disclaimers appear near platform references.
- No customer names, metrics, testimonials, logos, awards or partner badges are invented.
- Contact and privacy endpoints are marked pending rather than fabricated.
