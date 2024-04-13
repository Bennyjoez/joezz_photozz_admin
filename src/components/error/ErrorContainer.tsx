import { ReactNode } from "react";
import errorImg from "/page-not-found.svg";

interface ErrorContainerProps {
  children: ReactNode;
}

const ErrorContainer: React.FunctionComponent<ErrorContainerProps> = ({
  children,
}) => {
  return (
    <div className="error-container">
      <div className="error-img-container">
        <img src={errorImg} alt="404" />
      </div>
      {children}
    </div>
  );
};

export default ErrorContainer;
