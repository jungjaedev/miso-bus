# NoticeFaqSection Specification

## Overview
- **Target file:** `src/components/MisobusPage.tsx`
- **Screenshot:** `docs/design-references/misobus-desktop-full.png`
- **Interaction model:** static links

## DOM Structure
Two panels, each with heading, more link, and three list items.

## Computed Styles
- Container desktop: `x:50`, `width:1340px`, `height:304px`.
- Panel: `padding:16px`.
- Heading: `font-size:28px`, `font-weight:700`, `line-height:42px`.
- Header border: `2px solid #333`.
- Rows: `min-height:40px`, border bottom `1px solid #eee`.

## Assets
- `/images/misobus/plus_222.svg`

## Text Content
공지사항, 더보기, 안녕하세요. 미소버스 서비스 준비중입니다., 2021-07-10, 안녕하세요. 곧 서비스가 시작됩니다., 서비스 준비중입니다.
자주하는 질문, 가격이 얼마인가요?, 탑승인원은 1명 초과할 수 있나요?, 환불은 어떻게 받을 수 있나요?

## Responsive Behavior
- Desktop: two columns.
- Mobile: stacked panels.
