"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    subtitle: "Student Visa",
    description: "Student visas are non-immigrant visas and do not require the applicant to gain citizenship.",
    image: "/hero1.png",
    buttonText: "More About Us",
    buttonLink: "#",
  },
  {
    subtitle: "Migration",
    description: "You'll be surprised to know that your experience and qualification may create pathways to skilled migration in Australia.",
    image: "/hero2.png",
    buttonText: "More About Us",
    buttonLink: "#",
  },
  // Add more slides as needed
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 top-0 pt-20">
        <AnimatePresence>
          {slides.map((slide, index) =>
            index === currentSlide ? (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.h2
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="text-white text-3xl sm:text-4xl font-semibold mt-4"
                  >
                    {slide.subtitle}
                  </motion.h2>
                  <motion.p
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 50, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="text-white text-lg mt-4 max-w-lg"
                  >
                    {slide.description}
                  </motion.p>
                  <motion.a
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    href={slide.buttonLink}
                    className="mt-8 inline-block bg-red-600 text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-red-700"
                  >
                    {slide.buttonText}
                  </motion.a>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero;
