import { Modal, Spinner } from "react-bootstrap";
import "./styles.scss";
import { ILoadingProps } from "./types";

const Loading = ({
  variant = "info",
  animation = "border",
  customClass = "loading-global",
  helperText = "Carregando...",
  ...props
}: ILoadingProps) => {
  return (
    <Modal show={true} className={`${customClass}`}>
      <Modal.Body>
        <div className={`${customClass}__Loading`}>
          <Spinner
            {...props}
            animation={animation}
            variant={variant}
            className={`${customClass}__animation`}
          />
          <span className={`${customClass}__helper-text`}>{helperText}</span>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export { Loading };
