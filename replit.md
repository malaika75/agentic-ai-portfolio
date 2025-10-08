# Portfolio Website - Replit Configuration

## Overview

This is a professional portfolio website for an Agentic AI Developer, built with NestJS as the backend framework and TailwindCSS for modern, vibrant frontend styling. The website showcases skills, projects (with embedded video demonstrations), blog posts, and contact information in a responsive, visually appealing design.

The application serves static HTML content through NestJS's ServeStaticModule, with TailwindCSS providing a bright, modern color scheme featuring gradients and interactive animations. The site is designed to be easily updatable with real content, featuring placeholder sections for projects, blogs, and media assets.

## Recent Changes (October 8, 2025)

- ✅ Created complete NestJS + TailwindCSS portfolio website from scratch
- ✅ Implemented all requested sections: Home, Skills, Projects (5 cards), Blogs (4 cards), Contact, Footer
- ✅ Configured bright, vibrant color scheme with gradient buttons and hover effects
- ✅ Added responsive navigation with mobile menu support
- ✅ Set up HTML5 video players for project demonstrations (ready for video files)
- ✅ Server configured on port 5000 with static file serving
- ✅ All content is placeholder-ready for easy updates

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Static HTML with TailwindCSS**: Single-page application (SPA) pattern using vanilla HTML served statically
- **Responsive Design**: Mobile-first approach using Tailwind's responsive utilities (sm, md, lg breakpoints)
- **Color Scheme**: Custom primary colors defined in Tailwind config - indigo (#6366f1), pink (#ec4899), and teal accent (#14b8a6)
- **Component Pattern**: Reusable Tailwind component classes defined in input.css (@layer components) for buttons, cards, and badges
- **Smooth Scrolling**: Anchor-based navigation with CSS scroll-smooth for section transitions
- **Build Process**: TailwindCSS CLI compiles input.css to styles.css, with watch mode for development

### Backend Architecture
- **NestJS Framework**: TypeScript-based Node.js server (v11.x)
- **Static File Serving**: ServeStaticModule serves the public directory at root path
- **Server Configuration**: Runs on port 5000, bound to 0.0.0.0 for Replit compatibility
- **Module Structure**: Single AppModule with minimal API controller setup (extensible for future API endpoints)
- **Module Resolution**: Uses "nodenext" for modern ES module compatibility

### Design Patterns
- **MVC-like Separation**: NestJS handles routing/serving, HTML contains presentation logic, CSS manages styling
- **Gradient-heavy UI**: Background and button gradients create vibrant visual appeal
- **Card-based Layout**: Project and blog sections use hoverable cards with transform animations
- **Utility-first CSS**: TailwindCSS classes applied directly in HTML for rapid development
- **Concurrent Development**: Build scripts run Tailwind watch alongside NestJS watch mode using concurrently

### Content Structure
- **Homepage**: Hero section with name, tagline, and introduction
- **Skills Section**: Technology badges for Python, OpenAI, LangChain, multi-agent systems, etc.
- **Projects Section**: Cards with descriptions, images, embedded HTML5 video players, and GitHub links (5 project slots)
- **Blogs Section**: Preview cards with titles, descriptions, and "Read more" buttons (3-4 posts)
- **Contact Section**: Social links (email, LinkedIn, GitHub) with optional CV download
- **Navigation**: Sticky top navigation with mobile hamburger menu

## External Dependencies

### Core Framework
- **@nestjs/core & @nestjs/common** (v11.x): Core NestJS framework for backend server
- **@nestjs/platform-express** (v11.x): Express.js adapter for HTTP handling
- **@nestjs/serve-static** (v5.x): Static file serving middleware

### Frontend Tooling
- **tailwindcss** (v3.4.x): Utility-first CSS framework
- **postcss** (v8.x): CSS transformation pipeline for Tailwind
- **autoprefixer** (v10.x): Automatic vendor prefixes for CSS compatibility

### Development Tools
- **typescript** (v5.7.x): TypeScript compiler with ES2023 target
- **ts-node**: TypeScript execution for development
- **concurrently** (v9.x): Run multiple npm scripts simultaneously (Tailwind watch + NestJS watch)
- **eslint** (v9.x) with typescript-eslint: Code linting and formatting
- **prettier** (v3.4.x): Code formatting

### Testing Framework
- **jest** (v30.x): Unit and integration testing
- **ts-jest**: TypeScript support for Jest
- **supertest**: HTTP assertion library for e2e tests

### Runtime Dependencies
- **reflect-metadata**: Required for NestJS decorators and dependency injection
- **rxjs** (v7.x): Reactive programming library used by NestJS

### Asset Requirements
- **Video Files**: Local video files for project demonstrations (served from public directory)
- **Images**: Placeholder images for projects and blog posts (served from public directory)
- **CV File**: Optional downloadable PDF resume (served from public directory)

### Build Configuration
- **Input CSS**: `src/styles/input.css` with Tailwind directives and custom components
- **Output CSS**: Compiled to `public/css/styles.css` (minified for production)
- **TypeScript Config**: ES modules with decorator support, strict null checks enabled
- **Content Paths**: Tailwind scans `./public/**/*.html` and `./src/**/*.{ts,html}` for class usage