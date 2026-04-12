// Import necessary configs and plugins using require
const parser = require("@typescript-eslint/parser"); // Need to ensure parser is also imported and used
const reactPlugin = require("eslint-plugin-react");
const pluginReactHooks = require("eslint-plugin-react-hooks");
const pluginNext = require("@next/eslint-plugin-next");
const globals = require("globals");

// Import the base configuration from the shared package.
// Assumes base.js exports an array of configurations.
const baseConfig = require("./base.js");

/**
 * ESLint configuration for Next.js projects.
 * Integrates with base config, React, React Hooks, Next.js plugin, and TS config.
 * Uses Flat Config format.
 *
 * @type {import("eslint").Linter.Config[]}
 */
module.exports = [
  // Start with the base configuration array
  ...baseConfig,

  // Add Next.js specific configurations
  // For Flat Config, plugins are usually defined once at the top level or within specific config objects.
  // The `pluginNext.configs.recommended` and `pluginNext.configs["core-web-vitals"]` should be spread as config objects.

  // Next.js recommended rules
  pluginNext.configs.recommended,

  // Next.js core-web-vitals rules
  pluginNext.configs["core-web-vitals"],

  // React recommended rules using Flat Config format
  // Ensure React plugin is loaded.
  {
    plugins: {
      react: reactPlugin,
      "react-hooks": pluginReactHooks,
    },
    languageOptions: {
      parser: parser, // Use the TS parser for .tsx files
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        // Use project: true to automatically find tsconfig.json
        project: true,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // React rules
      "react/react-in-jsx-scope": "off", // Handled by modern React/Next.js
      "react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }], // Allow .tsx and .jsx

      // React Hooks rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },

  // Apply overrides or specific rules for .ts/.tsx files if necessary
  // This section can be simplified by integrating TS config into the languageOptions section above,
  // or by using `tseslint.configs.recommended` which is already in base.js.
  // If further TS-specific rules are needed here, they can be added.
  // For now, relying on base.js and the languageOptions should be sufficient.

  // Files to ignore
  // Ensure common Next.js build/cache directories are ignored
  {
    ignores: ["dist/**", ".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
];
