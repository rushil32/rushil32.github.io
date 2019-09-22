---
title: Redux middleware
date: 2019-08-30
path: /blog/redux-middleware
author: 'Rushil Saraogi'
category: 'Redux'
---

## What is middleware

Middleware is some code you can put between a framework receiving a request, and the framework generating a response. For example, Express or Koa middleware may add CORS headers, logging, compression, and more. The best feature of middleware is that it's composable in a chain. You can use multiple independent third-party middleware in a single project.

Recieves request => Middlware => Generate Response

--split--

## Redux middleware

Redux middleware solves different problems than Express or Koa middleware, but in a conceptually similar way. It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer. People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more.

Dispatch action => Middlware => Action handled by reducer


