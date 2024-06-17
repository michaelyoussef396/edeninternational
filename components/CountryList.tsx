import Image from 'next/image';

const CountryList = () => {
  return (
    <section className="pt-16 bg-white">
      <div className="max-w-6xl mx-auto p-6 md:p-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h3 className="text-red-600 text-sm mb-2">SUPPORT AREA</h3>
          <h2 className="text-3xl font-bold mb-4">Country List For Immigration</h2>
          <h4 className="text-xl font-semibold mb-4">Country List:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ul className="list-none space-y-2">
              <li className="text-base"><span className="text-red-600 mr-2">•</span>Dubai</li>
              <li className="text-base"><span className="text-red-600 mr-2">•</span>Canada</li>
              <li className="text-base"><span className="text-red-600 mr-2">•</span>USA</li>
              <li className="text-base"><span className="text-red-600 mr-2">•</span>Australia</li>
              <li className="text-base"><span className="text-red-600 mr-2">•</span>Italy</li>
            </ul>
            <ul className="list-none space-y-2">
              <li className="text-base"><span className="text-red-600 mr-2">•</span>Croatia</li>
              <li className="text-base"><span className="text-red-600 mr-2">•</span>Turkey</li>
              <li className="text-base"><span className="text-red-600 mr-2">•</span>Malta</li>
              <li className="text-base"><span className="text-red-600 mr-2">•</span>Germany</li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="relative w-full h-[500px] overflow-hidden">
            <Image 
              src="/women-1.png" // make sure this image path is correct
              alt="Woman with Passport"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryList;
