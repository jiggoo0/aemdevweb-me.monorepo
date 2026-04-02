# Project Overview: Monorepo Excellence

This project is a high-standard Monorepo architecture built with **Turborepo** and **pnpm**, designed for scalability, shared logic, and high-performance SEO strategies. It employs a "Consolidated Database" approach and a specialized SEO engine for local search dominance across 77 provinces.

## 🏗️ Core Infrastructure Mandates

### 🗄️ Consolidated Database (Supabase)
- **Single Source of Truth:** All applications (`@repo/web`, `@repo/me`, `@repo/unlink`) share a single Supabase project.
- **Schema Management:** Database schemas, types, and migrations are managed within `@repo/db`.
- **Isolation:** Use Row Level Security (RLS) and logical separation (e.g., app-specific schemas or prefixes) to maintain data isolation where necessary.

### 🚀 SEO Brand Identity Engine (@repo/seo)
- **Unified Identity:** All brand constants, metadata templates, and SEO schemas are centralized in `@repo/seo`.
- **77 Provinces Strategy:** The SEO engine is optimized for local SEO dominance, mapping entities to Thai provinces dynamically.
- **Semantic Integrity:** All generated content must maintain semantic consistency to satisfy AI search agents (SearchGPT, Google AI).

## Main Technologies
- **Framework:** Next.js 16.2+ (App Router)
- **Library:** React 19.2+
- **Monorepo Tooling:** Turborepo, pnpm Workspaces
- **Styling:** Tailwind CSS 4+
- **Database/Backend:** Supabase (PostgreSQL), Vercel Blob
- **Validation:** Zod
- **Documentation/Content:** MDX

## Architecture Highlights
- **`apps/`**: Contains the main consumer applications.
  - `@repo/web`: The main agency hub and SEO template engine.
  - `@repo/me`: Identity, portfolio, and personal branding site.
  - `@repo/unlink`: SaaS/Portal for back-office management and lead tracking.
- **`packages/`**: Shared logic and UI components.
  - `@repo/db`: Centralized Supabase client and database logic.
  - `@repo/seo`: Shared SEO engine and brand identity constants.
  - `@repo/ui`: Shared React component library.
  - `@repo/core`: Common utilities and global types.

---

## Building and Running

The project uses `pnpm` and `turbo` for unified task management.

### Key Commands
- **Install Dependencies:** `pnpm install`
- **Development Mode:** `pnpm dev` (Runs all apps in parallel)
- **Build All Apps:** `pnpm build`
- **Lint All Apps:** `pnpm lint`
- **Type Checking:** `pnpm check-types`
- **Format Code:** `pnpm format`

### Specialized Maintenance Scripts
Located in `next-monorepo/scripts/`:
- **Auditor:** `./scripts/monorepo-integrity-auditor.sh` (Checks for circular deps, version mismatches, and boundary violations)
- **Chaos Simulation:** `./scripts/monorepo-chaos-simulation.sh --all` (Injects failures for testing system resilience)
- **Standardizer:** `./scripts/monorepo-standardizer.sh` (Enforces unified versions of React, Next, and TS across the workspace)
- **Cleanup:** `./scripts/monorepo-cleanup.sh` (Removes backup files and temporary artifacts)

---

## Development Conventions

- **Separation of Concerns:** Keep business logic in `packages/` and UI-specific logic in `apps/`.
- **Zero-Warning Policy:** All changes must pass the `monorepo-integrity-auditor.sh` without warnings.
- **Semantic Naming:** Follow the `@repo/*` naming convention for all internal packages and apps.
- **Server-First:** Prefer React Server Components (RSC) for data fetching to ensure optimal performance and SEO.
- **Async APIs:** Always `await` async dynamic APIs (like `params` and `searchParams`) in Next.js 15+ components.
- **Identity Integrity:** Use `@repo/seo` for all brand-related metadata to maintain a consistent "Signature Identity".
