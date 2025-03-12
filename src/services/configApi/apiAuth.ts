import axios, { AxiosError } from "axios";
import { LocalStorageService } from "../localStorageService";
import { ICreateSessionParams } from "../authService/types";
import { AppError } from "@/errors/appError/AppError";
import { AuthService } from "../authService";
import { ITokens } from "@/types";

const apiAuth = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/auth`,
});

apiAuth.interceptors.request.use((config) => {
  const tokens = LocalStorageService.getAuthTokens();
  const configUpdated = config;

  if (tokens?.accessToken && configUpdated.headers) {
    configUpdated.headers.Authorization = `Bearer ${tokens.accessToken}`;
  }

  return configUpdated;
});

apiAuth.interceptors.response.use(
  (success) => {
    const { config, data } = success;

    if (config.url?.includes("/auth/login") && config.method === "post") {
      const { accessToken, refreshToken } = data as ITokens;
      LocalStorageService.setAuthTokens({
        accessToken,
        refreshToken,
      });

      const requestBody = JSON.parse(config.data) as ICreateSessionParams;

      LocalStorageService.setUser({
        email: requestBody.email,
      });

      console.log();
    }

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
          return apiAuth(config);
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

export { apiAuth };
