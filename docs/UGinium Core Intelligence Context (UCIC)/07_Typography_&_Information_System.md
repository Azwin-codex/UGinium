# UGinium Core Intelligence Context (UCIC)

Version 1.0

---

# CHAPTER 07

# Typography & Information System Specification

---

## Purpose

Typography is the voice of the Academy.

It establishes hierarchy, communicates importance, improves readability, and reinforces the professional identity of UGinium.

Typography should never exist as decoration.

It exists to communicate information with maximum clarity.

Every piece of text should have a defined purpose.

Every purpose should have a defined typographic role.

---

# 7.1 Typography Philosophy

UGinium typography should feel:

Professional

Confident

Modern

Technical

Calm

Highly Readable

Every screen should remain readable at a glance.

Users should never struggle to identify the most important information.

Typography should create rhythm.

Not noise.

---

# 7.2 Font Roles

UGinium uses three font categories.

---

## Primary UI Font

Purpose

Used throughout the application.

Applications

Navigation

Forms

Buttons

Cards

Descriptions

Tables

Dialogs

Properties

Neutral

Readable

Modern

Excellent at small sizes

Recommended Fonts

Inter

Geist

SF Pro Display (Apple ecosystem)

Only one primary UI font should be active across the entire application.

---

## Display Font

Purpose

Large marketing and branding content.

Applications

Landing Page

Hero Sections

Major Headings

Campus Showcase

Properties

Elegant

Architectural

Premium

Modern

Recommended

General Sans

Satoshi

Clash Display

Display fonts must never be used for body text.

---

## Numeric Font

Purpose

Progression data.

Applications

Levels

XP

Statistics

Contribution

Leaderboards

Analytics

Properties

Monospaced

Aligned digits

Technical appearance

Recommended

Geist Mono

JetBrains Mono

IBM Plex Mono

Numbers should communicate precision.

---

# 7.3 Information Hierarchy

Every interface follows the same hierarchy.

```text
Page Title

↓

Section Title

↓

Module Title

↓

Primary Information

↓

Supporting Information

↓

Metadata

↓

Actions
```

Users should naturally scan information from top to bottom.

Hierarchy must never be ambiguous.

---

# 7.4 Heading System

Each heading has a dedicated purpose.

### Display XL

Purpose

Landing Hero

Marketing

Campus Introduction

Never used inside application modules.

---

### Display L

Purpose

Major Page Titles

Academy Core

Discover

Guilds

Profile

---

### Heading L

Purpose

Primary Section Titles

Examples

Projects

Achievements

Skills

Portfolio

---

### Heading M

Purpose

Module Titles

Examples

Experience

Education

Current Guild

Mission Progress

---

### Heading S

Purpose

Small Sections

Lists

Cards

Statistics

---

# 7.5 Body Text

Body typography communicates information.

Use:

Body Large

Body Medium

Body Small

Paragraphs should remain concise.

Long walls of text reduce usability.

Interfaces are scanned.

Not read like books.

---

# 7.6 Labels

Labels organize information.

Examples

Level

XP

Skills

University

Department

Status

Availability

Labels should

Use uppercase sparingly.

Increase letter spacing slightly.

Remain visually secondary.

Never compete with content.

---

# 7.7 Numeric Hierarchy

Numbers are one of UGinium's strongest visual identifiers.

The following values deserve emphasis.

Level

XP

Project Count

Guild Count

Achievements

Contribution Score

Statistics

Numbers should generally appear larger than surrounding labels.

Progression is communicated visually before it is read.

---

# 7.8 Button Typography

Buttons should use concise action-oriented language.

Preferred

Join Guild

Create Mission

View Profile

Save Changes

Explore Projects

Avoid

Click Here

Proceed

Continue

Submit Form

Buttons should clearly communicate outcomes.

---

# 7.9 Text Alignment

Use left alignment for almost all textual content.

Right alignment may be used for

Statistics

Numerical comparison

Financial data

Center alignment should be reserved for

Landing Pages

Empty States

Major Success Screens

Never center long paragraphs.

---

# 7.10 Reading Width

Maximum comfortable paragraph width

Approximately 60–75 characters.

Modules should avoid extremely wide text blocks.

Good typography improves perceived quality.

---

# 7.11 Information Density

Not every module requires the same amount of information.

High-priority modules

More whitespace.

Larger typography.

Clear hierarchy.

Secondary modules

Compact.

Supporting.

Minimal.

Hierarchy should always remain obvious.

---

# 7.12 Accessibility

Typography must satisfy

Minimum readable sizes.

Proper line height.

Accessible contrast.

Scalable layouts.

Responsive resizing.

Avoid relying on thin font weights.

Readability always takes priority.

---

# 7.13 Developer Tokens

Typography must be implemented using reusable tokens.

Examples

```text
font.display

font.ui

font.numeric

text.display-xl

text.heading-l

text.heading-m

text.body-l

text.body-m

text.caption

tracking.label

leading.body
```

No component should define typography independently.

---

# 7.14 Claude Rules

When generating interfaces:

Never invent arbitrary font sizes.

Never mix multiple UI fonts.

Never use display fonts inside application content.

Always prioritize readability.

Always establish a clear visual hierarchy.

Numbers should communicate progression.

Typography should feel calm and intentional.

---

# 7.15 Review Checklist

Before implementation verify:

□ Typography hierarchy is clear.

□ Primary information is immediately visible.

□ Numeric information stands out appropriately.

□ Labels remain secondary.

□ Paragraph width is readable.

□ Font usage is consistent.

□ Accessibility requirements are satisfied.

---

# 7.16 Non-Negotiable Rules

Typography communicates structure.

Hierarchy communicates importance.

Whitespace improves readability.

Numbers communicate progression.

Readability always takes priority over artistic expression.

Typography should remain timeless.

The Academy should still feel premium five years from now.

---

# End of Chapter 07

The next chapter defines the complete Motion & Interaction Specification, including animation timing, easing, cursor behavior, module transitions, Orb interactions, navigation choreography, loading sequences, feedback systems, and interaction tokens.
