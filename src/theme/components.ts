import { PaletteMode } from "@mui/material";
import { gray } from "./colors";

export const getComponents = (mode: PaletteMode) => {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          flex: 1,
          minHeight: "100vh",
          height: "100%",
          margin: 0,
          padding: 0,

          ...(mode === "dark" && {
            backgroundColor: gray[900],
          }),
        },
      },
    },
  };
};
