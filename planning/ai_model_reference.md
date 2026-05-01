# AI Model Capabilities Reference — Coding Task Assignment Guide

> **Purpose:** This document is a structured reference for an LLM orchestrator (e.g., Claude Opus/Sonnet) to assign coding tasks to available free-tier AI models. For each task, the orchestrator should recommend multiple capable models ranked from **best fit** → **capable but overkill**, so the human can pick based on remaining quota.
>
> **Last updated:** April 30, 2026

---

## How to Use This Reference

When assigning a task, match it against the `best_for` and `capability_tags` fields below. Recommend 3–5 models in descending order of fit. Always include at least one "light" model as a fallback for quota-constrained situations. Factor in context window requirements — long-file tasks need models with 128K+ context.

**Capability tiers (for coding):**

| Tier | Description | Representative Closed-Source Equivalent |
|------|-------------|----------------------------------------|
| **S** | Frontier-class. Best-in-class on SWE-Bench Pro, long-horizon agentic coding, multi-file refactors, architectural decisions. | Claude Opus 4.6, GPT-5.4 |
| **A** | Strong general coding. Handles most real-world SWE tasks, good tool use, solid reasoning. | Claude Sonnet 4.6, GPT-5.2 |
| **B** | Competent coder. Good for straightforward tasks, single-file edits, scripting, explanations. | GPT-4.1, Claude Haiku 4.5 |
| **C** | Lightweight / limited. Quick answers, simple scripts, formatting, boilerplate. Best for high-volume low-stakes work. | GPT-4.1 mini |
| **D** | Minimal coding ability. Useful for non-code tasks (summarization, classification) or only very simple snippets. | — |

---

## Model Profiles

---

### DeepSeek V4-Pro
- **Parameters:** 1.6T total / 49B active (MoE)
- **Context:** 1M tokens
- **Modality:** Text only
- **Coding Tier:** S
- **Capability Tags:** `agentic-coding`, `reasoning`, `long-context`, `multi-file-refactor`, `architecture`, `STEM`, `math`
- **Best For:** Complex multi-step coding tasks, competitive programming (Codeforces ~3200), repo-level refactors, long-horizon agent work. Strongest open-weight model as of April 2026. Rivals closed-source frontier models on coding and agentic benchmarks.
- **Weaknesses:** Text-only (no vision). High hallucination rate (~94%). Overkill for simple tasks.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Ollama Cloud | `deepseek-v4-pro` | Daily+weekly limit (unknown cap) |
| Fireworks AI | `DeepSeek-V4-Pro` | $6 one-time credit; $1.74/M in, $3.48/M out; 1M ctx |

---

### DeepSeek V4-Flash
- **Parameters:** 284B total / 13B active (MoE)
- **Context:** 1M tokens
- **Modality:** Text only
- **Coding Tier:** A
- **Capability Tags:** `agentic-coding`, `reasoning`, `long-context`, `fast-inference`, `cost-efficient`
- **Best For:** High-throughput coding tasks where V4-Pro is overkill. Comparable reasoning to V4-Pro when given larger thinking budget (Flash-Max mode). Excellent cost-performance ratio. Good default "workhorse" model.
- **Weaknesses:** Slightly behind V4-Pro on pure knowledge tasks and the most complex agentic workflows. Text-only.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Ollama Cloud | `deepseek-v4-flash` | Daily+weekly limit (unknown cap) |

---

### DeepSeek V3.2
- **Parameters:** 685B total / ~37B active (MoE)
- **Context:** 163K tokens
- **Modality:** Text only
- **Coding Tier:** A
- **Capability Tags:** `general-coding`, `reasoning`, `tool-use`, `agentic-coding`
- **Best For:** Solid general-purpose coding. Previous-gen DeepSeek flagship — still very capable. Good balance of intelligence and cost.
- **Weaknesses:** Superseded by V4 series. Smaller context than V4.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Kiro | `Deepseek V3.2` | 0.25 credits (50/month total) |
| Ollama Cloud | `deepseek-v3.2` | Daily+weekly limit |
| Nvidia NIM | `deepseek-v3.2` | Daily limit |
| Fireworks AI | `Deepseek v3.2` | $6 credit; $0.56/M in, $1.68/M out; 163K ctx |

---

### DeepSeek V3.1
- **Parameters:** 671B total (MoE)
- **Context:** 163K tokens
- **Modality:** Text only
- **Coding Tier:** A-
- **Capability Tags:** `general-coding`, `reasoning`, `long-context`
- **Best For:** General coding and chat. Predecessor to V3.2 — slightly weaker but still solid.
- **Weaknesses:** Superseded by V3.2 and V4.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Ollama Cloud | `deepseek-v3.1 - 671b` | Daily+weekly limit |
| Nvidia NIM | `deepseek-v3.1-terminus` | Daily limit |
| Fireworks AI | `DeepSeek V3.1` | $6 credit; $0.56/M in, $1.68/M out; 163K ctx |

---

### Kimi K2.6
- **Parameters:** 1.1T total / 32B active (MoE, 384 experts)
- **Context:** 256K tokens
- **Modality:** Text + Image + Video input
- **Coding Tier:** S
- **Capability Tags:** `agentic-coding`, `long-horizon`, `multi-language`, `frontend-design`, `agent-swarm`, `tool-use`, `multimodal`
- **Best For:** Long-horizon agentic coding (sustained 13+ hour sessions), multi-step software engineering, frontend/UI generation from prompts or images, cross-language work (Rust, Go, Python, Zig). #1 on Artificial Analysis Intelligence Index among open-weight models. Excellent tool calling and instruction following. Supports agent swarms up to 300 sub-agents.
- **Weaknesses:** Lags GPT-5.4 on GPQA-Diamond and AIME 2026 (high-stakes single-turn reasoning). Not ideal for financial/legal/medical reasoning where being wrong is expensive.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Ollama Cloud | `kimi-k2.6` | Daily+weekly limit |
| Kilo Gateway | `Kimi K2.6` | Daily limit |
| Fireworks AI | `Kimi K2.6` | $6 credit; $0.95/M in, $4.00/M out; 262K ctx |

