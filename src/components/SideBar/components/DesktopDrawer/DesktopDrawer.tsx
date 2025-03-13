import { Drawer } from "@mui/material";
import { drawerWidth, drawerWidthClosed } from "../../constants/drawer";
import { useSideBarContext } from "../../context";
import { DrawerContent } from "../DrawerContent";

function DesktopDrawer() {
  const { openDrawer } = useSideBarContext();

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={true}
      sx={{
        display: { mb: "none", sm: "flex" },
        "& .MuiDrawer-paper": {
          backgroundImage: "none",
          width: openDrawer ? drawerWidth : drawerWidthClosed,
        },
      }}
    >
      <DrawerContent />
    </Drawer>
  );
}

export { DesktopDrawer };
