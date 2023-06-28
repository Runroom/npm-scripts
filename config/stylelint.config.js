module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['define-mixin', 'mixin', 'mixin-content']
      }
    ]
  }
};
