# Security Policy

## Current Audit Status

The latest repository audit is documented in [`AUDIT.md`](AUDIT.md). No critical runtime security findings were identified in the reviewed theme code, and the main public AJAX validation gap was remediated.

## Reporting

If you discover a security issue in this package, report it privately to the maintainer before disclosing details publicly.

- GitHub profile: <https://github.com/mmmihaeel>
- LinkedIn: <https://www.linkedin.com/in/mykhailo-yarytskyi-330aa0284/>

Include:

- affected file or component
- reproduction steps
- impact summary
- suggested fix if available

## Scope

This repository packages a WordPress theme and related documentation assets. Security reports should focus on exploitable issues in the theme code or bundled integration points, not on general WordPress hardening advice.

## Reporting Expectations

| Field | Required |
| --- | --- |
| Affected file or component | Yes |
| Reproduction steps | Yes |
| Impact summary | Yes |
| Version, tag, or commit | Recommended |
| Suggested fix | Optional |

## Boundaries

| Area | Included |
| --- | --- |
| Theme PHP runtime | Yes |
| Theme frontend JS | Yes |
| Packaging and repo workflows | Yes |
| Generic WordPress hosting hardening | No |
| Third-party plugin issues unrelated to bundled package behavior | No |
