import Hero from "@/components/sections/hero";
import Stats from "@/components/sections/stats";
import Audience from "@/components/sections/audience";
import Products from "@/components/sections/products";
import Services from "@/components/sections/services";
import WhyUs from "@/components/sections/why-us";
import Process from "@/components/sections/process";
import Gallery from "@/components/sections/gallery";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";
import OfferBanner from "../components/sections/offer-banner";


export default function Home() {
  return (
    <>
      <OfferBanner />
      <Hero />
      <Stats />
      <Audience />
      <Products />
      <Services />
      <WhyUs />
      <Process />
      <Gallery />
      <Testimonials />
      <FAQ />
      <CTA />
      
    </>
  );
}