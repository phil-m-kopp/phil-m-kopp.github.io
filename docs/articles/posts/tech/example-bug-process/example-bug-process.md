---
title: "Example: Bug process"
slug: example-bug-process
date: 2024-03-18
updated: 2024-03-18
tags: 
  - QA
  - Agile
categories:
  - Tech
description: Example bug process
comments: true
---

- Example of **bug process** with actors AUTOR, QA, PO, DEV and states (e.g. for workflow in Jira)

![Process teaser](example-bug-process-teaser.webp)

<!--more-->

---

!!! info

    **Business "PO"**, **Development "DEV"** and **Quality Assurance "QA"** should be understood as **roles**, not necessarily different persons at all times.

```mermaid
flowchart TD
    start([Start])
    create["AUTOR: Create bug ticket<br/>(mandatory fields)"]:::author
    sanity["QA: SANITY CHECK"]:::qa
    clarity{"Specification and<br/>priority clear?"}:::decision
    spec["PO: Check specification"]:::po
    specType{"Specification..."}:::decision
    value["PO: Evaluate value"]:::po
    cost["DEV: Evaluate cost"]:::dev
    economic{"Economic?"}:::decision
    priority["PO: Prioritization"]:::po
    notEconomic["CLOSED: not economic"]:::closed
    notBug["CLOSED: not bug"]:::closed
    improvement["QA: Assign bug to PO<br/>Tag Improvement"]:::qa
    closeImprovement["CLOSED: Improvement"]:::closed
    accepted["ACCEPTED"]:::state
    assignment["QA: Team assignment"]:::qa
    assignmentOk{"Assignment practical?"}:::decision
    development["DEV: DEVELOPMENT<br/>and PEER REVIEW"]:::dev
    staging["DEV: Deploy to staging"]:::dev
    acceptance["AUTOR: ACCEPTANCE"]:::author
    retest["AUTOR: Bug re-test"]:::author
    regression["QA: Regression testing"]:::qa
    testSuccess{"Test success?"}:::decision
    environment{"Bug environment?"}:::decision
    updateTests["QA: Update testcases"]:::qa
    prodDeploy["DEV: Prod deploy + checks"]:::dev
    done["CLOSED: Done"]:::closed

    start --> create --> sanity --> clarity
    clarity -->|Yes| accepted
    clarity -->|Uncertainties| spec --> specType
    specType -->|Violated: Bug| value
    specType -->|Violated: Bug| cost
    value --> economic
    cost --> economic
    economic -->|Yes| priority --> accepted
    economic -->|No| notEconomic
    specType -->|Fulfilled: not bug| notBug
    specType -->|New: Story| improvement --> closeImprovement
    accepted --> assignment --> assignmentOk
    assignmentOk -->|Wrong or impractical| assignment
    assignmentOk -->|Analysis complete| development --> staging --> acceptance
    acceptance --> retest --> testSuccess
    acceptance --> regression --> testSuccess
    testSuccess -->|Fail| development
    testSuccess -->|Success| environment
    environment -->|Prod| updateTests --> done
    environment -->|Prod| prodDeploy --> done
    environment -->|Staging| done

    classDef author fill:#ffb6c1,stroke:#333,color:#111;
    classDef qa fill:#90ee90,stroke:#333,color:#111;
    classDef po fill:#add8e6,stroke:#333,color:#111;
    classDef dev fill:#ffa500,stroke:#333,color:#111;
    classDef state fill:#f5f5f5,stroke:#333,color:#111;
    classDef closed fill:#f8d7da,stroke:#842029,color:#111;
    classDef decision fill:#fff3cd,stroke:#664d03,color:#111;
```
