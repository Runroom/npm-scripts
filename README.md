# `npm-scripts`

This package provides basic `npm` scripts configurations for Runroom frontend projects.

## Usage

```bash
npm install --save-dev @runroom/npm-scripts
```

To use the configurations provided by this package, you need to install the required dependencies of each configuration.

## Babel

To use the Babel configuration:

```javascript
// babel.config.js

const babelConfig = require('@runroom/npm-scripts').babelConfig;

module.exports = babelConfig;
```

**Required dependencies:**

```bash
npm install --save-dev @babel/preset-env
```

## ESLint

When using ESLint, there are multiple configurations available to choose from. The configurations include support for plain JavaScript (vanilla), Cypress, Jest, TypeScript, React, and Next.js.

To use the ESLint configuration for plain JavaScript (vanilla):

```javascript
// .eslintrc.js

const eslintConfig = require('@runroom/npm-scripts').eslintConfig;

module.exports = eslintConfig;
```

**Required dependencies:**

```bash
npm install --save-dev @babel/core @babel/eslint-parser eslint eslint-config-prettier eslint-config-standard eslint-plugin-prettier prettier
```

To use the ESLint configuration with testing support (Cypress + Jest):

```javascript
// .eslintrc.js

const eslintConfig = require('@runroom/npm-scripts').eslintWithTestConfig;

module.exports = eslintConfig;
```

**Required dependencies:**

```bash
npm install --save-dev @babel/core @babel/eslint-parser @testing-library/jest-dom babel-jest eslint eslint-config-prettier eslint-config-standard eslint-plugin-cypress eslint-plugin-jest eslint-plugin-prettier eslint-plugin-testing-library jest jest-transform-stub jest-watch-typeahead prettier
```

To use the ESLint configuration for TypeScript:

```javascript
// .eslintrc.js

const eslintConfig = require('@runroom/npm-scripts').eslintTSConfig;

module.exports = eslintConfig;
```

**Required dependencies:**

```bash
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-config-standard eslint-plugin-prettier prettier ts-loader typescript 
```

To use the ESLint configuration for TypeScript with testing support (Cypress + Jest):

```javascript
// .eslintrc.js

const eslintConfig = require('@runroom/npm-scripts').eslintTSWithTestConfig;

module.exports = eslintConfig;
```

**Required dependencies:**

```bash
npm install --save-dev @testing-library/jest-dom @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-jest eslint eslint-config-prettier eslint-config-standard eslint-plugin-cypress eslint-plugin-jest eslint

-plugin-prettier eslint-plugin-testing-library jest jest-transform-stub jest-watch-typeahead prettier ts-loader typescript
```

To use the ESLint configuration for React:

```javascript
// .eslintrc.js

const eslintConfig = require('@runroom/npm-scripts').eslintReactConfig;

module.exports = eslintConfig;
```

**Required dependencies:**

```bash
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-config-standard eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier ts-loader typescript 
```

To use the ESLint configuration for Next.js:

```javascript
// .eslintrc.js

const eslintConfig = require('@runroom/npm-scripts').eslintNextConfig;

module.exports = eslintConfig;
```

**Required dependencies:**

```bash
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-next eslint-config-prettier eslint-config-standard eslint-plugin-prettier prettier ts-loader typescript 
```

### Custom Configuration

If you want to extend the default configurations, you can use the extends files and add them to your configuration file.

For example, to add Jest to the default TypeScript configuration:

```javascript
// .eslintrc.js

const eslintTS = require('@runroom/npm-scripts').eslintTSConfig;
const jest = require('@runroom/npm-scripts').eslintExtends.jest;

eslintTS.extends = [...eslintTS.extends, jest];

module.exports = eslintTS;
```

You can also build your own configuration using the extends files. For example, to create a React vanilla configuration with Jest:

```javascript
// .eslintrc.js

const base = require('@runroom/npm-scripts').eslintExtends.base;
const react = require('@runroom/npm-scripts').eslintExtends.react;
const jest = require('@runroom/npm-scripts').eslintExtends.jest;

module.exports = {
  extends: [base, react, jest]
};
```

### How can I extend some configuration locally?

First, consider if the rule really needs to be local to your project, or if creating a pull request to this repository to make it available to everyone is more appropriate.

If the rule needs to be local to your project, you can extend any configuration by overriding or merging the exported object with your custom configuration.

Here's an example of merging:

```javascript
const eslintConfig = require('@runroom/npm-scripts').eslintConfig;

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

## Prettier

To use the Prettier configuration:

```javascript
// prettier.config.js

const prettierConfig = require('@runroom/npm-scripts').prettierConfig;

module.exports = prettierConfig;
```

**Required dependencies:**

```bash
npm install --save-dev prettier
```

## Stylelint

To use the Stylelint configuration:

```javascript
// stylelint.config.js

const stylelintConfig = require('@runroom/npm-scripts').stylelintConfig;

module.exports = stylelintConfig;
```

**Required dependencies:**

```bash
npm install --save-dev stylelint stylelint-config-prettier stylelint-prettier prettier
```

## PostCSS

To use the PostCSS configuration:

```javascript
// postcss.config.js

const postcssConfig = require('@runroom/npm-scripts').postcssConfig;

module.exports = postcssConfig;
```

**Required dependencies:**

```bash
npm install --save-dev autoprefixer cssnano postcss postcss-at-rules-variables postcss-functions postcss-import postcss-mixins postcss-nested postcss-simple-vars postcss-sort-media-queries postcss-space
```

## Tailwind

🟠 **Important:** This configuration requires the use of [PostCSS](#postcss).

To use the Tailwind configuration:

```javascript
// tailwind.config.js

const tailwindConfig = require('@runroom/npm-scripts').tailwindConfig;

module.exports = tailwindConfig;
```

**Required dependencies:**

```bash
npm install --save-dev tailwindcss
```

## Lint Staged

To use the Lint Staged configuration:

```javascript
// lint-staged.config.js



const lintStagedConfig = require('@runroom/npm-scripts').lintStagedConfig;

module.exports = lintStagedConfig;
```

```json
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
npm install --save-dev husky lint-staged
```

### VSC config

This configuration provides auto-formatting on save for `.js`, `.ts`, `.css`, and `.scss` files.

```json
{
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
