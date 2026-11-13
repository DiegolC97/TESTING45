---
name: chiron-memory
description: >-
  Writing and maintaining chiron-memory/ files — the project's memory: atomic,
  typed items (decisions, conventions, gotchas) other sessions and agents will
  retrieve. Use when recording something learned, or editing files in the
  chiron-memory/ directory.
---

# chiron-memory Authoring Guide

This skill covers what to record in `chiron-memory/`, the mandatory item
format, and how to validate. Load it whenever you record something learned or
edit files in that directory.

## What belongs in chiron-memory/

**Durable, reusable knowledge** for future sessions — yours or another
agent's. The test: does this save someone a mistake or a search a month from
now? If yes, record it.

Good candidates:
- Technical decisions WITH their why (and which alternatives were discarded)
- Conventions and patterns this project follows
- Gotchas: the non-obvious things that failed and must not repeat
- Architecture choices and their boundaries
- Configuration knowledge not written anywhere else

Bad candidates (do NOT record):
- Step-by-step code walkthroughs (the code is the walkthrough)
- A journal/changelog of what you did (git already records that)
- TODOs or temporary notes
- Trivial details that don't change the project's model

## The OKF format — mandatory for every item

Each item is ONE `##` section in its type's file, with this body (one line,
fields separated by ` · `):

```markdown
## Short item title

What: what it is / what was decided · Why: the reason, not the action · Where: anchor file/module · Learned: the transferable lesson (optional)
```

Rules:
- **What and Why are mandatory**; Where anchors the item to code (always use
  it when one exists); Learned only when there is a generalizable lesson.
- One fact per item — atomic. Two facts = two sections.
- The title is the item's identity: short, specific, no dates.
- **Write entries in English**, whatever language the conversation is in —
  retrieval is language-sensitive, and a memory split across languages
  searches worse.
- If a NEW item contradicts an existing one, record it as `contradiction`
  and edit/delete the old one in its file — never leave both standing.

## The types (generated from this project's configured types in the memory Lab (chiron-memory sync regenerates when they change))

### decision

A choice made and the reasoning behind it — the path taken over the alternatives.

Example:

```
What: Rate limiter moved from an in-memory Map to Redis (atomic INCR+EXPIRE via Lua) · Why: with 3 replicas each instance kept its own counter — the effective limit was 3x the configured one · Where: src/middleware/rate-limiter.ts · Learned: shared counters never live in process memory when there are multiple replicas
```

### architecture

How the system is put together — layers, boundaries, and how data flows.

Example:

```
What: Data access lives behind repositories (interfaces in domain/, implementations in infrastructure/) · Why: use cases must not know Postgres — enables the dual local/remote backend · Where: src/domain/repositories/
```

### convention

A rule the codebase follows — naming, patterns, and where things live.

Example:

```
What: HTTP routes use /api/v1/ versioning, centralized in apiRoutes.ts · Why: prevents convention drift as the project grows · Where: src/interfaces/http/apiRoutes.ts
```

### gotcha

A non-obvious pitfall or trap, learned the hard way.

Example:

```
What: The rate-limit key TTL must be set in the SAME atomic operation as the first INCR · Why: if the process dies between INCR and EXPIRE the key never expires · Where: rate-limiter.ts · Learned: TTL always atomic with creation
```

### config

Setup and configuration — env vars, flags, how to run the project.

Example:

```
What: better-sqlite3 is native — it must be declared in next.config.js serverComponentsExternalPackages · Why: webpack tries to bundle it and breaks the build · Where: next.config.js
```

### contradiction

A memory that clashes with newer reality — flagged to be resolved.

Example:

```
What: The store NO LONGER uses Postgres — migrated to Redis on 2026-08-20 · Why: supersedes the earlier decision to use Postgres for sessions · Where: src/store/
```


## Where things go — and how this scales

One file per type: `chiron-memory/<type>s.md` (e.g. `decisions.md`).
When a type file grows past ~25 items, split it into a FOLDER of topic files:
`chiron-memory/decisions/storage.md`, `decisions/api.md`, … — same section
format inside; the folder name carries the type. `chiron-memory check` tells
you when a file is due for splitting.

The index `chiron-memory/chiron-memory.md` lists the files with `[[links]]`
— keep it current when you add files or folders.

## Validation and search

- **Validate after editing**: run `chiron-memory check` (OKF format, types
  and index). If that CLI isn't installed in this session, re-read your edit
  against the format above — the same validation runs at delivery.
- **Search BEFORE assuming** — the project's memory may already have the
  answer. Use the memory MCP tools when available (`memory_search`; in
  chiron sessions also `memory_canonical` for the curated truth), else
  `chiron-memory search "query"`.
