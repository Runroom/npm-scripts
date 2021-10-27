var path = require('path');
const functions = require(path.resolve(__dirname, './postcss-scripts'));

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-functions': { functions },
    'postcss-space': {
      base: 0.5,
      unit: 'rem'
    },
    'postcss-simple-vars': {},
    'postcss-mixins': {},
    'postcss-nested': {},
    'postcss-at-rules-variables': {},
    'postcss-sort-media-queries': { sort: 'mobile-first' },
    'autoprefixer': { cascade: false },
    'cssnano': { zindex: false, reduceIdents: false }
  }
};
