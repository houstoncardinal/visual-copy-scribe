import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building, Shield, CheckCircle } from "lucide-react";

const VipProtection = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-6 p-4 bg-gradient-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto">
              <Building className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Apartment Complex Security</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              24/7 residential security monitoring for apartment complexes, ensuring safety, peace of mind, and rapid response for residents and property managers.
            </p>
          </div>
        </div>
      </section>

      {/* Advanced Service Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Why Choose K&S for Apartment Security?</h2>
              <ul className="space-y-4 text-lg text-muted-foreground mb-8">
                <li className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-primary mt-1" />
                  <span>Licensed, insured, and rigorously trained security professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <span>24/7 on-site monitoring and rapid incident response</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <span>Access control, visitor management, and patrols</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <span>Emergency preparedness and resident support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <span>Customizable security plans for properties of all sizes</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="security" size="lg" asChild>
                  <Link to="/contact">Request a Free Security Assessment</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white" asChild>
                  <Link to="/services">Explore All Services</Link>
                </Button>
              </div>
            </div>
            <div>
              <Card className="bg-white border-2 border-accent rounded-xl shadow-lg p-8 flex flex-col items-center">
                <CardContent className="p-0">
                  <img src="/1.jpg" alt="Apartment Security" className="rounded-xl w-full h-64 object-cover mb-6" />
                  <h3 className="text-xl font-bold text-primary mb-2 text-center">Trusted by Leading Property Managers</h3>
                  <p className="text-muted-foreground text-center">
                    Our team is trusted by apartment communities across the region for our professionalism, reliability, and results-driven approach to security.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Sets Us Apart</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Discover the unique advantages of partnering with K&S Security for your apartment complex.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-primary/80 border-2 border-accent rounded-xl shadow-lg p-8 flex flex-col items-center text-white">
              <CardContent className="p-0">
                <div className="p-4 bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white text-center">Visible Deterrence</h3>
                <p className="text-white/90 text-center">
                  Uniformed officers and marked patrols to deter crime and enhance resident confidence.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-primary/80 border-2 border-accent rounded-xl shadow-lg p-8 flex flex-col items-center text-white">
              <CardContent className="p-0">
                <div className="p-4 bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white text-center">Rapid Response</h3>
                <p className="text-white/90 text-center">
                  Immediate action for incidents, emergencies, and resident concerns—day or night.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-primary/80 border-2 border-accent rounded-xl shadow-lg p-8 flex flex-col items-center text-white">
              <CardContent className="p-0">
                <div className="p-4 bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white text-center">Custom Solutions</h3>
                <p className="text-white/90 text-center">
                  Security plans tailored to your property’s unique layout, needs, and resident expectations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from property managers and residents who trust K&S Security for their peace of mind.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white border-2 border-accent rounded-xl shadow-lg p-8">
              <CardContent className="p-0">
                <p className="text-lg text-black mb-4">“K&S Security has transformed the safety of our community. Their team is always present, professional, and quick to respond.”</p>
                <div className="text-sm text-muted-foreground">— Property Manager, Uptown Residences</div>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 border-accent rounded-xl shadow-lg p-8">
              <CardContent className="p-0">
                <p className="text-lg text-black mb-4">“We feel so much safer knowing K&S is on site. Their officers are friendly and always willing to help.”</p>
                <div className="text-sm text-muted-foreground">— Resident, Parkview Apartments</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Answers to common questions about our apartment complex security services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h3 className="text-lg font-bold text-white mb-2">How quickly can you respond to incidents?</h3>
              <p className="text-white/90 mb-4">Our officers are on-site 24/7 and trained to respond to any incident or emergency within minutes, ensuring resident safety at all times.</p>
            </div>
            <div className="mb-8">
              <h3 className="text-lg font-bold text-white mb-2">Can you customize security plans for different properties?</h3>
              <p className="text-white/90 mb-4">Absolutely. We tailor every security plan to the unique needs, layout, and requirements of each property and its residents.</p>
            </div>
            <div className="mb-8">
              <h3 className="text-lg font-bold text-white mb-2">Are your officers licensed and insured?</h3>
              <p className="text-white/90 mb-4">Yes, all K&S Security officers are fully licensed, insured, and undergo rigorous background checks and ongoing training.</p>
            </div>
            <div className="mb-8">
              <h3 className="text-lg font-bold text-white mb-2">How do I get started?</h3>
              <p className="text-white/90 mb-4">Contact us for a free security assessment. We’ll review your needs and provide a customized proposal within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4">
        <div className="bg-primary/90 border-2 border-accent rounded-xl shadow-2xl p-6 flex flex-col items-center text-center">
          <h3 className="text-xl font-bold text-white mb-2">Ready to Protect Your Residents?</h3>
          <Button variant="security" size="lg" asChild className="w-full mb-2">
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
          <Button variant="outline" size="lg" className="w-full border-white text-white hover:bg-white hover:text-primary" asChild>
            <Link to="/services">See All Services</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VipProtection; 