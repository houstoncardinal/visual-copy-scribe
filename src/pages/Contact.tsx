import SEO from "@/components/SEO";
import { pageSEO } from "@/utils/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Shield
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "24/7 Emergency Line",
      description: "For immediate security needs and emergencies",
      info: "214-998-3597",
      action: "tel:214-998-3597"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "General inquiries and quote requests",
      info: "kaheims064@gmail.com",
      action: "mailto:kaheims064@gmail.com"
    },
    {
      icon: MapPin,
      title: "Service Areas",
      description: "Texas, New York, Florida, New Jersey, Tennessee, California",
      info: "Nationwide Coverage",
      action: "/coverage"
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "Immediate response for emergency situations",
      info: "24/7/365 Availability",
      action: null
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            CONTACT US
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to secure your peace of mind? Contact K&S Security for immediate assistance 
            or to request a customized security quote.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-black mb-4">Get Started Today</h2>
                <p className="text-lg text-muted-foreground">
                  Fill out our secure form and we'll contact you within 24 hours to discuss 
                  your security needs and provide a customized solution.
                </p>
              </div>
              
              <Card className="bg-gradient-card border-border/20 shadow-[var(--shadow-card)]">
                <CardContent className="p-8">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Get In Touch</h2>
                <p className="text-lg text-muted-foreground">
                  Multiple ways to reach us for your convenience. We're available 24/7 
                  for emergency situations and urgent security needs.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6 mb-12">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="bg-white border-2 border-accent rounded-xl p-6 shadow-lg flex items-center gap-4">
                    <div className="p-3 bg-gradient-accent rounded-lg flex-shrink-0">
                      <method.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-foreground mb-1">{method.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                      {method.action ? (
                        method.action.startsWith('tel:') || method.action.startsWith('mailto:') ? (
                          <a 
                            href={method.action}
                            className="font-semibold text-primary hover:text-primary-light transition-colors"
                          >
                            {method.info}
                          </a>
                        ) : (
                          <Button variant="link" className="p-0 h-auto font-semibold" asChild>
                            <a href={method.action}>{method.info}</a>
                          </Button>
                        )
                      ) : (
                        <span className="font-semibold text-primary">{method.info}</span>
                      )}
                    </div>
                  </Card>
                ))}
              </div>

              {/* Emergency Notice */}
              <Card className="bg-primary text-primary-foreground border-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="w-8 h-8 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Emergency Response</h3>
                      <p className="mb-4">
                        For immediate security emergencies, call our 24/7 hotline. 
                        Our rapid response team is standing by to assist you.
                      </p>
                      <Button variant="secondary" size="lg" asChild>
                        <a href="tel:214-998-3597" className="flex items-center gap-2">
                          <Phone className="w-5 h-5" />
                          Call Emergency Line
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
            Why Choose K&S Security?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-black mb-2">Immediate Response</h3>
              <p className="text-sm text-gray-600">24/7 availability with rapid response times</p>
            </div>

            <div>
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-black mb-2">Licensed & Insured</h3>
              <p className="text-sm text-gray-600">Fully compliant with all state regulations</p>
            </div>

            <div>
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-black mb-2">Personal Service</h3>
              <p className="text-sm text-gray-600">Dedicated account management and support</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;