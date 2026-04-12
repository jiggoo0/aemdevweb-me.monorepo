/** @type {import('eslint').Linter.Config} */
// Import shared configs from @repo/eslint-config
// Use require for CommonJS compatibility as .js files are now treated as CommonJS
const baseConfig = require("@repo/eslint-config"); // Assumes base.js is the default export
const nextJsConfig = require("@repo/eslint-config/nextjs"); // Assumes nextjs.js is the default export

module.exports = [
  // Spread the shared configurations directly
  ...baseConfig,
  ...nextJsConfig,
  // Add any app-specific overrides or new rules here if needed
];
