---
title: Task stages
sidebar_label: Task stages
---

All backlog tasks are separated in stages. Stage serves to indicate overall status of scheduling for a collection of tasks.

Process of moving tasks between stages is called Stage Promotion - or simply, Promotion.

Task stages also limit what status a task in said stage can have. Clarity explicitly defines six task stages.

## New

All new tasks are created in stage New. This stage serves as Unread Inbox for the Team - meaning the tasks in this stage has not been viewed by Team leader nor Team.

Tasks from New are promoted to any other stage, and it is generally the responsibility of Team leader to promote them.

*Allowed task statuses:* Pending

## Review

Review stage serves as clarification stage for all **new** tasks. All tasks received in New that were reviewed by Team leader should enter this stage IF further clarification is required to determine the value, validity and priority of the task.

Tasks where value, validity and priority can be determined outright can bypass this stage and be promoted directly to any other stage.

*Allowed task statuses:* Pending

**Important** For a task to transition out of Review stage it should be complete and have a clear and defined [objective](tasks.md#task-objective), [implementation notes](tasks.md#implementation-notes), [checklist](tasks.md#task-checklist), [acceptance criteria](tasks.md#task-acceptance-criteria), and [estimation](tasks.md#task-estimation).


## Immediate

Tasks to be worked on immediately disregarding all other work should be placed in this stage.

A task promoted to this stage serves as a signal to the Team to immediately reassign all available resources to deal with the tasks in Immediate regardless of any other priorities.

Tasks promoted to this stage should be an **exceptional event** and be reserved for emergencies only. It is always the goal of the team to have no tasks in Immediate as soon as possible. Whenever a task is promoted to this stage, Team should be notified and a member or members able to resolve the issue must stop all other work to deal with all tasks in Immediate. Resources of the Team are reassigned all till there is no more pending Immediate tasks, even if it means completely stopping all work on tasks in Now.

If for any particular task such emergency response feels unjustified, it most likely is - tasks with a very high priority but not warranting undivided attention of the Team should be promoted to Next - not Immediate.

It is also implied all tasks in Immediate are the highest priority for the purpose of scheduling. When using prioritization by [rank](prioritization#prioritization-using-rank), all tasks in Immediate are implied to have Essential rank.

All tasks delivered from this stage are reviewed by the Team at the end of each delivery cycle using [postmortem routine](routines.md#postmortem).

*Allowed task statuses:* all task statuses are allowed.

## Now

All tasks to be worked on in the current delivery cycle. Tasks can be promoted in and out of Now at any given time, even when delivery cycle has already been started, provided said tasks are Pending or Waiting. You should however aim to minimize such cases - swapping priorities mid run is disruptive and delivery cycles in Clarity should be short enough to allow a high level of agility and direction change without sacrificing sanity of the team. You should never promote tasks currently In progress and being worked on by Team members. This is highly disruptive and should be a last resort option.

*Allowed task statuses:* all task statuses are allowed.

## Next

All tasks prioritized and scheduled to be worked on in the next delivery cycle. At the end of current Now cycle tasks from Next are promoted to Now.

Next should be kept at an approximate size of one delivery cycle. If there are insufficient amount of tasks in Next to fill a delivery cycle, tasks from Later are promoted to Next taking into the consideration the priorities in Later.

*Allowed task statuses:* Pending, Waiting.

## Later

Later stage serves as a general work backlog. All tasks not prioritized for work Now, Immediately or Next are placed in this stage.

Care should be taken to keep Later prioritized at all times. Items with highest priority in Later should serve as future Next stage tasks.

*Allowed task statuses:* Pending, Waiting.

## Stage sizing and management

Now and Next stages should contain no more than what Team is able to deliver within one delivery cycle - each.

New should be continuously triaged - either by passing the task to Review or other stages, or by discarding the task.

Review stage should be continuously reviewed and triaged to other stages - Now, Next or Later - no less often than once per delivery cycle.

Later stage is permissible to grow to infinite size, but care should be taken to maintain Later prioritized and tasks should be reviewed once in a while to ensure there are no obsolete tasks and tasks that are no longer required.
