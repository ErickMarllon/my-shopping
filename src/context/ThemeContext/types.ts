import { PaletteMode } from "@mui/material";

export enum ThemeTypes {
  DARK = "dark",
  LIGHT = "light",
  SYSTEM = "system",
}

export interface IThemeContextProps {
  setMode: React.Dispatch<React.SetStateAction<PaletteMode>>;
  mode: PaletteMode;
  toggleColorMode: () => void;
}
