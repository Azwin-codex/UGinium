# UGinium API Specification (UAS)

**Version:** 1.0

---

# Purpose

The **UGinium API Specification (UAS)** defines every backend interface used by the UGinium ecosystem.

It serves as the contract between the frontend, backend, mobile applications, and future third-party integrations.

While the **UGinium Database Architecture & Schema Specification (UDASS)** defines how data is stored, the API Specification defines how that data is securely accessed, modified, and exchanged.

Every endpoint within UGinium should follow this specification.

The objective is to create a secure, scalable, consistent, and developer-friendly API architecture.

---

# Relationship with Other Documents

**UCIC**

Defines product philosophy.

↓

**USAS**

Defines screen architecture.

↓

**UDASS**

Defines database architecture.

↓

**UAS**

Defines communication between the frontend and backend.

---

# API Philosophy

The API should be:

* RESTful
* Predictable
* Versioned
* Secure
* Performant
* Consistent
* Well Documented
* Easily Extensible

Endpoints should represent business resources rather than database tables.

The API exists to support the product—not expose the database.

---

# Architecture

```text
Frontend
      │
      ▼
Authentication Middleware
      │
      ▼
API Routes
      │
      ▼
Service Layer
      │
      ▼
Business Logic
      │
      ▼
Database
```

Business logic must never exist inside API routes.

Routes should remain lightweight.

---

# API Standards

## Base URL

```text
/api/v1
```

Future versions:

```text
/api/v2
```

Versioning ensures backward compatibility.

---

# Authentication

Authentication uses:

* JWT Access Tokens
* Refresh Tokens
* Secure Cookies
* Row Level Security
* Role-Based Access Control

Protected routes require authentication.

Public routes remain accessible without login.

---

# Standard HTTP Methods

| Method | Purpose           |
| ------ | ----------------- |
| GET    | Retrieve data     |
| POST   | Create resources  |
| PUT    | Replace resources |
| PATCH  | Update resources  |
| DELETE | Remove resources  |

Every endpoint should follow REST conventions.

---

# Standard Response Format

Successful responses:

```json
{
  "success": true,
  "message": "Operation completed successfully.",
  "data": {}
}
```

Error responses:

```json
{
  "success": false,
  "message": "Validation failed.",
  "errors": []
}
```

All endpoints should follow the same structure.

---

# Status Codes

| Code | Meaning               |
| ---- | --------------------- |
| 200  | Success               |
| 201  | Created               |
| 204  | No Content            |
| 400  | Bad Request           |
| 401  | Unauthorized          |
| 403  | Forbidden             |
| 404  | Not Found             |
| 409  | Conflict              |
| 422  | Validation Error      |
| 429  | Too Many Requests     |
| 500  | Internal Server Error |

Status codes should accurately represent outcomes.

---

# API Domains

The API is organized into logical modules.

```text
Authentication

Campus

Students

Profiles

Skills

Guilds

Missions

Projects

Portfolio

Progression

Recognition

Search

Notifications

Settings

Media

Admin
```

Each domain should have its own route group.

---

# Endpoint Structure

```text
/api/v1/auth

/api/v1/students

/api/v1/guilds

/api/v1/missions

/api/v1/projects

/api/v1/notifications
```

Endpoints should use plural resource names.

---

# Authentication API

```text
POST    /auth/register

POST    /auth/login

POST    /auth/logout

POST    /auth/refresh

POST    /auth/forgot-password

POST    /auth/reset-password

GET     /auth/me
```

---

# Student API

```text
GET     /students

GET     /students/{id}

PATCH   /students/{id}

DELETE  /students/{id}
```

---

# Profile API

```text
GET     /profiles/{id}

PATCH   /profiles/{id}

POST    /profiles/avatar

POST    /profiles/banner
```

---

# Skills API

```text
GET     /skills

POST    /skills

PATCH   /skills/{id}

DELETE  /skills/{id}
```

---

# Guild API

```text
GET     /guilds

POST    /guilds

GET     /guilds/{id}

PATCH   /guilds/{id}

DELETE  /guilds/{id}

POST    /guilds/{id}/join

POST    /guilds/{id}/leave

POST    /guilds/{id}/invite
```

