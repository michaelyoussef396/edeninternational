import { useTranslations } from 'next-intl';
import VisaComparison from "@/components/ComparisonCard";
import MigrationHeroSection from "@/components/MigrationHeroSection";
import SkilledWorkRegionalVisa from "@/components/SkilledWorkRegionalVisa";
import VisaDetails from "@/components/VisaDetails";
import mainImage from '@/public/ACS.webp'
export default function Home() {
  const t = useTranslations('skilledWorkRegionalVisaHero');
  return (
    <main className="">
      <MigrationHeroSection
        imageSrc={mainImage}
        title={t('title')}
        highlightText={t('highlightText')}
        height="h-96"
      />
      <VisaDetails />
      <VisaComparison />
    </main>
  );
}
