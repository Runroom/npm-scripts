module.exports = {
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  env: {
    'browser': true,
    'node': true,
    'jest': true,
    'es6': true,
    'cypress/globals': true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:cypress/recommended',
    'plugin:jest/recommended',
    'prettier'
  ],
  plugins: ['@typescript-eslint', 'cypress', 'jest'],
  rules: {
    'jest/prefer-called-with': 'error',
    'jest/prefer-strict-equal': 'error',
    'jest/no-test-return-statement': 'error',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-unused-vars': 'warn',
    'no-param-reassign': 'error',
    'no-else-return': 'error',
    'no-return-assign': 'error',
    'no-template-curly-in-string': 'error',
    'no-extend-native': 'error',
    'no-multi-spaces': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-return-await': 'error',
    'no-self-compare': 'error',
    'no-useless-return': 'error',
    'no-undef-init': 'error',
    'no-duplicate-imports': 'error',
    'no-var': 'error',
    'eqeqeq': 'error',
    'yoda': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'require-await': 'error',
    'semi': 'error'
  }
};
