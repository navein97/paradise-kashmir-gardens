import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Paradise Kashmir Landscaping LLC</h3>
            <p className="text-primary-foreground/80 text-sm">
              Bringing paradise to your outdoor space with premium landscaping services inspired by the beauty of Kashmir.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80 text-sm">Garden Design</li>
              <li className="text-primary-foreground/80 text-sm">Lawn Maintenance</li>
              <li className="text-primary-foreground/80 text-sm">Hardscaping</li>
              <li className="text-primary-foreground/80 text-sm">Water Features</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-primary-foreground/80 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>806 street - Al Murar - Dubai - UAE</span>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80 text-sm">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span>+971 52 242 0635</span>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80 text-sm">
                <Clock size={16} className="mt-0.5 flex-shrink-0" />
                <span>Open 24 hours</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Paradise Kashmir Landscaping LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