---

### Kimi K2.5
- **Parameters:** ~1T total / 32B active (MoE)
- **Context:** 256K tokens
- **Modality:** Text + Image
- **Coding Tier:** A+
- **Capability Tags:** `agentic-coding`, `long-horizon`, `tool-use`, `multimodal`
- **Best For:** Strong agentic coding predecessor to K2.6. Still very capable for most coding tasks.
- **Weaknesses:** Superseded by K2.6 with 15%+ improvement across coding benchmarks.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Ollama Cloud | `kimi-k2.5` | Daily+weekly limit |
| Fireworks AI | `Kimi K2.5` | $6 credit; $0.60/M in, $3.00/M out; 262K ctx |

---

### Kimi K2-Thinking
- **Parameters:** ~1T total / 32B active (MoE)
- **Context:** 256K tokens
- **Modality:** Text
- **Coding Tier:** A
- **Capability Tags:** `reasoning`, `chain-of-thought`, `math`, `coding`
- **Best For:** Tasks requiring deep multi-step reasoning with visible chain-of-thought. Good for debugging complex logic.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Ollama Cloud | `kimi-k2-thinking` | Daily+weekly limit |
| Nvidia NIM | `kimi-k2-thinking` | Daily limit |

---

### GLM-5.1 (Z.ai / Zhipu AI)
- **Parameters:** 754B total (MoE)
- **Context:** 128K+ tokens
- **Modality:** Text only
- **Coding Tier:** S
- **Capability Tags:** `agentic-coding`, `long-horizon`, `self-iterating`, `SWE-bench-leader`, `autonomous-optimization`
- **Best For:** Long-horizon agentic engineering (up to 8 hours autonomous). State-of-the-art on SWE-Bench Pro (58.4%). Excels at iterative optimization — can revise strategy hundreds of times across thousands of tool calls. Built a complete Linux desktop from scratch in one session. MIT license, open weights.
- **Weaknesses:** Falls behind Google/OpenAI on some reasoning and knowledge benchmarks. Text-only. Very large model requires enterprise GPU for self-hosting.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Ollama Cloud | `glm-5.1` | Daily+weekly limit |
| Fireworks AI | `GLM 5.1` | $6 credit; $1.40/M in, $4.40/M out; 202K ctx |

---

### GLM-5 (Z.ai / Zhipu AI)
- **Parameters:** 745B total / 44B active (MoE, 256 experts)
- **Context:** 128K+ tokens
- **Modality:** Text only
- **Coding Tier:** A+
- **Capability Tags:** `general-coding`, `reasoning`, `creative-writing`, `agentic`
- **Best For:** Strong general coding, creative writing, multi-step reasoning. #1 open-weight model on LMArena (Text Arena + Code Arena). Base for GLM-5.1. Trained entirely on Huawei Ascend chips.
- **Weaknesses:** Exhausts optimization strategies faster than GLM-5.1 on long-horizon tasks.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Kiro | `GLM 5` | 0.5 credits (50/month total) |
| Ollama Cloud | `glm-5` | Daily+weekly limit |
| Fireworks AI | `GLM-5` | $6 credit; $1.00/M in, $3.20/M out; 202K ctx |

---

### GLM-4.7 (Z.ai / Zhipu AI)
- **Parameters:** Smaller than GLM-5
- **Context:** 128K tokens
- **Modality:** Text
- **Coding Tier:** B+
- **Capability Tags:** `general-coding`, `reasoning`, `cost-efficient`
- **Best For:** Budget-friendly general coding. Freely available on HuggingFace. Good for mid-complexity tasks.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Ollama Cloud | `glm-4.7` | Daily+weekly limit |
| Nvidia NIM | `glm-4.7` | Daily limit |
| Fireworks AI | `GLM-4.7` | $6 credit; $0.60/M in, $2.20/M out; 202K ctx |

---

### MiniMax M2.7
- **Parameters:** 230B total / ~10B active (MoE)
- **Context:** 196K tokens
- **Modality:** Text
- **Coding Tier:** A+
- **Capability Tags:** `agentic-coding`, `self-evolving`, `agent-teams`, `office-automation`, `SRE`, `production-debugging`
- **Best For:** Self-evolving model that participated in its own training. Excellent at production system debugging (reduced incident recovery to <3 min). Strong on SWE-Pro (56.2%), office automation (Excel/PPT/Word), and ML competition tasks. Fastest inference at 100 TPS. Extremely cost-effective ($0.30/M input). Highest ELO among open-weight models on GDPval-AA.
- **Weaknesses:** Smaller active params mean it may struggle with pure knowledge-intensive tasks vs. larger models.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Ollama Cloud | `minimax-m2.7` | Daily+weekly limit |
| Nvidia NIM | `minimax-m2.7` | Daily limit |
| Fireworks AI | `MiniMax M2.7` | $6 credit; $0.30/M in, $1.20/M out; 196K ctx |

---

### MiniMax M2.5
- **Parameters:** 230B total / ~10B active (MoE)
- **Context:** 196K tokens
- **Modality:** Text
- **Coding Tier:** A
- **Capability Tags:** `agentic-coding`, `multi-language`, `full-stack`, `spec-writing`, `office-automation`
- **Best For:** Full development lifecycle — from system design to code review. Strong multilingual coding (10+ languages). Spec-writing tendency: plans architecture before coding. Open-sourced weights. Good for office-suite automation.
- **Weaknesses:** Superseded by M2.7 but still very capable.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Kiro | `Minimax m2.5` | 0.25 credits (50/month total) |
| Ollama Cloud | `minimax-m2.5` | Daily+weekly limit |
| OpenCode Zen | `Minimax M2.5 free` | Daily limit |
| OpenRouter | `MiniMax: MiniMax M2.5 (free)` | Daily limit |
| Fireworks AI | `MiniMax-M2.5` | $6 credit; $0.30/M in, $1.20/M out; 196K ctx |

