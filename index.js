// eslint-disable-next-line no-undef
module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/stylistic',
        'plugin:vue/vue3-strongly-recommended'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
        'module': 'readonly',
        'require': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 'latest',
        'parser': '@typescript-eslint/parser',
        'sourceType': 'module'
    },
    'plugins': [
        'vue',
        '@typescript-eslint'
    ],
    'root': true,
    'rules': {

        'vue/html-button-has-type': [
            'error'
        ],

        'vue/eqeqeq': [
            'error'
        ],

        'vue/multi-word-component-names': [
            'off'
        ],

        'vue/require-default-prop': [
            //Seems like a good idea but when you have a default, it breaks the typings. Eg, even if I put { type: String, default: null }, it just shows the type as string.
            'off'
        ],

        'vue/mustache-interpolation-spacing': [
            'off'
        ],

        'vue/html-self-closing': [
            'off'
        ],

        'vue/html-indent': [
            'error',
            3
        ],

        'vue/attribute-hyphenation': [
            'error'
        ],

        'vue/no-multiple-template-root': [
            'off'
        ],

        'vue/no-v-model-argument': [
            'off'
        ],

        'vue/singleline-html-element-content-newline': [
            'error'
        ],

        'vue/component-definition-name-casing': [
            'error',
            'kebab-case'
        ],

        'vue/v-on-function-call': [
            //Enforce that we always used () in a parameter-less method call of a event handler. Eg @click="onClick()"
            'error',
            'always'
        ],

        'vue/no-useless-v-bind': [
            //Enforce that we do not use binding to bind to a constant. Eg, use prop="test" instead of :prop="'test'"
            'error'
        ],

        'vue/no-unused-refs': [
            //Do not allow ref="element" in the template if we're not using element
            //Turned off because it still reports an error when we're using it to capture the ref in a vm ref
            'off'
        ],

        'vue/no-unused-properties': [
            'error',
            {
                'groups': ['setup', 'data', 'methods', 'computed']
            }
        ],

        'vue/no-empty-component-block': [
            //Do not allow empty template, script or style blocks
            'error'
        ],

        'vue/max-attributes-per-line': ['error', {
            'singleline': {
                'max': 3
            },
            'multiline': {
                'max': 1
            }
        }],

        'vue/multiline-html-element-content-newline': [
            'error',
            {
                'ignoreWhenEmpty': true,
                'ignores': [],
                'allowEmptyLines': false
            }
        ],

        'vue/object-curly-spacing': [
            'error',
            'always'
        ],

        'vue/html-indent': [
            'error',
            4
        ],

        '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
                "allowExpressions": true // don't require return time for expressions which are usually used as inline functions
            }
        ],

        '@typescript-eslint/prefer-for-of': [
            // requires for (const item of items) instead of for (let i = 0; i < items.length; i++) when not using index
            'off'
        ],

        '@typescript-eslint/consistent-generic-constructors': [
            // required const t: Map<string, string> = new Map<string, string>(); instead of just = new Map();
            'off'
        ],

        '@typescript-eslint/explicit-module-boundary-types': [
            //https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
            'off'
        ],

        '@typescript-eslint/no-explicit-any': [
            'off'
        ],

        '@typescript-eslint/no-inferrable-types': [
            //Disables warning when we do something like 'const t: number = 0' where the type can be inferred
            'off'
        ],

        '@typescript-eslint/no-unused-vars': [
            'error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_', ignoreRestSiblings: true }
        ],

        '@typescript-eslint/no-non-null-assertion': [
            'off'
        ],

        '@typescript-eslint/no-empty-function': [
            // throws an error if we have foo() {} but this is more annoying than helpful
            'off'
        ],

        '@typescript-eslint/indent': [
            'error',
            4
        ],

        '@typescript-eslint/member-delimiter-style': [
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

        'object-curly-spacing': [
            'error',
            'always'
        ],

        'max-lines': [
            //I've never used this before but like the idea of it. Lets see how restrictive or helpful it is and then discuss it. Since vue files have html and code, I could easily see this being too restrictive
            //Actually, I think this might only look at .ts files base on vue having their own max-len (line length). Lets just see how it goes
            'error',
            {
                'max': 500
            }
        ],

        // This is just too annoying
        // 'complexity': [
        //     //https://eslint.org/docs/rules/complexity
        //     'error'
        // ],

        //Using indent in TS can cause issues like "TypeError: Cannot read properties of undefined (reading 'loc')". We turn this off and use the @typescript one instead
        'indent': 'off',

        // Gets in the way too often.
        // 'max-depth': [
        //     'error',
        //     3
        // ],

        'quotes': [
            'error',
            'single'
        ],

        'semi': [
            'error',
            'always'
        ]
    }
};