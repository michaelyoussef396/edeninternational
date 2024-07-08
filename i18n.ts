import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'ar', 'hi', 'fr', 'es', 'it', 'hr', 'tr', 'mt', 'de', 'fil', 'ko', 'cmn'];

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`/messages/${locale}.json`)).default
  };
});
