# Misobus Page Topology

## Sections
1. Header navigation overlay
   - Flow position: absolute visual overlay via zero-height header.
   - Interaction model: click-driven mobile drawer, hover nav links.
2. Hero
   - Flow position: first full-height band, white background.
   - Interaction model: static.
   - Assets: logo, `card1.png`, `card2a.png`, `card3.png`.
3. Service grid
   - Flow position: below hero.
   - Interaction model: static.
   - Assets: six illustrated service PNGs.
4. Bus image
   - Flow position: full-width visual band.
   - Interaction model: scroll-driven AOS-style fade/scale.
   - Assets: desktop and mobile bus photos.
5. Inquiry CTA/process
   - Flow position: centered CTA copy, buttons, four-step process.
   - Interaction model: button hover only.
6. Notice/FAQ
   - Flow position: two-column content lists.
   - Interaction model: static links.
7. Footer
   - Flow position: bottom band with footer links, socials, company text.
   - Interaction model: social hover crossfade.
8. Floating inquiry
   - Overlay fixed bottom-right.
   - Interaction model: click-driven vertical menu.

## Page Metrics
- Desktop full-page height: `4024px`.
- Desktop container: `width: calc(100% - 100px)`, max visible `1340px`.
- Mobile full-page height: approximately `3357px`.
- Primary z-index layers: side drawer and floating inquiry above page content.
