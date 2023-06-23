module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-anonymous-default-export': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/display-name': 2,

    'curly': 0,
    'lines-around-comment': 0,
    'max-len': 0,
    'no-confusing-arrow': 0,
    'no-mixed-operators': 0,
    'no-tabs': 0,
    'no-unexpected-multiline': 0,
    'quotes': 0,
    '@typescript-eslint/lines-around-comment': 0,
    '@typescript-eslint/quotes': 0,
    'babel/quotes': 0,
    'vue/html-self-closing': 0,
    'vue/max-len': 0
  }
};
