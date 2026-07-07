# Header Specification

## Overview
- **Target file:** `src/components/MisobusPage.tsx`
- **Screenshot:** `docs/design-references/misobus-desktop-full.png`
- **Interaction model:** click-driven on mobile, hover on desktop

## DOM Structure
`header.site-header` contains `nav.nav-shell`, logo link, desktop nav list, mobile menu button, and mobile side drawer.

## Computed Styles
- Desktop nav shell: `height: 80px`, `width: 1340px`, `display: flex`, `align-items: center`.
- Logo image: `width: 200px`, `height: 40px`.
- Desktop nav: `font-size: 18px`, `font-weight: 700`, `line-height: 27px`, gap about `54px`.
- Mobile menu button: `x:20`, `y:12.5`, `width:30px`, `height:30px`.
- Side drawer: `width: 340px`, `height: 100vh`, closed `left: -452px`, open translate around `347px`.

## States & Behaviors
- Nav hover: color changes to `#08b24c`.
- Mobile menu open: body scroll locked; drawer slides in; close icon visible.

## Assets
- `/images/misobus/miso_logo.svg`
- `/images/misobus/logo.svg`

## Text Content
미소버스 소개, 차량안내, 고객지원, 견적문의, 010-5246-7695, 카톡상담

## Responsive Behavior
- Desktop: horizontal nav.
- Mobile: centered logo, left hamburger, slide drawer.
