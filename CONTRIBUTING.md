# Thank you for your contribution to Awesome Bharat

## Getting started

### Prerequisites

- Node.js 18+
- npm, pnpm, or yarn

### Installation

1. **Clone this repository**

```bash
git clone git@github.com:bharat-varsh/awesome-bharat.git
cd awesome-bharat
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

Open [localhost:4321](http://localhost:4321) in your browser (We highly recommend using [Ulaa](https://ulaa.com/), a privacy-focused browser by [Zoho](https://www.zohocorp.com/) (The company behind [Arattai](https://www.arattai.in/download.html)))

### Available scripts (run in this order)

| Run order | Command            | Action                                         |
| --------- | ------------------ | ---------------------------------------------- |
| 1         | `npm run dev`      | Start development server at `localhost:4321`   |
| 2         | `npm run lint`     | Run `ESLint` to check for code issues          |
| 3         | `npm run lint:fix` | Automatically fix `ESLint` issues              |
| 4         | `npm run format`   | Format code with `Prettier`                    |
| 5         | `npm run build`    | Build site to `./docs` [**Important**]         |
| 6         | `npm run preview`  | Preview built site locally before raising a PR |

---

## Adding Content

Every content entry is an MDX file in `src/content/{collection}/` with YAML frontmatter. The full schema lives in `src/content/config.ts`.

### Quick Start

```bash
# 1. Scaffold a new entry (creates a draft MDX with template frontmatter)
npm run scaffold -- <type> <slug> [--title "Name"] [--logo]

# Examples:
npm run scaffold -- app my-app --title "My App"
npm run scaffold -- channel my-channel --title "My Channel" --logo

