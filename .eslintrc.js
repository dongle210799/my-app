module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    "no-console": [2, { allow: ["info", "warn", "error"] }],
    semi: "error",
    quotes: [2, "single", { avoidEscape: true }],

  }
}
