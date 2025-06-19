import { motion } from 'framer-motion';

export default function Services() {  const services = [
    {
      title: 'Web Development',
      description: 'Full-stack web applications with modern frameworks and scalable architecture',
      icon: '💻',
      backTitle: 'Technology Stack',
      backContent: ['React & Next.js Frontend', 'Node.js & Express Backend', 'MongoDB & PostgreSQL', 'AWS Cloud Hosting', 'TypeScript Integration']
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that maximize ROI and brand visibility',
      icon: '🚀',
      backTitle: 'Marketing Solutions',
      backContent: ['SEO & Content Marketing', 'Google Ads & Facebook Ads', 'Email Marketing Campaigns', 'Social Media Management', 'Analytics & Performance Tracking']
    },
    {
      title: 'Workflow Automation',
      description: 'Intelligent automation solutions to streamline business processes and boost efficiency',
      icon: '⚙️',
      backTitle: 'Automation Services',
      backContent: ['Custom Workflow Design', 'API Integration & Webhooks', 'Task Automation Scripts', 'Business Process Optimization', 'Real-time Monitoring & Alerts']
    },
    {
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications with native performance and intuitive UX',
      icon: '📱',
      backTitle: 'Development Platforms',
      backContent: ['React Native Apps', 'Flutter Development', 'iOS & Android Native', 'Progressive Web Apps', 'App Store Optimization']
    },
    {
      title: 'AI Agents & Chatbots',
      description: 'Custom AI chatbots and intelligent agents for customer support and automation',
      icon: '🤖',
      backTitle: 'AI Solutions',
      backContent: ['Custom Chatbot Development', 'WhatsApp Business Integration', 'Customer Support Automation', 'Lead Generation Bots', 'Multi-platform AI Agents']
    },
    {
      title: 'Data Analysis & Dashboards',
      description: 'Transform raw data into actionable insights with interactive dashboards and reports',
      icon: '📊',
      backTitle: 'Analytics Solutions',
      backContent: ['Excel Dashboard Creation', 'Power BI Reports', 'Google Analytics Setup', 'Custom Data Visualization', 'Business Intelligence Insights']
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
          </motion.h2>          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4"
          >
            Transforming ideas into digital reality with cutting-edge technology and innovative solutions
          </motion.p>
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center max-w-7xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="book-container w-full flex justify-center"
            >
              <div className="book w-full max-w-[280px] sm:w-[280px]">                {/* Back content (visible when cover opens) */}
                <div className="book-content">
                  <div className="bg-[#ff5722]/20 p-2 sm:p-3 rounded-full mb-3 sm:mb-4 text-2xl sm:text-3xl inline-block">
                    {service.icon}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-[#ff5722]">{service.backTitle}</h4>
                  <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    {service.backContent.map((item, index) => (
                      <li key={index} className="text-gray-700 flex items-center">
                        <span className="text-[#ff5722] mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Cover (front) */}
                <div className="cover">
                  <div className="cover-content">
                    <div className="bg-[#ff5722]/20 p-3 sm:p-4 rounded-full mb-3 sm:mb-4 text-3xl sm:text-4xl">
                      {service.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">{service.title}</h3>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed px-2">{service.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
