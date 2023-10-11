module.exports = {
  'extends': ['stylelint-config-recommended', 'stylelint-config-standard'],
  'rules': {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'define-mixin',
          'mixin',
          'mixin-content',
          'function',
          'if',
          'each',
          'include',
          'mixin',
          'extend',
          'else',
          'return',
          'content',
          'at-root',
          'use',
          'error'
        ]
      }
    ]
  },
  'selector-class-pattern': [
    '^[a-z]([-]?[a-z0-9]+)*((__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?)*$',
    {
      resolveNestedSelectors: true,
      message: function expected(selectorValue) {
        return `Expected class selector "${selectorValue}" to match BEM CSS pattern https://en.bem.info/methodology/css. Selector validation tool: https://regexr.com/3apms`;
      }
    }
  ]
};
