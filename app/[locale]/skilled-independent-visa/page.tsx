import VisaComponent from "@/components/VisaComponent";
import VisaComparison from "@/components/ComparisonCard";
import SkillIndependence from "@/components/SkillIndependence";
import mainImage from '@/public/Prepaid-Cards.webp'
import MigrationHeroSection from "@/components/MigrationHeroSection";
import { useTranslations } from "next-intl";
export default function Home() {
  const t = useTranslations('home1');
  return (
    <main className="">
        <MigrationHeroSection
          imageSrc={mainImage}
          title={t('migrationHeroSection.title')}
          highlightText={t('migrationHeroSection.highlightText')}
          height="h-96"
        />
        <VisaComponent />
        <VisaComparison />
    </main>
  );
}
