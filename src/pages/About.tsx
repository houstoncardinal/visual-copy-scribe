import SEO from "@/components/SEO";
import { pageSEO } from "@/utils/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Award, 
  Users, 
  Clock, 
  CheckCircle,
  Target,
  Eye,
  Heart
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "We prioritize the safety and security of our clients above all else, maintaining the highest standards of protection."
    },
    {
      icon: Award,
      title: "Professionalism",
      description: "Our team maintains the highest level of professionalism in all interactions and operations."
    },
    {
      icon: Eye,
      title: "Discretion",
      description: "We operate with complete discretion, ensuring privacy and confidentiality for all our clients."
    },
    {
      icon: Heart,
      title: "Reliability",
      description: "Our clients can count on us 24/7/365 for consistent, dependable security services."
    }
  ];

  const stats = [
    { number: "24/7", label: "On-Call Service" },
    { number: "6", label: "States Coverage" },
    { number: "100%", label: "Licensed & Insured" },
    { number: "1000+", label: "Successful Operations" }
  ];

  const features = [
    "Fully licensed and insured security professionals",
    "Rigorous background checks and screening process",
    "Comprehensive training programs and certifications",
    "Multi-state operations and licensing",
    "Comprehensive security options",
    "24/7/365 availability and response",
    "Customized security protocols for each client",
    "Government and commercial contract experience"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About K&S Security
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Licensed & Insured Security Professionals delivering elite protection services 
            with uncompromising standards across the nation.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Providing You Protection Is Our Only Business
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  K&S Staffing & Consulting delivers elite security solutions through a team of highly trained security professionals. We proudly serve a wide range of clients—including commercial properties, private estates, and government contracts—with a steadfast commitment to safety, professionalism, and discretion.
                </p>
                <p>
                  All of our security officers are fully licensed, insured, and rigorously trained to operate in both standard and high-risk environments. Whether providing visible deterrence or protection, our personnel are prepared to meet the unique demands of each assignment.
                </p>
                <p>
                  At K&S S&C, we don't just offer protection—we provide peace of mind through excellence, 
                  reliability, and uncompromising standards.
                </p>
              </div>
              <div className="mt-8">
                <Button variant="security" size="lg" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center p-6 bg-gradient-card border-border/20">
                    <CardContent className="p-0">
                      <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Features List */}
              <Card className="p-6 bg-gradient-card border-border/20">
                <h3 className="text-xl font-bold text-foreground mb-4">What Sets Us Apart</h3>
                <div className="space-y-3">
                  {features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="text-center p-8 bg-primary/80 border-2 border-accent rounded-xl shadow-lg group text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-accent rounded-full">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                  Our Mission
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To provide unparalleled security services that protect our clients' most valuable assets—their 
                people, property, and peace of mind. We are committed to delivering professional, reliable, and 
                discrete security solutions that exceed expectations and set industry standards.
              </p>
            </Card>

            <Card className="text-center p-8 bg-white border-2 border-accent rounded-xl shadow-lg group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-accent rounded-full">
                  <Eye className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary group-hover:text-primary transition-colors">
                  Our Vision
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and respected security services provider nationwide, recognized for our 
                unwavering commitment to excellence, integrity, and innovation in the protection industry. We 
                strive to set the benchmark for security excellence across all sectors we serve.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are as a security organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 bg-gradient-card border-border/20 hover:shadow-[var(--shadow-card)] transition-all duration-300">
                <CardContent className="p-0">
                  <div className="mb-4 p-4 bg-gradient-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive security capabilities backed by training, experience, and technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-background/10 rounded-lg backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Experience Elite Security?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today to discuss your security needs and discover how K&S Security can provide 
              the protection and peace of mind you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="security" size="lg" asChild>
                <Link to="/contact">Get Quote</Link>
              </Button>
              <Button variant="securityOutline" size="lg" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;