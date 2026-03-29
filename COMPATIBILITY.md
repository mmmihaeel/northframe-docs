# Compatibility

## Retained Internal Identifiers

| Component | Current Identifier | Public Label | Rationale | Safe To Rename |
| --- | --- | --- | --- | --- |
| Theme text domain | `aximo` | Northframe | Keeps translations and string lookups stable | No |
| Theme option namespace | `aximo` | Theme Options | Keeps persisted Redux options stable | No |
| Main class | `Aximo_Main` | Internal runtime class | Used directly across templates | No |
| Namespace | `AximoTheme` | Internal runtime namespace | Keeps class references stable | No |
| Helper plugin slug | `aximo-helper` | Theme Helper | Keeps packaged plugin registration stable | No |
| Documentation folder | `documantion/` | Documentation site | Avoids churn in packaged asset paths | Prefer not |

## Safe vs Breaking Changes

| Change Type | Safe | Notes |
| --- | --- | --- |
| Theme display name | Yes | Public branding only |
| README, docs, credits, release notes | Yes | Repo-facing |
| Admin UI labels | Yes | Safe if option keys remain unchanged |
| Text domain rename | No | Requires full localization migration |
| PHP namespace rename | No | Requires broad code refactor |
| Option namespace rename | No | Breaks stored settings |
| Bundled plugin slug rename | No | Breaks TGMPA package mapping |

## Runtime Compatibility Matrix

| Layer | Compatibility State | Notes |
| --- | --- | --- |
| WordPress theme bootstrap | Stable | Conventional include-based structure |
| Elementor integration | Expected | Theme assumes Elementor-driven page composition |
| Redux options | Expected | Required for full admin option surface |
| ACF rules for header/footer control | Expected | Required for include/exclude behavior |
| Bundled plugin installation | Expected | Managed through TGMPA and local ZIP packages |

## Publication Compatibility

| Publication Mode | Recommended | Notes |
| --- | --- | --- |
| Private code repository | Yes | Safest default for the packaged theme |
| Public docs-only repository | Yes | Best option for GitHub Pages showcase |
| Public full source repository | Conditional | Only when redistribution rights are confirmed |
