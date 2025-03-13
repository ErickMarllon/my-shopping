import { useContext } from "react";
import { SideBarContext } from "./";

function useSideBarContext() {
  const context = useContext(SideBarContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
export { useSideBarContext };
