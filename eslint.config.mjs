import js from "@eslint/js";
import ts from "typescript-eslint";
import onlyWarn from "eslint-plugin-only-warn";
import globals from "globals";

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "only-warn": onlyWarn,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-require-imports": "off", // Allow for tailwind/next configs
    },
  },
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/dist/**",
      "**/build/**",
      "**/.turbo/**",
      "**/store/**",
      "**/docs/**",
      "**/scripts/*.ts",
      "**/public/**",
      "**/*.bak",
      "**/*.tmp",
      "**/.vercel/**",
      "pnpm-lock.yaml",
      "**/.eslintrc.cjs",
    ],
  },
);
