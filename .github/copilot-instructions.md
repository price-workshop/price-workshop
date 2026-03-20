---
description: "PRICE Workshop website project conventions, Hugo best practices, and team guidelines"
---

# PRICE Workshop Agent Instructions

This is the official workspace for the PRICE Workshop website, built with Hugo and deployed to GitHub Pages.

## Project Overview

- **Site**: https://price-workshop.org (GitHub Pages hosted)
- **Tech Stack**: Hugo + Custom Theme (no external dependencies)
- **Theme**: Gaming-inspired dark theme with neon accents (cyan, pink, orange)
- **Audience**: Academic researchers, industry professionals, esports professionals
- **Tone**: Professional/Technical with accessibility focus

## Directory Structure

```
├── .github/
│   ├── workflows/          # GitHub Actions
│   ├── agents/             # Custom agent definitions
│   ├── instructions/       # Agent guidelines
│   └── skills/             # Reusable workflows
├── content/                # Markdown pages (the actual content)
├── themes/custom/          # Custom Hugo theme
│   ├── layouts/            # HTML templates
│   ├── static/css/         # Styling
│   └── theme.toml
├── static/                 # Static assets (images, documents)
├── config.toml             # Hugo configuration
└── README.md               # Project documentation
```

## Hugo Best Practices

### Content Files
- **Location**: `content/` folder
- **Format**: Markdown (.md)
- **Frontmatter**: YAML with `title` and `date` at minimum
- **Naming**: Use kebab-case for filenames (e.g., `call-for-papers.md`)
- **Structure**: One file per page, organized logically

Example:
```yaml
---
title: "Page Title"
date: 2026-03-19
---

## Heading

Content here...
```

### Theme Development
- **Layouts**: `themes/custom/layouts/` (base structure)
  - `baseof.html` - Base template wrapper
  - `index.html` - Home page
  - `_default/single.html` - Regular page template
  - `partials/` - Reusable components (header, footer, etc.)
- **Styling**: `themes/custom/static/css/style.css`
  - Use CSS custom properties (variables) for colors
  - Mobile-first responsive design
  - No external CSS frameworks
- **Static Files**: `themes/custom/static/` - Images, fonts, JS

### Color Scheme
All colors defined in CSS root variables:
```css
--primary: #00D4FF;      /* Neon cyan */
--secondary: #FF006E;    /* Neon pink */
--accent: #FFB703;       /* Neon orange */
--dark-bg: #0A0E27;      /* Dark background */
--light-text: #F5F5F5;   /* Light text */
--gray-text: #B0B0B0;    /* Gray text */
--border-color: #2A2F4A; /* Border color */
```

### Configuration
- **Site URL**: Update `baseURL` in `config.toml` if domain changes
- **Menu Items**: Define navigation in `[menu]` section of `config.toml`
- **Parameters**: Site-wide settings in `[params]` section

## Deployment

### Automatic Deployment
- Triggered on push to `main` branch
- Workflow: `.github/workflows/hugo-deploy.yml`
- Builds site and deploys to GitHub Pages
- No manual deployment needed

### Build Locally
```bash
hugo server          # Local preview at localhost:1313
hugo                 # Generate public/ directory
```

## Content Standards

### Writing Guidelines
- **Audience**: Mix of academic researchers and industry professionals
- **Tone**: Professional but accessible
- **Length**: Keep sections concise, use headers for scanability
- **Links**: Use relative paths (`/about/` not full URLs)

### Page Hierarchy
1. **Home** - Landing page with quick links
2. **About** - Workshop motivation
3. **Call for Papers** - Topics and submission info
4. **Schedule** - Timeline and format
5. **Organizers** - Team bios
6. **Contact** - Contact info and FAQ

### Markdown Conventions
- Use `##` for main sections, `###` for subsections
- Use lists for multiple items
- Link to other pages relatively: `[Link text](/page-slug/)`
- Use tables for structured data

## Git Workflow

### Commits
- Use clear, descriptive commit messages
- Example: `"Update call-for-papers deadlines"` or `"Fix CSS responsive layout on mobile"`
- Reference issues or PRs if applicable

### Branches
- Recommended: `main` is always deployable
- For larger changes, create feature branches: `feature/new-section` or `fix/css-issue`

## Common Tasks

### Adding a Page
1. Create `content/page-name.md` with frontmatter
2. (Optional) Add menu item to `config.toml`
3. Commit and push

### Updating Styling
1. Edit `themes/custom/static/css/style.css`
2. Test with `hugo server`
3. Commit and push

### Adding Images/Assets
1. Place in `static/` folder
2. Reference in content as `/images/filename.ext`
3. Commit and push

## Avoid

- ❌ Changing Hugo version without testing
- ❌ Moving content files without updating links
- ❌ Using external CSS frameworks (keep it minimal)
- ❌ Hard-coding colors (use CSS variables)
- ❌ Committing `public/` directory (Hugo-generated)
- ❌ Committing `.hugo_build.lock`

## See Also

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Project README](../../README.md)
- [SETUP Guide](../../SETUP.md)

---

**For agent-specific guidelines, see the custom agent definitions in `.github/agents/`**
