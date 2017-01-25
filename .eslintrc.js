module.exports = {
  "parser": "babel-eslint",
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "plugins": [
    "babel", "react"
  ],
  "globals": {
    "ReactDOM": true,
    "cookie": true,
    "expect": true,
    "jsdom": true,
    "global": true
  },
  "env": {
    "mocha": true,
    "node": true,
    "browser": true
  },
  "rules": {
    "eol-last": 2,
    "semi": [2, "always"],
    "semi-spacing": [2, { "before": false, "after": true }],
    "space-before-function-paren": [2, "never"],
    "quotes": [2, "single", "avoid-escape"],
    "babel/new-cap": 1,
    "babel/object-curly-spacing": 1,
    "object-shorthand": 1,
    "babel/no-await-in-loop": 1,
    "comma-dangle": 1,
    // react rules
    "jsx-quotes": 2,
    "react/no-danger": 1,
    "react/jsx-boolean-value": 2,
    "react/jsx-key": 2,
    "react/jsx-equals-spacing": [1, "never"],
    "react/prefer-stateless-function": 2,
    "react/sort-comp": [1, {
      "order": [
        "lifecycle",
        "everything-else",
        "render"
      ],
      "groups": {
        "rendering": [
          "/^render.+$/",
          "render"
        ]
      }
    }],
    "react/no-string-refs": 2,
    "react/no-deprecated": 2,
    "react/self-closing-comp": 1,
    "react/no-find-dom-node": 1
  }
};