---

### MiniMax M2.1
- **Parameters:** Smaller MoE variant
- **Context:** ~128K tokens
- **Modality:** Text
- **Coding Tier:** B+
- **Capability Tags:** `general-coding`, `cost-efficient`, `fast`
- **Best For:** Lighter coding tasks, quick iterations, high-throughput batch work.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Kiro | `Minimax m2.1` | 0.15 credits (50/month total) |
| Ollama Cloud | `minimax-m2.1` | Daily+weekly limit |

---

### MiniMax M2
- **Parameters:** Original M2 MoE
- **Coding Tier:** B
- **Capability Tags:** `general-coding`, `legacy`
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Ollama Cloud | `minimax-m2` | Daily+weekly limit |

---

### Qwen3.6 Plus (Alibaba)
- **Parameters:** Hybrid GatedDeltaNet + MoE (~1T total)
- **Context:** 1M tokens
- **Modality:** Text + Image + Video
- **Coding Tier:** S
- **Capability Tags:** `agentic-coding`, `frontend`, `vibe-coding`, `reasoning`, `multimodal`, `long-context`
- **Best For:** Frontier coding model. SWE-bench Verified 78.8%. Major gains in agentic coding, frontend development, 3D scenes, and games. More efficient reasoning than Qwen3.5 (less token waste). Excellent "vibe coding" for rapid UI iteration.
- **Weaknesses:** Proprietary (not open-weight at Plus tier).
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Fireworks AI | `Qwen3.6 Plus` | $6 credit; $0.50/M in, $3.00/M out |

---

### Qwen3.5 (122B-A10B) (Alibaba)
- **Parameters:** 397B total / 17B active (MoE)
- **Context:** 1M tokens (extensible)
- **Modality:** Text + Image + Video
- **Coding Tier:** A
- **Capability Tags:** `general-coding`, `reasoning`, `multimodal`, `long-context`, `instruction-following`
- **Best For:** Strong general-purpose coding with multimodal support. 1M context window. IFBench 76.5 (beat GPT-5.2). Good for large-codebase understanding with vision input.
- **Weaknesses:** Tends to overthink — verbose reasoning chains. Superseded by Qwen3.6 series.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Ollama Cloud | `qwen3.5 - 122b` | Daily+weekly limit |

---

### Qwen3.5 (27B–35B) (Alibaba)
- **Parameters:** 27B dense or 35B-A3B MoE
- **Context:** 262K tokens
- **Modality:** Text + Image + Video
- **Coding Tier:** B+
- **Capability Tags:** `general-coding`, `multimodal`, `efficient`, `local-deployable`
- **Best For:** Efficient coding model for mid-complexity tasks. Good for local deployment. Multimodal input supported.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Ollama Cloud | `qwen3.5 - 27b` | Daily+weekly limit |
| Ollama Cloud | `qwen3.5 - 35b` | Daily+weekly limit |

---

### Qwen3.5 (Small: 0.8B–9B) (Alibaba)
- **Parameters:** 0.8B / 2B / 4B / 9B
- **Context:** 262K tokens
- **Modality:** Text + Image + Video
- **Coding Tier:** C to B- (scales with size)
- **Capability Tags:** `lightweight`, `fast`, `edge-deployable`, `boilerplate`
- **Best For:** Quick code snippets, formatting, simple scripting, boilerplate generation. The 9B can handle moderate coding tasks. Use when quota is tight and tasks are simple.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Ollama Cloud | `qwen3.5 - 0.8b` | Daily+weekly limit |
| Ollama Cloud | `qwen3.5 - 2b` | Daily+weekly limit |
| Ollama Cloud | `qwen3.5 - 4b` | Daily+weekly limit |
| Ollama Cloud | `qwen3.5 - 9b` | Daily+weekly limit |

---

### Qwen3-Coder (480B-A35B / 30B) (Alibaba)
- **Parameters:** 480B-A35B (large) or 30B (small)
- **Context:** 262K tokens
- **Modality:** Text
- **Coding Tier:** A+ (480B) / B+ (30B)
- **Capability Tags:** `code-specialist`, `agentic-coding`, `debugging`, `refactoring`
- **Best For:** Purpose-built for coding. The 480B variant is a top-tier code specialist. The 30B variant is efficient for routine coding work.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Ollama Cloud | `qwen3-coder - 480b` | Daily+weekly limit |
| Ollama Cloud | `qwen3-coder - 30b` | Daily+weekly limit |
| Nvidia NIM | `qwen3-coder-480b-a35b-instruct` | Daily limit |
| OpenRouter | `Qwen: Qwen3 Coder 480B A35B (free)` | Daily limit |

---

### Qwen3-Coder-Next (Alibaba)
- **Parameters:** Unknown (preview)
- **Context:** 262K+ tokens
- **Coding Tier:** A+ (expected)
- **Capability Tags:** `code-specialist`, `next-gen`, `preview`
- **Best For:** Next-generation coding model from Qwen. Preview/experimental.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Kiro | `Qwen3 coder next` | 0.05 credits (50/month total) — cheapest Kiro model |
| Ollama Cloud | `qwen3-coder-next` | Daily+weekly limit |

---

