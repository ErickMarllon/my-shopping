export default function (plop) {
  plop.setGenerator("component or view", {
    description: "Create a new component or view",
    prompts: [
      {
        type: "list",
        name: "directory",
        message: "Criar components ou views?",
        choices: [
          {
            name: "Components",
            value: "components",
          },
          {
            name: "Views",
            value: "views",
          },
        ],
      },
      {
        type: "input",
        name: "name",
        message:
          "Qual o nome do arquivo? (Separe palavras com _ , ex: my_component)",

        when: (answers) =>
          answers.directory === "components" || answers.directory === "views",
        validate: (value) => {
          if (!value || value.trim() === "") {
            return "O nome da pasta é obrigatório";
          }
          if (!/^[a-zA-Z\s_]+$/.test(value)) {
            return "O nome deve conter apenas letras, números e o caractere '_'.";
          }
          return true;
        },
      },
      {
        type: "confirm",
        name: "createInterface",
        message: "Criar interface?",
      },
    ],
    actions(data) {
      const basePath = `src/${data.directory}/{{pascalCase name}}`;

      const actions = [];
      if (data.directory === "components" || data.directory === "views") {
        actions.push({
          type: "add",
          path: `${basePath}/{{pascalCase name}}.tsx`,
          templateFile: "plop-templates/component.hbs",
        });

        actions.push({
          type: "add",
          path: `${basePath}/types.ts`,
          templateFile: "plop-templates/types.hbs",
        });

        actions.push({
          type: "add",
          path: `${basePath}/styles.scss`,
          templateFile: "plop-templates/styles.hbs",
        });

        actions.push({
          type: "add",
          path: `${basePath}/index.ts`,
          templateFile: "plop-templates/index.hbs",
        });
      }

      return actions;
    },
  });

  plop.setHelper("pascalCase", function (text) {
    return text
      .trim()
      .split(/[\s_]+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("");
  });
}
