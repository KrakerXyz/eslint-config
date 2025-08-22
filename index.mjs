import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import stylistic from '@stylistic/eslint-plugin';

/** @type {import('eslint').Linter.Config[]} */
export default [
    // 1. Global ignores
    { ignores: ["**/node_modules/", "**/dist/", '.git/'] },

    // 2. Base recommended configurations
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs["flat/strongly-recommended"],

    // 3. Your custom configuration, overrides, and stylistic rules
    {
        files: ["**/*.{js,mjs,cjs,ts,vue}"],

        // Register the stylistic plugin under a single alias.
        // It will automatically apply the correct rules for JS/TS files.
        plugins: {
            '@stylistic': stylistic
        },

        languageOptions: {
            parserOptions: {
                parser: tseslint.parser
            },
            globals: globals.browser
        },

        // Add all your custom rule configurations here.
        // This will cleanly override the base configs.
        rules: {
            // --- Non-Stylistic Rules ---
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

            // --- Vue Rules ---
            'vue/html-indent': ['error', 4],
            'vue/html-self-closing': 'off',
            'vue/max-attributes-per-line': ['error', {
                'singleline': { 'max': 3 },
                'multiline': { 'max': 1 }
            }],
            'vue/multi-word-component-names': 'off',
            'vue/singleline-html-element-content-newline': ['error', {
                'externalIgnores': ['option']
            }],

            // --- Stylistic Rules (with corrected names) ---
            '@stylistic/indent': ['error', 4, { SwitchCase: 1 }],
            '@stylistic/member-delimiter-style': [
                // use comma for things like interface member delimiters
                'error',
                {
                    'multiline': { 'delimiter': 'comma' },
                    'singleline': { 'delimiter': 'comma' }
                }
            ]
        }
    }
];
