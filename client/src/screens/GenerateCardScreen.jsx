import React, { Suspense, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AuthModal from '../components/ui/Auth/AuthModal';
import Loader from '../components/ui/Loader';
import ProgressBar from '../components/generation-steps/ProgressBar';

const FormStep = React.lazy(() =>
  import('../components/generation-steps/FormStep')
);
const PreviewStep = React.lazy(() =>
  import('../components/generation-steps/PreviewStep')
);
const TemplateStep = React.lazy(() =>
  import('../components/generation-steps/TemplateStep')
);
const Card = React.lazy(() => import('../components/ui/Card'));

function GenerateCardScreen() {
  const [steps, setSteps] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const totalSteps = 3;
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(true);

  const [temp1, setTemp1] = useState(null);
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  useEffect(() => {
    async function fetchTemplates() {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_CLIENT_URL}/templates/temp1.svg`
        );
        const temp1Content = await res.text();
        setTemp1(temp1Content);
      } catch (error) {
        console.log('Error fetching template:', error);
      }
    }

    fetchTemplates();
  }, []);

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

  useEffect(() => {
    if (!userInfo) {
      setIsAuthModalOpen(true);
    } else {
      setIsAuthModalOpen(false);
    }
  }, [userInfo]);

  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-teal-600 to-teal-500 text-white flex flex-col sm:flex-row justify-center items-center relative overflow-hidden py-20 px-10 sm:p-24">
        {userInfo ? (
          <Suspense fallback={<Loader />}>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white transform rotate-45 rounded-md translate-y-12 translate-x-12 opacity-40" />
            <div className="absolute top-0 left-0 w-40 h-40 bg-white transform rotate-45 rounded-md -translate-y-12 -translate-x-12 opacity-40" />

            <Card className="flex flex-col items-center justify-center p-6">
              {steps === 1 && <FormStep setSteps={setSteps} />}

              {steps === 2 && (
                <TemplateStep
                  templates={templates}
                  setSteps={setSteps}
                  setSelectedTemplate={setSelectedTemplate}
                />
              )}

              {steps === 3 && (
                <PreviewStep
                  templates={templates}
                  setSteps={setSteps}
                  selectedTemplate={selectedTemplate}
                  setSelectedTemplate={setSelectedTemplate}
                />
              )}

              <div className="relative w-1/2 z-10 p-2">
                <ProgressBar currentStep={steps} totalSteps={totalSteps} />
              </div>
            </Card>
          </Suspense>
        ) : (
          <AuthModal
            onClose={() => {
              setIsAuthModalOpen(false);
              navigate('/');
            }}
          />
        )}
      </section>
    </>
  );
}

GenerateCardScreen.propTypes = {};

export default GenerateCardScreen;
