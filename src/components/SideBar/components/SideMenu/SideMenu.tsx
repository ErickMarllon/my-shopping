import { Avatar, Box, Stack, Typography } from "@mui/material";
import { useSideBarContext } from "../../context";
import { OptionsMenu } from "../OptionsMenu";

function SideMenu() {
  const { openDrawer, handleUserMenu } = useSideBarContext();

  return (
    <Stack direction="row">
      <Avatar
        sizes="small"
        alt="Riley Carter"
        src="/static/images/avatar/7.jpg"
        onClick={handleUserMenu}
      />
      {openDrawer && (
        <Box sx={{ mr: "auto" }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, lineHeight: "16px" }}
          >
            Riley Carter
          </Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            riley@email.com
          </Typography>
        </Box>
      )}
      <OptionsMenu />
    </Stack>
  );
}

export { SideMenu };
