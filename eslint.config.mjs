// eslint.config.mjs
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    // Turn off conflicting rules
    'indent': 'off',
    '@stylistic/indent': ['error', 2],

    // Ensure consistent quotes
    'quotes': 'off',
    '@stylistic/quotes': ['error', 'single'],

    // Handle commas
    'comma-dangle': 'off',
    '@stylistic/comma-dangle': ['error', 'always-multiline'],

    // Other rules from your config
    'vue/no-multiple-template-root': 'off',
    'vue/max-attributes-per-line': ['error', { singleline: 3 }],
  },
})
