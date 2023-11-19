[![Netlify Status](https://api.netlify.com/api/v1/badges/fafc3a03-5dc8-4753-b387-18dcf39906cf/deploy-status)](https://app.netlify.com/sites/sds-poc/deploys)

# Solar DS Stencil

This is a simple proof of concept for our internal design system, the goal is to better connect design with code while centralizing documentation.

Super simplified components built with Stencil JS and Storyboook for documentation.

Storybook deployment for the components:
https://sds-poc.netlify.app/  

## Storybook

[Storybook](https://storybook.js.org/docs/react/get-started/why-storybook) is a frontend workshop for building UI components and pages in isolation. It helps test, document, and share UI components for teams to reuse
This proof of concept uses Storybook to document basic component specs and embed the output into our design system documentation.

## Stencil

[Stencil](https://stenciljs.com/) is a compiler for building fast web apps using Web Components. Stencil components are just Web Components, so they work in any major framework or with no framework at all.

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
