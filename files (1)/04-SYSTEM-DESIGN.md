# SAARTHI: System Design

## 1. Prototype architecture (what you build now)
```
┌──────────────────────────────────────────┐
│              React SPA (Vite)            │
│  Pages ─ Components ─ Context (state)    │
│        │                                 │
│     mockApi.ts  (Promise + delay)        │
│        │                                 │
│   /src/data/*.json  (seed + translations)│
└──────────────────────────────────────────┘
        Deployed as static site (Vercel/Netlify)
```

## 2. Target architecture (what you pitch)
```
Client (Web, PWA)
   │  HTTPS
API Gateway / Backend (FastAPI)
   ├── Auth service (OTP login, roles)
   ├── Counselling service ── LLM + Retrieval ──► Verified Career Knowledge Base
   ├── Pathway service (roadmap generation from verified data)
   ├── Concern service (objection → evidence-backed answer)
   ├── Family service (shared shortlists, comments, approvals)
   ├── Loop service (check-ins, reminders, escalation rules)
   └── Analytics service (aggregates for counsellors)
   │
PostgreSQL  +  Vector index  +  Object storage
```
Key design rule: **the LLM never states career facts on its own.** It retrieves from the verified knowledge base and cites the source; unsupported answers escalate to a counsellor.

## 3. Data models
```
User        { id, role: student|parent|counsellor, name, language }
Student     { id, userId, class, marks, interests[], location, budget, language }
Career      { id, name, category, skills[], exams[], avgSalaryRange, demandTrend, sources[] }
Pathway     { id, careerId, steps[{ title, durationMonths, costRange, type }] }
Shortlist   { id, studentId, careerIds[], sharedWith[], status }
Concern     { id, label, category, answerTemplate, evidence[] }
Message     { id, threadId, sender: student|ai|counsellor, text, sourceRefs[], ts }
CheckIn     { id, studentId, dueDate, status, note }
Flag        { id, studentId, reason, severity, resolvedBy }
```

## 4. Key flows
**Recommendation:** Intake → profile → match careers (score from interests, marks, budget, location) → top 3 with reasons and sources.

**Pathway Navigator:** careerId → Pathway steps → render timeline with cost and duration totals.

**Concern Resolver:** concern selected → lookup answer template + evidence → render answer with source chip → if unresolved, "Ask a counsellor" creates a Flag.

**Continuous Loop:** pathway chosen → schedule CheckIns → status updates → missed or negative check-in raises a Flag → counsellor dashboard.

## 5. Prototype API surface (mock)
| Function | Returns |
|---|---|
| `getStudentProfile(id)` | Student |
| `getRecommendations(profile)` | Career[] (top 3) |
| `getPathway(careerId)` | Pathway |
| `getConcerns()` | Concern[] |
| `resolveConcern(concernId, careerId)` | answer + evidence |
| `shareShortlist(studentId, careerIds)` | Shortlist |
| `getStudentsForCounsellor()` | Student[] + flags |
| `getAnalytics()` | cohort stats |

## 6. Matching logic (simple, explainable)
`score = 0.4·interestMatch + 0.3·marksFit + 0.2·budgetFit + 0.1·locationFit`
Show the breakdown in the UI. Explainability is what makes it credible.

## 7. Security and privacy (to state in the pitch)
- Minors' data: parental consent, minimal collection
- Role-based access (parents see only their child's data)
- Encrypt at rest and in transit
- Counsellor access is audited

## 8. Scalability and limits
- Prototype: none, since it is static.
- Production: stateless services, cache career data, queue LLM calls, regional CDN.

## 9. Open questions to settle before building the real thing
- Where does the verified career data come from, and who maintains it?
- Who is accountable when a recommendation is wrong?
- How are counsellors onboarded and paid?
