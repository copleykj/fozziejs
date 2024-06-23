import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {rules: {
    // allow explicit any
    "@typescript-eslint/no-explicit-any": "off",
  }},
  // ignores
  {ignores: [
    "node_modules",
    "dist",
    ".DS_Store",
    "*.log",
    "*.min.*",
    "*.dev.*",
    "*.map",
    "*.map.*",
    ".git",
  ]},
];
