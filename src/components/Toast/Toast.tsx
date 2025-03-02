import { toast } from "react-toastify";
import { ToastWithActions } from "./ToastWithActions";
import { ICustomToastProps } from "./types";
import { defaultToastOptions } from "./options";

function Toast({ options, ...props }: ICustomToastProps) {
  const toastOptions = { ...defaultToastOptions, ...options };

  toast(() => <ToastWithActions data={{ ...props }} />, toastOptions);
}

export { Toast };
