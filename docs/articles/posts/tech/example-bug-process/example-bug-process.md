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

```puml
@startuml
!theme vibrant

fork
   -[hidden]->
   #LightPink:AUTOR;
   -[hidden]->
fork again
   -[hidden]->
   #lightgreen:QA;
   -[hidden]->
fork again
   -[hidden]->
   :__WORKFLOW STATE__]
   -[hidden]->
fork again
   -[hidden]->
   #LightBlue:PO;
   -[hidden]->
fork again
   -[hidden]->
   #orange:DEV;
   -[hidden]->
end fork
-[hidden]->

#LightPink:**Create** bug ticket\n(mandatory fields);
#lightgreen:__SANITY CHECK__]
#lightgreen:if (-**Complete** description, tags etc\n-Ensure **clarity**) then (Specification & Priority clear)
-[#Green]->
else (Uncertainties)
  -[#red]->
  #LightBlue:Check specification;
  switch (Specification...) 
    case (violated?\n➡️**Bug**) 
      split
        #LightBlue:Evaluate **value**;
      split again
        #orange:Evaluate **cost**;
      end split
      #LightBlue:if (Economic?)
        -[#Green]->
        #LightBlue:**Priorization**;
      else
        -[#red]->
        #LightBlue:__CLOSED__: "**not economic**"]
        -[#red]->
        stop
      endif
    case (fulfilled?\n➡️**!Bug**)
      #LightBlue:__CLOSED__: "**not bug**"]
      -[#red]->
      stop
    case (new?\n➡️**Story**)
      #lightgreen:-**Assign** bug **to PO**\n-Tag "**Improvement**";
      -[#red]->
      #LightBlue:__CLOSED__: "**Improvement**"]
      -[#red]->
      stop
    endswitch
endif

#lightgreen:__ACCEPTED__]
#lightgreen:repeat :Team assignment;
repeat while (Analysis) -[#red]->wrong/impractical assignment
-[#Green]->
#orange:__DEVELOPMENT__ &\n__PEER REVIEW__]
#orange:Deploy to **staging**;
#LightPink:__ACCEPTANCE__]
repeat
split
  #LightPink:Bug **re-test**;
split again 
  #lightgreen:**Regression** testing;
end split
repeat while (Test success?) is (fail) -[#red]->
-[#Green]->success;
if (Bug **environment**) then (Prod)
  split
    #lightgreen:**Update testcases**;
  split again
    #orange:**Prod** deploy + checks;
  end split
else (Staging)
endif
#lightgreen:__CLOSED__: "**Done**"]
stop

@enduml
```