import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, Phone, Mail, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "HOME", href: "/" },
    { name: "COMPANY", href: "/company" },
    { name: "SERVICES", href: "/services", hasDropdown: true },
    { name: "CASE STUDIES", href: "/case-studies" },
  ];

  const services = [
    { name: "Celebrity/VIP Protection", href: "/services/vip-protection" },
    { name: "Executive Protection", href: "/services/executive-protection" },
    { name: "International Operations", href: "/services/international-operations" },
    { name: "Events/Tours", href: "/services/events-tours" },
    { name: "Domestic Protection/Security", href: "/services/domestic-security" },
    { name: "Residential & Commercial", href: "/services/residential-commercial" },
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
      <header className="bg-security-darker text-foreground border-b border-border/20 sticky top-0 z-50">
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
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary text-foreground">
                        {item.name}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      
                      {/* Mega Menu Dropdown */}
                      {isServicesOpen && (
                        <div className="absolute top-full left-0 mt-2 w-80 bg-card border border-border/20 rounded-lg shadow-2xl z-50 p-6">
                          <h3 className="text-lg font-semibold text-foreground mb-4">Our Services</h3>
                          <div className="grid grid-cols-1 gap-3">
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="block p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                              >
                                <div className="text-sm font-medium text-foreground group-hover:text-primary">
                                  {service.name}
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-border/20">
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

            {/* Contact Us Button */}
            <div className="hidden lg:block">
              <Button variant="security" asChild>
                <Link to="/contact">CONTACT US</Link>
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
                <Button variant="security" className="mt-4" asChild>
                  <Link to="/contact">CONTACT US</Link>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;