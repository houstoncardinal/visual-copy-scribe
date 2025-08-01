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
import securityTeamImage from "@/assets/security-team.jpg";

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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            PROVIDING YOU PROTECTION IS OUR<br />
            ONLY BUSINESS
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              All of our security officers are fully licensed, insured, and rigorously trained to operate 
              in both standard and high-risk environments. Whether providing visible deterrence or armed 
              protection, our personnel are prepared to meet the unique demands of each assignment.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At K&S S&C, we don't just offer protection—we provide peace of mind through excellence, 
              reliability, and uncompromising standards.
            </p>
            <Button variant="security" size="lg" asChild>
              <Link to="/services">DISCOVER MORE</Link>
            </Button>
          </div>

          {/* Team Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-[var(--shadow-card)]">
              <img 
                src={securityTeamImage} 
                alt="Professional Security Team" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 bg-gradient-card border-border/20 hover:shadow-[var(--shadow-card)] transition-all duration-300">
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