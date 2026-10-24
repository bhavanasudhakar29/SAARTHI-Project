# SAARTHI: Tech Stack (Prototype)

Principle: **frontend-only prototype, mock data, zero backend dependency.** Swap in real services later.

## Frontend
| Layer | Choice | Why |
|---|---|---|
| Framework | React 18 + Vite | Fast setup, you likely know it |
| Language | TypeScript (or JS if speed matters more) | Safer data models; optional |
| Routing | React Router v6 | Multi-page flow |
| Styling | Tailwind CSS | Quick theming via tokens |
| Components | shadcn/ui (optional) or hand-built | Consistent buttons/cards |
| Icons | lucide-react | Clean line icons |
| Charts | Recharts | Analytics page |
| State | React Context + `useReducer` | No need for Redux |
| i18n | react-i18next | English + Tamil JSON files |
| Animations | Framer Motion (light use) | Polish for screenshots |

## Data (prototype)
- Static JSON in `/src/data`: `careers.json`, `students.json`, `concerns.json`, `pathways.json`, `translations/{en,ta}.json`.
- A tiny `mockApi.ts` that wraps JSON in `Promise` with a 300-600 ms delay, so swapping to a real API later is a one-file change.
- Chat answers: scripted responses keyed by intent. Optional upgrade: one real LLM call behind a flag.

## Tooling
- Package manager: npm or pnpm
- Lint/format: ESLint + Prettier
- Deploy for demo: Vercel or Netlify (free)
- No testing for now (per scope)

## Production path (not built now)
| Concern | Future choice |
|---|---|
| API | FastAPI or Node/Express |
| DB | PostgreSQL |
| Verified career data | Curated tables plus vector index for retrieval |
| LLM | API-based model with retrieval over verified data |
| Auth | OTP-based login (phone-first for the target users) |
| Translation | Curated strings plus LLM translation with review |

## Folder structure
```
saarthi/
├── src/
│   ├── components/      # Button, Card, Navbar, ChatBubble, RoadmapStep...
│   ├── pages/           # Landing, Login, Intake, Chat, Pathway, Family, Concerns, Counsellor, Analytics
│   ├── data/            # JSON seed data + translations
│   ├── context/         # AppContext (role, language, student profile)
│   ├── lib/             # mockApi.ts, utils
│   ├── styles/          # tokens, globals
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.js
└── package.json
```
