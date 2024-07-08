import VisitorToStudentVisa from "@/components/VisitorToStudentVisa";
import { StudentTestimonials } from "@/components/StudentTestimonials";
import CardGrid from "@/components/CardGrid";
import HeroSection from "@/components/HeroSection";
import mainImage from '@/public/main3.png'
import ShoreServices from "@/components/ShoreServices";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("heroSectionStudent");

  return (
    <main className="">
      <HeroSection
        imageSrc={mainImage}
        title={t("title")}
        highlightText={t("highlightText")}
        height="h-screen"
      />
      <ShoreServices />
      <VisitorToStudentVisa />
      <StudentTestimonials />
      <CardGrid />
    </main>
  );
}
