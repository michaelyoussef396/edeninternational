import AffiliatedInstitutions from "@/components/AffiliatedInstitutions";
import HeroSection from "@/components/HeroSection";
import ScrollingLogos from "@/components/ScrollingLogos";
import Affiliated from "@/components/affilated";
import mainImage from '@/public/US_School5441_Output.webp';
import image from "@/public/footer-3.png";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('heroSection');

  return (
    <main className="">
      <HeroSection
        imageSrc={mainImage}
        title={t('firstTitle')}
        highlightText={t('firstHighlightText')}
        height="h-96"
      />
      <AffiliatedInstitutions />
      <HeroSection
        imageSrc={image}
        title={t('secondTitle')}
        highlightText={t('secondHighlightText')}
        height="h-36"
      />
      <Affiliated />
      <ScrollingLogos />
    </main>
  );
}
