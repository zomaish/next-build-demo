# Overview

In this repo we have two next 15.3.2 projects to demonstrate nextjs build failing in app router, and working in page router. The code is BnL identical

## What Good Looks Like from Our POV

Ideally we would like to be able to bundle our code based on routes, for example we want mypage route to be bundled as a separate app based on an env variable or build command input, and have another build with all or another subset of the routes bundled together. Our App is too small to have separate workspaces for individual routes

## Workaround

I am using `pageExtensions` in `next.config.ts` to create my bundles based on extensions

## Problem

Using `pageExtensions` works for page router but not app router, and we would like to be able to take advantage of Nexts app router and layouts

## How to run

### 1- app-router

Run:

```bash
cd app-router
yarn install
yarn build

# or to build a subset of the routes

export APP_NAME=app1 && yarn build
```

See error below after running yarn build.

`[Error: Page "/mypage/[id]" is missing "generateStaticParams()" so it cannot be used with "output: export" config.]`

### 2- page-router

Run:

```bash
cd page-router
yarn install
yarn build

# or to build a subset of the routes

export APP_NAME=app1 && yarn build
```

Successful build
