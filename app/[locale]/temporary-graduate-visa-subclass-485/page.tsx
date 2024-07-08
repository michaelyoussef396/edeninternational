import MigrationHeroSection from "@/components/MigrationHeroSection";
import VisaInfo from "@/components/VisaInfo";
import mainImage from "@/public/best-reason-to-use-cbd-oil.webp";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('tempTrainingVisa');

  return (
    <main className="">
      <MigrationHeroSection
        imageSrc={mainImage}
        title={t('title')}
        highlightText={t('highlightText')}
        height="h-96"
      />
      <VisaInfo />
    </main>
  );
}
