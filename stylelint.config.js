module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-css-modules'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'color-function-notation': 'legacy',
    'alpha-value-notation': null
  }
}
