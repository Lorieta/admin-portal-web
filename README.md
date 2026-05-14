# Zynappse Ticketing System — Admin Dashboard

> **Role:** Admin (Zynappse team leads, project managers, IT heads)
> **Access level:** Full — all tickets, all clients, all developers, all settings
> **Route prefix:** `/admin/*`

---

## Getting Started — Running Locally

### Prerequisites

Make sure you have the following installed before you begin:

| Tool    | Version            | Notes                                                    |
| ------- | ------------------ | -------------------------------------------------------- |
| Node.js | 18.17 or higher    | [Download](https://nodejs.org) — LTS version recommended |
| npm     | 9+                 | Comes with Node.js                                       |
| Git     | Any recent version | [Download](https://git-scm.com)                          |

> **No database setup needed for now.** The team is focused on UI implementation first. Mock data will be used in place of a real database connection.

---

### 1. Clone the repository

This project uses **SourceTree** for version control. Open SourceTree and clone the repository from the team's remote source (GitLab).

Steps in SourceTree:

1. Open SourceTree
2. Click **Clone** (or **New → Clone from URL**)
3. Paste the repository URL
4. Choose your local destination folder (e.g. `ticketing-admin`)
5. Click **Clone**

Once cloned, open the project folder in your code editor (VS Code recommended).

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Set up environment variables

Create a `.env.local` file in the root of the project:

```bash
cp .env.example .env.local
```

For UI development, you only need these variables:

```env
NEXTAUTH_SECRET=any-random-string-for-local-dev
NEXTAUTH_URL=http://localhost:3000
```

Leave all other variables (database, Pusher, SMTP) empty for now — they are only needed when backend integration begins.

---

### 4. Run the development server

```bash
npm run dev
```

The app will be running at:

```
http://localhost:3000
```

---

### 5. Logging in (mock auth)

Since the backend is not connected yet, use the following mock credentials to access the admin portal during UI development:

| Field    | Value                |
| -------- | -------------------- |
| Email    | `admin@zynappse.com` |
| Password | `admin123`           |
| Role     | `admin`              |

> These credentials are for **local development only**. They will be replaced with real authentication once the backend is connected.

---

### 6. What you should see

After logging in you will land on `/admin/dashboard`. The page will display with mock/static data so you can build and style all components without needing a live database.

---

### Useful commands

| Command          | Description                         |
| ---------------- | ----------------------------------- |
| `npm run dev`    | Start the local development server  |
| `npm run build`  | Build the project for production    |
| `npm run lint`   | Run ESLint to check for code issues |
| `npm run format` | Run Prettier to format code         |

---

### Recommended VS Code extensions

- **ES7+ React/Redux/React-Native snippets** — faster component scaffolding
- **Prettier** — consistent code formatting
- **ESLint** — catch errors early

---

## Overview

The Admin Dashboard is the command center of the Zynappse Ticketing System. It is accessible only to users with the `admin` role. Admins have full visibility over every ticket from every client, can assign tickets to developers, configure SLA rules, manage user accounts, and view system-wide analytics.

This is an internal-facing portal — clients and developers do not have access to any `/admin` routes.

---

## Tech Stack

| Layer        | Technology                  |
| ------------ | --------------------------- |
| Framework    | Next.js 14+ (App Router)    |
| Language     | JavaScript                  |
| Styling      | Sass                        |
| Auth         | NextAuth.js (role: `admin`) |
| Database ORM | Mongoose                    |
| Database     | MongoDB                     |
| Real-time    | Server-Sent Events          |
| Email        | Nodemailer                  |

---

## Screens & Routes

### Authentication

| Route              | Screen          | Description                                                   |
| ------------------ | --------------- | ------------------------------------------------------------- |
| `/login`           | Login           | Email + password. Redirects to `/admin/dashboard` on success. |
| `/forgot-password` | Forgot password | Sends reset link to admin email.                              |

### Dashboard

| Route              | Screen          | Description                                                                                                   |
| ------------------ | --------------- | ------------------------------------------------------------------------------------------------------------- |
| `/admin/dashboard` | Admin dashboard | System-wide metrics, SLA breach alerts, developer workload, recent tickets, tickets by client, activity feed. |

### Queue

| Route           | Screen               | Description                                                                                                    |
| --------------- | -------------------- | -------------------------------------------------------------------------------------------------------------- |
| `/admin/queue`  | Ticket queue         | All tickets from all clients. Filterable by client, system, developer, priority, status. Bulk assign.          |
| `/tickets/[id]` | Ticket detail + chat | Full ticket view with audit trail, internal notes, SLA panel, reassign controls, override priority and status. |

### Management

| Route              | Screen              | Description                                                                                              |
| ------------------ | ------------------- | -------------------------------------------------------------------------------------------------------- |
| `/admin/clients`   | Client management   | List of all client accounts. Add new client. View per-client systems and ticket history.                 |
| `/admin/systems`   | Systems registry    | Add, edit, archive systems per client. Each system has a name, short code, and description.              |
| `/admin/users`     | User management     | All users (clients, developers, admins). Assign roles, invite by email, deactivate accounts.             |
| `/admin/analytics` | Analytics & reports | Charts: ticket volume over time, by client, by system, by priority. SLA compliance rate. Export PDF/CSV. |
| `/admin/settings`  | Settings            | SLA config per priority level, notification rules, system-wide preferences.                              |

---

## Dashboard Widgets

The `/admin/dashboard` page must include the following 6 widgets:

### 1. Top metric cards

Six stat cards displayed in a row at the top of the page:

- **All open** — total number of open tickets across all clients
- **Critical** — tickets tagged as Critical priority
- **SLA at risk** — tickets approaching their SLA deadline
- **Resolved today** — tickets closed in the current day
- **Avg. resolve time** — average resolution time this week (in hours)
- **Unassigned** — tickets not yet assigned to any developer

### 2. SLA breach alerts

A dedicated panel showing tickets that are closest to breaching their SLA. Each row shows:

- Ticket ID and title
- Client name
- Time remaining before breach (countdown)
- Quick "Assign" or "View" action button

Color coding: red = less than 1 hour, amber = 1–4 hours.

> **SLA (Service Level Agreement)** is the time limit Zynappse has committed to for responding to and resolving a ticket. SLA limits are configured per priority level in `/admin/settings`. A breach means the time limit was missed.

### 3. Developer workload

A list of all active developers with:

- Avatar initials
- Ticket count
- Progress bar (fills red when overloaded, e.g. 8+ tickets)

Helps admin redistribute work before any developer gets overwhelmed.

### 4. Recent tickets

The last 5–10 submitted tickets with priority color strips, ticket ID, title, client name, and time submitted. Quick link to the full queue.

### 5. Open tickets by client

Horizontal bar chart showing which clients have the most open tickets. Each client has a unique color (from the client avatar color system). Helps admin spot neglected clients.

### 6. Activity feed

Live log of system events:

- New ticket submitted
- Developer replied on a ticket
- Ticket resolved or closed
- SLA warning triggered
- New client or user added

---

## SLA Configuration

SLA is configured in `/admin/settings`. The admin sets two time limits per priority level:

| Priority | What to configure               |
| -------- | ------------------------------- |
| Critical | Response time + Resolution time |
| High     | Response time + Resolution time |
| Medium   | Response time + Resolution time |
| Low      | Response time + Resolution time |

The system reads these values when a ticket is created to set the SLA deadline. The SLA timer starts the moment a ticket is submitted.

Default recommended values:

| Priority | Response        | Resolution      |
| -------- | --------------- | --------------- |
| Critical | 2 hours         | 8 hours         |
| High     | 4 hours         | 1 business day  |
| Medium   | 1 business day  | 3 business days |
| Low      | 3 business days | 1 week          |

---

## Ticket ID Format

All tickets use the format: `ZYN-YYYY-XXXX`

- `ZYN` — fixed prefix
- `YYYY` — 4-digit year of submission
- `XXXX` — auto-incremented sequence number, zero-padded to 4 digits

Example: `ZYN-2026-0041`

---

## Role & Access Control

This portal is protected by Next.js middleware. On every request, the middleware checks the session role. If the user is not authenticated or does not have the `admin` role, they are redirected to `/login`.

```
middleware.ts
└── checks session role on every /admin/* route
    ├── role === 'admin' → allow
    └── anything else → redirect to /login
```

Admins can see and do everything:

- All tickets from all clients
- All developer accounts and workloads
- All client accounts and their systems
- Full ticket audit trails
- SLA configuration
- User creation and role assignment

---

## Priority & Status Color System

### Priority colors

| Priority | Color | Hex       |
| -------- | ----- | --------- |
| Critical | Red   | `#d2232a` |
| High     | Amber | `#BA7517` |
| Medium   | Teal  | `#0F6E56` |
| Low      | Gray  | `#5F5E5A` |

### Status colors

| Status      | Color      | Hex       |
| ----------- | ---------- | --------- |
| Open        | Gray       | `#5F5E5A` |
| In Progress | Blue       | `#185FA5` |
| Pending     | Amber      | `#854F0B` |
| Resolved    | Green      | `#3B6D11` |
| Closed      | Near Black | `#1a1a1a` |

### Role colors

| Role      | Color    | Hex       |
| --------- | -------- | --------- |
| Client    | Blue     | `#185FA5` |
| Developer | Purple   | `#534AB7` |
| Admin     | Dark Red | `#8a1820` |

---

## Key Components to Build

| Component              | Used in                                         |
| ---------------------- | ----------------------------------------------- |
| `MetricCard`           | Dashboard top row                               |
| `SLAAlertRow`          | SLA breach alerts panel                         |
| `DeveloperWorkloadBar` | Developer workload panel                        |
| `TicketRow`            | Queue table, recent tickets                     |
| `TicketDetailPanel`    | Ticket detail page (left panel)                 |
| `ChatThread`           | Ticket detail page (right panel)                |
| `InternalNoteInput`    | Chat — admin/developer only, hidden from client |
| `PriorityBadge`        | Ticket rows, detail page                        |
| `StatusBadge`          | Ticket rows, detail page                        |
| `SourceTag`            | Queue table (Client / Dev source)               |
| `AuditTrail`           | Ticket detail page — full action history        |
| `SLATimer`             | Ticket rows, SLA alerts panel                   |
| `ActivityFeedItem`     | Activity feed widget                            |
| `ClientBar`            | Open tickets by client chart                    |
| `ConfirmationModal`    | Resolve, close, escalate, deactivate actions    |

---

## Environment Variables

```env
NEXTAUTH_SECRET=any-random-string-for-local-dev
NEXTAUTH_URL=http://localhost:3000
```

---

## Folder Structure (suggested)

```
/app
  /admin
    /dashboard        → page.tsx
    /queue            → page.tsx
    /clients          → page.tsx, /[id]/page.tsx
    /systems          → page.tsx
    /users            → page.tsx
    /analytics        → page.tsx
    /settings         → page.tsx
  /tickets
    /[id]             → page.tsx (shared, renders admin view)
  /login              → page.tsx
  /forgot-password    → page.tsx
/components
  /admin              → admin-specific components
  /shared             → shared across all roles
  /ui                 → base UI primitives
/lib
  /auth.ts            → NextAuth config
  /sla.ts             → SLA calculation utilities
  /notifications.ts   → Notification dispatch
/middleware.ts        → Route protection by role
```

---

## Notes for Developers

- The `/tickets/[id]` route is **shared across all three roles** but renders different UI per role. Use the session role to conditionally show/hide controls (internal notes, resolve button, audit trail, etc.).
- SLA timers should be calculated server-side and stored in the database, not computed on the frontend — this prevents timer drift.
- Internal notes in the chat thread **must never be visible to clients**. Filter by `isInternal: true/false` at the API level, not just the UI level.
- Bulk assign in the queue should support selecting multiple tickets and assigning them to one developer in a single action.
- All destructive actions (close ticket, deactivate user, archive system) must go through a confirmation modal.

---

_Zynappse Ticketing System · Admin Dashboard · 2026 · Internal_
