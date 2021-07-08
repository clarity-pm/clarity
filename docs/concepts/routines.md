---
title: Routines
sidebar_label: Routines
---

Clarity defines several routines to be done at certain time intervals or whenever certain conditions are met.

There are three distinct kinds of routines Clarity defines - Planning, Review and Retrospective routines.

**NOTE:** Currently, some routines related to the high level planning and review are not defined extensively since they
relate more to how organizations execute planning at a high level than with Clarity framework itself. Apply your best
judgment on how to manage these.

## Planning routines

Planning routines are routines during which upcoming work is planned, reviewed and organized. Planning meetings should
result in -

1. Clear and defined objectives for all defined organizational units.
2. Definition of success - how will you determine goals are achieved.

### Delivery cycle planning

Completed before starting a delivery cycle, all upcoming tasks scheduled for next delivery cycle are reviewed by the
Team to ensure completeness of definition for each of them.

At the end of this routine it is clear what work needs to be done during next delivery cycle by all team members. Tasks
that are unclear or lacking definition should be defined if possible or be removed from the delivery cycle.

It is during this routine team also commits to the amount of work to be delivered in the given cycle. Work that the Team
is unable to commit to be delivered during the cycle should be removed from the cycle and postponed to the next cycle.

### Goal and Objective planning

Done when defining a goal or objective. This routine is used to create a plan and secure commitment to taking the first
steps towards delivery of a goal and objective.

## Review routines

Review routines test work processes and determine current status of each individual planning component. This allows to
identify issues and delays early and act to minimize impact of any deviations. It also encourages participation and
informs stakeholders about the current status of work eliminating guesswork and facilitating communication in all levels
of organization.

### New task review

New task review routine is used to review all tasks in the New stage. This routine is initiated by Team leader whenever
a sufficient amount of tasks are added to the New stage, or whenever a task of a high perceived priority is added.

