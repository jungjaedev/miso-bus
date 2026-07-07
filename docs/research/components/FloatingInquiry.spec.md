# FloatingInquiry Specification

## Overview
- **Target file:** `src/components/MisobusPage.tsx`
- **Screenshot:** `docs/design-references/misobus-desktop-full.png`
- **Interaction model:** click-driven

## DOM Structure
Fixed bottom-right wrapper with expandable menu and button.

## Computed Styles
- Button desktop: `width: 60px`, `height: 60px`, fixed near `right:16px`, `bottom:44px`.
- Open menu: flex column, visible, items `50px x 50px`, labels below each icon.
- Original button has constant vertical movement; clone uses matching translateY animation.

## States & Behaviors
- Closed: menu `opacity:0`, hidden, button shows inquiry icon.
- Open: menu `opacity:1`, button shows close icon.
- Transition: `0.15s 0.08s`.

## Assets
- `icon_inquiry.svg`, `x_close.svg`, `icon_kakaotalk_color.svg`, `icon_call_color.svg`, `icon_calculator_color.svg`.

## Text Content
카톡문의, 전화문의, 견적문의

## Responsive Behavior
- Desktop and mobile: fixed bottom-right, same button size.
