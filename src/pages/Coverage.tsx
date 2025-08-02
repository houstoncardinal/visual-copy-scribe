import SEO from "@/components/SEO";
import { pageSEO } from "@/utils/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Shield,
  CheckCircle
} from "lucide-react";

const Coverage = () => {
  const states = [
    {
      name: "TEXAS",
      code: "TX",
      description: "Our primary state of operations with comprehensive licensing and extensive coverage across all major metropolitan areas.",
      cities: ["Dallas", "Houston", "Austin", "San Antonio", "Fort Worth"],
      services: ["Executive Protection", "Event Security", "General Security"]
    },
    {
      name: "NEW YORK",
      code: "NY", 
      description: "Full service coverage throughout New York state with specialized focus on high-profile protection and corporate security.",
      cities: ["New York City", "Albany", "Buffalo", "Rochester", "Syracuse"],
      services: ["VIP Protection", "Corporate Security", "Event Security", "Residential Security"]
    },
    {
      name: "FLORIDA",
      code: "FL",
      description: "Comprehensive security services across Florida with expertise in resort and entertainment venue protection.",
      cities: ["Miami", "Orlando", "Tampa", "Jacksonville", "Fort Lauderdale"],
      services: ["Resort Security", "Event Protection", "Asset Protection", "Personal Security"]
    },
    {
      name: "NEW JERSEY",
      code: "NJ",
      description: "Strategic coverage across New Jersey with focus on corporate and residential security solutions.",
      cities: ["Newark", "Jersey City", "Paterson", "Elizabeth", "Trenton"],
      services: ["Corporate Security", "Residential Protection", "Executive Security", "Event Management"]
    },
    {
      name: "TENNESSEE", 
      code: "TN",
      description: "Full-service security operations throughout Tennessee with specialized entertainment industry expertise.",
      cities: ["Nashville", "Memphis", "Knoxville", "Chattanooga", "Clarksville"],
      services: ["Entertainment Security", "Corporate Protection", "Personal Security", "Event Coverage"]
    },
    {
      name: "CALIFORNIA",
      code: "CA",
      description: "Comprehensive West Coast operations with celebrity protection and high-end security services.",
      cities: ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "San Jose"],
      services: ["Celebrity Protection", "Executive Security", "Event Security", "Asset Protection"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO data={pageSEO.coverage} />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            COVERAGE AREAS
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Licensed for armed and unarmed security services across six states with 
            comprehensive coverage and local expertise.
          </p>
        </div>
      </section>

      {/* Coverage Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              WHERE WE OPERATE
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multi-state operations with local expertise and nationwide coordination
            </p>
          </div>

          {/* States Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {states.map((state, index) => (
              <Card key={index} className="bg-white border-2 border-accent rounded-xl p-6 shadow-lg flex flex-col items-center">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-accent p-3 rounded-lg">
                      <MapPin className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{state.name}</h3>
                      <p className="text-sm text-muted-foreground">State Code: {state.code}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {state.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Major Cities */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Major Cities Covered</h4>
                      <ul className="space-y-2">
                        {state.cities.map((city, cityIndex) => (
                          <li key={cityIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{city}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Services */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Available Services</h4>
                      <ul className="space-y-2">
                        {state.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border/20">
                    <Button variant="securityOutline" asChild className="w-full">
                      <Link to={`/contact?state=${state.code}`}>
                        Request Quote for {state.name}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              24/7 NATIONWIDE COVERAGE
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              No matter where you are in our coverage areas, we provide immediate response 
              and comprehensive security solutions tailored to your location and needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">24/7 Response</h3>
                <p className="text-sm text-muted-foreground">Round-the-clock availability in all coverage areas</p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Licensed & Insured</h3>
                <p className="text-sm text-muted-foreground">Fully compliant in all operating states</p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Local Expertise</h3>
                <p className="text-sm text-muted-foreground">Regional knowledge with national standards</p>
              </div>
            </div>

            <div className="bg-background/50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Contact us today to discuss coverage in your area and receive a customized security quote.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="security" size="lg" asChild>
                  <Link to="/contact">Request Coverage Quote</Link>
                </Button>
                <a href="tel:214-998-3597">
                  <Button variant="securityOutline" size="lg" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call 214-998-3597
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Coverage;