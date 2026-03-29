---
title: Northframe Documentation
layout: default
---

# Northframe

Northframe is a curated WordPress theme package for portfolio, agency, and service websites. This site is the public documentation surface for the project and is intentionally separated from the packaged theme source.

## Documentation Map

| Document | Purpose |
| --- | --- |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Theme structure and runtime flow |
| [AUDIT.md](AUDIT.md) | Quality, security, and publication audit |
| [COMPATIBILITY.md](COMPATIBILITY.md) | Compatibility boundaries and retained identifiers |
| [OPERATIONS.md](OPERATIONS.md) | Packaging, release, and publication workflow |
| [THIRD_PARTY.md](THIRD_PARTY.md) | Third-party inventory and license boundaries |
| [SUPPORT.md](SUPPORT.md) | Support policy and reporting expectations |
| [SECURITY.md](SECURITY.md) | Security policy |

## Architecture Snapshot

```mermaid
flowchart TD
  A["WordPress bootstrap"] --> B["functions.php"]
  B --> C["inc/init.php"]
  C --> D["Theme setup and supports"]
  C --> E["Theme options / Redux"]
  C --> F["Template helpers"]
  C --> G["Widgets and ACF fields"]
  F --> H["template-parts/*"]
  E --> I["Runtime option reads"]
  H --> J["Rendered theme output"]
```

## Publication Note

This GitHub Pages site is documentation-only. It exists so the project can be presented publicly without forcing the full packaged theme source into a public distribution path by default.
