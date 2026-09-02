---
title: Routines
sidebar_label: Routines
---

Clarity defines several routines to be performed by the teams at certain time intervals or whenever certain conditions
are met.

There are three distinct kinds of routines Clarity defines: Planning, Review, and Retrospective routines.

## Planning routines

Planning routines are meetings during which upcoming work is planned, reviewed, and organized. Planning meetings should
result in:

1. Clear and defined objectives for all defined organizational units.
2. A definition of success: how the organization will determine that the defined goals have been achieved.

### Delivery cycle planning

Completed before starting a delivery cycle, all upcoming tasks scheduled for the next delivery cycle are reviewed by the
Team to ensure completeness of definition for each of them.

At the end of this routine, it is clear what work needs to be done during the next delivery cycle by all team members. Tasks
that are unclear or lacking definition should be defined if possible or be removed from the delivery cycle.

During this routine, the Team also commits to the amount of work to be delivered in the given cycle. Work that the Team
is unable to commit to be delivered during the cycle should be removed from the cycle and postponed to the next cycle.

### Goal and Objective planning

Done when defining a Goal or Objective. This routine is used to create a plan and secure commitment to taking the first
steps towards delivery of the Goal or Objective.

## Review routines

Review routines test work processes and determine current status of each individual planning component. This makes it
possible to identify issues and delays early and act to minimize the impact of any deviations. It also encourages
participation and informs stakeholders about the current status of work, eliminating guesswork and facilitating
communication at all levels of the organization.

### New task review

A New task review routine is used to review all tasks in the New stage. This routine is initiated by the Team leader whenever
a sufficient number of tasks are added to the New stage, or whenever a task of a high perceived priority is added.

