import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  
  const zoom = useTransform(scrollY, [0, 500], ['150%', '100%']);
  const fade = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <motion.section
      ref={ref}
      id="home"
      className="h-screen w-full hero-bg flex items-center justify-center relative"
      style={{
        backgroundSize: zoom,
      }}
    >
      <motion.div 
        style={{ opacity: fade }} 
        className="text-center text-white z-10 px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Digital <span className="text-[#ff5722]">Innovation</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
          We craft stunning digital experiences that drive growth and inspire action
        </p>
        <button className="bg-[#ff5722] hover:bg-[#e64a19] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
          Start Your Project
        </button>
      </motion.div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </motion.section>
  );
}
