import SEO from "@/components/SEO";
import { pageSEO } from "@/utils/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Shield, 
  Clock, 
  GraduationCap,
  CheckCircle,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

const Careers = () => {
  const benefits = [
    "Competitive hourly rates",
    "Flexible scheduling options",
    "Professional training provided",
    "Career advancement opportunities",
    "Licensed and insured coverage",
    "24/7 support team"
  ];

  const requirements = [
    "Valid security license (required)",
    "Must specify license level",
    "Clean background check",
    "Professional appearance",
    "Reliable transportation",
    "Excellent communication skills"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO data={pageSEO.careers} />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Security Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            K&S Staffing & Consulting is seeking dedicated unarmed security professionals 
            to join our team across multiple states. Apply today for immediate opportunities.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Application Form */}
            <Card className="bg-card border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  Security Career Application
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form 
                  name="careers-form"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  {/* Netlify form detection */}
                  <input type="hidden" name="form-name" value="careers-form" />
                  <div className="hidden">
                    <input name="bot-field" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" name="firstName" placeholder="Enter first name" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" name="lastName" placeholder="Enter last name" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" placeholder="Enter email address" required />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="Enter phone number" required />
                  </div>

                  <div>
                    <Label htmlFor="license">Security License Number *</Label>
                    <Input id="license" name="license" placeholder="Enter your security license number" required />
                  </div>

                  <div>
                    <Label htmlFor="licenseLevel">Security License Level *</Label>
                    <Select name="licenseLevel">
                      <SelectTrigger>
                        <SelectValue placeholder="Select your license level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="level1">Level 1 - Basic Security</SelectItem>
                        <SelectItem value="level2">Level 2 - Intermediate Security</SelectItem>
                        <SelectItem value="level3">Level 3 - Advanced Security</SelectItem>
                        <SelectItem value="level4">Level 4 - Supervisor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="location">Preferred Work Location</Label>
                    <Input id="location" name="location" placeholder="City, State" />
                  </div>

                  <div>
                    <Label htmlFor="experience">Years of Security Experience</Label>
                    <Select name="experience">
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="2-5">2-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="availability">Availability</Label>
                    <Textarea 
                      id="availability" 
                      name="availability"
                      placeholder="Please describe your availability (days, shifts, etc.)"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea 
                      id="additionalInfo" 
                      name="additionalInfo"
                      placeholder="Tell us about yourself, special skills, or certifications"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="security" size="lg" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Benefits & Requirements */}
            <div className="space-y-8">
              {/* Benefits */}
              <Card className="bg-card border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Why Work With Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card className="bg-card border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {requirements.map((requirement, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="bg-card border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Quick Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary" />
                    <a href="tel:214-998-3597" className="text-muted-foreground hover:text-primary">
                      214-998-3597
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary" />
                    <a href="mailto:kaheims064@gmail.com" className="text-muted-foreground hover:text-primary">
                      kaheims064@gmail.com
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-primary mt-1" />
                    <span className="text-muted-foreground">
                      Nationwide Coverage Available
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Security Career?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join K&S Staffing & Consulting and become part of a professional team 
            dedicated to providing excellent unarmed security services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="tel:214-998-3597">Call Now: 214-998-3597</a>
            </Button>
            <Button variant="securityOutline" size="lg" asChild>
              <a href="mailto:kaheims064@gmail.com">Email Us</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;