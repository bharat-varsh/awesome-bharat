## Task 9 — Build, verify, and seed data

**9a — Seed domains on existing content.** The domain pages only generate for domains present in content. Add `domains` to the existing app frontmatter so real pages exist. Edit the two files in `src/content/apps/*.mdx` and add (values must be from the 29-key enum):

```yaml
domains:
    - mentalHealth
    - digitalIndia
```

Also add `domains` to `src/content/persons/*.mdx` and `src/content/companies/*.mdx` frontmatter (these currently have none) so the People/Companies groups appear on a domain page:

```yaml
domains:
    - technology
```

**9b — Build.**

```bash
npm run build
```

Expected: build succeeds, and the terminal shows generated routes like `/domains/index.html`, `/domains/mentalHealth/index.html`, `/domains/technology/index.html`.

**9d — Lint/format.**

```bash
npm run lint && npm run format
```

---
