import { ReactNode } from "react";
import errorImg from "/page-not-found.svg";

interface ErrorContainerProps {
  children: ReactNode;
}

const ErrorContainer: React.FunctionComponent<ErrorContainerProps> = ({
  children,
}) => {
  return (
    <div className="flex flex-col sm:flex-row w-screen h-screen items-center justify-center">
      <div className="md:h-[200px] w-[200px]">
        <img src={errorImg} alt="404" />
      </div>
      {children}
    </div>
  );
};

export default ErrorContainer;