---

# Mission API

```text
GET     /missions

POST    /missions

GET     /missions/{id}

PATCH   /missions/{id}

DELETE  /missions/{id}

POST    /missions/{id}/join

POST    /missions/{id}/complete
```

---

# Portfolio API

```text
GET     /projects

POST    /projects

GET     /projects/{id}

PATCH   /projects/{id}

DELETE  /projects/{id}
```

---

# Progression API

```text
GET     /xp

GET     /levels

GET     /milestones

GET     /contributions
```

---

# Recognition API

```text
GET     /achievements

GET     /badges

GET     /certificates

GET     /hall-of-legends
```

---

# Search API

```text
GET     /search

GET     /search/students

GET     /search/guilds

GET     /search/projects
```

---

# Notification API

```text
GET     /notifications

PATCH   /notifications/{id}

DELETE  /notifications/{id}
```

---

# Settings API

```text
GET     /settings

PATCH   /settings

PATCH   /settings/privacy

PATCH   /settings/theme
```

---

# Media API

```text
POST    /uploads

DELETE  /uploads/{id}

GET     /uploads/{id}
```

---

# Pagination Standard

List endpoints should support:

```text
?page=1

&limit=20

&sort=name

&order=asc
```

Cursor-based pagination may be introduced for high-volume resources.

---

# Filtering

Supported parameters:

```text
?search=

?department=

?campus=

?skill=

?level=

?status=
```

Filtering should remain consistent across resources.

---

# Security Standards

Every endpoint should enforce:

* Authentication
* Authorization
* Input Validation
* Rate Limiting
* CSRF Protection (where applicable)
* SQL Injection Protection
* XSS Prevention

Security is mandatory.

---

# Rate Limiting

Sensitive endpoints should apply limits.

Examples:

Login

Password Reset

Registration

Search

Media Upload

API abuse should be prevented.

---

# Validation

Every request should validate:

* Required fields
* Data types
* String lengths
* Email format
* URL format
* UUID format

Invalid requests should never reach business logic.

---

# File Upload Standards

Supported media:

* Profile Images
* Portfolio Images
* Certificates
* Project Assets

Validation includes:

* File Type
* File Size
* Virus Scanning (future)
* Storage Verification

---

# Error Handling

Errors should be:

Consistent

Descriptive

Actionable

Example:

```json
{
  "success": false,
  "message": "Guild name already exists.",
  "errors": [
    {
      "field": "name",
      "reason": "Duplicate value."
    }
  ]
}
```

---

# API Documentation Standards

Every endpoint should include:

* Description
* Authentication Requirements
* Request Parameters
* Request Body
* Response Body
* Error Responses
* Example Requests
* Example Responses

Documentation should remain synchronized with implementation.

---

# Future Expansion

Future API modules include:

* AI Services
* Recruiter API
* Faculty API
* Analytics API
* Public Portfolio API
* Research API
* Mobile API
* Third-Party Integrations
* Webhooks
* GraphQL Gateway

Future additions should extend the existing architecture.

---

# Documentation Roadmap

This specification expands in the following order:

```text
Chapter 01
API Philosophy

↓

Chapter 02
Authentication API

↓

Chapter 03
Student API

↓

Chapter 04
Campus API

↓

Chapter 05
Guild API

↓

Chapter 06
Mission API

↓

Chapter 07
Portfolio API

↓

Chapter 08
Progression API

↓

Chapter 09
Recognition API

↓

Chapter 10
Search API

↓

Chapter 11
Notification API

↓

Chapter 12
Media API

↓

Chapter 13
Admin API

↓

Chapter 14
Security Standards

↓

Chapter 15
OpenAPI Documentation
```

---

# Non-Negotiable Rules

Every endpoint must have a clear purpose.

Every response must follow the standard format.

Every request must be validated.

Every protected route must enforce authorization.

Every API should remain versioned.

Business logic belongs in the service layer.

The API should evolve without breaking existing clients.

Security, consistency, and maintainability take priority over convenience.

---

# End of Introduction

The next chapter begins with the **Authentication API**, defining user registration, login, session management, password recovery, email verification, JWT lifecycle, and authorization flows for UGinium.
