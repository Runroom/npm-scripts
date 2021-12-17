# `npm-scripts`

This package contains basic `npm` scripts configs for Runroom frontend projects.

## Usage

```bash
yarn add --dev @runroom/npm-scripts
```

...and then import/extend each config file with the ones from this library:

```js
// babel.config.js

const babelConfig = require('@runroom/npm-scripts').babel;

module.exports = babelConfig;
```

```js
// ESLint without testing configurations
// eslint.config.js

const eslintConfig = require('@runroom/npm-scripts').eslint;

module.exports = eslintConfig;

// ESLint with testing configurations (Cypress + Jest)
// eslint.config.js

const eslintConfig = require('@runroom/npm-scripts').eslintWithTest;

module.exports = eslintConfig;
```

```js
// prettier.config.js

const prettierConfig = require('@runroom/npm-scripts').prettier;

module.exports = prettierConfig;
```

```js
// stylelint.config.js

const stylelintConfig = require('@runroom/npm-scripts').stylelint;

module.exports = stylelintConfig;
```

```js
// postcss.config.js

const postcssConfig = require('@runroom/npm-scripts').postcss;

module.exports = postcssConfig;
```

```js
// tailwind.config.js

const tailwindConfig = require('@runroom/npm-scripts').tailwind;

module.exports = tailwindConfig;
```

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


## Deployment and versioning

`npm-scripts` uses [Semantic Release](https://github.com/semantic-release/semantic-release/) to handle the release pipeline.

Triggering a new release will create the associated Git tag, the GitHub release
entry, and publish a new version on [npm](https://www.npmjs.com/package/@runroom/npm-scripts).

In order to trigger a new version, make sure you add the appropriate prefix and
message to the squashed commit. It is based on the [Angular Commit Message Conventions](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines). In short:

```bash
# Creates a patch release (v1.0.0 -> v1.0.1)
> fix: commit message

# Creates a feature release (v1.0.0 -> v1.1.0)
> feat: commit message

# Creates a breaking release (v1.0.0 -> v2.0.0)
> chore: commit message
>
> BREAKING CHANGE: explain the breaking change # "BREAKING CHANGE:" is what triggers the breaking release
```

There's no need to overcomplicate things here. Keep it simple: `fix`, `feat`,
and `chore` (plus `BREAKING CHANGE`) should be enough for now.


## FAQ

### How can I extend some config locally?

First of all, ask yourself: Does this rule really need to be local to your
project? Or should I create a PR to this repo, so that it becomes available to
everyone?

If the answer is "yes, it needs to be local to my project", then you can extend
any config by merging the exported object with your custom config:

```js
const merge = require('lodash.merge')
const eslintConfig = require('@runroom/npm-scripts').eslint

module.exports = merge(eslintConfig, {
  rules: {'your-rule': 'error'}
})
```
