# Contributing

## Principles

- Preserve runtime compatibility unless a change is intentionally scoped as a functional fix.
- Keep legacy internal identifiers in place unless a full migration plan exists.
- Do not remove or alter third-party license notices.
- Keep documentation, credits, and changelog entries in sync with packaging changes.

## Pull Request Scope

- branding cleanup
- documentation improvements
- compatibility-safe metadata updates
- non-invasive packaging fixes

## Before Submitting

1. Review licensing implications for any asset you add or replace.
2. Avoid refactors that rename internal slugs or namespaces unless explicitly planned.
3. Update [`CHANGELOG.md`](CHANGELOG.md) when the package-facing output changes.
