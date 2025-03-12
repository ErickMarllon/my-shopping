import { createContext } from "react";
import { IThemeContextProps } from "./types";

const ThemeContext = createContext<IThemeContextProps | undefined>(undefined);

export { ThemeContext };
