---
title: "List: QA project scoping topics"
slug: list-qa-project-scoping-topics
date: 2024-02-12
updated: 2024-02-12
tags: 
  - QA
categories:
  - Tech
description: Checklist of QA topics for project scoping, e.g. to evaluate QA maturity
comments: true
---

- Checklist of QA topics for project scoping, e.g. to evaluate QA maturity

<!--more-->

---

## Overview/context

### System under test (tech stack \+ documentation)
- [ ] Architecture (monolith vs microservices)
- [ ] Backends & frontends
- [ ] 3rd-party services/APIs
- [ ] (Cloud) Infrastructure

### Engineering organization
- [ ] Teams: dependencies, structure/roles & seniority
- [ ] QA structure: centralized or de-centralized
- [ ] Continuous improvement (retros)

### Project
- [ ] Stakeholders
- [ ] Role expectations & KPIs
    - [ ] Focus on single team or cross team
- [ ] Runtime/Deadline & Milestones
- [ ] Main risks
- [ ] Business domain (of the team)

## Deep dive

### Testing

#### Tests/"test pyramid" (coverage, count/runtime, execution, tools/frameworks)
- [ ] Unit/Component
- [ ] Integration (infrastructure)
- [ ] E2E
    - [ ] API
    - [ ] UI
- [ ] (User-) Acceptance
    - [ ] End-user incorporation
- [ ] Explorative
- [ ] Non-functional
    - [ ] performance
    - [ ] security/penetration
    - [ ] UX
    - [ ] infrastructure resilience

#### Environments
- [ ] Stages: local/dev, staging/pre-prod, prod
    - [ ] Service/infrastructure setup (backends, frontends, 3rd-party) & mocks
    - [ ] Data (generation/sources)

### (QA) Management (processes & inter-dependencies, tools, involved roles)
- [ ] Requirements/user stories
    - [ ] BDD: 3 Amigos, Gherkin
    - [ ] DoR & DoD
        - [ ] TDD: feature testability, acceptance tests

- [ ] QA
    - [ ] Tests (suites)
    - [ ] Metrics

- [ ] Defects/bugs
- [ ] Incidents & customer-care
- [ ] Risk

### Release & Deployment
- [ ] Frequency & notes
- [ ] Deployment pipeline & strategy (rolling, blue green, canary, A/B)
- [ ] Rollback process
- [ ] Stakeholders/roles & approval
- [ ] Checklist/guidelines
- [ ] Smoke tests
- [ ] Feature toggles
- [ ] Quality gates (coverage, test types)

### Monitoring
- [ ] Logs/Traces/Metrics
- [ ] Dashboards & Alerts
- [ ] RUM
- [ ] On-call
  
### Development
- [ ] Use of specialized roles (Architect, DevOps, Security)
- [ ] DDD
- [ ] Code reviews
- [ ] Tech debt management (MoSCoW etc)
- [ ] Stewardship/ownership
- [ ] Code style/linters

### Documentation
- [ ] Architecture
- [ ] Service READMEs/manuals & troubleshooting
- [ ] Business processes & ubiquitous language
- [ ] Data flows
- [ ] APIs
- [ ] Written guidelines/ best practice reference (logging, error handling etc; service design/architecture)