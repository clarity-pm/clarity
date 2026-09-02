---
title: Task stages
sidebar_label: Task stages
---

All backlog tasks are separated into stages. The task stage serves to indicate the overall status
of [scheduling and priority](prioritization.md) for a collection of tasks.

The process of moving tasks between stages is called Stage Promotion - or simply, Promotion.

Task stages also define recommended task statuses for each Stage. These combinations describe the normal workflow but
are not hard transition constraints. Teams may move tasks between active Stages and use another Status when circumstances
require it. Delivered is the only final Status, and tasks with Delivered or Discarded Status automatically enter Closed.

Clarity defines seven task stages.

## New

All new tasks are created in stage New. This stage serves as an unread inbox for the Team - meaning the tasks in this stage
have not been viewed by the Team leader or Team.

Tasks from New are promoted to any other active Stage, and it is generally the responsibility of the Team leader to
promote them.

*Recommended task statuses:* Pending

## Review

Review stage serves as a clarification stage for all **new** tasks. All tasks received in New that were reviewed by the Team
leader should enter this stage IF further clarification is required to determine the value, validity and priority of the
task.

Tasks where value, validity and priority can be determined outright can bypass this stage and be promoted directly to
any other active Stage.

*Recommended task statuses:* Pending

**Important:** Before a task leaves Review, its definition should be as complete as circumstances allow. Teams should aim
to provide a clear [objective](tasks.md#task-objective), [implementation notes](tasks.md#implementation-notes),
[checklist](tasks.md#task-checklist), [acceptance criteria](tasks.md#task-acceptance-criteria), and
[estimation](tasks.md#task-estimation) whenever each item is relevant and the required information is available.

The Team or organization decides whether a definition is sufficiently complete. An item that is not applicable or cannot
reasonably be determined does not prevent promotion out of Review.

## Immediate

Tasks to be worked on immediately, disregarding all other work, should be placed in this stage.

A task promoted to this stage serves as a signal to the Team to immediately reassign all available resources to deal
with the tasks in Immediate regardless of any other priorities.

Promotions to this stage should be **exceptional events** and be reserved for emergencies only. It is always the goal of
the Team to have no tasks in Immediate as soon as possible. Whenever a task enters Immediate, the Team should be notified,
and members able to resolve the issue must stop other work to address it.

The Team remains focused on Immediate until every task in the Stage is Closed or explicitly moved to another active Stage.
Waiting and Blocked tasks remain Immediate, and the Team works to remove the dependency or blocker preventing progress.
This may require completely stopping all work on tasks in Now.

If for any particular task such an emergency response feels unjustified, it most likely is - tasks with a very high
priority but not warranting undivided attention of the Team should be promoted to Next - not Immediate.

It is also implied that all tasks in Immediate are the highest priority for the purpose of scheduling. When using
prioritization by [rank](prioritization.md#prioritization-using-rank), all tasks in Immediate are implied to have Essential
rank.

Every task that touches Immediate during a delivery cycle is reviewed by the Team at the end of that cycle using the
[postmortem routine](routines.md#postmortem). A task touches Immediate if it is created in, moved into, or worked on while
in Immediate, even if it later moves to another Stage or Closed.

*Recommended task statuses:* Pending, Impeded, Waiting, Blocked, In progress, Landed.

## Now

All tasks to be worked on in the current delivery cycle. Tasks may be promoted in and out of Now at any given time, even
after the delivery cycle has started. Prefer moving tasks that are Pending or Waiting, and aim to minimize such cases -
swapping priorities mid-run is disruptive, and delivery cycles in Clarity should be short enough to allow direction
changes without sacrificing the sanity of the Team. Moving and re-prioritizing tasks that are In progress is highly
disruptive and should be a last-resort option.

*Recommended task statuses:* Pending, Impeded, Waiting, Blocked, In progress, Landed.

## Next

All tasks prioritized and scheduled to be worked on in the next delivery cycle. At the end of the current Now cycle, tasks
from Next are promoted to Now.

Next should be kept at an approximate size of one delivery cycle. If there is an insufficient number of tasks in Next to
fill a delivery cycle, tasks from Later are promoted to Next taking into consideration the priorities in Later.

*Recommended task statuses:* Pending, Waiting.

## Later

Later stage serves as a general work backlog. All tasks not prioritized for work Now, Immediate, or Next are placed in
this stage.

Care should be taken to keep Later prioritized at all times. The items with the highest priority in Later should serve as
the future Next-stage tasks.

*Recommended task statuses:* Pending, Waiting.

## Closed

Closed is the terminal Stage for tasks with Delivered or Discarded Status. A task automatically enters Closed when it
transitions to either Status and is removed from active Backlog Stage views.

Delivered tasks cannot leave Closed. A Discarded task may be reopened under the normal Status transition rules, but the
reopening operation must also move it from Closed to an active Stage. Clarity does not prescribe which active Stage must
be selected.

Systems should preserve the task's previous active Stage and delivery-cycle history for reporting and retrospectives.

*Permitted task statuses:* Delivered, Discarded.

## Stage sizing and management

The active Now and Next Stages should each contain no more than a Team can deliver within one delivery cycle.

New should be continuously triaged - either by passing the task to Review or other active Stages, or by discarding the
task.

Tasks in Review should be continuously reviewed and triaged to other active Stages - Now, Next or Later - no less often
than once per delivery cycle.

Later stage is permissible to grow to an infinite size, but care should be taken to keep Later prioritized, and tasks
should be reviewed once in a while to ensure there are no obsolete tasks and no tasks that are no longer required.

## Managing capacity and ever-growing Later

It is very important to keep the size of the stage "Later" balanced against the work capacity of the Team assigned to a
particular backlog. Although you may have a Later stage of infinite size, having such a stage is not at all advisable -
large backlogs require a lot of investment to keep them maintained, especially from the Team leader.

Clarity defines three approaches to dealing with ever-growing Later - limiting Later size, age discard and
rebalancing.

Limiting Later size is simple - you need to define a maximum Later size you want to keep at all times and you discard
tasks with low priority that overflow the defined maximum size. Each subsequent incoming task added to the Later stage
requires a task with the lowest priority in the Later stage to be discarded to keep the Later within the established size.
Limiting backlog by size requires you to use Estimations - meaning, we bind the maximum Later size to the sum of all
estimates in the stage.

Age discard is a similar process - tasks with no update for a period T are manually or automatically discarded to make
room for new tasks. This approach is less drastic than limiting size by estimations, but will still help reduce the size of
Later and subsequently reduce the maintenance cost for the whole backlog.

Though both approaches might sound drastic at first, given reasonably large limits it is almost always guaranteed that
tasks discarded because of the above would never be worked on anyway. For example, limiting Later size to 50 work
cycles, one week each, would cause a queue of work nearly one year long. Provided that work is consistently created
(extra work added), unless there is a drastic change in priorities, it is very unlikely anything at the very end of Later
will get done within a reasonable timeframe.

We can also implement both as “soft limits”, meaning that any task falling out of the defined bounds would trigger a review
instead of a discard.

The third approach, rebalancing, does not require any tasks to be discarded. Instead, backlog size is reduced by moving
Tasks and Goals to another existing or new Backlog. This also happens when a Backlog is naturally split to increase
capacity and delivery rate. This, however, requires an increase in organizational capacity and delivery rate.
