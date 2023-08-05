import { useState } from 'react';
import PropTypes from 'prop-types';

function TemplateItem({ template, onSelect }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={`flex flex-col items-center justify-center `}>
      <div className="relative flex justify-center items-center border-2 border-teal-500 rounded-md p-2 w-full">
        {/* <img src={template.design} alt={template.name} className="w-full" /> */}
        <div dangerouslySetInnerHTML={{ __html: template.content }} />
        <div
          className={`absolute flex justify-center items-center rounded-sm p-2 w-full h-full opacity-20 ${
            isHovered ? 'bg-violet-500' : '' // Add a background color when hovered
          }`}
          onMouseEnter={() => setIsHovered(true)} // Set isHovered to true on mouse enter
          onMouseLeave={() => setIsHovered(false)}
        ></div>
      </div>

      {isHovered && (
        <button
          type="button"
          onClick={() => onSelect(template.id)}
          className="absolute bg-violet-600 text-white px-4 py-2 rounded-md mt-4"
          onMouseEnter={() => setIsHovered(true)} // Set isHovered to true on mouse enter
          onMouseLeave={() => setIsHovered(false)}
        >
          Select
        </button>
      )}
    </div>
  );
}

TemplateItem.propTypes = {
  template: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default TemplateItem;
