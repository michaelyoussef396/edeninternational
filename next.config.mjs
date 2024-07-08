import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  i18n: {
    locales: ['en', 'ar', 'hi', 'fr', 'es', 'it', 'hr', 'tr', 'mt', 'de', 'fil', 'ko', 'cmn'], // Add your supported locales here
    defaultLocale: 'en',
  },
};

export default withNextIntl(nextConfig);
