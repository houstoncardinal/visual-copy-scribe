import { Link } from "react-router-dom";
import { Shield, Phone, Mail, Facebook, Twitter, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 border-t border-border/20 py-8">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-accent p-2 rounded-lg">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">K&S SECURITY</h1>
                <p className="text-xs text-gray-300">STAFFING & CONSULTING</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              We fight what you fear most. Licensed & Insured Security Professionals Nationwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">Company</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/coverage" className="text-muted-foreground hover:text-primary transition-colors">Coverage Areas</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/vip-protection" className="text-muted-foreground hover:text-primary transition-colors">Celebrity/VIP Protection</Link></li>
              <li><Link to="/services/executive-protection" className="text-muted-foreground hover:text-primary transition-colors">Executive Protection</Link></li>
              <li><Link to="/services/international-operations" className="text-muted-foreground hover:text-primary transition-colors">International Operations</Link></li>
              <li><Link to="/services/events-tours" className="text-muted-foreground hover:text-primary transition-colors">Events/Tours</Link></li>
              <li><Link to="/services/domestic-security" className="text-muted-foreground hover:text-primary transition-colors">Domestic Protection/Security</Link></li>
              <li><Link to="/services/residential-commercial" className="text-muted-foreground hover:text-primary transition-colors">Residential & Commercial</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">On-Call Service 24/7</p>
                  <a href="tel:214-998-3597" className="text-primary hover:text-primary-light">214-998-3597</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Email Us</p>
                  <a href="mailto:kaheims064@gmail.com" className="text-primary hover:text-primary-light">kaheims064@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            ©2025 | Elite Security Pro | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;