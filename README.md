# A TypeScript project template

An opinionated project template for TypeScript projects.

This template does not include any e.g. React-specific settings but is supposed to apply to _all_ (Node) TypeScript projects. So, the idea is to provide a basis from which nothing should be taken away and only additions should be made according to project-specific needs.     

The setup includes [Prettier](https://prettier.io) for formatting and [ESLint](https://eslint.org) for linting.

The original idea was to do both formatting and linting on every TypeScript file change by a watcher script but that proved to work rather badly in co-operation with my IDE (IntelliJ Idea). So now the idea is to have Prettier run inside the IDE on save and having a separate script for linting to be run e.g. in a pre-commit hook. The linter still also runs Prettier but if the IDE is configured correctly linting should not make formatting changes. 
