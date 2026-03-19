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
├── _config.yml           # Jekyll/GitHub Pages configuration
├── _layouts/
│   └── default.html      # Main HTML layout template
├── assets/
│   ├── css/
│   │   ├── main.css      # Main stylesheet with design tokens
│   │   └── theme.css     # Theme customization (optional)
│   └── js/
│       └── main.js       # JavaScript functionality
├── agents/
│   └── config.json       # AI agent configuration
├── index.md              # Home page
├── CNAME                 # Custom domain configuration
├── Gemfile               # Ruby dependencies
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites

- Ruby 3.0+ (for running Jekyll locally)
- Node.js 16+ (optional, for development)
- Git

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/price-workshop/price-workshop.git
   cd price-workshop
   ```

2. **Install Ruby dependencies:**
   ```bash
   bundle install
   ```

3. **Start the Jekyll development server:**
   ```bash
   bundle exec jekyll serve
   ```

4. **Access the site locally:**
   - Open [http://localhost:4000](http://localhost:4000)

### Building for Production

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

The built site will be in the `_site` directory.

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

1. **Enable GitHub Pages:**
   - Go to your repository Settings → Pages
   - Select `main` branch as the source
   - Click "Save"

2. **Custom Domain:**
   - In your domain registrar (for price-workshop.org), add:
     - **CNAME record:** `www` → `price-workshop.github.io`
   - Or if using root domain:
     - **CNAME record:** `@` → `price-workshop.github.io`

3. **GitHub Settings:**
   - In repository Settings → Pages → Custom Domain
   - Enter `price-workshop.org`
   - Enable "Enforce HTTPS"

### AI Agent Configuration

The `agents/config.json` file defines how AI agents should assist with website development:

- **Overview Agent:** Architectural decisions and code review
- **Content Agent:** Workshop descriptions and information
- **Design Agent:** UI/UX design system
- **Frontend Agent:** HTML/CSS/JavaScript implementation
- **Deployment Agent:** GitHub Pages and CI/CD setup

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

## 📝 License

This project is open source and available under the MIT License.

---

**PRICE Workshop 2026** | [SIGGRAPH 2026](https://s2026.siggraph.org/) | Denver, Colorado