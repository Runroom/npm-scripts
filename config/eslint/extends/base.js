module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
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
    'quotes': ['error', 'single', { avoidEscape: true }],
    'semi': ['error', 'always']
  }
};
