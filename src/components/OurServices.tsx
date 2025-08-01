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

        {/* Services Bento Grid */}
        <BentoGrid
          items={services.map((service, i) => ({
            title: service.title,
            description: service.description,
            icon: <service.icon className="w-7 h-7 text-primary" />,
            cta: "Learn More",
            colSpan:
              i === 0 || i === 5 ? 2 : // First and sixth cards are double-width
              1, // Rest single
            hasPersistentHover: i === 0 || i === 5, // Highlight key cards
          }))}
        />

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