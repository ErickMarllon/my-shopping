import { z } from "zod";
import { envSchema } from "./envSchema";
import { EnvVars } from "./types";

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

export { validateEnv };
