import js from "@eslint/js";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const nextPlugin = require("@next/eslint-plugin-next");
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");

/**
 * 🛠️ Specialist ESLint Flat Configuration
 * -------------------------------------------------------------------------
 * ปรับแต่งเพื่อความสมบูรณ์แบบ 100% (Zero-Error Commitment)
 * รองรับการทำงานร่วมกับ Next.js 16 และ TypeScript 5+
 */
export default [
  // 1. Global Ignores: ป้องกันการตรวจสอบไฟล์ระบบและไฟล์ที่ไม่ได้ใช้งาน
  {
    ignores: [
      "**/.*",
      ".next/**",
      "node_modules/**",
      "public/**",
      "dist/**",
      ".gemini/**",
    ],
  },

  // 2. Base Recommended Rules
  js.configs.recommended,

  // 3. Project Source Configuration
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    plugins: {
      "@next/next": nextPlugin,
      "@typescript-eslint": tsPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      // กำหนดค่า Global เพื่อป้องกัน no-undef error
      globals: {
        // React Global (For Next.js / React 19)
        React: "readonly",
        // Browser
        window: "readonly",
        document: "readonly",
        performance: "readonly",
        URL: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        console: "readonly",
        // Node.js
        process: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        module: "readonly",
        require: "readonly",
      },
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "error",
      "no-undef": "error",
      "no-empty": ["error", { allowEmptyCatch: true }],
    },
  },
];
