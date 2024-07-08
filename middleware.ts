import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ar', 'hi', 'fr', 'es', 'it', 'hr', 'tr', 'mt', 'de', 'fil', 'ko', 'cmn'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|en|hi|fr|es|it|hr|tr|mt|de|fil|ko|cmn)/:path*']
};