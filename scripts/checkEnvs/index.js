import path from "path";
import { loadEnv } from "vite";
import { validateEnv } from "./validation";

const modes = ["dev", "loc", "hlg", "prod"];

async function checkEnvFiles() {
  let hasError = false;

  for (const mode of modes) {
    try {
      const env = loadEnv(mode, path.resolve(__dirname, "../env"), "VITE_");
      validateEnv(env);
      console.log(`✅ Environment variables for mode "${mode}" are valid`);
    } catch (error) {
      hasError = true;
      console.error(`❌ Error in ${mode} environment:`);
      console.error(error);
    }
  }

  if (hasError) {
    process.exit(1);
  }
}

checkEnvFiles();

// import { config } from "dotenv";
// import path from "path";

// config({ path: path.resolve(__dirname, "env/.env.dev") });

// const requiredEnvVars = [
//   { key: "VITE_APP_PORT", type: "number" },
//   { key: "VITE_APP_PREFIX", type: "string" },
//   { key: "VITE_APP_URL", type: "string" },
//   { key: "VITE_API_URL", type: "string" },
//   { key: "VITE_API_URL_PREFIX", type: "string" },
//   { key: "VITE_APP_USE_MOCK", type: "boolean" },
// ];

// const missingEnvVars = requiredEnvVars.filter(
//   (envVar) => !process.env[envVar.key]
// );
// const invalidTypeEnvVars = requiredEnvVars.filter((envVar) => {
//   const value = process.env[envVar.key];
//   if (envVar.type === "number") {
//     return isNaN(Number(value));
//   }
//   if (envVar.type === "boolean") {
//     return value !== "true" && value !== "false";
//   }
//   return typeof value !== envVar.type;
// });

// if (missingEnvVars.length > 0) {
//   console.error(
//     `As seguintes variáveis de ambiente estão faltando: ${missingEnvVars.map((envVar) => envVar.key).join(", ")}`
//   );
//   process.exit(1);
// }

// if (invalidTypeEnvVars.length > 0) {
//   console.error(
//     `As seguintes variáveis de ambiente têm tipos inválidos: ${invalidTypeEnvVars.map((envVar) => `${envVar.key} (esperado: ${envVar.type})`).join(", ")}`
//   );
//   process.exit(1);
// }

// console.log(
//   "Todas as variáveis de ambiente necessárias estão definidas e têm tipos válidos."
// );
