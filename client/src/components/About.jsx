import { motion } from 'framer-motion';
import { Users, Target, Award, Lightbulb } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "50+", label: "Projects Completed" },
    { icon: <Target className="w-6 h-6" />, number: "98%", label: "Client Satisfaction" },
    { icon: <Award className="w-6 h-6" />, number: "5+", label: "Years Experience" },
    { icon: <Lightbulb className="w-6 h-6" />, number: "24/7", label: "Support Available" }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-[#ff5722]">Solvixx</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
              We are a passionate team of digital innovators dedicated to creating exceptional 
              web experiences. Our mission is to transform your ideas into powerful digital 
              solutions that drive growth and success.
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
              From concept to deployment, we work closely with our clients to ensure every 
              project exceeds expectations and delivers measurable results.
            </p>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-4 bg-[#2d2d2d] rounded-lg"
                >
                  <div className="flex justify-center mb-2 text-[#ff5722]">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&crop=center"
                alt="Team collaboration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-[#ff5722] rounded-full flex items-center justify-center"
            >
              <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center"
            >
              <Target className="w-4 h-4 sm:w-6 sm:h-6 text-[#ff5722]" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}