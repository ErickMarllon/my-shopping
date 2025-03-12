import { BreakpointsOptions, PaletteMode } from "@mui/material";
import { breakpoints } from "./breakpoints";
import { getComponents } from "./components";
import { getPalette } from "./palette";
import { getShadows } from "./shadows";
import { shape } from "./shape";
import { typography } from "./typography";

export const getDesignTokens = (mode: PaletteMode) => {
  console.log("🚀 ~ getDesignTokens ~ mode:", mode);
  const palette = getPalette(mode);
  const shadows = getShadows(mode);
  const components = getComponents(mode);
  const customBreakpoints = breakpoints as BreakpointsOptions;
  return {
    palette,
    typography,
    shape,
    shadows,
    breakpoints: customBreakpoints,
    components,
  };
};
