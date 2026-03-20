---
description: "Use when: editing CSS, creating new styles, or fixing visual issues. Helps maintain theme consistency and responsive design."
applyTo: "themes/custom/static/css/*.css"
---

# CSS Theme Guidelines

Files matching: `themes/custom/static/css/*.css`

## CSS Architecture

- **Single file**: `style.css` contains all styling
- **Organization**: Comments separate sections
- **Variables**: CSS custom properties (`:root`) for colors

## Color System

**Always use CSS variables. Never hard-code colors.**

```css
:root {
  --primary: #00D4FF;      /* Neon cyan - buttons, accents */
  --secondary: #FF006E;    /* Neon pink - borders, highlights */
  --accent: #FFB703;       /* Neon orange - alt highlights */
  --dark-bg: #0A0E27;      /* Main background */
  --dark-alt: #1A1F3A;     /* Card backgrounds */
  --light-text: #F5F5F5;   /* Body text */
  --gray-text: #B0B0B0;    /* Muted text */
  --border-color: #2A2F4A; /* Borders, dividers */
}
```

Usage:
```css
.button {
  background: var(--primary);
  color: var(--dark-bg);
}
```

## Responsive Breakpoints

```css
/* Mobile: default */
.class { /* styles */ }

/* Tablet: 769px+ */
@media (min-width: 769px) { /* styles */ }

/* Desktop: 1025px+ */
@media (min-width: 1025px) { /* styles */ }

/* Large: 1441px+ */
@media (min-width: 1441px) { /* styles */ }
```

**Mobile-first approach**: Style for mobile, then add media queries for larger screens.

## Common Components

### Buttons
```css
.cta-button {
  display: inline-block;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: var(--dark-bg);
  padding: 0.75rem 2rem;
  border-radius: 5px;
  font-weight: 700;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
  cursor: pointer;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
}
```

### Cards
```css
.card {
  background-color: var(--dark-alt);
  border: 2px solid var(--border-color);
  border-radius: 8px;
  padding: 2rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  border-color: var(--primary);
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.2);
}
```

### Grid Layouts
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .grid {
    gap: 1rem;
  }
}
```

## Transitions & Animations

Keep animations smooth and performant:
- Duration: 0.2s - 0.3s (quick)
- Easing: `ease-in-out` (natural)

```css
a {
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

a:hover {
  color: var(--accent);
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
}
```

## Typography

### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", 
             Roboto, "Helvetica Neue", Arial, sans-serif;
```

### Sizing
Use `rem` for scalability:
```css
h1 { font-size: 3rem; }      /* ~48px */
h2 { font-size: 2rem; }      /* ~32px */
h3 { font-size: 1.5rem; }    /* ~24px */
p  { font-size: 1rem; }      /* ~16px */
```

### Line Height
```css
body { line-height: 1.6; }   /* Readable body text */
h1, h2, h3 { line-height: 1.2; } /* Tight headlines */
```

## Accessibility

- Maintain color contrast (aim for WCAG AA or AAA)
- Use semantic HTML (see Layouts)
- Include focus states on interactive elements:
```css
button:focus {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
```

## Testing

Before committing:
```bash
hugo server
# Visit http://localhost:1313
# Test at different screen sizes:
#   - 320px (mobile)
#   - 768px (tablet)
#   - 1440px (desktop)
# Hover over interactive elements
# Verify colors look good
```

Use browser DevTools to test responsiveness:
- Chrome: F12 → Toggle device toolbar (Ctrl+Shift+M)
- Firefox: F12 → Responsive Design Mode (Ctrl+Shift+M)

## Performance Tips

- Avoid `!important` (indicates cascade issue)
- Minimize animations on mobile
- Use performance-friendly CSS (avoid expensive box-shadows on scroll)
- Keep CSS file lean and organized

## Common Tasks

### Add New Color
1. Add to `:root` CSS variables
2. Use throughout with `var(--name)`
3. Test contrast

### Create New Component
1. Plan class name: `.component-name`
2. Define base styles
3. Add hover/active states
4. Add responsive breakpoints
5. Test at multiple sizes

### Fix Mobile Layout
1. Identify problem breakpoint
2. Add/modify `@media` query
3. Adjust grid, font-size, padding
4. Test at adjacent breakpoints
5. Verify no side effects

## Checklist Before Commit

- [ ] All colors use CSS variables
- [ ] Tested at 320px, 768px, 1440px
- [ ] Hover states work
- [ ] No `!important` used
- [ ] Transitions are smooth (0.2-0.3s)
- [ ] Dark theme maintained
- [ ] Consistent with design system

---

See `.github/agents/theme-developer.agent.md` for detailed theme guidelines.
