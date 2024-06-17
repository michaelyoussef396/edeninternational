import React from 'react';

const statistics = [
  {
    icon: '🌍', // Replace with actual icon if available
    value: '20+',
    description: 'Worldwide Office Handle',
  },
  {
    icon: '📄', // Replace with actual icon if available
    value: '15.8k',
    description: 'Successful Visa Process',
  },
  {
    icon: '👥', // Replace with actual icon if available
    value: '99%',
    description: 'Satisfied Clients Maintains',
  },
];

const Statistics = () => {
  return (
    <section className="py-16" style={{ backgroundImage: 'url(/city-far-away-looking-blue-grey-ecology-monochrome-flate-graphice-illustration-vector.jpg)' }}>
      <div className="max-w-6xl mx-auto text-center p-6 md:p-12 flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-0">
        {statistics.map((stat, index) => (
          <div key={index} className="bg-red-600 text-white p-8 rounded-lg shadow-lg w-full max-w-xs mx-4">
            <div className="text-5xl mb-4">{stat.icon}</div>
            <h4 className="text-3xl font-bold mb-2">{stat.value}</h4>
            <p className="text-lg">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
