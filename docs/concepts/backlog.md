---
title: Backlog
sidebar_label: Backlog
---

In Clarity, all deliverable work is organized in Backlogs. A Backlog is the highest possible work organization unit for a
single [Team](team.md). Think of the Backlog as a collection of logically related work - a project, a list of scheduled
tasks for an organizational division.

A Clarity backlog contains [Tasks](tasks.md). A Clarity backlog is further divided in [Stages](task-stage.md) representing
readiness and current state of all tasks in the backlog.

Delivered and Discarded tasks automatically enter Closed. Closed tasks remain part of Backlog history but do not appear
in active Stage views.

**Important:** Routines, meetings and similar administrative work items are not considered tasks. They do not belong in
the backlog. For capacity planning, these items are considered administrative overhead and should be accounted for as
such.

## Pulling work

During each [delivery cycle](delivery-cycle.md) Team members pull work from [Now](task-stage.md#now) stage of the
Backlog. This process is called Pulling work. [Tasks](tasks.md) are worked on starting from the tasks with the highest
priority.

In Clarity, all Tasks are self-assigned by Team members on a "first-come, first-served" basis depending on the area of
specialization of each individual member - members should pull and work on tasks they can deliver starting from the
tasks with the highest priority.

Tasks should not be assigned to Team members by anyone else except for Team members themselves, specifically - team
members must be allowed to pick their own tasks in order of priority.

Assigning tasks to members by someone other than themselves, for example the Team leader, allows for different biases towards
whoever gets to do what work within the team. Despite being arguably a more efficient approach for teams with significant
differences in terms of seniority within the same specialization, assigning tasks preferentially will eventually lead to
lost knowledge and increasing performance issues within the team. Knowledge should be shared and effort should be made
to equalize working knowledge so that the self-assignment aspect becomes a non-issue.

Naturally, Team members may skip tasks they cannot deliver due to their specialization. The point of self-assigning tasks is
to avoid preferential assignments within the same specialization thus facilitating knowledge sharing between members
with different actual efficiency and seniority.

This approach to sharing will not only facilitate growth of the team members with impact on eventual efficiency - this
approach also provides redundancy, meaning no one function will ever depend on a single team member. This increases stability
when composition of the team changes temporarily - e.g., holidays, sick leave, or permanently - members switching teams or
moving to different organizations.

It is important to mention that the above rule is only concerned with pulling new work that has no previous art. It is
perfectly acceptable and sometimes even necessary to assign tasks to specific members of the team during the lifecycle
of the task, for example, handing over the tasks from an individual with one specialty to an individual with another,
such as a handover from an individual responsible for production of the deliverables to an individual responsible for
quality assurance or a stakeholder.

Remember that [Immediate](task-stage.md#immediate) takes precedence over Now. Work on Now can be postponed until every
Immediate task is Closed or explicitly moved to another active Stage. Waiting and Blocked Immediate tasks remain part of
this priority: the Team works to remove their dependencies or blockers before returning focus to Now.

## Task order in backlog

Task order in backlog is a very important part of Clarity. With [prioritization](./prioritization.md) considered, it should
always be the case that the tasks at the top of the backlog are consumed before tasks at any other position in the backlog.
Since it is explicitly required to order tasks with highest priority at the top of the backlog too, it should never be
the case that higher priority items are naturally ordered below lower priority items in the backlog, even if technical means
permit.

Task status should also never affect the absolute priority of tasks in the backlog.

The goal of task ordering is to transmit with absolute clarity what should be done and in what order.
