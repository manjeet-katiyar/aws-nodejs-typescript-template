module.exports = {
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        "ecmaVersion": 2018,
        'project': './tsconfig.json',
        'tsconfigRootDir': './'
    },
    'extends': [
        'plugin:@typescript-eslint/recommended'
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    'plugins': [
        '@typescript-eslint'
    ],
    'settings': {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {},
        },
    },
    'rules': {
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/member-delimiter-style':
            ['error', {
                'multiline': {
                    'delimiter': 'none',
                    'requireLast': false
                },
                'singleline': {
                    'delimiter': 'comma',
                    'requireLast': false
                }
            }],
        '@typescript-eslint/indent': 'off',
        'no-unused-vars': 'off',
        'node/no-unsupported-features/es-syntax': 'off',
        "indent": ["error", 4],
        "@typescript-eslint/camelcase": [0],
        "camelcase": [0],
    }
}