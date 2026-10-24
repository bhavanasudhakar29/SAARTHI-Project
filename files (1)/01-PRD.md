# SAARTHI: Product Requirements Document (Prototype Scope)

## 1. One-line pitch
SAARTHI is an AI career counselling platform that guides students *with* their families, in their own language, using verified career data, with human counsellors in the loop.

## 2. Problem
- Students in tier-2/3 regions get career advice from relatives, peers, or social media, not verified data.
- Career decisions are family decisions, but existing tools only serve the student.
- Counsellors are scarce and cannot track every student after a single session.
- Language barriers exclude non-English speakers.

## 3. Users
| Persona | Goal | Pain |
|---|---|---|
| Student | Know which path fits me and how to get there | Overwhelmed, conflicting advice |
| Parent / Guardian | Understand the options, cost, and risk | Doesn't trust online advice, language gap |
| Counsellor | Support many students efficiently | No visibility between sessions |

## 4. Six key points (the pitch spine)
1. **Problem**: unguided, uninformed, family-misaligned career choices.
2. **AI-powered counselling**: conversational guidance from a profile and interests.
3. **Verified career insights**: curated data (colleges, exams, salaries, timelines), not LLM guesses.
4. **Family-centred decisions**: shared view so parents and students decide together.
5. **Regional language support**: UI and chat in English plus at least one regional language (Tamil for the demo).
6. **Counsellor support and analytics**: human review and cohort-level insights.

## 5. Differentiators
| Feature | What it does | Why it is not generic |
|---|---|---|
| Career Pathway Navigator | Turns a chosen career into a step-by-step roadmap (exams, courses, milestones, timeline, cost) | Roadmap is built from verified data, not free-form text |
| Smart Concern Resolver | Parent/student objections ("too expensive", "no job security") get data-backed answers | Targets the real blocker in family decisions |
| Continuous Counselling Loop | Check-ins, progress tracking, and counsellor escalation after the first session | Counselling becomes ongoing, not one-off |

**Honest note:** the moat is the *verified data layer + counsellor-in-the-loop*. Lead with that when pitching.

## 6. Prototype goals
- One end-to-end demo flow on mock data (see `05-PAGES-AND-BUTTONS.md`).
- Screenshot-ready UI in the beige-and-dark theme.
- At least one non-English language working in the UI and chat.

## 7. Non-goals (for now)
- Real authentication, payments, real LLM calls, production database.
- Automated testing.
- Mobile native apps.

## 8. Functional requirements
| ID | Requirement | Priority |
|---|---|---|
| F1 | Role-based entry (Student / Parent / Counsellor), mocked login | Must |
| F2 | Student intake form (interests, marks, location, budget, language) | Must |
| F3 | AI counselling chat returning 3 career recommendations (mocked responses) | Must |
| F4 | Career Pathway Navigator roadmap view | Must |
| F5 | Family Decision view with shared shortlist and comparison | Must |
| F6 | Smart Concern Resolver (select concern, get data-backed answer) | Must |
| F7 | Language toggle (English / Tamil) | Must |
| F8 | Counsellor dashboard with student list and flags | Must |
| F9 | Analytics page (cohort charts on mock data) | Should |
| F10 | Continuous loop: check-in reminders and progress tracker | Should |

## 9. Success criteria for the demo
- A viewer can follow the story: student gets guidance → family reviews → concern resolved → counsellor sees it.
- Every screen in the pitch deck is a real clickable route.
- Language toggle visibly changes content.

## 10. Risks
| Risk | Mitigation |
|---|---|
| "It's just a ChatGPT wrapper" | Show the verified data source and counsellor review in the demo |
| Mock data looks fake | Use realistic, consistent seed data for 3 student personas |
| Translation quality | Limit to short UI strings plus a few curated chat answers |
