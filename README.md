# PRICE Workshop Website

Performance and Rendering in Competitive Esports Workshop

## Overview

This is the official website for the PRICE Workshop at SIGGRAPH 2026. The site is built using [Hugo](https://gohugo.io/) with a custom responsive theme featuring a gaming-inspired design.

## Getting Started

### Prerequisites

- Hugo (v0.87.0 or later)
- Git

### Installation & Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/price-workshop.git
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
│   ├── about.md
│   ├── call-for-papers.md
│   ├── schedule.md
│   ├── organizers.md
│   └── contact.md
├── themes/custom/        # Custom Hugo theme
│   ├── layouts/
│   ├── static/css/
│   └── theme.toml
├── static/               # Static assets (images, documents, etc.)
├── config.toml           # Hugo configuration
└── .github/workflows/    # GitHub Actions for deployment
```

## Building for Production

Generate the static site:

```bash
hugo
```

This creates the `public/` directory with the static HTML, CSS, and JavaScript files ready for deployment.

## Deployment

The site is automatically deployed to GitHub Pages via the GitHub Actions workflow in `.github/workflows/hugo-deploy.yml` whenever you push to the `main` branch.

### Custom Domain

The site is configured to use the custom domain `price-workshop.org`. Ensure your domain registrar's DNS is pointing to GitHub Pages, and the custom domain is configured in the repository settings.

## Website Features

### Modern Gaming-Inspired Design
- Neon color scheme (cyan, pink, orange) on a dark background
- Responsive layout that works on all devices
- Smooth animations and hover effects
- Gaming aesthetic with modern typography

### Pages

- **Home** - Landing page with overview
- **About** - Workshop motivation and rationale
- **Call for Papers** - Submission guidelines and topics
- **Schedule** - Workshop timeline and format
- **Organizers** - Team member bios
- **Contact** - Contact information and FAQ

## Customization

### Colors and Branding

Edit the CSS custom properties in `themes/custom/static/css/style.css`:

```css
:root {
  --primary: #00D4FF;      /* Neon cyan */
  --secondary: #FF006E;    /* Neon pink */
  --accent: #FFB703;       /* Neon orange */
  --dark-bg: #0A0E27;      /* Dark background */
  --light-text: #F5F5F5;   /* Light text */
  --gray-text: #B0B0B0;    /* Gray text */
  --border-color: #2A2F4A; /* Border color */
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

1. Create a new Markdown file in `content/`:
```
content/new-page.md
```

2. Add frontmatter:
```yaml
---
title: "Page Title"
date: 2026-03-19
---
```

3. Add the menu item to `config.toml` (optional)

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
