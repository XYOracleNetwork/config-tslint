const path = require('path');

module.exports = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "extends": ["tslint-config-airbnb", "tslint-react"],
  "rules": {
    "no-inferrable-types": [true, "ignore-params"],
    "trailing-comma": false,
    "no-increment-decrement": false,
    "semicolon": [true, "never"],
    "ordered-imports": false,
    "import-name": false,
    "object-shorthand-properties-first": false,
    "align": false,
    "max-line-length": [true, {"limit": 180, "ignore-pattern": "^import |^export {(.*?)}"}],
    "object-literal-sort-keys": false,
    "no-implicit-dependencies": [true, "dev"],
    "interface-name":false,
    "no-bitwise": false,
    "quotemark": [true, "single", "avoid-escape", "avoid-template"],
    "no-console": false,
    "function-name": false,
  },
};