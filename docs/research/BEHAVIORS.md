# Misobus Behaviors

Target: https://misobus.com/

## Global
- Framework source: WordPress theme `twentytwenty-child`.
- Fonts: `"Noto Sans KR", "맑은 고딕", malgungothic, "Nanum Gothic", sans-serif`.
- Smooth scroll library: none detected.
- Scroll snap: none detected.
- Header: overlays the hero at the top of the page, not sticky; no shrink/shadow state on scroll.

## Scroll
- Large bus image uses AOS-style entrance animation.
- Trigger: image enters viewport around section top `y=2174px`.
- Before: `opacity: 0`, `transform: matrix(1.2, 0, 0, 1.2, 0, 0)`.
- After: `opacity: 1`, `transform: scale(1)`.
- Transition: `opacity 3s, transform 3s`.

## Click
- Floating inquiry button expands a vertical menu.
- Closed: floating menu hidden; button shows `icon_inquiry.svg`.
- Open: menu contains `카톡문의`, `전화문의`, `견적문의`; button shows close icon.
- Mobile hamburger opens a left side drawer.
- Drawer before: `left: -452px`, `width: 340px`.
- Drawer after: translated into view; body gets scroll lock.

## Hover
- Desktop nav links transition to green `rgb(8, 178, 76)`.
- Footer social icons crossfade between colored and black variants using `opacity 0.3s ease-in-out`.
- CTA buttons have subtle background/color changes.

## Responsive
- Desktop 1440px: header nav visible, hero has three card images, service grid is 3 columns, notice/FAQ are 2 columns.
- Tablet/mobile under ~991px: hamburger appears, side drawer replaces desktop nav, service grid becomes 2 columns, notices stack.
- Mobile 390px: hero text stacks, third hero card hidden by viewport crop, bus section uses `bus_main_img_m.jpg`, footer menu stacks.
