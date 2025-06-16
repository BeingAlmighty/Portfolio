import { motion, useTransform, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const caseStudies = [
  {
    id: 1,
    title: "E-Commerce Platform Transformation",
    heroCard: {
      id: 1,
      title: "E-Commerce Platform",
      subtitle: "Complete Digital Transformation",
      url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      hero: true
    },
    cards: [
      {
        id: 2,
        title: "Discovery & Research",
        content: "Conducted comprehensive market analysis and user research to identify key pain points and opportunities",
        url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=450&fit=crop"
      },
      {
        id: 3,
        title: "UX/UI Design",
        content: "Created intuitive user interfaces with modern design principles and seamless user experience",
        url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=450&fit=crop"
      },
      {
        id: 4,
        title: "Development",
        content: "Built scalable architecture using React, Node.js, and cloud infrastructure for optimal performance",
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=450&fit=crop"
      },
      {
        id: 5,
        title: "Testing & QA",
        content: "Implemented comprehensive testing strategies including unit, integration, and user acceptance testing",
        url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=450&fit=crop"
      },
      {
        id: 6,
        title: "Deployment",
        content: "Seamless deployment with zero downtime using CI/CD pipelines and cloud-native technologies",
        url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=450&fit=crop"
      },
      {
        id: 7,
        title: "Results",
        content: "Achieved 300% increase in conversion rates and 60% reduction in bounce rate within 3 months",
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=450&fit=crop"
      }
    ]
  },
  {
    id: 2,
    title: "Healthcare Digital Solution",
    heroCard: {
      id: 8,
      title: "Healthcare Portal",
      subtitle: "Patient Management System",
      url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      hero: true
    },
    cards: [
      {
        id: 9,
        title: "Stakeholder Analysis",
        content: "Engaged with healthcare professionals and patients to understand workflow requirements and pain points",
        url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=450&fit=crop"
      },
      {
        id: 10,
        title: "Compliance & Security",
        content: "Implemented HIPAA-compliant architecture with end-to-end encryption and secure data handling",
        url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=450&fit=crop"
      },
      {
        id: 11,
        title: "System Integration",
        content: "Seamlessly integrated with existing hospital systems and electronic health record platforms",
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=450&fit=crop"
      },
      {
        id: 12,
        title: "User Training",
        content: "Comprehensive training programs for medical staff and intuitive interfaces for patients",
        url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=450&fit=crop"
      },
      {
        id: 13,
        title: "Performance Optimization",
        content: "Optimized for high-volume usage with real-time data processing and minimal latency",
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=450&fit=crop"
      },
      {
        id: 14,
        title: "Impact & Metrics",
        content: "Reduced patient wait times by 40% and improved data accuracy by 95% across all departments",
        url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=450&fit=crop"
      }
    ]
  }
];

const HorizontalScrollCarousel = ({ cards }: { cards: any[] }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const totalCards = cards.length;
  
  // Dynamic height: each card needs sufficient scroll space
  const cardScrollSpace = 100; // vh per card
  const scrollHeight = totalCards * cardScrollSpace;
  
  // Horizontal transform: start at 0%, move to show all cards
  const maxTranslate = (totalCards - 1) * 80; // 80% per card for proper spacing
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${maxTranslate}%`]);

  return (
    <section
      ref={targetRef}
      className="relative bg-[#1a1a1a]"
      style={{ height: `${scrollHeight}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6 pl-8">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: any }) => {
  const isHero = card.hero;
  
  return (
    <div
      key={card.id}
      className={`group relative overflow-hidden bg-neutral-200 ${
        isHero ? 'h-[500px] w-[600px]' : 'h-[450px] w-[450px]'
      }`}
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        {isHero ? (
          <div className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-center backdrop-blur-lg rounded-lg">
            <h3 className="text-5xl font-black uppercase text-white mb-2">{card.title}</h3>
            <p className="text-2xl text-white font-medium">{card.subtitle}</p>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-center backdrop-blur-lg rounded-lg max-w-sm">
            <h4 className="text-3xl font-black uppercase text-white mb-4">{card.title}</h4>
            <p className="text-white text-sm leading-relaxed">{card.content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default function CaseStudiesNew() {
  return (
    <div className="bg-[#1e1e1e]">
      {/* Header */}
      <div className="py-20 bg-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Case <span className="text-[#ff5722]">Studies</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore our detailed case studies showcasing how we transform ideas into successful digital solutions
            </p>
          </motion.div>
        </div>
      </div>

      {/* Case Study 1 */}
      <HorizontalScrollCarousel cards={[caseStudies[0].heroCard, ...caseStudies[0].cards]} />

      {/* Case Study 2 */}
      <HorizontalScrollCarousel cards={[caseStudies[1].heroCard, ...caseStudies[1].cards]} />
    </div>
  );
}