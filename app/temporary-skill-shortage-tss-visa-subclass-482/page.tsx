import MigrationHeroSection from "@/components/MigrationHeroSection";
import ReusableMigrationVisa from "@/components/ReusableMigrationVisa";
import { temporarySkilledVisaData } from "@/data";
import mainImage from '@/public/main3.png'

export default function Home() {
  return (
    <main className="">
        <MigrationHeroSection
          imageSrc={mainImage}
          title="TEMPORARY SKILL SHORTAGE (TSS) VISA"
          highlightText="SUBCLASS 482"
          height="h-96"
        />
        <ReusableMigrationVisa data={temporarySkilledVisaData} />
    </main>
  );
}
