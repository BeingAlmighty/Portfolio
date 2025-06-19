import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Instagram, Twitter } from "lucide-react";

const ContactInfo = () => (
  <div className="text-center space-y-8">
    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Get in Touch</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center space-y-4"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-[#ff5722] to-[#ff7043] rounded-full flex items-center justify-center mx-auto">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white">Email Us</h3>
        <a 
          href="mailto:hellosolvexx@gmail.com" 
          className="text-gray-300 hover:text-[#ff5722] transition-colors text-lg block"
        >
          hellosolvexx@gmail.com
        </a>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center space-y-4"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-[#ff5722] to-[#ff7043] rounded-full flex items-center justify-center mx-auto">
          <Phone className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white">WhatsApp</h3>
        <a 
          href="https://wa.me/919650419638" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-[#ff5722] transition-colors text-lg block"
        >
          +91 9650419638
        </a>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center space-y-4"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-[#ff5722] to-[#ff7043] rounded-full flex items-center justify-center mx-auto">
          <Linkedin className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white">LinkedIn</h3>
        <a 
          href="https://www.linkedin.com/company/solvexx/" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-[#ff5722] transition-colors text-lg block"
        >
          @solvexx
        </a>      </motion.div>
    </div>
  </div>
);

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4"
          >
            Ready to start your project? Let's connect and bring your vision to life
          </motion.p>
        </div>
        
        <ContactInfo />
      </div>
    </section>
  );
}
