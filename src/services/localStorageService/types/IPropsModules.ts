export interface ISideBarModules {
  modules: IModulesValues[];
}

export interface IModulesValues {
  id: string;
  icon: string;
  link: string;
  nm_module: string;
  key: string;
  is_external: boolean;
}

export interface ISideBarModuleState {
  id: string;
  key: string;
  title: string;
  icon: string;
  url: string;
}
