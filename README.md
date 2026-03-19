# PRICE Workshop 2026 - Performance, Rendering, and Interaction for Competitive Esports

![SIGGRAPH 2026](https://img.shields.io/badge/SIGGRAPH-2026-blue)
![License: MIT](https://img.shields.io/badge/License-MIT-green)

A technical workshop at [SIGGRAPH 2026](https://s2026.siggraph.org/) focusing on Performance, Rendering, and Interaction for Competitive Esports.

## 🌐 Live Site

Visit our website at: [https://price-workshop.org](https://price-workshop.org)

## 📋 About This Workshop

The **PRICE** workshop brings together researchers, developers, and industry professionals to explore cutting-edge techniques in:

- **Performance Optimization** - High frame rates, low latency, efficient resource utilization
- **Visual Rendering** - Advanced rendering techniques for esports environments
- **Interaction Design** - Human-computer interaction for competitive gaming

## 🏗️ Project Structure

```
price-workshop/
├── hugo.toml           # Hugo configuration
├── content/
│   └── _index.md       # Home page content
├── layouts/
│   ├── _default/
│   │   └── baseof.html # Base template
│   └── partials/
│       ├── header.html # Header/navigation
│       └── footer.html # Footer
├── assets/
│   ├── css/
│   │   ├── main.css    # Main stylesheet
│   │   └── theme.css   # Theme customization
│   └── js/
│       └── main.js     # JavaScript functionality
├── public/             # Hugo build output (ignored)
├── agents/
│   └── config.json     # AI agent configuration
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites

- **Hugo** (extended version recommended for CSS processing)
  - Download from: https://gohugo.io/getting-started/installing/
  - Or install via package manager:
    - **Windows:** `winget install Hugo.Hugo` or `choco install hugo-extended`
    - **macOS:** `brew install hugo`
    - **Linux:** `apt install hugo` or `dnf install hugo`

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/price-workshop/price-workshop.git
   cd price-workshop
   ```

2. **Start the Hugo development server:**
   ```bash
   hugo server -D
   ```

3. **Access the site locally:**
   - Open [http://localhost:1313](http://localhost:1313)

### Building for Production

```bash
hugo --minify --gc
```

The built site will be in the `public` directory.

## 📄 Pages

The workshop website includes the following pages:

| Page | Description |
|------|-------------|
| **Home** | Hero section, about overview, key dates, registration info |
| **About** | Workshop details, organizers, committee information |
| **Program** | Schedule, accepted papers, presentations |
| **Speakers** | Keynote speakers and presenters |
| **Registration** | Registration details, fees, FAQ |
| **Venue** | Location, hotel information, transportation |
| **Contact** | Contact form and information |

## 🎨 Design System

### Colors (SIGGRAPH-inspired)

- **Primary:** Orange (`#ff6b00`) - SIGGRAPH brand color
- **Secondary:** Blue (`#0066cc`) - Tech professional color
- **Accent:** Teal (`#00d4aa`) - Modern accent

### Typography

- **Primary Font:** Inter (Google Fonts)
- **Monospace Font:** JetBrains Mono (Google Fonts)

## 🔧 Configuration

### GitHub Pages Setup

Hugo sites work perfectly with GitHub Pages!

1. **Push to GitHub:**
   ```bash
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: `main` branch, root folder
   - Click "Save"

3. **Custom Domain:**
   - In repository Settings → Pages → Custom Domain
   - Enter `price-workshop.org`
   - Add CNAME record in your domain registrar:
     - `@` → `price-workshop.github.io`
     - `www` → `price-workshop.github.io`
   - Enable "Enforce HTTPS"

### Adding New Pages

To add a new page in Hugo:

1. **Create content file:**
   ```bash
   hugo new pages/about.md
   ```

2. **Add front matter:**
   ```yaml
   ---
   title: "About Us"
   date: 2026-03-19
   draft: false
   ---
   ```

3. **Create layout** (if needed) in `layouts/pages/`

4. **Add to menu** in `hugo.toml`

## 📅 Key Dates

| Date | Event |
|------|-------|
| April 15, 2026 | Abstract Submission |
| May 1, 2026 | Acceptance Notification |
| May 15, 2026 | Camera-Ready Submission |
| August 9, 2026 | Workshop Day @ SIGGRAPH 2026 |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## 📧 Contact

- **Email:** info@price-workshop.org
- **GitHub:** [github.com/price-workshop](https://github.com/price-workshop)

## 🤖 AI Agent Configuration

The `agents/config.json` file defines how AI agents assist with website development:

- **Overview Agent:** Architectural decisions and code review
- **Content Agent:** Workshop descriptions and information
- **Design Agent:** UI/UX design system
- **Frontend Agent:** HTML/CSS/JavaScript implementation
- **Deployment Agent:** GitHub Pages and CI/CD setup

## 📝 License

This project is open source and available under the MIT License.

---

**PRICE Workshop 2026** | [SIGGRAPH 2026](https://s2026.siggraph.org/) | Denver, Colorado