The goal of this routine is to ensure all new tasks have a clear and defined [objective](tasks.md#task-objective)
, [implementation notes](tasks.md#implementation-notes), [checklist](tasks.md#task-checklist)
, [acceptance criteria](tasks.md#task-acceptance-criteria), and [estimation](tasks.md#task-estimation).

When this routine should be performed is left at the discretion of the Team leader. It is recommended to do the review
quite often. It is perfectly fine to call for a review even with one new task created.

As a general rule, everyone in the team having relevant domain knowledge about the task should participate in the task
review.

When possible, instead of having face-to-face meetings, this routine should be organized asynchronously using
communication tools made available to the team.

### Delivery cycle review

Also known as daily stand-up meeting. The main objectives of cycle review meetings are to present updates on the
progress and discuss challenges associated with ongoing tasks. Cycle review meetings are done daily.

It is important to understand that this is a review meeting, not a planning meeting. Avoid in-depth discussions - report
on current state of affairs, note any issues related to current work, and if necessary - schedule another meeting
specific to issues identified during cycle review.

### Goal and Objective review

Goal and retrospective reviews serve to update stakeholders about current progress and status of goals and objectives.
Depending on whether this is a Goal or Objective review, the Team, or the Team leader reports current status and any
issues, and impediments related to delivery.

It is also during this review when appropriate countermeasures to any impediments are decided and implemented.

## Retrospective routines

In Clarity, retrospective is a routine during which Team members -

1. Discuss and install improvements to the work process.
2. Discuss work-related issues and install countermeasures.

Main goal of having retrospectives is continuous improvement to work process and efficiency. Clarity defines several
kinds of retrospectives.

**Important** Avoid assigning blame and in-depth discussions about "what if's" during retrospectives. Goal of a
retrospective is to identify issues, determine cause and install countermeasures to prevent repeat and new issues from
happening. Retrospectives are not performance reviews and should never be treated as such. Treating retrospectives as
performance reviews have negative side effects on team morale and doing so is also generally counterproductive.

**Important** Retrospective conclusions must be actionable and tangible.

### Task retrospective

On completion of a task Team member responsible for a task can submit a *optional* Task retrospective. Task
retrospective should include information about any impediments or issues encountered during the task that had an effect
on delivery. Task retrospective contents are recorded along with the task for review later during Cycle retrospective.

Submitting task retrospective is not required if task proceeded as planned. Task retrospectives *should* be submit if
task ever entered *impeded*, *waiting* or *blocked* statuses - *if* any action could potentially be taken to prevent
such transition in the future tasks.

**Important** Task retrospectives *can* include conclusions and recommended actions, but it is *not required*. Main goal
of the task retrospective is to identify the issue.

### Delivery cycle retrospective

Delivery cycle retrospective is a review routine of past delivery cycle. The main goal of having a retrospective is to
identify issues with work and work organization during the delivery cycle, review and most importantly - address the
identified issues and install countermeasures where possible.

Cycle retrospectives are generally organized as a Team-wide meetings at the end of every delivery cycle.

The goals of a Cycle retrospective are:

- Review all task retrospectives; and
- Receive input from team members about any impediments or issues related to delivery cycle but not directly related to
  tasks; and
- Decide and recommend concrete actions to install countermeasures for all identified issue; and
- Review past retrospective results in terms of previously defined countermeasures and their effectiveness. Adjust
  previously set countermeasures as necessary.

#### Cycle retrospective organization

Cycle retrospectives should be kept short and to the point. All team members should attend cycle retrospectives. All
input to the cycle retrospective should be prepared before holding the meeting, if any. Retrospective meetings, if any,
should focus on reviewing the issues and determining appropriate actions.

### Goal retrospective

Similar in their function to Cycle retrospectives, Goal retrospectives are organized once all the tasks in a single goal
are completed. General goal progression, completion and related factors are reviewed and team members submit actionable
items for review during the retrospective.

Teams do not review task retrospectives during Goal retrospective - that is done during Cycle retrospectives.

### Objective retrospective

Objective retrospective is similar to Goal retrospective and serves to review Objective completion. Same semantics
apply.

### Postmortem

Postmortem is a special retrospective limited to a review of tasks that at were delivered during an Immediate stage of
previous delivery cycle. During postmortem the team -

1. Reviews all Immediate stage closed tasks from the previous delivery cycle.
2. Determines and identifies cause(s) for these tasks.
3. Discuss, determine appropriate countermeasures to ensure that such tasks does not occur again.
4. Create tasks and objectives to ensure implementation of countermeasures, if any.

Postmortem retrospective can be organized as part of Delivery cycle retrospective.

Postmortem retrospective is skipped if there are no tasks that entered Immediate stage during previous delivery cycle.

## Routine calendar

| What                            | When                                                                                                        | Who                                            |
|------------------------------	|---------------------------------------------------------------------------------------------------------	|-----------------------------------------------	|
| Delivery cycle planning        | Before starting delivery cycle                                                                            | Team                                            |
| Goal planning                    | After a goal is defined                                                                                    | Team                                            |
| Objective planning            | After a objective is defined                                                                                | Stakeholders, involved Team leaders            |
| New task review                | Whenever high priority tasks are added, or sufficient amount of new tasks are created to warrant review    | Team                                            |
| Delivery cycle review            | Every day                                                                                                | Team                                            |
| Goal review                    | Every 1 to 2 delivery cycles                                                                                | Team                                            |
| Objective review                | Every 2 to 4 delivery cycles                                                                                | Objective Stakeholders, involved Team leaders    |
| Task retrospective            | Optionally, whenever a task is Delivered or Discarded                                                    | Task assignee                                    |
| Delivery cycle retrospective    | At the end of every delivery cycle                                                                        | Team                                            |
| Postmortem                    | At the end of ever delivery cycle if Immediate tasks were delivered                                        | Team                                            |
| Goal retrospective            | Every time a goal is achieved - all tasks within a goal are complete                                        | Team                                            |
| Objective retrospective        | Every time a objective is achieved - all goals within objective are complete                                | Stakeholders, involved Team leaders            |
