module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "@vue/standard",
    "eslint:recommended"
  ],
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2020
  },
  rules: {
    "indent": ["warn", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
    "semi": ["error", "never"],
    "no-nested-ternary": "error",
    "no-unneeded-ternary": "error",
    "no-multiple-empty-lines": ["error", { "max": 2 }],
    "yoda": "error",
    "comma-dangle": ["error", "always-multiline"],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
}
