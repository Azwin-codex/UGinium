# UGinium Core Intelligence Context (UCIC)

Version 1.0

---

# CHAPTER 06

# Color & Material System Specification

---

## Purpose

The Color & Material System defines the visual foundation of UGinium.

Unlike conventional design systems where color is used primarily for branding, UGinium uses color to communicate structure, interaction, identity, and meaning.

The Academy is defined first by its materials.

Color exists to support those materials—not replace them.

Every color token must have a purpose.

Every purpose must have a token.

---

# 6.1 Design Philosophy

Color should never be the first thing users notice.

Architecture should.

Materials should.

Hierarchy should.

Only after these should color reinforce meaning.

The interface should feel premium because of restraint rather than saturation.

---

# 6.2 Color Hierarchy

UGinium follows a strict four-layer hierarchy.

```
Academy Materials
        ↓
Campus Identity
        ↓
Interaction States
        ↓
Semantic Feedback
```

Higher layers always take precedence.

Campus colors must never override semantic colors.

---

# 6.3 Material Palette (Immutable)

The following tokens belong to the Academy itself and **cannot** be modified by universities.

### Surface 950

**Token:** `surface.950`

**Purpose**

Primary application background.

**Usage**

* App shell
* Background canvas
* Empty space

**Never Use**

* Buttons
* Cards
* Hover states

---

### Surface 900

**Token:** `surface.900`

**Purpose**

Primary workspace.

**Usage**

* Main content area
* Dashboard background
* Large panels

---

### Surface 800

**Token:** `surface.800`

**Purpose**

Primary modules.

**Usage**

* Identity Module
* Guild Module
* Mission Module

---

### Surface 700

**Token:** `surface.700`

**Purpose**

Secondary interactive surfaces.

**Usage**

* Dropdowns
* Menus
* Floating panels

---

### Border Primary

**Token:** `border.default`

Purpose

Structural separation.

Never decorative.

Opacity should remain subtle.

---

### Border Active

**Token:** `border.active`

Used only when a module gains focus or selection.

---

# 6.4 Text Hierarchy

### Text Primary

Token

`text.primary`

Purpose

Primary information.

Examples

Names

Titles

Levels

Mission names

---

### Text Secondary

Token

`text.secondary`

Purpose

Descriptions

Metadata

Supporting information

---

### Text Muted

Token

`text.muted`

Purpose

Labels

Hints

Inactive information

---

# 6.5 Campus Theme Tokens

Every university receives its own derived theme.

Only these tokens are replaceable.

```
campus.primary

campus.secondary

campus.energy

campus.highlight

campus.glow

campus.banner

campus.crest
```

Everything else remains identical.

---

# 6.6 Campus Rules

Campus colors may influence:

Buttons

Selection

Orb

Hover accents

Charts

Progress indicators

Loading accents

Certificates

Campus branding

Campus colors must never modify:

Layout

Module construction

Typography

Spacing

Geometry

Motion

Component hierarchy

---

# 6.7 Interaction Tokens

Every interaction state has its own token.

Hover

`state.hover`

Focus

`state.focus`

Pressed

`state.pressed`

Disabled

`state.disabled`

Loading

`state.loading`

Selected

`state.selected`

Interaction colors should always derive from the current Campus theme.

---

# 6.8 Semantic Tokens

Semantic colors are universal.

Universities cannot override them.

### Success

Purpose

Successful completion.

Examples

Mission completed.

Guild joined.

Profile updated.

---

### Warning

Purpose

Incomplete information.

Pending action.

Upcoming deadline.

---

### Danger

Purpose

Errors.

Critical actions.

Deletion.

Validation failures.

---

### Information

Purpose

System updates.

Announcements.

Educational tips.

---

# 6.9 Progression Tokens

Progression has dedicated colors.

These tokens belong to UGinium—not the university.

Examples

XP

Levels

Achievements

Legendary

Milestones

Contribution

Recognition

Progression should always remain visually consistent across every Campus.

---

# 6.10 Material Philosophy

Every interface should resemble precision hardware.

Materials should feel

Graphite

Titanium

Ceramic

Machined surfaces

Never resemble

Plastic

Toy interfaces

Glossy acrylic

RGB gaming setups

Overly reflective glass

---

# 6.11 Lighting Rules

Lighting communicates interaction.

Allowed

Hover glow

Orb energy

Selection

XP gain

Signals

Forbidden

Constant neon

Large background glow

Animated rainbow effects

Random lighting

Restraint communicates quality.

---

# 6.12 Color Ratios

Approximate visual distribution.

Academy Materials

≈ 80%

Campus Identity

≈ 12%

Interaction

≈ 5%

Semantic Feedback

≈ 3%

The interface should always feel grounded in the Academy materials.

---

# 6.13 Accessibility

Every Campus theme must satisfy WCAG AA minimum contrast.

Text always takes priority over branding.

No Campus color may reduce readability.

If a university's official color fails accessibility, a derived accessible variant must be used.

---

# 6.14 Developer Tokens

Every color token must exist in:

Figma Variables

↓

Design Tokens

↓

CSS Variables

↓

Tailwind Theme

↓

React Components

No hardcoded colors are permitted inside production components.

---

# 6.15 Claude Rules

When generating interfaces:

Never invent new colors.

Never create gradients unless specified.

Never use multiple accent colors in one module.

Always derive accents from the Campus theme.

Always use semantic colors for feedback.

Always preserve the Academy material hierarchy.

---

# 6.16 Review Checklist

Before implementation verify:

□ Materials dominate the interface.

□ Campus colors remain secondary.

□ Semantic colors are consistent.

□ Interaction states are distinguishable.

□ Contrast passes accessibility.

□ No hardcoded colors exist.

□ Visual hierarchy remains clear.

---

# End of Chapter 06

The next chapter defines the complete Typography & Information System, including font families, hierarchy, spacing, readability, numeric systems, developer tokens, and implementation standards.
