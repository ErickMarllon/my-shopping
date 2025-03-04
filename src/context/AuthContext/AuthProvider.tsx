import { useMemo, useState } from "react";
import { IAuthAuthProviderProps } from "../types/AuthTypes";
import { AuthContext } from "./AuthContext";

function AuthProvider({ children }: IAuthAuthProviderProps) {
  const [user, setUser] = useState<string | null>(null);

  const contextValue = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user, setUser]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export { AuthProvider };
