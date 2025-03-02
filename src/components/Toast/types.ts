import { ToastOptions } from "react-toastify";
type TToastTypesProps = "success" | "error";

interface IToastProps {
  type: TToastTypesProps;
  value?: string;
  title?: string;
  message?: string;
  tagTitle?: string;
  tagMessage?: string;
}

interface ICustomToastProps extends IToastProps {
  options?: ToastOptions;
}

type ICustomNotificationProps = {
  data: IToastProps;
};

export type {
  TToastTypesProps,
  IToastProps,
  ICustomToastProps,
  ICustomNotificationProps,
};
