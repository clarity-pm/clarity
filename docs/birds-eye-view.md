---
title: Bird's-eye view
sidebar_label: Bird's-eye view
---

We split all work in Clarity in small chunks of work called [Tasks](concepts/tasks.md). All tasks belong to
a [Backlog](concepts/backlog.md) - a logical collection of work for a single [Team](concepts/team.md). Team
comprises [Team leader](concepts/team.md#team-leader) - person responsible for management of the Backlog and Team
members - people implementing tasks.

Each task has optional business [Priority](concepts/prioritization.md) ensuring implementation order - there are two
predefined ways to prioritize tasks in Clarity - using a high level prioritization technique
called [Rank](concepts/prioritization.md#prioritization-using-rank) and a low level prioritization model
called [CaPRICE](concepts/prioritization.md#prioritization-using-caprice). All tasks are also explicitly prioritized
using [Stages](./concepts/task-stage.md).

Each task has a [Status](concepts/tasks.md#task-status) and [Stage](concepts/task-stage.md). Status shows the current
life-cycle stage of a task - is it in progress, is it waiting to be worked on and similar. Stage shows the current
planning, preparedness status and absolute priority of a task - should it be worked on now, is it ready to be worked on
and similar.

We organize all work in progress using iterative [Delivery cycles](concepts/delivery-cycle.md). Delivery cycle is a
brief period of time Team works to complete a set of tasks. Delivery cycles help split projects in manageable iterations
of work. There are always two pre-defined Delivery cycles that are defined using special task Stages

- [Now](concepts/task-stage.md#now) and [Next](concepts/task-stage.md#next).

We can organize tasks using [Goals](concepts/work-organization.md#goal) - goals are specific to single Backlog and Team
and group tasks under same logical business goal.

We can organize Goals using [Objectives](concepts/work-organization.md#objective). An Objective is a high level business
milestone that groups many Goals. We can share Objectives between multiple Teams and Backlogs.

We can organize multiple related Objectives together using [Visions](concepts/work-organization.md#vision). A Vision is
a group of Objectives to fulfill a general business vision and direction. Visions are organization-wide.

Using Goals, Objectives and Visions is optional but recommended.

Clarity facilitates continuous improvement at all levels of the organization. We do this
using [Retrospectives](concepts/routines.md#retrospective-routines) and [Reviews](concepts/routines.md#review-routines).
