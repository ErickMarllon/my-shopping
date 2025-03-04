type TErrorTypesProps = "warn" | "error" | "success" | "default";
interface IHelperTextProps {
  message?: string;
  type?: TErrorTypesProps;
  isActive?: boolean;
}

export type { IHelperTextProps, TErrorTypesProps };
