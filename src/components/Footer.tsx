import { Link } from "react-router-dom";
import { Home, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const companyName = "All In One";

  return (
    <footer className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-50">
        <div
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <img
                src="/assets/970b9dea-3c00-453a-840c-81040053e690.png"
                alt="All In One Residential & Commercial Services"
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white leading-tight">
                  All In One
                </span>
                <span className="text-xs text-green-200 leading-tight">
                  Residential & Commercial Services
                </span>
              </div>
            </div>
            <p className="text-green-100 leading-relaxed text-sm">
              Professional property management and home services you can trust.
              Managing homes, simplifying lives with personalized care.
            </p>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-5 h-5 bg-yellow-400 rounded-sm flex items-center justify-center"
                >
                  ⭐
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl text-green-200 border-b border-green-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services We Provide" },
                { to: "/case-studies", label: "Case Studies" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-green-100 hover:text-green-300 transition-all duration-300 hover:translate-x-2 inline-block relative group"
                  >
                    <span className="relative z-10 text-white">
                      {link.label}
                    </span>
                    <span className="absolute inset-0 bg-green-600 rounded scale-0 group-hover:scale-100 transition-transform duration-300 -z-10 opacity-20"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl text-green-200 border-b border-green-700 pb-2">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                "Interior Services",
                "Lawn Services",
                "Staging & Cleaning",
                "Painting & Pressure Washing",
              ].map((service) => (
                <li key={service} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                  <span className="text-green-100 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl text-green-200 border-b border-green-700 pb-2">
              Get In Touch
            </h3>
            <div className="space-y-4">
              {[
                {
                  icon: Phone,
                  text: "(727) 861-9326",
                  href: "tel:+17278619326",
                },
                {
                  icon: Mail,
                  text: "allinoneresidentials@gmail.com",
                  href: "mailto:allinoneresidentials@gmail.com",
                },
                { icon: MapPin, text: "Tampa Bay Area, FL", href: "#" },
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 text-green-100 hover:text-green-300 transition-all duration-300 group p-2 rounded-lg hover:bg-green-800/30"
                >
                  <div className="p-2 bg-green-600/50 rounded-lg group-hover:bg-green-500 transition-colors duration-300">
                    <contact.icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm text-white">{contact.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-700/50 pt-8">
          {/* Copyright */}
          <div className="text-center mb-8">
            <p className="text-green-200 text-sm">
              © 2024 All In One Residential & Commercial Services LLC. All
              rights reserved.
            </p>
          </div>

          {/* Large Company Name with Enhanced Effects */}
          <div className="flex justify-center items-center">
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-widest select-none">
              {companyName.split("").map((letter, index) => (
                <span
                  key={index}
                  className="inline-block text-green-300/80 hover:text-green-100 hover:drop-shadow-[0_0_25px_rgba(34,197,94,0.9)] hover:scale-110 transition-all duration-500 cursor-default transform-gpu"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    textShadow: "0 0 10px rgba(34, 197, 94, 0.3)",
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom tagline */}
          <div className="text-center mt-6">
            <p className="text-green-300 text-sm font-medium">
              Managing Homes, Simplifying Lives.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
