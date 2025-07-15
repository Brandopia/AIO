
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Home, Star, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";

const CaseStudies = () => {
  useSEO({
    title: "Case Studies - All In One Residential & Commercial Services",
    description: "Real success stories and case studies showcasing our property management and commercial services results in Tampa Bay Area.",
    keywords: "case studies, property management success, commercial services results, Tampa Bay, Airbnb staging, lawn care, commercial services"
  });

  const caseStudies = [
    {
      id: 1,
      title: "Lawn & pressure washing for Residential Client",
      challenge: "Client's property had overgrown lawn and outdated exterior.",
      solution: "Comprehensive lawn services and pressure washing over 3 weeks.",
      result: "Property value improved, and client reported 30% increase in tenant inquiries within 2 months.",
      icon: <Home className="h-8 w-8 text-green-600" />,
      metrics: ["30% increase in tenant inquiries", "3-week transformation", "Improved property value"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Airbnb Staging & Cleaning Boost",
      challenge: "Airbnb host struggled with poor reviews and low bookings.",
      solution: "Professional staging and regular cleaning service tailored for Airbnb guests.",
      result: "Host's bookings increased by 45%, with a 4.8-star average review rating.",
      icon: <Star className="h-8 w-8 text-green-600" />,
      metrics: ["45% increase in bookings", "4.8-star average rating", "Professional staging"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Property Management Setup",
      challenge: "Client needed property management and efficient tenant screening process established.",
      solution: "completed on schedule, integrated tenant screening and rent collection services.",
      result: "Reduced vacancy rate by 25% and improved rent payment timeliness.",
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      metrics: ["25% vacancy reduction", "On-schedule completion", "Improved payment timeliness"],
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Success Stories & Case Studies
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Real results from real clients. See how All In One Residential & commercial Services LLC has helped property owners achieve their goals.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-green-50 rounded-lg p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Overall Performance</h2>
            <div className="text-4xl font-bold text-green-600 mb-2">90%</div>
            <p className="text-lg text-gray-700">Tenant retention rate over 12 months</p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {caseStudies.map((study, index) => (
              <motion.div key={study.id} variants={itemVariants}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                      <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                        <img 
                          src={study.image} 
                          alt={study.title}
                          className="w-full h-64 lg:h-full object-cover"
                        />
                      </div>
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center mb-4">
                          {study.icon}
                          <span className="ml-3 text-sm font-medium text-green-600 uppercase tracking-wide">Case Study {study.id}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                        
                        <div className="space-y-4 mb-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                            <p className="text-gray-600">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                            <p className="text-gray-600">{study.solution}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Result:</h4>
                            <p className="text-gray-600">{study.result}</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-900">Key Metrics:</h4>
                          {study.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                              <span className="text-gray-600">{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
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
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Create Your Own Success Story?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-green-100 mb-8"
          >
            Let's discuss how we can help you achieve similar results for your property.
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
              className="bg-white text-green-900 hover:bg-gray-100 text-lg px-8 py-3"
              data-cal-link="thespider/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
            >
              Book Your Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
