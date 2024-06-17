import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="relative pt-16 bg-white">
      <div className="absolute inset-0 bg-gray-100 opacity-50"></div>
      <div className="relative max-w-6xl mx-auto p-6 md:p-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0 relative">
            <Image 
              src="/about-1.png" // make sure this image path is correct
              alt="Person with Suitcase"
              width={500} // Adjust the width
              height={500} // Adjust the height
              className="w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left md:pl-8"> {/* Added padding here */}
            <span className="text-xl font-semibold text-red-600">Who we are?</span>
            <h2 className="text-3xl font-bold mb-4">A Few Words About Us</h2>
            <p className="mb-4">
              EDEN INTERNATIONAL was built in 2010, keeping in mind those struggling clients finding it hard to determine their career pathway abroad for onshore or offshore higher education, migration. Being a multinational company, with a head office in Sydney, equipped with worlds class consultants awarded with PIER and MARA certificates both in Sydney, Melbourne, Italy, Croatia Malta, Turkey and Bangladesh branch in order to provide our students and clients a seamless service all across the world.
            </p>
            <ul className="list-none text-left space-y-2">
              <li className="flex items-center text-base">
                <Image src="/tick.png" alt="Tick" width={20} height={20} className="mr-2" />
                Migration
              </li>
              <li className="flex items-center text-base">
                <Image src="/tick.png" alt="Tick" width={20} height={20} className="mr-2" />
                Student Admission
              </li>
              <li className="flex items-center text-base">
                <Image src="/tick.png" alt="Tick" width={20} height={20} className="mr-2" />
                Sponsored Jobs
              </li>
              <li className="flex items-center text-base">
                <Image src="/tick.png" alt="Tick" width={20} height={20} className="mr-2" />
                Skills Recognition
              </li>
            </ul>
            <div className="mt-4">
              <a href="https://edeninternational.in/about-us/" className="inline-block bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">About More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
