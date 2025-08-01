import Hero from "@/components/Hero";
import WhatWeOffer from "@/components/WhatWeOffer";
import WhereWeOperate from "@/components/WhereWeOperate";
import OurServices from "@/components/OurServices";
import CallToAction from "@/components/CallToAction";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhatWeOffer />
      <WhereWeOperate />
      <OurServices />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;