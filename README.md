# `npm-scripts`

This package contains basic `npm` scripts configs for Runroom frontend projects.

## Usage

```bash
yarn add --dev @runroom/npm-scripts
```

You will need to install all the required dependencies for each configuration. If you are intended to use all configurations, you can run the following code. Otherwise, we recommend you installing only those required for each configuration:

```bash
yarn add --dev @babel/preset-env @testing-library/jest-dom @typescript-eslint/eslint-plugin @typescript-eslint/parser autoprefixer babel-jest cssnano eslint eslint-config-prettier eslint-config-standard eslint-plugin-cypress eslint-plugin-jest eslint-plugin-prettier eslint-plugin-testing-library husky jest jest-transform-stub jest-watch-typeahead lint-staged postcss postcss-at-rules-variables postcss-functions postcss-import postcss-mixins postcss-nested postcss-simple-vars postcss-sort-media-queries postcss-space prettier stylelint stylelint-config-prettier stylelint-prettier typescript
```

...and then import/extend each config file with the ones from this library:

## Babel

```js
// babel.config.js

const babelConfig = require('@runroom/npm-scripts').babel;

module.exports = babelConfig;
```

**Required dependencies:**

```bash
yarn add --dev @babel/preset-env
```

## ESLint

With eslint, you have two possible configurations. You can choose the regular configuration with Typescript or the extended one with Cypress + Jest for testing purposes.

```js
// ESLint without testing configurations
// eslint.config.js

const eslintConfig = require('@runroom/npm-scripts').eslint;

module.exports = eslintConfig;
```

**Required dependencies:**

```bash
yarn add --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-config-standard eslint-plugin-prettier prettier typescript ts-loader
```

```js
// ESLint with testing configurations (Cypress + Jest)
// eslint.config.js

const eslintConfig = require('@runroom/npm-scripts').eslintWithTest;

module.exports = eslintConfig;
```

**Required dependencies:**

```bash
yarn add --dev @testing-library/jest-dom @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-jest eslint eslint-config-prettier eslint-config-standard eslint-plugin-cypress eslint-plugin-jest eslint-plugin-prettier eslint-plugin-testing-library jest jest-transform-stub jest-watch-typeahead prettier typescript ts-loader
```

## Prettier

```js
// prettier.config.js

const prettierConfig = require('@runroom/npm-scripts').prettier;

module.exports = prettierConfig;
```

**Required dependencies:**

```bash
yarn add --dev prettier
```

## Stylelint

```js
// stylelint.config.js

const stylelintConfig = require('@runroom/npm-scripts').stylelint;

module.exports = stylelintConfig;
```

**Required dependencies:**

```bash
yarn add --dev stylelint stylelint-config-prettier stylelint-prettier prettier
```

## PostCSS

```js
// postcss.config.js

const postcssConfig = require('@runroom/npm-scripts').postcss;

module.exports = postcssConfig;
```

**Required dependencies:**

```bash
yarn add --dev autoprefixer cssnano postcss postcss-at-rules-variables postcss-functions postcss-import postcss-mixins postcss-nested postcss-simple-vars postcss-sort-media-queries postcss-space
```

## Tailwind

???? **Important:** This configuration requires to use [PostCSS](#postcss)

```js
// tailwind.config.js

const tailwindConfig = require('@runroom/npm-scripts').tailwind;

module.exports = tailwindConfig;
```

**Required dependencies:**

```bash
yarn add --dev tailwindcss
```

## Lint Staged

```js
// lint-staged.config.js

const lintStagedConfig = require('@runroom/npm-scripts').lintStaged;

module.exports = lintStagedConfig;
```

```json
// package.json

{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
}
```

**Required dependencies:**

```bash
yarn add --dev husky lint-staged
```

### VSC config

This config should give you autoformatting on save in `.js`, `.ts`, `.css` and `.scss` files.

```json
{
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
  "[typescript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
  "[css]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## FAQ

### How can I extend some config locally?

First of all, ask yourself: Does this rule really need to be local to your
project? Or should I create a PR to this repo, so that it becomes available to
everyone?

If the answer is "yes, it needs to be local to my project", then you can extend
any config by overriding or merging the exported object with your custom config:

```js
const eslintConfig = require('@runroom/npm-scripts').eslint

// Merging
module.exports = {
  ...eslintConfig,
  rules: {
    ...eslintConfig.rules,
    'your-game': 'your-rules'
  }
}

// Overriding
module.exports = {
  ...eslintConfig,
  rules: {
    'your-game': 'your-rules'
  }
}
```
