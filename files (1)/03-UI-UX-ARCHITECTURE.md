# SAARTHI: Frontend UI/UX Architecture

## 1. Design principles
1. **Calm and trustworthy**: warm beige, deep dark text, no loud colours.
2. **Family-friendly**: large text, plain language, minimal jargon.
3. **One primary action per screen.**
4. **Language-first**: every string goes through i18n; layouts tolerate longer Tamil text.

## 2. Theme tokens (beige + dark)
| Token | Hex | Use |
|---|---|---|
| `--bg` | `#F5EFE6` | Page background |
| `--surface` | `#EADFCB` | Cards, panels |
| `--surface-alt` | `#FBF7F0` | Inputs, raised cards |
| `--ink` | `#1F1A17` | Primary text |
| `--ink-soft` | `#5A4E45` | Secondary text |
| `--primary` | `#2B211C` | Primary buttons, navbar |
| `--primary-text` | `#F5EFE6` | Text on primary |
| `--accent` | `#A8743F` | Highlights, links, progress |
| `--success` | `#4F6F52` | Positive states |
| `--warning` | `#B7791F` | Flags |
| `--danger` | `#8C3B2E` | Errors, escalations |
| `--border` | `#D6C7AE` | Dividers |

Contrast: `--ink` on `--bg` is well above WCAG AA. Check `--accent` text on `--surface` before using it for small text.

## 3. Typography
- Headings: a serif with warmth (e.g., Fraunces or Playfair Display)
- Body/UI: Inter or Noto Sans (plus **Noto Sans Tamil** for Tamil)
- Scale: 14 / 16 / 20 / 24 / 32 / 44 px; base body 16 px

## 4. Layout system
- 12-column grid, max width 1200 px, 24 px gutters
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64
- Radius: 12 px cards, 999 px pills, 8 px inputs
- Shadow: soft, `0 2px 12px rgba(31,26,23,0.08)`

## 5. Core components
| Component | Variants / notes |
|---|---|
| Button | primary (dark), secondary (outline), ghost, danger; sizes S/M/L; loading state |
| Card | default, highlight (accent border), career card (icon + match %) |
| Navbar | logo, language toggle, role badge, user menu |
| Stepper | Intake progress (4 steps) |
| ChatBubble | user / AI / counsellor (distinct colours), "verified source" chip |
| RoadmapStep | timeline node with title, duration, cost, status |
| ConcernChip | selectable concern pills |
| StatCard / Chart | analytics tiles, bar/line/donut |
| Toast / Modal | confirmations, share dialog |

## 6. Navigation model
```
Public:   Landing → Login (role select)
Student:  Dashboard → Intake → AI Chat → Pathway → Share with Family
Parent:   Family View → Compare → Concern Resolver → Approve/Comment
Counsellor: Dashboard → Student Detail → Flags → Analytics
```
Global: navbar (logo, language toggle, role switcher for demo, logout).

## 7. The demo user journey
1. Landing: pitch and CTA.
2. Choose role **Student**.
3. Intake (4 steps) fills profile.
4. AI Chat suggests 3 careers with match %.
5. Student picks one → **Career Pathway Navigator** roadmap.
6. Student taps **Share with Family**.
7. Switch to **Parent** → Family View shows shortlist and comparison.
8. Parent selects a concern → **Smart Concern Resolver** answers with data.
9. Switch to **Counsellor** → dashboard shows the student, a flag, and the next check-in (**Continuous Loop**).
10. Analytics page shows cohort insight.

## 8. States every page must handle
Loading (skeleton), empty, error (friendly message plus retry), success toast.

## 9. Accessibility and responsiveness
- Min touch target 44 px; visible focus rings; alt text on images
- Breakpoints: 360 / 768 / 1024 / 1280. Mobile-first, since many users will be on phones.

## 10. Imagery and icons
- Hero images: AI Career Guidance, Family Decision-Making, Career Growth
- Differentiator icons: compass/route (Pathway Navigator), message-check (Concern Resolver), refresh/loop (Counselling Loop)
- Keep image treatment consistent (same style, warm tones, rounded corners)
