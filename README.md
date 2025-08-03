# Rohan Vachheta - Portfolio Website

A modern, professional portfolio website built with [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/), showcasing my work as a Full Stack Software Developer.

## 🚀 Features

- **Modern Design**: Clean, professional layout with responsive design
- **Performance Optimized**: Built with Astro for fast loading times
- **SEO Friendly**: Optimized for search engines with proper meta tags
- **Accessibility**: WCAG compliant with keyboard navigation support
- **Dark/Light Mode**: Automatic theme switching based on user preference
- **Analytics Integration**: Google Analytics and Tag Manager implementation
- **Mobile First**: Fully responsive design for all devices

## 📁 Structure

```
src/
├── components/
│   ├── Head.astro          # Custom head component with analytics
│   └── Hero.astro          # Custom hero component
├── content/
│   └── docs/
│       ├── about/          # About me sections
│       │   ├── intro.md    # Introduction
│       │   ├── experience.md # Professional experience
│       │   └── skills.md   # Skills and technologies
│       ├── projects/       # Project showcases
│       │   ├── featured.md # Featured projects
│       │   ├── web-apps.md # Web applications
│       │   └── open-source.md # Open source contributions
│       ├── blog/          # Technical content
│       │   ├── technical.md # Technical articles
│       │   └── tutorials.md # Tutorials and guides
│       ├── contact.md     # Contact information
│       └── index.mdx      # Homepage
├── styles/
│   └── portfolio.css      # Custom styling
└── assets/
    └── rohan-profile.webp # Profile image
```

## 🛠️ Technologies Used

- **Framework**: [Astro](https://astro.build/) - Modern static site generator
- **Theme**: [Starlight](https://starlight.astro.build/) - Documentation theme adapted for portfolio
- **Styling**: Custom CSS with modern features (Grid, Flexbox, Custom Properties)
- **Analytics**: Google Analytics 4 and Google Tag Manager
- **Deployment**: Optimized for Netlify, Vercel, or any static hosting

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rohanvachheta/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

### Building for Production

```bash
npm run build
```

The built site will be in the `dist/` directory, ready for deployment.
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
