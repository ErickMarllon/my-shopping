import { AxiosResponse } from "axios";

import {
  KEY_RECOVERY_PASSWORD_DATA,
  KEY_RECOVERY_PASSWORD_UUID,
} from "../localStorageService/keys";
import { LocalStorageService } from "../localStorageService";
import { ILoginDTO } from "./dtos/ILoginDTO";
import { ISendEmailToRecoveryPasswordDTO } from "./dtos/ISendEmailToRecoveryPasswordDTO";

import {
  ICreateSessionParams,
  INewPasswordParams,
  IRecoveryPasswordData,
  ISendEmailToRecoveryPasswordParams,
  ITokenValidateRecoveryPasswordParams,
} from "./types";
import { IRefreshTokenDTO } from "./dtos/IRefreshTokenDTO";
import { api } from "../configApi/api";
import { apiAuth } from "../configApi/apiAuth";

class AuthService {
  public static async login({
    email,
    password,
  }: ICreateSessionParams): Promise<AxiosResponse<ILoginDTO>> {
    return await apiAuth.post<ILoginDTO>("/register", {
      email,
      password,
    });
  }

  public static async register({
    email,
    password,
  }: ICreateSessionParams): Promise<AxiosResponse<ILoginDTO>> {
    return await apiAuth.post<ILoginDTO>("/register", {
      picture: "https://example.com/profile.jpg",
      firstName: "teste",
      lastName: "teste",
      email,
      password,
    });
  }

  public static logout() {
    LocalStorageService.cleanStorage();
    window.location.href = "/module_auth/";
  }

  public static userAuthInformation() {
    const authTokens = LocalStorageService.getAuthTokens();
    const user = LocalStorageService.getUser();

    if (authTokens && user) {
      return {
        authTokens,
        user,
      };
    }

    return null;
  }

  public static async refreshToken(
    refreshToken: string
  ): Promise<AxiosResponse<IRefreshTokenDTO>> {
    return await apiAuth.post<IRefreshTokenDTO>("/auth/refresh_token", {
      refreshToken: refreshToken,
    });
  }

  public static async sendEmailToRecoveryPassword({
    email,
  }: ISendEmailToRecoveryPasswordParams): Promise<
    AxiosResponse<ISendEmailToRecoveryPasswordDTO>
  > {
    return await apiAuth.post<ISendEmailToRecoveryPasswordDTO>("/token/send", {
      destiny: email,
      platform: "email",
    });
  }

  public static readonly setRecoveryPasswordUuidToStorage = (
    uuid: string
  ): void => {
    localStorage.setItem(KEY_RECOVERY_PASSWORD_UUID, uuid);
  };

  public static readonly getRecoveryPasswordUuidFromStorage = ():
    | string
    | null => {
    const uuid = localStorage.getItem(KEY_RECOVERY_PASSWORD_UUID);
    return uuid ?? null;
  };

  public static readonly deleteRecoveryPasswordUuidFromStorage = (): void => {
    localStorage.removeItem(KEY_RECOVERY_PASSWORD_UUID);
  };

  public static async tokenValidateToRecoveryPassword({
    token,
    uuid,
  }: ITokenValidateRecoveryPasswordParams): Promise<AxiosResponse<void>> {
    return apiAuth.post<void>("/token/verify", {
      token,
      uuid,
    });
  }

  public static async setNewPassword({
    uuid,
    password,
    passwordConfirm,
  }: INewPasswordParams): Promise<AxiosResponse<void>> {
    return await apiAuth.put<void>(`/users/forgot/password/${uuid}`, {
      password,
      confirmPassword: passwordConfirm,
    });
  }

  public static verifyResponsibleData(
    uuid: string,
    token: string
  ): Promise<AxiosResponse> {
    return api.get(`/users/token/check/${uuid}/${token}`);
  }

  public static requestNewToken(email: string): Promise<AxiosResponse> {
    return api.post("users/token/send", {
      platform: "email",
      destiny: email,
    });
  }

  public static postResponsiblePassword({
    uuid,
    password,
    passwordConfirm,
  }: INewPasswordParams): Promise<AxiosResponse<void>> {
    return api.post<void>(`/users/${uuid}`, {
      password,
      confirmPassword: passwordConfirm,
    });
  }

  public static readonly setRecoveryPasswordDataToStorage = (
    data: IRecoveryPasswordData
  ): void => {
    localStorage.setItem(KEY_RECOVERY_PASSWORD_DATA, JSON.stringify(data));
  };

  public static readonly getRecoveryPasswordDataFromStorage =
    (): IRecoveryPasswordData | null => {
      const dataString = localStorage.getItem(KEY_RECOVERY_PASSWORD_DATA);

      return dataString
        ? (JSON.parse(dataString) as IRecoveryPasswordData)
        : null;
    };

  public static readonly deleteRecoveryPasswordDataFromStorage = () => {
    localStorage.removeItem(KEY_RECOVERY_PASSWORD_DATA);
  };
}

export { AuthService };
