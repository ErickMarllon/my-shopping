import { createTheme, PaletteMode } from "@mui/material";
import { getDesignTokens } from "./theme";

export const createAppTheme = (mode: PaletteMode) => {
  return createTheme(getDesignTokens(mode));
};
