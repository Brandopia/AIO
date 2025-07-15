import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Home, Users, TrendingUp, Shield, Star, CheckCircle, Paintbrush, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import TiltCard from "@/components/TiltCard";
import ParticleSystem from "@/components/ParticleSystem";
import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  useSEO({
    title: "All In One Residential & Commercial Services - Tampa Bay Property Management & commercial Services",
    description: "Professional property management and commercial services in Tampa Bay. Interior services, lawn care, staging, cleaning, painting, and commercial services. One company for all your property needs.",
    keywords: "property management, commercial services, commercial services, Tampa Bay, lawn care, staging, cleaning, painting, Airbnb management, residential services"
  });

  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });

  const stats = [
    { number: 10, suffix: "+", label: "Properties Managed" },
    { number: 5, suffix: "+", label: "Years Combined Experience" },
    { number: 100, suffix: "%", label: "Client Satisfaction" },
  ];

  const services = [
    {
      icon: <Home className="h-8 w-8 text-green-600" />,
      title: "Interior Services",
      description: "Wide range of interior services to keep your property safe, stylish, and functional"
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Lawn Services",
      description: "Complete lawn care from mowing to landscape maintenance for curb appeal"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-green-600" />,
      title: "Staging & Cleaning",
      description: "Professional staging for sales and Airbnb rentals, plus thorough cleaning services"
    },
    {
      icon: <Paintbrush className="h-8 w-8 text-green-600" />,
      title: "Painting & Exterior",
      description: "Professional painting and exterior services including pressure washing"
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: "Everything You Need, All In One Place",
      description: "From cleaning to remodeling to lawn care — we handle it all, so you don't have to juggle multiple contractors"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Tailored for Your Property Goals",
      description: "Whether it's your home, rental, or investment property — our services are built to fit your lifestyle and goals"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
      title: "Reliable, Respectful & On-Time",
      description: "We show up, stay professional, and get it done right — no excuses, no mess, no stress"
    }
  ];

  const testimonials = [
    {
      name: "Jane Doe",
      role: "Residential Property Owner",
      content: "All In One Residential & commercial Services LLC took care of my home like it was their own. From lawn care to remodeling, everything was professional and on time.",
      rating: 5,
      image: "/assets/image1.png"
    },
    {
      name: "Mark Smith",
      role: "Multi-Family Property Manager",
      content: "Their attention to detail and quick response time have made managing my properties so much easier. Highly recommend their services.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Lisa Johnson",
      role: "Airbnb Host",
      content: "The staging and cleaning services helped me get top reviews from guests. I couldn't be happier with their work!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Client Review",
      role: "Property Owner",
      content: "All-In-One handled everything — I didn't lift a finger. Prompt, professional, and trustworthy.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Custom hooks for animated counters
  const counter1 = useAnimatedCounter(stats[0].number, 2000, 500);
  const counter2 = useAnimatedCounter(stats[1].number, 2000, 700);
  const counter3 = useAnimatedCounter(stats[2].number, 2000, 900);
  const counters = [counter1, counter2, counter3];

  // Trigger animations when stats come into view
  React.useEffect(() => {
    if (isStatsInView) {
      counters.forEach(counter => counter.startAnimation());
    }
  }, [isStatsInView]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Parallax Background Image */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: 0 }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Modern residential and commercial properties"
            className="w-full h-full object-cover opacity-30"
          />
        </motion.div>

        {/* Particle System */}
        <ParticleSystem />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Do you need someone to manage or service your residential or commercial property?
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto"
            >
              Let Us Beautify Your Property For A Sale. We handle the details — you enjoy the results.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-white text-green-900 hover:bg-gray-100 text-lg px-8 py-3 btn-primary"
                  data-cal-link="thespider/30min"
                  data-cal-namespace="30min"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Book Consultation
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" asChild className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-900 text-lg px-8 py-3">
                  <Link to="/services" className="!text-white hover:!text-green-900">Learn More</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced Floating Stats Cards with 3D Tilt and Animated Counters */}
          <motion.div 
            ref={statsRef}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <TiltCard className="w-full">
                  <Card className="bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 card-glow-intense">
                    <CardContent className="p-6 text-center">
                      <motion.div 
                        className="text-3xl font-bold text-green-900 mb-2"
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.2, type: "spring", stiffness: 300 }}
                      >
                        {counters[index].count}{stat.suffix}
                      </motion.div>
                      <div className="text-gray-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Property Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All In One Residential and Commercial Services LLC provides full-scope property solutions — including interior repairs, cleaning, staging, lawn care, painting, exterior maintenance, and pressure washing.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <TiltCard>
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full">
                    <CardContent className="p-8 text-center">
                      <motion.div 
                        className="mb-4 flex justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {service.icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <Link to="/services" className="text-green-600 hover:text-green-800 font-medium">
                        Learn More →
                      </Link>
                    </CardContent>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Property Owners Choose All In One
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Integrity-Driven. Community-Focused. We're proud to serve with heart, hustle, and the highest standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Professional property management team"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div key={index} variants={itemVariants} className="flex items-start space-x-4">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {benefit.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.div 
              className="flex space-x-6"
              animate={{
                x: [0, -100 * testimonials.length * 0.5]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear"
                }
              }}
            >
              {/* First set */}
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index} 
                  className="flex-none w-80"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="bg-white hover:shadow-lg transition-shadow duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                      <div className="flex items-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-gray-500">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
              {/* Duplicate set for seamless loop */}
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={`duplicate-${index}`} 
                  className="flex-none w-80"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="bg-white hover:shadow-lg transition-shadow duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                      <div className="flex items-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-gray-500">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Let's talk about your property goals
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-green-100 mb-8"
          >
            Serving homes with excellence — schedule your custom quote now
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-white text-green-900 hover:bg-gray-100 text-lg px-8 py-3 btn-primary"
              data-cal-link="thespider/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
            >
              Schedule Your Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
