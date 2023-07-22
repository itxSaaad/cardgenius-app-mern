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
  const userData = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '1234567890',
    address: '123, Lorem Ipsum, Dolor Sit Amet',
    idImage: 'https://i.imgur.com/7lIh6tY.png',
  };

  useEffect(() => {
    const template = props.templates.find(
      (template) => template.id === props.selectedTemplate
    );

    if (template) {
      const svgContent = updateSvgContent(template.content, userData);
      props.setSvgContent(svgContent);
    }
  }, [props.selectedTemplate, props.templates]);
  return (
    <Card>
      <div
        className="rounded-md"
        dangerouslySetInnerHTML={{ __html: props.svgContent }}
      />
    </Card>
  );
}

export default TemplatePreview;
