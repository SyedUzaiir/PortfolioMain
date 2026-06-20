# Syed Uzair Mohiuddin — Portfolio V3 Foundation

A premium, production-ready developer portfolio architecture designed like a high-end SaaS application. Built with Next.js 15, React 19, Tailwind CSS v4, and Framer Motion.

## 🚀 Tech Stack & Design Tokens
- **Core Framework**: Next.js 15 (App Router, Turbopack) & React 19
- **Style Engine**: Tailwind CSS v4 (with custom `@theme` variables for premium dark-default aesthetics)
- **Animations**: Framer Motion & Lenis smooth scrolling integration
- **Validation**: Zod (contact form type schemas)
- **Component Patterns**: Custom glassmorphism overlays, spotlight mouse tracking, text reveal effects, magnetic spring controls, and dynamic counters.

---

## 📁 Architectural Layout

```
├── app/
│   ├── layout.tsx         # Providers (Theme, Scroll), global Navbar & Footer, JSON-LD
│   ├── page.tsx           # Main Landing Page / Hero
│   ├── loading.tsx        # Dynamic page load suspense spinner
│   ├── not-found.tsx      # Custom animated 404 error page
│   ├── sitemap.ts         # Dynamically generated search sitemaps
│   ├── robots.ts          # Search engine optimization indexing rules
│   └── manifest.ts        # Progressive Web Application (PWA) configuration
├── components/
│   ├── layout/            # Section grids, sticky blur Navbar, structured brand Footer
│   ├── motion/            # Magnetic animations, scroll reveals, spotlight cursors
│   ├── shared/            # SEO helpers (JSON-LD), global loaders, command palette
│   └── ui/
│       ├── buttons/       # Magnetic action buttons, custom SVG SocialButton
│       ├── cards/         # GlassCard, ProjectCard, ExperienceCard, SkillCard, StatCard
│       └── shared/        # SectionHeading, GradientText, AnimatedCounter, ProgressBar
├── hooks/                 # useScrollPosition, useActiveSection, useCounter, useMagnetic, useWindowSize
├── lib/                   # Easing presets, API statistics fetch layer
├── data/                  # Typed static collections (skills, projects, timeline data)
└── types/                 # Strict TypeScript schemas & Zod form interfaces
```

---

## 🛠️ Key Architectural Implementations

### 1. Raycast-inspired Command Palette (`Ctrl + K` or `⌘K`)
Pressing `Ctrl + K` toggles a system-wide dialog menu that enables:
- Seamless page & section navigation (Hero, About, Projects, Experience, Skills, Contact).
- Immediate system color scheme transitions (Light / Dark mode).
- Immediate access to developer resumes or external links (GitHub, LinkedIn, LeetCode).

### 2. Custom Motion System & Hooks
- `useScrollPosition`: Tracks viewport offset values.
- `useActiveSection`: Monitors user scroll section targets via an `IntersectionObserver`.
- `useCounter`: Increments statistical elements.
- `useMagnetic`: Calculates physical magnetism ranges around cursor actions.
- `useWindowSize`: Resizes responsive bounds dynamically.

### 3. Modular API Service Layer (`lib/services/api.ts`)
Queries the public REST & GraphQL interfaces of GitHub and LeetCode. Implements:
- 1-hour caching bounds (`next: { revalidate: 3600 }`).
- Robust error fallbacks to guarantee uptime and fast page speeds.

---

## 💻 Development & Verification

To run the development server:
```bash
npm run dev
```

To compile a production build and run TypeScript / ESLint checks:
```bash
npm run build
```
