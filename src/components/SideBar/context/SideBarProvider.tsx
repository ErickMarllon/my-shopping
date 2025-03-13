import { breakpoints } from "@/theme/breakpoints";
import { IChildren } from "@/types";
import { ThemeProvider, useMediaQuery, useTheme } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { createLocalTheme } from "../theme";
import { SideBarContext } from "./SideBarContext";

function SideBarProvider({ children }: IChildren) {
  const theme = useTheme();
  const localTheme = createLocalTheme(theme);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isDesktop = useMediaQuery(theme.breakpoints.up(breakpoints.mb));

  const handleDrawerToggle = useCallback(() => {
    setOpenDrawer(!openDrawer);
  }, [openDrawer]);

  const handleUserMenu = (event?: React.MouseEvent<HTMLElement> | null) => {
    if (!event) return setAnchorEl(null);

    setAnchorEl((prev) => (prev ? null : event.currentTarget));
  };

  const contextValue = useMemo(
    () => ({
      theme,
      openDrawer,
      setOpenDrawer,
      anchorEl,
      setAnchorEl,
      isDesktop,
      handleDrawerToggle,
      handleUserMenu,
    }),
    [anchorEl, handleDrawerToggle, isDesktop, openDrawer, theme]
  );

  return (
    <SideBarContext.Provider value={contextValue}>
      <ThemeProvider theme={localTheme}>{children}</ThemeProvider>
    </SideBarContext.Provider>
  );
}

export { SideBarProvider };
