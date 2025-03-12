import { SessionStorageService } from "@/services/sessionStorageService";

export const hasPermission = (KEY: string): boolean => {
  const permissions = SessionStorageService.getPermissionsList();
  return permissions?.includes(KEY) ?? false;
};
