# UGinium Core Intelligence Context (UCIC)

Version 1.0

---

# CHAPTER 17

# Frontend Engineering & Development Standards

---

## Purpose

This chapter establishes the engineering principles that govern the implementation of UGinium.

The objective is to ensure that every developer, AI assistant, and contributor follows a unified engineering standard.

Good engineering should preserve the Design System, simplify maintenance, improve scalability, and enable rapid feature development.

The frontend architecture should be modular, maintainable, performant, and production-ready from the beginning.

---

# 17.1 Engineering Philosophy

The frontend should be treated as a scalable product, not a collection of pages.

Every implementation should prioritize:

Maintainability

Reusability

Performance

Consistency

Accessibility

Scalability

Engineering quality should never be sacrificed for faster implementation.

---

# 17.2 Recommended Technology Stack

Frontend Framework

Next.js (App Router)

Programming Language

TypeScript

UI Library

React

Styling

Tailwind CSS

Animation

Framer Motion

Component Library

shadcn/ui (Customized to UGinium Design System)

Icons

Lucide React

State Management

Zustand

Data Fetching

TanStack Query

Authentication

Better Auth / Clerk (depending on deployment requirements)

Database

Supabase / PostgreSQL

ORM

Drizzle ORM

Deployment

Vercel

This stack should be considered the default unless project requirements change.

---

# 17.3 Folder Structure

The project should follow a predictable and scalable structure.

```text
src/

├── app/
├── components/
│   ├── foundation/
│   ├── ui/
│   ├── modules/
│   ├── layouts/
│   └── animations/
│
├── features/
│
├── hooks/
│
├── lib/
│
├── services/
│
├── stores/
│
├── types/
│
├── utils/
│
├── constants/
│
└── styles/
```

Feature-specific logic should remain inside the corresponding feature directory.

---

# 17.4 Component Architecture

Component hierarchy must always follow:

Foundation

↓

UI Components

↓

Modules

↓

Layouts

↓

Pages

No Page should directly implement raw styling when an existing component exists.

---

# 17.5 Naming Conventions

Components

PascalCase

Example

IdentityModule.tsx

Hooks

camelCase beginning with "use"

Example

useGuild.ts

Constants

UPPER_SNAKE_CASE

Example

MAX_LEVEL

Files should always use meaningful names.

Avoid abbreviations unless universally understood.

---

# 17.6 Styling Standards

Tailwind CSS should be the primary styling system.

Rules:

No inline styles

No duplicated utility groups

Extract repeated patterns

Use Design Tokens

Avoid arbitrary values unless justified

All spacing, colors, typography, and radius values should reference the Design System.

---

# 17.7 State Management

Local state

React State

Shared UI State

Zustand

Server Data

TanStack Query

Persistent Data

Database

Do not use global state unnecessarily.

Keep state close to where it is used.

---

# 17.8 API Layer

Business logic must remain outside components.

Components should never communicate directly with APIs.

Recommended structure:

UI

↓

Hooks

↓

Service Layer

↓

API

↓

Database

This separation improves testing and maintainability.

---

# 17.9 Performance Standards

Optimize:

Lazy Loading

Code Splitting

Image Optimization

Caching

Memoization

Virtual Lists

Server Components

Performance should be considered during implementation—not after deployment.

---

# 17.10 Accessibility Standards

Every implementation must support:

Keyboard Navigation

ARIA Labels

Focus Management

Reduced Motion

Screen Readers

Accessible Contrast

Accessibility is a core engineering requirement.

---

# 17.11 Responsive Development

Desktop First

↓

Tablet Optimization

↓

Mobile Refinement

All components should remain functional across supported screen sizes.

Responsiveness should be tested continuously.

---

# 17.12 Error Handling

Errors should be handled gracefully.

Provide:

Clear UI Feedback

Meaningful Logging

Fallback States

Retry Options

Developers should never expose raw system errors to users.

---

# 17.13 Code Quality

Every implementation should satisfy:

Readable

Modular

Reusable

Documented

Predictable

Avoid unnecessary abstraction.

Prefer clarity over cleverness.

---

# 17.14 Documentation

Every reusable Module should include:

Purpose

Props

Examples

States

Accessibility Notes

Usage Guidelines

Documentation should evolve alongside implementation.

---

# 17.15 Git Standards

Use descriptive commit messages.

Examples:

feat: add Guild creation flow

fix: improve profile loading performance

refactor: extract Mission module

Avoid generic commits such as:

update

changes

fix

Git history should communicate project evolution.

---

# 17.16 Testing Philosophy

Every critical feature should be testable.

Testing priorities:

Business Logic

Authentication

Guild Management

Mission Management

Profile Updates

Search

Navigation

Critical user journeys should remain reliable.

---

# 17.17 Security Standards

Never expose secrets.

Validate all inputs.

Sanitize user-generated content.

Protect API routes.

Use secure authentication.

Security should be considered from the beginning.

---

# 17.18 Claude Engineering Workflow

Before generating code:

Understand the feature.

↓

Identify reusable Modules.

↓

Reuse existing Components.

↓

Follow Design Tokens.

↓

Separate business logic.

↓

Optimize responsiveness.

↓

Review accessibility.

↓

Generate production-ready code.

Claude should never generate prototype-quality code unless explicitly requested.

---

# 17.19 Review Checklist

Before implementation verify:

□ Is the code modular?

□ Are components reusable?

□ Are Design Tokens respected?

□ Is business logic separated?

□ Is accessibility implemented?

□ Is the code responsive?

□ Does naming follow conventions?

□ Is the implementation production-ready?

---

# 17.20 Non-Negotiable Rules

Every implementation follows the Design System.

Every component is reusable.

Every feature is modular.

Performance is proactive.

Accessibility is mandatory.

Security is built in.

Maintainability always outweighs shortcuts.

Production quality is the default expectation.

---

# End of Chapter 17

The next chapter defines the **Claude Operating Rules**, establishing how Claude should reason, make design decisions, review its own work, generate production-ready code, and maintain the identity of UGinium throughout every interaction.
