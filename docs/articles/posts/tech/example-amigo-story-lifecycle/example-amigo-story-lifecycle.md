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

```puml
@startuml
' !theme cerulean-outline
actor PO #lightblue
participant Story
actor DEV #orange
actor QA #lightgreen

group New Requirement
  PO -> Story++#black: <color:blue>[OPEN]
  PO -> Story: **ACs**
end group

group Refinement
  PO -> Story++#lightblue: **schedule** Refinement\n(1-2 sprints ahead)
  PO -> Story: <color:blue>[REFINEMENT]
  DEV -> Story++#orange: **Subtasks**
  DEV -> Story: Define all **interfaces** as early as possible
  QA -> Story: Input: **"What can go wrong?"**
  QA -> Story: Input: **Testability**
  return
  QA -> Story++#lightgreen: Sketching **E2E (acceptance/sanity) tests** based on ACs
  QA -> Story: Ensure **dependencies to stakeholders/other teams** are adressed
  QA -> Story: Ensure **no open questions or uncertainties** as far as possible
  QA -> Story: Ensuring **DoR**
  return
  DEV -> Story: **Estimation** (Story points)
  return
  PO -> Story: **Prioritization**
  PO -> Story: <color:blue>[READY]
end group

group Sprint Planning
  DEV -> Story++#orange: Sprint (capacity) **Planning**
  DEV -> Story: **communicate** dependencies to affected teams again
  return dependencies managed, sprint goal defined...
end group

alt Development 
  DEV -> Story++#orange: <color:blue>[DEVELOPMENT]
  DEV -> Story: **Implementation** incl. developer **whitebox tests** (Unit etc)
  return Blackbox smoke + **sanity testing** on integrated system\n("Main AC working from end user perspective?")
  DEV -> Story++#orange: <color:blue>[PEER REVIEW]
  DEV -> Story: **Peer Review**
  return **Approved** & deployed for **acceptance test**
  DEV -> Story: <color:blue>[ACCEPTANCE TEST]
else QA
  QA -> Story++#lightgreen: Development of SIT E2E tests incl. test data and error paths\n(manual/automated, for regression and acceptance testing)
  PO -> Story: **Review** of E2E tests
end alt

group Approval
  QA -> Story: Execution of **E2E tests**
  return
  PO -> Story: **Final approval** of ACs\n
  note right
  __based__ on 
  - Feedback from **Developer tests** -> technical functionality (Whitebox) and
  - Feedback from **E2E tests** -> technical functionality (Blackbox) & domain correctness
  end note
  PO -> Story--: <color:blue>[RELEASE]
return
end group

group Release
  DEV -> Story++#orange: **Deploy** to PROD\n(considering deployment checklist + rollout strategy)
  return Deployment **stable** for 1-24h\n(depending on traffic, cron jobs...)
  DEV -> Story: Update **release notes**
end group

QA -> Story++#lightgreen: Check **DoD**
return
QA -> Story: <color:blue>[DONE]
@enduml
```