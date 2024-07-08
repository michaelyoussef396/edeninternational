import AccordionCanada from "@/components/AccordionCanada";
import HeroSection from "@/components/HeroSection";
import QuickSteps from "@/components/QuickSteps";
import ScrollingLogos from "@/components/ScrollingLogos";
import WhyStudyInCanada from "@/components/WhyStudyInCanada";
import mainImage from '@/public/main3.png'
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('accordionCanada');
  const studyInCanadaItems = t.raw('items');

  return (
    <main className="">
      <HeroSection
        imageSrc={mainImage}
        title={t('title')}
        highlightText={t('highlightText')}
        height="h-96"
      />
      <WhyStudyInCanada />
      <QuickSteps />
      <AccordionCanada items={studyInCanadaItems} />
      <ScrollingLogos />
    </main>
  );
}
