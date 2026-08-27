# PRICE Workshop Website

Performance, Rendering, and Interaction for Competitive Esports (PRICE) Workshop

## Overview

This is the official website for the PRICE Workshop at SIGGRAPH 2026. The site is built using [Hugo](https://gohugo.io/) with a custom responsive theme featuring a gaming-inspired design.

## Getting Started

### Prerequisites

- Hugo Extended (v0.128.0 or later, matching the CI build)
- Git

### Installation & Local Development

1. Clone the repository:
```bash
git clone git@github.com:price-workshop/price-workshop.git
cd price-workshop
```

2. Run the Hugo development server:
```bash
hugo server
```

3. Open your browser and navigate to `http://localhost:1313`

### Project Structure

```
price-workshop/
├── content/              # Markdown content files
│   ├── _index.md         # Root redirect to the latest year
│   ├── contact.md        # Shared contact page
│   ├── 2026/             # Current year (homepage hero, CFP, schedule, presentations, organizers)
│   │   ├── _index.md
│   │   ├── about.md
│   │   ├── call-for-papers.md
│   │   ├── schedule/
│   │   ├── presentations/
│   │   └── organizers/
│   ├── 2025/             # Past year (landing page, schedule, organizers)
│   ├── 2023/ 2022/ 2021/ # Past years
│   └── archive/          # Archive of all past events
├── themes/custom/        # Custom Hugo theme
│   ├── layouts/
│   ├── static/css/
│   └── theme.toml
├── static/               # Static assets (CNAME for custom domain)
├── config.toml           # Hugo configuration (site params + per-year nav menus)
└── .github/workflows/    # GitHub Actions for deployment (hugo.yml)
```

## Building for Production

Generate the static site:

```bash
hugo
```

This creates the `public/` directory with the static HTML, CSS, and JavaScript files ready for deployment.

## Deployment

The site is automatically deployed to GitHub Pages via the GitHub Actions workflow in `.github/workflows/hugo.yml` whenever you push to the `main` branch.

### Custom Domain

The site is configured to use the custom domain `price-workshop.org`. Ensure your domain registrar's DNS is pointing to GitHub Pages, and the custom domain is configured in the repository settings.

## Website Features

### Design
- SIGGRAPH 2026-inspired color scheme (light cream background, dark greenish-gray text)
- Responsive layout that works on all devices
- Smooth animations and hover effects

### Pages

- **Home** (`/`) - Redirects to the latest year page
- **Year pages** (`/2026/`, `/2025/`, ...) - Per-year landing pages; the current year shows the hero, keynote, topics, key dates, and CTA
- **About** - Workshop motivation and rationale
- **Call for Papers** - Submission guidelines and topics
- **Schedule** - Workshop timeline, format, and accepted presentations
- **Presentations** - Abstracts for accepted papers
- **Organizers** - Team member bios
- **Archive** - All past PRICE and predecessor events
- **Contact** - Contact information

## Customization

### Colors and Branding

Edit the CSS custom properties in `themes/custom/static/css/style.css`:

```css
:root {
  --primary: #55686e;      /* Greenish-gray - buttons, accents */
  --secondary: #D2C5B2;    /* Warm beige - secondary accent */
  --accent: #2A4249;       /* Dark greenish-gray - dark accents */
  --bg: #F1EFE3;           /* Light cream - main background */
  --bg-alt: #E9E4DB;       /* Slightly darker cream - card backgrounds */
  --text: #2A4249;         /* Dark text */
  --text-muted: #55686e;   /* Muted text */
  --border-color: #d9d7ce; /* Light borders */
}
```

### Navigation Menu

Edit the menu in `config.toml`:

```toml
[menu]
  [[menu.main]]
    name = "Page Name"
    url = "/page-slug/"
    weight = 10
```

### Adding New Pages

1. Create a new Markdown file under the relevant year section:
```
content/2026/new-page.md
```

2. Add frontmatter:
```yaml
---
title: "Page Title"
date: 2026-03-19
---
```

3. Add the menu item to `config.toml` (optional) — year-specific pages use the per-year menu, e.g. `[[menu.main_2026]]`; shared pages (like Contact) use `[[menu.main]]`

## Performance Optimization

The site is optimized for performance:
- Minified CSS and HTML
- Responsive images
- No external JavaScript dependencies
- Fast loading times

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

To contribute to the website:

1. Create a new branch
2. Make your changes
3. Test locally with `hugo server`
4. Push and create a pull request

## License

This website and its content are licensed under the MIT License. See LICENSE file for details.

## Contact

For questions about the website or workshop, email: contact@price-workshop.org

---

**Built with [Hugo](https://gohugo.io/) | Hosted on [GitHub Pages](https://pages.github.com/)**
