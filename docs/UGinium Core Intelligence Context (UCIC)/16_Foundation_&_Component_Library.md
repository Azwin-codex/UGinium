# UGinium Core Intelligence Context (UCIC)

Version 1.0

---

# CHAPTER 16

# Foundation & Component Library Specification

---

## Purpose

The Foundation & Component Library defines every reusable interface element used throughout UGinium.

It transforms the Design System into an implementation-ready component architecture for designers, developers, and AI systems.

Every interface should be assembled using existing components before creating new ones.

The goal is consistency, scalability, maintainability, and rapid development.

---

# 16.1 Component Philosophy

Components are the building blocks of every Module.

Modules are the building blocks of every Page.

Pages are the building blocks of every User Flow.

This hierarchy must never be broken.

```text
Design Tokens
        ↓
Foundation
        ↓
Components
        ↓
Modules
        ↓
Pages
        ↓
User Flows
```

---

# 16.2 Foundation Layer

The Foundation Layer contains reusable design primitives.

Includes:

Colors

Typography

Spacing

Grid

Motion

Elevation

Borders

Radius

Icons

These are never used directly inside pages.

Components consume Foundations.

---

# 16.3 Component Categories

UGinium components are divided into the following categories.

### Input Components

Buttons

Text Fields

Password Fields

Text Areas

Checkboxes

Radio Buttons

Toggle Switches

Date Pickers

Search Inputs

Dropdown Menus

Multi-select Fields

File Upload

---

### Navigation Components

Navigation Bar

Sidebar

Orb Navigation

Breadcrumbs

Tabs

Pagination

Step Indicators

Command Palette

---

### Feedback Components

Toast

Alert

Snackbar

Progress Bar

Loading Indicator

Skeleton Loader

Status Indicator

Tooltip

Badge

---

### Data Display Components

Avatar

Profile Chip

Statistic Card

Chart

Progress Ring

Timeline

Table

List

Tag

Label

Empty State

---

### Overlay Components

Modal

Dialog

Drawer

Bottom Sheet

Context Menu

Dropdown

Popover

---

### Utility Components

Divider

Spacer

Icon Button

Search Bar

Filter Bar

Sort Control

Chip Group

---

# 16.4 Component Anatomy

Every component should contain:

Purpose

↓

Structure

↓

States

↓

Variants

↓

Accessibility

↓

Developer API

↓

Usage Rules

Every new component must follow this structure.

---

# 16.5 Component Variants

Components should support meaningful variants.

Example

Button

Primary

Secondary

Ghost

Danger

Success

Icon

Loading

Disabled

Variants should solve different use cases.

Never duplicate components unnecessarily.

---

# 16.6 Component States

Every interactive component should support:

Default

Hover

Focused

Pressed

Active

Loading

Disabled

Error

Success

Selected

Unavailable states should be intentionally omitted rather than inconsistently implemented.

---

# 16.7 Button Specification

Buttons communicate actions.

Buttons should:

Clearly describe outcomes.

Have a visible primary hierarchy.

Support icons where appropriate.

Remain visually consistent.

Primary buttons should be limited to one per major section.

---

# 16.8 Form Components

Forms should reduce effort.

Requirements:

Clear labels

Helpful placeholders

Inline validation

Keyboard accessibility

Logical tab order

Visible focus states

Validation should occur without disrupting workflow.

---

# 16.9 Search Components

Search is a core experience.

The Search Component should support:

Instant suggestions

Recent searches

Filtering

Category selection

Keyboard shortcuts

Search should prioritize speed and discoverability.

---

# 16.10 Progress Components

Progress components display:

XP

Level

Mission Completion

Profile Completion

Contribution

Skill Progress

Progress should communicate movement toward a goal.

Never display decorative progress indicators.

---

# 16.11 Avatar System

Avatars represent identity.

Requirements:

Consistent sizing

Fallback initials

Status indicator

Campus affiliation (optional)

Level display compatibility

The avatar should support—but never replace—the Identity Module.

---

# 16.12 Badge System

Badges communicate status.

Examples:

Verified

Guild Leader

Mentor

Faculty

Administrator

Champion

Badges should remain visually subtle.

They supplement identity.

They do not dominate it.

---

# 16.13 Loading Components

Loading should preserve layout.

Preferred:

Skeleton Modules

Skeleton Lists

Progress Indicators

Loading Text

Avoid layout shifts.

Never replace the interface with a spinner unless absolutely necessary.

---

# 16.14 Empty Components

Every empty component should include:

Clear title

Helpful explanation

Primary action

Optional illustration

Users should always know what to do next.

---

# 16.15 Accessibility Standards

Every component must support:

Keyboard Navigation

Focus Visibility

Screen Readers

Touch Accessibility

Reduced Motion

High Contrast

Accessibility is mandatory.

---

# 16.16 Developer Standards

Every component must be:

Reusable

Token-driven

Responsive

Documented

Accessible

Theme-aware

Components must never contain hardcoded values.

---

# 16.17 Component Naming Convention

Use clear and predictable naming.

Examples:

Button

SearchInput

ProfileAvatar

MissionCard

GuildList

ProgressRing

NotificationToast

Avoid ambiguous names.

Consistency improves maintainability.

---

# 16.18 Claude Rules

Before creating a new component:

Search the existing library.

Reuse whenever possible.

Extend only when necessary.

Create new components only when no existing solution satisfies the requirement.

Never create duplicate functionality.

---

# 16.19 Review Checklist

Before approving a component verify:

□ Does it solve one clear purpose?

□ Is it reusable?

□ Does it support all required states?

□ Is it accessible?

□ Does it follow Academy architecture?

□ Can it be themed?

□ Is it documented?

□ Can another developer understand it immediately?

---

# 16.20 Non-Negotiable Rules

Components are reusable assets.

Every component belongs to the Academy.

Components consume Foundations.

Modules consume Components.

Pages consume Modules.

User Flows consume Pages.

Never bypass this hierarchy.

Consistency is more valuable than novelty.

Every new component should strengthen the Design System rather than expand it unnecessarily.

---

# End of Chapter 16

The next chapter defines the **Frontend Engineering & Development Standards**, covering project architecture, Next.js structure, React conventions, Tailwind CSS architecture, state management, performance optimization, accessibility implementation, naming conventions, folder organization, and coding standards used throughout UGinium.
