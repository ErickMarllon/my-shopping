import { IToastProps } from "../types";

function FormatToastMessage({ ...props }: IToastProps) {
  const updatedTitle = props?.title
    ? props.title
        .replace(/<tag>/g, `<${props.tagTitle}>`)
        .replace(/<\/tag>/g, `</${props.tagTitle}>`)
    : "";

  const updatedMessage = props?.message
    ? props.message
        .replace(/<tag>/g, `<${props.tagMessage}>`)
        .replace(/<\/tag>/g, `</${props.tagMessage}>`)
    : "";

  return {
    ...props,
    title: updatedTitle,
    message: updatedMessage,
  };
}

export { FormatToastMessage };
