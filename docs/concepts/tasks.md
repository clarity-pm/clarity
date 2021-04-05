---
title: Tasks
sidebar_label: Tasks
---

## What is a task?

Task is the smallest possible work unit in Clarity. It is a completable unit of work which produces deliverable outcome on completion. Tasks are always limited to be assigned to and to be worked on by at most one Team member at any given time. All tasks belong to a single [backlog](backlog.md) and can be further organized using various [business objectives](work-organization.md).

Tasks should be organized and sized so that they can be delivered by a single Team member. Objectives that require expertise or work effort from more than one member must be split in several tasks working toward a common [goal](work-organization.md#goal).

Tasks should be deliverable within at most two delivery cycles, ideally less than one delivery cycle. Larger tasks should be split in smaller chunks.

As a general rule, task details are subdivided in three distinct perspectives - business, implementation and common.

Business perspective is what the task defines in terms of business requirements and business needs.

Implementation perspective defines implementation semantics and technical details.

Clarity draws clear distinction between the two since it is very well possible that stakeholder who requests the task has no domain knowledge about the technical details of the implementation - how the task is actually accomplished.

Common perspective contains all the information and status related to both implementation and business - think of it as shared details that both business and implementation domain should understand.

Depending on the origin of the task it is perfectly fine to forego either one of the perspectives. For example, technical maintenance tasks for industry might forego task objective when having it might be superfluous and simply a duplicate of implementation perspective, or the other way around - business perspective might imply everything needed for implementation. You should generally avoid information duplication in the task and only fill out what's relevant and necessary.

## Business perspective

### Task objective

Task objective is a concise description of what is the desired outcome of a task. It should be detailed enough so that it is clear what needs to be done for the task to be considered complete and delivered.

Task objective, at the very least, should contain following:

- **Who** - who asked for this task? Who benefits?
- **Why** - why should this task be be done? Why is it a priority?
- **What** - what needs to be done?
- **How** - how can this task be done?

You can use natural language User story format to define tasks when applicable.

Task objective is used to define "business" requirements. Any technical details, if any belong in [Implementation notes](#implementation-notes). Avoid mixing both together.

**Important** Tasks without a clear and well-defined objective should never be scheduled for work.

**Important** Always aim to include a detailed justification for the task. It serves to understand the causes for the task to exist and will help to determine validity of the task later to prevent ambiguous and stale tasks when the backlog grows. It also greatly helps when prioritizing tasks.

**Important** One task should ever only specify one real objective or deliverable. Avoid creating tasks that have more than one objective and lists of vaguely related requirements - doing so is confusing and adds opportunity for errors to happen.

#### Example objective

The example provided here demonstrates how to define task objective with all the necessary business requirements and details for a task to be implemented.

> As logistics manager, I need the delivery management system to send a reminder to customers a day before their package is out for scheduled delivery.
>
> This should be done to reduce the possibility that the customer is absent and unable to receive their package (leading to customer dissatisfaction) and to reduce waste of resources in the logistics department.
>
> The notification should be sent as SMS to the customers mobile phone number.

We can easily extract all the necessary details from the task, as for this example: who - logistics manager, why - reduce waste and customer dissatisfaction, what - an automated notification to the customer, how - by sending an early SMS reminder to the customer.

### Task acceptance criteria

Optionally, each task can have a list of acceptance criteria - for task to be considered complete, all the listed criteria must be fulfilled.

Criteria is different to checklist - checklist is used to collect and organize work to be done whereas acceptance criteria lists business objectives to be complete for a task to be considered done and complete. Acceptance criteria must not include technical semantics - the "how".

## Implementation perspective

### Implementation notes

While Task objective is meant to gather "business requirements", implementation notes are meant to describe how the Task objective should be achieved implementation-wise, including technical specifics, if any.

Depending on what the work is and how the work is organized, implementation notes are optional. Sometimes implementation notes are superfluous since Task objective can already provide all the details required for task to be successfully delivered.

The main distinction comes when the source of the requirement and expertise of implementation is considered. For example, a task objective could be defined by business, customer or stakeholder without technical expertise to how the actual work should be performed. In this scenario, implementation notes are defined by a team as a whole or by a team member having sufficient domain knowledge about how the work should actually be performed.

It is important to maintain a clear distinction between objective and actual implementation since doing so does not require the original stakeholder to keep up to date with the actual technical details - only the objective itself.

### Task checklist

Optionally, each task can have a list of smaller units of work - a list of steps or changes to be completed. It serves to list steps to be fulfilled to consider the task complete - the "what". Task checklist is meant to contain implementation specific items. For business objectives use acceptance criteria.

## Common perspective

### Task estimation

Clarity allows for optional task size estimation be incorporated in the workflow. If used, task size estimations should be done either during review or asynchronously by gathering input from the team.

Clarity recommends using time as size estimation indicator for tasks. It is the easiest estimation metric to use and is naturally familiar to everyone.

You can substitute time estimations with other methods - Clarity does not enforce use of time for estimations.

It is important to remember that estimations are just that - estimations. Never consider estimations as hard delivery deadlines.

**Important** Tasks should never be estimated without gathering input from the Team - ideally, tasks should be estimated by the Team. What might take 3 hours to deliver a task for one person, might take 5 for another. Aim for pessimistic forecasts when estimating tasks.

### Task status

Each task in Backlog has a status. Status indicates the current state of a task. At any given time a task can have only one status.

The process of changing status of a task is called Task Transition, or simply - Transition.

Task status affects the visibility of a task in backlog. Tasks that are *delivered* or *discarded* should no longer be shown in the backlog.

- **Pending:** not being worked on, will be worked on once scheduled and there is capacity.

- **Impeded:** task with ongoing progress and unforeseen impediment that might affect delivery of the task. Impeded task is considered in progress, but *might* experience a delay in delivery.

- **Waiting:** task is blocked by internal or external dependency (other task, stakeholder, resources, implicit and explicit needs within the team). Task will proceed as scheduled once external dependency is resolved.

- **Blocked:** task is blocked by a *unforeseen blocker* and cannot be worked on without interference from stakeholders, Team leader or other stakeholders.

- **In progress:** task is being worked on and is proceeding as planned.

- **Landed:** all requirements have been implemented and task has been effectively delivered, pending stakeholder review and approval.

- **Delivered:** task is complete and delivered to stakeholder. Stakeholder has accepted the deliverables of the task and the task is considered complete. Tasks can only transition to Delivered, but not from Delivered to any other status. Delivered tasks are considered immutable and any adjustments to the subject of said task should warrant a new task.

- **Discarded:** task is invalid, can not and will not be able to be delivered - ex. requirements or scope changed that renders the task not necessary, invalid task, duplicate requirement. Once discarded, tasks should generally remain discarded.

#### Ownership requirements for tasks with status

Tasks with status **Impeded**, **Waiting** and **Blocked** must have concrete ownership - e.g. the task must be assigned to individual who is then responsible for dealing with the issue and transitioning of the task to another status once impediment has been removed. Tasks in this status must never be owner-less!

Tasks with status **In progress** must be assigned to the individual performing the task. Tasks with status **Landed** and **Delivered** must be assigned to stakeholders able to review or accept the tasks.

#### Meta-statuses and lifecycle of the task production

A common approach when managing task statuses, especially when dealing with tasks producing concrete deliverables, is to use statuses as indicators of the meta-life cycle of the task, or an action needed to be performed for the task to be transitioned further in the life-cycle - for example, having separate statuses for production and quality assurance stages of the task.

In Clarity, we consider this to be an anti-pattern, because the current needs or meta-state has no impact on the actual deliverability status of the task.

Taking software development as an example, tasks where one could imagine having a separate status for Quality Assurance, internal testing, code reviews, etc - all belong in **In progress** status, unless capacity constraints or specialization constraints - in which case the task belongs in **Waiting**.

When necessary, "Needs" indicator of the task is used to clearly convey the most immediate required action for the task to be able to transition.

#### Visualizing current status of a task

Tasks with different statuses should be easily distinguishable in backlog.

Clarity recommends use of a 5-aspect "traffic light" as current status indicator, in addition to textual display of the current status.

* **Pending** - blue light.
* **Impeded**- yellow light.
* **Blocked** and **Waiting** - red light.
* **In progress** - green light.
* **Landed** - purple light.

## Needs indicator

Needs indicator, or “Needs”, is an optional meta-state indicator of a task that clearly defines and illustrates the most immediate required action or requirement for the task to transition out of its current status.

Normally, needs should be set whenever the requirement is not already implied by the status of the task - such as Landed - where the task and its deliverables needs stakeholder review - however, this is simply a recommendation and teams are free to apply needs to tasks as they see fit.

Specific needs of a task depend on the business domain - for example, for software development teams we could define the needs as “Needs development”, “Needs quality assurance”, “Needs code review” etc.

At any given time, there should be only one immediate need per task, or no need at all.

Each team should be free to define their own internal individual needs, and needs are managed by the team itself.

## Recurring tasks

In Clarity, recurring tasks follow the same scheduling, prioritization and organization rules as any non-recurring task would.

Scheduled and recurring tasks should be created one delivery cycle ahead of when the work on the task is expected to start and be prioritized relative to all other tasks in the given stage.

The act of scheduling should not imply a priority of a task - meaning task should not be considered a higher priority than others simply because it is scheduled and recurring. Scheduled and recurring tasks should be prioritized according to their value.

**Important** Routines, meetings and similar administrative work items are not considered tasks. They do not belong in the backlog. For capacity planning, these items are considered administrative overhead and should be accounted for as such.
