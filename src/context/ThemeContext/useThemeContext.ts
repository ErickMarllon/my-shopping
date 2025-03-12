import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within an ThemeProvider");
  }
  return context;
}
export { useThemeContext };
