# PRICE Workshop Website - Setup & Development Guide

## Overview

The PRICE Workshop website is built with **Hugo** and deployed to **GitHub Pages** at [price-workshop.org](https://price-workshop.org). The site features a themed design based on SIGGRAPH 2026's professional layout combined with a custom gaming-inspired aesthetic.

**Current Theme:** SIGGRAPH 2026 colors with light background (#F1EFE3) and dark text (#2A4249)

---

## Quick Start

### 1. Local Development

To preview the site locally:

```bash
# Install Hugo (if not already installed)
# Windows: choco install hugo-extended
# macOS: brew install hugo
# Linux: sudo apt-get install hugo

# From the repository directory
hugo server

# Open http://localhost:1313 in your browser
```

The site will hot-reload as you make changes.

### 2. Making Content Changes

All content pages are in the `content/` directory as Markdown files:

- `about.md` - Workshop overview
- `call-for-papers.md` - Call for submissions with deadlines
- `schedule.md` - Workshop timeline
- `organizers.md` - Team bios
- `contact.md` - Contact information

Edit these files, commit, and push to `main`. GitHub Actions will automatically build and deploy.

### 3. Publishing Changes

```bash
# Make your edits to content or theme files
# Stage and commit
git add .
git commit -m "Brief description of changes"

# Push to main branch
git push origin main

# GitHub Actions will automatically build and deploy to GitHub Pages
# Check Actions tab to see deployment status
```

---

## Site Structure

```
price-workshop/
├── .github/
│   ├── workflows/
│   │   └── hugo-deploy.yml          # Automated deployment workflow
│   ├── instructions/
│   │   ├── css.instructions.md       # CSS editing guidelines
│   │   └── markdown.instructions.md  # Content editing guidelines
│   ├── AGENTS.md                    # Copilot agent specs
│   └── copilot-instructions.md      # Project conventions
│
├── content/                          # Markdown pages (the actual content)
│   ├── about.md
│   ├── call-for-papers.md
│   ├── schedule.md
│   ├── organizers.md
│   └── contact.md
│
├── themes/custom/                    # Custom Hugo theme
│   ├── layouts/
│   │   ├── baseof.html              # Base template wrapper
│   │   ├── index.html               # Homepage
│   │   ├── _default/
│   │   │   └── single.html          # Page template
│   │   └── partials/
│   │       ├── header.html          # Navigation
│   │       └── footer.html          # Footer
│   ├── static/css/
│   │   └── style.css                # All styling
│   └── theme.toml
│
├── static/                          # Static assets (images, documents)
├── docs/                            # Exploration & research documentation
│   └── SIGGRAPH_DESIGN_EXPLORATION.md
│
├── config.toml                      # Hugo site configuration
├── README.md                        # Project overview
├── SETUP.md                         # This file
└── .gitignore
```

---

## Customization

### Colors

Colors are defined as CSS variables in `themes/custom/static/css/style.css`:

```css
:root {
  --primary: #55686e;          /* Greenish-gray - buttons, accents */
  --secondary: #D2C5B2;        /* Warm beige - secondary accent */
  --accent: #2A4249;           /* Dark greenish-gray - dark accents */
  --dark-bg: #F1EFE3;          /* Light cream - main background */
  --dark-alt: #E9E4DB;         /* Slightly darker cream - card backgrounds */
  --light-text: #2A4249;       /* Dark text */
  --gray-text: #55686e;        /* Muted text */
  --border-color: #d9d7ce;     /* Light borders */
}
```

To change colors, update these variables. All components automatically use them. See [CSS instructions](.github/instructions/css.instructions.md) for guidelines.

### Navigation Menu

Edit in `config.toml`:

```toml
[menu]
  [[menu.main]]
    name = "Home"
    url = "/"
    weight = 1
  [[menu.main]]
    name = "About"
    url = "/about/"
    weight = 2
  # Add more menu items as needed
```

The `weight` parameter controls menu order (lower = appears first).

### Adding New Pages

1. Create a new file in `content/`: `content/new-page.md`
2. Add frontmatter:
   ```yaml
   ---
   title: "Page Title"
   date: 2026-03-20
   ---
   
   Your content in Markdown here...
   ```
3. (Optional) Add to menu in `config.toml`
4. Commit and push

### Styling Changes

All CSS is in `themes/custom/static/css/style.css`. The file is organized by section with comments:

- `:root {...}` - CSS variables
- `Typography` - Headings, text, links
- `Navigation` - Header and menu
- `Hero Section` - Main banner
- `Category Cards` - 5-item grids
- `Buttons` - CTA button styles
- `Responsive Design` - Mobile breakpoints

Use CSS variables consistently. See [CSS instructions](.github/instructions/css.instructions.md) for best practices.

---

## Key Components

### Category Cards Grid
5-column responsive grid displaying workshop topics/categories. Defined in CSS as `.categories-grid` and `.category-card`. Stacks to 3 columns on tablet and 2 on mobile.

### CTA Buttons
Multiple button styles for different actions:
- `.cta-button` - Primary action (submit, register)
- `.cta-button-secondary` - Secondary action (view schedule)
- `.cta-button-accent` - Alternative action (ask questions)

### Deadline Cards
Grid showing submission deadlines with status indicators (open/upcoming/closed). Used on the call-for-papers page.

---

## GitHub Pages Configuration

The site is configured to deploy from the `/` (root) of the `main` branch:

1. Repository Settings → Pages
2. Source: `main` branch, `/` (root)
3. Custom domain: `price-workshop.org`
4. GitHub Actions workflow (`hugo-deploy.yml`) builds and publishes automatically

**DNS Configuration (already set):**
- Domain registrar's DNS points to GitHub Pages IP addresses
- CNAME record set up for `price-workshop.org`

---

## Deployment

### Automatic Deployment (CI/CD)
- **Trigger:** Push to `main` branch
- **Process:** GitHub Actions runs the workflow in `.github/workflows/hugo-deploy.yml`
- **Steps:**
  1. Hugo builds the site
  2. Generated `public/` folder is deployed to GitHub Pages
  3. Available at https://price-workshop.org within seconds
- **Logs:** Check Actions tab in repository if deployment fails

### Monitoring
- GitHub Actions tab shows workflow runs
- Click a run to see build logs
- Check the Deployments section to see deployment history

### Rollback
If something breaks:
1. Identify the problematic commit
2. Revert: `git revert [commit-hash]` or reset: `git reset --hard [good-commit]`
3. Push: `git push origin main`
4. New deployment will be triggered automatically

---

## Troubleshooting

### Build Fails
- Check GitHub Actions logs (Actions tab → workflow run)
- Common issues:
  - Invalid Markdown YAML frontmatter (check for proper spacing)
  - Missing closing tags in HTML
  - File encoding issues (use UTF-8)

### Site Not Updating
- Wait 30 seconds for deployment
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check GitHub Actions to verify deployment succeeded
- Clear CloudFlare cache if using it

### Colors Not Showing
- Check CSS file: `themes/custom/static/css/style.css`
- Verify CSS variables are spelled correctly
- Hard refresh browser cache

### Links Broken
- Internal links should use relative paths: `/about/`, `/schedule/`
- Not absolute URLs or missing trailing slashes
- Check the generated `public/` folder structure

### Navigation Not Showing
- Verify menu items in `config.toml` match content filenames
- URLs must start with `/` and end with `/`
- Set `weight` parameter for correct order

---

## Documentation

- **[README.md](README.md)** - Project overview and feature list
- **[.github/copilot-instructions.md](.github/copilot-instructions.md)** - Project conventions and guidelines
- **[.github/instructions/](. github/instructions/)** - Detailed guidelines for CSS and Markdown editing
- **[docs/SIGGRAPH_DESIGN_EXPLORATION.md](docs/SIGGRAPH_DESIGN_EXPLORATION.md)** - Research on SIGGRAPH theme merging

---

## Development Tips

### Local Hugo Commands
```bash
# Start development server with live reload
hugo server

# Build site (generates public/ folder)
hugo

# Build with draft content included
hugo -D

# Check for errors
hugo --logLevel debug
```

### Content Best Practices
- Use Markdown for all content pages
- Keep paragraphs short (2-3 lines)
- Use headers to organize sections
- Link to other pages with relative paths: `/about/`
- Test locally before pushing

### Git Workflow
```bash
# Create feature branch for significant changes
git checkout -b feature/new-feature

# Make commits with clear messages
git commit -m "Add new section to call-for-papers"

# Push to GitHub
git push origin feature/new-feature

# Create Pull Request on GitHub for review
# Merge when ready
```

---

## Further Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Pages Help](https://docs.github.com/en/pages)
- [CSS Variables (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

---

**Last Updated:** March 20, 2026  
**Current Version:** Hugo with custom SIGGRAPH-inspired theme

- Past workshop archive

## Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Hugo Themes](https://themes.gohugo.io/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Markdown Guide](https://www.markdownguide.org/)

---

**Your site is live and ready to go!** 🎮
