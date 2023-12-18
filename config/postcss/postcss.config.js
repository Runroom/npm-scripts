module.exports = {
  plugins: [
    'postcss-import',
    'postcss-mixins',
    ['postcss-sort-media-queries', { sort: 'mobile-first' }],
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          cascade: false,
          flexbox: 'no-2009'
        },
        stage: 2,
        features: {
          'custom-properties': false
        }
      }
    ]
  ]
};
