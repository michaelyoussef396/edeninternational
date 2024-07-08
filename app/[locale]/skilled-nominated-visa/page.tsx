import AboutVisa from "@/components/AboutVisa";
import VisaComparison from "@/components/ComparisonCard";
import MigrationHeroSection from "@/components/MigrationHeroSection";
import SkilledNominatedVisa from "@/components/SkilledNominatedVisa";
import mainImage from '@/public/konya-en-iyi-dijital-ajans-konya-en-iyi-sosyal-medya-ajansi-konya-en-iyi-web-tasarim-konya-en-iyi-seo-47.webp';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('skilledMigrationHeroSection');

  return (
    <main className="">
        <MigrationHeroSection
          imageSrc={mainImage}
          title={t('skilledNominatedVisaTitle')}
          highlightText={t('subclass190')}
          height="h-96"
        />
        <AboutVisa />
        <VisaComparison />
    </main>
  );
}
