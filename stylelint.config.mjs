export default {
  extends: ['stylelint-config-standard'],
  ignoreFiles: ['*.min.css', '*.min.js', '*.svg', '/dist/'],
  rules: {
    'at-rule-no-vendor-prefix': null,
    'declaration-property-value-no-unknown': null,
    'function-no-unknown': null,
    'no-descending-specificity': null,
    'no-invalid-position-at-import-rule': null,
    'property-no-vendor-prefix': null,
    'selector-class-pattern': '^[a-z][a-z0-9\\-]*[a-z0-9]$',
    'font-family-no-missing-generic-family-keyword': null,
  },
};
