---
title: Prioritization
sidebar_label: Prioritization
---

## Stages, prioritization and time

The very foundation of prioritization and scheduling in Clarity is a [task stage](task-stage.md). Stages serve as the
primary indicator of priority for all tasks in the backlog. All other prioritization methods serve only as input towards
determining what stage a task should have and where should the task be placed within a stage.

Clarity is designed this way because of two reasons - as a general rule, prioritization in time comes naturally to
everyone; and priority of work items always tend to increase as time passes and delivery deadlines approach.

We understand the first reason to be true because everyone has a natural ability to prioritize impending work in time
based on our environment and constraints around us. The most obvious example of this ability of prioritization is the
necessity to consume food - we all know that after a long day we will be hungry, so we naturally prioritize preparing
food at the end of the day to deal with that particular situation. We also know that we will need to sleep, so we
naturally prioritize tasks to be completed before we are tired and need to sleep.

Clarity is designed in a way to first and foremost capitalize on this natural ability to prioritize our work and world
around us. We understand that given enough contextual information, it is much easier for people to prioritize in time
than using abstract constructs that could include non-time indicators of priority.

This is the main reason why Clarity backlogs are divided into stages since stages not only serve to compartmentalize
work but also serve as an indicator of priority of work in time. All other prioritization methods here are secondary and
serve mostly as input to prioritization in time, that is, to fulfill the requirement of having enough context about the
tasks. For example, although Rank (explained below) is used as a global priority indicator, it serves to organize
backlogs which are in turn further organized in stages. It might seem that Rank is the primary method of prioritization,
but it is not - it is simply an input indicator to determine where in the backlog the task should be and what stage the
task should have, given the capacity of each stage.

The second reason why Clarity places significant emphasis on prioritization in time is the naturally increasing priority
of work as time passes. This is easily illustrated using the same examples we used to illustrate the ability to
prioritize in time - since we know we need to consume food to survive, the longer we remain without consuming food, the
higher priority it will become because our need for to eat will only increase over time. The same applies to sleep - the
longer we remain awake, the greater the need for sleep will become.

Clarity uses this same principle for work organization - a Backlog is just a sliding queue of work - tasks are
continuously added, and are removed from the backlog, highest priority first. Therefore, as tasks with high priority
today are removed from the backlog, future tasks with lower priority than they have today will increase in priority as
time goes by, and the necessity to deliver said tasks also increase. This works this way because, as shown before, we
prioritize best using time as a construct to prioritize, and as time passes, the work we scheduled for the future will
naturally increase in priority as time goes by.

## Prioritizing

Besides stages, several prioritization methodologies can be used to prioritize tasks. You can choose one best suited to
the needs of your work environment or you can use either one of two standard methodologies defined by Clarity - a
high-level methodology called Rank and a low-level methodology called CaPRICE.

Rank is a high level priority usually defined by Team leader based on input of the Stakeholders and direct know-how.
This is the recommended approach to be used when dealing with product backlogs sized below 5-10 thousand tasks.

A relatively large projects should use CaPRICE. This methodology comes at a cost of overhead and is only worth it for
relatively large project backlogs - more than 5-10 thousand tasks.

In Clarity, all ranking is scoped to Backlog - current stage and other states a task might have has no bearing on what
is the priority of a task. The opposite is in fact true - task overall priorities have impact on what stage the task
belongs to provided Rank or CaPRICE is used. A goal each task belongs to can also have implicit impact on the priority
of the task. Absolute priority of a task and task placement within a stage is derived from this priority.

The recommended method for prioritization in Clarity is Rank - it is suitable to all but very large projects.

It is also perfectly fine to use another prioritization methodologies not defined by Clarity explicitly, or no
prioritization methodology at all since [Stages](task-stage.md) already serve as means of prioritization - simply
schedule all incoming tasks from New to Now, Next and Later stages. When doing so you should still do your best to keep
tasks naturally sorted and organized by implied value each task has, for example, by using bubble-sort.

