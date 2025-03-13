import { LocalStorageService } from "@/services/localStorageService";
import { SessionStorageService } from "@/services/sessionStorageService";
import { ITokens } from "@/types";

const getLocalTokens = (): ITokens | null => {
  return (
    LocalStorageService.getAuthTokens() ?? SessionStorageService.getAuthTokens()
  );
};

export { getLocalTokens };
