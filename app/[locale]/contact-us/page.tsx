import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import mainImage from '@/public/f200968a6e72.webp';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('heroSectionCon');

  return (
    <main className="">
      <HeroSection
        imageSrc={mainImage}
        title={t('contactUsTitle')}
        highlightText={t('contactUsHighlightText')}
        height="h-96"
      />
      <ContactForm />
    </main>
  );
}
