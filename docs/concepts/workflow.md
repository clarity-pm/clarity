---
title: Workflow
sidebar_label: Workflow
---

Clarity imposes very few limitations on how tasks should transition from state to state. For example, tasks from New can
bypass Review and be promoted directly to Next provided that it is clear what the task is about to everyone involved.

There are a few rules you should follow regarding tasks.

| Operation | Rule |
|---|---|
| Status transition | A task may transition between Statuses, including to and from Discarded. Delivered is final and cannot transition to another Status. |
| Active Stage move | A task may move between active Stages. Stage-specific Status lists are recommendations rather than hard constraints. |
| Entering Closed | A task automatically enters Closed when its Status becomes Delivered or Discarded. |
| Leaving Closed | Delivered tasks cannot leave Closed. Reopening a Discarded task requires a Status transition and a move to an active Stage in the same operation. |

Any issues discovered after a task is Delivered should result in a new task being created and prioritized.
