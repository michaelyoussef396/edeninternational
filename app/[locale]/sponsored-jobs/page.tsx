import { useTranslations } from 'next-intl';
import FiveStepsToDream from "@/components/FiveStepsToDream";
import HeroSection from "@/components/HeroSection";
import mainImage from "@/public/1001_Team.webp";

export default function Home() {
  const t = useTranslations('home');

  return (
    <main className="">
      <HeroSection
        imageSrc={mainImage}
        title={t('heroSection.title')}
        highlightText=""
        height="h-96"
      />
      <FiveStepsToDream />
    </main>
  );
}
