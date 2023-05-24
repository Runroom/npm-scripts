module.exports = {
  babel: require('./config/babel.config'),
  eslint: require('./config/eslint/eslint.config'),
  eslintTS: require('./config/eslint/eslintTS.config'),
  eslintTSWithTest: require('./config/eslint/eslintTSTest.config'),
  eslintWithTest: require('./config/eslint/eslintTest.config'),
  jest: require('./config/jest/jest.config'),
  lintStaged: require('./config/lint-staged.config'),
  postcss: require('./config/postcss/postcss.config'),
  prettier: require('./config/prettier.config'),
  stylelint: require('./config/stylelint.config'),
  tailwind: require('./config/tailwind.config')
};