### Qwen3-VL (Vision-Language, 2B–235B) (Alibaba)
- **Parameters:** 2B / 4B / 8B / 30B / 32B / 235B
- **Context:** 262K tokens
- **Modality:** Text + Image + Video
- **Coding Tier:** B to A (scales with size)
- **Capability Tags:** `multimodal`, `vision`, `UI-from-screenshot`, `document-understanding`, `code-from-image`
- **Best For:** Code generation from UI screenshots or mockups. Document understanding. Visual debugging (reading error screenshots). The 235B is very strong; smaller sizes are good for vision-specific routing.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Ollama Cloud | `qwen3-vl - 2b` through `qwen3-vl - 235b` | Daily+weekly limit |
| Fireworks AI | `Qwen3 VL 30B A3B` (Thinking/Instruct) | $6 credit; $0.15/M in; 262K ctx |

---

### Qwen3-Next (80B-A3B) (Alibaba)
- **Parameters:** 80B total / 3B active (ultra-sparse MoE)
- **Context:** 262K tokens
- **Coding Tier:** B+
- **Capability Tags:** `ultra-efficient`, `hybrid-attention`, `local-deployable`
- **Best For:** Extreme efficiency — only 3B active params from 80B total. Good for local/edge deployment with decent coding ability.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Ollama Cloud | `qwen3-next - 80b` | Daily+weekly limit |
| OpenRouter | `Qwen: Qwen3 Next 80B A3B Instruct (free)` | Daily limit |

---

### Gemini 3.1 Pro (Google)
- **Parameters:** Proprietary (large)
- **Context:** Very large (1M+)
- **Modality:** Text + Image + Audio + Video
- **Coding Tier:** S
- **Capability Tags:** `frontier-reasoning`, `multimodal`, `agentic`, `long-context`, `web-browsing`
- **Best For:** Top-tier frontier model. Leads on ARC-AGI-2 and agentic benchmarks. Excellent multimodal reasoning. Best for tasks requiring image/video understanding combined with coding.
- **Weaknesses:** Quota likely very limited on free tier.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Google Antigravity | `Gemini 3.1 Pro (Medium)` | Daily limit (unknown cap) |
| Google Antigravity | `Gemini 3.1 Pro (High)` | Daily limit (unknown cap) |

---

### Gemini 3 Flash / 3.1 Flash Lite (Google)
- **Parameters:** Proprietary (smaller/faster)
- **Context:** Large
- **Modality:** Text + Image + Audio + Video
- **Coding Tier:** B+ (Flash) / B (Flash Lite)
- **Capability Tags:** `fast`, `multimodal`, `cost-efficient`, `general-coding`
- **Best For:** Quick multimodal coding tasks. Good default when you need vision + code but don't need frontier intelligence. Flash is snappier than Pro at acceptable quality.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Google Antigravity | `Gemini 3 Flash` | Daily limit |
| Gemini CLI | `Gemini 3 Flash Preview` | Daily limit |
| Gemini CLI | `Gemini 2.5 Flash` | Daily limit |
| Gemini CLI | `Gemini 3.1 Flash Lite Preview` | Daily limit |
| Gemini CLI | `Gemini 2.5 Flash Lite` | Daily limit |
| Ollama Cloud | `gemini-3-flash-preview` | Daily+weekly limit |

---

### GPT-OSS-120B (OpenAI)
- **Parameters:** 117B total / 5.1B active (MoE)
- **Context:** 128K tokens
- **Modality:** Text only
- **Coding Tier:** A-
- **Capability Tags:** `reasoning`, `tool-use`, `configurable-effort`, `agentic`, `open-weight`
- **Best For:** OpenAI's first open-weight model (Apache 2.0). Near-parity with o4-mini on reasoning. Configurable reasoning effort (low/medium/high). Strong tool use and function calling. Full chain-of-thought visible. Fits on single 80GB GPU.
- **Weaknesses:** Smaller 20B variant sometimes outperforms it on some benchmarks (HumanEval, MMLU). Text-only.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Ollama Cloud | `gpt-oss - 120b` | Daily+weekly limit |
| Groq | `openai/gpt-oss-120b` | 1K RPD, 200K TPD |
| OpenRouter | `OpenAI: gpt-oss-120b (free)` | Daily limit |
| Nvidia NIM | `gpt-oss - 120b` (via GPS OSS) | Daily limit |
| Google Antigravity | `GPS OSS 120 B (Medium)` | Daily limit |
| Fireworks AI | `OpenAI gpt-oss-120b` | $6 credit; $0.15/M in, $0.60/M out; 131K ctx |

---

### GPT-OSS-20B (OpenAI)
- **Parameters:** 21B total / 3.6B active (MoE)
- **Context:** 128K tokens
- **Modality:** Text only
- **Coding Tier:** B+
- **Capability Tags:** `reasoning`, `lightweight`, `edge-deployable`, `tool-use`, `cost-efficient`
- **Best For:** Similar to o3-mini performance. Runs on 16GB devices. Excellent for high-volume batch coding tasks, quick iterations, local inference. Surprisingly competitive despite small size.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Ollama Cloud | `gpt-oss - 20b` | Daily+weekly limit |
| Groq | `openai/gpt-oss-20b` | 1K RPD, 200K TPD |
| OpenRouter | `OpenAI: gpt-oss-20b (free)` | Daily limit |
| Fireworks AI | `OpenAI gpt-oss-20b` | $6 credit; $0.07/M in, $0.30/M out; 131K ctx |

---

### Tencent Hy3 Preview (Hunyuan 3)
- **Parameters:** 295B total / 21B active (MoE)
- **Context:** 256K tokens
- **Modality:** Text
- **Coding Tier:** A
- **Capability Tags:** `general-coding`, `reasoning`, `agent-workflows`, `web-browsing`, `instruction-following`
- **Best For:** Well-rounded model strong in coding (SWE-bench Verified 74.4%), browsing/search agents, and complex reasoning. Good instruction following. Built in under 3 months — fast iteration cycle. Competitive with GLM-5 and Kimi-K2.5.
- **Weaknesses:** Trails frontier closed models. Preview status means continued refinement expected.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| OpenCode Zen | `Hy3 preview free` | Daily limit |
| Kilo Gateway | `Tencent hy3 preview` | Daily limit |
| OpenRouter | `Tencent: Hy3 preview (free)` | Daily limit |

