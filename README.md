# Rutvi Purohit portfolio

Editable Next.js 16 portfolio rebuild for Rutvi Purohit. See [the portfolio handoff](docs/research/rutvi-portfolio/HANDOFF.md) for route coverage, verification, screenshots, and known gaps.

Use Node.js 24 or newer and pnpm 12.16.1:

```sh
pnpm install
pnpm dev
pnpm check
```

The cloning workflow and its inspection guides live in `.agents/skills/clone-website/`. Codex and OMP can discover the shared project skill. Claude Code can invoke the project command `/clone-website <url>`; it reads the same skill. Restart an existing agent session if it does not pick up the new project files.

The starter and cloning workflow are adapted from the MIT-licensed upstream project; see `LICENSE`.
