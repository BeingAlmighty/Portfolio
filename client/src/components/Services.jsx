import { motion } from 'framer-motion';
import { Code, Zap, TrendingUp, Bot } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      features: ["React & Vue.js", "Node.js & Python", "Database Design", "API Development"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Workflow Automation", 
      description: "Streamline your business processes with intelligent automation solutions.",
      features: ["Process Optimization", "Integration Systems", "Task Automation", "Performance Monitoring"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence.",
      features: ["SEO Optimization", "Social Media", "Content Strategy", "Analytics & Reporting"]
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Agents",
      description: "Intelligent AI solutions to automate and enhance your business operations.",
      features: ["Chatbot Development", "Machine Learning", "Natural Language Processing", "Predictive Analytics"]
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-[#2d2d2d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Our <span className="text-[#ff5722]">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4"
          >
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#1e1e1e] rounded-xl p-6 sm:p-8 hover:bg-[#252525] transition-colors group"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#ff5722]/10 rounded-lg text-[#ff5722] group-hover:bg-[#ff5722] group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold ml-4">{service.title}</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-[#ff5722] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}