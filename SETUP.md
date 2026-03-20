# Quick Start Guide

## Your Hugo Website is Ready! 🚀

Your PRICE Workshop website has been set up with a modern, responsive design and gaming-inspired aesthetics.

## Next Steps

### 1. Test Locally (Optional)

To preview your site before pushing to GitHub:

```bash
# Install Hugo (if not already installed)
# Windows: choco install hugo-extended
# macOS: brew install hugo
# Linux: sudo apt-get install hugo

# From your repository directory
hugo server

# Open http://localhost:1313 in your browser
```

### 2. Push to GitHub

```bash
cd c:\Users\jbspj\Documents\GitHub\price-workshop

# Add all files
git add .

# Commit
git commit -m "Initial Hugo website setup"

# Push to main branch
git push origin main
```

### 3. Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select:
   - **Branch:** `main`
   - **Folder:** `/` (root) or `/docs` depending on your setup
4. Save

The workflow in `.github/workflows/hugo-deploy.yml` will automatically:
- Build your Hugo site
- Deploy to GitHub Pages
- Be triggered on every push to `main`

### 4. Set Custom Domain (CNAME)

Since you mentioned `price-workshop.org` is already configured:

1. In repository **Settings** → **Pages**
2. Under "Custom domain", enter: `price-workshop.org`
3. Save (this creates a CNAME file)
4. Ensure your domain registrar's DNS is pointing to GitHub Pages

**GitHub Pages DNS settings:**
```
A record: 185.199.108.153
A record: 185.199.109.153
A record: 185.199.110.153
A record: 185.199.111.153
```

Or use CNAME if your registrar allows:
```
CNAME: yourusername.github.io
```

### 5. Customize Content

All pages are in `content/`:
- `about.md` - Workshop overview
- `call-for-papers.md` - Submission guidelines
- `schedule.md` - Workshop timeline
- `organizers.md` - Team bios
- `contact.md` - Contact information

Edit these files in Markdown format and commit changes.

### 6. Update Config (Optional)

Edit `config.toml` to customize:

```toml
baseURL = "https://price-workshop.org/"
title = "PRICE Workshop"
languageCode = "en-us"

[params]
  description = "Your workshop description"
  author = "Author name"
```

## Customization Options

### Colors

Edit colors in `themes/custom/static/css/style.css`:

```css
:root {
  --primary: #00D4FF;      /* Neon cyan - main accent */
  --secondary: #FF006E;    /* Neon pink - secondary accent */
  --accent: #FFB703;       /* Neon orange - tertiary accent */
  --dark-bg: #0A0E27;      /* Dark blue-black background */
  --light-text: #F5F5F5;   /* Light gray text */
}
```

### Navigation Menu

Edit in `config.toml`:

```toml
[menu]
  [[menu.main]]
    name = "Page Name"
    url = "/page-slug/"
    weight = 10  # Higher weight = appears later
```

### Adding New Pages

1. Create `content/new-page.md`:
```yaml
---
title: "Page Title"
date: 2026-03-19
---

Your content here...
```

2. Add to menu in `config.toml` if you want it in navigation

## File Structure

```
price-workshop/
├── .github/workflows/
│   └── hugo-deploy.yml       # GitHub Actions deployment
├── content/                  # Your markdown pages
│   ├── about.md
│   ├── call-for-papers.md
│   ├── schedule.md
│   ├── organizers.md
│   └── contact.md
├── themes/custom/            # Custom theme
│   ├── layouts/
│   │   ├── baseof.html       # Base template
│   │   ├── index.html        # Home page
│   │   ├── _default/
│   │   │   └── single.html   # Regular page template
│   │   └── partials/
│   │       ├── header.html   # Navigation
│   │       └── footer.html   # Footer
│   ├── static/css/
│   │   └── style.css         # All styling
│   └── theme.toml
├── static/                   # Static files (images, docs, etc.)
├── config.toml               # Hugo configuration
├── README.md                 # Project documentation
├── SETUP.md                  # This file
└── .gitignore               # Git ignore rules
```

## Troubleshooting

### Site not deploying?
- Check the GitHub Actions tab in your repository
- Look for workflow run logs
- Ensure `config.toml` has correct `baseURL`

### Colors not showing?
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file path in browser DevTools

### Navigation not working?
- Verify menu items in `config.toml` have correct `url` values
- URLs should start with `/` and end with `/`

### Custom domain not working?
- Wait 24 hours for DNS propagation
- Verify CNAME/A records at your domain registrar
- Check repository Settings → Pages for CNAME file

## Next Updates

Consider adding:
- `static/images/` - Add workshop logo, speaker photos
- `static/documents/` - Call for papers PDF, schedule PDF
- Contact form (with service like Formspree)
- Blog section for news/updates
- Past workshop archive

## Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Hugo Themes](https://themes.gohugo.io/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Markdown Guide](https://www.markdownguide.org/)

---

**Your site is live and ready to go!** 🎮
