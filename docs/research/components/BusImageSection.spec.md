# BusImageSection Specification

## Overview
- **Target file:** `src/components/MisobusPage.tsx`
- **Screenshot:** `docs/design-references/misobus-desktop-full.png`
- **Interaction model:** scroll-driven

## DOM Structure
Full-width section containing desktop and mobile image variants.

## Computed Styles
- Section desktop: `height: 600px`, `width: 1440px`, overflow hidden.
- Desktop image initial: rendered `1728px x 720px`, `margin-left: -144px`, `opacity: 0`, `transform: scale(1.2)`.
- Desktop image animated: `opacity: 1`, `transform: scale(1)`.
- Transition: `opacity 3s, transform 3s`.

## States & Behaviors
- Trigger: IntersectionObserver when image band enters viewport.
- Implementation: add `is-visible` class to match AOS fade/zoom.

## Assets
- `/images/misobus/bus_main_img.jpg`
- `/images/misobus/bus_main_img_m.jpg`

## Responsive Behavior
- Desktop: `bus_main_img.jpg`, 600px band.
- Mobile: `bus_main_img_m.jpg`, about `390px x 271px`.
