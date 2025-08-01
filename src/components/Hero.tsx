import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
const heroImage = "/1.jpg";
import ContactForm from "./ContactForm";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-neutral-900 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-neutral-900/98"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-2">
              <p className="text-primary font-semibold uppercase tracking-wider">
                We Supply Protection
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                K&S STAFFING &{" "}
                <span className="text-primary">CONSULTING</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                Licensed & Insured Security Professionals Nationwide
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              K&S S&C delivers elite security solutions through a team of highly trained 
              armed and unarmed personnel. We proudly serve a wide range of clients—including 
              commercial properties, private estates, and government contracts—with a steadfast 
              commitment to safety, professionalism, and discretion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button variant="securityOutline" size="lg" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-8 border-t border-border/20">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground">On-Call Service</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">6</p>
                <p className="text-sm text-muted-foreground">States Coverage</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Licensed & Insured</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="p-6 bg-card/90 backdrop-blur-sm border-border/20 shadow-[var(--shadow-card)]">
              <ContactForm />
            </Card>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-hero-float"></div>
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-hero-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;