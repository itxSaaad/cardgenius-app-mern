import { useEffect } from 'react';

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

function TemplatePreview(props) {
  // console.log(props);

  useEffect(() => {
    const template = props.templates.find(
      (template) => template.id === props.selectedTemplate
    );

    if (template) {
      const svgContent = updateSvgContent(
        template.content,
        props.userData.idCardCredential
      );
      props.setSvgContent(svgContent);
    }
  }, [props.selectedTemplate, props.templates]);
  return (
    <Card>
      <div
        className="rounded-md"
        ref={props.svgRef}
        dangerouslySetInnerHTML={{ __html: props.svgContent }}
      />
    </Card>
  );
}

export default TemplatePreview;
