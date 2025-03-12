import { PaletteMode, Shadows } from "@mui/material";
import { defaultTheme } from "./defaultTheme";

export const customShadows: Shadows = [...defaultTheme.shadows];
// const mode = defaultTheme.palette.mode;

export const getShadows = (mode: PaletteMode): Shadows => {
  customShadows[1] =
    mode === "dark"
      ? "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px"
      : "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px";

  customShadows[4] =
    "0px 5px 15px rgba(9, 11, 17, 0.05), 0px 15px 35px -5px rgba(19, 23, 32, 0.05)";

  return customShadows;
};
