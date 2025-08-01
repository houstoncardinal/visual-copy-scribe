import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Award, 
  Users, 
  Globe,
  ShieldCheck,
  Star,
  CheckCircle
} from "lucide-react";
const securityTeamImage = "/2.jpg";

const WhatWeOffer = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "LICENSED & INSURED",
      description: "Fully compliant with state regulations and comprehensive insurance coverage"
    },
    {
      icon: Award,
      title: "ELITE TRAINING",
      description: "Rigorous background checks and professional training programs"
    },
    {
      icon: Users,
      title: "EXPERIENCED TEAM",
      description: "Proven track record in high-risk and sensitive environments"
    },
    {
      icon: Globe,
      title: "MULTI-STATE OPERATIONS",
      description: "Licensed to operate across Texas, New York, Florida, New Jersey, Tennessee, and California"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-base uppercase tracking-wider text-primary font-semibold mb-2 section-title">What We Offer</p>
          <h2 className="main-title text-4xl md:text-5xl font-extrabold text-primary uppercase mb-8 drop-shadow-lg">
            Providing You Protection Is Our Only Business
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content Card */}
          <Card className="bg-white border border-border shadow-lg p-10 flex flex-col justify-center items-start">
            <CardContent className="space-y-6 p-0">
              <h3 className="card-title text-xl font-bold text-primary uppercase mb-4 tracking-wide">Elite Security, Trusted Protection</h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                All of our security officers are fully licensed, insured, and rigorously trained to operate in both standard and high-risk environments. Whether providing visible deterrence or armed protection, our personnel are prepared to meet the unique demands of each assignment.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                At K&S S&C, we don't just offer protection—we provide peace of mind through excellence, reliability, and uncompromising standards.
              </p>
              <Button variant="security" size="lg" asChild>
                <Link to="/services">Discover More</Link>
              </Button>
            </CardContent>
          </Card>
          {/* Team Image Card */}
          <Card className="overflow-hidden shadow-xl border-0 p-0">
            <img 
              src={securityTeamImage} 
              alt="VIP Security Team in Suits" 
              className="w-full h-[400px] object-cover object-center rounded-2xl"
            />
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 bg-gradient-card border-border/20 hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--shadow-security)] hover:border-accent/80 hover:ring-2 hover:ring-accent/40 hover:scale-105 hover:bg-card/95 hover:z-10">
              <CardContent className="p-0">
                <div className="mb-4 p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;