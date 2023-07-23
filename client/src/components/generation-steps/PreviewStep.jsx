import React, { Suspense, useState } from 'react';

import Button from '../ui/Button';
import Loader from '../ui/Loader';

const TemplatePreview = React.lazy(() =>
  import('../templates/TemplatePreview')
);

function PreviewStep(props) {
  const [svgContent, setSvgContent] = useState('');

  const handleDownloadPDF = () => {
    // Code to create PDF with svgContent and initiate download
  };
  return (
    <Suspense fallback={<Loader />}>
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-violet-600 mb-4 lg:mb-6">
          Preview & Download Your Card
        </h1>

        <div className="flex flex-col items-center justify-center">
          <TemplatePreview
            templates={props.templates}
            selectedTemplate={props.selectedTemplate}
            setSvgContent={setSvgContent}
            svgContent={svgContent}
          />
        </div>

        <div className="flex flex-col sm:flex-row ">
          <Button
            variant="secondary"
            className="rounded-md"
            onClick={handleDownloadPDF}
          >
            Download as PDF
          </Button>
          <Button
            variant="primary"
            className="sm:ml-2 rounded-md"
            onClick={() => props.setSteps(1)}
          >
            Create New Card
          </Button>
        </div>
      </div>
    </Suspense>
  );
}

export default PreviewStep;
