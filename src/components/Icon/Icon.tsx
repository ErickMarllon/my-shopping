import * as MaterialIcons from "@mui/icons-material";
import React from "react";
import "./styles.scss";
import { IconProps } from "./types";

function Icon({ name, type = "default", size, ...rest }: IconProps) {
  const IconComponent = MaterialIcons[name] as React.ElementType;

  if (!IconComponent) {
    console.warn(`Ícone "${String(name)}" não encontrado.`);
    return <MaterialIcons.ErrorOutlineOutlined style={{ color: "#ff4d4d" }} />;
  }

  const spanClassName =
    type === "default"
      ? `material-icons content-icon ${rest.className ?? ""}`
      : `material-icons-${type} content-icon ${rest.className ?? ""}`;

  const spanStyle = {
    ...rest.style,
    ...(size && { fontSize: size, width: size, height: size }),
    userSelect: "none",
  };

  return (
    <IconComponent {...rest} className={spanClassName} style={spanStyle}>
      {name}
    </IconComponent>
  );
}

export { Icon };
