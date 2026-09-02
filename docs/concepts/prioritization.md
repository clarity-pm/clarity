---
title: Prioritization
sidebar_label: Prioritization
---

## Stages, prioritization and time

The foundation of prioritization and scheduling in Clarity is the concept of [task stages](task-stage.md). Stage is the
primary visible indicator of a task's current priority for scheduling and execution.

Stage is not the source of priority. Business priority is determined first from stakeholder input and, when used, Rank or
CaPRICE. That business priority is then used to select a Stage and order the task within it:

`Business priority -> Stage -> position within Stage`

Never reverse this flow to infer a task's underlying business priority from its current Stage. Stage records the current
scheduling decision; it does not create the business value or reasoning behind that decision.

Clarity is designed this way for two reasons - as a general rule, prioritization in time comes naturally to most
people; and the priority of work items often (but not always) tends to increase as time progresses.

## Prioritizing

In addition to stages, there are many prioritization methodologies that can be used to prioritize tasks. You can choose
the one best suited to the needs of your work environment, or you can use either of the two standard methodologies defined by
Clarity - a high-level methodology called Rank, or a low-level methodology called CaPRICE.

Rank is a high-level priority usually managed by the Team leader based on input from the stakeholders and the Team on
a task-by-task basis. This is the recommended approach to be used when dealing with product backlogs containing fewer than
5-10 thousand tasks.

Relatively large projects should consider using CaPRICE instead. The CaPRICE methodology comes at a cost of overhead and
is only worth it for really large project backlogs - more than 5-10 thousand tasks.

In Clarity, all priorities derived from either Rank or CaPRICE are scoped to the Backlog - current stage and other
states or metadata of a task usually have no bearing on what the priority of a task is.

The recommended method for prioritization in Clarity is Rank - it is suitable for all but very large projects.

It is also perfectly fine to use another prioritization methodology not defined by Clarity explicitly, or no
prioritization methodology at all since [Stages](task-stage.md) already serve as a means of prioritization - simply
schedule all incoming tasks from New to Now, Next and Later stages as deemed appropriate by the stakeholders and
the team.

When using tribal prioritization, you should still do your best to keep tasks naturally sorted and organized by implied
value each task has, for example, by using bubble sort.

**BCP:** Prioritization methods and stakeholder input determine the current Stage of a task. Never derive the underlying
business priority from the task's Stage.

## Scheduling tasks by priority

All tasks in Clarity are scheduled by priority, and all delivery should follow highest-priority-first ordering. Some other
methodologies prescribe work cycles to have a mix of high-value and low-value items, supposedly to ensure even lower
priority items are delivered at some point.

This is considered an anti-pattern in Clarity and delivery capacity should always focus on the highest priority items
first. Priority of tasks is to be reviewed periodically and adjusted according to emerging requirements and objectives.
Age of a task generally has no bearing on priority.

## Prioritization using Rank

Rank is a high-level priority indicator of a task relative to all other tasks defined in the backlog.

Ranking prioritizes all tasks in five distinct categories called Ranks. Ranks are aligned to the implied value of each
task - how much value will the delivery of a task bring toward achieving a related [Goal](work-organization.md#goal),
[Objective](work-organization.md#objective) and [Vision](work-organization.md#vision)? What kind of impact will the delivery
of a task have on the customers, end users, and stakeholders? Ranking helps indicate a high-level estimate of how
valuable a task is and uses the rank to prioritize tasks against one another.

In practice, ranking is indicative; implementations should impose no technical limitations on sorting tasks within a
Stage or backlog across different ranks.

Clarity defines five different ranks.

### Essential

Must have, will lead to loss of business and dissatisfaction among users if not delivered.

### Valuable

Highly beneficial task that would significantly improve the product and user satisfaction.

### Beneficial

A nice-to-have improvement - would not lead to dissatisfaction if not delivered, but would result in some satisfaction
if delivered.

### Neutral

A task with an insignificant benefit to the product that might have indirect benefit - generally used for "housecleaning"
tasks.

### Unknown

Task is not prioritized at all. Unknown is permitted in New and Review and for a task with Discarded Status in Closed.
A Delivered task in Closed retains the Rank it had when delivered.

## Prioritization using CaPRICE

The CaPRICE prioritization methodology can be used to organize and manage priorities in very large backlogs.

CaPRICE defines five or six different components, depending on the needs of the business and application of the methodology.

These components are Category, Penalty, Reach, Impact, Confidence and Effort. Each component provides a list of possible
values to choose from, with each possible value granting a score. The score of each component is used to determine priority
using the formula defined below.

CaPRICE score is formed from two parts - a high-level Category; and PRICE components - Penalty, Reach, Impact,
Confidence and Effort.

Category is a special component and is used to form a high-level priority among all tasks in the backlog - it forms
an "executive" priority. Using Category is optional. If what you want is the absolute priority of all tasks in Backlog,
simply use PRICE without Category component.

When used for prioritizing, tasks of one category cannot be prioritized outside their category regardless of the values of
other components.

For example, Beneficial tasks cannot mix with Essential tasks regardless of values chosen for remaining PRICE
components. In essence, Category provides a way to manage high-level goals within the backlog.

Possible components:

- Category: A high-level abstract priority of the task. By default, uses the same values and concepts as Rank.
- Penalty: implied penalty if the given task would not be delivered.
- Reach: level of reach this task would have relative to the user base or target audience.
- Impact: level of significant change this task would bring to increase satisfaction.
- Confidence: level of confidence in the task as defined - how sure we are the task will have the expected result and
  impact.
- Effort: level of effort needed to implement the given task.

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

The CaPRICE score is derived by gathering all the component scores individually and applying this formula:

`Score = (CategoryScore or 0) + ((P + R + I) / ((1.0 - C) + E))`

Use the selected Category score when Category is enabled. Use `0` when Category is not used.

Once the Score is derived, sort all tasks in the backlog from the highest score to the lowest.
