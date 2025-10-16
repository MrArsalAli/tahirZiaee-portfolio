# Tahir Ziaee Portfolio - Dark Futuristic Design

## Overview

This is a single-page portfolio website for Tahir Ziaee, a UI/UX designer and graphic artist. The project delivers a dark, ultra-modern, cinematic experience with motion-driven storytelling through scroll interactions. Built with React, TypeScript, and modern animation libraries, it showcases design work through an immersive, futuristic interface emphasizing creativity and intelligence at every scroll point.

The portfolio is structured as a narrative journey through sections: Hero (Creative Pulse), About (Mind Behind the Interface), Showcase (Work That Speaks), Interactive Parallax Experience, and Footer - each flowing seamlessly with parallax depth and scroll-triggered animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server with HMR (Hot Module Replacement)
- Client-side routing using Wouter (lightweight alternative to React Router)
- Path aliases configured (`@/` for client/src, `@shared/` for shared, `@assets/` for attached_assets)

**UI Component Strategy:**
- Shadcn/ui component library with Radix UI primitives (highly customizable, accessible components)
- Tailwind CSS for utility-first styling with custom design tokens
- Custom CSS variables for dark theme implementation (deep matte black #0A0A0A base)
- Component composition pattern using Radix Slot for flexible component APIs

**Animation & Interaction:**
- Framer Motion for declarative React animations (scroll-triggered reveals, parallax effects)
- GSAP with ScrollTrigger plugin for advanced scroll-based animations
- Custom cursor trail effect using Canvas API
- Scroll snap behavior for section-based navigation
- IntersectionObserver patterns via Framer Motion's useInView hook

**Design System:**
- Electric Cyan-Blue (#0DA2E7) as primary brand color with glow effects
- Typography: Space Grotesk and Inter fonts (loaded via Google Fonts)
- Glassmorphic cards with backdrop-filter blur effects
- Neon border animations on hover states
- Grain texture overlays for visual depth

**State Management:**
- TanStack Query (React Query) for server state management and caching
- React Context for cross-cutting concerns (Toast notifications, Tooltips)
- Local component state with useState/useRef hooks
- Custom hooks for reusable logic (useScrollTrigger, useIsMobile, useToast)

### Backend Architecture

**Server Framework:**
- Express.js for HTTP server and API routing
- TypeScript for type-safe server-side code
- Middleware pattern for request logging and error handling
- JSON body parsing and URL-encoded form data support

**Development Environment:**
- Vite middleware integration for HMR in development
- Separate build outputs (client to dist/public, server to dist)
- Environment-based configuration (NODE_ENV detection)
- Custom logging with timestamp formatting

**API Structure:**
- Routes prefixed with `/api` for clear separation
- RESTful endpoint organization via registerRoutes function
- Error handling middleware with status code normalization
- Request/response logging with JSON payload capture (truncated at 80 chars)

### Data Storage Solutions

**Database Configuration:**
- PostgreSQL as the primary database (configured via DATABASE_URL)
- Neon Serverless driver (@neondatabase/serverless) for connection pooling
- Drizzle ORM for type-safe database operations and schema management
- Schema-first approach with migrations stored in ./migrations directory

**Storage Abstraction:**
- IStorage interface defining CRUD contract
- MemStorage implementation for in-memory data (development/testing)
- User schema with UUID primary keys, unique username constraint
- Portfolio project schema with Zod validation (id, title, description, tags, image, category)
- Mock data for portfolio projects stored in shared schema

**Session Management:**
- connect-pg-simple for PostgreSQL-backed session storage capability
- Cookie-based session persistence strategy

### External Dependencies

**UI & Component Libraries:**
- Radix UI primitives (accordion, dialog, dropdown, popover, etc.) - 20+ headless components
- Shadcn/ui component system built on Radix primitives
- Embla Carousel for touch-friendly carousels
- CMDK for command palette interfaces
- Lucide React for icon system

**Animation & Visual Effects:**
- Framer Motion - declarative animations and scroll triggers
- GSAP (GreenSock) - advanced timeline animations and ScrollTrigger plugin
- Vaul - drawer/bottom sheet component

**Form & Validation:**
- React Hook Form - performant form state management
- Zod - TypeScript-first schema validation
- @hookform/resolvers - Zod integration with React Hook Form
- Drizzle-Zod - generate Zod schemas from Drizzle ORM tables

**Data Fetching:**
- TanStack Query (React Query v5) - server state management with caching
- Built-in fetch API wrapper with credential support

**Development Tools:**
- TypeScript compiler - type checking and IntelliSense
- ESBuild - server bundling for production
- TSX - TypeScript execution in development
- Replit-specific plugins (runtime error overlay, cartographer, dev banner)

**Database & ORM:**
- Drizzle ORM - type-safe SQL query builder
- Drizzle Kit - migration management
- @neondatabase/serverless - PostgreSQL driver optimized for serverless

**Styling:**
- Tailwind CSS - utility-first CSS framework
- PostCSS with Autoprefixer - CSS processing
- Class Variance Authority (CVA) - variant-based component styling
- clsx + tailwind-merge - className utilities

**Date & Time:**
- date-fns - modern date utility library (tree-shakeable alternative to Moment.js)

**Utility Libraries:**
- nanoid - unique ID generation
- @jridgewell/trace-mapping - source map utilities