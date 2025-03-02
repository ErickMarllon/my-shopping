import axios, { AxiosError } from "axios";
import { LocalStorageService } from "../localStorageService";
import { AppError } from "@/errors/appError/AppError";
import { AuthService } from "../authService";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  const tokens = LocalStorageService.getAuthTokens();

  const configUpdated = config;

  if (tokens?.accessToken && configUpdated.headers) {
    configUpdated.headers.Authorization = `Bearer ${tokens.accessToken}`;

    if (!import.meta.env.VITE_APP_FORCE_ORIGIN) {
      configUpdated.headers["force-origin"] =
        import.meta.env.VITE_APP_FORCE_ORIGIN;
    }
  }

  return configUpdated;
});

api.interceptors.response.use(
  (success) => {
    return success;
  },
  async (error: AxiosError) => {
    const config = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      config?.url !== "/auth/refresh"
    ) {
      try {
        const tokensStorage = LocalStorageService.getAuthTokens();

        if (!tokensStorage?.refreshToken) {
          throw new AppError("Refresh Token não encontrado!");
        }

        const response = await AuthService.refreshToken(
          tokensStorage.refreshToken
        );

        LocalStorageService.setAuthTokens({
          ...tokensStorage,
          accessToken: response.data.access_token,
        });
        if (config) {
          return api(config);
        }
      } catch (error) {
        if (error) {
          AuthService.logout();
        }
      }
    }

    return Promise.reject(error);
  }
);

export { api };
