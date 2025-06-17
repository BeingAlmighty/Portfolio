import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const SECTION_HEIGHT = 1500;

export default function Hero() {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
      id="home"
    >
      <SimpleHero />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-black/0 to-black" />
    </div>
  );
}

const SimpleHero = () => {
  return (
    <div className="sticky top-0 h-screen w-full bg-gradient-to-br from-[#1e1e1e] to-[#2d2d2d] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #ff5722 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #ff5722 0%, transparent 50%)`,
        }} />
      </div>
      
      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center text-white w-full max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Digital <span className="text-[#ff5722]">Innovation</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            We craft stunning digital experiences that drive growth and inspire action
          </p>
          <button 
            onClick={() => {
              document.getElementById("services")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="animated-cta-button"
          >
            Start Your Project
          </button>
        </motion.div>
      </div>
    </div>
  );
};

const ParallaxImages = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0, 1, 0]);

  return (
    <div
      ref={targetRef}
      className="absolute inset-0 z-0"
      style={{
        top: `${SECTION_HEIGHT * 0.7}px`,
        height: SECTION_HEIGHT,
      }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ y, rotateX, opacity }}
          className="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4 sm:p-8"
        >
          {[
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=400&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=400&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=400&h=400&fit=crop&crop=center",
          ].map((src, index) => (
            <motion.div
              key={index}
              className="relative h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 rounded-xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={src}
                alt={`Portfolio showcase ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};