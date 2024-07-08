import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import TopNav from "@/components/TopNav";
import { FloatingNav } from "@/components/ui/Floating-NavBar";
import Header from "@/components/Header";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
 
const locales = ['en', 'de'];
 
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export const metadata: Metadata = {
  title: "Eden International",
  description: "Generated by create next app",
  icons: {
    icon: '/icon.png', // /public path
  },
};

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
      <NextIntlClientProvider messages={messages}>
        <TopNav />
        <FloatingNav locale={locale || 'en'} />
        <Header />
        {children}
        <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}