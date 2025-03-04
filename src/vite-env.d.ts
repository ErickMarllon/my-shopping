/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_PORT: string;
  readonly VITE_APP_PREFIX: string;
  readonly VITE_APP_URL: string;
  readonly VITE_API_URL: string;
  readonly VITE_API_URL_PREFIX: string;
  readonly VITE_APP_USE_MOCK: string;
  readonly VITE_ENCRYPTION_SECRET_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
