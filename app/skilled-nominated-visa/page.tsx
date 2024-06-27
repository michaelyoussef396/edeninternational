import AboutVisa from "@/components/AboutVisa";
import VisaComparison from "@/components/ComparisonCard";
import MigrationHeroSection from "@/components/MigrationHeroSection";
import SkilledNominatedVisa from "@/components/SkilledNominatedVisa";
import mainImage from '@/public/main3.png'
export default function Home() {
  return (
    <main className="">
        <MigrationHeroSection
          imageSrc={mainImage}
          title="SKILLED NOMINATED VISA"
          highlightText="SUBCLASS 190"
          height="h-96"
        />
        <AboutVisa />
        <VisaComparison />
    </main>
  );
}
