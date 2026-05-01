# Awesome Bharat — Content Architecture & Taxonomy

This document defines the complete information architecture: every content type, their schemas, the dual taxonomy system, tagging strategy, and the Opportunities concept.

---

## Table of Contents

1. [Dual Navigation Model](#dual-navigation-model)
2. [Domain Taxonomy](#domain-taxonomy)
3. [Content Types](#content-types)
4. [Primary CTA Mapping](#primary-cta-mapping)
5. [Tagging Strategy](#tagging-strategy)
6. [Opportunities Section](#opportunities-section)
7. [News & Achievement Cards](#news--achievement-cards)
8. [Cross-References & Relationships](#cross-references--relationships)

---

## Dual Navigation Model

Users can discover content through two complementary axes:

### Axis 1: By Content Type
What something IS — the format of the content.

```
/apps/              → All apps
/people/            → All persons
/companies/         → All companies
/channels/          → All YouTube channels
/products/          → All products
/blogs/             → All blogs & newsletters
/projects/          → All open-source projects (non-app)
/communities/       → All communities & Discord servers
/podcasts/          → All podcasts
/initiatives/       → All NGOs, movements, social initiatives
```

### Axis 2: By Domain
What area/field something belongs to — the subject matter.

```
/domains/space/          → Everything related to space (ISRO, private cos, people, apps, channels)
/domains/health/         → Health & wellness across all content types
/domains/environment/    → Climate, sustainability, clean India initiatives
/domains/education/      → EdTech, educators, learning platforms
...
```

### Connecting Layer: Tags
Tags cut across both axes. A tag page (`/tags/[tag]`) shows everything tagged with that term, regardless of content type or domain.

```
/tags/women-in-tech/     → All women who achieved something in tech (people, apps, companies, channels)
/tags/open-source/       → All open-source things (apps, projects, tools)
/tags/ai/                → Everything AI-related across all types and domains
```

### Navigation Flow

```
Homepage
├── Browse by Domain → /domains/[domain]/ → Domain landing page (Opportunities + grouped content)
├── Browse by Type   → /apps/, /people/, /channels/, etc. → Listing pages
└── Browse by Tag    → /tags/[tag]/ → Cross-cutting results
```

---

## Domain Taxonomy

Domains are a curated Zod enum — structured and controlled, but extensible as new domains are added. Same pattern as the existing `categories` field on apps.

### Domain Enum (initial set)

```typescript
const domainEnum = z.enum([
  // Science & Technology
  'technology',
  'space',
  'defense',
  'artificialIntelligence',

  // Health & Wellness
  'health',
  'mentalHealth',

  // Environment & Sustainability
  'environment',
  'agriculture',
  'cleanEnergy',

  // Education & Knowledge
  'education',
  'research',

  // Business & Economy
  'startups',
  'finance',
  'manufacturing',

  // Social Impact
  'socialImpact',
  'governance',
  'ruralDevelopment',

  // Arts & Culture
  'arts',
  'music',
  'cinema',
  'literature',
  'heritage',

  // Sports & Fitness
  'sports',
  'fitness',

  // Infrastructure
  'infrastructure',
  'transportation',

  // Digital & Internet
  'digitalIndia',
  'cybersecurity',
  'gaming',
]);
```

### Domain Display Names

Each domain enum value maps to a display name and emoji:

| Enum | Display Name | Emoji |
|------|-------------|-------|
| `technology` | Technology | 💻 |
| `space` | Space & Exploration | 🚀 |
| `defense` | Defense & Security | 🛡️ |
| `artificialIntelligence` | Artificial Intelligence | 🤖 |
| `health` | Health & Medicine | 🏥 |
| `mentalHealth` | Mental Health & Wellness | 🧠 |
| `environment` | Environment & Sustainability | 🌱 |
| `agriculture` | Agriculture & Food | 🌾 |
| `cleanEnergy` | Clean Energy | ⚡ |
| `education` | Education & Learning | 📚 |
| `research` | Research & Innovation | 🔬 |
| `startups` | Startups & Entrepreneurship | 🦄 |
| `finance` | Finance & Fintech | 💰 |
| `manufacturing` | Manufacturing & Industry | 🏭 |
| `socialImpact` | Social Impact | 🤝 |
| `governance` | Governance & Policy | 🏛️ |
| `ruralDevelopment` | Rural Development | 🏘️ |
| `arts` | Arts & Design | 🎨 |
| `music` | Music | 🎵 |
| `cinema` | Cinema & Film | 🎬 |
| `literature` | Literature & Writing | ✍️ |
| `heritage` | Heritage & Culture | 🏛️ |
| `sports` | Sports | ⚽ |
| `fitness` | Fitness & Wellness | 💪 |
| `infrastructure` | Infrastructure | 🏗️ |
| `transportation` | Transportation | 🚄 |
| `digitalIndia` | Digital India | 🇮🇳 |
| `cybersecurity` | Cybersecurity | 🔒 |
| `gaming` | Gaming | 🎮 |

---

## Content Types

### 1. Apps (existing — `src/content/apps/`)

For mobile, desktop, web, TV, and watch applications.

```typescript
const apps = defineCollection({
  schema: z.object({
    featured: z.boolean().default(false),
    title: z.string(),
    description: z.string(),
    authors: z.array(authorSchema),
    type: z.enum(['app', 'plugin']),
    devices: z.array(z.enum(['auto', 'desktop', 'mobile', 'tv', 'watch'])),
    source: z.enum(['closed-source', 'open-source']),
    paid: z.boolean(),
    ads: z.boolean(),
    offline: z.boolean(),
    categories: z.array(categoryEnum),
    domains: z.array(domainEnum).default([]),       // NEW
    tags: z.array(z.string()),
    website: z.string().url().optional(),
    youtubeVideoIds: z.array(z.string()).optional(),
    youtubeShortsIds: z.array(z.string()).optional(),
    repositoryLinks: z.array(linkSchema).optional(),
    storeLinks: z.array(linkSchema).optional(),
    externalLinks: z.array(linkSchema).optional(),
    socials: z.array(linkSchema).optional(),
    screenshots: z.array(z.object({ url: z.string() })).optional(),
    logo: z.string().optional(),
    date: z.date(),
    draft: z.boolean().default(false),
  }),
});
```

**Primary CTA**: Download (storeLinks) → View on GitHub (repositoryLinks) → Visit Website

---

### 2. Persons (existing — `src/content/persons/`)

For individual people — creators, founders, scientists, artists, activists, etc.

```typescript
const persons = defineCollection({
  schema: z.object({
    featured: z.boolean().default(false),
    name: z.string(),
    bio: z.string().optional(),
    title: z.string().optional(),                    // NEW — professional title/role
    domains: z.array(domainEnum).default([]),        // NEW
    email: z.string().email().optional(),
    website: z.string().url().optional(),
    socials: z.array(linkSchema).optional(),
    achievements: z.array(z.string()).optional(),    // NEW — bullet list of key achievements
    avatar: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});
```

**Primary CTA**: Follow (socials) → Visit Website

---

### 3. Companies (existing — `src/content/companies/`)

For businesses, startups, and corporate entities.

```typescript
const companies = defineCollection({
  schema: z.object({
    featured: z.boolean().default(false),
    name: z.string(),
    description: z.string().optional(),
    founded: z.number().optional(),
    location: z.string().optional(),
    domains: z.array(domainEnum).default([]),        // NEW
    website: z.string().url().optional(),
    members: z.array(z.object({
      slug: z.string(),
      role: z.string(),
    })).optional(),
    socials: z.array(linkSchema).optional(),
    logo: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});
```

**Primary CTA**: Visit Website

---

### 4. YouTube Channels (new — `src/content/channels/`)

For Indian YouTube creators and channels worth watching.

```typescript
const channels = defineCollection({
  schema: z.object({
    featured: z.boolean().default(false),
    name: z.string(),
    description: z.string(),
    channelUrl: z.string().url(),
    channelId: z.string().optional(),
    topics: z.array(z.string()),
    language: z.array(z.string()),
    domains: z.array(domainEnum).default([]),
    authors: z.array(authorSchema).optional(),
    tags: z.array(z.string()),
    logo: z.string().optional(),
    featuredVideoIds: z.array(z.string()).optional(),
    subscriberRange: z.enum(['<1K', '1K-10K', '10K-100K', '100K-1M', '1M+']).optional(),
    draft: z.boolean().default(false),
  }),
});
```

**Primary CTA**: Subscribe → channelUrl

---

### 5. Products (new — `src/content/products/`)

For physical and digital products made in India.

```typescript
const products = defineCollection({
  schema: z.object({
    featured: z.boolean().default(false),
    name: z.string(),
    description: z.string(),
    category: z.string(),
    domains: z.array(domainEnum).default([]),
    buyUrl: z.string().url().optional(),
    website: z.string().url().optional(),
    authors: z.array(authorSchema).optional(),
    tags: z.array(z.string()),
    paid: z.boolean().default(true),
    priceRange: z.string().optional(),              // e.g., "₹500-₹2000"
    madeIn: z.string().default('India'),
    logo: z.string().optional(),
    screenshots: z.array(z.object({ url: z.string() })).optional(),
    draft: z.boolean().default(false),
  }),
});
```

**Primary CTA**: Buy (buyUrl) → Visit Website

---

### 6. Blogs & Newsletters (new — `src/content/blogs/`)

For Indian-authored blogs, newsletters, and publications worth reading.

```typescript
const blogs = defineCollection({
  schema: z.object({
    featured: z.boolean().default(false),
    name: z.string(),
    description: z.string(),
    url: z.string().url(),
    rssUrl: z.string().url().optional(),
    topics: z.array(z.string()),
    language: z.array(z.string()).default(['English']),
    domains: z.array(domainEnum).default([]),
    authors: z.array(authorSchema).optional(),
    frequency: z.enum(['daily', 'weekly', 'biweekly', 'monthly', 'irregular']).optional(),
    tags: z.array(z.string()),
    logo: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});
```

**Primary CTA**: Read → url

---

### 7. Open-source Projects (new — `src/content/projects/`)

For open-source repositories that aren't end-user apps (libraries, frameworks, tools, datasets).

```typescript
const projects = defineCollection({
  schema: z.object({
    featured: z.boolean().default(false),
    name: z.string(),
    description: z.string(),
    repositoryUrl: z.string().url(),
    domains: z.array(domainEnum).default([]),
    language: z.array(z.string()),                  // Programming languages
    authors: z.array(authorSchema).optional(),
    license: z.string().optional(),
    tags: z.array(z.string()),
    starsRange: z.enum(['<100', '100-1K', '1K-10K', '10K+']).optional(),
    website: z.string().url().optional(),
    logo: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});
```

**Primary CTA**: Contribute → repositoryUrl

---

### 8. Communities (new — `src/content/communities/`)

For Discord servers, forums, Telegram groups, and other community spaces.

```typescript
const communities = defineCollection({
  schema: z.object({
    featured: z.boolean().default(false),
    name: z.string(),
    description: z.string(),
    platform: z.enum(['discord', 'telegram', 'slack', 'reddit', 'forum', 'other']),
    joinUrl: z.string().url(),
    domains: z.array(domainEnum).default([]),
    topics: z.array(z.string()),
    memberRange: z.enum(['<100', '100-1K', '1K-10K', '10K-100K', '100K+']).optional(),
    authors: z.array(authorSchema).optional(),
    tags: z.array(z.string()),
    logo: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});
```

**Primary CTA**: Join → joinUrl

---

### 9. Podcasts (new — `src/content/podcasts/`)

For Indian-made podcasts across all platforms.

```typescript
const podcasts = defineCollection({
  schema: z.object({
    featured: z.boolean().default(false),
    name: z.string(),
    description: z.string(),
    website: z.string().url().optional(),
    domains: z.array(domainEnum).default([]),
    platforms: z.array(linkSchema),                 // [{ label: 'Spotify', url: '...' }, ...]
    topics: z.array(z.string()),
    language: z.array(z.string()).default(['English']),
    authors: z.array(authorSchema).optional(),
    frequency: z.enum(['daily', 'weekly', 'biweekly', 'monthly', 'irregular']).optional(),
    episodeCount: z.number().optional(),
    tags: z.array(z.string()),
    logo: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});
```

**Primary CTA**: Listen → first platform link (prefer Spotify/Apple)

---

### 10. Initiatives (new — `src/content/initiatives/`)

For NGOs, social movements, volunteer organizations, and non-profit initiatives.

```typescript
const initiatives = defineCollection({
  schema: z.object({
    featured: z.boolean().default(false),
    name: z.string(),
    description: z.string(),
    mission: z.string().optional(),                 // One-line mission statement
    domains: z.array(domainEnum).default([]),
    website: z.string().url().optional(),
    impact: z.array(z.string()).optional(),          // Key impact stats/achievements
    howToHelp: z.array(z.object({                   // Specific ways to contribute
      action: z.string(),                           // "Volunteer", "Donate", "Spread the word"
      description: z.string().optional(),
      url: z.string().url().optional(),
    })).optional(),
    founded: z.number().optional(),
    location: z.string().optional(),
    authors: z.array(authorSchema).optional(),      // Founders
    socials: z.array(linkSchema).optional(),
    tags: z.array(z.string()),
    logo: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});
```

**Primary CTA**: Get Involved (howToHelp[0].url) → Visit Website

---

## Primary CTA Mapping

| Content Type | Primary CTA Label | Source Field | Fallback |
|---|---|---|---|
| App | Download | `storeLinks[0]` | View on GitHub → Visit Website |
| Person | Follow / Visit | `socials[0]` | `website` |
| Company | Visit | `website` | — |
| YouTube Channel | Subscribe | `channelUrl` | — |
| Product | Buy | `buyUrl` | Visit Website |
| Blog/Newsletter | Read | `url` | — |
| Open-source Project | Contribute | `repositoryUrl` | — |
| Community | Join | `joinUrl` | — |
| Podcast | Listen | `platforms[0].url` | `website` |
| Initiative | Get Involved | `howToHelp[0].url` | `website` |

---

## Tagging Strategy

Tags are free-form strings that cut across all content types and domains. They enable cross-cutting discovery.

### Tag Naming Conventions

- **Lowercase kebab-case**: `women-in-tech`, `open-source`, `climate-action`
- **No duplicates of domains**: Don't use `space` as a tag when `space` is a domain. Tags are for cross-cutting themes.
- **People-focused tags**: `women-in-tech`, `student-founders`, `rural-innovators`
- **Theme tags**: `made-with-flutter`, `bootstrapped`, `award-winning`, `government-backed`
- **Action tags**: `volunteer-friendly`, `accepting-contributions`, `hiring`

### Tag vs Domain vs Category

| Dimension | Purpose | Example | Controlled? |
|---|---|---|---|
| Domain | What field/industry | `space`, `health` | Yes (Zod enum) |
| Category | What sub-type within a content type | `productivity`, `healthAndFitness` (for apps) | Yes (Zod enum, per type) |
| Tag | Cross-cutting theme, attribute, or trait | `women-in-tech`, `open-source`, `ai` | No (free-form) |

---

## Opportunities Section

The Opportunities section appears on **domain landing pages** (`/domains/[domain]/`). It is the most unique and impactful part of Awesome Bharat.

### Purpose

Show visitors:
1. **Where India stands** in this domain (achievements, milestones)
2. **Where India lags** compared to world leaders (gaps, unreached milestones)
3. **Who is already working on it** (link to listed entries)
4. **How you can help** (specific, actionable CTAs)

### Structure

```
┌─────────────────────────────────────────────────────────────────────┐
│  OPPORTUNITIES IN [DOMAIN]                                          │
│                                                                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │ Achievement  │  │ Achievement  │  │ Achievement  │  ← Carousel  │
│  │    Card      │  │    Card      │  │    Card      │              │
│  └──────────────┘  └──────────────┘  └──────────────┘              │
│                                                                     │
│  ┌───────────────────────────────────────────────────┐              │
│  │  India vs World — Comparison Widget               │              │
│  │  India: 3 unicorns in space tech                  │              │
│  │  USA: 47 | China: 12 | Europe: 8                  │              │
│  └───────────────────────────────────────────────────┘              │
│                                                                     │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐        │
│  │  Action Card   │  │  Action Card   │  │  Action Card   │        │
│  │  Volunteer     │  │  Donate        │  │  Promote       │        │
│  │  with [Org]    │  │  to [Org]      │  │  Share on      │        │
│  │                │  │                │  │  social media  │        │
│  └────────────────┘  └────────────────┘  └────────────────┘        │
│                                                                     │
│  ── Recent Milestones ──────────────────────────────────────        │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐                               │
│  │ News    │ │ News    │ │ News    │  ← Achievement-style cards     │
│  │ Card    │ │ Card    │ │ Card    │                               │
│  └─────────┘ └─────────┘ └─────────┘                               │
└─────────────────────────────────────────────────────────────────────┘
```

### Data Model for Opportunities

Opportunities are editorial content stored as part of domain page MDX files:

```
src/content/domains/
├── space.mdx
├── health.mdx
├── environment.mdx
└── ...
```

Each domain MDX file contains:

```yaml
---
domain: space
title: Space & Exploration
emoji: 🚀
description: "India's journey to the stars — from Chandrayaan to private space startups."
achievements:
  - title: "Chandrayaan-3 Soft Landing"
    description: "India became the 4th nation to soft-land on the Moon"
    date: 2023-08-23
    source: "https://www.isro.gov.in/..."
    badge: "🏆 Historic First"
  - title: "Lowest Cost Mars Mission"
    description: "Mangalyaan cost $74M — less than the movie Gravity"
    date: 2014-09-24
    source: "https://..."
    badge: "💰 Record Breaker"
comparisons:
  - metric: "Active satellites in orbit"
    india: 60
    leaders:
      - country: "USA"
        value: 3400
      - country: "China"
        value: 600
    gap: "India needs 10x growth to match global leaders"
  - metric: "Private space startups"
    india: 190
    leaders:
      - country: "USA"
        value: 5000
    gap: "Growing rapidly — 3x growth since 2020"
actions:
  - type: volunteer
    title: "Join ISRO's citizen science program"
    url: "https://..."
  - type: promote
    title: "Share Indian space achievements on social media"
    description: "Most people don't know India is the 4th lunar nation"
  - type: collaborate
    title: "Contribute to Indian space-tech open source"
    url: "https://github.com/..."
milestones:
  - title: "Gaganyaan crew module tested"
    source: "Times of India"
    sourceUrl: "https://..."
    date: 2024-02-15
    thumbnail: "/images/milestones/gaganyaan.jpg"
---

<!-- Optional editorial prose about this domain -->
```

### UI Component Types for Opportunities

1. **Achievement Card** — Gamification-inspired. Badge icon, achievement title, one-liner, date. Visually celebratory (gradients, badges, glow effects). NOT a plain text card.
2. **Comparison Widget** — India vs World. Bar chart or stat comparison. Respectful tone — not shaming, just factual.
3. **Action Card** — Bold CTA. Icon + action verb + who/where + button. Types: Volunteer, Donate, Promote, Collaborate, Learn.
4. **Milestone Card** — News-style but with achievement/gamification aesthetics. Source badge, date, thumbnail, domain tag.

### Editorial Tone for Opportunities

- **Inspiring, not shaming** — "India has 60 satellites; the opportunity is to grow 10x" NOT "India is behind"
- **Factual** — All comparisons cite sources
- **Action-oriented** — Every gap has a corresponding action card
- **Celebratory** — Lead with achievements before showing gaps
- **Specific** — "Volunteer with Clean India Movement in Bangalore" not "Help clean India"

---

## News & Achievement Cards

News cards appear in two contexts:
1. **Domain pages** → under "Recent Milestones" in the Opportunities section
2. **Individual entries** → linked as notable mentions/coverage

### Card Format

```
┌─────────────────────────────────────────┐
│  [🏆 Badge/Domain Tag]       [Date]     │
│                                         │
│  Title of Achievement/Article           │
│  One-line summary or pull quote         │
│                                         │
│  [Thumbnail if available]               │
│                                         │
│  Source: Times of India    [→ Read]     │
└─────────────────────────────────────────┘
```

Design: NOT a plain card. Inspired by gamification/achievement systems (think Xbox achievements, GitHub contribution badges). Subtle gradients, icons, visual badges.

---

## Cross-References & Relationships

### Author ↔ Content
- Every content entry can have `authors: [{ slug, type }]`
- Person/Company entries link back to content they created via slug lookup
- Enables "More by this author" sidebar section

### Domain ↔ Content
- Every content entry has `domains: [domainEnum]`
- Domain pages aggregate all content with matching domain
- Enables domain landing pages with cross-type results

### Tags ↔ Content
- Every content entry has `tags: [string]`
- Tag pages aggregate all content with matching tag
- Enables cross-cutting discovery (`#women-in-tech` spans people, apps, companies, channels)

### Initiatives ↔ Action
- Initiative entries have `howToHelp` array
- Domain Opportunities sections can reference specific initiatives
- Enables the "Volunteer with X" CTAs in action cards

### Entry ↔ News
- News/milestones are stored within domain MDX files
- Individual entries can link to external articles via `externalLinks`
- Future: dedicated `milestones` field per entry for entry-specific news
