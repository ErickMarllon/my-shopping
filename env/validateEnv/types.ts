import { z } from "zod";
import { envSchema } from "./envSchema";

export type EnvVars = z.infer<typeof envSchema>;
