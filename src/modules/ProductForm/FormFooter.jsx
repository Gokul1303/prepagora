import React from 'react';

const FormFooter = ({ currentStep, onBack, onNext, isLastStep }) => {
  return (
    <div className="mt-8 pt-5 border-t border-gray-200 flex justify-between">
      {currentStep > 1 ? (
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Back
        </button>
      ) : (
        <div></div>
      )}
      
      <button
        type="button"
        onClick={onNext}
        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {isLastStep ? 'Submit' : 'Next'}
      </button>
    </div>
  );
};

export default FormFooter;
