import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useState } from 'react';

import Loader from '@/components/ui/Loader';
const CardDataForm = dynamic(() => import('@/components/ui/CardDataForm'), {
  loading: () => <Loader />,
});

function GenerateCardPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setSubmitted(true);
  };
  return (
    <>
      <Head>
        <title>Generate Cards | Cardgenius</title>
        <meta
          name="description"
          content="Create professional ID cards for your organization, school, or events using CardGenius."
        />
        <meta
          name="keywords"
          content="cardgenius, generate card, ID card, professional ID card"
        />
        <meta name="author" content="Muhammad Saad" />
      </Head>

      <section className="min-h-screen bg-gradient-to-b from-teal-600 to-teal-500 text-white flex flex-col sm:flex-row justify-center items-center relative overflow-hidden py-20 px-10 sm:p-24">
        <div className="w-full divide-x-4  divide-violet-600 flex flex-col-reverse sm:flex-row items-center justify-evenly bg-white border-2 border-white rounded-md p-6">
          {submitted ? (
            <div>templates</div>
          ) : (
            <>
              <div className="sm:w-1/2 m-2">
                <CardDataForm onSubmit={handleFormSubmit} />
              </div>

              <div className="sm:w-1/2 m-2 p-4 text-black">
                <h1>
                  <span className="text-2xl text-violet-700 font-bold">
                    CardGenius
                  </span>{' '}
                  is a platform that allows you to create professional ID cards
                  for your organization, school, or events.
                </h1>

                <p className="mt-4">
                  You can create ID cards by Filling out the form on the left
                  side of this page. You can also upload your own image to be
                  used as the Avatar for the ID card.
                </p>

                <p className="mt-4">
                  Once you are done filling out the form, click on the{' '}
                  <span className="text-violet-700 font-bold">Proceed</span>{' '}
                  button. You will be redirected to a page where you can Select
                  the Template for your ID card and then download it.
                </p>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
export default GenerateCardPage;
