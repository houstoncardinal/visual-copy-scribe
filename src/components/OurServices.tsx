import { BentoGrid } from "@/components/ui/bento-grid";
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
      title: "VIP CONCIERGE",
      description: "Professional concierge services"
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
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight uppercase mb-4 drop-shadow-lg">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-semibold">
            Comprehensive Security Solutions Tailored to Your Needs
          </p>
        </div>

        {/* Services Grid - 4x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-xl overflow-hidden transition-all duration-300 border border-gray-100/80 bg-white hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative flex flex-col space-y-4 h-full">
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-accent group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                <div className="space-y-2 text-center">
                  <h3 className="font-bold text-lg text-gray-900 tracking-tight leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    {service.description}
                  </p>
                </div>

                <div className="mt-auto pt-4">
                  <div className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                    Learn More →
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-gray-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Professional Notice - Magical CTA */}
        <div className="max-w-3xl mx-auto mt-16 mb-8">
          <div className="relative bg-gradient-to-br from-accent/10 via-white to-accent/5 border-2 border-accent rounded-2xl shadow-2xl p-12 flex flex-col items-center text-center overflow-hidden">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl z-0 animate-pulse-slow" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl z-0 animate-pulse-slow" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-accent mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
                <span className="main-title text-3xl md:text-4xl font-extrabold text-primary tracking-tight">Professional Security, Trusted Results</span>
              </div>
              <p className="text-lg text-muted-foreground font-medium mb-2">All services include comprehensive risk assessment and customized security protocols.</p>
              <p className="text-base text-muted-foreground mb-6">We maintain the highest standards of professionalism and discretion.</p>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <Button variant="security" size="lg" asChild className="flex-1">
                  <Link to="/contact">Request a Quote</Link>
                </Button>
                <Button variant="outline" size="lg" className="flex-1 border-accent text-accent hover:bg-accent hover:text-white" asChild>
                  <Link to="/careers">Apply Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;