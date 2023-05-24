module.exports = {
  extends: [
    'next/core-web-vitals'
  ],
  'rules': {
    'jsx-a11y/anchor-is-valid': ['error', { 'components': ['Link'], 'specialLink': ['hrefLeft', 'hrefRight'], 'aspects': ['invalidHref', 'preferButton'] }],
    'jsx-quotes': 'error',
    'react/jsx-tag-spacing': ['error', { 'beforeSelfClosing': 'never' }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-anonymous-default-export': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/display-name': 2
  }
};
