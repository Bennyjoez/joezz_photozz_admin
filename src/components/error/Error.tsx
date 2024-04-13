import { useRouteError } from 'react-router-dom';
import { MdOutlineError } from "react-icons/md";
import ErrorContainer from './ErrorContainer';


interface RouteError extends Error {
  statusText?: string;
  statusCode?: number;
}

export default function Error() {
  const error = useRouteError() as RouteError;
  console.error(error);
  return (
    <ErrorContainer>
      <div id="error-page">
        <div>
          <div id='error-icon'>
            <MdOutlineError />
          </div>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p className='message'>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </ErrorContainer>
  )
}
