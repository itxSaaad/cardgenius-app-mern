import React, { Suspense } from 'react';

import Loader from '../ui/Loader';

const CardDataForm = React.lazy(() => import('./CardDataForm'));

function FormStep({ setSteps }) {
  const handleFormSubmit = (formData) => {
    console.log(formData);
    setSteps((prev) => prev + 1);
  };

  return (
    <Suspense fallback={<Loader />}>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-violet-600 mb-4 lg:mb-6">
          Fill Out the Form
        </h1>
        <div className="divide-x-4 divide-violet-600 flex flex-col-reverse sm:flex-row items-center justify-evenly">
          <div className="sm:w-1/2 m-2">
            <CardDataForm onSubmit={handleFormSubmit} />
          </div>

          <div className="sm:w-1/2 m-2 p-4 text-black">
            <h1>
              <span className="text-2xl text-violet-700 font-bold">
                CardGenius
              </span>{' '}
              is a platform that allows you to create professional ID cards for
              your organization, school, or events.
            </h1>

            <p className="mt-4">
              You can create ID cards by Filling out the form on the left side
              of this page. You can also upload your own image to be used as the
              Avatar for the ID card.
            </p>

            <p className="mt-4">
              Once you are done filling out the form, click on the{' '}
              <span className="text-violet-700 font-bold">Proceed</span> button.
              You will be redirected to a page where you can Select the Template
              for your ID card and then download it.
            </p>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default FormStep;
