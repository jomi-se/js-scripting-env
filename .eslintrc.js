module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:jest/recommended'],
  plugins: ['jest', 'prettier'],
  rules: {
    // prettier rules
    'prettier/prettier': 'error',
    'no-console': 'off',
    'no-unused-vars': ['error', { varsIgnorePattern: '_[a-zA-Z0-9]+' }],
  },
  env: {
    jest: true,
    es6: true,
    node: true,
  },
}
