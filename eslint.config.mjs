// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'vue/no-multiple-template-root': 'off',
    'vue/max-attributes-per-line': ['error', { singleline: 3 }],
    // Add stylistic rules here
    'comma-dangle': ['warn', 'always-multiline'],
    'quotes': ['warn', 'single'],
    // Add more stylistic rules as needed
    'indent': ['error', 2],
    'semi': ['error', 'always'],
    'brace-style': ['error', '1tbs'],
  },
})