## Scheduling tasks by priority

All tasks in Clarity are scheduled by priority and all delivery should follow highest-priority first. Some other
methodologies prescribe work cycles to have a mix of high value and low value items, supposedly to ensure even lower
priority items are delivered at some point. This is considered an anti-pattern in Clarity and delivery capacity should
always focus on the highest priority items first and foremost. Priority of tasks is to be reviewed periodically and
adjusted to emerging requirements and objectives. Age of a task has no bearing on priority either.

## Prioritization using Rank

Rank is a high level priority indicator of a task relative to all other tasks defined in the backlog. As a general rule,
ranking is the responsibility of a Team leader, but can be delegated to other role in Team. Doing so however is not
recommended as Team leader should be The Source of Truth.

Ranking prioritizes all tasks in five distinct categories called Ranks. Ranks are aligned to the implied value of each
task - how much value a delivery of a task will bring to achieve a [Goal](work-organization.md#goal)
, [Objective](work-organization.md#objective) and [Vision](work-organization.md#vision)? What kind of impact a delivery
of a task will have to the customers, end users, stakeholders? Ranking helps to indicate a high level estimate of how
valuable is a task and use the rank to prioritize tasks one against another.

Ranking is indicative - for implementations, no technical limitations should be set against being able to sort tasks in
Stage within the same Rank and between different ranks.

Clarity defines five different ranks.

### Essential

Must have, will lead to loss of business and dissatisfaction among users if not delivered.

### Valuable

A highly beneficial task that would significantly improve the product and user satisfaction

### Beneficial

A nice to have improvement - would not lead to dissatisfaction if not delivered, but would result in some satisfaction
if delivered.

### Neutral

Task that has no significant benefit to the product as such - "house cleaning".

### Unknown

Task is not prioritized at all. This rank is not allowed outside of New, Review and Discarded stages.

## Prioritization using CaPRICE

CaPRICE prioritization methodology can be used to organize and manage priorities in very large backlogs.

CaPRICE defines 5 or 6 different components, depending on the preference and application of the methodology.

These components are Category, Penalty, Reach, Impact, Confidence and Effort. Each component provides a list of possible
values to choose from, with each possible value granting a score. Score of each component is used to determine priority
using formula defined below.

CaPRICE score is formed from two parts - a high level Category; and PRICE components - Penalty, Reach, Impact,
Confidence and Effort.

Category is a special component and is used to form a high level priority between all tasks in the backlog - it forms
an "executive" priority. Using Category is optional. If what you want is absolute priority of all tasks in Backlog,
simply use PRICE without Category component.

When used for prioritizing, tasks of one category cannot be prioritized outside the category regardless the values of
other components.

For example, Beneficial tasks can not mix with Essential tasks regardless of values chosen for remaining PRICE
components. In essence, Category provides a way to manage high level goals within the backlog.

Possible components:

- Category: A high level abstract priority of the task. By default uses the same values and concept as Rank.
- Penalty: a implied penalty if the given task would not be delivered.
- Reach: a level of reach this task would have relative to the user base or target audience.
- Impact: level of significant change this task would bring to increase satisfaction.
- Confidence: level of confidence of the task as defined - how sure we are the task will have the expected result and
  impact.
- Effort: level of effort needed to implement given task.

Possible Category values:

- Essential - grants score of `5000`
- Valuable - grants score of `4000`
- Beneficial - grants score of `3000`
- Neutral - grants score of `2000`
- Unknown - grants score of `1000`

Possible component values:

- Extreme - grants score of `1`
- Very High - grants score of `0.64`
- High - grants score of `0.36`
- Moderate - grants score of `0.16`
- Low - grants score of `0.04`
- Very Low - grants score of `0.01`

### Calculating score

CaPRICE score is derviced by gathering all the component scores individually and applying this formula:

`Score = Ca? + ((P + R + I) / ((1.0 - C) + E))`

Once Score is derived, sort all tasks in backlog from highest score to lowest.
