import PropTypes from 'prop-types';
import React from 'react';

function ProgressBar({ currentStep, totalSteps }) {
  return (
    <div className="w-full flex items-center justify-center">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <div
              className={`w-1/3 h-1 ${
                currentStep >= index + 1
                  ? 'bg-violet-700 transition-all duration-500 ease-in'
                  : 'bg-violet-400'
              }`}
            />
          )}
          <div
            className={`rounded-full w-8 h-8 flex items-center justify-center ${
              currentStep >= index + 1
                ? 'bg-violet-700 transition-all duration-500 ease-in'
                : 'bg-violet-400'
            }`}
          >
            <span
              className={`text-white ${
                currentStep >= index + 1
                  ? 'font-bold transition-all duration-500 ease-in'
                  : 'font-normal'
              }`}
            >
              {index + 1}
            </span>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

ProgressBar.propTypes = {
  currentStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
};

export default ProgressBar;
