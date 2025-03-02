import * as MaterialIcons from "@mui/icons-material";
type MaterialIconNames = keyof typeof MaterialIcons;
type IconsVariant =
  | "default"
  | "outlined"
  | "rounded"
  | "two-tone"
  | "sharp"
  | "filled";

interface IconProps extends React.SVGProps<SVGElement> {
  name: MaterialIconNames;
  type?: IconsVariant;
  size?: string | number;
}

export type { IconProps, IconsVariant, MaterialIconNames };
