# InquirySection Specification

## Overview
- **Target file:** `src/components/MisobusPage.tsx`
- **Screenshot:** `docs/design-references/misobus-desktop-full.png`
- **Interaction model:** hover only

## DOM Structure
Centered title, paragraph, four CTA buttons, and four-step ordered process.

## Computed Styles
- Section desktop: starts around `y=2774px`, height `572px`, padding `80px 0`.
- Title: `font-size: 46px`, `font-weight: 900`, `line-height: 61px`.
- Paragraph: `font-size: 18px`, `line-height: 26px`, color `#777`.
- Buttons: `height: 58px`, border `1px solid #eee`; dark button background `#222`.
- Process icons: `50px x 50px`; item width about `98px`.

## Assets
- `icon_kakaotalk_222.svg`, `bnt_call.svg`, `i_question.svg`, `i_chats.svg`, `i_calendar.svg`, `i_bus.svg`, `i_arrow.svg`.

## Text Content
미소버스와 안전한 여정을 시작하세요.
문의를 하면, 담당자가 상담을 통해 예약을 도와드립니다.
미소버스 소개, 견적/예약 문의, 카톡 문의, 전화 문의
문의, 상담, 예약, 운행

## Responsive Behavior
- Desktop: CTA buttons in one row, process in one row.
- Mobile: buttons wrap 2x2.
