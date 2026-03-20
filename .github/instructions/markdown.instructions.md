---
description: "Use when: editing or creating Markdown content files in content/ directory. Helps maintain consistent formatting, structure, and frontmatter."
applyTo: "content/**/*.md"
---

# Markdown Content Guidelines

Files matching: `content/**/*.md`

## Frontmatter (Required)

Every Markdown file must start with YAML frontmatter:

```yaml
---
title: "Page Title"
date: 2026-03-19
---
```

**Required fields:**
- `title`: Page title (appears in browser tab, navigation)
- `date`: Publication date (YYYY-MM-DD format)

## Structure

### Main Heading Pattern
```markdown
---
title: "Page Title"
date: 2026-03-19
---

## First Section Title

Content here...

### Subsection

More content...
```

**Important**: Start body content with `##` (not `#`). The `#` is reserved for the generated page title.

## Markdown Conventions

### Headings
- `##` - Main sections
- `###` - Subsections
- `####` - Sub-subsections (rarely used)

### Lists
Use lists for 3+ items:
```markdown
- Item one
- Item two
- Item three
```

Nested lists:
```markdown
- Parent item
  - Child item
  - Another child
- Another parent
```

### Bold & Italic
```markdown
**Bold text**
*Italic text*
***Bold and italic***
```

### Links
Always use relative paths:
```markdown
[Link text](/target-page/)
[Call for Papers](/call-for-papers/)
```

❌ Don't use: `https://price-workshop.org/page/` (breaks if domain changes)

### Tables
Use standard Markdown tables:
```markdown
| Column One | Column Two |
|-----------|-----------|
| Data      | Data      |
| Data      | Data      |
```

### Code Blocks
Inline code: `` `code` ``
Block code:
````markdown
```bash
command here
```
````

### Blockquotes
```markdown
> This is a blockquote
```

## Content Length

- **Paragraphs**: 2-3 sentences max
- **Sections**: 2-4 paragraphs typically
- **Lists**: 3-8 items realistic
- **Page**: 500-2000 words typical

## Common Content Patterns

### Page Introduction
```markdown
## [Section Name]

Describe what this section covers and why it matters to the reader.

### [Subsection]
```

### Feature List
```markdown
## Features

- **Feature One**: Brief description
- **Feature Two**: Brief description
- **Feature Three**: Brief description
```

### Important Dates
```markdown
## Timeline

- **January 15**: Submission opens
- **March 1**: Submission deadline
- **April 15**: Notification of acceptance
```

## Checklist Before Committing

- [ ] Frontmatter present (`title` and `date`)
- [ ] Main sections start with `##`
- [ ] No broken links (test with `hugo server`)
- [ ] Lists are scannable
- [ ] Tone is professional but accessible
- [ ] No spelling errors
- [ ] Related pages linked

## Testing

After editing, test locally:
```bash
hugo server
# Navigate to http://localhost:1313
# Click around and verify layout
# Check links work
```

## Questions from Content Writer Agent

Ask before editing:
- "Should I add this to the navigation menu?"
- "Is this replacing or adding new content?"
- "What tone should this have?"

---

See `.github/agents/content-writer.agent.md` for detailed content guidelines.
