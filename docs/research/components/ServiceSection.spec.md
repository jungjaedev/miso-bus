# ServiceSection Specification

## Overview
- **Target file:** `src/components/MisobusPage.tsx`
- **Screenshot:** `docs/design-references/misobus-desktop-full.png`
- **Interaction model:** static

## DOM Structure
Section title, paragraph, six-item service grid.

## Computed Styles
- Section desktop: starts at `y=1042px`, height about `1132px`, padding `64px 0`.
- Title: `font-size: 46px`, `font-weight: 900`, `line-height: 61px`.
- Paragraph: `font-size: 18px`, `line-height: 26px`, color `#777`.
- Grid: 3 columns; item image width `270px`; label `24px`, weight `700`.

## Assets
- `li_tour.png`, `li_wedding.png`, `li_mountain.png`, `li_workshop.png`, `li_group.png`, `li_etc.png`.

## Text Content
버스대절이 필요한 순간, 미소버스가 찾아갑니다.
단체관광, 결혼식, 산악모임, 워크샵 등 각종행사에 필요한 버스를 예약할 수 있어요.
단체관광, 결혼식, 산악회/동호회, 워크샵, 견학/수학여행, 기타

## Responsive Behavior
- Desktop: 3 columns.
- Mobile: 2 columns, image width about `150px`.
