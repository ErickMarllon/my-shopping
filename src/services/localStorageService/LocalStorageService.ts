import {
  KEY_AUTH_TOKENS,
  KEY_IMAGES,
  KEY_MENUS,
  KEY_MODULES,
  KEY_PERMISSIONS,
  KEY_PROVIDER,
  KEY_THEME,
  KEY_USER,
} from "./keys";
import { ISetAuthTokensParams, ITokens } from "./types";
import { IUser } from "./types/IUser";

class LocalStorageService {
  public static setAuthTokens({
    accessToken,
    refreshToken,
  }: ISetAuthTokensParams): void {
    localStorage.setItem(
      KEY_AUTH_TOKENS,
      JSON.stringify({
        accessToken,
        refreshToken,
      })
    );
  }

  public static getAuthTokens(): ITokens | null {
    const tokens = localStorage.getItem(KEY_AUTH_TOKENS);

    if (tokens) {
      return JSON.parse(tokens) as ITokens;
    }

    return null;
  }

  public static removeAuthTokens(): void {
    localStorage.removeItem(KEY_AUTH_TOKENS);
  }

  public static setUser(user: Partial<IUser>): void {
    localStorage.setItem(
      KEY_USER,
      JSON.stringify({
        ...user,
      })
    );
  }

  public static getUser(): IUser | null {
    const tokens = localStorage.getItem(KEY_USER);

    if (tokens) {
      return JSON.parse(tokens) as IUser;
    }

    return null;
  }

  public static removeUser(): void {
    localStorage.removeItem(KEY_USER);
  }

  //   public static setModules({ modules }: ISideBarModules): void {
  //     localStorage.setItem(
  //       KEY_MODULES,
  //       JSON.stringify({
  //         modules,
  //       })
  //     );
  //   }

  //   public static getModules(): ISideBarModules | null {
  //     const modules = localStorage.getItem(KEY_MODULES);

  //     if (modules) {
  //       const moduleParsed = JSON.parse(modules);
  //       return moduleParsed;
  //     }
  //     return null;
  //   }

  //   public static removeModules(): void {
  //     localStorage.removeItem(KEY_MODULES);
  //   }

  //   public static getTheme() {
  //     const theme = localStorage.getItem(KEY_THEME);

  //     if (theme) {
  //       const themeParsed = JSON.parse(theme);

  //       return themeParsed;
  //     }
  //     return null;
  //   }

  //   public static setTheme(theme: any) {
  //     localStorage.setItem(KEY_THEME, JSON.stringify(theme));
  //   }

  //   public static setImages(images: any) {
  //     localStorage.setItem(KEY_IMAGES, JSON.stringify(images));
  //   }

  //   public static getImages() {
  //     const images = localStorage.getItem(KEY_IMAGES);

  //     if (images) {
  //       const imagesParsed = JSON.parse(images);

  //       return imagesParsed;
  //     }
  //     return null;
  //   }

  //   public static setProvider(provider: IProvider) {
  //     localStorage.setItem(KEY_PROVIDER, JSON.stringify(provider));
  //   }

  //   public static getProvider() {
  //     const provider = localStorage.getItem(KEY_PROVIDER);

  //     if (provider) {
  //       return JSON.parse(provider) as IProvider;
  //     }
  //     return null;
  //   }

  //   public static setPermissions(permissions: IPermissions) {
  //     localStorage.setItem(KEY_PERMISSIONS, JSON.stringify(permissions));
  //   }

  //   public static getPermissions(): IPermissions | null {
  //     const permissions = localStorage.getItem(KEY_PERMISSIONS);

  //     if (permissions) {
  //       const permissionsParsed: IPermissions = JSON.parse(permissions);

  //       return permissionsParsed;
  //     }
  //     return null;
  //   }

  //   public static getMenus(module: "MAR"): IMenu | null {
  //     const menus = localStorage.getItem(KEY_MENUS);
  //     if (menus) {
  //       const menuParsed = JSON.parse(menus);
  //       const menu = menuParsed?.menus.filter(
  //         (menu: any) => menu.key === module
  //       )[0];

  //       return menu;
  //     }
  //     return null;
  //   }

  public static cleanStorage() {
    localStorage.removeItem(KEY_USER);
    localStorage.removeItem(KEY_PROVIDER);
    localStorage.removeItem(KEY_IMAGES);
    localStorage.removeItem(KEY_THEME);
    localStorage.removeItem(KEY_MODULES);
    localStorage.removeItem(KEY_MENUS);
    localStorage.removeItem(KEY_AUTH_TOKENS);
    localStorage.removeItem(KEY_PERMISSIONS);
  }
}

export { LocalStorageService };
