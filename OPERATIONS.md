# Operations

## Packaging

1. Ensure the theme directory contains the intended release contents.
2. Verify public-facing branding in `style.css`, README, and documentation files.
3. Keep licensing files attached to the package.
4. Archive the theme directory as a ZIP for WordPress upload.

## Release Checklist

| Step | Required | Automated | Owner | Notes |
| --- | --- | --- | --- | --- |
| Review branding metadata | Yes | No | Maintainer | `style.css`, docs, README |
| Review audit status | Yes | No | Maintainer | `AUDIT.md` should reflect current state |
| Run PHP syntax checks on edited files | Yes | No | Maintainer | Local validation step |
| Commit release changes | Yes | No | Maintainer | Keep message scoped and intentional |
| Push release branch/tag | Yes | No | Maintainer | Private code repo by default |
| Publish docs site | Conditional | No | Maintainer | Use docs-only public repo for GitHub Pages |

## Publication Decision Table

| Publication Target | Recommended | Why |
| --- | --- | --- |
| Private theme repo | Yes | Keeps packaged source private while work is audited |
| Public docs-only repo | Yes | Good portfolio/showcase path |
| Public full package repo | Conditional | Requires explicit redistribution confidence |

## GitHub Pages Checklist

| Step | Required | Notes |
| --- | --- | --- |
| Use a public repository on GitHub Free | Yes | Private repo Pages is not available on GitHub Free |
| Publish sanitized docs only | Recommended | Avoid exposing packaged theme assets without rights review |
| Set Pages source | Yes | Branch root or Actions |
| Verify Mermaid rendering | Recommended | GitHub Markdown supports Mermaid |
| Add homepage URL back to the main repo | Recommended | Makes the project feel connected |

## Maintainer Workflow

| Activity | Primary File |
| --- | --- |
| Branding and metadata updates | `style.css`, `README.md`, docs files |
| Runtime review | `inc/`, root templates, `assets/js/aximo-main.js` |
| Audit refresh | `AUDIT.md` |
| Compatibility decisions | `COMPATIBILITY.md` |
| Third-party review | `THIRD_PARTY.md` |