# 2. Fill in the fields (see per-collection table below)
# 3. Write the body (150–400 words)
# 4. Validate
npm run check
npm run build
```

### Types (→ collection folder)

| Type         | Collection folder | Route prefix     | Primary CTA | Schema key               |
| ------------ | ----------------- | ---------------- | ----------- | ------------------------ |
| App          | `apps/`           | `/apps/`         | Download    | `storeLinks`             |
| Person       | `persons/`        | `/people/`       | Follow      | `website` / `socials`    |
| Company      | `companies/`      | `/companies/`    | Visit       | `website`                |
| Channel      | `channels/`       | `/channels/`     | Subscribe   | `channelUrl`             |
| Product      | `products/`       | `/products/`     | Buy         | `buyUrl` / `website`     |
| Blog         | `blogs/`          | `/blogs/`        | Read        | `url`                    |
| Open-source  | `projects/`       | `/projects/`     | Contribute  | `repositoryUrl`          |
| Community    | `communities/`    | `/communities/`  | Join        | `joinUrl`                |
| Podcast      | `podcasts/`       | `/podcasts/`     | Listen      | `platforms[0]`           |
| Initiative   | `initiatives/`    | `/initiatives/`  | Get Involved| `howToHelp[0].url`       |

### Per-collection Required & Recommended Fields

#### ✅ = Schema-required (entry won't build without these)
#### 📋 = Editorial requirement (entry won't surface properly without these)
#### 💡 = Recommended (improves discovery)

<details>
<summary><strong>Apps</strong> <code>src/content/apps/</code></summary>

| Field         | Level | Notes                                      |
| ------------- | ----- | ------------------------------------------ |
| `title`       | ✅    |                                            |
| `description` | ✅    | 1–2 sentence teaser                        |
| `authors`     | ✅    | Array of `{slug, type}` — create person/company entry first |
| `type`        | ✅    | `app` or `plugin`                         |
| `devices`     | ✅    | At least one: auto, desktop, mobile, tv, watch |
| `source`      | ✅    | `open-source` or `closed-source`          |
| `paid`        | ✅    | Boolean                                    |
| `ads`         | ✅    | Boolean                                    |
| `offline`     | ✅    | Boolean                                    |
| `categories`  | ✅    | At least one Google Play-style category    |
| `tags`        | ✅    | At least one free-form tag                 |
| `domains`     | 📋    | At least one — controls domain page surfacing |
| `website`     | 💡    |                                            |
| `logo`        | 💡    | Register in `imageRegistry.ts`             |
| `storeLinks`  | 💡    | Primary CTA source — without it, no Download CTA |

</details>

<details>
<summary><strong>Persons</strong> <code>src/content/persons/</code></summary>

| Field    | Level | Notes                                      |
| -------- | ----- | ------------------------------------------ |
| `name`   | ✅    |                                            |
| `bio`    | 📋    | Brief profile (shown on listing cards)     |
| `tags`   | 📋    | Controls visibility on tag pages           |
| `domains`| 📋    | Controls visibility on domain pages        |
| `socials`| 💡    | Primary CTA source when no website         |
| `website`| 💡    |                                            |
| `avatar` | 💡    | Register in `imageRegistry.ts`             |

</details>

<details>
<summary><strong>Companies</strong> <code>src/content/companies/</code></summary>

| Field         | Level | Notes                                      |
| ------------- | ----- | ------------------------------------------ |
| `name`        | ✅    |                                            |
| `description` | 📋    | Shows on listing cards                     |
| `tags`        | 📋    | Controls visibility on tag pages           |
| `domains`     | 📋    | Controls visibility on domain pages        |
| `website`     | 💡    | Primary CTA source                         |
| `logo`        | 💡    | Register in `imageRegistry.ts`             |
| `location`    | 💡    |                                            |
| `founded`     | 💡    | Year                                       |

</details>

<details>
<summary><strong>Channels</strong> <code>src/content/channels/</code></summary>

| Field          | Level | Notes                                      |
| -------------- | ----- | ------------------------------------------ |
| `name`         | ✅    |                                            |
| `description`  | ✅    |                                            |
| `channelUrl`   | ✅    | YouTube channel URL — also Primary CTA     |
| `topics`       | ✅    | At least one                               |
| `tags`         | ✅    | At least one                               |
| `domains`      | 📋    | At least one                               |
| `language`     | 📋    | At least one                               |
| `subscriberRange` | 💡 |                                         |
| `logo`         | 💡    |                                            |
| `authors`      | 💡    | Links to persons                           |

</details>

<details>
<summary><strong>Products</strong> <code>src/content/products/</code></summary>

| Field         | Level | Notes                                      |
| ------------- | ----- | ------------------------------------------ |
| `name`        | ✅    |                                            |
| `description` | ✅    |                                            |
| `tags`        | ✅    |                                            |
| `domains`     | 📋    | At least one                               |
| `madeIn`      | 📋    | Defaults to `India`                        |
| `website`     | 💡    |                                            |
| `buyUrl`      | 💡    | Primary CTA source                         |
| `priceRange`  | 💡    |                                            |
| `logo`        | 💡    |                                            |
| `authors`     | 💡    | Links to persons/companies                 |

</details>

<details>
<summary><strong>Blogs</strong> <code>src/content/blogs/</code></summary>

| Field         | Level | Notes                                      |
| ------------- | ----- | ------------------------------------------ |
| `name`        | ✅    |                                            |
| `description` | ✅    |                                            |
| `url`         | ✅    | Primary CTA source                         |
| `topics`      | ✅    | At least one                               |
| `tags`        | ✅    | At least one                               |
| `domains`     | 📋    | At least one                               |
| `language`    | 📋    | At least one                               |
| `rssUrl`      | 💡    | Enables RSS feed subscription              |
| `frequency`   | 💡    | daily, weekly, biweekly, monthly, irregular |
| `logo`        | 💡    |                                            |
| `authors`     | 💡    | Links to persons                           |

</details>

<details>
<summary><strong>Projects</strong> <code>src/content/projects/</code></summary>

| Field             | Level | Notes                                      |
| ----------------- | ----- | ------------------------------------------ |
| `name`            | ✅    |                                            |
| `description`     | ✅    |                                            |
| `repositoryUrl`   | ✅    | Primary CTA source                         |
| `language`        | ✅    | Programming language(s)                    |
| `tags`            | ✅    | At least one                               |
| `domains`         | 📋    | At least one                               |
| `license`         | 💡    |                                            |
| `starsRange`      | 💡    | <100, 100-1K, 1K-10K, 10K+                |
| `website`         | 💡    |                                            |
| `logo`            | 💡    |                                            |
| `authors`         | 💡    | Links to persons                           |

</details>

<details>
<summary><strong>Communities</strong> <code>src/content/communities/</code></summary>

| Field          | Level | Notes                                      |
| -------------- | ----- | ------------------------------------------ |
| `name`         | ✅    |                                            |
| `description`  | ✅    |                                            |
| `platform`     | ✅    | discord, telegram, slack, reddit, forum, other |
| `joinUrl`      | ✅    | Primary CTA source                         |
| `tags`         | ✅    | At least one                               |
| `domains`      | 📋    | At least one                               |
| `memberRange`  | 💡    | <100, 100-1K, 1K-10K, 10K-100K, 100K+    |
| `logo`         | 💡    |                                            |
| `authors`      | 💡    | Links to persons                           |

</details>

<details>
<summary><strong>Podcasts</strong> <code>src/content/podcasts/</code></summary>

| Field           | Level | Notes                                      |
| --------------- | ----- | ------------------------------------------ |
| `name`          | ✅    |                                            |
| `description`   | ✅    |                                            |
| `platforms`     | ✅    | Array of `{label, url}` — also CTA source  |
| `topics`        | ✅    | At least one                               |
| `tags`          | ✅    | At least one                               |
| `domains`       | 📋    | At least one                               |
| `language`      | 📋    | At least one                               |
| `frequency`     | 💡    | daily, weekly, biweekly, monthly, irregular |
| `episodeCount`  | 💡    |                                            |
| `logo`          | 💡    |                                            |
| `website`       | 💡    |                                            |
| `authors`       | 💡    | Links to persons                           |

</details>

<details>
<summary><strong>Initiatives</strong> <code>src/content/initiatives/</code></summary>

| Field         | Level | Notes                                      |
| ------------- | ----- | ------------------------------------------ |
| `name`        | ✅    |                                            |
| `description` | ✅    |                                            |
| `tags`        | ✅    | At least one                               |
| `domains`     | 📋    | At least one                               |
| `website`     | 💡    |                                            |
| `howToHelp`   | 💡    | Array of `{action, url}` — also CTA source |
| `mission`     | 💡    |                                            |
| `founded`     | 💡    | Year                                       |
| `location`    | 💡    |                                            |
| `socials`     | 💡    |                                            |

</details>

### Body Content Guidelines

- **Length**: 150–400 words (800–2500 characters)
- **Structure**: Hook → 2–4 short sections → Closing CTA
- **Closing CTA**: End with a call-to-action line starting with `**Ready to` (e.g., `**Ready to try it? Download via the CTA above.**`)
- **No invented data**: All URLs, metrics, and claims must be real and verifiable
- **Reference entry**: `src/content/apps/mindful.mdx` — complete frontmatter + body pattern

### Quality Checklist

Before submitting a PR, verify each item:

- [ ] **Frontmatter**: All schema-required fields present
- [ ] **Domains**: At least one domain set (controls where the entry appears)
- [ ] **Tags**: At least one tag (enables cross-linking)
- [ ] **CTA**: Primary CTA link is valid and working (see per-type table above)
- [ ] **Authors/Members**: Referenced person/company slugs exist in their respective collections
- [ ] **Logo/avatar**: If set, file exists in `src/assets/images/` AND registered in `src/utils/imageRegistry.ts`
- [ ] **draft**: Set to `false` when ready to publish, `true` for work-in-progress
- [ ] **Body**: No TODO placeholders, no example.com URLs, no placeholder text
- [ ] **Schema**: Run `npm run check` (validates all frontmatter against Zod schemas)
- [ ] **Build**: Run `npm run build` (full production build — includes astro check + lint)
- [ ] **Validate**: Run `node scripts/validate-entry.mjs` (additional content quality checks)

### Validation Sequence

```bash
# 1. Quick validation (frontmatter + content quality)
node scripts/validate-entry.mjs src/content/{collection}/{slug}.mdx

