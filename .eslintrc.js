module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier'
  ],
  parser: 'babel-eslint',
  plugins: ['react', 'prettier'],
  env: {
    browser: true,
    es6: true,
  },
  root: true,
  rules: {
    'prettier/prettier': [
      'error',
      { trailingComma: 'es5', singleQuote: true, printWidth: 90, semi: false },
    ],
    'no-unused-vars': ['error', { vars: 'all', args: 'none' }],
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    'no-warning-comments': ['warn', { terms: ['fixme'], location: 'start' }],

    // Consider enabling
    'react/prop-types': 'off',
    'react/display-name': 'off',
  },
};
