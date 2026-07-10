# UGinium Database Architecture & Schema Specification (UDASS)

**Version:** 1.0

---

# Purpose

The **UGinium Database Architecture & Schema Specification (UDASS)** serves as the single source of truth for the backend architecture of UGinium.

While the **UGinium Core Intelligence Context (UCIC)** defines the product philosophy and the **UGinium Screen Architecture Specification (USAS)** defines the user interface, UDASS defines how every piece of data is structured, stored, secured, and related.

This document ensures that the database remains scalable, maintainable, secure, and production-ready throughout the lifetime of the platform.

The objective is not simply to create tables.

The objective is to build a robust data architecture capable of supporting thousands of students, Guilds, Missions, portfolios, and future platform expansion.

---

# Relationship with Other Documents

**UCIC**

Defines product philosophy.

↓

**USAS**

Defines screen architecture.

↓

**UDASS**

Defines backend data architecture.

All three documents together form the complete blueprint of UGinium.

---

# Database Philosophy

The database should prioritize:

* Scalability
* Data Integrity
* Security
* Performance
* Maintainability
* Extensibility
* Normalization
* Clear Relationships

Every entity should exist for a well-defined purpose.

Duplicate data should be avoided whenever possible.

Relationships should be explicit rather than implied.

---

# Database Design Principles

The database follows these principles:

* One responsibility per table.
* Normalize before optimizing.
* Use foreign keys to enforce relationships.
* Prefer UUIDs over sequential IDs.
* Never store derived values unless necessary.
* Design for future expansion.
* Keep business logic outside the database whenever possible.
* Every important action should be traceable.

---

# Database Architecture

The backend is divided into logical domains.

```text
Authentication
        │
        ▼
Campus System
        │
        ▼
Student Identity
        │
        ▼
Guild System
        │
        ▼
Mission System
        │
        ▼
Portfolio System
        │
        ▼
Progression System
        │
        ▼
Recognition System
        │
        ▼
Discovery & Search
        │
        ▼
Signals & Notifications
        │
        ▼
Settings
```

Each domain is independent but connected through well-defined relationships.

---

# Database Domains

The following domains make up Version 1.

## 01 Authentication

Responsible for:

* User Accounts
* Sessions
* Authentication
* Password Recovery
* Verification

---

## 02 Campus

Responsible for:

* Universities
* Departments
* Academic Programs

---

## 03 Student Identity

Responsible for:

* Student Profiles
* Skills
* Experience
* Education
* Social Links

---

## 04 Guild System

Responsible for:

* Guilds
* Members
* Roles
* Invitations
* Leadership

---

## 05 Mission System

Responsible for:

* Projects
* Tasks
* Members
* Deliverables
* Progress

---

## 06 Portfolio System

Responsible for:

* Projects
* Media
* Links
* Case Studies
* Technologies

---

## 07 Progression System

Responsible for:

* XP
* Levels
* Milestones
* Contribution

---

## 08 Recognition System

Responsible for:

* Achievements
* Badges
* Certificates
* Reputation

---

## 09 Discovery System

Responsible for:

* Search
* Recommendations
* Filtering
* Bookmarks

---

## 10 Signals

Responsible for:

* Notifications
* Announcements
* Invitations
* Updates

---

## 11 Settings

Responsible for:

* Preferences
* Privacy
* Theme
* Notification Settings

---

## Database Naming Standards

### Tables

Plural

Examples

```text
students

guilds

missions

projects

skills
```

---

### Columns

Snake Case

Examples

```text
created_at

updated_at

profile_image

guild_id
```

---

### Primary Keys

Every table uses

```text
id UUID PRIMARY KEY
```

---

### Foreign Keys

Use explicit names.

Example

```text
student_id

guild_id

mission_id

project_id
```

---

### Timestamps

Every major table includes:

```text
created_at

updated_at
```

Soft deletion should use:

```text
deleted_at
```

where appropriate.

---

# Entity Relationship Model

The complete Entity Relationship Diagram (ERD) should be developed before implementation.

Every table must belong to one domain.

Every relationship must be explicitly documented.

Many-to-many relationships should use junction tables.

---

# Security Standards

The database must support:

* Row Level Security (RLS)
* Role-Based Access Control (RBAC)
* Secure Authentication
* Input Validation
* Audit Logging

Security should be built into the schema rather than added later.

---

# Performance Standards

The schema should support:

* Proper indexing
* Efficient joins
* Pagination
* Full-text search
* Optimized queries
* Future caching strategies

Performance should scale with increasing student data.

---

# Future Expansion

The architecture should support future additions without redesign.

Potential expansions include:

* Recruiter Portal
* Faculty Portal
* AI Assistant
* Startup Incubator
* Research Marketplace
* Cross-Campus Collaboration
* Marketplace
* Mobile Applications

Future features should extend existing domains rather than replace them.

---

# Planned Tables (Version 1)

```text
Authentication
---------------
users
sessions
verification_tokens

Campus
---------------
campuses
departments

Student Identity
---------------
student_profiles
student_links
student_skills
student_experience
student_education

Guild
---------------
guilds
guild_members
guild_roles
guild_invitations

Mission
---------------
missions
mission_members
mission_roles
mission_updates

Portfolio
---------------
projects
project_media
project_links
project_skills

Progression
---------------
levels
xp_logs
milestones

Recognition
---------------
achievements
badges
student_badges
certificates

Discovery
---------------
bookmarks
search_history

Signals
---------------
notifications
notification_preferences

Settings
---------------
user_settings

Media
---------------
uploads

Audit
---------------
activity_logs
```

Approximately **35–45 production tables** are expected for Version 1.

---

# Documentation Roadmap

This document will expand in the following order:

**Chapter 01**

Database Philosophy

↓

**Chapter 02**

Entity Relationship Model (ERD)

↓

**Chapter 03**

Authentication Schema

↓

**Chapter 04**

Campus Schema

↓

**Chapter 05**

Student Identity Schema

↓

**Chapter 06**

Guild Schema

↓

**Chapter 07**

Mission Schema

↓

**Chapter 08**

Portfolio Schema

↓

**Chapter 09**

Progression Schema

↓

**Chapter 10**

Recognition Schema

↓

**Chapter 11**

Discovery Schema

↓

**Chapter 12**

Signals Schema

↓

**Chapter 13**

Settings Schema

↓

**Chapter 14**

Security (RLS & RBAC)

↓

**Chapter 15**

Indexes, Views & Functions

---

# Non-Negotiable Rules

Every table must have a clear responsibility.

Every relationship must be documented.

Every query should be optimized.

Every schema change should preserve backward compatibility whenever possible.

Security is mandatory.

Scalability is mandatory.

Maintainability is mandatory.

The database should evolve alongside the product while preserving the integrity of the Academy.

---

# End of Introduction

The next chapter begins with the **Entity Relationship Model (ERD)**, defining every entity, relationship, cardinality, and dependency that forms the foundation of the UGinium database.
