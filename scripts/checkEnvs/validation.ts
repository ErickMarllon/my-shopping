import { z } from "zod";

const envSchema = z.object({
  VITE_PORT: z.string().transform((str) => parseInt(str, 10)),
  VITE_APP_PREFIX: z.string().min(1),
  VITE_APP_URL: z.string().url(),
  VITE_APP_BASEPATH: z.string().startsWith("/"),
  VITE_API_URL: z.string().url(),
  VITE_API_URL_PREFIX: z.string(),
  VITE_APP_USE_MOCK: z.string().transform((str) => str === "true"),
});

export type EnvVars = z.infer<typeof envSchema>;

export function validateEnv(env: Record<string, string>): EnvVars {
  const result = envSchema.safeParse(env);

  if (!result.success) {
    const formattedErrors = formatZodErrors(result.error);
    throw new Error(formattedErrors);
  }

  return result.data;
}

function formatZodErrors(error: z.ZodError): string {
  const errors = error.errors.map((err) => {
    const path = err.path.join(".");
    return `  - ${path}: ${err.message}`;
  });

  return ["Invalid environment variables:", ...errors].join("\n");
}
