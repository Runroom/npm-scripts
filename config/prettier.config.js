module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  printWidth: 100,
  proseWrap: 'always',
  quoteProps: 'consistent',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false,
  overrides: [
    {
      files: ['*.scss', '*.css', '*.yaml', '*.yml', '*.json'],
      options: {
        singleQuote: false,
        tabWidth: 4
      }
    }
  ]
};
