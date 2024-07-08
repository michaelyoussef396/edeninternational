import React from 'react';
import { useTranslations } from 'next-intl';

const VisaDetails = () => {
  const t = useTranslations('visaDetails');

  // Extract the list items and other content from the translations
  const qualifyList = t('qualifyList', { returnObjects: true }) as unknown as string[];
  const visaAllowsList = t('visaAllowsList', { returnObjects: true }) as unknown as string[];
  const durationConditionsList = t('durationConditionsList', { returnObjects: true }) as unknown as string[];
  const otherRequirementsList = t('otherRequirementsList', { returnObjects: true }) as unknown as { title: string, content: string }[];

  return (
    <div className="container mx-auto px-4 py-8 text-center md:text-left">
      <h1 className="text-3xl font-bold mb-4">{t('aboutTitle')}</h1>
      <p className="mb-4">{t('aboutDescription1')}</p>
      <p className="mb-4">{t('aboutDescription2')}</p>
      <p className="mb-4">{t('aboutDescription3')}</p>
      <p className="mb-4">{t('aboutDescription4')}</p>

      <h2 className="text-2xl font-bold mt-8">{t('qualifyTitle')}</h2>
      <p className="mb-4">{t('qualifyDescription')}</p>
      <ul className="list-disc list-inside mb-8 mx-auto md:mx-0 max-w-xs md:max-w-full">
        {Array.isArray(qualifyList) && qualifyList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mt-8">{t('visaAllowsTitle')}</h2>
      <p className="mb-4">{t('visaAllowsDescription')}</p>
      <ul className="list-disc list-inside mb-8 mx-auto md:mx-0 max-w-xs md:max-w-full">
        {Array.isArray(visaAllowsList) && visaAllowsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mt-8">{t('durationConditionsTitle')}</h2>
      <p className="mb-4">{t('durationConditionsDescription')}</p>
      <ul className="list-disc list-inside mb-8 mx-auto md:mx-0 max-w-xs md:max-w-full">
        {Array.isArray(durationConditionsList) && durationConditionsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mt-8">{t('otherRequirementsTitle')}</h2>
      {Array.isArray(otherRequirementsList) && otherRequirementsList.map((requirement, index) => (
        <div key={index}>
          <h3 className="text-xl font-bold mt-4">{requirement.title}</h3>
          <p className="mb-4">{requirement.content}</p>
        </div>
      ))}

      <h2 className="text-2xl font-bold mt-8">{t('processingTimeTitle')}</h2>
      <p className="mb-4">{t('processingTimeDescription1')}</p>
      <p className="mb-4">{t('processingTimeDescription2')}</p>
    </div>
  );
};

export default VisaDetails;
