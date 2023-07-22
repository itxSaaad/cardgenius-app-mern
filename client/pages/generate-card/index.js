import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useState } from 'react';

import Loader from '@/components/ui/Loader';
import ProgressBar from '@/components/ui/ProgressBar';

const FormStep = dynamic(
  () => import('@/components/generation-steps/FormStep'),
  {
    loading: () => <Loader />,
  }
);
const PreviewStep = dynamic(
  () => import('@/components/generation-steps/PreviewStep'),
  {
    loading: () => <Loader />,
  }
);
const TemplateStep = dynamic(
  () => import('@/components/generation-steps/TemplateStep'),
  {
    loading: () => <Loader />,
  }
);
const Card = dynamic(() => import('@/components/ui/Card'), {
  loading: () => <Loader />,
});

function GenerateCardPage(props) {
  const [steps, setSteps] = useState(2);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const totalSteps = 3;

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
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white transform rotate-45 rounded-md translate-y-12 translate-x-12 opacity-40" />
        <div className="absolute top-0 left-0 w-40 h-40 bg-white transform rotate-45 rounded-md -translate-y-12 -translate-x-12 opacity-40" />

        <Card className="flex flex-col items-center justify-center p-6">
          {steps === 1 && <FormStep setSteps={setSteps} />}

          {steps === 2 && (
            <TemplateStep
              templates={props.templates}
              setSteps={setSteps}
              setSelectedTemplate={setSelectedTemplate}
            />
          )}

          {steps === 3 && (
            <PreviewStep
              templates={props.templates}
              setSteps={setSteps}
              selectedTemplate={selectedTemplate}
            />
          )}

          <div className="relative w-1/2 z-10 p-2">
            <ProgressBar currentStep={steps} totalSteps={totalSteps} />
          </div>
        </Card>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const temp1 = await fetch(
    `${process.env.CLIENT_URL}/templates/temp1.svg`
  ).then((res) => res.text());

  const temp2 = await fetch(
    `${process.env.CLIENT_URL}/templates/temp2.svg`
  ).then((res) => res.text());

  const templates = [
    {
      id: 1,
      name: 'Blue Accent',
      content: temp1,
    },
    {
      id: 2,
      name: 'Green Accent',
      content: temp1,
    },
    {
      id: 3,
      name: 'Red Accent',
      content: temp1,
    },
    {
      id: 4,
      name: 'Yellow Accent',
      content: temp1,
    },
  ];

  return {
    props: {
      templates,
    },
  };
}

export default GenerateCardPage;
