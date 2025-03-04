import { AppleIcon } from "@/assets/svg/apple-icon";
import { GoogleIcon } from "@/assets/svg/google-icon";
import { useFormContext } from "react-hook-form";
import { IAuthModalFooterProps } from "../../types";
import { AuthFormData } from "../AuthForm/authSchema";
import "./styles.scss";
import { useOrderLines } from "@/queries/useAuth/useAuth";

function AuthFooter({ onActionType }: IAuthModalFooterProps) {
  const { handleSubmit } = useFormContext<AuthFormData>();
  const { orderProcessingFinalize } = useOrderLines();
  function submit(data: AuthFormData) {
    orderProcessingFinalize(data);
  }

  return (
    <div className="auth-modal-footer">
      <button
        type="submit"
        className="auth-modal-sign local"
        onClick={handleSubmit(submit)}
      >
        Sign in
      </button>

      <span className="auth-modal-footer-content-social">
        <button className="auth-modal-sign social">
          <AppleIcon />
        </button>
        <button className="auth-modal-sign social">
          <GoogleIcon />
        </button>
      </span>
      <span className="auth-modal-footer-content-toggle">
        <p>Don&apos;t have an account?</p>
        <button onClick={onActionType} className="toggle-action">
          Sign up
        </button>
      </span>
    </div>
  );
}

export { AuthFooter };
