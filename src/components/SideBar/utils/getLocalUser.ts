import { LocalStorageService } from "@/services/localStorageService";
import { SessionStorageService } from "@/services/sessionStorageService";
import { IUser } from "@/types";

const getLocalUser = (): IUser | null => {
  return LocalStorageService.getUser() ?? SessionStorageService.getUser();
};

export { getLocalUser };
