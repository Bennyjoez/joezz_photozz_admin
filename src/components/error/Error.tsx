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
      <div>
        <div className='grid place-items-center sm:block'>
          <div className='text-5xl'>
            <MdOutlineError />
          </div>
          <h1 className='text-2xl font-bold'>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p className='text-slate-500'>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </ErrorContainer>
  )
}
