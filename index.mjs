import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import stylisticTs from '@stylistic/eslint-plugin-ts'


/** @type {import('eslint').Linter.Config[]} */
export default [
    { ignores: ["**/node_modules/", "**/dist/", '.git/'] },
    {
        files: ["**/*.{js,mjs,cjs,ts,vue}"],
        plugins: {
            '@stylistic/ts': stylisticTs
        },
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser
            },
            globals: globals.browser
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.stylistic,
    ...pluginVue.configs["flat/strongly-recommended"],
    {
        rules: {
            '@/indent': [
                'error',
                4,
                {
                    SwitchCase: 1
                }
            ],

            '@stylistic/ts/member-delimiter-style': [
                // use comma for things like interface member delimiters
                'error',
                {
                    'multiline': {
                        'delimiter': 'comma'
                    },
                    'singleline': {
                        'delimiter': 'comma'
                    }
                }
            ],

            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-inferrable-types': 'off',
            // requires for (const item of items) instead of for (let i = 0; i < items.length; i++) when not using index
            '@typescript-eslint/prefer-for-of': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_', ignoreRestSiblings: true }
            ],
            '@typescript-eslint/consistent-generic-constructors': [
                // required const t: Map<string, string> = new Map<string, string>(); instead of just = new Map();
                'off'
            ],
            '@typescript-eslint/consistent-type-imports': [
                // Requires that imported things are properly marked as "type" when they're only used for typing
                'error',
                {
                    prefer: 'type-imports',
                    disallowTypeAnnotations: true,
                    fixStyle: 'inline-type-imports' // adds the "type" to the import statement
                }
            ],

            'vue/html-indent': [
                'error',
                4
            ],
            'vue/html-self-closing': [
                'off'
            ],
            'vue/max-attributes-per-line': ['error', {
                'singleline': {
                    'max': 3
                },
                'multiline': {
                    'max': 1
                }
            }],
            'vue/multi-word-component-names': [
                'off'
            ],
            'vue/singleline-html-element-content-newline': [
                'error',
                {
                    // Added option
                    'externalIgnores': ['option']
                }
            ]
        }
    }
];