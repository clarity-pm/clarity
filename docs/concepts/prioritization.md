---
title: Prioritizing tasks
sidebar_label: Prioritization
---

There are several prioritization methodologies that can be used to prioritize tasks. You can choose one best suited to the needs of your work environment or you can use either one of two standard methodologies defined by Clarity - a high level methodology called Rank and a low level methodology called CaPRICE.

Rank is a high level priority usually defined by Team leader based on input of the Stakeholders and direct know-how. This is the recommended approach to be used when dealing with product backlogs sized below 5-10 thousand tasks.

A relatively large projects should use CaPRICE. This methodology comes at a cost of overhead and is only worth it for relatively large project backlogs - more than 5-10 thousand tasks.

In Clarity, all ranking is scoped to Backlog - current stage and other states a task might have has no bearing on what is the priority of a task. The opposite might be true - task overall priorities can have impact on what stage the task belongs to provided Rank or CaPRICE is used. A goal each task belongs to can also have implicit impact on the priority of the task.

The recommended method for prioritization in Clarity is Rank - it is suitable to all but very large projects.

It is also perfectly fine to use another prioritization methodologies not defined by Clarity explicitly, or no prioritization methodology at all since [Stages](task-stage.md) can serve as means of prioritization too - simply schedule all incoming tasks from New to Now, Next and Later stages. When doing so you should still do your best to keep tasks naturally sorted and organized by implied value each task has.


## Scheduling tasks by priority

All tasks in Clarity are scheduled by priority and all delivery should follow highest-priority first. Some other methodologies prescribe work cycles to have a mix of high value and low value items, supposedly to ensure even lower priority items are delivered at some point. This is considered an anti-pattern in Clarity and delivery capacity should always focus on the highest priority items first and foremost. Priority of tasks is to be reviewed periodically and adjusted to emerging requirements and objectives. Age of a task has no bearing on priority either.

## Prioritization using Rank

Rank is a high level priority indicator of a task relative to all other tasks defined in the backlog. As a general rule, ranking is the responsibility of a Team leader, but can be delegated to other role in Team. Doing so however is not recommended as Team leader should be The Source of Truth.

Ranking prioritizes all tasks in five distinct categories called Ranks. Ranks are aligned to the implied value of each task - how much value a delivery of a task will bring to achieve a [Goal](organizing-tasks.md#goal), [Objective](organizing-tasks.md#objective) and [Vision](organizing-tasks.md#vision)? What kind of impact a delivery of a task will have to the customers, end users, stakeholders? Ranking helps to indicate a high level estimate of how valuable is a task and use the rank to prioritize tasks one against another.

Ranking is indicative - for implementations, no technical limitations should be set against being able to sort tasks in Stage within the same Rank and between different ranks.

Clarity defines five different ranks.

### Essential
Must have, will lead to loss of business and dissatisfaction among users if not delivered.

### Valuable
A highly beneficial task that would significantly improve the product and user satisfaction

### Beneficial
A nice to have improvement - would not lead to dissatisfaction if not delivered, but would result in some satisfaction if delivered.

### Neutral
Task that has no significant benefit to the product as such - "house cleaning".

### Unknown
Task is not prioritized at all. This rank is not allowed outside of New, Review and Discarded stages.

## Prioritization using CaPRICE

CaPRICE prioritization methodology can be used to organize and manage priorities in very large backlogs.

CaPRICE defines 5 or 6 different components, depending on the preference and application of the methodology.

These components are Category, Penalty, Reach, Impact, Confidence and Effort. Each component provides a list of possible values to choose from, with each possible value granting a score. Score of each component is used to determine priority using formula defined below.

CaPRICE score is formed from two parts - a high level Category; and PRICE components - Penalty, Reach, Impact, Confidence and Effort.

Category is a special component and is used to form a high level priority between all tasks in the backlog - it forms an "executive" priority. Using Category is optional. If what you want is absolute priority of all tasks in Backlog, simply use PRICE without Category component.

When used for prioritizing, tasks of one category cannot be prioritized outside the category regardless the values of other components.

For example, Beneficial tasks can not mix with Essential tasks regardless of values chosen for remaining PRICE components. In essence, Category provides a way to manage high level goals within the backlog.

Possible components:

- Category: A high level abstract priority of the task. By default uses the same values and concept as Rank.
- Penalty: a implied penalty if the given task would not be delivered.
- Reach: a level of reach this task would have relative to the user base or target audience.
- Impact: level of significant change this task would bring to increase satisfaction.
- Confidence: level of confidence of the task as defined - how sure we are the task will have the expected result and impact.
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
