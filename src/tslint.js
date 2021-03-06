module.exports = {
  "$schema": "http://json.schemastore.org/tslint",
  "extends": ["tslint-config-airbnb", "tslint-react"],
  "rules": {
    "no-inferrable-types": [true, "ignore-params"],
    "trailing-comma": false,
    "no-increment-decrement": false,
    "semicolon": [true, "never"],
    "ordered-imports": false,
    "object-shorthand-properties-first": true,
    "max-line-length": [true, {"limit": 180, "ignore-pattern": "^import |^export {(.*?)}"}],
    "object-literal-sort-keys": false,
    "no-implicit-dependencies": [true, "dev", "optional"],
    "interface-name":false,
    "no-bitwise": false,
    "no-console": false,
    "function-name": false,
    "array-type": [true, "array-simple"],
    "quotemark": [true, "single", "backtick", "avoid-escape", "avoid-template"],
    "interface-name": [true, "always-prefix"],
    "align": [true, "parameters", "arguments", "members", "elements", "statements"],
    "space-before-function-paren": [true, "never"]
  },
};