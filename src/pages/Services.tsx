import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Home,
  CheckCircle,
  Phone,
  Wrench,
  PaintRoller,
  Scissors,
} from "lucide-react";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Suspense, useState, useEffect } from "react";
import { ServiceCardSkeleton } from "@/components/skeleton/service-card-skeleton";
import { HeroSkeleton } from "@/components/skeleton/hero-skeleton";

const Services = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for demo purposes
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // SEO optimization for Services page
  useSEO({
    title:
      "Services We Provide | All In One Residential & Commercial Services LLC - Tampa Bay",
    description:
      "Comprehensive home and commercial property services in Tampa Bay: Interior Services, Lawn Care, Staging, Cleaning, Painting, Exterior Services, and Pressure Washing. One-stop solution for homeowners, landlords, and Airbnb hosts.",
    keywords:
      "home services, property services, commercial services, lawn care, staging, cleaning, painting, pressure washing, Tampa Bay, Airbnb hosting, property management",
    canonical: "https://tanishka-property.vercel.app/services",
    ogTitle:
      "Services We Provide | All In One Residential & Commercial Services LLC",
    ogDescription:
      "Complete home and commercial property services in Tampa Bay. From interior upgrades to lawn care - we handle it all with one visit, one payment, one company.",
    ogUrl: "https://tanishka-property.vercel.app/services",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "All In One Residential & Commercial Services LLC",
      description:
        "Comprehensive home and commercial property services including interior services, lawn care, staging, cleaning, painting, exterior services, and pressure washing.",
      provider: {
        "@type": "Organization",
        name: "All In One Residential & Commercial Services LLC",
        address: {
          "@type": "PostalAddress",
          addressRegion: "FL",
          addressLocality: "Tampa Bay Area",
        },
      },
      serviceType: "Home Services",
      areaServed: {
        "@type": "Place",
        name: "Tampa Bay Area, FL",
      },
    },
  });

  const services = [
    {
      icon: <Home className="h-10 w-10 text-green-600" />,
      image: "/assets/istockphoto-1312450007-612x612.jpg", // Placeholder image, update as needed
      title: "Interior Services",
      description:
        "We offer a wide range of interior services to keep your property safe, stylish, and functional. From minor repairs to full upgrades, we ensure your spaces remain comfortable, clean, and up to standard — tailored for homeowners, landlords, or Airbnb hosts.",
      features: [
        "Cleaning",
        "Minor Painting For Decor",
        "Decorating",
        "Staging",
      ],
    },
    {
      icon: <Wrench className="h-10 w-10 text-green-600" />,
      image: "/assets/shutterstock_553152238.jpg",
      title: "Exterior Services",
      description:
        "From siding repairs to outdoor touch-ups, our exterior services help protect your investment and maintain a polished look. We inspect and fix damage, handle upkeep, and boost your property's appearance.",
      features: [
        "Lawn Services",
        "Pressure Washing Services",
        "Windows, Roofs, Driveways, Houses or Buildings",
      ],
    },
  ];

  const serviceGuarantees = [
    {
      title: "One-Stop Solution",
      description:
        "We offer a full range of interior, exterior, and property management services — so you only need one reliable team for everything.",
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Satisfaction Guaranteed",
      description:
        "If you're not happy, we'll make it right. We stand by our work with a 100% satisfaction guarantee on all services.",
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Quick Response & Turnaround",
      description:
        "We value your time — fast scheduling, consistent updates, and no unnecessary delays.",
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Fully Customizable Packages",
      description:
        "From single services to bundled packages, we tailor every project to fit your property, budget, and goals.",
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Airbnb & Investor Friendly",
      description:
        "We understand the short-term Rental space — cleaning, staging, and turnover-ready setups are handled professionally and on time.",
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Built on Trust",
      description:
        "We treat your home like our own — respectful crew, clear communication, and no surprises.",
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
    },
  ];

  const testimonials = [
    {
      name: "Jane Doe",
      role: "Residential Property Owner",
      content:
        "All In One Residential & commercial Services LLC took care of my home like it was their own. From lawn care to cleaning, everything was professional and on time.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      rating: 5,
    },
    {
      name: "Mark Smith",
      role: "Multi-Family Property Manager",
      content:
        "Their attention to detail and quick response time have made managing my properties so much easier. Highly recommend their services.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      rating: 5,
    },
    {
      name: "Lisa Johnson",
      role: "Airbnb Host",
      content:
        "The staging and cleaning services helped me get top reviews from guests. I couldn't be happier with their work!",
      image: "/assets/image1.png",
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-16">
        <HeroSkeleton />
        <section className="py-12 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {[...Array(7)].map((_, index) => (
                <ServiceCardSkeleton key={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-green-900 via-green-800 to-green-700 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2"
          >
            Services We Provide
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-green-100 max-w-4xl mx-auto leading-relaxed px-4"
          >
            All In One Residential and Home Services LLC provides full-scope
            property solutions — including interior repairs, cleaning, staging,
            lawn care, painting, exterior maintenance, and pressure washing.
            Whether you're a homeowner, investor, or Airbnb host, we keep your
            property clean, functional, and market-ready — all under one roof.
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-12 md:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="text-center mb-10 md:mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Complete Home & Property Solutions
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4"
            >
              One Visit, One Payment, One Company — We Handle It All
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                <CardContent className="p-8 md:p-10 lg:p-12">
                  <div className="relative h-60 w-full mb-6 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="object-cover w-full h-full"
                      style={{ maxHeight: '240px' }}
                    />
                  </div>
                  <div className="flex items-center mb-4">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-6">{service.description}</p>
                  <ul className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg md:text-xl">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Guarantees Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose All In One?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our unique selling points and service guarantees
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {serviceGuarantees.map((guarantee, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-white">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="flex-shrink-0 p-2 bg-green-100 rounded-lg">
                        {guarantee.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          {guarantee.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {guarantee.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Areas & Property Types */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Service Areas
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                We proudly serve homeowners, landlords, and property managers
                throughout the Tampa Bay Area and surrounding counties.
              </p>
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Coverage Area:
                </h3>
                <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                  <Home className="h-6 w-6 text-green-600 mr-4" />
                  <span className="text-gray-700 font-medium text-lg">
                    Tampa Bay Area & Surrounding Counties
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-10 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                Property Types We Serve:
              </h3>
              <ul className="space-y-4 text-gray-700">
                {[
                  "Single-family homes",
                  "Duplexes",
                  "Small multi-family properties",
                  "Airbnb & short-term Rentals",
                  "Residential investment properties",
                  "Commercial properties (expanding)",
                ].map((type, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <Home className="h-5 w-5 text-green-600 mr-4" />
                    <span className="font-medium">{type}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from property owners who trust us with their
              investments
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-white">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <div
                          key={i}
                          className="w-5 h-5 bg-yellow-400 rounded-sm flex items-center justify-center mr-1"
                        >
                          ⭐
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-12 md:py-24 bg-gradient-to-r from-green-600 to-green-700"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-green-100 mb-12 leading-relaxed"
          >
            Let's discuss your property needs and create a customized service
            plan that works for you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                asChild
                className="bg-white text-green-900 hover:bg-gray-100 text-lg px-10 py-4"
                data-cal-link="ecosystem/1-hr-meeting"
                data-cal-config='{"layout":"month_view"}'
              >
                <span>Book Your Free Consultation</span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                asChild
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-900 text-lg px-10 py-4"
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;
