import { motion } from 'framer-motion';

export default function About() {
  const achievements = [
    { icon: '✓', text: '100+ Successful Projects' },
    { icon: '✓', text: '50+ Happy Clients' },
    { icon: '✓', text: '5+ Years Experience' }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            About <span className="text-[#ff5722]">Us</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4"
          >
            We're a passionate team of designers and developers creating digital excellence
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Team collaborating in modern office"
              className="rounded-xl shadow-2xl w-full h-auto" 
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Crafting Digital Excellence Since 2018</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              We believe in the power of great design and clean code. Our team combines creativity with technical expertise to deliver solutions that not only look amazing but perform exceptionally.
            </p>
            <div className="space-y-3 sm:space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4">
                  <div className="bg-[#ff5722] p-2 rounded-full flex-shrink-0">
                    <span className="text-white text-sm font-bold">{achievement.icon}</span>
                  </div>
                  <span className="text-sm sm:text-base">{achievement.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
