import { IChildren } from "@/types";
import { Box } from "@mui/material";
import { DesktopDrawer } from "./components/DesktopDrawer";
import { MobileDrawer } from "./components/MobileDrawer";
import { drawerWidth, drawerWidthClosed } from "./constants/drawer";
import { useSideBarContext } from "./context";

const SideBar = ({ children }: IChildren) => {
  const { openDrawer, theme, isDesktop } = useSideBarContext();

  return (
    <Box sx={{ display: "flex" }}>
      {!isDesktop ? <MobileDrawer /> : <DesktopDrawer />}

      <Box
        className=" conteudo principal"
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          //   background: "blue",
          width: {
            md: openDrawer
              ? `calc(100% - ${drawerWidth}px)`
              : `calc(100% - ${drawerWidthClosed}px)`,
          },
          ml: {
            md: openDrawer ? `${drawerWidth}px` : `${drawerWidthClosed}px`,
          },
          transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <div>aqui</div>
        {children}
      </Box>
    </Box>
  );
};

export { SideBar };
