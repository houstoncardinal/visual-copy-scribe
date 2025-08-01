import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Building, 
  Landmark, 
  Hotel, 
  Music, 
  Shield, 
  AlertTriangle,
  User,
  GraduationCap,
  Heart,
  Users
} from "lucide-react";

const OurServices = () => {
  const services = [
    {
      icon: Building,
      title: "APARTMENT COMPLEXES",
      description: "24/7 residential security monitoring"
    },
    {
      icon: Landmark,
      title: "BANKS",
      description: "Financial institution protection services"
    },
    {
      icon: Hotel,
      title: "HOTELS",
      description: "Hospitality security and guest protection"
    },
    {
      icon: Music,
      title: "BARS & ENTERTAINMENT",
      description: "Crowd control and venue security"
    },
    {
      icon: Shield,
      title: "ASSET PROTECTION",
      description: "High-value asset and property security"
    },
    {
      icon: AlertTriangle,
      title: "WORKPLACE VIOLENCE PREVENTION",
      description: "Threat assessment and mitigation"
    },
    {
      icon: User,
      title: "VIP ESCORT / CONCIERGE",
      description: "Executive protection services"
    },
    {
      icon: GraduationCap,
      title: "PRIVATE SCHOOL ESCORTS",
      description: "Safe transport for students"
    },
    {
      icon: Heart,
      title: "WEDDINGS",
      description: "Special event security coordination"
    },
    {
      icon: Users,
      title: "PRIVATE PARTIES",
      description: "Event security and access control"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            OUR SERVICES
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            COMPREHENSIVE SECURITY SOLUTIONS TAILORED TO YOUR SPECIFIC NEEDS AND RISK ASSESSMENT
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group text-center p-6 bg-gradient-card border-border/20 hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="mb-4 p-3 bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-sm font-bold text-foreground mb-2 uppercase">{service.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professional Notice */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">PROFESSIONAL NOTICE</h3>
          <div className="space-y-3 text-lg max-w-4xl mx-auto mb-6">
            <p className="font-semibold">
              ALL SERVICES INCLUDE COMPREHENSIVE RISK ASSESSMENT AND CUSTOMIZED SECURITY PROTOCOLS.
            </p>
            <p className="text-base">
              WE MAINTAIN THE HIGHEST STANDARDS OF PROFESSIONALISM AND DISCRETION.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">REQUEST A QUOTE</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/careers">APPLY NOW</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;