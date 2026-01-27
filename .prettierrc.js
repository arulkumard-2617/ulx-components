module.exports = {
    singleQuote: true,
    trailingComma: 'none',
    printWidth: 100,
    semi: true,
    tabWidth: 2,
    useTabs: true,
    bracketSpacing: true,
    plugins: ['prettier-plugin-ember-template-tag'],
    overrides: [
        {
            files: ['*.hbs', '*.json', '.prettierrc'],
            options: {
                singleQuote: false,
            },
        },
        {
            files: ['*.gjs'],
            options: {
                singleQuote: false,
            },
        },
    ],
};
