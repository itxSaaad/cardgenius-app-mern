import { useEffect } from 'react';
import PropTypes from 'prop-types';

import Card from '../ui/Card';

const updateSvgContent = (svgContent, userData) => {
  let updatedSvgContent = svgContent;
  updatedSvgContent = updatedSvgContent.replace(
    /{{name}}/g,
    userData.name || ''
  );
  updatedSvgContent = updatedSvgContent.replace(
    /{{email}}/g,
    userData.email || ''
  );
  updatedSvgContent = updatedSvgContent.replace(
    /{{phone}}/g,
    userData.phone || ''
  );
  updatedSvgContent = updatedSvgContent.replace(
    /{{address}}/g,
    userData.address || ''
  );
  updatedSvgContent = updatedSvgContent.replace(
    /{{idImage}}/g,
    userData.idImage || ''
  );
  return updatedSvgContent;
};

function TemplatePreview({
  templates,
  selectedTemplate,
  userData,
  svgContent,
  setSvgContent,
  svgRef,
}) {
  // console.log(props);

  useEffect(() => {
    const template = templates.find(
      (template) => template.id === selectedTemplate
    );

    if (template) {
      const svgContent = updateSvgContent(
        template.content,
        userData.idCardCredential
      );
      setSvgContent(svgContent);
    }
  }, [selectedTemplate, templates, userData.idCardCredential, setSvgContent]);
  return (
    <Card>
      <div
        className="rounded-md"
        ref={svgRef}
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    </Card>
  );
}

TemplatePreview.propTypes = {
  templates: PropTypes.array.isRequired,
  selectedTemplate: PropTypes.number.isRequired,
  userData: PropTypes.object.isRequired,
  svgContent: PropTypes.string.isRequired,
  setSvgContent: PropTypes.func.isRequired,
  svgRef: PropTypes.object.isRequired,
};

export default TemplatePreview;
