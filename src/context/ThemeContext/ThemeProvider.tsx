import { KEYS } from "@/constants/keys";
import { createAppTheme } from "@/theme/createAppTheme";
import { IChildren } from "@/types";
import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  PaletteMode,
  useColorScheme,
} from "@mui/material";
import { useCallback, useMemo } from "react";
import { ThemeContext } from "./ThemeContext";
import { ThemeTypes } from "./types";

function ThemeProvider({ children }: IChildren) {
  const colorSchema = useColorScheme();
  const theme = useMemo(
    () => createAppTheme((colorSchema.mode as PaletteMode) ?? "dark"),
    [colorSchema]
  );

  const toggleColorMode = useCallback(() => {
    const newMode =
      colorSchema.mode !== ThemeTypes.LIGHT
        ? ThemeTypes.DARK
        : ThemeTypes.LIGHT;

    colorSchema.setMode(newMode);
    localStorage.setItem(KEYS.THEME, newMode);
  }, [colorSchema]);

  const contextValue = useMemo(
    () => ({
      ...colorSchema,
      toggleColorMode,
    }),
    [colorSchema, toggleColorMode]
  );
  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme} defaultMode="dark">
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };
