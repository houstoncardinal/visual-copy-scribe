import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ServicesOverview />
      <Footer />
    </div>
  );
};

export default Home;