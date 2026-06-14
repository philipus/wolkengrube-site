---
name: tiny-experiment-log
description: Turn private ChatGPT/Codex sessions, Obsidian-style notes, or rough experiment notes into reviewed public tiny-experiment Markdown entries for the wolkengrube-site Astro lab notebook, then optionally hand off to GitHub publishing. Use when summarizing an experiment session, creating or updating files in src/content/experiments or src/content/experimentLogs, checking privacy before publication, validating draft/public entries, committing experiment notes, pushing a branch, or opening a draft pull request.
---

# Tiny Experiment Log

Use this skill to convert private working material into concise public lab notes. The public note should be useful, reviewed, and calm; it should not read like a raw transcript. Default to draft-first publishing: write reviewed drafts locally, publish only after explicit approval, and prefer a GitHub draft pull request over direct pushes to `main`.

## Workflow

1. Identify the experiment.
   - Use an existing `src/content/experiments/*.md` entry when possible.
   - Create a new experiment only when the session establishes a new mission and commitment.
   - Use `assets/templates/experiment.md` for new experiment files.

2. Distill the session.
   - Extract what happened, what changed, what was learned, and the next small test.
   - Prefer concrete decisions and useful traces over narrative completeness.
   - Do not publish raw prompts, private deliberation, credentials, client details, or unreviewed speculation.

3. Apply the public-note filter.
   - Keep: mission, commitment, small decisions, architecture sketches in prose, blockers, lessons, next step.
   - Remove or generalize: secrets, private names, copied chat text, sensitive links, account details, unfinished claims.
   - If any privacy risk remains, stop and ask for review instead of writing a public entry.

4. Write the Markdown.
   - Use `assets/templates/log-entry.md`.
   - Set `draft: true` unless the user explicitly approves publication.
   - Set `draft: false` only for reviewed public entries.
   - Keep `summary`, `learned`, and `next` short enough to render well in the experiment table and detail page.

5. Validate.
   - Run the site build or content validation after changing content.
   - Confirm draft notes do not appear on public pages.

6. Publish only when asked.
   - If the user says "publish this" or gives equivalent approval, set the relevant entry to `draft: false`.
   - Run `npm run build` before any commit.
   - Commit only the relevant experiment/log/site files.
   - Push a branch and open a draft pull request by default.
   - Push directly to `main` only if the user explicitly says to publish directly to `main`.

## GitHub Publishing Handoff

Use the GitHub publishing workflow after content is reviewed and the build passes. Prefer the local Git workflow plus the GitHub plugin/skill for pull request creation when available.

Default branch workflow:

1. Create a branch named `experiment-log/<experiment-slug>-<YYYY-MM-DD>`.
2. Commit the reviewed Markdown and any required site changes.
3. Push the branch.
4. Open a draft PR against `main` with a short summary and the build result.
5. Leave the PR as draft unless the user asks to mark it ready or merge.

Direct publish workflow:

- Use only when the user explicitly says "publish directly to main" or equivalent.
- Confirm `draft: false`, run `npm run build`, commit the relevant files, and push to `main`.
- Do not use direct publish for notes that came from private chats unless the privacy filter has passed.

## Tone

Follow the Lab Notebook style in `references/content-style.md`: technical, concise, reflective, and non-performative. Treat Anne-Laure Le Cunff's tiny-experiment framing as the product philosophy: curiosity, small tests, learning in public, and adaptation over rigid goal tracking.

## File Rules

- Experiments live in `src/content/experiments/<slug>.md`.
- Logs live in `src/content/experimentLogs/YYYY-MM-DD-<slug>.md`.
- The repo is the durable source of truth for public content.
- ChatGPT projects, canvases, and rough notes are private drafting surfaces unless manually distilled.
- Draft PR is the default publishing path.
- Direct push to `main` requires explicit user wording.
