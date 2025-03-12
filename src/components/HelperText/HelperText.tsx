import { errorMessage } from "./constants";
import "./styles.scss";
import { IHelperTextProps } from "./types";

function HelperText({
  message = errorMessage,
  type = "error",
  isActive = false,
}: IHelperTextProps) {
  if (!isActive) return;

  return (
    <div className="helper-text-container">
      <span className={`text-message ${type}`}>{message}</span>
    </div>
  );
}
export { HelperText };
