module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': 'plugin:react/recommended',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'no-console': 0,
    'no-empty': 0,
    'no-unused-vars': 'error',
    'no-irregular-whitespace':0,
    'react/react-in-jsx-scope': 'off',
    'indent': [2, 2],
    'semi': [2, 'always'],
    'quotes': ['error', 'single']
  }
};
