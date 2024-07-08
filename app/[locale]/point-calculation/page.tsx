import HeroSection from "@/components/HeroSection";
import PointCalc from "@/components/PointCalc";
import mainImage from  "@/public/tsiatsios22112022-20.webp";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('home2');

  return (
    <main className="">
      <HeroSection
        imageSrc={mainImage}
        title={t('title')}
        highlightText={t('highlightText')}
        height="h-96"
      />
      <PointCalc />
    </main>
  );
}
