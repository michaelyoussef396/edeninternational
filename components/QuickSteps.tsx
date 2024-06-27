import Image from 'next/image';
import stepsImage from '../public/admission.png'; // Ensure the image is placed in the public folder

const QuickSteps = () => {
  return (
    <div className="relative bg-black py-12 px-4 md:px-20">
      <div className="absolute inset-0">
        <Image
          src="/footer-3.png" // Ensure this image is placed in the public folder
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-50"
        />
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          QUICK STEPS OF <span className="text-red-500">ADMISSION PROCESS</span>
        </h1>
      </div>
      <div className="relative z-10 flex justify-center mt-8">
        <Image
          src={stepsImage}
          alt="Admission Steps"
          width={800} // Adjust the width as needed
          height={600} // Adjust the height as needed
          objectFit="contain"
          quality={100}
          className="rounded-lg"
        />
      </div>
      <div className="relative z-10 flex justify-center mt-8">
        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded">
          Click here to see the full visa process
        </button>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </div>
  );
};

export default QuickSteps;
