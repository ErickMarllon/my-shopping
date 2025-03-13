import { Icon } from "@/components/Icon";
import { MaterialIconNames } from "@/components/Icon/types";
import { useMenu } from "@/queries/useConfig/useConfig";
import { ChevronLeft as ChevronLeftIcon } from "@mui/icons-material";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { SideMenu } from "../SideMenu";
import { useSideBarContext } from "../../context";

function DrawerContent() {
  const { openDrawer, theme, handleDrawerToggle } = useSideBarContext();

  const { data: menuData, isLoading: menuIsLoading } = useMenu();
  if (!menuData && !menuIsLoading) return;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 5,
        gap: 1,
        height: "100%",
        justifyContent: "flex-start",
        overflow: "hidden",
        minHeight: 460,
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          minWidth: 40,
          maxHeight: 150,
          maxWidth: 180,
          justifyContent: "space-between",
          position: "relative",
          marginBottom: openDrawer ? 7 : 4,
        }}
        disableGutters
        onClick={handleDrawerToggle}
      >
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            color: theme.palette.text.primary,
            maxHeight: 150,
            maxWidth: 180,
            width: "100%",
            overflow: "hidden",
            marginTop: openDrawer ? 3 : 1,
            borderRadius: "unset",
            padding: 0,
            "&:hover": {
              backgroundColor: "unset",
            },
          }}
        >
          <img
            src="https://img.freepik.com/vetores-gratis/ilustracao-de-design-de-logotipo-de-mascote-simples-de-bufalo_343694-3603.jpg?t=st=1741736303~exp=1741739903~hmac=8d34e8e42fae9243180eeb867ba61145e480c882522201b1ff426ac8ca72fd71&w=740"
            alt="icone do menu"
            loading="lazy"
            width="100%"
          />
        </IconButton>
        {openDrawer && (
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              color: theme.palette.text.primary,
              position: "absolute",
              right: -30,
              top: -40,
              zIndex: 1000,
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
        )}
      </Toolbar>
      <Divider />
      <Box
        sx={{
          paddingX: 3,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <List>
          {menuData &&
            menuData?.values?.map((item) => (
              <ListItem key={item.name_menu}>
                <ListItemButton>
                  <ListItemIcon>
                    <Icon name={item.name_icon as MaterialIconNames} />
                  </ListItemIcon>
                  {openDrawer && <ListItemText primary={item.name_menu} />}
                </ListItemButton>
              </ListItem>
            ))}
        </List>
        <Box
          sx={{
            position: "relative",
            marginTop: 2,
            marginBottom: 1,
          }}
        >
          <Divider
            sx={{
              position: "absolute",
              width: 300,
              left: -50,
              top: -8,
            }}
          />

          <SideMenu />
        </Box>
      </Box>
    </Box>
  );
}

export { DrawerContent };
