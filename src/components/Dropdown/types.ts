import { MaterialIconNames } from "../Icon/types";

interface OptionGeneric {
  label: string;
  value: string;
}

interface OptionsProps {
  order: {
    title: string;
    options: OptionGeneric[];
  };
  sort: {
    title: string;
    options: OptionGeneric[];
  };
}

type OrderDirectionProps = "asc" | "desc" | string;
type OrderDirectionIconProps = Record<OrderDirectionProps, MaterialIconNames>;

interface DropdownProps {
  title: string;
  icontitlePosition?: string;
  orderOptions?: OptionsProps;
  sort?: string | null;
  orderDirection?: string | null;
  onSort: (value: string | null) => void;
  onOrderDirection: (value: string | null) => void;
  hasDoubleCheckIcon?: boolean;
  hasOnClear?: boolean;
  isRevertTitle?: boolean;
}

export type {
  OptionGeneric,
  OptionsProps,
  DropdownProps,
  OrderDirectionProps,
  OrderDirectionIconProps,
};
