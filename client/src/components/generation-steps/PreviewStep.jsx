import React, { Suspense, useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import html2canvas from 'html2canvas';

import Button from '../ui/Button';
import Loader from '../ui/Loader';

const TemplatePreview = React.lazy(() =>
  import('../templates/TemplatePreview')
);

function PreviewStep(props) {
  const [svgContent, setSvgContent] = useState('');

  const form = useSelector((state) => state.form);
  const { loading, createdForm } = form;

  const svgRef = useRef(null); // Create a ref using useRef

  const handleDownloadPDF = () => {
    html2canvas(svgRef.current, { useCORS: true }).then((canvas) => {
      const pngImage = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngImage;
      downloadLink.download = 'image.png';
      downloadLink.click();
    });
  };

  return (
    <Suspense fallback={<Loader />}>
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-violet-600 mb-4 lg:mb-6">
          Preview & Download Your Card
        </h1>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="flex flex-col items-center justify-center">
              {/* Pass the svgRef to the TemplatePreview component */}
              <TemplatePreview
                templates={props.templates}
                selectedTemplate={props.selectedTemplate}
                setSvgContent={setSvgContent}
                svgContent={svgContent}
                userData={createdForm}
                svgRef={svgRef}
              />
            </div>

            <div className="flex flex-col sm:flex-row">
              <Button
                variant="secondary"
                className="rounded-md"
                onClick={handleDownloadPDF}
              >
                Download Card
              </Button>
              <Button
                variant="primary"
                className="sm:ml-2 rounded-md"
                onClick={() => props.setSteps(1)}
              >
                Create New Card
              </Button>
            </div>
          </>
        )}
      </div>
    </Suspense>
  );
}

export default PreviewStep;
