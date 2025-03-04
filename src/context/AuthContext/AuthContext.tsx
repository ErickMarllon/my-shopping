import { createContext } from "react";
import { IAuthContextProps } from "../types/AuthTypes";

const AuthContext = createContext<IAuthContextProps | undefined>(undefined);

export { AuthContext };
