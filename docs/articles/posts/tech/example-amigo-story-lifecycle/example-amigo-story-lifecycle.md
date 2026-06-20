---
title: "Example: 3 Amigos story lifecycle process"
slug: example-amigo-story-lifecycle
date: 2024-03-12
updated: 2024-03-12
tags: 
  - QA
  - Agile
categories:
  - Tech
description: Example of high level 3 Amigos story lifecycle process
comments: true
---

- Example of high level **3 Amigos** (Business, Development, QA) **story lifecycle** process

![Process teaser](example-amigo-story-lifecycle-teaser.webp)
<!--more-->

---

!!! info

    **Business "PO"**, **Development "DEV"** and **Quality Assurance "QA"** should be understood as **roles**, not necessarily different persons at all times. E.g. if a QA specialist is unavailable, a DEV can also focus on the QA perspective during refinements.

```mermaid
sequenceDiagram
    actor PO
    participant Story
    actor DEV
    actor QA

    rect rgb(235, 245, 255)
    note over PO,Story: New Requirement
    PO->>Story: [OPEN]
    PO->>Story: ACs
    end

    rect rgb(235, 245, 255)
    note over PO,QA: Refinement
    PO->>Story: Schedule refinement<br/>(1-2 sprints ahead)
    PO->>Story: [REFINEMENT]
    DEV->>Story: Subtasks
    DEV->>Story: Define all interfaces as early as possible
    QA->>Story: Input: "What can go wrong?"
    QA->>Story: Input: Testability
    QA->>Story: Sketch E2E acceptance/sanity tests based on ACs
    QA->>Story: Ensure dependencies to stakeholders/other teams are addressed
    QA->>Story: Ensure no open questions or uncertainties as far as possible
    QA->>Story: Ensure DoR
    DEV->>Story: Estimation (story points)
    PO->>Story: Prioritization
    PO->>Story: [READY]
    end

    rect rgb(255, 245, 230)
    note over DEV,Story: Sprint Planning
    DEV->>Story: Sprint capacity planning
    DEV->>Story: Communicate dependencies to affected teams again
    Story-->>DEV: Dependencies managed, sprint goal defined...
    end

    alt Development
        DEV->>Story: [DEVELOPMENT]
        DEV->>Story: Implementation incl. developer whitebox tests (unit etc.)
        Story-->>DEV: Blackbox smoke + sanity testing on integrated system<br/>("Main AC working from end-user perspective?")
        DEV->>Story: [PEER REVIEW]
        DEV->>Story: Peer review
        Story-->>DEV: Approved & deployed for acceptance test
        DEV->>Story: [ACCEPTANCE TEST]
    else QA
        QA->>Story: Develop SIT E2E tests incl. test data and error paths<br/>(manual/automated, for regression and acceptance testing)
        PO->>Story: Review E2E tests
    end

    rect rgb(235, 255, 235)
    note over PO,QA: Approval
    QA->>Story: Execute E2E tests
    PO->>Story: Final approval of ACs
    note right of Story: Based on developer tests for technical functionality (whitebox)<br/>and E2E tests for technical functionality (blackbox) and domain correctness
    PO->>Story: [RELEASE]
    end

    rect rgb(255, 245, 230)
    note over DEV,Story: Release
    DEV->>Story: Deploy to PROD<br/>(considering deployment checklist + rollout strategy)
    Story-->>DEV: Deployment stable for 1-24h<br/>(depending on traffic, cron jobs...)
    DEV->>Story: Update release notes
    end

    QA->>Story: Check DoD
    QA->>Story: [DONE]
```
