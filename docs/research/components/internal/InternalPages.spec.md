# InternalPages Specification

## Overview
- **Target file:** `src/components/InternalPages.tsx`
- **Screenshots:** `docs/design-references/internal/*-original.png`
- **Interaction model:** static pages with click-driven mobile menu, floating inquiry, and FAQ details.

## Shared Layout
- Header height desktop `80px`, mobile `55px`.
- Desktop container width follows homepage `calc(100% - 100px)` / `1340px`.
- Active nav color: `rgb(0, 183, 188)`, underline `2px`.
- Footer matches homepage internal pages: top link/social row, company row, black copyright band.

## Route Content
- `/about`: hero text `"버스 대절이 필요한 순간"`, title `버스대절이 필요한 순간, 미소버스`, CTA `견적/예약 문의`, bus photo, process section, final line `미소짓는 그날까지, 미소버스`.
- `/our-cars`: title `어떤 차량이 필요하세요?`, bus type `대형버스 45인승`, bus/seat images, thumbnails, note, 기타 section.
- `/cs`: gradient support hero with 전화 상담, 카카오톡 상담, 견적문의; FAQ title and two question cards.
- `/estimate`: title/subtitle, public inquiry cards only. Detail links are visual `#` links and do not clone `/inquiry_estimate/`.
- `/term-and-service`: breadcrumb and short terms body.
- `/personal-info-policy`: breadcrumb and policy headings/body from original screenshot.

## Assets
- Reuse existing global assets.
- Added `bus_11.jpg`, `bus_16.jpg`, `bus_28.jpg`, bus seat SVGs, `etc_bus.svg`, `etc_car.svg`, `icon_call.svg`, `icon_talk.svg`, `icon_estimate.svg`.

## Responsive
- Mobile breakpoint: `max-width: 991px`.
- Navigation switches to hamburger drawer.
- Cars visual stacks bus image and seat map.
- Estimate rows become two-column compact cards with visible `자세히` link.
- Legal content width becomes viewport-constrained.
