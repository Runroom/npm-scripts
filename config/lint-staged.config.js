module.exports = {
  '*.{css,scss}': ['stylelint --fix'],
  '*.{js,ts,tsx}': ['prettier --write', 'eslint', 'npm run test -- --findRelatedTests'],
  '*.json': ['prettier --write']
};
