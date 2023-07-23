import React, { Suspense } from 'react';

import Loader from '../ui/Loader';

const TemplateList = React.lazy(() => import('../templates/TemplateList'));

function TemplateStep(props) {
  const handleTemplateSelect = (templateId) => {
    console.log('Selected template ID:', templateId);
    props.setSelectedTemplate(templateId);
    props.setSteps((prev) => prev + 1);
  };

  return (
    <Suspense fallback={<Loader />}>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-violet-600 mb-4 lg:mb-6">
          Choose a Template
        </h1>
        <TemplateList
          templates={props.templates}
          onSelect={handleTemplateSelect}
        />
      </div>
    </Suspense>
  );
}

export default TemplateStep;
