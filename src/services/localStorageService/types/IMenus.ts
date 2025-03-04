import React from "react";

export interface IMenus {
  menus: IMenu[];
}
export interface IMenu {
  key: string;
  values: IMenuValue[];
}

export interface IMenuValue {
  id: string;
  id_route: string;
  nm_menu: string;
  nm_icon: string;
  nu_order: number;
  subitems: IMenusValues[];
}

interface IMenusValues {
  id: string;
  id_route: string;
  nm_menu: string;
  nm_icon: string;
  nu_order: number;
  route: {
    id: string;
    route: string;
    type: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
    deleted_at: boolean;
  };
}

export interface IMenuState {
  id: string;
  linkComponent: React.ReactNode;
}