---

### Poolside Laguna M.1
- **Parameters:** 225B total / 23B active (MoE)
- **Context:** 128K tokens
- **Modality:** Text
- **Coding Tier:** A+
- **Capability Tags:** `agentic-coding`, `SWE-bench`, `tool-calling`, `long-horizon`
- **Best For:** Purpose-built for agentic coding. SWE-bench Verified 72.5%. Poolside's flagship — trained from scratch with their own data pipeline, agent RL, and synthetic data. Strong for multi-step coding workflows.
- **Weaknesses:** Newer lab, less battle-tested in diverse production settings.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Kilo Gateway | `Poolside: Laguna M.1` | Daily limit |
| OpenRouter | `Poolside: Laguna M.1 (free)` | Daily limit |

---

### Poolside Laguna XS.2
- **Parameters:** 33B total / 3B active (MoE)
- **Context:** 131K tokens
- **Modality:** Text
- **Coding Tier:** B+
- **Capability Tags:** `agentic-coding`, `local-deployable`, `lightweight`, `open-weight`
- **Best For:** Compact agentic coding model. SWE-bench Verified 68.2%. Runs on a Mac with 36GB RAM. Apache 2.0. Best lightweight model specifically optimized for coding agent workflows.
- **Weaknesses:** Smaller active params limit it on knowledge-heavy tasks.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Kilo Gateway | `Poolside Laguna XS.2` | Daily limit |
| OpenRouter | `Poolside: Laguna XS.2 (free)` | Daily limit |

---

### NVIDIA Nemotron 3 Super (120B)
- **Parameters:** 120B
- **Context:** 128K tokens
- **Coding Tier:** A-
- **Capability Tags:** `general-coding`, `reasoning`, `enterprise`, `NVIDIA-optimized`
- **Best For:** Enterprise-grade general-purpose model. Well-optimized for NVIDIA hardware. Good all-around performer for coding and reasoning.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Ollama Cloud | `nemotron-3-super - 120b` | Daily+weekly limit |
| OpenCode Zen | `nemotron 3 super free` | Daily limit |
| Kilo Gateway | `NVIDIA: Nemotron 3 Super (free)` | Daily limit |
| OpenRouter | `NVIDIA: Nemotron 3 Super (free)` | Daily limit |

---

### NVIDIA Nemotron 3 Nano (4B / 30B)
- **Parameters:** 4B or 30B
- **Context:** 128K tokens
- **Coding Tier:** C (4B) / B (30B)
- **Capability Tags:** `lightweight`, `edge`, `fast`, `reasoning`
- **Best For:** Edge/device deployment. The 30B variant has decent reasoning for its size. Good for quick completions and simple coding.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Ollama Cloud | `nemotron-3-nano - 4b` | Daily+weekly limit |
| Ollama Cloud | `nemotron-3-nano - 30b` | Daily+weekly limit |
| Kilo Gateway | `NVIDIA: Nemotron 3 Nano Omni` | Daily limit |
| OpenRouter | `NVIDIA: Nemotron 3 Nano 30B A3B (free)` | Daily limit |
| OpenRouter | `NVIDIA: Nemotron Nano 9B V2 (free)` | Daily limit |

---

### Mistral Large 3 (675B)
- **Parameters:** 675B
- **Context:** 128K tokens
- **Coding Tier:** A
- **Capability Tags:** `general-coding`, `reasoning`, `multilingual`, `enterprise`
- **Best For:** Mistral's flagship. Strong general coding and reasoning. Good multilingual support.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Ollama Cloud | `mistral-large-3` | Daily+weekly limit |
| Nvidia NIM | `mistral-large-3-675b-instruct-2512` | Daily limit |

---

### Mistral Medium 3 / 3.5 (128B)
- **Parameters:** ~128B
- **Context:** 128K tokens
- **Coding Tier:** B+
- **Capability Tags:** `general-coding`, `balanced`, `instruction-following`
- **Best For:** Mid-tier Mistral model. Good balance of speed and capability for routine coding.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Nvidia NIM | `mistral-medium-3.5-128b` | Daily limit |
| Nvidia NIM | `mistral-medium-3-instruct` | Daily limit |

---

### Devstral 2 (123B) / Devstral Small 2 (24B) (Mistral)
- **Parameters:** 123B or 24B
- **Context:** 128K tokens
- **Coding Tier:** A- (123B) / B (24B)
- **Capability Tags:** `code-specialist`, `debugging`, `refactoring`
- **Best For:** Mistral's coding-specialist models. Devstral 2 (123B) is strong for code generation and debugging. Small 2 (24B) is efficient for lighter coding.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Ollama Cloud | `devstral-2 - 123b` | Daily+weekly limit |
| Ollama Cloud | `devstral-small-2 - 24b` | Daily+weekly limit |
| Nvidia NIM | `devstral-2-123b-instruct-2512` | Daily limit |

---

### Ministral 3 (3B / 8B / 14B) (Mistral)
- **Parameters:** 3B / 8B / 14B
- **Coding Tier:** C (3B) / C+ (8B) / B- (14B)
- **Capability Tags:** `lightweight`, `fast`, `edge`, `simple-coding`
- **Best For:** Quick, simple coding tasks. Boilerplate, formatting, simple scripts.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Ollama Cloud | `ministral-3 - 3b/8b/14b` | Daily+weekly limit |

---

### Magistral Small (Mistral)
- **Parameters:** Unknown (smaller reasoning model)
- **Coding Tier:** B
- **Capability Tags:** `reasoning`, `efficient`, `coding`
- **Best For:** Mistral's reasoning-focused smaller model. Good for logic-heavy coding tasks at lower cost.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Nvidia NIM | `magistral-small-2506` | Daily limit |

