import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      subtitle: 'Full-Stack Solutions',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=500&fit=crop&crop=center',
      description: 'Modern, responsive websites built with cutting-edge technologies'
    },
    {
      title: 'Digital Marketing',
      subtitle: 'Growth Strategy',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop&crop=center',
      description: 'Strategic campaigns that drive traffic and increase conversions'
    },
    {
      title: 'Workflow Automation',
      subtitle: 'Process Optimization',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=500&fit=crop&crop=center',
      description: 'Streamline operations with intelligent automation solutions'
    },
    {
      title: 'App Development',
      subtitle: 'Mobile Solutions',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=500&fit=crop&crop=center',
      description: 'Native and cross-platform mobile applications'
    },
    {
      title: 'AI Agents',
      subtitle: 'Intelligent Systems',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=500&fit=crop&crop=center',
      description: 'Custom AI solutions and intelligent automation agents'
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Our <span className="text-[#ff5722]">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4"
          >
            We deliver comprehensive digital solutions tailored to your business needs
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="animated-card"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div className="card-glow"></div>
              <div className="card-corner-bottom"></div>
              <div className="hover-content">
                <p className="project-subtitle">{service.subtitle}</p>
                <h3 className="project-title">{service.title}</h3>
                <button className="view-button">
                  Learn More
                  <div className="icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                    </svg>
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
