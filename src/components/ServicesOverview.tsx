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
  ShieldCheck,
  Award,
  Clock,
  MapPin
} from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: Star,
      title: "Celebrity/VIP Protection",
      description: "Discrete, professional protection for high-profile individuals",
      link: "/services/vip-protection"
    },
    {
      icon: Shield,
      title: "Executive Protection",
      description: "Comprehensive security for business executives and leaders",
      link: "/services/executive-protection"
    },
    {
      icon: Plane,
      title: "International Operations",
      description: "Global security services and international coverage",
      link: "/services/international-operations"
    },
    {
      icon: Users,
      title: "Events/Tours",
      description: "Event security and tour protection services",
      link: "/services/events-tours"
    },
    {
      icon: Home,
      title: "Domestic Protection/Security",
      description: "Residential and personal security solutions",
      link: "/services/domestic-security"
    },
    {
      icon: Building,
      title: "Residential & Commercial",
      description: "Property protection for homes and businesses",
      link: "/services/residential-commercial"
    }
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "Licensed & Insured",
      description: "Fully compliant with state regulations and comprehensive insurance coverage"
    },
    {
      icon: Award,
      title: "Elite Training",
      description: "Rigorous background checks and professional training programs"
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Round-the-clock availability and immediate response capabilities"
    },
    {
      icon: MapPin,
      title: "Multi-State Coverage",
      description: "Licensed to operate across Texas, New York, Florida, New Jersey, Tennessee, and California"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Services Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Providing you protection is our only business. Comprehensive security solutions 
            tailored to your specific needs and risk assessment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105 bg-gradient-card border-border/20 hover:shadow-2xl hover:shadow-[var(--shadow-security)] hover:border-accent/80 hover:ring-2 hover:ring-accent/40 hover:scale-105 hover:bg-card/95 hover:z-10">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-gradient-accent rounded-full w-16 h-16 flex items-center justify-center group-hover:animate-security-pulse">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Button variant="securityOutline" asChild className="w-full">
                  <Link to={service.link}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-gradient-card rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Why Choose K&S Security?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-hero rounded-lg p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Secure Your Peace of Mind?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            All services include comprehensive risk assessment and customized security protocols. 
            We maintain the highest standards of professionalism and discretion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button variant="securityOutline" size="lg" asChild>
              <Link to="/careers">Apply Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;