The goal of this routine is to make each task definition as complete as circumstances allow. The Team should aim to
provide a clear [objective](tasks.md#task-objective), [implementation notes](tasks.md#implementation-notes),
[checklist](tasks.md#task-checklist), [acceptance criteria](tasks.md#task-acceptance-criteria), and
[estimation](tasks.md#task-estimation) whenever each item is relevant and the required information is available.

The Team or organization decides whether a task is sufficiently defined. An item that is not applicable or cannot
reasonably be determined does not prevent the task from leaving Review.

When this routine should be performed is left at the discretion of the Team leader. It is recommended to do the review
quite often. It is perfectly fine to call for a review even with one new task created.

As a general rule, everyone on the Team with relevant domain knowledge about the task should participate in the task
review.

When possible, instead of having face-to-face meetings, this routine should be organized asynchronously using
communication tools made available to the team.

### Delivery cycle review

This routine is often also referred to as a stand-up or daily meeting. The main objectives of cycle review meetings are
to present updates on progress and discuss challenges associated with ongoing work. Cycle review meetings are done daily.

It is important to understand that this is a review meeting, not a planning meeting. Avoid in-depth discussions about
implementation specifics and the like; report on current state of affairs, note any issues related to current work,
and if necessary - schedule another meeting specific to issues identified during the cycle review.

### Goal and Objective review

Goal and Objective reviews serve to update stakeholders about current progress and status of goals and objectives.
Depending on whether this is a Goal or Objective review, the Team or the Team leader reports current status and any
issues and impediments related to delivery.

During this review, appropriate countermeasures to any impediments are decided and implemented.

## Retrospective routines

In Clarity, a retrospective is a routine during which Team members:

1. Discuss and install improvements to the work process.
2. Discuss work-related issues and install countermeasures.

The main goal of having retrospectives is continuous improvement of the work process and efficiency. Clarity defines several
kinds of retrospectives.

**Important:** Avoid assigning blame and in-depth discussions about "what-ifs" during retrospectives. The goal of a
retrospective is to identify issues, determine the cause and install countermeasures to prevent repeated and new issues from
happening. Retrospectives are not performance reviews and should never be treated as such. Treating retrospectives as
performance reviews has negative side effects on team morale and doing so is also generally counterproductive.

**Important:** Retrospective conclusions must be actionable and tangible.

### Task retrospective

On completion of a task, a Team member responsible for a task can submit an *optional* Task retrospective. Task
retrospective should include information about any impediments or issues encountered during the task that had an effect
on the task's delivery. The contents of a Task retrospective are recorded along with the task for review later during a
Cycle retrospective.

Submitting a Task retrospective is not required if a task proceeded as planned. Task retrospectives *should* be submitted if
the task ever entered *impeded*, *waiting* or *blocked* statuses - *if* any action could potentially be taken to prevent
such a transition in future tasks.

**Important:** Task retrospectives *can* include conclusions and recommended actions, but doing so is *not required*. The
main goal of the task retrospective is to identify the issue.

### Delivery cycle retrospective

Delivery cycle retrospective is a review routine of the past delivery cycle. The main goal of having a retrospective is to
identify and review issues with work and work organization during the delivery cycle and, most importantly, address the
identified issues and install countermeasures where possible.

Cycle retrospectives are generally organized as Team-wide meetings at the end of every delivery cycle.

The goals of a Cycle retrospective are:

- Review all task retrospectives; and
- Receive input from team members about any impediments or issues related to the delivery cycle but not directly related to
  tasks; and
- Decide and recommend concrete actions to install countermeasures for all identified issues; and
- Review past retrospective results in terms of previously defined countermeasures and their effectiveness. Adjust
  previously set countermeasures as necessary.

#### Cycle retrospective organization

Cycle retrospectives should be kept short and to the point. All team members should attend cycle retrospectives. All
input to the cycle retrospective should be prepared before the meeting, if any. Retrospective meetings, if any,
should focus on reviewing the issues and determining appropriate actions.

### Goal retrospective

Goal retrospectives are organized once all tasks associated with a Goal are in Closed. General goal progression,
completion and related factors are reviewed and team members submit actionable items for review during the retrospective.

Teams do not review task retrospectives during a Goal retrospective - that is done during Cycle retrospectives.

### Objective retrospective

Objective retrospectives are organized once all tasks in all Goals associated with an Objective are in Closed. They serve
to review the Objective's completion. The same semantics as Goal retrospectives apply.

### Postmortem

A Postmortem is a special retrospective for every task that touched Immediate during the previous delivery cycle. A task
touches Immediate if it was created in, moved into, or worked on while in Immediate at any time during the cycle. The task
remains in scope even if it later moved to Now, another active Stage, or Closed.

During a Postmortem, the Team:

1. Reviews every task that touched Immediate during the previous delivery cycle.
2. Determines and identifies why Immediate treatment was required.
3. Discusses and determines appropriate countermeasures to reduce recurrence.
4. Creates tasks and objectives to implement countermeasures, if any.

A Postmortem can be organized as part of a Delivery cycle retrospective. It is skipped only if no task touched Immediate
during the previous delivery cycle.

## Routine calendar

| What                            | When                                                                                                        | Who                                            |
|------------------------------	|---------------------------------------------------------------------------------------------------------	|-----------------------------------------------	|
| Delivery cycle planning        | Before starting delivery cycle                                                                            | Team                                            |
| Goal planning                    | When defining a Goal                                                                                        | Team                                            |
| Objective planning            | When defining an Objective                                                                                    | Stakeholders, involved Team leaders            |
| New task review                | Whenever high-priority tasks are added, or a sufficient number of new tasks are created to warrant review    | Team                                            |
| Delivery cycle review            | Every day                                                                                                | Team                                            |
| Goal review                    | Every 1 to 2 delivery cycles                                                                                | Team                                            |
| Objective review                | Every 2 to 4 delivery cycles                                                                                | Objective Stakeholders, involved Team leaders    |
| Task retrospective            | Optionally, whenever a task is Delivered or Discarded                                                    | Task assignee                                    |
| Delivery cycle retrospective    | At the end of every delivery cycle                                                                        | Team                                            |
| Postmortem                    | At the end of every delivery cycle in which one or more tasks touched Immediate                              | Team                                            |
| Goal retrospective            | When all tasks associated with a Goal are Closed                                                            | Team                                            |
| Objective retrospective        | When all tasks in all Goals associated with an Objective are Closed                                          | Stakeholders, involved Team leaders            |
