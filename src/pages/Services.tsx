import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Star, 
  Building, 
  Plane, 
  Users, 
  Home,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Star,
      title: "Celebrity/VIP Protection",
      description: "Discrete, professional protection for high-profile individuals, celebrities, and VIPs requiring specialized security services.",
      features: ["24/7 Personal Protection", "Discrete Operations", "Threat Assessment", "Travel Security"],
      link: "/services/vip-protection"
    },
    {
      icon: Shield,
      title: "Executive Protection",
      description: "Comprehensive security for business executives, corporate leaders, and high-net-worth individuals.",
      features: ["Risk Assessment", "Advance Team Coordination", "Secure Transportation", "Workplace Security"],
      link: "/services/executive-protection"
    },
    {
      icon: Plane,
      title: "International Operations",
      description: "Global security services with international coverage and cross-border protection capabilities.",
      features: ["Global Coverage", "International Protocols", "Multi-Language Teams", "Embassy Coordination"],
      link: "/services/international-operations"
    },
    {
      icon: Users,
      title: "Events/Tours",
      description: "Specialized security for events, concerts, tours, and large gatherings with crowd management.",
      features: ["Crowd Control", "Venue Security", "Access Control", "Emergency Response"],
      link: "/services/events-tours"
    },
    {
      icon: Home,
      title: "Domestic Protection/Security",
      description: "Residential and personal security solutions for homes, families, and personal protection needs.",
      features: ["Home Security", "Family Protection", "Personal Escorts", "Security Consultation"],
      link: "/services/domestic-security"
    },
    {
      icon: Building,
      title: "Residential & Commercial",
      description: "Property protection services for residential complexes, commercial buildings, and business facilities.",
      features: ["Property Security", "Access Control", "Surveillance", "Emergency Response"],
      link: "/services/residential-commercial"
    }
  ];

  const additionalServices = [
    "Apartment Complexes - 24/7 residential security monitoring",
    "Banks - Financial institution protection services", 
    "Hotels - Hospitality security and guest protection",
    "Bars & Entertainment - Crowd control and venue security",
    "Asset Protection - High-value asset and property security",
    "Workplace Violence Prevention - Threat assessment and mitigation",
    "VIP Escort / Concierge - Executive protection services",
    "Private School Escorts - Safe transport for students",
    "Weddings - Special event security coordination",
    "Private Parties - Event security and access control"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Security Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive security solutions tailored to your specific needs and risk assessment. 
            Licensed & Insured Security Professionals Nationwide.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Primary Security Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized protection services delivered by highly trained armed and unarmed personnel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105 bg-gradient-card border-border/20 h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-gradient-accent rounded-full w-16 h-16 flex items-center justify-center group-hover:animate-security-pulse">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="securityOutline" asChild className="w-full group">
                    <Link to={service.link} className="flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Specialized Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Extended security coverage for various industries and specific protection needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-colors">
                <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Notice */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Professional Notice
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                All services include comprehensive risk assessment and customized security protocols.
              </p>
              <p className="font-semibold">
                We maintain the highest standards of professionalism and discretion.
              </p>
              <p>
                All of our security officers are fully licensed, insured, and rigorously trained to operate 
                in both standard and high-risk environments. Whether providing visible deterrence or armed protection, 
                our personnel are prepared to meet the unique demands of each assignment.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button variant="securityOutline" size="lg" asChild>
                <Link to="/coverage">View Coverage Areas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;