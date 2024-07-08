"use client";
import { useTranslations } from 'next-intl';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';
import sponserJobsImage from '../public/sponserjobs.jpg'; // Make sure the image is in the public folder

const FiveStepsToDream = () => {
  const t = useTranslations('fiveSteps');

  return (
    <div className="container mx-auto my-16 px-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        <FormattedMessage
          id="fiveSteps.title"
          defaultMessage="{highlightText} Steps to Your Dream"
          values={{
            highlightText: <span className="text-red-500">{t('highlightText')}</span>
          }}
        />
      </h1>
      <p className="text-center mb-8">
        {t('description')}
      </p>
      <div className="flex justify-center">
        <div className="relative w-full max-w-4xl">
          <Image
            src={sponserJobsImage}
            alt="Five Easy Steps"
            layout="responsive"
            objectFit="contain"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default FiveStepsToDream;
