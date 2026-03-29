# Custom Domain Scaffold

## Purpose

This repository is ready for GitHub Pages on the default `github.io` domain and includes a scaffold for moving to a custom domain later.

## Files

| File | Purpose |
| --- | --- |
| `CNAME.example` | Example custom domain entry |
| `_config.yml` | Current `url` and `baseurl` settings for the default Pages domain |

## How To Switch

1. Pick the final domain, for example `docs.example.com`.
2. Copy `CNAME.example` to `CNAME`.
3. Replace the placeholder value with the real domain.
4. Update `_config.yml`:
   - set `url` to `https://docs.example.com`
   - set `baseurl` to an empty string if the docs live at the domain root
5. Configure DNS with your domain provider.
6. Enable the custom domain in GitHub Pages settings.

## Example

```text
docs.example.com
```
