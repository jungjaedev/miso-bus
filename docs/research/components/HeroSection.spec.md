# HeroSection Specification

## Overview
- **Target file:** `src/components/MisobusPage.tsx`
- **Screenshot:** `docs/design-references/misobus-desktop-full.png`
- **Interaction model:** static

## DOM Structure
Hero section contains centered copy and three image cards.

## Computed Styles
- Section desktop: `height: 1042px`, background white.
- Container: `x:50`, `width:1340px`, top padding starts after `80px` header.
- Eyebrow: `font-size: 36px`, `font-weight: 700`, `line-height: 54px`, color `#777`.
- Title: `font-size: 62px`, `font-weight: 900`, `line-height: 93px`.
- Cards area: `height: 441px`, margin-top about `156px`, flex space-between.
- Vertical cards: `width: 300px`, radius `32px`, shadow `3px 7px 15px rgba(0,0,0,.2)`.
- Horizontal card: `width: 400px`, same radius/shadow.

## Assets
- `/images/misobus/card1.png`
- `/images/misobus/card2a.png`
- `/images/misobus/card3.png`

## Text Content
“버스대절이 필요한 순간”
함께 이동할 땐
미소버스

## Responsive Behavior
- Mobile: hero copy stacks; cards become single-column/cropped visual stack; third card is hidden at 390px.
