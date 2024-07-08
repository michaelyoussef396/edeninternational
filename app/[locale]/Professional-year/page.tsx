import { useTranslations } from 'next-intl';
import ContentSection from '@/components/ContentSection';
import InvertedContentSection from '@/components/InvertedContentSection';
import HeroSection from '@/components/HeroSection';

import studyImage from '@/public/study.jpg';
import ecaImage from '@/public/eca-img.jpg';
import image2 from "@/public/Performance-Education.webp";
import image3 from "@/public/ATMC-Professional-Year-768x538.webp";
import heroImage from '@/public/1001_Team.webp';

export default function Home() {
  const t = useTranslations('proHeroSection');
  const proYearPrograms = useTranslations('professionalYearPrograms');
  const eduCentre = useTranslations('educationCentre');
  const performanceEdu = useTranslations('performanceEducation');
  const atmcYear = useTranslations('atmcProfessionalYear');

  const contentData = {
    proHeroSection: {
      imageSrc: heroImage,
      title: t('title'),
      highlightText: t('highlightText'),
      height: t('height'),
    },
    professionalYearPrograms: {
      title: proYearPrograms('title'),
      highlightText: proYearPrograms('highlightText'),
      content: proYearPrograms('content'),
      imageSrc: studyImage,
    },
    educationCentre: {
      title: eduCentre('title'),
      highlightText: eduCentre('highlightText'),
      content: eduCentre('content'),
      imageSrc: ecaImage,
    },
    performanceEducation: {
      title: performanceEdu('title'),
      highlightText: performanceEdu('highlightText'),
      content: performanceEdu('content'),
      imageSrc: image2,
    },
    atmcProfessionalYear: {
      title: atmcYear('title'),
      highlightText: atmcYear('highlightText'),
      content: atmcYear('content'),
      imageSrc: image3,
    },
  };

  const {
    proHeroSection,
    professionalYearPrograms,
    educationCentre,
    performanceEducation,
    atmcProfessionalYear,
  } = contentData;

  return (
    <main className="">
      <HeroSection
        imageSrc={proHeroSection.imageSrc}
        title={proHeroSection.title}
        highlightText={proHeroSection.highlightText}
        height={proHeroSection.height}
      />
      <ContentSection
        {...professionalYearPrograms}
        backgroundColor="bg-white"
        textColor="text-black"
      />
      <InvertedContentSection
        {...educationCentre}
      />
      <ContentSection
        {...performanceEducation}
        backgroundColor="bg-white"
        textColor="text-black"
      />
      <InvertedContentSection
        {...atmcProfessionalYear}
      />
    </main>
  );
}
