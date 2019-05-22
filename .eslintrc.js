module.exports = {
  extends: [
    'airbnb',
    'prettier',
  ],
  plugins: ['prettier'],
  rules: {
    // prettier rules
    'prettier/prettier': 'error',
    'no-console': 'off'
  },
  env: {
    es6: true,
    node: true,
  }
}
