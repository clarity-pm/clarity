---
title: Bird's-eye view
sidebar_label: Bird's-eye view
---

We split all work in Clarity into small chunks of work called [Tasks](concepts/tasks.md). All tasks belong to
a [Backlog](concepts/backlog.md) - a logical collection of work for a single [Team](concepts/team.md). A Team
comprises a [Team leader](concepts/team.md#team-leader) - a person responsible for management of the Backlog and Team
members - people implementing tasks.

Each task has optional business [Priority](concepts/prioritization.md) ensuring implementation order - there are two
predefined ways to prioritize tasks in Clarity - using a high-level prioritization technique
called [Rank](concepts/prioritization.md#prioritization-using-rank) and a low-level prioritization model
called [CaPRICE](concepts/prioritization.md#prioritization-using-caprice). All tasks are also explicitly prioritized
using [Stages](./concepts/task-stage.md).

Each task has a [Status](concepts/tasks.md#task-status) and [Stage](concepts/task-stage.md). Status shows the current
lifecycle stage of a task - whether it is in progress, waiting to be worked on, or similar. Stage shows the current
planning, preparedness, and scheduling priority of a task. The Stage is selected from underlying business priority and
indicates whether the task should be worked on now and whether it is ready. Stage communicates the priority decision but
is not itself the source of business priority.

We organize work using iterative [Delivery cycles](concepts/delivery-cycle.md). A Delivery cycle is both a dated planning
interval and the set of tasks planned for that interval. The relative cycles Now and Next are represented by task Stages
with the same names: [Now](concepts/task-stage.md#now) is the current planned cycle, and
[Next](concepts/task-stage.md#next) is the following planned cycle.

We can organize tasks using [Goals](concepts/work-organization.md#goal) - goals are specific to a single Backlog and Team
and group tasks under the same logical business goal.

We can organize Goals using [Objectives](concepts/work-organization.md#objective). An Objective is a high-level business
milestone that groups many Goals. We can share Objectives between multiple Teams and Backlogs.

We can organize multiple related Objectives together using [Visions](concepts/work-organization.md#vision). A Vision is
a group of Objectives to fulfill a general business vision and direction. Visions are organization-wide.

Using Goals, Objectives and Visions is optional but recommended.

Clarity facilitates continuous improvement at all levels of the organization. We do this
using [Retrospectives](concepts/routines.md#retrospective-routines) and [Reviews](concepts/routines.md#review-routines).
