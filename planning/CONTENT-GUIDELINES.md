# Awesome Bharat — Content Curation & Editorial Guidelines

Standards for what goes in, how it's written, and the editorial voice. This document ensures every entry on Awesome Bharat meets the same quality bar regardless of who writes it.

---

## Table of Contents

1. [Inclusion Criteria](#inclusion-criteria)
2. [Exclusion Criteria](#exclusion-criteria)
3. [Editorial Voice](#editorial-voice)
4. [Content Depth Per Entry](#content-depth-per-entry)
5. [Frontmatter Completeness](#frontmatter-completeness)
6. [MDX Body Writing Guide](#mdx-body-writing-guide)
7. [Opportunities Section Writing](#opportunities-section-writing)
8. [Tag Usage Guidelines](#tag-usage-guidelines)
9. [Domain Assignment Guidelines](#domain-assignment-guidelines)
10. [Examples & Templates](#examples--templates)

---

## Inclusion Criteria

Every entry must pass ALL of the following:

### Must Be Indian-Made or Indian-Led

- Created by an Indian citizen or person of Indian origin
- OR founded/headquartered in India
- OR the project is primarily led/maintained by Indians
- Diaspora counts — an Indian abroad building something still qualifies
- Collaborations count if a key contributor is Indian

### Must Be Genuinely Noteworthy

Rate on these dimensions (must score well on at least 2):

| Dimension         | What qualifies                                                         |
| ----------------- | ---------------------------------------------------------------------- |
| **Impact**        | Has real users, solves a real problem, or created measurable change    |
| **Quality**       | Well-crafted, polished, demonstrates skill and care                    |
| **Uniqueness**    | Does something novel, approaches a problem differently, or fills a gap |
| **Accessibility** | Open to all, free or affordable, reduces barriers                      |
| **Inspiration**   | The story behind it is compelling, motivating, or instructive          |

### Must Have a Clear CTA

The entry must have at least one actionable link:

- An app must have a download link or repository
- A person must have a website or social profile
- A company must have a website
- A channel must have a subscribe link
- An initiative must have a way to get involved

### Must Be Personally Vetted

- The curator has personally verified the claims
- Links are working and lead where expected
- The project is not abandoned (last activity within 2 years for active projects)
- No red flags (spam, scam, misleading claims)

---

## Exclusion Criteria

Do NOT include entries that:

- ❌ Are primarily a copy/clone with no meaningful differentiation
- ❌ Have deceptive practices (hidden fees, misleading descriptions, data harvesting)
- ❌ Are abandoned with no indication of value in their existing state
- ❌ Exist only as an idea/concept with no shipped product or output
- ❌ Are generic/template-based with no real curation or creation effort
- ❌ Violate ethical standards (discriminatory, harmful, exploitative)
- ❌ Are purely self-promotional with no genuine value to users
- ❌ Cannot be verified (anonymous, no public presence, unverifiable claims)

---

## Editorial Voice

### Tone Attributes

| Attribute           | Description                                | Example                                                         |
| ------------------- | ------------------------------------------ | --------------------------------------------------------------- |
| **Celebratory**     | We're proud of what Indians build          | "India's answer to..." → "A remarkable Indian creation that..." |
| **Concise**         | Get to the point fast                      | Not a 500-word essay. 150-400 words max.                        |
| **Action-oriented** | Every word points toward doing something   | End with urgency, not a whimper                                 |
| **Specific**        | Concrete facts over vague praise           | "Used by 500K+ users" not "Very popular"                        |
| **Inclusive**       | All domains, all backgrounds, all of India | Not just tech-bro culture                                       |
| **Honest**          | No sycophancy, no hype                     | Praise what deserves it. Don't oversell.                        |

### Voice Do's and Don'ts

**DO:**

- Lead with the most interesting fact
- Use numbers and specifics ("30% reduction in screen time")
- Name what makes it different from alternatives
- Write as if recommending to a friend
- Use active voice ("Mindful blocks distracting content" not "Distracting content is blocked by Mindful")

**DON'T:**

- Use generic marketing language ("revolutionary", "game-changing", "best-in-class")
- Write encyclopedia-style neutral prose
- Include the full feature list (that's what their website is for)
- Use jargon that excludes non-technical readers
- Be preachy or moralistic (especially in Opportunities sections)
- Start with "In today's world..." or other filler openings

### Opening Line Formula

The first sentence must hook. Use one of these patterns:

1. **The Problem Hook**: "Tired of losing hours to mindless scrolling?"
2. **The Stat Hook**: "1500+ free sleep sounds, designed by sleep scientists."
3. **The Unique Angle**: "The only screen-time app that respects your privacy by design."
4. **The Achievement**: "Built in a hostel room, now used by 500K Android users."
5. **The Contrast**: "Most focus apps sell your data. Mindful doesn't even collect it."

---

## Content Depth Per Entry

### Frontmatter: Complete and Precise

Every available field should be filled. Don't leave optional fields empty if the information exists.

### MDX Body: 150–400 Words

Structure:

1. **Hook** (1-2 sentences) — Why should I care?
2. **Key Sections** (2-4 bullet groups with bold headings) — What does it do / what did they achieve?
3. **Closer** (1 sentence) — Punchy sign-off or CTA reinforcement

### What NOT to Include in the Body

- Installation instructions (that's what their README is for)
- Full feature lists (link to their website)
- Technical architecture details (unless the project IS the architecture)
- Biographical timeline (just highlights)
- Pricing details (just note if paid/free)

---

## Frontmatter Completeness

### Required Fields (must be present for all entries)

| Collection  | Required Fields                                                                                |
| ----------- | ---------------------------------------------------------------------------------------------- |
| Apps        | title, description, authors, type, devices, source, paid, ads, offline, categories, tags, date |
| Persons     | name                                                                                           |
| Companies   | name                                                                                           |
| Channels    | name, description, channelUrl, topics, tags                                                    |
| Products    | name, description, tags                                                                        |
| Blogs       | name, description, url, topics, tags                                                           |
| Projects    | name, description, repositoryUrl, tags                                                         |
| Communities | name, description, platform, joinUrl, tags                                                     |
| Podcasts    | name, description, platforms, topics, tags                                                     |
| Initiatives | name, description, tags                                                                        |

### Strongly Recommended (fill if info is available)

- `domains` — assign at least one domain to every entry
- `website` — the primary URL for the subject
- `socials` — at least one social link
- `logo` — visual identity makes cards much more compelling
- `featured` — set to `true` for particularly impressive entries

### Description Field Standards

The `description` frontmatter field (not the MDX body) should be:

- 1-3 sentences
- Factual summary of what the thing IS
- No marketing language
- Used in cards and meta tags

```yaml
# ✅ Good description
description: >
    A privacy-first, open-source digital wellbeing app that blocks distracting content
    like Reels and Shorts. All data stays on-device.

# ❌ Bad description (too vague)
description: "An amazing app that helps you focus better."

# ❌ Bad description (too long)
description: "Mindful is a revolutionary app built by a passionate Indian developer..."
```

---

## MDX Body Writing Guide

### Template for Apps

```markdown
**[Hook sentence — problem or unique angle]**

[App Name] [what it does differently in 1-2 sentences].

#### **[Key Feature Category 1]**

- [Specific feature with benefit]
- [Another specific feature]
- [Quantified impact if available]

#### **[Key Feature Category 2]**

- [Feature]
- [Feature with differentiation]

#### **[Key Feature Category 3]** (optional)

- [Feature]

[Punchy closer: why this matters or who it's for]

✨ **[3-4 word summary of key traits]**
```

### Template for Persons

```markdown
**[Who they are + their most notable achievement in one sentence]**

[Name] [brief background — 1-2 sentences on their journey].

#### **Key Achievements**

- [Achievement 1 with specifics]
- [Achievement 2]
- [Achievement 3]

#### **Current Work**

[What they're doing now — 1-2 sentences]

[Inspirational closer or call to follow their work]
```

### Template for Initiatives

```markdown
**[The problem they're solving + scale of impact]**

[Initiative name] [what they do + how they do it — 2 sentences].

#### **Impact So Far**

- [Specific metric: "Cleaned 500 tons of waste from Mumbai beaches"]
- [Specific metric]
- [Specific metric]

#### **How You Can Help**

- 🤝 [Volunteer opportunity]
- 💰 [Donation link/info]
- 📢 [How to spread the word]

[Motivational closer — inspire action]
```

---

## Opportunities Section Writing

The Opportunities section on domain pages is editorial content. It requires research and careful framing.

### Research Process

1. **Find India's achievements** in this domain (historic and recent)
2. **Find comparable world leaders** (USA, China, EU, Japan, etc.)
3. **Identify gaps** — where India lags or hasn't started
4. **Find who's working on it** — link to existing entries on Awesome Bharat
5. **Define actions** — specific ways a visitor can help

### Writing Achievements

```yaml
achievements:
    - title: 'Short, punchy title (5-8 words)'
      description: 'One sentence explaining why this matters'
      date: 2023-08-23
      source: 'https://credible-source-url'
      badge: "🏆 Category — e.g., 'Historic First', 'World Record', 'Breakthrough'"
```

**Rules:**

- Title must be immediately understandable
- Description adds context, not just repeats the title
- Source must be a credible URL (news outlet, official site, Wikipedia)
- Badge should feel celebratory (use appropriate emoji)

### Writing Comparisons

```yaml
comparisons:
    - metric: 'Clear, specific metric name'
      india: 60
      leaders:
          - country: 'USA'
            value: 3400
      gap: 'Neutral framing of the gap + growth if applicable'
```

**Tone rules for comparisons:**

- ✅ "India has 60 satellites; the opportunity is to grow 10x in the next decade"
- ✅ "Growing rapidly — 3x growth since 2020"
- ❌ "India is way behind the US"
- ❌ "India needs to catch up"
- Frame gaps as **opportunities**, not **failures**
- Always mention growth trajectory if positive
- Include context if the gap has historical reasons

### Writing Action Cards

```yaml
actions:
    - type: volunteer | donate | promote | collaborate | learn
      title: "Verb + specific target (e.g., 'Join ISRO citizen science program')"
      description: 'One sentence on what this involves' # optional
      url: 'https://specific-link-to-take-action'
```

**Rules:**

- Every action must have a working URL
- Title starts with a verb: Join, Contribute, Share, Donate, Learn
- Be specific: "Volunteer with [Org Name] in [City]" not "Help the environment"
- Include variety: mix volunteer, donate, promote, and collaborate options
- Don't be preachy — present options, don't guilt-trip

---

## Tag Usage Guidelines

### When to Create a New Tag

Create a new tag when:

- It applies to 3+ entries across multiple content types
- It represents a cross-cutting theme not captured by domains or categories
- It helps users discover related content they wouldn't find otherwise

Don't create a tag if:

- It would only apply to 1-2 entries (too specific)
- It duplicates a domain name (use the domain field instead)
- It's too generic to be useful ("good", "popular", "indian")

### Tag Naming Rules

- **Lowercase kebab-case**: `women-in-tech`, `climate-action`, `made-with-flutter`
- **Descriptive**: Should be clear what entries this groups
- **Consistent**: Check existing tags before creating similar ones
- **No plurals if singular works**: `ai` not `artificial-intelligence` (keep short)

### Tag Categories

| Type              | Examples                                                            | Purpose                          |
| ----------------- | ------------------------------------------------------------------- | -------------------------------- |
| **People traits** | `women-in-tech`, `student-founders`, `rural-innovators`             | Group by maker demographics      |
| **Tech stack**    | `made-with-flutter`, `built-with-react`, `python`                   | Group by technology              |
| **Attributes**    | `open-source`, `bootstrapped`, `award-winning`, `government-backed` | Group by project characteristics |
| **Themes**        | `digital-detox`, `climate-action`, `accessibility`                  | Group by subject matter          |
| **Action tags**   | `volunteer-friendly`, `accepting-contributions`, `hiring`           | Group by available actions       |

---

## Domain Assignment Guidelines

Every entry should have at least one domain assigned. Domains represent the field/industry the entry operates in.

### Rules

- Assign 1-3 domains (prefer fewer, more accurate over many)
- Use the most specific domain that fits (don't use `technology` for everything tech-related if `artificialIntelligence` is more accurate)
- An app in multiple domains is fine: a health-tracking AI app → `[health, artificialIntelligence]`
- Persons get the domain of their primary work area
- Companies get the domain of their primary business

### Domain vs Category

- **Domain** = the real-world field (space, health, education)
- **Category** = the software classification within a content type (productivity, entertainment)

An app can be `domain: health` and `category: healthAndFitness` — they serve different navigation purposes.

---

## Examples & Templates

### Example: Well-Written App Entry

See `src/content/apps/mindful.mdx` — demonstrates:

- Compelling description
- Complete frontmatter
- Hook opening
- Feature sections with specifics
- Quantified impact ("reduce screen time by 30%")
- Clear differentiation ("unlike other focus apps...")
- Punchy closer with key traits

### Example: Minimal Person Entry

See `src/content/persons/pawan-nagar.mdx` — demonstrates minimum viable entry. Should be expanded with:

- Bio
- Tags
- Domains
- Socials beyond just GitHub

### Template: New Content Type Entry

When adding the first entry for a new content type, follow this pattern:

1. Check schema in `src/content/config.ts`
2. Create folder: `src/content/{collection}/`
3. Create entry with ALL available fields filled
4. Write body following the appropriate template above
5. Verify: `npm run build`
6. This first entry becomes the reference for all subsequent entries of that type
