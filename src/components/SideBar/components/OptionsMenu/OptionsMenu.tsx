import { useThemeContext } from "@/context/ThemeContext";
import { Logout, Settings } from "@mui/icons-material";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import {
  Avatar,
  Badge,
  Divider,
  ListItemIcon,
  MenuItem,
  ListItemText,
  Menu,
} from "@mui/material";
import { useSideBarContext } from "../../context";
import { ColorModeIcon } from "../ColorModeIcon/ColorModeIcon";

function OptionsMenu() {
  const { openDrawer, handleUserMenu, anchorEl } = useSideBarContext();

  const userMenuOpen = Boolean(anchorEl);
  const { toggleColorMode } = useThemeContext();

  return (
    <>
      {openDrawer && (
        <Badge
          color="default"
          variant="dot"
          invisible={false}
          onClick={handleUserMenu}
          sx={{
            cursor: "pointer",
          }}
        >
          <MoreVertRoundedIcon />
        </Badge>
      )}
      <Menu
        anchorEl={anchorEl}
        id="menu"
        open={userMenuOpen}
        onClose={() => handleUserMenu()}
        onClick={handleUserMenu}
        disableEnforceFocus
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        sx={{
          left: `${openDrawer ? "27%" : "9%"}`,
          padding: 16,
        }}
      >
        <MenuItem onClick={handleUserMenu}>
          <Avatar
            sizes="small"
            alt="Riley Carter"
            src="/static/images/avatar/7.jpg"
            onClick={() => console.log("profile")}
          />
          Profile
        </MenuItem>

        <Divider
          sx={{
            margin: "0 !important",
          }}
        />

        <MenuItem onClick={handleUserMenu}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>

        <MenuItem
          onClick={() => {
            toggleColorMode();
            handleUserMenu();
          }}
        >
          <ListItemIcon>
            <ColorModeIcon
              sx={{
                maxWidth: 24,
                maxHeight: 24,
                "&:hover": {
                  backgroundColor: "unset",
                },
              }}
            />
          </ListItemIcon>
          <ListItemText>Theme</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleUserMenu}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}
export { OptionsMenu };
