import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import { z } from "zod";

const envSchema = z.object({
  VITE_APP_PORT: z.string().transform((str) => parseInt(str, 10)),
  VITE_APP_PREFIX: z.string().min(1),
  VITE_APP_URL: z.string().url(),
  VITE_API_URL: z.string().url(),
  VITE_API_URL_PREFIX: z.string(),
  VITE_APP_USE_MOCK: z.string().transform((str) => str === "true"),
});

export type EnvVars = z.infer<typeof envSchema>;

function formatZodErrors(error: z.ZodError): string {
  const errors = error.errors.map((err) => {
    const path = err.path.join(".");
    return `  - ${path}: ${err.message}`;
  });

  return ["Invalid environment variables:", ...errors].join("\n");
}

function validateEnv(env: Record<string, string>): EnvVars {
  const result = envSchema.safeParse(env);

  if (!result.success) {
    const formattedErrors = formatZodErrors(result.error);
    throw new Error(formattedErrors);
  }

  return result.data;
}

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, path.resolve(__dirname, "env"), "VITE");
  validateEnv(env);
  process.env = { ...process.env, ...env };
  const APP_URL = process.env.VITE_APP_URL;
  const APP_PREFIX = process.env.VITE_APP_PREFIX;
  const PORT = Number(process.env.VITE_APP_PORT);

  const handleViteBase = () => {
    if (command === "serve") {
      return "/";
    }

    if (mode === "dev" || mode === "loc") {
      return APP_URL;
    }

    return APP_PREFIX;
  };

  return {
    envDir: "./env",
    plugins: [react()],
    server: { port: PORT },
    base: handleViteBase(),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
