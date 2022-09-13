const path = require('path');
const functions = require(path.resolve(__dirname, './postcss-scripts'));

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-functions': { functions },
    'postcss-space': {
      base: 0.5,
      unit: 'rem'
    },
    'postcss-mixins': {},
    'postcss-simple-vars': {},
    'postcss-nested': {},
    'postcss-at-rules-variables': {},
    'postcss-sort-media-queries': { sort: 'mobile-first' },
    'autoprefixer': { cascade: false }
  }
};
