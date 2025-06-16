import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies',
      icon: '💻',
      backTitle: 'Technologies We Use',
      backContent: ['React & Next.js', 'Node.js & Express', 'Database Integration', 'Cloud Deployment']
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love to interact with',
      icon: '🎨',
      backTitle: 'Design Process',
      backContent: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic campaigns that drive traffic and increase conversions',
      icon: '🚀',
      backTitle: 'Marketing Services',
      backContent: ['SEO Optimization', 'Social Media', 'Content Strategy', 'Analytics & Reporting']
    }
  ];

  return (
    <section id="services" className="py-20 bg-black relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our <span className="text-[#ff5722]">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            We deliver comprehensive digital solutions tailored to your business needs
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="service-card-container"
            >
              <div className="service-card group">
                {/* Icon */}
                <div className="service-icon">
                  <span className="text-4xl">{service.icon}</span>
                </div>
                
                {/* Content */}
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
                
                {/* Hover overlay with additional details */}
                <div className="service-overlay">
                  <h4 className="text-lg font-semibold mb-3 text-white">{service.backTitle}</h4>
                  <ul className="space-y-2 text-sm mb-4">
                    {service.backContent.map((item, index) => (
                      <li key={index} className="text-gray-200 flex items-center">
                        <span className="w-1.5 h-1.5 bg-[#ff5722] rounded-full mr-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className="service-cta-button">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
