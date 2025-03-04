import { ReactNode } from "react";

interface IAuthContextProps {
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
  showModalAuth: boolean;
  setShowModalAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IAuthAuthProviderProps {
  children: ReactNode;
}

export type { IAuthContextProps, IAuthAuthProviderProps };
