# The World's Philosophies: A Global Journey Through Human Thought

A comprehensive, globally representative philosophy web application featuring 70+ philosophers across 4 historical eras. Built as a static React application with TypeScript, Vite, and Tailwind CSS.

## Features

- **70+ Philosophers** across 4 historical eras (Ancient, Classical, Early Modern, Late Modern)
- **Interactive Reader** with primary source quotes, argument reconstruction, and scholarly analysis
- **Custom Phi (φ) Logo** - the golden ratio symbol of wisdom and harmony
- **Responsive Design** with accessibility features (WCAG compliant)
- **Cross-references** between philosophers and traditions
- **Vocabulary Glossaries** for key philosophical terms
- **Argument Reconstruction** with premises and conclusions
- **Reflection Questions** for critical thinking

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** with custom philosophy color palette
- **Lucide React** for icons
- **Motion** for animations

## Color Palette (Book Cover Inspired)

- **Ivory** `#F8F3E7` - Warm parchment background
- **Deep Teal** `#063E3B` - Primary text and borders
- **Emerald** `#0A876B` - Accents and highlights
- **Muted Gold** `#B88A46` - Subtle accents

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### GitHub Pages (Recommended)

1. Push to GitHub repository
2. Enable GitHub Pages in repository settings:
   - Settings → Pages → Source: "GitHub Actions"
3. Add `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci && npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Environment Variables for GitHub Actions
- `GITHUB_PAGES`: `true` (set in GitHub Actions)
- `GITHUB_REPOSITORY`: auto-set by GitHub Actions

## Project Structure

```
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration with GitHub Pages base path
├── tailwind.config.js      # Custom philosophy color palette
├── tsconfig.json           # TypeScript configuration
├── src/
│   ├── main.tsx           # React entry point
│   ├── App.tsx            # Main application component
│   ├── index.css          # Tailwind imports
│   └── data/
│       ├── epoch1.ts      # Ancient Foundations (Laozi, Buddha, Confucius, etc.)
│       ├── epoch2.ts      # Classical Statecraft (Nagarjuna, Augustine, etc.)
│       ├── epoch3.ts      # Early Modern (Machiavelli, Descartes, etc.)
│       └── epoch4.ts      # Late Modern (Schopenhauer, Nietzsche, etc.)
```

## Features Implemented

- **Custom Phi (φ) Logo** - Golden ratio symbol of wisdom
- **Sticky Header** with backdrop blur for scroll stability
- **Chronological Sidebar** with 4 philosophical eras
- **Interactive Philosopher Cards** with quotes, arguments, glossaries
- **Cross-references** between connected philosophers
- **Vocabulary Glossaries** for key terms
- **Argument Reconstruction** with premises and conclusions
- **Reflection Questions** for critical thinking
- **Responsive Design** (mobile-first)
- **Accessibility** (WCAG compliant, keyboard navigation, focus indicators)

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Ivory | `#F8F3E7` | Background |
| Deep Teal | `#063E3B` | Primary text, borders |
| Emerald | `#0A876B` | Accents, highlights |
| Muted Gold | `#B88A46` | Subtle accents |
| Pale Teal | `#E8F4F2` | Selected backgrounds |

## License

MIT License - Feel free to use for educational purposes.

---

*The World's Philosophies: A Global Journey Through Human Thought* - A static, accessible philosophy web application for learners worldwide.
