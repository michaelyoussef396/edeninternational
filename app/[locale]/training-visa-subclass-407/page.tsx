import { useTranslations } from 'next-intl';
import VisaComparison from "@/components/ComparisonCard";
import MigrationHeroSection from "@/components/MigrationHeroSection";
import TrainingVisaInfo from "@/components/TrainingVisaInfo";
import mainImage from '@/public/visual_SERFIN_A.webp';

export default function Home() {
  const t = useTranslations('trainingVisaHero');

  return (
    <main className="">
      <MigrationHeroSection
        imageSrc={mainImage}
        title={t('title')}
        highlightText={t('highlightText')}
        height="h-96"
      />
      <TrainingVisaInfo />
    </main>
  );
}
