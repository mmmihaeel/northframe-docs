# Third-Party Inventory

## Overview

This repository bundles third-party components and derivative package material. Their notices and licensing terms must remain intact where provided.

## Inventory

| Component | Path | License Signal | Keep Notice | Public Repo Risk |
| --- | --- | --- | --- | --- |
| Bootstrap | `assets/css/bootstrap.min.css`, `documantion/plugins/bootstrap-4/`, `documantion/css/plugins/bootstrap/` | MIT-style upstream notice in source | Yes | Low |
| Font Awesome assets | `assets/fonts/`, `documantion/fonts/fontawesome-5/` | Upstream bundled asset licensing | Yes | Low to moderate |
| PrismJS | `documantion/plugins/prismJs/` | Upstream bundled library | Yes | Low |
| jQuery and frontend plugins | `documantion/plugins/`, `assets/js/` | Upstream bundled libraries | Yes | Low |
| TGM Plugin Activation | `inc/plugins/class-tgm-plugin-activation.php` | GPL-compatible upstream library | Yes | Low |
| Bundled plugin ZIPs | `inc/plugins/plugin-files/` | Packaged binaries | Yes | Moderate |
| Demo content exports | `inc/demo-contents/` | Package content, not pure vendor code | Yes | High |

## Repository Notice Boundary

| Area | Treatment |
| --- | --- |
| Third-party source headers | Must remain |
| Upstream copyright blocks | Must remain |
| Project-facing branding | Can be updated |
| Split-license files | Must remain |

## Publication Notes

- Demo content and packaged theme assets may carry redistribution constraints that are separate from generic open-source library notices.
- The presence of GPL text does not override the explicit split-license notice bundled with the package.
