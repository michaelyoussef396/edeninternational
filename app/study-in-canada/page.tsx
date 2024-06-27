import Accordion from "@/components/Accordion";
import HeroSection from "@/components/HeroSection";
import QuickSteps from "@/components/QuickSteps";
import ScrollingLogos from "@/components/ScrollingLogos";
import StudyProcess from "@/components/StudyingProccess";
import TopReasonsCanada from "@/components/TopReasonsCanada";
import WhyStudyInCanada from "@/components/WhyStudyInCanada";
import mainImage from '@/public/main3.png'
export default function Home() {
  return (
    <main className="">
      <HeroSection
      imageSrc={mainImage}
      title="STUDY IN"
      highlightText="CANADA"
      height="h-96"
      />
        <WhyStudyInCanada />
        <QuickSteps />
        <TopReasonsCanada />
        <StudyProcess />
        <ScrollingLogos />
    </main>
  );
}
