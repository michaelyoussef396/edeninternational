"use client"
import React from 'react';
import { useTranslations } from 'next-intl';

const VisaInfo = () => {
  const t = useTranslations('visaInfo');

  const qualifyList = t('qualifyList', { returnObjects: true }) as unknown as string[];
  const whatThisVisaAllowsList = t('whatThisVisaAllowsList', { returnObjects: true }) as unknown as string[];
  const durationConditionsList = t('durationConditionsList', { returnObjects: true }) as unknown as string[];
  const familyMembersList = t('familyMembersList', { returnObjects: true }) as unknown as string[];

  // Checking if the variables are actually arrays
  const isArray = (variable: any): variable is string[] => Array.isArray(variable);

  return (
    <div className="container mx-auto px-4 py-8 text-center md:text-left">
      <h1 className="text-2xl font-bold mb-4">{t('aboutTitle')}</h1>
      <p className="mb-4">{t('aboutDescription')}</p>

      <h2 className="text-xl font-bold mb-4">{t('qualifyTitle')}</h2>
      <p className="mb-4">{t('qualifyDescription')}</p>
      <ul className="list-disc list-inside mb-4 mx-auto md:mx-0 max-w-xs md:max-w-full">
        {isArray(qualifyList) && qualifyList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-bold mb-4">{t('whatThisVisaAllowsTitle')}</h2>
      <p className="mb-4">{t('whatThisVisaAllowsDescription')}</p>
      <ul className="list-disc list-inside mb-4 mx-auto md:mx-0 max-w-xs md:max-w-full">
        {isArray(whatThisVisaAllowsList) && whatThisVisaAllowsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-bold mb-4">{t('applyTitle')}</h2>
      <p className="mb-4">{t('applyDescription')}</p>

      <h2 className="text-xl font-bold mb-4">{t('durationConditionsTitle')}</h2>
      <p className="mb-4">{t('durationConditionsDescription')}</p>
      <ul className="list-disc list-inside mb-4 mx-auto md:mx-0 max-w-xs md:max-w-full">
        {isArray(durationConditionsList) && durationConditionsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-bold mb-4">{t('familyMembersTitle')}</h2>
      <p className="mb-4">{t('familyMembersDescription')}</p>
      <ul className="list-disc list-inside mb-4 mx-auto md:mx-0 max-w-xs md:max-w-full">
        {isArray(familyMembersList) && familyMembersList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3 className="text-lg font-bold mb-2">{t('stage1Title')}</h3>
      <p className="mb-4">{t('stage1Description')}</p>

      <h3 className="text-lg font-bold mb-2">{t('stage2Title')}</h3>
      <p className="mb-4">{t('stage2Description')}</p>

      <h3 className="text-lg font-bold mb-2">{t('stage3Title')}</h3>
      <p className="mb-4">{t('stage3Description')}</p>

      <h3 className="text-lg font-bold mb-2">{t('stage4Title')}</h3>
      <p className="mb-4">{t('stage4Description')}</p>

      <h2 className="text-xl font-bold mb-4">{t('otherRequirementsTitle')}</h2>
      <h3 className="text-lg font-bold mb-2">{t('healthTitle')}</h3>
      <p className="mb-4">{t('healthDescription')}</p>

      <h3 className="text-lg font-bold mb-2">{t('characterTitle')}</h3>
      <p className="mb-4">{t('characterDescription')}</p>

      <h3 className="text-lg font-bold mb-2">{t('locationTitle')}</h3>
      <p className="mb-4">{t('locationDescription')}</p>

      <h3 className="text-lg font-bold mb-2">{t('debtsTitle')}</h3>
      <p className="mb-4">{t('debtsDescription')}</p>

      <h3 className="text-lg font-bold mb-2">{t('visaCancelledRefusedTitle')}</h3>
      <p className="mb-4">{t('visaCancelledRefusedDescription')}</p>

      <h2 className="text-xl font-bold mb-4">{t('processingTimeTitle')}</h2>
      <p className="mb-4">{t('processingTimeDescription')}</p>
    </div>
  );
};

export default VisaInfo;
