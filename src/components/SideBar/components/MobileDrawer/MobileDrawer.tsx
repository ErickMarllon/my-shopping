import { MenuRounded } from "@mui/icons-material";
import { AppBar, Badge, Drawer, IconButton, Toolbar } from "@mui/material";
import { drawerWidth } from "../../constants/drawer";
import { useSideBarContext } from "../../context";
import { ColorModeIcon } from "../ColorModeIcon/ColorModeIcon";
import { DrawerContent } from "../DrawerContent";

function MobileDrawer() {
  const { openDrawer, theme, handleDrawerToggle } = useSideBarContext();

  return (
    <AppBar
      sx={{
        display: "flex",
        boxShadow: 0,
        backgroundColor: theme.palette.background.paper,
        backgroundImage: "none",
        borderBottom: "1px solid",
        height: "8dvh",
        borderColor: theme.palette.divider,
      }}
    >
      <Toolbar
        variant="regular"
        sx={{
          gap: 1,
          justifyContent: "space-between",
        }}
      >
        <Badge color="default" variant="dot">
          <IconButton
            sx={{
              color: theme.palette.text.primary,
              minWidth: 40,
              minHeight: 40,
              padding: 1,
            }}
          >
            <MenuRounded onClick={handleDrawerToggle} />
          </IconButton>
        </Badge>

        <ColorModeIcon
          sx={{
            minWidth: 40,
            minHeight: 40,
            padding: 1,
          }}
        />
        <Drawer
          variant="temporary"
          open={openDrawer}
          onClose={handleDrawerToggle}
          sx={{
            display: { mb: "flex", sm: "none" },

            "& .MuiDrawer-paper": {
              marginTop: "8dvh",
              height: "92dvh",
              backgroundImage: "none",
              backgroundColor: theme.palette.background.paper,
              boxSizing: "border-box",
              width: drawerWidth,
              color: "white",
            },
          }}
        >
          <DrawerContent />
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export { MobileDrawer };
