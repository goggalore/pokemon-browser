module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@nuxt/eslint-config',
  ],
  rules: {
    // override/add rules settings here:
    'indent': ['error', 2],
    'quotes': [2, 'single', { 'avoidEscape': true }],
    'object-curly-spacing': [ 'error', 'always', { 'objectsInObjects': false }],
    'array-bracket-spacing': [ 'error', 'always', { 'objectsInArrays': false, 'arraysInArrays': false }],
    'semi': ['error', 'never'],
    'no-unexpected-multiline': ['error']
  }
}