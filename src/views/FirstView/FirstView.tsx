import "./styles.scss";
import { IFirstViewProps } from "./types";

const FirstView = ({}: IFirstViewProps) => {
  return (
    <div className="first-view-container">
      <h1>FirstView Component</h1>
    </div>
  );
};
export { FirstView };
