import { useMemo, useState } from "react";
import { IAuthAuthProviderProps } from "../types/AuthTypes";
import { AuthContext } from "./AuthContext";

function AuthProvider({ children }: IAuthAuthProviderProps) {
  const [user, setUser] = useState<string | null>(null);
  const [showModalAuth, setShowModalAuth] = useState<boolean>(false);

  const contextValue = useMemo(
    () => ({
      user,
      setUser,
      showModalAuth,
      setShowModalAuth,
    }),
    [user, setUser, showModalAuth, setShowModalAuth]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export { AuthProvider };
