import { Icon } from "@/components/Icon";
import "./styles.scss";

function AuthHeader() {
  return (
    <div className="auth-modal-header">
      <span className="auth-modal-header-svg">
        <Icon name="AutoAwesomeRounded" />
      </span>
      <span className="auth-modal-header-text">
        <h3>teste name</h3>
      </span>
    </div>
  );
}

export { AuthHeader };
