import "./styles.scss";
import { IFirstViewProps } from "./types";

function FirstView({ ...props }: IFirstViewProps) {
  console.log("🚀 ~ FirstView ~ props:", props);
  return (
    <div className="first-view-container">
      <h1>FirstView Component</h1>
    </div>
  );
}
export { FirstView };
