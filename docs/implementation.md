---
title: Implementing Clarity
sidebar_label: Implementation
---

## General considerations

Clarity is a light-weight work management framework and - requires relatively minimal effort to be implemented. However,
Clarity prescribes certain organizational semantics which, depending on the current structure of your organization,
might require substantial changes - or no changes at all.

For production organizations (ex. manufacturing, software, product), Clarity prefers that organization at its lowest
level is divided into one or more performance production teams. Such teams should be of limited
size, [cross-functional](https://en.wikipedia.org/wiki/Cross-functional_team), semi or
fully [self managing](https://psychology.wikia.org/wiki/Self_managing_work_teams) and fairly autonomous with strong
ownership over the work they perform and - how the work is performed in terms of implementation semantics.

While it is still possible to apply Clarity in compartmentalized production organizations where teams are not
cross-functional and the work is a mix of several objectives (ex. “classic” software development agencies), doing so
will not be as efficient.

For service organizations (ex. logistics, retail) it is also possible that organization has no such logical distinction
possible and all teams sans specific departments, most of the staff even, are fairly equal in terms of the area of
expertise or work objectives. Clarity can be applied just fine in such organizations since the work semantics differ
from production teams. You should still try to divide large uniform departments into smaller units - even if such
boundaries are set artificially. This will help further sub-divide work and smaller units are easier to manage long
term.

It is perfectly fine to apply Clarity framework selectively, meaning, the entire organization does not need to operate
under Clarity framework. It is possible some part of the staff has no benefit from using Clarity, as rare as these cases
might be - they exist.

Clarity also does not require it to be applied organization-wide from day one. Starting the implementation from one or
more pilot teams is just fine, just to validate the applicability of the framework to your particular use case. Despite
that Clarity is designed to be fairly universal and industry agnostic, you might still encounter road blocks that
require the framework to be adjusted or even abandoned - as rare as such cases might be.

## Road from here to Clarity

There are many paths to implementing Clarity and each one depends on what is already in place in terms of organization
and staff hierarchy. There is no one true way to implement Clarity, but you should:

1. Identify the current status of your organization. Write - how are things organized, who is responsible for what items
   of organization, and why. Identify stakeholders.
2. Determine differences between what you have and what Clarity defines.
3. Write down clear steps that would need to be taken to adjust from your current state to the desired level of
   implementation for Clarity.
4. Evaluate - are the previously set steps achievable and realistic? What are the roadblocks? Are there blockers?
6. Have a conversation with all stakeholders that would be involved in the transition. Determine and install
   countermeasures for all blockers and roadblocks identified.
5. Establish a pilot - a single unit or team to adopt Clarity before everyone else.
6. Learn and educate! Work with your pilot team to implement Clarity for at least 6 delivery cycles.
7. Evaluate results of the pilot - did you achieve your goals? What did you learn? Are there any adjustments that need
   to be done before moving on?
8. Rinse and repeat - for each unit or team individually till Clarity is implemented to the extent necessary.

It is wise to adopt Clarity gradually - team by team, organizational level by level. Adopting Clarity organization wide
from the get-go is a Really Bad Idea™.

You can [reach out](/contact) if you need help implementing Clarity.

## Tools and automation

You should be able to use any task or project management software to implement Clarity as long as it has following
features available:

- Tasks can be visualized and are organized as lists - Kanban-only tools will not do.
- Tasks in these lists can be separated in sections of tasks to support [stages](concepts/task-stage.md).
- Tasks can have custom priority labels to support [Rank](concepts/prioritization.md#prioritization-using-rank) or
  custom priority formulas to support [CaPRICE](concepts/prioritization.md#prioritization-using-caprice), or none of
  them depending on what prioritization method you want to use.
- Tasks can have custom labels to indicate [Goals](concepts/work-organization.md#goal)
  , [Objectives](concepts/work-organization.md#objective) and [Visions](concepts/work-organization.md#vision).
- Tasks can have custom [statuses](concepts/tasks.md#task-status).

Some of the tools you might be able to use to implement Clarity are listed here. There are probably many more available.
You can use any one you like.

**NOTE:** some of the tools listed here might or might not support all of the features required to implement all of the
aspects and possible configurations of Clarity. Some might require paid features to be enabled and significant
customization before making them Clarity-compatible. Some might only support a subset of the features required for a
full Clarity implementation.

| Name | URL | Notes | |-|-|-| | ClickUp | https://clickup.com | Clarity can be implemented using free version.
All-in-one project management solution. | | Asana | https://asana.com | Clarity can be implemented using free version.
For best results paid version is required to use custom fields. Powerful customization options are available. | |
Todoist | https://todoist.com | Paid version required. Easy to manage. | | Basecamp | https://basecamp.com | Paid
version most likely required because of usage limitations. |

### How about Atlassian JIRA?

Atlassian JIRA can be adapted for Clarity, but doing so requires some workarounds and customization - you will need to
define custom statuses, custom priorities, custom labels and rename components like Epics and such, to match the Clarity
framework. JIRA has no support for custom sections in backlogs, so you might need to use Sprints to support task Stages.
This is obviously a hack. If JIRA is all that you can have / are allowed to have, you can make it work, but the process
will not be seamless.
