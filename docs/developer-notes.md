---
title: System implementation details
sidebar_label: For developers
---

There are certain details system developers should consider when implementing tools for Clarity methodology.

For one, we should not implement any limits placed by Clarity as hard system limits.
For example, despite the fact that Clarity requires tasks with status Delivered to be final, it should be technically possible to transition such tasks without technical intervention. Mistakes happen and users should be able to correct mistakes without resolving to getting help from tech support. The best way to deal with such situations is to implement “limits” as soft warnings. It is also an excellent idea to alert Team leader about such “policy violations”.

System implementations should provide a certain level of customization besides what we define in Clarity, for example adding more custom Task statuses. This is however not required, and it’s okay to follow “reference implementation” way of doing things.

## Pre-defined change logs

Clarity defines change logs that any automatic system implementing Clarity should provide at all times.

### Cycle change log

Lists all tasks that have the current status *Delivered* at any current or past delivery cycle, including current incomplete cycle.

### Goal change log

Lists all tasks that have the current status *Delivered* within current backlog at any delivery cycle related to one or more selected goals. Should be visually split by delivery cycle.

### Task change log

Lists all transitions and promotions of a task, when and by whom said transitions and promotions happened.

## Inbox

Any automated system implementing Clarity should provide Inbox. Inbox is a collection of alerts related to changes in
one or more backlogs. The goal of the Inbox is to facilitate proactive communication - right people should know about the right events at the right time.

We should reserve inbox for important notifications only, for example, task transition between Pending and In progress should not be alerted since that is supposed to happen anyway - it is not an exceptional case.

Clarity defines several alerts that should be placed in Inbox and who should receive these alerts. Besides placing such alerts in Inbox, system developers might also send notifications about these changes by other means, such as email.

1. Task promoted to stage New - Team leader.
2. Task promoted to stage Review - everyone in the Team.
2. Task transitions to Blocked, Impeded or Waiting - Team leader and Stakeholders.
3. Task transitions to Delivered - Team leader and Stakeholders.
4. Task promoted to stage Immediate - everyone in the Team.

## Recurring tasks

Clarity permits for existence of recurring work items - recurring tasks. Any automated system should account for that. This could be done by automatically creating recurring task items periodically from a template. It should also be possible to schedule these items automatically to Next delivery cycle, depending on a configured length of a delivery cycle.
