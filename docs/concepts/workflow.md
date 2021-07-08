---
title: Workflow
sidebar_label: Workflow
---

Clarity imposes very few limitations on how tasks should transition from state to state. For example, tasks from New can
bypass Review and be promoted directly to Next provided it's clear what the task is about for all involved.

There are a few rules you should follow regarding tasks.

1. Any task in any Status can transition to any other Status - including to and from Discarded, but not from Delivered.
2. Any task in any Stage can transition to any other Stage.
3. Task status *Delivered* is final - delivered tasks should not be reopened nor should they ever transition to any
   other task status. Any issues discovered that are related to already delivered tasks should result in new tasks being
   created and prioritized.
