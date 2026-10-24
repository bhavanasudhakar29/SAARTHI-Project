# SAARTHI: Pages and Buttons Specification

Route map, then every button per page. "Action" is what happens in the prototype.

## Route map
| Route | Page | Role |
|---|---|---|
| `/` | Landing | Public |
| `/login` | Role select / mock login | Public |
| `/student` | Student dashboard | Student |
| `/student/intake` | Intake (4 steps) | Student |
| `/student/chat` | AI counselling chat | Student |
| `/student/pathway/:careerId` | Career Pathway Navigator | Student |
| `/family` | Family decision view | Parent |
| `/family/concerns` | Smart Concern Resolver | Parent / Student |
| `/counsellor` | Counsellor dashboard | Counsellor |
| `/counsellor/student/:id` | Student detail | Counsellor |
| `/counsellor/analytics` | Analytics | Counsellor |

---

## 1. Landing `/`
| Element | Type | Action |
|---|---|---|
| Logo "SAARTHI" | Link | Scroll to top |
| Language toggle (EN / தமிழ்) | Toggle | Switch language globally |
| **Get Started** | Primary button | → `/login` |
| **See How It Works** | Secondary button | Smooth-scroll to the 6 key points |
| Key-point cards (6) | Cards | Expand details on click |
| Differentiator cards (3) | Cards | Hover shows description |
| **Try the Demo** (footer CTA) | Primary button | → `/login` |

## 2. Login `/login`
| Element | Type | Action |
|---|---|---|
| Role cards: Student / Parent / Counsellor | Selectable cards | Set role in context |
| Name / phone input (mock) | Input | Accepts any value |
| **Continue** | Primary button | Role-based redirect: Student → `/student`, Parent → `/family`, Counsellor → `/counsellor` |
| **Back** | Ghost button | → `/` |

## 3. Student Dashboard `/student`
| Element | Type | Action |
|---|---|---|
| **Start Career Discovery** | Primary button | → `/student/intake` (or `/student/chat` if profile exists) |
| **Continue Chat** | Secondary button | → `/student/chat` |
| **View My Pathway** | Secondary button | → `/student/pathway/:id` |
| **Share with Family** | Secondary button | Opens share modal |
| Progress tracker | Display | Shows loop check-ins |
| Next check-in card: **Update Progress** | Button | Opens check-in modal |

## 4. Intake `/student/intake`
| Element | Type | Action |
|---|---|---|
| Step 1: Basics (name, class, location) | Form | Validates required fields |
| Step 2: Marks and subjects | Form | Numeric inputs |
| Step 3: Interests (chips) and budget | Chips plus slider | Multi-select |
| Step 4: Language and family involvement | Dropdown plus toggle | Sets language |
| **Next** | Primary button | Validate then next step |
| **Back** | Secondary button | Previous step |
| **Get My Career Matches** (final) | Primary button | Saves profile → `/student/chat` |

## 5. AI Chat `/student/chat`
| Element | Type | Action |
|---|---|---|
| Message input | Textarea | Type message |
| **Send** | Primary button | Appends user message, shows scripted AI reply |
| Suggested prompt chips | Chips | Fill and send a prompt |
| Career recommendation cards (3) with match % | Cards | Show reasons and "Verified source" chip |
| **View Pathway** (on card) | Button | → `/student/pathway/:careerId` |
| **Add to Shortlist** (on card) | Button | Adds to shortlist, shows toast |
| **Ask a Counsellor** | Secondary button | Creates flag, shows confirmation |
| Source chip | Chip | Opens source popover |

## 6. Career Pathway Navigator `/student/pathway/:careerId`
| Element | Type | Action |
|---|---|---|
| Roadmap timeline | Display | Steps with duration and cost |
| Total cost and duration summary | Display | Computed from steps |
| **Mark Step Done** | Button per step | Toggles status, updates progress |
| **Share with Family** | Primary button | Opens share modal |
| **Compare with Another Career** | Secondary button | Opens comparison picker |
| **Download Roadmap** | Ghost button | Prototype: toast "Coming soon" |
| **Back to Chat** | Ghost button | → `/student/chat` |

## 7. Family Decision View `/family`
| Element | Type | Action |
|---|---|---|
| Shortlist cards | Cards | Show shared careers |
| Comparison table (cost, duration, demand, risk) | Table | Static from data |
| **View Roadmap** | Button per card | Opens pathway (read-only) |
| **I Have a Concern** | Primary button | → `/family/concerns` |
| **Approve This Path** | Primary button | Marks status Approved, toast |
| **Add Comment** | Secondary button | Opens comment box |
| Language toggle | Toggle | Switch language |

## 8. Smart Concern Resolver `/family/concerns`
| Element | Type | Action |
|---|---|---|
| Concern chips (e.g., "Too expensive", "Job security?", "Far from home", "Not sure about this field") | Chips | Select one concern |
| Career selector | Dropdown | Which shortlisted career |
| **Get Answer** | Primary button | Shows data-backed answer with sources |
| Answer card | Display | Evidence, numbers, source chip |
| **This Helped** | Button | Marks resolved, toast |
| **I Still Have Doubts** | Secondary button | Creates flag for counsellor |
| **Back to Family View** | Ghost button | → `/family` |

## 9. Counsellor Dashboard `/counsellor`
| Element | Type | Action |
|---|---|---|
| Student table (name, stage, last activity, flag) | Table | Sortable |
| Filter: All / Flagged / Due check-in | Tabs | Filter table |
| **View Student** | Button per row | → `/counsellor/student/:id` |
| **Analytics** | Button | → `/counsellor/analytics` |
| Flag badge | Badge | Click opens reason |

## 10. Student Detail `/counsellor/student/:id`
| Element | Type | Action |
|---|---|---|
| Profile summary | Display | Read-only |
| Chat history | Display | Read-only thread |
| Pathway progress | Display | Steps status |
| **Send Message** | Primary button | Adds counsellor message to thread |
| **Schedule Check-In** | Secondary button | Opens date picker |
| **Resolve Flag** | Button | Clears flag, toast |
| **Back** | Ghost button | → `/counsellor` |

## 11. Analytics `/counsellor/analytics`
| Element | Type | Action |
|---|---|---|
| Stat cards (students, flags, resolved concerns) | Display | Mock numbers |
| Top careers chosen | Bar chart | Static data |
| Common concerns | Donut chart | Static data |
| Progress over time | Line chart | Static data |
| Date range filter | Dropdown | Switches between 2-3 mock datasets |
| **Export Report** | Ghost button | Prototype: toast "Coming soon" |

---

## Global components
| Element | Where | Action |
|---|---|---|
| Language toggle | Navbar | EN ⇄ தமிழ் |
| Role switcher (demo only) | Navbar | Jump between Student / Parent / Counsellor without logging out |
| **Logout** | User menu | Clear context → `/` |
| Toast | Global | Feedback for all actions |

## Build order
1. Theme tokens, Navbar, Button, Card
2. Landing and Login
3. Intake → Chat → Pathway (core flow)
4. Family view and Concern Resolver
5. Counsellor dashboard and Analytics
6. Language toggle and polish for screenshots
