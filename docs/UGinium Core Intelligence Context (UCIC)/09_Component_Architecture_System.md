# UGinium Core Intelligence Context (UCIC)

Version 1.0

---

# CHAPTER 09

# Component Architecture System Specification

---

## Purpose

The Component Architecture System defines every reusable building block of UGinium.

UGinium is **not designed page by page**.

It is **assembled module by module**.

Every interface within the Academy is a structured composition of reusable architectural components.

This ensures consistency, scalability, maintainability, and recognizability across the entire platform.

Whenever Claude is asked to design a page, it must first identify the required modules before generating any layout.

---

# 9.1 Component Philosophy

The smallest design decision affects the entire Academy.

Therefore, every component must belong to the same architectural family.

Never think in terms of:

* Cards
* Widgets
* Boxes
* Containers

Instead think in terms of:

* Identity Module
* Guild Module
* Mission Module
* Portfolio Module
* Skill Module
* Statistics Module
* Signal Module

Pages are compositions.

Modules are products.

---

# 9.2 Component Hierarchy

Every interface follows the same architectural hierarchy.

```text
Academy Shell
      ↓
Navigation Layer
      ↓
Primary Modules
      ↓
Secondary Modules
      ↓
Micro Components
      ↓
Interactive Elements
```

No interface may violate this hierarchy.

---

# 9.3 Academy Shell

## Purpose

The permanent operating environment.

Every page exists inside the Academy Shell.

Contains

* Background System
* Orb Navigation
* Global Search
* User Menu
* Campus Identity
* Signal Center

The Academy Shell should remain visually consistent throughout the platform.

---

# 9.4 Primary Modules

Primary Modules communicate the most important information.

Examples

* Identity Module
* Guild Module
* Mission Module
* Portfolio Module
* Discover Module
* Dashboard Module

These modules own the page.

Everything else supports them.

---

# 9.5 Secondary Modules

Secondary Modules provide supporting information.

Examples

* Skill Module
* Statistics Module
* Achievement Module
* Activity Module
* Timeline Module
* Event Module
* Resource Module

Secondary Modules should never visually overpower Primary Modules.

---

# 9.6 Micro Components

Micro Components are reusable UI elements.

Examples

Buttons

Input Fields

Dropdowns

Badges

Tags

Progress Bars

Tabs

Search Fields

Checkboxes

Icons

Micro Components never establish their own visual identity.

They inherit the language of the parent module.

---

# 9.7 Module Anatomy

Every module follows the same internal structure.

```text
Module Header

↓

Identity

↓

Primary Content

↓

Supporting Content

↓

Actions

↓

Metadata
```

Users should recognize this rhythm throughout the platform.

---

# 9.8 Identity Module

## Purpose

Represents the student's professional identity.

Contains

* Profile
* Name
* University
* Department
* Level
* XP
* Skills
* Guild
* Availability
* Social Links
* Portfolio Shortcut

Behavior

* Expand
* Collapse
* Dock into Guild
* Display progression
* Display achievements

Priority

Highest.

The Identity Module defines the student.

---

# 9.9 Guild Module

Purpose

Represents collaborative organizations.

Contains

Guild Identity

Description

Leader

Members

Open Roles

Active Missions

Guild Reputation

Technology Stack

Behavior

Expandable

Recruitment

Mission linking

Member management

---

# 9.10 Mission Module

Purpose

Represents collaborative projects.

Contains

Mission Title

Objectives

Timeline

Difficulty

Roles Needed

Progress

Repositories

Documents

Mentors

Behavior

Mission tracking

Status updates

Progress visualization

Team assignment

---

# 9.11 Portfolio Module

Purpose

Represents the student's body of work.

Contains

Projects

Research

Publications

Case Studies

Media

Certificates

GitHub

Live Links

Behavior

Filtering

Sorting

Preview

Expansion

---

# 9.12 Discover Module

Purpose

Help users discover opportunities.

Contains

Students

Guilds

Projects

Hackathons

Events

Mentors

Behavior

Filtering

Recommendations

Advanced Search

Infinite Exploration

---

# 9.13 Achievement Module

Purpose

Display meaningful accomplishments.

Contains

Achievements

Badges

Awards

Hackathons

Certifications

Recognition

Behavior

Timeline

Grouping

Filtering

Progress display

---

# 9.14 Activity Module

Purpose

Shows recent activity.

Contains

Project Updates

Guild Updates

Achievements

Signals

Behavior

Chronological

Compact

Easy scanning

---

# 9.15 Statistics Module

Purpose

Summarize progression.

Contains

XP

Level

Projects

Guilds

Contribution

Skills

Followers (if introduced)

Behavior

Visualization

Comparison

Progress tracking

---

# 9.16 Signal Module

Purpose

Central communication hub.

Contains

Notifications

Invitations

Mentions

Updates

Announcements

Behavior

Read

Unread

Archive

Grouping

Priority

---

# 9.17 Component States

Every module supports:

Default

Hover

Focused

Selected

Loading

Empty

Error

Disabled

Expanded

Collapsed

No component should invent additional states without justification.

---

# 9.18 Responsive Rules

Modules resize.

They do not redesign.

Desktop

Tablet

Mobile

should share the same architectural identity.

Only layout changes.

Never behavior.

---

# 9.19 Accessibility

Every module must support:

Keyboard navigation

Screen readers

Touch interaction

Reduced motion

High contrast

Accessibility is part of the module—not an enhancement.

---

# 9.20 Claude Assembly Rules

Before generating any page:

Step 1

Identify the page objective.

↓

Step 2

Select the required Primary Modules.

↓

Step 3

Select supporting Secondary Modules.

↓

Step 4

Choose required Micro Components.

↓

Step 5

Assemble the layout.

↓

Step 6

Validate against the Design Constitution.

Claude must never begin by arranging random cards.

It must assemble modules.

---

# 9.21 Example Assembly

Example

Profile Page

↓

Identity Module

↓

Portfolio Module

↓

Skill Module

↓

Achievement Module

↓

Activity Module

↓

Statistics Module

↓

Signal Summary

Every page in UGinium should be expressible as a list of modules.

---

# 9.22 Review Checklist

Before implementation verify:

□ Is every module reusable?

□ Does every module have a clear purpose?

□ Is there unnecessary duplication?

□ Can this module appear elsewhere?

□ Does the hierarchy remain obvious?

□ Does the module follow Academy architecture?

□ Can another page reuse this component?

If any answer is "No", redesign the module.

---

# 9.23 Non-Negotiable Rules

Never design pages first.

Always design modules first.

Never create one-off components.

Never duplicate existing functionality.

Every component belongs to the Academy.

Every page is a composition of modules.

Consistency is the foundation of scalability.

---

# End of Chapter 09

The next chapter defines the **Academy Layout & Spatial System**, establishing the grid, spacing, alignment, responsive behavior, whitespace philosophy, and composition rules that govern every screen. This ensures that every module not only looks consistent but also occupies space with the same architectural precision across the entire platform.
