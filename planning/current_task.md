### Task 2.2 — Create Collection Folders + Example Entries

**Type**: Content+Research
**Effort**: M (1-2 days)
**Depends on**: 2.1

#### Recommended Models

| Rank | Model               | Provider(s)                    | Why                                                                                                                                        |
| ---- | ------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 1    | **Hy3 Preview**     | OpenCode Zen, Kilo, OpenRouter | Daily-reset (effectively free), A-tier with web browsing. Can research and verify real Indian creators before writing entries. Start here. |
| 2    | **Gemini 3.1 Pro**  | Google Antigravity             | S-tier. Web browsing for stricter fact verification. Escalate when Hy3 Preview produces unverifiable claims.                               |
| 3    | **Kimi K2.6**       | Ollama Cloud, Kilo, Fireworks  | S-tier. Multimodal + strong instruction-following for structured content. Escalate if research quality needs to improve.                   |
| 4    | **DeepSeek V4-Pro** | Ollama, Fireworks              | S-tier reasoning. Good for researching complex Indian tech projects.                                                                       |
| 5    | **MiniMax M2.7**    | Ollama, Nvidia NIM, Fireworks  | A+ tier. Good at structured content but lacks web browsing — use only for formatting/writing passes after facts are verified elsewhere.    |

> **Important**: Research tasks need models that produce accurate, verifiable facts. Models without web browsing **must not be rank 1** here — they will hallucinate URLs and metrics.

#### Context

Each new collection needs a folder and at least 2 real example entries (not dummy data) to test the schema and serve as templates.

#### Read First

- `planning/CONTENT-GUIDELINES.md` — editorial voice, templates
- `planning/CONTENT-ARCHITECTURE.md` — schemas for reference
- `src/content/apps/mindful.mdx` — example of a well-written entry
- `src/content/config.ts` — the schemas you're writing entries for

#### What to Create

Create folders and 2 entries each. Research REAL Indian creators/projects:

| Collection  | Folder                     | Suggested Research Targets                         |
| ----------- | -------------------------- | -------------------------------------------------- |
| channels    | `src/content/channels/`    | Popular Indian tech/education YouTubers            |
| products    | `src/content/products/`    | Indian D2C products or made-in-India tech products |
| blogs       | `src/content/blogs/`       | Indian tech blogs, newsletters                     |
| projects    | `src/content/projects/`    | Indian-maintained OSS libraries/tools (not apps)   |
| communities | `src/content/communities/` | Indian dev communities on Discord/Telegram         |
| podcasts    | `src/content/podcasts/`    | Indian tech/business podcasts                      |
| initiatives | `src/content/initiatives/` | Indian NGOs or social movements                    |

**For each entry**:

1. Research the subject — verify it's real, active, Indian-made/led
2. Create MDX file with complete frontmatter (all available fields filled)
3. Write 150-400 word body following templates in `CONTENT-GUIDELINES.md`
4. Ensure slugs are kebab-case lowercase
5. If logo/image is available, add to `src/assets/images/` and register in `src/utils/imageRegistry.ts`

#### Verify

```bash
npm run build
```

- All 14 new entries (7 collections x 2) pass schema validation
- No build errors
- Frontmatter matches schema exactly

---