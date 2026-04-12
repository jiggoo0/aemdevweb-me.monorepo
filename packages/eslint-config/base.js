// Shared ESLint configuration for the repository.
// [STRATEGY]: ESLint 9+ Flat Config Compliance
// [MAINTAINER]: AEMZA MACKS (Lead Architect)

const js = require("@eslint/js");
const eslintConfigPrettier = require("eslint-config-prettier");
const turboPlugin = require("eslint-plugin-turbo");
const tseslint = require("typescript-eslint");
const onlyWarn = require("eslint-plugin-only-warn");

module.exports = tseslint.config(
  // Base config
  js.configs.recommended,
  eslintConfigPrettier,

  // TypeScript configs using the new 'typescript-eslint' utility
  ...tseslint.configs.recommended,

  // Custom Rules & Plugins
  {
    plugins: {
      turbo: turboPlugin,
      "only-warn": onlyWarn,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },

  // Global Ignores
  {
    ignores: ["**/dist/**", "**/node_modules/**", "**/.next/**", "**/out/**", "**/build/**"],
  },
);
