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
            className="bg-[#ff5722] hover:bg-[#e64a19] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            Start Your Project
          </button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-[100px] sm:pt-[150px] lg:pt-[200px]">
      <ParallaxImg
        src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
        alt="Web development workspace"
        start={-100}
        end={100}
        className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 rounded-xl mb-4 sm:mb-8"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
        alt="UI/UX design process"
        start={100}
        end={-150}
        className="mx-auto w-full sm:w-4/5 md:w-3/4 lg:w-2/3 rounded-xl mb-4 sm:mb-8"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
        alt="Digital marketing analytics"
        start={-100}
        end={100}
        className="ml-auto w-full sm:w-2/3 md:w-1/2 lg:w-1/3 rounded-xl mb-4 sm:mb-8"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
        alt="Team collaboration"
        start={0}
        end={-250}
        className="ml-0 sm:ml-12 md:ml-16 lg:ml-24 w-full sm:w-3/4 md:w-7/12 lg:w-5/12 rounded-xl"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }: {
  className: string;
  alt: string;
  src: string;
  start: number;
  end: number;
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};
