## Local Development Setup

* [Node.js and npm](https://nodejs.org/en/)

## Get Started

1. Pull repo. `git clone git@github.com:kdlcruz/kdlcruz.git`
2. Go to project. `cd stitao`
3. Install modules. `npm install`
4. Start project. `npm start`

## Starting a task

We follow a very specific branching workflow. All new work is started br branching from `staging` into a branch that is either prefixed with `feature/` or `hotfix/` depending on whether it is feature/change that adds new functionality, or a bug fix to existing functionality.

A PR back to `staging` should be created right away and prefixed with `[WIP]` so other team members may track progress of your work. When the branch has passed your own QA, remove the `[WIP]` and request a review from a team member. Once the branch has been reviewed it can be merged by an approved admin.

These features and hotfix branches will be automatically deployed to their own isolated QA environment when push into GitHub. For example:

#### branch name is `feature/add-new-functionality`
#### isolated QA should be `https://f-add-new-functionality.kdlcruz.com`

#### branch name is `hotfix/fixup-bug`
#### isolated QA should be `https://h-fixup-bug.kdlcruz.com`

All merges into `staging` will be automatically deployed to our staging environment at [https://staging.kdlcruz.com/](https://staging.kdlcruz.com/)

> All branch name should be stricted to Alphabet, number and hyphen.

## CI/CD

This project is heavily integrated with a CI/CD pipeline currently running on CircleCI. The app is deployed in Google App Engine.

## Deployment to Production

`master` branch will only be used if the new features/hotfixes from `staging` passes from manual QA.

## Run test/run lint test

`npm run test` / `npm run lint`