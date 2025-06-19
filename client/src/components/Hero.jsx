import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import websiteLogo from '../assets/website logo.webp';
import zapierImage from '../assets/zapier.jpg';

// Tech Icons as SVG components
const AIIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12L13.5 16L17 17L13.5 18L12 22L10.5 18L7 17L10.5 16L12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CodeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DatabaseIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 5V19C3 20.66 7.03 22 12 22S21 20.66 21 19V5" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 12C3 13.66 7.03 15 12 15S21 13.66 21 12" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const CloudIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 10H16.74C16.24 6.67 13.39 4 10 4C6.18 4 3 7.18 3 11C1.34 11 0 12.34 0 14C0 15.66 1.34 17 3 17H18C19.66 17 21 15.66 21 14C21 12.34 19.66 11 18 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CircuitIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="6" height="6" rx="2" stroke="currentColor" strokeWidth="2"/>
    <rect x="14" y="14" width="6" height="6" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M14 17H10" stroke="currentColor" strokeWidth="2"/>
    <path d="M10 7H14" stroke="currentColor" strokeWidth="2"/>
    <circle cx="7" cy="17" r="1" stroke="currentColor" strokeWidth="2"/>
    <circle cx="17" cy="7" r="1" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const NetworkIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="2" r="2" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="22" r="2" stroke="currentColor" strokeWidth="2"/>
    <circle cx="4" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
    <circle cx="20" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 4V10" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 14V20" stroke="currentColor" strokeWidth="2"/>
    <path d="M6 12H10" stroke="currentColor" strokeWidth="2"/>
    <path d="M14 12H18" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const RocketIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 16.5C-1.5 10.5 11 0 11 0S22.5 10.5 16.5 16.5L11 12L4.5 16.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.5 10.5L8.5 15.5" stroke="currentColor" strokeWidth="2"/>
    <path d="M15 5L9 9" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden" id="home">
      {/* Main Hero Section */}
      <HeroContent />
      
      {/* Parallax Images Section */}
      <ParallaxSection />
    </div>
  );
}

