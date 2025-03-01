import { SpinnerProps } from "react-bootstrap";

interface ILoadingProps extends SpinnerProps {
  customClass?: string;
  helperText?: string;
}

export type { ILoadingProps };
