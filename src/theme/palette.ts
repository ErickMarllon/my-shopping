import { alpha, PaletteMode, PaletteOptions } from "@mui/material";
import { brand, gray, green, orange, red } from "./colors";

export const getPalette = (mode: PaletteMode): PaletteOptions =>
  ({
    mode,
    primary: {
      light: brand[200],
      main: brand[400],
      dark: brand[700],
      contrastText: brand[50],
      ...(mode === "dark" && {
        contrastText: brand[50],
        light: brand[300],
        main: brand[400],
        dark: brand[700],
      }),
    },
    info: {
      light: brand[100],
      main: brand[300],
      dark: brand[600],
      contrastText: gray[50],
      ...(mode === "dark" && {
        contrastText: brand[300],
        light: brand[500],
        main: brand[700],
        dark: brand[900],
      }),
    },
    warning: {
      light: orange[300],
      main: orange[400],
      dark: orange[800],
      ...(mode === "dark" && {
        light: orange[400],
        main: orange[500],
        dark: orange[700],
      }),
    },
    error: {
      light: red[300],
      main: red[400],
      dark: red[800],
      ...(mode === "dark" && {
        light: red[400],
        main: red[500],
        dark: red[700],
      }),
    },
    success: {
      light: green[300],
      main: green[400],
      dark: green[800],
      ...(mode === "dark" && {
        light: green[400],
        main: green[500],
        dark: green[700],
      }),
    },
    grey: { ...gray },
    divider: mode === "dark" ? alpha(gray[700], 0.6) : alpha(gray[300], 0.4),
    background: {
      default: "hsl(0, 0%, 99%)",
      paper: "hsl(220, 35%, 97%)",
      ...(mode === "dark" && {
        default: gray[900],
        paper: "hsl(220, 30%, 7%)",
      }),
    },
    text: {
      primary: gray[800],
      secondary: gray[600],

      warning: orange[400],
      ...(mode === "dark" && {
        primary: "hsl(0, 0%, 100%)",
        secondary: gray[400],
      }),
    },
    action: {
      hover: alpha(gray[200], 0.1),
      selected: `${alpha(gray[200], 0.3)}`,
      ...(mode === "dark" && {
        hover: alpha(gray[600], 0.2),
        selected: alpha(gray[600], 0.3),
      }),
    },
  }) as PaletteOptions;
