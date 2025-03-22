'use client'
import ButtonGradient from "../public/assets/svg/ButtonGradient";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Collaboration from "@/components/Collaboration";
import Services from "@/components/Services";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";
import Products from "@/components/Products";
import ContactSection from "@/components/Contact";
import AboutSection from "@/components/About";
import BlogPosts from "@/components/Blog";

export default function Home() {


  return (
    <>
    <div className="pt-[4.75rem] lg:pt-[5.25 overflow-hidden">
      <Header />
      <Hero />
      {/* <Products /> */}
      {/* <Collaboration /> */}
      <Services />
      {/* <Roadmap /> */}
      {/* <BlogPosts /> */}
      {/* <AboutSection /> */}
      <ContactSection />
      <Footer />
    </div>
    <ButtonGradient />
    </>
  );
}
