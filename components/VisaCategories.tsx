import Image from 'next/image';
import Link from 'next/link';

const VisaCategories = () => {
  return (
    <section className="pt-16 bg-black text-white">
      <div className="max-w-6xl mx-auto p-6 md:p-12">
        <h2 className="text-center text-red-600 mb-4">VISA CATEGORIES</h2>
        <h3 className="text-center text-3xl font-bold mb-12">Immigration & Visa Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <div className="relative w-full h-80 bg-white border border-gray-300 rounded-lg overflow-hidden">
              <Image 
                src="/visa-2.png" // make sure this image path is correct
                alt="Student Visas"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h4 className="text-xl font-semibold mt-4">Student Visas</h4>
            <p className="mt-2">Student visas are non-immigrant visas and do not require the applicant to gain citizenship.</p>
            <a href="/student-visas" className="inline-block mt-4 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">Read More</a>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <div className="relative w-full h-80 bg-white border border-gray-300 rounded-lg overflow-hidden">
              <Image 
                src="/visa-1.png" // make sure this image path is correct
                alt="Migration"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h4 className="text-xl font-semibold mt-4">Migration</h4>
            <p className="mt-2">You’ll be surprised to know that your experience and qualification may create pathways to skilled migration in Australia.</p>
            <a href="/migration" className="inline-block mt-4 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaCategories;
