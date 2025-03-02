import { z } from "zod";

const envSchema = z.object({
  VITE_APP_PORT: z.string().transform((str) => parseInt(str, 10)),
  VITE_APP_PREFIX: z.string().min(1),
  VITE_APP_URL: z.string().url(),
  VITE_API_URL: z.string().url(),
  VITE_API_URL_PREFIX: z.string(),
  VITE_APP_USE_MOCK: z.string().transform((str) => str === "true"),
});

export { envSchema };
