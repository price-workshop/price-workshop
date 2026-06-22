# Multi-Year Architecture Plan

## Goals

- Support PRICE Workshop editions across multiple years with URL paths like `/2026/`, `/2025/`
- Navigation dropdown to switch between years
- 2026 remains viewable at both `/` and `/2026/` (with root redirect to `/2026/`)
- Past years get a simple landing page with year, hosts, and links to relevant materials
- All years share the same template structure — no duplicate templates per year
- Shared (non-year-specific) pages: About and Contact remain at root-level

## New Content Structure

```
content/
  _index.md                  → /  (root hub page)
  2026/
    _index.md                → /2026/  (main 2026 page)
    about.md                 → /2026/about/  (shared content, moved from root)
    call-for-papers.md       → /2026/call-for-papers/
    schedule/
      _index.md              → /2026/schedule/
    presentations/
      ai-level-of-detail.md  → /2026/presentations/ai-level-of-detail/
      ... (5 more presentation pages)
    organizers.md            → /2026/organizers/
    contact.md               → /2026/contact/  (shared content, moved from root)
  2025/
    _index.md                → /2025/  (year landing page with brief info)
  past-years/
    _index.md                → /past-years/  (index/listing of all past years)
```

### Root Hub Page (`_index.md`)

Replace the current rich homepage (keynotes, deadlines, etc.) with a simpler hub page:
- Year selection grid (2026, 2025, ...) with links to each year's page
- "About PRICE Workshop" section (or link to shared `/about/` page)
- Links to key external resources (current SIGGRAPH, submission portal)

### 2026 Page (`2026/_index.md`)

The current homepage content moves here verbatim — `heroSubtitle`, `cta`, `categories`, `keynote`, `deadlines`, `registration`. Same frontmatter params, same rendering.

### 2025 Page (`2025/_index.md`)

Simple year landing with:
- Year + workshop title
- Brief description
- Links to materials (ACM DOI, venue page, any recordings/proceedings)

### Past Years Index (`past-years/_index.md`)

Links to all past years plus SIGGRAPH 2021 (panel).

### Shared Pages (at root)

- `/about/` — stays at root, generic info about the PRICE workshop lineage
- `/contact/` — stays at root, generic contact info

Both remain as `content/about.md` and `content/contact.md`, unchanged in location.

## Template Changes

### Existing templates (mostly unchanged)

| Template | Change |
|----------|--------|
| `_default/baseof.html` | No change |
| `_default/single.html` | No change |
| `partials/header.html` | Add year dropdown navigation |
| `partials/footer.html` | No change |
| `presentations/list.html` | No structural change (works automatically for year-scoped sections) |
| `presentations/single.html` | No structural change |

### New templates

**`layouts/section-year.html`**
- Renders the landing page for any year section (`/2026/`, `/2025/`)
- If section is the current year (2026): render the rich homepage format (hero, deadlines, keynote, etc.) using params from the section's `_index.md`
- If section is a past year: render a simple landing card with title and content
- Uses Hugo's `.LastSection` or section name to detect which year it is

**`layouts/section-year-single.html`**
- Renders sub-pages within any year section (`/2026/about/`, `/2026/schedule/`, etc.)
- Same as current `_default/single.html`: title + `.Content`
- Adds year-aware breadcrumbs

**`layouts/past-years/list.html`**
- Renders the past years index page, listing all year sections with links

### Homepage template (`index.html`)

Rewritten to display the root hub page (year selection grid + about blurb).

### Navigation template (`partials/header.html`)

Add a "Years" dropdown menu. Populated from `{{ range site.Sections }}` filtered by year sections. The current year is highlighted as active.

## Navigation

New `[[menu.main]]` entry in `config.toml`:

```toml
[[menu.main]]
  name = "Years"
  identifier = "years"
  weight = 15
  params = { dropdown = true }

[[menu.main]]
  name = "2026"
  identifier = "2026"
  url = "/2026/"
  weight = 1
  parent = "years"

[[menu.main]]
  name = "2025"
  identifier = "2025"
  url = "/2025/"
  weight = 2
  parent = "years"

[[menu.main]]
  name = "Past Years"
  identifier = "past"
  url = "/past-years/"
  weight = 3
  parent = "years"
```

Root-level pages stay in nav: About, Call for Papers, Schedule (moved to `/2026/schedule/`), Organizers, Contact.

## URL Redirects

Root `/` redirects to `/2026/` (via Hugo redirect frontmatter on `_index.md`). Users can still access the root hub page at a different path if desired later.

## Migration Steps

1. **Restructure content**: Move 2026 files from `content/*.md` → `content/2026/` and `content/presentations/` → `content/2026/presentations/`, `content/schedule/` → `content/2026/schedule/`
2. **Create root hub page**: Rewrite `content/_index.md` as a simple hub
3. **Create year landing pages**: `content/2026/_index.md` (current homepage content), `content/2025/_index.md` (basic info)
4. **Create past years index**: `content/past-years/_index.md`
5. **Add new templates**: `section-year.html`, `section-year-single.html`, `past-years/list.html`
6. **Update homepage template**: `index.html` for root hub rendering
7. **Update navigation**: `partials/header.html` with year dropdown, `config.toml` with year menu entries
8. **Add CSS for year dropdown**: `style.css`
9. **Test**: Verify all URLs render correctly

## Files to Create

| File | Purpose |
|------|---------|
| `content/2026/_index.md` | 2026 main page (current homepage content) |
| `content/2025/_index.md` | 2025 landing page (brief) |
| `content/past-years/_index.md` | Past years index |
| `themes/custom/layouts/section-year.html` | Year landing page template |
| `themes/custom/layouts/section-year-single.html` | Year sub-page template |
| `themes/custom/layouts/past-years/list.html` | Past years listing |

## Files to Modify

| File | Change |
|------|--------|
| `content/_index.md` | Rewrite as root hub |
| `content/2026/about.md` | Move from `content/about.md` (shared stays at root) |
| `content/2026/call-for-papers.md` | Move from `content/call-for-papers.md` |
| `content/2026/contact.md` | Move from `content/contact.md` (shared stays at root) |
| `content/2026/organizers.md` | Move from `content/organizers.md` |
| `content/2026/schedule/_index.md` | Move from `content/schedule/_index.md` |
| `content/2026/presentations/*.md` | Move from `content/presentations/*.md` |
| `themes/custom/layouts/index.html` | Rewrite as root hub template |
| `themes/custom/layouts/partials/header.html` | Add year dropdown |
| `themes/custom/static/css/style.css` | Add dropdown styles |
| `config.toml` | Add year menu entries |

## Files to Keep at Root

| File | URL |
|------|-----|
| `content/about.md` | `/about/` |
| `content/contact.md` | `/contact/` |
| `content/_index.md` | `/` |

These remain unchanged since they contain shared/generic content.