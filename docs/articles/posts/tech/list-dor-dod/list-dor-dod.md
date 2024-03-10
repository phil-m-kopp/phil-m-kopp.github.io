---
title: "List: Definition of Done and Ready"
slug: list-dor-dod
date: 2024-03-10
updated: 2024-03-10
tags: 
  - Agile
  - QA
categories:
  - Tech
description: Definition Of Ready (DoR) and Done (DoR) are checklists to ensure a quality delivery of (software) products
comments: true
---

- A Definition Of Ready (DoR) and Definition Of Done (DoR) are common checklists to ensure a quality delivery of (software) products
- DoRs are used early in software development (e.g. refinements) while DoDs ensure that work is not considered done without passing certain quality gates

<!--more-->

---

## DoR

### Solution design

- **Solution design and data flows/classification** visualized (e.g. using [C4](https://c4model.com) diagrams)
  - **Failure cases** also considered (or e.g. extracted to follow up stories)
  - **Sensitive data** is handled appropriately, even in case of failures
  - **Non-functional requirements** considered:
    - **Performance**: throughput, latency, and response time ...
    - **Scalability**: automated, elastic vertical + horizontal ...
    - **Reliability & Availability**: uptime, graceful error handling, self-healing ...
    - **Security**: thread analysis (e.g. STRIDE) ...
    - **Maintainability**: modularity, adaptability, simplicity ...
    - **Deployability**: in existing infrastructure with minimal modificaions ...
    - **Testability**: all service/feature output verifiable in automated way, with feature flags/extra testing features ...
  - **Reviewed/approved by architect**/architecture forum to ensure/document compliance (with company guidelines, norms ...)
  - **Reviewed/approved by subject matter experts** where applicable, e.g. security, privacy, UX

### Work definition

- **Acceptance criteria** clear to everyone
- **Uncertainties** discussed and accepted, considered for estimation
- Sub-tasks have **meaningful title** (e.g. "[component]: [change needed]") and **detailed description**
    - Enabling also **people not present** in refinement to work on task
    - **Leaving no fundamental questions** that would cause discussion later e.g. during code review anyways
- Sub-tasks about **defining interfaces** etc. have **top priority** and should be done at least with 4 eyes or **mob session** with person from each affected component
- Sub-tasks with high **uncertainty** (e.g. new technology) are planned to be done in **pairing** with a senior dev
- Sub-tasks are aimed at reaching **integration state early** (e.g. working API endpoint + validation)
- Consider **knowledge sharing** (e.g. pairing) possibilities. People with clear **knowledge silos** are **not allowed** to work alone

### Backward compatibility

- **Breaking changes** (HTTP API, events, DB schema etc.) and subsequent work (e.g. versioning) as well as deployment strategy (incl. rollback)
- **Testability and existing E2E tests**
- **Data on Prod**

### Special tasks

- **Infrastructure** requirements/dependencies
- **DevOps** work (e.g. pipeline or resource updates)
- **Documentation** (README, CHANGELOG, MANUAL, ADRs, API docs, UML diagrams, wiki ...)
- **Testability requirements & test data provision**, **non-functional testing** and **service-external testing** (e.g. contract/E2E testing)

### Dependencies

- Affected **(team) internal services**
- Affected **(team) external services**
- Needed **support from other teams** (domain knowledge, task dependency, administration ...)
- **Dependencies/blockers to other teams/third-party services** are identified, clarified, communicated
    - Dependencies are **visualized/documented** (e.g. using "links" in Jira)
    - Work on the story/task can only start with a clear plan on **how to work around the issue**

### Testing/Review/Deployment

- **Acceptance testing** steps and scope defined
- **Sanity/Smoke testing** steps and scope clarified
- **Rollout strategy** clarified

## DoD

### Release
- Deployed to final stage (mostly: Prod)
- Post-deployment sanity and smoke tests successful
- Deployment monitored to be stable for 1h-24h (e.g. depending on traffic, scheduled cron jobs ...)
- Release notes available
- New code unit test coverage > 80%

### Approval
- Approved by ticket reporter or product owner
- All peer-review/static analysis feedback closed or tracked as tech-debt (e.g. using MoSCoW method)

### Documentation
- Architecture/ADRs and data flow diagrams updated
- Services README/Manual/Troubleshooting Guide updated