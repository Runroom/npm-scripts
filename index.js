const pathJoin = require('path').join;

module.exports = {
  babelConfig: require('./config/babel.config'),
  eslintExtends: {
    base: pathJoin(__dirname, 'config/eslint/extends/base.js'),
    cypress: pathJoin(__dirname, 'config/eslint/extends/cypress.js'),
    jest: pathJoin(__dirname, 'config/eslint/extends/jest.js'),
    next: pathJoin(__dirname, 'config/eslint/extends/next.js'),
    react: pathJoin(__dirname, 'config/eslint/extends/react.js'),
    typescript: pathJoin(__dirname, 'config/eslint/extends/typescript.js')
  },
  eslintConfig: require('./config/eslint/eslint.config'),
  eslintNextConfig: require('./config/eslint/eslintNext.config'),
  eslintReactConfig: require('./config/eslint/eslintReact.config'),
  eslintTSConfig: require('./config/eslint/eslintTS.config'),
  eslintTSWithTestConfig: require('./config/eslint/eslintTSTest.config'),
  eslintWithTestConfig: require('./config/eslint/eslintTest.config'),
  jestConfig: require('./config/jest/jest.config'),
  lintStagedConfig: require('./config/lint-staged.config'),
  postcssConfigOld: require('./config/postcss/postcssOld.config'),
  postcssConfig: require('./config/postcss/postcss.config'),
  prettierConfig: require('./config/prettier.config'),
  stylelintConfig: require('./config/stylelint.config'),
  tailwindConfig: require('./config/tailwind.config')
};
