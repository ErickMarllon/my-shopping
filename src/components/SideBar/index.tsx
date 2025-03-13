import { IChildren } from "@/types";
import { SideBar as SideBarMenu } from "./SideBar";
import { SideBarProvider } from "./context";

const SideBar = ({ children }: IChildren) => {
  return (
    <SideBarProvider>
      <SideBarMenu>{children}</SideBarMenu>
    </SideBarProvider>
  );
};
export { SideBar };
