---
title: System implementation details
sidebar_label: For developers
---

There are certain details system developers should consider when implementing tools for the Clarity methodology.

For one, we should not implement any limits placed by Clarity as hard system limits. For example, despite the fact that
Clarity requires tasks with status Delivered to be final, it should be technically possible to transition such tasks
without technical intervention. Mistakes happen and users should be able to correct mistakes without resorting to
getting help from tech support. The best way to deal with such situations is to implement “limits” as soft warnings. It
is also an excellent idea to alert the Team leader about such “policy violations”.

System implementations should provide a certain level of customization beyond what we define in Clarity, for example,
adding more custom Task statuses. This is however not required, and it’s okay to follow the “reference implementation”
approach.

## Predefined change logs

Clarity defines change logs that any automatic system implementing Clarity should provide at all times.

### Cycle change log

Lists every task that transitioned to *Delivered* during the selected current or past delivery cycle. A later corrective
transition must not remove the original delivery event from this log. Each event records the task, cycle, transition time,
actor, and any later correction.

### Goal change log

Lists every task in the current Backlog that transitioned to *Delivered* during any delivery cycle associated with one or
more selected Goals. The log is visually split by delivery cycle. Later corrective transitions do not remove historical
delivery events.

### Task change log

Lists all Status transitions and Stage moves for a task, including when each event happened, who performed it, and the
reason recorded for any correction to a Delivered task. The log retains prior active Stage and delivery-cycle associations
when a task enters Closed.

This event history provides the data needed to identify every task that touched Immediate.

## Inbox

Any automated system implementing Clarity should provide an Inbox. Inbox is a collection of alerts related to changes in
one or more backlogs. The goal of the Inbox is to facilitate proactive communication - the right people should know about
the right events at the right time.

We should reserve inbox for important notifications only, for example, task transition between Pending and In progress
should not trigger an alert since that is supposed to happen anyway - it is not an exceptional case.

Clarity defines several alerts that should be placed in the Inbox and who should receive these alerts. Besides placing such
alerts in the Inbox, system developers may also send notifications about these changes by other means, such as email.

1. Task promoted to stage New - Team leader.
2. Task promoted to stage Review - everyone in the Team.
3. Task transitions to Blocked, Impeded or Waiting - Team leader and Stakeholders.
4. Task transitions to Delivered - Team leader and Stakeholders.
5. Task promoted to stage Immediate - everyone in the Team.

## Recurring tasks

Clarity permits the existence of recurring work items - recurring tasks. Any automated system should account for it.
This could be done by automatically creating recurring task items periodically from a template. It should also be
possible to schedule these items automatically to the Next delivery cycle, depending on the configured length of a delivery
cycle.
