import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-security-darker text-foreground relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-security-darker/90 to-security-dark/90"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-semibold uppercase tracking-wider mb-4">
            ON-CALL SERVICE 24/7/365
          </p>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            WE'RE HERE FOR YOU 24/7/365
          </h2>
          
          <div className="mb-8">
            <a 
              href="tel:214-998-3597" 
              className="text-3xl md:text-4xl font-bold text-primary hover:text-primary-light transition-colors inline-flex items-center gap-3"
            >
              <Phone className="w-8 h-8" />
              214-998-3597
            </a>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We are a global security company that provides coverage all over the CONUS and internationally. 
            Reach out to us today to get started!
          </p>
          
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">GET STARTED</Link>
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CallToAction;