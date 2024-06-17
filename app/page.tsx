
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TopNav from "@/components/TopNav";
import { FloatingNav } from "@/components/ui/Floating-NavBar";

import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <TopNav />
      <FloatingNav/>
      <Header />
      <Hero />
    </main>
  );
}