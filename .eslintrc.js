/* eslint-disable no-dupe-keys */
module.exports = {
    env: {
      browser: true,
      es2021: true
    },
    extends: [
      'plugin:react/recommended',
      'airbnb',
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended'
    ],
    overrides: [],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
      'react/react-in-jsx-scope': 0,
      'react/jsx-filename-extension': 0,
      'no-undef': 0,
      'prettier/prettier': 0,
      'react/prop-types' : 0,
      'import/prefer-default-export' : 0,
      'no-plusplus' : 0,
      'jsx-a11y/control-has-associated-label' : 0,
      'react/button-has-type' : 0
    }
  };