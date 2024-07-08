import AppointmentForm from "./AppointmentForm";
import Link from "next/link";
import { useTranslations } from 'next-intl';

const PointCalc = () => {
  const t = useTranslations('pointCalc');

  const links = [
    { name: t('migration'), url: "/migration" },
    { name: t('tssVisa'), url: "/temporary-skill-shortage-tss-visa-subclass-482" },
    { name: t('trainingVisa'), url: "/training-visa-subclass-407" },
    { name: t('independentVisa'), url: "/skilled-independent-visa" },
    { name: t('nominatedVisa'), url: "/skilled-nominated-visa" },
    { name: t('regionalVisa'), url: "/skilled-work-regional-visa" },
    { name: t('sponsoredJobs'), url: "/sponsored-jobs" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 p-4 border-r md:border-r-0 md:border-b border-gray-200">
          <h2 className="text-2xl font-bold text-center md:text-left">{t('otherUsefulLinks')}</h2>
          <ul className="space-y-2 mt-4 text-center md:text-left">
            {links.map((item, index) => (
              <li key={index} className="flex items-center justify-center md:justify-start">
                <span className="text-red-500 mr-2">✔</span>
                  <a href={item.url} className="text-red-500 hover:underline">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-2/3 p-4 mt-8 md:mt
-0">
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
};

export default PointCalc;