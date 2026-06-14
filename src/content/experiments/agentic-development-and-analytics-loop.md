---
title: Agentic Development and Analytics Loop
summary: A small experiment in using agents as disciplined contributors across a software and analytics lifecycle.
mission: Can I learn to use agents through GitHub issues, pull requests, review loops, and analytics feedback without losing architectural control?
commitment: Work on one small issue-based agent task at a time and review the outcome before continuing.
cadence: Daily when active
status: proposed
startedAt: 2026-06-14
tags:
  - agentic-development
  - analytics-loop
  - github-workflow
  - shopfinder
  - learning-in-public
learned: []
next: Create the first GitHub milestone and issues for the Shopfinder use case.
featured: false
draft: false
---

This experiment is about learning how to use agents properly.

The concrete use case is Shopfinder: a small system that tries to find the website of a local company from its name, address, and category. Shopfinder is useful because it creates a realistic development and analytics loop. It has sample generation, candidate generation, evidence collection, review, scoring, dashboards, and rule improvement.

But Shopfinder is not the main point.

The main point is to practice a disciplined way of working with agents.

Instead of asking an agent to "build the system," I want to work through GitHub issues, branches, pull requests, tests, and review. Agents should act as contributors inside a controlled development loop. They should understand repository boundaries, make small changes, report assumptions, and stop at review points.

The second part is the analytics loop. Shopfinder produces data: raw input entities, generated candidates, scraped evidence, match scores, review decisions, false positives, uncertain cases, and rule-improvement candidates. This data should become queryable, so that I can inspect where the system fails and decide what the next small improvement should be.

The longer-term direction is an autonomous loop:

1. Generate or select benchmark data.
2. Run the application.
3. Collect evidence and metrics.
4. Review or sample review cases.
5. Analyze failure patterns.
6. Create the next issue.
7. Let an agent implement a small improvement.
8. Review the pull request.

For now, the experiment stays deliberately smaller. The first goal is not full autonomy. The first goal is to become comfortable with the development loop and the analytics loop before giving agents more freedom.
