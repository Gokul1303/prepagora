import React from 'react';

const TestTailwind = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Test Component</div>
            <p className="mt-2 text-gray-500">
              If you can see this styled component, Tailwind CSS is working correctly!
            </p>
            <div className="mt-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Test Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestTailwind;
