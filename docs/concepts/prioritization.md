---
title: Prioritization
sidebar_label: Prioritization
---

## Stages, prioritization and time

The very foundation of prioritization and scheduling in Clarity is the concept of [task stages](task-stage.md). Stages
serve as the primary indicator of priority for all tasks in the backlog. All other prioritization methods serve as input
that allows to determine what stage a task should have and where should the task be placed within a stage.

Clarity is designed this way because of two reasons - as a general rule, prioritization in time comes naturally to most
people; and priority of work items often (but not always) tend to increase as time progresses.

## Prioritizing

In addition to stages, there are many prioritization methodologies can be used to prioritize tasks. You can choose one
best suited to the needs of your work environment, or you can use either one of two standard methodologies defined by
Clarity - a high-level methodology called Rank, or a low-level methodology called CaPRICE.

Rank is a high level priority usually managed by the Team leader based on input of the stakeholders, and the team, on
a task-by-task basis. This is the recommended approach to be used when dealing with product backlogs sized below
5-10 thousand tasks.

Relatively large projects should consider using CaPRICE instead. CaPRICE methodology comes at a cost of overhead and
is only worth it for really large project backlogs - more than 5-10 thousand tasks.

In Clarity, all priorities derived from either Rank or CaPRICE are scoped to the Backlog - current stage and other
states or metadata of a task usually have no bearing on what the priority of a task is.

The recommended method for prioritization in Clarity is Rank - it is suitable to all but very large projects.

It is also perfectly fine to use another prioritization methodologies not defined by Clarity explicitly, or no
prioritization methodology at all since [Stages](task-stage.md) already serve as means of prioritization - simply
schedule all incoming tasks from New to Now, Next and Later stages as deemed appropriate by the stakeholders and
the team.

When using tribal prioritization, you should still do your best to keep tasks naturally sorted and organized by implied
value each task has, for example, by using bubble-sort.

**BCP** Prioritization methods serve as inputs to determine the current stage of a task. You should
never derive priority from task stages.

## Scheduling tasks by priority

All tasks in Clarity are scheduled by priority and all delivery should follow highest-priority first. Some other
methodologies prescribe work cycles to have a mix of high value and low value items, supposedly to ensure even lower
priority items are delivered at some point.

This is considered an anti-pattern in Clarity and delivery capacity should always focus on the highest priority items
first. Priority of tasks is to be reviewed periodically and adjusted to emerging requirements and objectives. Age of a
task generally has no bearing on priority.

## Prioritization using Rank

Rank is a high level priority indicator of a task relative to all other tasks defined in the backlog.

Ranking prioritizes all tasks in five distinct categories called Ranks. Ranks are aligned to the implied value of each
task - how much value a delivery of a task will bring to achieve a related [Goal](work-organization.md#goal)
, [Objective](work-organization.md#objective) and [Vision](work-organization.md#vision)? What kind of impact a delivery
of a task will have to the customers, end users, stakeholders? Ranking helps to indicate a high level estimate of how
valuable is a task and use the rank to prioritize tasks one against another.

In practice, ranking is indicative - for implementations, no technical limitations should be set against being
able to sort tasks in Stage or backlog between different ranks.

Clarity defines five different ranks.

### Essential

Must have, will lead to loss of business and dissatisfaction among users if not delivered.

### Valuable

Highly beneficial task that would significantly improve the product and user satisfaction

### Beneficial

Nice to have improvement - would not lead to dissatisfaction if not delivered, but would result in some satisfaction
if delivered.

### Neutral

A task with insignificant benefit to the product that might have indirect benefit - generally used for "house-cleaning"
tasks.

### Unknown

Task is not prioritized at all. This rank is not allowed outside of New, Review and Discarded stages.

## Prioritization using CaPRICE

CaPRICE prioritization methodology can be used to organize and manage priorities in very large backlogs.

CaPRICE defines 5 or 6 different components, depending on the needs of the business and application of the methodology.

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

- Category: A high level abstract priority of the task. By default, uses the same values and concepts as Rank.
- Penalty: implied penalty if the given task would not be delivered.
- Reach: level of reach this task would have relative to the user base or target audience.
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

CaPRICE score is derived by gathering all the component scores individually and applying this formula:

`Score = Ca? + ((P + R + I) / ((1.0 - C) + E))`

Once Score is derived, sort all tasks in backlog from the highest score to lowest.
