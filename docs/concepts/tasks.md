---
title: Tasks
sidebar_label: Tasks
---

## What is a task?

A Task is the smallest possible work unit in Clarity. It is a completable unit of work which produces a deliverable outcome
on completion. Tasks are always limited to being assigned to and worked on by at most one Team member at any given
time. All tasks belong to a single [backlog](backlog.md) and can be further organized using
various [business objectives](work-organization.md).

Tasks should be organized and sized so that they can be delivered by a single Team member. Objectives that require
expertise or work effort from more than one member must be split into several tasks working toward a
common [goal](work-organization.md#goal).

Tasks should be deliverable within at most two delivery cycles, ideally within one delivery cycle. Larger tasks
should be split into smaller chunks.

As a general rule, task details are subdivided into three distinct perspectives - business, implementation and common.

The business perspective is what the task defines in terms of business requirements and business needs.

The implementation perspective defines implementation semantics and technical details.

Clarity draws a clear distinction between the two since it is very well possible that the stakeholder who requests the task
has no domain knowledge about the technical details of the implementation - how the task is actually accomplished.

The common perspective contains all the information and status related to both implementation and business - think of it as
shared details that both business and implementation domains should understand.

Depending on the origin of the task it is perfectly fine to forego either one of the perspectives. For example,
technical maintenance tasks for industry might forego a task objective when having it might be superfluous and simply a
duplicate of the implementation perspective, or the other way around - business perspective might imply everything needed
for implementation. You should generally avoid information duplication in the task and only fill out what is relevant and
necessary.

## Business perspective

### Task objective

A task objective is a concise description of the desired outcome of a task. It should be detailed enough so that
it is clear what needs to be done for the task to be considered complete and delivered.

Task objective, at the very least, should contain the following:

- **Who** - who asked for this task? Who benefits?
- **Why** - why should this task be done? Why is it a priority?
- **What** - what needs to be done?
- **How** - how can this task be done?

The **How** in a Task objective is a business-level outcome, channel, or constraint. For example, the business may require
that users be notified by email. It should describe what stakeholders require without prescribing the technical mechanism.

The technical **How** belongs in [Implementation notes](#implementation-notes). For the email example, Implementation
notes could specify that the message will be sent through an SMTP service. Both perspectives may contain a How, but at
different levels of detail and for different audiences.

You can use the natural-language User Story format to define tasks when applicable.

Task objective is used to define business requirements, including any required business-level How. Technical mechanisms
belong in [Implementation notes](#implementation-notes). Avoid mixing the two levels of detail.

**Important:** Tasks without a clear and well-defined objective should never be scheduled for work.

**Important:** Always aim to include a detailed justification for the task. It helps explain why the task exists and
determine its validity later, preventing ambiguous and stale tasks as the backlog grows. It also greatly helps when
prioritizing tasks.

**Important:** One task should only ever specify one real objective or deliverable. Avoid creating tasks that have more
than one objective and lists of vaguely related requirements - doing so is confusing and adds opportunity for errors to
happen.

#### Example objective

The example provided here demonstrates how to define a task objective with all the necessary business requirements and
details for a task to be implemented.

> As logistics manager, I need the delivery management system to send a reminder to customers a day before their package is out for scheduled delivery.
>
> This should be done to reduce the possibility that the customer is absent and unable to receive their package (leading to customer dissatisfaction) and to reduce waste of resources in the logistics department.
>
> The notification should be sent as SMS to the customer's mobile phone number.

In this example, SMS is a business-level How because it specifies the required customer communication channel. An
Implementation note could separately define the technical How, such as sending the message through the organization's
configured SMS gateway API.

We can easily extract all the necessary details from the task in this example: who - logistics manager, why -
reduce waste and customer dissatisfaction, what - an automated notification to the customer, how - by sending an early
SMS reminder to the customer.

### Task acceptance criteria

Optionally, each task can have a list of acceptance criteria - for a task to be considered complete, all the listed
criteria must be fulfilled.

Criteria are different from a checklist - a checklist is used to collect and organize work to be done whereas acceptance
criteria list business objectives that must be met for a task to be considered done and complete. Acceptance criteria
must not prescribe technical implementation mechanisms. They may include a business-mandated channel or constraint when
that constraint is part of the expected outcome.

## Implementation perspective

### Implementation notes

While the Task objective is meant to gather "business requirements", implementation notes are meant to describe how the Task
objective should be achieved implementation-wise, including technical specifics, if any.

Depending on what the work is and how the work is organized, implementation notes are optional. Sometimes implementation
notes are superfluous since Task objective can already provide all the details required for the task to be successfully
delivered.

The main distinction comes when the source of the requirement and expertise of implementation is considered. For
example, a task objective could be defined by the business, a customer, or a stakeholder without technical expertise in how the
actual work should be performed. In this scenario, implementation notes are defined by the Team as a whole or by a team
member having sufficient domain knowledge about how the work should actually be performed.

It is important to maintain a clear distinction between objective and actual implementation since doing so does not
require the original stakeholder to keep up to date with the actual technical details - only the objective itself.

### Task checklist

Optionally, each task can have a list of smaller units of work - a list of steps or changes to be completed. It lists
steps to be fulfilled to consider the task complete - the "what". Task checklist is meant to contain
implementation-specific items. For business objectives, use acceptance criteria.

## Common perspective

### Task estimation

Clarity allows optional task-size estimation to be incorporated in the workflow. If used, task size estimations should
be done either during review or asynchronously by gathering input from the team.

Clarity recommends using time as a task-size estimation indicator. It is the easiest estimation metric to use and is
naturally familiar to everyone.

You can substitute time estimations with other methods - Clarity does not enforce the use of time for estimations.

It is important to remember that estimations are just that - estimations. Never consider estimations as hard delivery
deadlines.

**Important:** Tasks should never be estimated without gathering input from the Team - ideally, tasks should be estimated
by the Team. A task that might take one person 3 hours to deliver might take another person 5. Aim for pessimistic
forecasts when estimating tasks.

### Task status

Each task in a Backlog has a status. Status indicates the current state of a task. At any given time, a task can have only
one status.

The process of changing the status of a task is called a Task Transition, or simply a Transition.

Tasks with Delivered or Discarded Status automatically enter the [Closed Stage](task-stage.md#closed) and no longer appear
in active Backlog Stage views.

- **Pending:** not being worked on, will be worked on once scheduled and there is capacity.

- **Impeded:** task with ongoing progress and unforeseen impediment that might affect delivery of the task. An impeded task
  is considered in progress, but *might* experience a delay in delivery.

- **Waiting:** task is blocked by internal or external dependency (other task, stakeholder, resources, implicit and
  explicit needs within the team). Task will proceed as scheduled once external dependency is resolved.

- **Blocked:** task is blocked by an *unforeseen blocker* and cannot be worked on without interference from the Team leader
  or other stakeholders.

- **In progress:** task is being worked on and is proceeding as planned.

- **Landed:** all requirements have been implemented and task has been effectively delivered, pending stakeholder review
  and approval.

- **Delivered:** task is complete and delivered to the stakeholder. Stakeholder has accepted the deliverables of the task
  and the task is considered complete. Tasks can transition to Delivered but cannot transition from Delivered to any other
  status. Delivered tasks are considered immutable and any adjustments to the subject of said task should warrant a new
  task.

- **Discarded:** task is invalid, cannot and will not be able to be delivered - e.g., requirements or scope changes that
  render the task unnecessary, an invalid task, or a duplicate requirement. Once discarded, tasks should generally remain
  discarded. Reopening a Discarded task requires moving it from Closed to an active Stage in the same operation.

#### Ownership requirements for tasks with status

Tasks with status **Impeded**, **Waiting** and **Blocked** must have concrete ownership - e.g., the task must be assigned
to an individual who is then responsible for dealing with the issue and transitioning the task to another status once the
impediment has been removed. Tasks with these statuses must never be ownerless!

Tasks with status **In progress** must be assigned to the individual performing the task. Tasks with status **Landed**
and **Delivered** must be assigned to stakeholders able to review or accept the tasks.

#### Meta-statuses and lifecycle of task production

A common approach when managing task statuses, especially when dealing with tasks producing concrete deliverables, is to
use statuses as indicators of the meta-lifecycle of the task, or an action needed to be performed for the task to be
transitioned further in the lifecycle - for example, having separate statuses for production and quality assurance
stages of the task.

In Clarity, we consider this to be an anti-pattern, because the current needs or meta-state has no impact on the actual
deliverability status of the task.

Taking software development as an example, tasks where one could imagine having a separate status for Quality Assurance,
internal testing, code reviews, etc - all belong in **In progress** status, unless there are capacity constraints or
specialization constraints - in which case the task belongs in **Waiting**.

When necessary, a "Needs" indicator of the task is used to clearly convey the most immediate required action for the task
to be able to transition.

#### Visualizing current status of a task

Tasks with different statuses should be easily distinguishable in the backlog.

Clarity recommends the use of a 5-aspect "traffic light" as a current status indicator, in addition to textual display of
the current status.

* **Pending** - blue light.
* **Impeded** - yellow light.
* **Blocked** and **Waiting** - red light.
* **In progress** - green light.
* **Landed** - purple light.

## Needs indicator

The Needs indicator, or “Needs”, is an optional meta-state indicator of a task that clearly defines and illustrates the
most immediate required action or requirement for the task to transition out of its current status.

Normally, Needs should be set when the requirement is not already implied by the task's Status. For example, an In progress
task might have `Needs external approval` when work can continue only after a specific outside approval is received.

Specific needs of a task depend on the business domain - for example, for software development teams we could define the
needs as “Needs development”, “Needs quality assurance”, “Needs code review”, etc.

At any given time, there should be only one immediate need per task, or no need at all.

Each team should be free to define their own internal needs, and needs are managed by the team itself.

## Recurring tasks

In Clarity, recurring tasks follow the same scheduling, prioritization and organization rules as any non-recurring task.

Scheduled and recurring tasks should be created one delivery cycle before work on the task is expected to
start and be prioritized relative to all other tasks in the given stage.

The act of scheduling should not imply the priority of a task - meaning that a task should not be considered a higher
priority than others simply because it is scheduled and recurring. Scheduled and recurring tasks should be prioritized according
to their value.

**Important:** Routines, meetings and similar administrative work items are not considered tasks. They do not belong in
the backlog. For capacity planning, these items are considered administrative overhead and should be accounted for as
such.
