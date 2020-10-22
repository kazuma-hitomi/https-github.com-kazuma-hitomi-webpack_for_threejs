module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es6': true,
    'jquery' : true,
  },
  'extends': [
    'eslint:recommended',
    "plugin:prettier/recommended"
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 2020,
    'sourceType': 'module'
  },
  'rules': {}
}
