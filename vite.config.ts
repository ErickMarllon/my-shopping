import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, path.resolve(__dirname, "env"), "");
  process.env = { ...process.env, ...env };
  const APP_URL = process.env.VITE_APP_URL;
  const APP_PREFIX = process.env.VITE_APP_PREFIX;
  const PORT = Number(process.env.VITE_APP_PORT);

  const handleViteBase = () => {
    if (command === "serve") {
      return APP_PREFIX;
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
