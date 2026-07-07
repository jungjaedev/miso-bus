# Internal Page Behaviors

## Shared
- Mobile side menu: click hamburger to open; click close to hide; body receives `scrol-hidden`.
- Floating inquiry: click button to reveal `카톡문의`, `전화문의`, `견적문의`.
- External links remain external: Kakao, Instagram, Naver blog, `tel:`.
- Internal links use Next.js routes: `/`, `/about`, `/our-cars`, `/cs`, `/estimate`, `/term-and-service`, `/personal-info-policy`.

## Route-Specific
- `/cs` FAQ cards use native `details` for static expand/collapse behavior.
- `/estimate` is static and does not submit data.
- `/our-cars` carousel controls are visual-only in this clone, matching the default first state captured in screenshots.
