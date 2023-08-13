import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Button from '../components/ui/Button';

const ErrorScreen = () => {
  const error = useRouteError();
  return (
    <section className="min-h-screen flex flex-row justify-center items-center bg-violet-600 py-20">
      <div className="mx-auto max-w-screen-xl w-full flex flex-col justify-center items-center px-4 sm:px-8 lg:px-6">
        <div className="flex flex-col justify-center items-center text-violet-300">
          <i className="fas fa-link-slash fa-spin fa-fade text-6xl mb-4"></i>
          <span className="text-2xl">Broken Link</span>
        </div>

        <h1 className="text-white text-4xl text-center font-bold mt-4 mb-2">
          {error.status} - {error.statusText}
        </h1>
        <p className="text-violet-300 text-lg text-center mb-4">
          The requested page could not be found.
        </p>
        <Link to="/">
          <Button
            variant="secondary"
            className="rounded-md mr-2 bg-teal-500 hover:bg-teal-600"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Go back to the Homepage
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ErrorScreen;
