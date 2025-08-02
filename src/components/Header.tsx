import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, Phone, Mail, ChevronDown, Building, Landmark, Hotel, Music, Shield as ShieldIcon, AlertTriangle, User, GraduationCap, Heart, Users } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesMenuTimeout = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const navigation = [
    { name: "HOME", href: "/" },
    { name: "COMPANY", href: "/company" },
    { name: "SERVICES", href: "/services", hasDropdown: true },
    { name: "CASE STUDIES", href: "/case-studies" },
  ];

  const services = [
    { name: "APARTMENT COMPLEXES", href: "/services/apartment-complexes", icon: Building, description: "24/7 residential security monitoring" },
    { name: "HOTELS", href: "/services/hotels", icon: Hotel, description: "Hospitality security and guest protection" },
    { name: "BARS & ENTERTAINMENT", href: "/services/bars-entertainment", icon: Music, description: "Crowd control and venue security" },
    { name: "ASSET PROTECTION", href: "/services/asset-protection", icon: ShieldIcon, description: "High-value asset and property security" },
    { name: "WORKPLACE VIOLENCE PREVENTION", href: "/services/workplace-violence-prevention", icon: AlertTriangle, description: "Threat assessment and mitigation" },
    { name: "VIP CONCIERGE", href: "/services/vip-concierge", icon: User, description: "Professional concierge services" },
    { name: "WEDDINGS", href: "/services/weddings", icon: Heart, description: "Special event security coordination" },
    { name: "PRIVATE PARTIES", href: "/services/private-parties", icon: Users, description: "Event security and access control" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:214-998-3597" className="flex items-center gap-2 hover:text-primary-foreground/80">
              <Phone className="w-3 h-3" />
              On-Call Service 24/7 214-998-3597
            </a>
            <a href="mailto:kaheims064@gmail.com" className="flex items-center gap-2 hover:text-primary-foreground/80">
              <Mail className="w-3 h-3" />
              Email Us kaheims064@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-black text-foreground border-b border-border/20 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-gradient-accent p-2 rounded">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">K&S SECURITY</h1>
                <p className="text-xs text-muted-foreground">STAFFING & CONSULTING</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => {
                        if (servicesMenuTimeout.current) clearTimeout(servicesMenuTimeout.current);
                        setIsServicesOpen(true);
                      }}
                      onMouseLeave={() => {
                        servicesMenuTimeout.current = setTimeout(() => setIsServicesOpen(false), 200);
                      }}
                    >
                      <button className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary text-foreground">
                        {item.name}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      
                      {/* Mega Menu Dropdown */}
                      {isServicesOpen && (
                        <div
                          className="absolute top-full left-0 mt-2 w-[700px] bg-black/90 border border-white/10 rounded-2xl shadow-2xl z-50 p-4 backdrop-blur-xl transition-all duration-300 animate-fade-in"
                          onMouseEnter={() => {
                            if (servicesMenuTimeout.current) clearTimeout(servicesMenuTimeout.current);
                            setIsServicesOpen(true);
                          }}
                          onMouseLeave={() => {
                            servicesMenuTimeout.current = setTimeout(() => setIsServicesOpen(false), 200);
                          }}
                        >
                          <h3 className="text-lg font-semibold text-white mb-2 tracking-wide">Our Services</h3>
                          <div className="grid grid-cols-2 gap-3">
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all group border border-white/10 hover:border-white/30 shadow-sm hover:shadow-lg backdrop-blur-md"
                              >
                                <service.icon className="w-7 h-7 text-white group-hover:text-primary flex-shrink-0 drop-shadow" />
                                <div className="flex-1">
                                  <div className="text-base font-bold text-white group-hover:text-primary mb-1 tracking-wide">
                                    {service.name}
                                  </div>
                                  <div className="text-xs text-white/80 group-hover:text-primary/80 leading-tight">
                                    {service.description}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-4 pt-3 border-t border-white/10">
                            <Button variant="security" size="sm" asChild className="w-full">
                              <Link to="/services">View All Services</Link>
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`text-sm font-medium transition-colors hover:text-primary ${
                        isActive(item.href) ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="security" size="sm" asChild>
                <Link to="/careers">Apply Now</Link>
              </Button>
              <Button variant="securityOutline" size="sm" asChild>
                <a href="tel:214-998-3597">Call 214-998-3597</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border/20">
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className={`text-sm font-medium transition-colors hover:text-primary ${
                        isActive(item.href) ? "text-primary" : "text-foreground"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <div className="ml-4 mt-2 space-y-2">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block text-sm text-muted-foreground hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-4 space-y-2">
                  <Button variant="security" className="w-full" asChild>
                    <Link to="/careers">Apply Now</Link>
                  </Button>
                  <Button variant="securityOutline" className="w-full" asChild>
                    <a href="tel:214-998-3597">Call 214-998-3597</a>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;