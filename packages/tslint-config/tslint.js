module.exports = {
  defaultSeverity: 'error',
  extends: [
    'tslint-config-airbnb'
  ],
  jsRules: {},
  rules: {
    align: false,
    'max-line-length': {
      options: {
        limit: 120,
        // workaround, because auto-format does not respect line limit for imports and exports
        'ignore-pattern': '^import |^export {(.*?)}'
      }
    },
    'no-consecutive-blank-lines': true,
    'no-irregular-whitespace': true,
    'trailing-comma': false,
    'no-boolean-literal-compare': false,
    'strict-boolean-expressions': false,
    'variable-name': [
      true,
      'ban-keywords',
      'check-format',
      'allow-pascal-case',
      'allow-leading-underscore'
    ]
  },
  rulesDirectory: []
};