---

### Gemma 4 (e2b / e4b / 26B / 31B) (Google)
- **Parameters:** ~2B / ~4B / 26B / 31B
- **Context:** 128K tokens
- **Modality:** Text (+ multimodal variants)
- **Coding Tier:** C (e2b/e4b) / B (26B) / B+ (31B)
- **Capability Tags:** `lightweight`, `local`, `open-weight`, `efficient`
- **Best For:** Google's latest small open models. The 26B–31B variants are strong for their size. Good for local deployment and moderate coding.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Ollama Cloud | `gemma4 - e2b/e4b/26b/31b` | Daily+weekly limit |
| Kilo Gateway | `Google: Gemma 4 26B A4B (free)` | Daily limit |
| OpenRouter | `Google: Gemma 4 26B A4B (free)` | Daily limit |
| OpenRouter | `Google: Gemma 4 31B (free)` | Daily limit |
| Nvidia NIM | `gemma-3n-e4b-it` / `gemma-3n-e2b-it` | Daily limit |

---

### Gemma 3 (270M–27B) (Google)
- **Parameters:** 270M / 1B / 4B / 12B / 27B
- **Coding Tier:** D (270M–1B) / C (4B) / B- (12B) / B (27B)
- **Capability Tags:** `lightweight`, `open-weight`, `local`, `general`
- **Best For:** Previous-gen Google small models. The 27B is decent for coding. Smaller sizes for classification, simple text tasks.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Ollama Cloud | `gemma3 - 270m` through `gemma3 - 27b` | Daily+weekly limit |
| Nvidia NIM | `gemma-3-27b-it` | Daily limit |
| OpenRouter | `Google: Gemma 3 4B/12B/27B (free)` | Daily limit |

---

### Llama 3.3 70B Instruct (Meta)
- **Parameters:** 70B (dense)
- **Context:** 131K tokens
- **Modality:** Text
- **Coding Tier:** B+
- **Capability Tags:** `general-coding`, `instruction-following`, `open-weight`, `well-studied`
- **Best For:** Well-established, widely deployed model. Solid general coding. Enormous community and tooling ecosystem. Good baseline model.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Groq | `llama-3.3-70b-versatile` | 1K RPD, 100K TPD |
| OpenRouter | `Meta: Llama 3.3 70B Instruct (free)` | Daily limit |
| Fireworks AI | `Llama 3.3 70B Instruct` | $6 credit; $0.90/M in+out; 131K ctx |

---

### Llama 4 Maverick (17B-128E) (Meta)
- **Parameters:** 17B with 128 experts (MoE)
- **Context:** 128K+ tokens
- **Coding Tier:** B+
- **Capability Tags:** `general-coding`, `MoE`, `efficient`
- **Best For:** Meta's MoE architecture model. Efficient inference with expert routing. Decent general coding.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Nvidia NIM | `llama-4-maverick-17b-128e-instruct` | Daily limit |

---

### Llama 3.2 3B / Llama 3.1 8B (Meta)
- **Parameters:** 3B / 8B
- **Coding Tier:** C- / C+
- **Capability Tags:** `lightweight`, `fast`, `edge`, `simple-tasks`
- **Best For:** Very quick simple tasks — formatting, boilerplate, classification. The 8B can handle basic coding.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| OpenRouter | `Meta: Llama 3.2 3B Instruct (free)` | Daily limit |
| Groq | `llama-3.1-8b-instant` | 14.4K RPD, 500K TPD |
| Groq | `meta-llama/llama-4-scout-17b-16e-instruct` | 1K RPD, 500K TPD |

---

### Nous Hermes 3 405B
- **Parameters:** 405B (dense)
- **Context:** 128K tokens
- **Coding Tier:** A-
- **Capability Tags:** `general-coding`, `creative`, `instruction-following`, `uncensored`
- **Best For:** Community fine-tune of Llama 3.1 405B. Strong instruction following and creative coding. Less filtered than base Llama.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| OpenRouter | `Nous: Hermes 3 405B Instruct (free)` | Daily limit |

---

### Cogito 2.1 (671B)
- **Parameters:** 671B
- **Context:** 128K tokens
- **Coding Tier:** A-
- **Capability Tags:** `reasoning`, `general-coding`, `large-model`
- **Best For:** Large reasoning-focused model. Good for complex logic and coding tasks requiring deep thought.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Ollama Cloud | `cogito-2.1 - 671b` | Daily+weekly limit |

---

### inclusionAI Ling-2.6 (1T / Flash)
- **Parameters:** 1T (full) / Flash variant
- **Context:** 128K+ tokens
- **Coding Tier:** A- (1T) / B+ (Flash)
- **Capability Tags:** `general-coding`, `Chinese-optimized`, `large-model`
- **Best For:** Large Chinese-origin model. Good for multilingual coding tasks, especially with Chinese requirements.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Kilo Gateway | `inclusionAI: Ling-2.6-1T (free)` | Daily limit |
| Kilo Gateway | `inclusionAI: Ling-2.6-flash (free)` | Daily limit |
| OpenRouter | `inclusionAI: Ling-2.6-1T (free)` | Daily limit |

---

### Mistral-Nemotron (NVIDIA x Mistral)
- **Parameters:** Unknown (joint model)
- **Context:** 128K tokens
- **Coding Tier:** B+
- **Capability Tags:** `general-coding`, `NVIDIA-optimized`, `enterprise`
- **Best For:** Joint NVIDIA-Mistral model optimized for NVIDIA inference stack. Good general coding.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Nvidia NIM | `mistral-nemotron` | Daily limit |

---

