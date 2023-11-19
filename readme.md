[![Netlify Status](https://api.netlify.com/api/v1/badges/fafc3a03-5dc8-4753-b387-18dcf39906cf/deploy-status)](https://app.netlify.com/sites/sds-poc/deploys)

# Solar DS Web Components

This is a simple proof of concept for our design system, the goal is to better connect design with code while centralizing documentation.

Components are built using Stencil JS with Storyboook for documentation.

Storybook deployment for the components:
https://sds-poc.netlify.app/  

## About Storybook
Storybook is a frontend workshop for building UI components and pages in isolation. It helps test, document, and share UI components for teams to reuse
This proof of concept uses Storybook to document basic component specs and embed the output into our design system documentation.

# About Stencil

Stencil is a compiler for building fast web apps using Web Components. Stencil components are just Web Components, so they work in any major framework or with no framework at all.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.


## Getting Started

run stencil:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```

Watch for component changes while Storybook is running

```bash
npm build-watch
npm storybook
```
