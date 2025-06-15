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
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div 
          className="text-center text-white px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Digital <span className="text-[#ff5722]">Innovation</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            We craft stunning digital experiences that drive growth and inspire action
          </p>
          <button 
            onClick={() => {
              document.getElementById("services")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="bg-[#ff5722] hover:bg-[#e64a19] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project
          </button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
        alt="Web development workspace"
        start={-200}
        end={200}
        className="w-1/3 rounded-xl"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
        alt="UI/UX design process"
        start={200}
        end={-250}
        className="mx-auto w-2/3 rounded-xl"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
        alt="Digital marketing analytics"
        start={-200}
        end={200}
        className="ml-auto w-1/3 rounded-xl"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
        alt="Team collaboration"
        start={0}
        end={-500}
        className="ml-24 w-5/12 rounded-xl"
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
