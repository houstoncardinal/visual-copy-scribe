import SEO from "@/components/SEO";
import { pageSEO } from "@/utils/seo";
import Hero from "@/components/Hero";
import WhatWeOffer from "@/components/WhatWeOffer";
import OurServices from "@/components/OurServices";
import CallToAction from "@/components/CallToAction";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO data={pageSEO.home} />
      <Header />
      <Hero />
      <WhatWeOffer />
      <OurServices />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;