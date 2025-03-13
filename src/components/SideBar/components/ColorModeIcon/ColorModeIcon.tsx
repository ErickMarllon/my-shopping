import { JSX, useCallback } from "react";
import { useThemeContext } from "@/context/ThemeContext";
import { LightMode, ModeNight } from "@mui/icons-material";
import { IconButton, PaletteMode, SxProps, Theme } from "@mui/material";

interface ColorModeIconProps {
  sx?: SxProps<Theme>;
}

const ColorModeIcon: React.FC<ColorModeIconProps> = ({ sx = {} }) => {
  const { mode, toggleColorMode, theme } = useThemeContext();
  const resolvedMode = mode as PaletteMode;

  const handleClick = useCallback(() => {
    toggleColorMode();
  }, [toggleColorMode]);

  const icons: Record<PaletteMode, JSX.Element> = {
    light: <LightMode fontSize="small" />,
    dark: <ModeNight fontSize="small" />,
  };

  return (
    <IconButton
      onClick={handleClick}
      sx={{
        color: theme.palette.text.primary,
        ...sx,
      }}
    >
      {icons[resolvedMode]}
    </IconButton>
  );
};

export { ColorModeIcon };
