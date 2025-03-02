import { ICustomNotificationProps } from "./types";
import "./styles.scss";
import { CheckIsHtml } from "./utils/CheckIsHtml";
import { FormatToastMessage } from "./utils/formatToastMessage";
import { Icon } from "../Icon";
import { toastColors } from "./toastColors";

function ToastWithActions({ data }: ICustomNotificationProps) {
  const { message, type, title } = FormatToastMessage({ ...data });

  return (
    <div
      className={`toast-container ${type}`}
      style={{
        borderLeft: `3px solid ${toastColors[type]}`,
      }}
    >
      {type === "success" && (
        <Icon name="CheckCircleOutlineRounded" color={toastColors[type]} />
      )}

      {type === "error" && (
        <Icon name="HighlightOffRounded" color={toastColors[type]} />
      )}

      <div className="toast-content ">
        {title && CheckIsHtml(title) ? (
          <span className="toast-title">
            <h3 dangerouslySetInnerHTML={{ __html: title }} />
          </span>
        ) : (
          <h3 className="toast-title">{title}</h3>
        )}

        <div className="toast-body">
          {message && CheckIsHtml(message) ? (
            <p dangerouslySetInnerHTML={{ __html: message }} />
          ) : (
            <p>{message}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export { ToastWithActions };
