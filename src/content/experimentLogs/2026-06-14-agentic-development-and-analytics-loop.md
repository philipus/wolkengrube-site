---
title: Reframing Shopfinder as an agentic loop
experiment: agentic-development-and-analytics-loop
date: 2026-06-14
summary: The experiment shifted from a Shopfinder review UI toward a disciplined loop for agentic development and analytics feedback.
learned:
  - Shopfinder is the test case; the real experiment is the operating model for agent-assisted work.
  - GitHub issues, small pull requests, tests, and review gates should come before higher autonomy.
  - Review data and failure patterns need to drive the next task, not sit beside the development process.
  - Autonomy only makes sense after the workflow, data model, and review gates are stable.
next: Set up the first GitHub milestone and issue backlog for the Shopfinder use case.
draft: false
---

The framing tightened today.

I had been describing the work as a Shopfinder review workflow. That is too narrow. Shopfinder is the test case; the experiment is learning how to use agents inside a controlled development and analytics loop.

That distinction changes the next steps. If Shopfinder were the only goal, I would focus directly on the review UI, matching rules, and data model. The broader goal is to practice issue-based agent work: small scopes, explicit repository boundaries, pull requests, tests, and human review before merge.

The analytics side needs the same discipline. Shopfinder should produce review decisions, false positives, uncertain matches, evidence quality signals, and rule-improvement candidates. Those signals should become the basis for the next GitHub issue.

The working loop is:

- Define a narrow GitHub issue.
- Let an agent implement one small change.
- Review the pull request and tests.
- Run Shopfinder on sample data.
- Inspect failures and uncertain cases.
- Turn the next improvement into another issue.

The long-term idea is that a meta-agent could coordinate parts of this loop. That is not the first milestone. First I need the loop to be visible, small, and reviewable.
