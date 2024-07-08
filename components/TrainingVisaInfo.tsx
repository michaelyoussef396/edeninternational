"use client"
import { useTranslations } from 'next-intl';
import React from 'react';

const TrainingVisaInfo = () => {
  const t = useTranslations('trainingVisa');

  const qualifyList = t('qualifyList', { returnObjects: true }) as unknown as string[];
  const subQualifyList = t('subQualifyList', { returnObjects: true }) as unknown as string[];
  const allowList = t('allowList', { returnObjects: true }) as unknown as string[];

  // Check if the lists are arrays, otherwise initialize them as empty arrays
  const qualifyListArray = Array.isArray(qualifyList) ? qualifyList : [];
  const subQualifyListArray = Array.isArray(subQualifyList) ? subQualifyList : [];
  const allowListArray = Array.isArray(allowList) ? allowList : [];

  return (
    <div className="container mx-auto py-12 px-4 text-center md:text-left">
      <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
      <p className="mb-8">{t('description')}</p>

      <h2 className="text-3xl font-bold mb-4">{t('qualifyTitle')}</h2>
      <p className="mb-4">{t('qualifyDescription')}</p>
      <ul className="list-disc list-inside mb-8 mx-auto md:mx-0 max-w-xs md:max-w-full">
        {qualifyListArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        <ul className="list-inside list-none ml-4">
          {subQualifyListArray.map((item, index) => (
            <li key={index}>— {item}</li>
          ))}
        </ul>
      </ul>

      <h2 className="text-3xl font-bold mb-4">{t('allowTitle')}</h2>
      <p className="mb-8">{t('allowDescription')}</p>
      <ul className="list-disc list-inside mb-8 mx-auto md:mx-0 max-w-xs md:max-w-full">
        {allowListArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-3xl font-bold mb-4">{t('conditionTitle')}</h2>
      <p className="mb-8">{t('conditionDescription')}</p>

      <h2 className="text-3xl font-bold mb-4">{t('workConditionTitle')}</h2>
      <p className="mb-8">{t('workConditionDescription')}</p>

      <h2 className="text-3xl font-bold mb-4">{t('healthInsuranceTitle')}</h2>
      <p className="mb-8">{t('healthInsuranceDescription')}</p>

      <h2 className="text-3xl font-bold mb-4">{t('locationTitle')}</h2>
      <p className="mb-8">{t('locationDescription')}</p>

      <h2 className="text-3xl font-bold mb-4">{t('familyMembersTitle')}</h2>
      <p className="mb-8">{t('familyMembersDescription')}</p>
    </div>
  );
};

export default TrainingVisaInfo;
