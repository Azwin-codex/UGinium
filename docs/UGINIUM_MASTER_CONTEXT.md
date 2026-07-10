# UGINIUM_MASTER_CONTEXT

> Permanent AI operating context for UGinium. Read this first, then
> consult `/docs` for detailed specifications.

## 1. Project Identity

UGinium is a university-exclusive collaboration platform for students to
build profiles, discover peers, form Guilds, build projects, join
hackathons, and showcase achievements. It is not a social network or
generic SaaS dashboard.

## 2. Philosophy

-   Premium over flashy
-   Minimal over crowded
-   Precision over decoration
-   Components over duplication
-   Accessibility first
-   Performance first

## 3. Documentation

The `/docs` directory is the source of truth. Priority: 1. UCIC 2. Brand
Guide 3. Design System 4. Motion 5. Typography 6. API / Database

## 4. Tech Stack

-   Next.js 16 App Router
-   React 19
-   TypeScript
-   Tailwind CSS v4
-   npm

## 5. Folder Structure

``` text
apps/web/src/
app/
components/
  foundation/
  layouts/
  ui/
hooks/
lib/
services/
stores/
styles/
themes/
types/
utils/
constants/
animations/
assets/
data/
```

## 6. Design Language

Dark-first, architectural, matte, geometric, calm, premium. Avoid
generic SaaS layouts, cyberpunk aesthetics, excessive glow, and
unnecessary decoration.

## 7. Component Philosophy

Build reusable primitives. Abstract only after proven reuse. Use
semantic HTML and accessible patterns.

## 8. Frozen Architecture

-   page.tsx composes pages.
-   CSS variables in globals.css are the design token source.
-   Global keyframes live in globals.css.
-   Prefer CSS animations over JS.
-   Dark mode is the default.

## 9. Coding Standards

Use functional React components, TypeScript, clean imports, modular
code. Do not add dependencies or redesign architecture without approval.

## 10. AI Rules

Read this file first. Read only relevant `/docs`. Implement only the
requested mission. Do not continue automatically. Modify only requested
files. Explain changes briefly.

## 11. Workflow

ChatGPT: Product, architecture, reviews. Claude Opus: Planning. Claude
Sonnet: Implementation. Developer: Integrate, test, report.

## 12. Mission Format

Mission ID Objective Files Constraints Deliverables One mission at a
time.

## 13. Current State

Planning complete. Architecture frozen. Current objective: Build the
Academy Entry Screen incrementally: globals.css, layout.tsx, Button,
CenteredLayout, DormantOrb, AcademyWordmark, page.tsx.

## 14. Definition of Done

-   Builds successfully
-   No TypeScript or ESLint errors
-   Responsive
-   Accessible
-   Matches UGinium design language
-   No architectural debt

## 15. Final Instruction

Optimize every decision for consistency, scalability, maintainability,
performance, and user experience. When uncertain, choose the simpler
solution aligned with the existing architecture.