### GitHub Copilot Free Tier Models
- **Context:** Varies
- **Coding Tier:** Varies (see below)
- **Capability Tags:** `IDE-integrated`, `code-completion`, `chat`
- **Notes:** These share a pool of 2000 requests/month across ALL models. Best used through GitHub Copilot IDE integration.

| Model | Coding Tier | Best For |
|-------|-------------|----------|
| Claude Haiku 4.5 | B+ | Fast code completion, quick explanations |
| GPT-4.1 | A- | General coding, debugging, multi-file work |
| GPT-5 mini | A | Strong reasoning + coding at mini cost |
| Grok Code Fast 1 | B+ | Fast code generation |
| Raptor mini | B | Code completion |
| Goldeneye | B | General coding |

**Provider:** GitHub Copilot free — 2000 requests/month shared pool.

---

### Groq-Hosted Models (Fast Inference)
- **Note:** Groq's value is ultra-fast inference (LPU). Same models as elsewhere but with very low latency.

| Model | Coding Tier | RPD | TPD |
|-------|-------------|-----|-----|
| `qwen/qwen3-32b` | B+ | 1K | 500K |
| `llama-3.3-70b-versatile` | B+ | 1K | 100K |
| `llama-3.1-8b-instant` | C+ | 14.4K | 500K |
| `groq/compound` | B (agent) | 250 | — |
| `groq/compound-mini` | B- (agent) | 250 | — |

---

### LiquidAI LFM2.5 (1.2B, Thinking/Instruct)
- **Parameters:** 1.2B
- **Coding Tier:** C-
- **Capability Tags:** `ultra-lightweight`, `edge`, `experimental`
- **Best For:** Experimental tiny model. Only for the simplest tasks or research. Thinking variant has chain-of-thought.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| OpenRouter | `LiquidAI: LFM2.5-1.2B-Thinking/Instruct (free)` | Daily limit |

---

### Step 3.5 Flash (StepFun)
- **Parameters:** Unknown
- **Coding Tier:** B
- **Capability Tags:** `general-coding`, `Chinese-origin`, `fast`
- **Best For:** Fast general-purpose coding from Chinese lab StepFun.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Nvidia NIM | `step-3.5-flash` | Daily limit |

---

### Seed-OSS-36B (ByteDance)
- **Parameters:** 36B
- **Coding Tier:** B
- **Capability Tags:** `general-coding`, `Chinese-origin`
- **Best For:** ByteDance's open-source contribution. Decent general coding for its size.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Nvidia NIM | `seed-oss-36b-instruct` | Daily limit |

---

### Phi-4 Multimodal (Microsoft)
- **Parameters:** Small (multimodal)
- **Modality:** Text + Image
- **Coding Tier:** B-
- **Capability Tags:** `multimodal`, `lightweight`, `vision-code`
- **Best For:** Small multimodal model. Can understand images and generate code from visual context. Edge deployment.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Nvidia NIM | `phi-4-multimodal-instruct` | Daily limit |

---

### Owl Alpha (OpenRouter)
- **Parameters:** Unknown
- **Coding Tier:** B (estimated)
- **Capability Tags:** `experimental`, `routing`
- **Best For:** OpenRouter's experimental routing/meta model. May route to different backends.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| OpenRouter | `Owl Alpha (by openrouter)` | Daily limit |

---

### Big Pickle (OpenCode Zen)
- **Parameters:** Unknown
- **Coding Tier:** B (estimated)
- **Capability Tags:** `coding`, `experimental`
- **Best For:** Less-documented model available on OpenCode Zen. Try for general coding when other quotas are exhausted.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| OpenCode Zen | `Big Pickle` | Daily limit |

---

### RNJ-1 (8B)
- **Parameters:** 8B
- **Coding Tier:** C+
- **Capability Tags:** `lightweight`, `general`
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Ollama Cloud | `rnj-1 - 8b` | Daily+weekly limit |

---

### Z.ai GLM 4.5 Air
- **Parameters:** Unknown (lighter GLM variant)
- **Coding Tier:** B
- **Capability Tags:** `general-coding`, `cost-efficient`
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| OpenRouter | `Z.ai: GLM 4.5 Air (free)` | Daily limit |

---

### Dracarys Llama 3.1 70B
- **Parameters:** 70B (fine-tuned Llama)
- **Coding Tier:** B+
- **Capability Tags:** `general-coding`, `fine-tuned`
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| Nvidia NIM | `dracarys-llama-3.1-70b-instruct` | Daily limit |

---

### Baidu Qianfan-OCR-Fast
- **Parameters:** Unknown
- **Modality:** Image → Text (OCR)
- **Coding Tier:** D (not a coding model)
- **Capability Tags:** `OCR`, `document-extraction`
- **Best For:** Extracting text from images/documents. NOT for code generation — use for preprocessing scanned docs.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| OpenRouter | `Baidu: Qianfan-OCR-Fast (free)` | Daily limit |

---

### NVIDIA Nemotron Nano 12B V2 VL
- **Parameters:** 12B (vision-language)
- **Modality:** Text + Image
- **Coding Tier:** B-
- **Capability Tags:** `vision`, `lightweight`, `multimodal-coding`
- **Best For:** Vision-language model for understanding screenshots, diagrams, UI mockups and generating code from them.
- **Providers & Quota:**

| Provider | Model String | Quota |
|----------|-------------|-------|
| OpenRouter | `NVIDIA: Nemotron Nano 12B 2 VL (free)` | Daily limit |

---

## Specialized Non-Coding Models (Nvidia NIM)

These are available on your Nvidia NIM account but are NOT general coding models. Listed for completeness — the orchestrator should **not** assign coding tasks to these:

