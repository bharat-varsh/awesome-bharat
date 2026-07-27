### Task 2.3 - Make search behavior explicit in dev and production

Context:

- CODE_REPORT notes Search.astro has a hidden fallback and Pagefind is build-only.
- Developers need a clear dev-mode message.

Read first:

- src/components/Search.astro
- package.json postbuild pagefind command

Files to change:

- src/components/Search.astro
- README.md (optional, if needed for developer note)

Implementation steps:

1. Detect when pagefind index is unavailable.
2. Show a visible non-error helper text in dev mode:
    - Example: "Search is available after npm run build (pagefind index generation)."
3. Keep production behavior unchanged when index exists.

Validation:

- npm run build ->
    - search area should show clear helper state.
    - search should function with index.

Done criteria:

- No hidden fallback state in dev.
- User sees clear instruction instead of silent failure.

### AGENTS.md update after work is completed

Update AGENTS.md with these exact changes:

1. In SEO or Known Issues sections, remove OG image and twitter placeholder warnings.
2. Add one explicit Search note under Key Commands or workflow:
    - npm run build generates pagefind index used by search.
    - In dev mode, search may show helper text until build index exists.
3. If RSS scope was changed, update Build Output or routing notes to match final feed behavior.