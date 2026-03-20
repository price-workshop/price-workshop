---
description: "Custom agents for specialized workflows on the PRICE Workshop website"
---

# Available Custom Agents

This project includes three specialized agents for different aspects of website development. Invoke them via slash commands (`/`) in chat.

## Agents

### 1. Content Writer
**When to use**: Creating or editing page content, writing Markdown, updating copy

**What it does:**
- Writes and edits Markdown content in `content/`
- Maintains consistent professional tone
- Ensures proper structure and formatting
- Writes for both academic and industry audiences

**See**: `.github/agents/content-writer.agent.md`

**Example prompts:**
- "Add a FAQ section to the Contact page"
- "Update the About page to include our new mission statement"
- "Create a new page for past workshops"

---

### 2. Theme Developer
**When to use**: Styling, CSS changes, template updates, responsive design fixes

**What it does:**
- Modifies and maintains custom theme
- Updates CSS and HTML templates
- Ensures responsive design across all devices
- Implements visual enhancements

**See**: `.github/agents/theme-developer.agent.md`

**Example prompts:**
- "The organizers grid isn't responsive on mobile, fix it"
- "Change the primary color from cyan to a different shade"
- "Add a new card component with a gradient border"

---

### 3. Deployment Manager
**When to use**: GitHub Actions, deployment issues, GitHub Pages configuration, DNS

**What it does:**
- Manages GitHub Actions workflows
- Configures GitHub Pages settings
- Troubleshoots deployment failures
- Handles domain and DNS setup

**See**: `.github/agents/deployment-manager.agent.md`

**Example prompts:**
- "The site isn't deploying, help me debug"
- "Update the deployment workflow to run tests first"
- "Verify the custom domain is configured correctly"

---

## Guidance

### Content Changes
→ **Content Writer**

Changes to what the site says, new pages, copyediting.

### Visual/Design Changes
→ **Theme Developer**

CSS updates, layout fixes, styling improvements, new components.

### Infrastructure/Deployment
→ **Deployment Manager**

GitHub Actions, deployment issues, domain configuration, CI/CD workflows.

### General Questions
→ **Workspace Instructions** (copilot-instructions.md)

Project overview, conventions, Hugo best practices.

### Cross-Cutting Changes
**Example**: "Add a new page about sponsorships"

1. Ask **Content Writer** to write the Markdown
2. Ask **Theme Developer** to style any new components
3. Ask **Deployment Manager** to verify it deploys
4. Or coordinate with one agent who can escalate as needed

---

## How to Invoke

In VS Code chat, type `/` to see available agents:

```
/ [Enter] → See list of agents and skills
/content-writer → Start with Content Writer agent
/theme-developer → Start with Theme Developer agent
/deployment-manager → Start with Deployment Manager agent
```

Or mention the agent name naturally: "Ask the Theme Developer to fix the mobile layout"

---

## Shared Context

All agents have access to:
- **Workspace Instructions**: `.github/copilot-instructions.md` (Hugo/theme conventions)
- **File Instructions**: `.github/instructions/` (Markdown and CSS guidelines)
- **Project Structure**: README.md and SETUP.md

---

**For specialized workflows, pick the right agent. For general questions, the workspace instructions apply project-wide.**
