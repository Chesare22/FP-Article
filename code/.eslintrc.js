/* eslint indent: ["error", 4] */
/* eslint quote-props: ["error", "always"]*/

module.exports = {
    "env": {
        "node": true,
        "es2021": true,
    },
    "extends": [ "eslint:recommended" ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    "rules": {
        "array-bracket-spacing": [ "error", "always" ],
        "array-element-newline": [ "error", "consistent" ],
        "semi": [ "error", "never" ],
        "array-bracket-newline": [ "error", { "multiline": true } ],
        "arrow-parens": "error",
        "arrow-spacing": "error",
        "brace-style": "error",
        "comma-spacing": "error",
        "computed-property-spacing": "error",
        "dot-location": [ "error", "property" ],
        "func-call-spacing": "error",
        "function-call-argument-newline": [ "error", "consistent" ],
        "arrow-body-style": "error",
        "space-in-parens": [ "error", "always" ],
        "object-curly-newline": [ "error", { "multiline": true } ],
        "object-curly-spacing": [ "error", "always" ],
        "object-property-newline": [ "error", { "allowAllPropertiesOnSameLine": true } ],
        "implicit-arrow-linebreak": "error",
        "indent": [ "error", 2 ],
        "key-spacing": "error",
        "keyword-spacing": "error",
        "no-multi-spaces": "error",
        "no-whitespace-before-property": "error",
        "operator-linebreak": [ "error", "before" ],
        "quotes": [ "error", "double" ],
        "rest-spread-spacing": "error",
        "space-before-blocks": "error",
        "space-before-function-paren": [ "error", "never" ],
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "template-curly-spacing": [ "error", "always" ],
        "curly": "error",
        "eqeqeq": "error",
        "no-floating-decimal": "error",
        "no-shadow": "error",
        "no-var": "error",
        "no-useless-computed-key": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "spaced-comment": "error",
        "comma-dangle": [ "error", "always-multiline" ],
        "quote-props": [ "error", "as-needed" ],
    },
}