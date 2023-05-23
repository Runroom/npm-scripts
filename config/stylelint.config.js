module.exports = {
  extends: ['stylelint-prettier/recommended'],
  rules: {
    'max-nesting-depth': [2, { ignore: ['pseudo-classes'], severity: 'warning' }]
  }
};
