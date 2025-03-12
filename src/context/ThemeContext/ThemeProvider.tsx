import { KEYS } from "@/constants/keys";
import { createAppTheme } from "@/theme/createAppTheme";
import { IChildren } from "@/types";
import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  PaletteMode,
} from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { ThemeTypes } from "./types";

function ThemeProvider({ children }: IChildren) {
  const [mode, setMode] = useState<PaletteMode>("dark");

  const toggleColorMode = useCallback(() => {
    const newMode =
      mode === ThemeTypes.LIGHT ? ThemeTypes.DARK : ThemeTypes.LIGHT;
    setMode(newMode);
    localStorage.setItem(KEYS.THEME, newMode);
  }, [mode]);

  const theme = useMemo(() => createAppTheme(mode), [mode]);
  const contextValue = useMemo(
    () => ({
      mode,
      setMode,
      toggleColorMode,
    }),
    [mode, setMode, toggleColorMode]
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
