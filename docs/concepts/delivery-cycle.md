---
title: Delivery cycle
sidebar_label: Delivery cycle
---

A Delivery cycle is a brief period during which a Team works to complete a set amount of project tasks. Each delivery
cycle should be one or two weeks long.

Delivery cycles help split work into manageable iterations and define routines to be completed at the end of each cycle.
Splitting projects and work into small cycles helps teams change and adjust direction quickly, identify potential issues,
and install countermeasures.

A delivery cycle is both a fixed planning interval and the set of tasks planned for that interval. Clarity always maintains
two relative planned cycles: the current cycle, Now, and the following cycle, Next. These relative cycles are represented
by task Stages with the same names.

Now and Next identify the cycles relative to the present. Each actual cycle instance also has its own year-and-week
identifier for history and reporting.

If you have a Scrum background, delivery cycles are rather similar to sprints but they are not at all the same thing.
While sprints in Scrum serve as a kind of mini-milestone within a project, or a project within a project, Delivery cycles
do not. And while Scrum sprints are often associated with deliverables and delivering user value - in Clarity this
function is detached from Delivery cycles and delegated to [Goals](work-organization.md#goal). While in Scrum you would
generally define a sprint to reach a deliverable and user value, in Clarity this is done the other way around - you define
Goals to deliver user value and manage delivery cycles to reach the defined Goals. This is done because delivery cycles
in Clarity are always fixed-length and always continuous, one after another - you cannot cancel a delivery cycle and
you cannot extend it. It is also done this way because it is not always possible to realistically have a deliverable
outcome sized to fit and be delivered from a single delivery cycle. The constraints on delivery cycle length and
management serve to avoid ambiguity and keep delivery cycles uniform to provide management with better opportunity to
measure delivery performance and related performance indicators.

Adding or removing tasks during a delivery cycle is also permitted in Clarity, provided there is sufficient
communication about what is moved and why, and real, tangible justification for doing so.

## Identifying a delivery cycle

Delivery cycles should be identified using the ISO 8601 week-numbering year and the two-digit ISO week in which the cycle
starts, formatted as `YYYY.Www`. For example, `2019.W12` identifies a delivery cycle that started in ISO week 12 of 2019,
which began on March 18, 2019.

The ISO week-numbering year must be used rather than the calendar year because dates near New Year can belong to a week
assigned to the preceding or following ISO year.
