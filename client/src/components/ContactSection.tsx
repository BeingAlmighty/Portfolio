import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";

const ContactInfo = () => (
  <div className="bg-white text-black rounded-xl p-6 shadow-md space-y-6">
    <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
    
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Mail className="w-5 h-5 text-[#ff5722]" />
        <a href="mailto:hello@example.com" className="hover:text-[#ff5722] transition-colors">
          hello@example.com
        </a>
      </div>
      
      <div className="flex items-center gap-3">
        <Phone className="w-5 h-5 text-[#ff5722]" />
        <span>+91-9876543210</span>
      </div>
      
      <div className="flex items-center gap-3">
        <MapPin className="w-5 h-5 text-[#ff5722]" />
        <span>New Delhi, India</span>
      </div>
    </div>
    
    <div className="pt-4 border-t border-gray-200">
      <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
      <div className="flex space-x-4">
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
          LinkedIn
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-pink-600 hover:text-pink-800 transition-colors"
        >
          <Instagram className="w-5 h-5" />
          Instagram
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-400 hover:text-blue-600 transition-colors"
        >
          <Twitter className="w-5 h-5" />
          Twitter
        </a>
      </div>
    </div>
  </div>
);

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  options?: string[];
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Meow! I'm Coco, A&B's pet cat. I'll guide you.",
      isBot: true,
      options: ["Looking for your services", "Just here for fun"]
    }
  ]);
  const [currentStep, setCurrentStep] = useState("initial");

  const handleOptionClick = (option: string) => {
    // Add user's choice
    const userMessage: Message = {
      id: Date.now().toString(),
      text: option,
      isBot: false
    };

    let botResponse: Message;

    switch (currentStep) {
      case "initial":
        if (option === "Looking for your services") {
          botResponse = {
            id: (Date.now() + 1).toString(),
            text: "Perfect! What's your main goal?",
            isBot: true,
            options: ["Build a website", "Mobile app development", "Brand identity", "Digital marketing"]
          };
          setCurrentStep("services");
        } else {
          botResponse = {
            id: (Date.now() + 1).toString(),
            text: "Haha, I like you already! Are you interested in what we do?",
            isBot: true,
            options: ["Yes, tell me more", "Not really, just browsing"]
          };
          setCurrentStep("fun");
        }
        break;

      case "services":
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: `Great choice! For ${option}, what's your budget range?`,
          isBot: true,
          options: ["Under $5,000", "$5,000 - $15,000", "$15,000 - $50,000", "Above $50,000"]
        };
        setCurrentStep("budget");
        break;

      case "budget":
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: "Awesome! I'll connect you with our team. They'll reach out within 24 hours to discuss your project in detail.",
          isBot: true
        };
        setCurrentStep("complete");
        break;

      case "fun":
        if (option === "Yes, tell me more") {
          botResponse = {
            id: (Date.now() + 1).toString(),
            text: "We create amazing digital experiences! What interests you most?",
            isBot: true,
            options: ["Web development", "Mobile apps", "Design services", "All of the above"]
          };
          setCurrentStep("services");
        } else {
          botResponse = {
            id: (Date.now() + 1).toString(),
            text: "No worries! Feel free to explore our work. If you change your mind, just refresh and chat with me again!",
            isBot: true
          };
          setCurrentStep("complete");
        }
        break;

      default:
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: "Thanks for chatting! Feel free to contact us anytime.",
          isBot: true
        };
    }

    setMessages(prev => [...prev, userMessage, botResponse]);
  };

  return (
    <div className="bg-gray-900 rounded-xl p-6 h-96 flex flex-col">
      <h3 className="text-xl font-bold text-white mb-4">Chat with Coco</h3>
      
      <div className="flex-1 overflow-y-auto space-y-3 mb-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                message.isBot
                  ? "bg-gray-700 text-white"
                  : "bg-[#ff5722] text-white"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {messages[messages.length - 1]?.options && (
        <div className="space-y-2">
          {messages[messages.length - 1].options!.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className="w-full text-left px-3 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Get In <span className="text-[#ff5722]">Touch</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4"
          >
            Ready to start your project? Let's discuss how we can bring your vision to life
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <ContactInfo />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <ChatBot />
          </motion.div>
        </div>
      </div>
    </section>
  );
}