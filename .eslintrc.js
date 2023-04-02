module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        indent: [2, 4],

        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/jsx-filename-extension': [2, { extensions: ['tsx', '.jsx'] }],
        'react/function-component-definition': [
            2,
            { namedComponents: 'arrow-function' },
        ],

        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'import/order': [
            'error',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                    'object',
                    'type',
                ],
                'newlines-between': 'always',
            },
        ],

        'linebreak-style': ['warn', 'windows'],
        'i18next/no-literal-string': ['error', { markupOnly: true }],
        'max-len': ['error', { ignoreComments: true }],

        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',

        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
    },
    globals: {
        isDev: true,
    },
};
