import SEO from "@/components/SEO";
import { pageSEO } from "@/utils/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  FileText, 
  Calendar, 
  TrendingUp, 
  Users,
  Shield,
  Award,
  CheckCircle
} from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Fortune 500 Executive Protection",
      category: "Executive Protection",
      duration: "18 months",
      challenge: "High-profile executive receiving credible threats required comprehensive protection without disrupting business operations.",
      solution: "Deployed 24/7 close protection team with advance security coordination and threat assessment protocols.",
      result: "Zero security incidents, maintained executive's full schedule, threat neutralized through intelligence coordination.",
      image: "/lovable-uploads/87a3af80-aa32-4d26-ab1d-e2dab98e6f40.png"
    },
    {
      title: "International Celebrity Tour Security",
      category: "VIP Protection",
      duration: "6 months",
      challenge: "A-list celebrity required discrete security for worldwide tour including high-risk venues and international travel.",
      solution: "Coordinated international security team with local law enforcement liaison and venue-specific risk assessments.",
      result: "Successful completion of 45-city tour with zero incidents and maintained artist's privacy throughout.",
      image: "/lovable-uploads/87a3af80-aa32-4d26-ab1d-e2dab98e6f40.png"
    },
    {
      title: "Corporate Campus Security Overhaul",
      category: "Commercial Security",
      duration: "12 months",
      challenge: "Tech company needed comprehensive security upgrade for 50,000 sq ft campus with 2,000+ employees.",
      solution: "Implemented layered security approach with access control, surveillance integration, and emergency response protocols.",
      result: "95% reduction in security incidents, improved employee confidence, and streamlined visitor management.",
      image: "/lovable-uploads/87a3af80-aa32-4d26-ab1d-e2dab98e6f40.png"
    },
    {
      title: "High-Risk Event Security Coordination",
      category: "Event Security",
      duration: "3 days",
      challenge: "Political fundraising event with 5,000 attendees requiring comprehensive threat mitigation and crowd control.",
      solution: "Deployed 50+ security personnel with specialized crowd control, VIP protection, and emergency response capabilities.",
      result: "Event completed successfully with no incidents, positive client feedback, and renewed contract for future events.",
      image: "/lovable-uploads/87a3af80-aa32-4d26-ab1d-e2dab98e6f40.png"
    }
  ];

  const metrics = [
    { number: "500+", label: "Successful Operations" },
    { number: "99.8%", label: "Incident-Free Rate" },
    { number: "24/7", label: "Response Time" },
    { number: "6", label: "States Coverage" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO data={pageSEO.caseStudies} />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            CASE STUDIES
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world security solutions that demonstrate our expertise, professionalism, 
            and commitment to protecting what matters most to our clients.
          </p>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              PROVEN RESULTS
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our track record speaks for itself with consistent, measurable success across all security operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center p-6 bg-white border-2 border-accent rounded-xl shadow-lg">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">{metric.number}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              SUCCESS STORIES
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Detailed case studies showcasing our comprehensive approach to security challenges
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-primary/80 border-2 border-accent rounded-xl shadow-lg text-white hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-gradient-accent rounded-lg flex-shrink-0">
                      <Shield className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{study.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1 text-white/80">
                          <FileText className="w-4 h-4" />
                          {study.category}
                        </span>
                        <span className="flex items-center gap-1 text-white/80">
                          <Calendar className="w-4 h-4" />
                          {study.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-sm text-white/90 leading-relaxed">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-2">Solution</h4>
                      <p className="text-sm text-white/90 leading-relaxed">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-2">Result</h4>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-white/90 leading-relaxed">{study.result}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              OUR CAPABILITIES
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive security expertise across multiple industries and threat environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-gradient-card border-border/20 hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <CardContent className="p-0">
                <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Risk Assessment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive threat analysis and vulnerability assessments to identify and mitigate potential security risks.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-gradient-card border-border/20 hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <CardContent className="p-0">
                <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Team Coordination</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Seamless coordination between multiple security teams, law enforcement, and client stakeholders.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-gradient-card border-border/20 hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <CardContent className="p-0">
                <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Excellence Standard</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Unwavering commitment to the highest standards of professionalism and operational excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let us develop a customized security solution that meets your specific needs and delivers 
              the results you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="security" size="lg" asChild>
                <Link to="/contact">Discuss Your Needs</Link>
              </Button>
              <Button variant="securityOutline" size="lg" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;