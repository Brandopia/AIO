
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = 300; // Show after scrolling 300px
      
      setIsVisible(scrolled > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-20 right-4 z-40 flex flex-col gap-3"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="bg-green-600 hover:bg-green-700 text-white shadow-lg rounded-full w-12 h-12"
            aria-label="Go to top"
          >
            <ChevronUp className="h-6 w-6" />
          </Button>
          
          <Button
            size="icon"
            className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg rounded-full w-12 h-12"
            aria-label="Book meeting"
            data-cal-link="thespider/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view"}'
          >
            <Calendar className="h-6 w-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GoToTop;
