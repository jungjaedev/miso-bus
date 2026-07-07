# Footer Specification

## Overview
- **Target file:** `src/components/MisobusPage.tsx`
- **Screenshot:** `docs/design-references/misobus-desktop-full.png`
- **Interaction model:** hover social icons

## DOM Structure
Footer band with menu/social row, company info list, copyright.

## Computed Styles
- Footer: `background: #f9fafb`, desktop height about `245px`.
- Top container: `width:1340px`, `height:99px`, flex between.
- Footer menu: flex row, `15px`.
- Social icons: `35.1875px`, absolute stacked variants.
- Company list: centered row, muted text.

## States & Behaviors
- Social hover crossfades icon variant with `opacity 0.3s ease-in-out`.

## Assets
- `icon_kakaotalk.svg`, `icon_kakaotalk_222.svg`, `icon_instagram.svg`, `icon_instagram_222.svg`, `icon_blog.svg`, `icon_blog_black.svg`.

## Text Content
고객지원, 이용약관, 개인정보보호정책, 로그인
미소버스, 대표 정재현, 전화 010-5246-7695
Copyright © MISOBUS. All rights reserved.

## Responsive Behavior
- Desktop: menu left, social links right.
- Mobile: menu stacks, company and copyright align left.
