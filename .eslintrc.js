module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'standard'
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                '.eslintrc.{js,cjs}'
            ],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint',
        'react'
    ],
    rules: {
        indent: [
            'error',
            4
        ],
        'linebreak-style': 'off',
        quotes: [
            'error',
            'single'
        ],
        semi: [
            'error',
            'never'
        ],
        camelcase: 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'import/order': ['warn', { 'newlines-between': 'always' }],
        'no-multi-spaces': 'error',
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': ['error', 'never'],
        'no-trailing-spaces': 'error',
        'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
        'eol-last': ['error', 'always'],
        'no-tabs': 'off'

    }
}
