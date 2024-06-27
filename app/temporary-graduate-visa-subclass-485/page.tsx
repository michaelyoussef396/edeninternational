import MigrationHeroSection from "@/components/MigrationHeroSection";
import VisaInfo from "@/components/VisaInfo";
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
        <VisaInfo />
    </main>
  );
}
