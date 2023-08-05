import PropTypes from 'prop-types';
import React, { Suspense } from 'react';

import Loader from '../ui/Loader';

const TemplateList = React.lazy(() => import('../templates/TemplateList'));

function TemplateStep(props) {
  const handleTemplateSelect = (templateId) => {
    // console.log('Selected template ID:', templateId);
    // console.log('Called from Step 2');
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

TemplateStep.propTypes = {
  templates: PropTypes.array.isRequired,
  setSelectedTemplate: PropTypes.func.isRequired,
  setSteps: PropTypes.func.isRequired,
};

export default TemplateStep;