# 2. Astro + ESLint check
npm run check

# 3. Full build (includes astro check)
npm run build
```

The validation script (`scripts/validate-entry.mjs`) checks:
- Required frontmatter fields (per schema)
- Editorial requirements (domains, tags, language)
- Author/member slug references (cross-collection validation)
- Logo/avatar file existence in `src/assets/images/`
- Body content quality (length, TODO placeholders, closing CTA)
- CTA link readiness
- URL validity

### Common Pitfalls

| Pitfall | Fix |
| ------- | --- |
| Missing `domains` field | Add at least one domain — controls surfacing on domain pages |
| Image path used directly with `<Image>` | Import from `imageRegistry.ts` instead |
| Author slug doesn't exist | Create the person/company entry first |
| `draft: true` in production | Set `draft: false` to make entry visible |
| Example/TODO URLs in body | Replace all `example.com` and `github.com/TODO` with real URLs |
| No CTA link | Add the correct CTA field for your entry type (see table above) |
| `npm run check` fails | Run `astro check` to see exact schema validation errors |

---

## Project Structure

```
src/
├── content/          # MDX entries (10 collections)
│   ├── config.ts     # Zod schemas for all collections
│   ├── apps/         # App entries
│   ├── persons/      # Person profiles
│   ├── companies/    # Company profiles
│   └── ...
├── components/       # Astro/React UI components
├── layouts/          # Page layout templates
├── pages/            # Route pages
├── utils/            # Utility functions
│   ├── routeUtils.ts       # Cross-collection href resolver
│   ├── ctaUtils.ts         # CTA label/URL resolution
│   ├── imageRegistry.ts    # Image asset registry
│   └── collectionsToScan.ts # Cross-cutting collection lists
└── assets/images/    # Static images (must be registered)
```

---

## Need Help?

- Check existing entries in `src/content/` for reference patterns
- Review the full schema in `src/content/config.ts`
- Open an issue or ask in the project's community
