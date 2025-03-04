export interface ISideBarModules {
  modules: IModulesValues[];
}

interface IModulesValues {
  id: string;
  icon: string;
  link: string;
  nm_module: string;
  key: string;
  is_external: boolean;
}
