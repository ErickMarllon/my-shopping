import { createContext } from "react";
import { ISideBarContextProps } from "./types";

const SideBarContext = createContext<ISideBarContextProps | undefined>(
  undefined
);

export { SideBarContext };