const HeroContent = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#1e1e1e] to-[#2d2d2d] relative overflow-hidden">      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(255, 87, 34, 0.5) 1px, transparent 1px),
              linear-gradient(rgba(255, 87, 34, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} 
        />
      </div>

      {/* Tech Background Pattern */}
      <TechBackground />

      {/* Floating Elements */}
      <FloatingElements />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div 
          className="text-center text-white w-full max-w-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <span className="text-[#ff5722]">Solvexx</span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 leading-tight text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            AI-Powered Digital Innovation Agency
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Transforming businesses through intelligent web solutions, automated workflows, and data-driven insights.
          </motion.p>
          
          {/* Service Cards */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <ServiceCard icon="🤖" title="AI Agents" description="Intelligent automation that works 24/7" />
            <ServiceCard icon="🌐" title="Web Development" description="Modern apps with AI integration" />
            <ServiceCard icon="📊" title="Data Dashboards" description="Real-time analytics & insights" />
            <ServiceCard icon="⚡" title="Workflow Automation" description="Streamline your operations" />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#ff5722] to-[#ff7043] hover:from-[#e64a19] hover:to-[#ff5722] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#ff5722]/25"
            >
              <span className="flex items-center gap-2">
                Start Project
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            
            <button 
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/60 transition-all duration-300 hover:scale-105"
            >
              View Work
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-white opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <div className="group text-center p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-[#ff5722]/40 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#ff5722]/10">
    <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <h3 className="text-base font-bold text-[#ff5722] mb-2">{title}</h3>
    <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
  </div>
);

const FloatingElements = () => {
  const elements = [
    // Tech Icons with different sizes and positions
    { component: AIIcon, top: "15%", left: "8%", delay: 0, size: "w-6 h-6", opacity: "opacity-20" },
    { component: CodeIcon, top: "25%", right: "12%", delay: 1, size: "w-8 h-8", opacity: "opacity-15" },
    { component: DatabaseIcon, top: "35%", left: "15%", delay: 2, size: "w-5 h-5", opacity: "opacity-25" },
    { component: CloudIcon, top: "45%", right: "8%", delay: 3, size: "w-7 h-7", opacity: "opacity-20" },
    { component: CircuitIcon, top: "55%", left: "10%", delay: 4, size: "w-6 h-6", opacity: "opacity-15" },
    { component: NetworkIcon, top: "65%", right: "15%", delay: 5, size: "w-8 h-8", opacity: "opacity-20" },
    { component: RocketIcon, top: "75%", left: "12%", delay: 6, size: "w-5 h-5", opacity: "opacity-25" },
    { component: AIIcon, top: "85%", right: "10%", delay: 7, size: "w-7 h-7", opacity: "opacity-15" },
    
    // Additional scattered icons for more coverage
    { component: CodeIcon, top: "20%", left: "25%", delay: 8, size: "w-4 h-4", opacity: "opacity-10" },
    { component: DatabaseIcon, top: "40%", right: "25%", delay: 9, size: "w-6 h-6", opacity: "opacity-15" },
    { component: CircuitIcon, top: "60%", left: "30%", delay: 10, size: "w-5 h-5", opacity: "opacity-20" },
    { component: NetworkIcon, top: "80%", right: "30%", delay: 11, size: "w-7 h-7", opacity: "opacity-10" },
    
    // Code snippets mixed in
    { content: "ai.predict()", top: "30%", right: "20%", delay: 12, isCode: true },
    { content: "data.sync()", top: "50%", left: "20%", delay: 14, isCode: true },
    { content: "deploy()", top: "70%", right: "20%", delay: 16, isCode: true },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => {
        const IconComponent = element.component;
        
        return (
          <motion.div
            key={index}
            className={`absolute ${element.isCode ? 'bg-gray-900/10 backdrop-blur-sm border border-[#ff5722]/10 rounded-lg px-3 py-2 text-sm font-mono text-[#ff5722]/40' : `${element.size} ${element.opacity} text-[#ff5722]`} hidden lg:block`}
            style={{
              top: element.top,
              left: element.left,
              right: element.right,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              opacity: element.isCode ? [0.1, 0.3, 0.1] : [0.1, 0.4, 0.1],
              rotate: element.isCode ? [0, 2, -2, 0] : [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + (index % 3),
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {element.isCode ? (
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#ff5722] rounded-full animate-pulse opacity-60"></div>
                {element.content}
              </div>
            ) : (
              <IconComponent className={`${element.size} drop-shadow-lg`} />
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

const TechBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-[#ff5722] rounded-lg"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute top-40 right-32 w-24 h-24 border-2 border-[#ff5722] rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute bottom-32 left-40 w-20 h-20 bg-gradient-to-r from-[#ff5722]/20 to-transparent"
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.line
          x1="10%" y1="20%" x2="90%" y2="80%"
          stroke="#ff5722"
          strokeWidth="1"
          strokeOpacity="0.1"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.line
          x1="20%" y1="80%" x2="80%" y2="20%"
          stroke="#ff5722"
          strokeWidth="1"
          strokeOpacity="0.1"
          strokeDasharray="3,3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
        <motion.circle
          cx="30%" cy="40%" r="2"
          fill="#ff5722"
          opacity="0.3"
          animate={{ r: [2, 6, 2] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.circle
          cx="70%" cy="60%" r="3"
          fill="#ff5722"
          opacity="0.2"
          animate={{ r: [3, 8, 3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </svg>

      {/* Hexagon Pattern */}
      <div className="absolute top-1/4 right-1/4 opacity-10">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <motion.polygon
            points="50,5 85,25 85,75 50,95 15,75 15,25"
            fill="none"
            stroke="#ff5722"
            strokeWidth="2"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <motion.polygon
            points="50,20 70,30 70,70 50,80 30,70 30,30"
            fill="none"
            stroke="#ff5722"
            strokeWidth="1"
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>
    </div>
  );
};

const ParallaxSection = () => {
  return (
    <div className="relative bg-black">
      {/* Gradient overlay for smooth transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#2d2d2d] to-transparent z-10" />
      
      <div className="mx-auto max-w-5xl px-4 pt-40 pb-20">        <ParallaxImg
          src={websiteLogo}
          alt="Solvexx company workspace"
          start={-100}
          end={100}
          className="w-1/2 rounded-xl mb-8 mx-auto h-64 object-cover"
        />
        <ParallaxImg
          src={zapierImage}
          alt="Technology integration solutions"
          start={150}
          end={-150}
          className="w-3/4 rounded-xl mb-8 mx-auto h-64 object-cover"
        />
        <ParallaxImg
          src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
          alt="Digital marketing analytics"
          start={-100}
          end={100}
          className="w-1/2 rounded-xl mb-8 ml-auto h-64 object-cover"
        />
        <ParallaxImg
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
          alt="Team collaboration"
          start={0}
          end={-200}
          className="w-2/3 rounded-xl mx-auto h-64 object-cover"
        />
      </div>
      
      {/* Bottom gradient for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]);

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ y, opacity }}
    />
  );
};


