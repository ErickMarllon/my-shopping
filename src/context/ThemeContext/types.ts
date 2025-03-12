import { useColorScheme } from "@mui/material";

export enum ThemeTypes {
  DARK = "dark",
  LIGHT = "light",
  SYSTEM = "system",
}

export interface IThemeContextProps extends ReturnType<typeof useColorScheme> {
  toggleColorMode: () => void;
}
