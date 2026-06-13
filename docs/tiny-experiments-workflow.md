# Tiny Experiments Workflow

Use this workflow when you want to turn a private ChatGPT/Codex session into a reviewed public experiment note on wolkengrube.de.

## Start A New Experiment

In Codex, ask:

```text
Use the tiny-experiment-log skill to start a new tiny experiment.

Experiment idea:
<short idea>

Mission:
<what I want to learn>

Commitment:
<the smallest repeatable action I will take>

Cadence:
<daily / weekly / one-off / while active>
```

Codex should create a draft experiment file in:

```text
src/content/experiments/<experiment-slug>.md
```

New experiments should usually start with:

```yaml
draft: true
status: proposed
```

## Add A Session Log

After a ChatGPT or Codex session, ask:

```text
Use the tiny-experiment-log skill to summarize this session as a tiny experiment log.

Experiment:
<experiment slug or title>

Raw notes:
<paste rough notes, decisions, or a short chat summary>

Privacy boundary:
<anything that must not be published>
```

Codex should create a draft log file in:

```text
src/content/experimentLogs/YYYY-MM-DD-<experiment-slug>.md
```

Session logs should stay private by default:

```yaml
draft: true
```

## Review The Draft

Before publishing, check that the note:

- Explains what happened, what changed, what you learned, and the next small test.
- Does not include raw transcripts, prompt dumps, credentials, private links, client details, or account information.
- Sounds like a calm lab notebook, not a marketing update.

To revise, ask:

```text
Tighten this experiment log. Keep it public, concrete, and non-performative.
```

## Publish Via Draft PR

When the note is ready, ask:

```text
Use the tiny-experiment-log skill to publish this experiment log via a draft PR.
```

Codex should:

1. Set the reviewed entry to `draft: false`.
2. Run `npm run build`.
3. Commit only the relevant experiment/log/site files.
4. Push a branch named like `experiment-log/<experiment-slug>-YYYY-MM-DD`.
5. Open a draft pull request against `main`.

The draft PR is the default publishing path.

## Direct Publish

Use direct publishing only when you intentionally want to skip the PR checkpoint:

```text
Use the tiny-experiment-log skill to publish this directly to main.
```

Codex should still run `npm run build` first and should not publish anything that fails the privacy review.

## Useful Slugs

Current experiment:

```text
building-in-public-system
```
