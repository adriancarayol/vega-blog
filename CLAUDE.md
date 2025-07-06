# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
npm run dev        # Start development server with Turbopack (fast refresh)
npm run build      # Create production build
npm run start      # Start production server
npm run lint       # Run ESLint
```

## Architecture

This is a Next.js 15.3.5 blog project using the App Router architecture.

### Key Technical Decisions
- **App Router**: All routing through the `/app` directory
- **Server Components**: Components are server-rendered by default
- **TypeScript**: Strict mode enabled with ES2017 target
- **Styling**: Tailwind CSS v4 with PostCSS plugin approach
- **Path Aliases**: Use `@/*` for imports from root directory

### Project Structure
```
app/
├── layout.tsx     # Root layout with HTML structure and Geist fonts
├── page.tsx       # Home page (currently Next.js welcome page)
└── globals.css    # Global styles with Tailwind directives
```

### Important Configuration
- **Turbopack**: Enabled in dev mode for faster builds
- **Dark Mode**: CSS variables configured in globals.css
- **No Testing Framework**: Tests need to be set up if required

### Current State
This is a fresh Next.js installation. To build the blog functionality, you'll need to implement:
- Content management (MDX or CMS)
- Blog post pages and routing
- Navigation components
- SEO metadata handling