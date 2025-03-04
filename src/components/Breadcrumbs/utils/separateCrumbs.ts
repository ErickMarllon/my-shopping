import { ICrumb } from "../types";

export const separateCrumbs = (crumbs: ICrumb[]) => {
  const selfCrumb = crumbs.find((crumb) => crumb.isTitle);
  const otherCrumbs = crumbs.filter((crumb) => !crumb.isTitle);
  return { selfCrumb, otherCrumbs };
};
