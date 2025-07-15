import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Shield,
  Heart,
  MessageSquare,
  TrendingUp,
  Award,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";

const About = () => {
  useSEO({
    title: "About Us - All In One Residential & Commercial Services",
    description:
      "Meet Sheneta Strong, CEO of All In One Residential & Commercial Services LLC. Learn about our mission, values, and commitment to professional property management in Tampa Bay Area.",
    keywords:
      "about us, Sheneta Strong, All In One Residential Commercial Services, property management Tampa Bay, professional services.",
  });

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Integrity",
      description:
        "We operate with complete transparency and honesty in all our dealings",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-green-600" />,
      title: "Communication",
      description:
        "Clear, timely communication is the foundation of our client relationships",
    },
    {
      icon: <Heart className="h-8 w-8 text-green-600" />,
      title: "Peace of Mind",
      description:
        "We provide peace of mind for every property owner through reliable service",
    },
  ];

  const qualifications = [
    "25 years of professional experience in education sector",
    "Specialized in both residential and commercial properties",
    "Solo operator with trusted vendors and partners",
    "Passionate about beautifying and decorating homes",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet Sheneta Strong
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                CEO of All In One Residential & Commercial Services LLC
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                My name is Sheneta Strong, and I am the CEO of All In One
                Residential & Commercial Services LLC. I opened this business
                because I am passionate about beautifying and decorating homes
                from the inside and out!
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I have been employed with my school district for the last 25
                years. So choosing All In One, you will get Quality, Dedication,
                and Honesty.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg">
                <img
                  src="/assets/6ba07ab8-92cd-4adb-8555-9d41d8b57cbd.png"
                  alt="Sheneta Strong, CEO of All In One Residential & Commercial Services"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Mission & Story
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6 text-xl">
              Our mission is to provide professional, responsive, and reliable
              property management services with a personal touch.
            </p>
            <p className="mb-6">
              All In One Residential & Commercial Services was founded with a
              simple vision: to make property management easier for everyone. We
              understand that managing properties can be overwhelming, which is
              why we created a comprehensive solution that handles all your
              needs in one place.
            </p>
            <p className="mb-6">
              Choosing us makes things easier; we take care of all your Property
              Management needs inside and out in One Visit, One Payment, and One
              Company. We are local, have a fast response time, transparent
              fees, and care for both residential & commercial properties.
            </p>
            <p className="text-lg font-semibold text-green-600">
              Let us take the hassle of calling multiple companies away! That
              means one Superb Job!
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose All In One?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Professional Qualifications
              </h3>
              <ul className="space-y-4 text-gray-700">
                {qualifications.map((qualification, index) => (
                  <li key={index} className="flex items-start">
                    <Award className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>{qualification}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Key Advantages
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>• One-stop solution for all property needs</li>
                <li>• Local company with fast response times</li>
                <li>• Transparent pricing and honest communication</li>
                <li>
                  • Experience with both residential and commercial properties
                </li>
                <li>• Personal touch with professional standards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Our Growing Portfolio
          </h2>
          <div className="bg-green-50 rounded-lg p-8 mb-8">
            <div className="text-4xl font-bold text-green-600 mb-2">10+</div>
            <p className="text-lg text-gray-700 mb-4">
              Properties managed and growing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Property Types
              </h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Single-family homes</li>
                <li>• Duplexes</li>
                <li>• Small multi-family units</li>
                <li>• Commercial buildings (expanding)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Track Record</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• High occupancy rates</li>
                <li>• Excellent tenant satisfaction</li>
                <li>• Timely maintenance responses</li>
                <li>• Transparent communication</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Commitment</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Personalized management</li>
                <li>• Tailored solutions</li>
                <li>• Property-specific care</li>
                <li>• Owner-focused service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Serving Tampa Bay Area
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We proudly serve the Tampa Bay Area and surrounding counties,
            bringing professional property management and commercial services directly
            to your neighborhood. As a local business, we understand the unique
            needs of our community and are committed to providing exceptional
            service to every client.
          </p>
          <p className="text-lg text-gray-700 mb-12">
            Currently managing 10+ properties and growing, we specialize in
            residential properties including single-family homes, duplexes, and
            small multi-family units, with plans to expand into commercial
            properties.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the All In One Difference?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Let's discuss how we can help manage and beautify your property with
            our comprehensive services.
          </p>
          <Button
            size="lg"
            className="bg-white text-green-900 hover:bg-gray-100 text-lg px-8 py-3"
            data-cal-link="thespider/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view"}'
          >
            Schedule a Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
