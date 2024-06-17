
import AboutUs from "@/components/AboutUs";
import CountryList from "@/components/CountryList";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import TopNav from "@/components/TopNav";
import VisaCategories from "@/components/VisaCategories";
import WorkingProcess from "@/components/WorkingProcess";
import { FloatingNav } from "@/components/ui/Floating-NavBar";
import ScrollingLogos from "@/components/ScrollingLogos";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <TopNav />
      <FloatingNav/>
      <Header />
      <Hero />
      <AboutUs />
      <VisaCategories />
      <CountryList />
      <WorkingProcess />
      <Statistics />
      <ScrollingLogos />
    </main>
  );
}
