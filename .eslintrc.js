module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:playwright/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: `@typescript-eslint/parser`,
  plugins: [`@typescript-eslint`],
  root: true,
  ignorePatterns: ['./playwright.config.ts'],
  rules: {
    'eol-last': ['error', 'always'],
  },
}
