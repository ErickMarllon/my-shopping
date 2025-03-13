import { Theme } from "@mui/material";

interface ISideBarContextProps {
  theme: Theme;
  openDrawer: boolean;
  anchorEl: HTMLElement | null;
  isDesktop: boolean;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  handleDrawerToggle: () => void;
  handleUserMenu: (event?: React.MouseEvent<HTMLElement>) => void;
}

export type { ISideBarContextProps };
