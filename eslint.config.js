import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintConfigReactHooks from "eslint-plugin-react-hooks";
import eslintConfigImport from "eslint-plugin-import";
import eslintConfigTypescript from "@typescript-eslint/eslint-plugin";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "module" } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,

  {
    plugins: {
      "react-hooks": eslintConfigReactHooks,
      import: eslintConfigImport,
      "@typescript-eslint": eslintConfigTypescript,
    },
    rules: {
      // Regras relacionadas ao React
      "react/jsx-props-no-spreading": "off", // Desativa a regra que proíbe a propagação de props em JSX.
      "react/prop-types": "off", // Desativa a verificação de prop-types em componentes React.
      "react/react-in-jsx-scope": "off", // Desativa a necessidade de importar React em arquivos JSX.
      "react/jsx-filename-extension": "off", // Desativa a restrição de extensão de arquivo para JSX.
      "react/require-default-props": "error", // Desativa a exigência de props padrão em componentes React.

      // Regras relacionadas a importações
      "import/no-unresolved": "off", // Desativa a verificação de módulos não resolvidos.
      "import/extensions": "off", // Desativa a exigência de extensões de arquivo em importações.
      "import/prefer-default-export": "off", // Desativa a preferência por exportações padrão.
      "import/no-extraneous-dependencies": "off", // Desativa a verificação de dependências extrínsecas.
      "import/order": "off", // Desativa a imposição de ordem de importações.

      // Regras relacionadas a hooks do React
      "react-hooks/rules-of-hooks": "error", // Ativa a verificação de regras de hooks do React, como chamar hooks apenas no nível superior.
      "react-hooks/exhaustive-deps": "warn", // Emite um aviso para dependências de hooks exaustivas.

      // Outras regras
      "no-alert": "off", // Desativa a proibição de uso de alertas.
      "no-shadow": "off", // Desativa a proibição de variáveis sombreadas.
      "no-undef": "off",

      // Regras específicas do TypeScript
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" }, // Ativa a verificação de variáveis não utilizadas, ignorando aquelas que começam com "_".
      ],

      // Configuração correta para no-restricted-exports
      "no-restricted-exports": [
        "error",
        // Garante que qualquer violação dessa regra seja tratada como um erro.
        {
          restrictDefaultExports: {
            direct: true,
            // Impede a exportação padrão direta de variáveis ou funções.
            named: true,
            // Impede a exportação de uma variável ou função como exportação nomeada, de forma que a exportação padrão seja evitada.
            defaultFrom: true,
            // Impede a importação de default de outros módulos.
          },
        },
      ],
      "no-restricted-syntax": [
        "error",
        {
          selector:
            "VariableDeclaration[kind='const'] > VariableDeclarator > ArrowFunctionExpression",
          message:
            "Não é permitido usar 'const' para definir funções. Use 'function' em PascalCase.",
        },
      ],

      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "function",
          format: ["camelCase", "PascalCase"],
        },
        {
          selector: "variableLike",
          format: ["camelCase"],
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
        {
          selector: "enumMember",
          format: ["PascalCase"],
        },
      ],
    },

    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        alias: {
          map: [["@src", "./src"]],
          extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".scss"],
        },
      },
    },

    ignores: [
      "eslint*",
      "**/temp.js",
      "config/*",
      ".vscode",
      "plopfile.js",
      "vite.config.ts",
    ],
  },
];
