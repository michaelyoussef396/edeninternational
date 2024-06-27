import VisaComparison from "@/components/ComparisonCard";
import MigrationHeroSection from "@/components/MigrationHeroSection";
import TrainingVisaInfo from "@/components/TrainingVisaInfo";
import mainImage from '@/public/main3.png'
export default function Home() {
  return (
    <main className="">
        <MigrationHeroSection
          imageSrc={mainImage}
          title="TRAINING VISA"
          highlightText="SUBCLASS 407"
          height="h-96"
        />
        <TrainingVisaInfo />
    </main>
  );
}
