import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services We Provide" },
    { path: "/case-studies", label: "Case Studies" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-sm border-b sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/assets/970b9dea-3c00-453a-840c-81040053e690.png"
                alt="All In One Residential & Commercial Services"
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-gray-900 leading-tight">
                  All In One
                </span>
                <span className="text-xs text-green-600 leading-tight">
                  Residential & Commercial Services
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.path} whileHover={{ scale: 1.05 }}>
                <Link
                  to={item.path}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-all duration-300 rounded-md relative",
                    location.pathname === item.path
                      ? "!text-white bg-green-600 shadow-md"
                      : "text-gray-600 hover:text-green-600 hover:bg-green-50"
                  )}
                  style={
                    location.pathname === item.path
                      ? { color: "white !important" }
                      : {}
                  }
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-green-600 rounded-md -z-10"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-green-600 hover:bg-green-700"
                data-cal-link="thespider/30min"
                data-cal-namespace="30min"
                data-cal-config='{"layout":"month_view"}'
              >
                Book Free Consultation
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "block px-3 py-2 text-base font-medium transition-all duration-300 rounded-md",
                    location.pathname === item.path
                      ? "!text-white bg-green-600 shadow-md"
                      : "text-gray-600 hover:text-green-600 hover:bg-green-50"
                  )}
                  style={
                    location.pathname === item.path
                      ? { color: "white !important" }
                      : {}
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                className="w-full mt-2 bg-green-600 hover:bg-green-700"
                data-cal-link="thespider/30min"
                data-cal-namespace="30min"
                data-cal-config='{"layout":"month_view"}'
                onClick={() => setIsOpen(false)}
              >
                Book Free Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
