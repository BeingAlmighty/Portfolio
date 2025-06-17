# Digital Agency Website

## Overview

This is a modern digital agency website built with React, Express.js, and TypeScript. The application features a sleek, dark-themed frontend with smooth scrolling animations, parallax effects, and modern UI components. The backend is set up with Express and includes authentication infrastructure using Drizzle ORM with PostgreSQL.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for complex animations and scroll effects
- **Smooth Scrolling**: Lenis for buttery smooth scroll experience
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple
- **Development**: Hot reload with tsx for server-side development

### Component Structure
- **Layout Components**: Navbar, Hero, Services, Projects, About, Contact, Footer
- **UI Components**: Comprehensive set of reusable components from Shadcn/ui
- **Animations**: Custom scroll-triggered animations and parallax effects
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Key Components

### Frontend Components
1. **Hero Section**: Full-screen parallax hero with scroll-triggered zoom effects
2. **Navbar**: Auto-hiding navigation with smooth scroll section highlighting
3. **Services**: Animated cards with flip-style hover effects
4. **Projects**: Portfolio showcase with hover animations
5. **Contact**: Form with toast notifications and validation
6. **Smooth Scroll**: Lenis integration for enhanced scrolling experience

### Backend Components
1. **Express Server**: Main application server with middleware setup
2. **Route Handler**: Centralized routing system with API prefix
3. **Storage Layer**: Abstract storage interface with in-memory implementation
4. **Database Schema**: User authentication schema with Drizzle ORM
5. **Session Management**: PostgreSQL-backed session storage

### Database Schema
- **Users Table**: Basic user authentication with username and password fields
- **Migration Support**: Drizzle Kit for database migrations and schema management

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **Express Routing**: Requests routed through centralized route handler
3. **Storage Layer**: Business logic interacts with storage interface
4. **Database Operations**: Drizzle ORM handles PostgreSQL interactions
5. **Response Handling**: JSON responses with proper error handling
6. **Client Updates**: React Query manages cache updates and UI re-renders

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Libraries**: Radix UI primitives, Lucide React icons
- **Animation**: Framer Motion, Embla Carousel
- **Utilities**: Class Variance Authority, clsx, date-fns

### Backend Dependencies
- **Database**: Drizzle ORM, Neon Database driver
- **Validation**: Zod for schema validation and type safety
- **Session**: connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Build**: Vite with React plugin and runtime error overlay
- **Types**: TypeScript with strict configuration
- **Styling**: PostCSS with Tailwind CSS and Autoprefixer

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with hot reload
- **Backend**: tsx with automatic TypeScript compilation
- **Database**: PostgreSQL via Replit's built-in database module

### Production Build
- **Frontend**: Vite build with static asset optimization
- **Backend**: esbuild bundling for Node.js deployment
- **Database**: Production PostgreSQL with connection pooling
- **Deployment**: Autoscale deployment target on Replit

### Environment Configuration
- **Database**: Environment variable for DATABASE_URL
- **Sessions**: PostgreSQL-backed session store
- **Static Assets**: Served from dist/public directory

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- June 17, 2025: Updated website design and removed case studies
  - Made parallax images in Hero section fully responsive with optimized sizing and spacing for all devices
  - Removed case studies section from navbar and footer navigation
  - Replaced all cat emoji (🐱) usage with custom cat.jpeg SVG image in both FloatingChatBot and ContactSection
  - Implemented custom "Get Started" button animation with orange/white color scheme (bubble effect)
  - Enhanced parallax image responsiveness with better max-width constraints and improved image quality
  - Removed About section from footer quick links
  - Updated button styling with overflow hidden circular animation effect
  - Fixed import structure in FloatingChatBot component

- June 16, 2025: Enhanced responsive design and mobile navbar highlighting
  - Implemented responsive navbar with mobile hamburger menu
  - Enhanced section highlighting with device-specific intersection observer settings
  - Made all components fully responsive across mobile, tablet, and desktop
  - Improved mobile scrolling behavior and touch interactions
  - Fixed CSS import order issues

## Changelog

- June 15, 2025: Initial setup
- June 16, 2025: Complete responsive design implementation