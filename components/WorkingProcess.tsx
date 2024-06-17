import React from 'react';

const steps = [
  {
    step: '01',
    title: 'Fill In The Required Form',
    description: 'Amet minim mollit no duis deserunt ullamco.',
  },
  {
    step: '02',
    title: 'Submit Your Documents',
    description: 'Amet minim mollit no duis deserunt ullamco.',
  },
  {
    step: '03',
    title: 'Get Ready To Receive your Visa',
    description: 'Amet minim mollit no duis deserunt ullamco.',
  },
];

const WorkingProcess = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center p-6 md:p-12">
        <h3 className="text-red-600 text-sm mb-2">WORKING PROCESS</h3>
        <h2 className="text-3xl font-bold mb-12">3 Easy Steps to Get Quick Help</h2>
        <div className="flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-0 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-xs mx-4">
              <div className="flex justify-center items-center w-24 h-24 bg-red-600 text-white rounded-full text-2xl font-bold mb-4 mx-auto">
                <span>{step.step}</span>
                <span className="absolute bottom-1 text-xs">Step</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 right-[-3rem] transform -translate-y-1/2 text-red-600 text-xl">
                  <div className="mr-4">---&gt;</div> {/* Adjust the margin-right value to create the gap */}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
