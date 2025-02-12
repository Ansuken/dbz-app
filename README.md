# ⚛️ React + TypeScript + Vite

This project is built with **React 19**, **Vite**, and **TypeScript**, featuring an optimized setup for development and production. It includes tools like **Redux Toolkit**, **TanStack Query**, **CSS Modules**, and more.

## Installation & Setup

### Clone the repository
```bash
git clone <REPOSITORY_URL>
cd <PROJECT_NAME>
```

### Installing dependencies

#### Using Yarn
```bash
yarn
```

#### Using NPM
```bash
npm install
```

## Scripts

### `yarn dev`

Starts the development server on http://localhost:5173

### `yarn build`

Builds the app for production to the `dist/` folder.

### `yarn preview`

Runs a local server to preview the production build.

### `yarn lint`

Runs the linter for checking syntax errors and code style.

### `yarn test`

Runs tests

## Technologies used

- React 19
- Typescript
- React Router 6
- Redux Toolkit
- Tanstack Query
- CSS Modules
- Vite
- Jest
- ESLint
- Prettier
- Husky

## Features
- State management with Redux Toolkit
- Data fetching & caching using TanStack Query
- Client-side routing with React Router
- Scoped styling with CSS Modules
- Testing with Jest and React Testing Library
- Linting & formatting with ESLint and Prettier

## Project structure

```
.
├── src
│   ├── _reset.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
│   ├── api
│   │   └── fetchCharacters.ts
│   ├── common
│   │   ├── styles
│   │   ├── styleVars
│   │   └── svgs
│   ├── components
│   │   ├── card
│   │   ├── characterResume
│   │   ├── favoriteIcon
│   │   ├── header
│   │   ├── layout
│   │   ├── relatedCharacters
│   │   ├── search
│   │   └── transformations
│   ├── helpers
│   ├── hooks
│   ├── router
│   ├── store
│   ├── types
│   └── views
├── index.html
├── eslint.config.js
├── jest.config.ts
├── jest-setup.ts
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
``` 

### License
MIT License


