module.exports = {
  extends: ['prettier'],
  overrides: [
    {
      files: '*.vue',
      extends: [
        'plugin:vue/vue3-recommended'
      ]
    },
    {
      files: ['*.vue', '*.js'],
      extends: ['plugin:vue/essential', '@vue/standard'],
      rules: {
        'vue/multi-word-component-names': 0,
        'vue/max-attributes-per-line': [
          2,
          {
            singleline: 20,
            multiline: 1
          }
        ],
        'vue/require-default-prop': 0,
        'vue/no-multiple-template-root': 0,
        'vue/no-lone-template': 0,
        'vue/no-v-model-argument': 0,
        'vue/one-component-per-file': 0
      }
    }
  ]
}
