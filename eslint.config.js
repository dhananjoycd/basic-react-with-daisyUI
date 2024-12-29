import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        require: "readonly", // Adding require to globals
      },
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      //for react/prop-types and react/jsx-key
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      // for react-hooks/rules-of-hooks
      ...reactHooks.configs.recommended.rules,

      // React Rules
      "react/jsx-no-target-blank": "warn", // Prevent security issues with links
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-console": "warn", // Discourage console logs in production
      "react/prop-types": "error", // Enforce PropTypes usage
      "react/jsx-boolean-value": ["warn", "always"], // Enforces consistency in boolean props
      "react/jsx-no-undef": "error", // Prevents undefined variables in JSX
      "react/jsx-pascal-case": "warn", // Ensures components follow PascalCase naming convention
    },
  },
];
