module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 100,
  semi: true,
  overrides: [
    {
      files: '*.{js,gjs,ts,gts}',
      options: {
        singleQuote: true,
      },
    },
  ],
  plugins: ['prettier-plugin-ember-template-tag'],
};