| Model | Purpose |
|-------|---------|
| `nemotron-3-content-safety` | Content safety classification |
| `nemotron-content-safety-reasoning-4b` | Safety reasoning |
| `llama-3.1-nemotron-safety-guard-8b-v3` | Safety guardrail |
| `llama-guard-4-12b` | Input/output safety |
| `synthetic-video-detector` | Deepfake detection |
| `Active Speaker Detection` | Video analysis |
| `nemotron-voicechat` | Voice chat |
| `magpie-tts-zeroshot` | Text-to-speech |
| `studiovoice` | Audio processing |
| `gliner-pii` | PII detection |
| `riva-translate-4b-instruct-v1_1` | Translation |
| `cosmos-transfer2.5-2b` / `cosmos-transfer1-7b` / `cosmos-predict1-5b` | Video generation |
| `streampetr` / `sparsedrive` / `bevformer` | Autonomous driving perception |
| `esm2-650m` / `esmfold` | Protein structure prediction |
| `nv-embed-v1` / `nv-embedcode-7b-v1` | Embedding models |
| `llama-3_2-nemoretriever-300m-embed-v1` | Retrieval embedding |
| `rerank-qa-mistral-4b` | Search reranking |
| `usdcode` / `usdvalidate` | 3D/USD validation |
| `paligemma` | Vision-only (no text generation) |
| `solar-10.7b-instruct` | Legacy general model |
| `gemma-2-2b-it` | Legacy small model |
| `nemotron-mini-4b-instruct` | Legacy small model |

---

## Quick Reference: Task → Model Mapping

| Task Type | Tier S (Best) | Tier A (Strong) | Tier B (Good Enough) |
|-----------|---------------|-----------------|----------------------|
| **Multi-file repo refactor** | Kimi K2.6, DeepSeek V4-Pro, GLM-5.1 | Qwen3.6 Plus, MiniMax M2.7, DeepSeek V3.2 | GPT-OSS-120B, Hy3 preview |
| **Long-horizon agentic coding (hours)** | GLM-5.1, Kimi K2.6, DeepSeek V4-Pro | MiniMax M2.7, Poolside Laguna M.1 | MiniMax M2.5 |
| **Frontend/UI from prompt** | Kimi K2.6, Qwen3.6 Plus | MiniMax M2.5, Qwen3.5-122B | Gemini 3 Flash |
| **Bug fix (single file)** | (overkill) | DeepSeek V3.2, MiniMax M2.5, Kimi K2.5 | GPT-OSS-120B, Llama 3.3 70B, Qwen3-Coder-30B |
| **Quick script/utility** | (overkill) | (overkill) | GPT-OSS-20B, Qwen3.5-9B, Gemma 4-26B |
| **Code review** | GLM-5.1, Kimi K2.6 | MiniMax M2.7, DeepSeek V4-Flash | Hy3 preview, GPT-OSS-120B |
| **Competitive programming** | DeepSeek V4-Pro (Codeforces ~3200) | Kimi K2.6, GLM-5.1 | Qwen3-Coder-480B |
| **Code from screenshot/mockup** | Qwen3-VL-235B, Kimi K2.6 (multimodal) | Gemini 3.1 Pro, Qwen3-VL-30B | Phi-4 Multimodal, Nemotron Nano 12B VL |
| **Boilerplate / templates** | (overkill) | (overkill) | Ministral-3-8B, Qwen3.5-4B, GPT-OSS-20B |
| **Production debugging / SRE** | MiniMax M2.7, GLM-5.1 | DeepSeek V4-Pro, Kimi K2.6 | Hy3 preview |
| **Multilingual code (non-English)** | Kimi K2.6 (Rust/Go/Zig/Python) | MiniMax M2.5 (10+ langs), Qwen3-Coder-480B | Llama 3.3 70B |
| **Math/STEM reasoning for code** | DeepSeek V4-Pro, Gemini 3.1 Pro | Kimi K2.6, GLM-5 | GPT-OSS-120B |
| **Office automation (Excel/PPT/Word)** | MiniMax M2.7, MiniMax M2.5 | Qwen3.6 Plus | — |

---

## Provider Quota Summary

| Provider | Quota Type | Reset Cadence | Notes |
|----------|-----------|---------------|-------|
| **Kiro** | 50 credits/month total | Monthly | Models cost 0.05–0.5 credits each |
| **Google Antigravity** | Unknown daily cap | Daily | Gemini models |
| **Gemini CLI** | Unknown daily cap | Daily | Gemini preview models |
| **Ollama Cloud** | Unknown daily+weekly cap | Daily + Weekly | Largest catalog (~50+ models) |
| **OpenCode Zen** | Unknown daily cap | Daily | 4 free models |
| **Kilo Gateway** | Unknown daily cap | Daily | 8 free models |
| **OpenRouter** | Unknown daily cap | Daily | ~25 free models |
| **Nvidia NIM** | Unknown daily cap | Daily | ~40+ models including specialized |
| **GitHub Copilot** | 2000 req/month shared | Monthly | IDE-integrated; all models share pool |
| **Fireworks AI** | $6 one-time credit | Until depleted | Pay-per-token from credit balance |
| **Groq** | RPD + TPD limits | Daily | Ultra-fast inference (LPU hardware) |

---

## Orchestrator Instructions

When assigning models to a task:

1. **Identify task complexity** → Map to a coding tier (S/A/B/C/D).
2. **Check special requirements** → Multimodal? Long context? Specific language? Agent workflow?
3. **Recommend 3–5 models** ranked from best-fit to capable-but-lighter.
4. **Always include a B-tier fallback** in case the user's S/A-tier quota is exhausted.
5. **Prefer providers with daily-reset quotas** over monthly-capped ones for routine tasks.
6. **Kiro credits are scarce (50/month)** — reserve for high-value tasks. The `Qwen3 coder next` at 0.05 credits is the most quota-efficient Kiro option.
7. **Fireworks AI credit ($6) is one-time** — use judiciously. Prefer free daily-reset providers first.
8. **GitHub Copilot's 2000 req/month** is best reserved for IDE-integrated code completion, not batch API work.
