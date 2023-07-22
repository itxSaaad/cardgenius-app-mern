import dynamic from 'next/dynamic';

import Loader from '../ui/Loader';

const TemplateList = dynamic(() => import('../templates/TemplateList'), {
  loading: () => <Loader />,
});

function TemplateStep(props) {
  const handleTemplateSelect = (templateId) => {
    console.log('Selected template ID:', templateId);
    props.setSelectedTemplate(templateId);
    props.setSteps((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-violet-600 mb-4 lg:mb-6">
        Choose a Template
      </h1>
      <TemplateList
        templates={props.templates}
        onSelect={handleTemplateSelect}
      />
    </div>
  );
}

export default TemplateStep;
