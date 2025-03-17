'use client'
import ButtonGradient from "../public/assets/svg/ButtonGradient";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Collaboration from "@/components/Collaboration";
import Services from "@/components/Services";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";
import Products from "@/components/Products";

export default function Home() {


  return (
    <>
    <div className="pt-[4.75rem] lg:pt-[5.25 overflow-hidden">
      <Header />
      <Hero />
      {/* <Products /> */}
      {/* <Collaboration /> */}
      <Services />
      <Roadmap />
      <Footer className="" />
    </div>
    <ButtonGradient />
    </>
  );
}
