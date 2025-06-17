import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, RotateCcw } from "lucide-react";

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
  inputType?: 'text' | 'email' | 'phone';
  inputPlaceholder?: string;
  skipOption?: boolean;
}

interface UserData {
  service?: string;
  goals?: string;
  budget?: string;
  brandName?: string;
  email?: string;
  phone?: string;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Meow! I'm Billu, Solvixx pet cat. I'll guide you.",
      isBot: true,
      options: ["Looking for your services", "Just here for fun"]
    }
  ]);
  const [currentStep, setCurrentStep] = useState("initial");
  const [userData, setUserData] = useState<UserData>({});
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const resetChat = () => {
    setMessages([
      {
        id: "1",
        text: "Meow! I'm Billu, Solvixx pet cat. I'll guide you.",
        isBot: true,
        options: ["Looking for your services", "Just here for fun"]
      }
    ]);
    setCurrentStep("initial");
    setUserData({});
    setInputValue("");
    setIsTyping(false);
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addBotMessageWithDelay = (botResponse: Message) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, botResponse]);
    }, 1500 + Math.random() * 1000); // 1.5-2.5 seconds delay
  };

  const handleOptionClick = (option: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: option,
      isBot: false
    };

    setMessages(prev => [...prev, userMessage]);

    let botResponse: Message;

    switch (currentStep) {
      case "initial":
        if (option === "Looking for your services") {
          botResponse = {
            id: (Date.now() + 1).toString(),
            text: "Perfect! What's your main goal?",
            isBot: true,
            options: ["Web Development", "Mobile App Development", "Workflow Automation", "Digital Marketing", "AI Agents"]
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
        setUserData(prev => ({ ...prev, service: option }));
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: `Excellent choice! What are your goals with ${option}? This helps us understand how we can best serve you. 😊`,
          isBot: true,
          inputType: 'text',
          inputPlaceholder: 'Tell us about your goals...',
          skipOption: false
        };
        setCurrentStep("goals");
        break;

      case "goals":
        // This case is handled by handleInputSubmit, not handleOptionClick
        break;

      case "budget":
        setUserData(prev => ({ ...prev, budget: option }));
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: "Please enter your brand name.",
          isBot: true,
          inputType: 'text',
          inputPlaceholder: 'Enter your brand name...',
          skipOption: false
        };
        setCurrentStep("brandName");
        break;

      case "fun":
        if (option === "Yes, tell me more") {
          botResponse = {
            id: (Date.now() + 1).toString(),
            text: "We create amazing digital experiences! What interests you most?",
            isBot: true,
            options: ["Web Development", "Mobile App Development", "Workflow Automation", "Digital Marketing", "AI Agents"]
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

      case "summary":
        if (option === "Submit") {
          botResponse = {
            id: (Date.now() + 1).toString(),
            text: "Awesome! Your information has been submitted. Our team will reach out within 24 hours to discuss your project in detail. Meow! 🐱",
            isBot: true
          };
          setCurrentStep("complete");
        } else {
          resetChat();
          return;
        }
        break;

      default:
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: "Thanks for chatting! Feel free to contact us anytime.",
          isBot: true
        };
    }

    addBotMessageWithDelay(botResponse);
  };

  const handleInputSubmit = (value: string) => {
    // Email validation - required field
    if (currentStep === "email") {
      if (!value.trim()) {
        const errorMessage: Message = {
          id: Date.now().toString(),
          text: "Email is required. Please enter your email address.",
          isBot: true,
          inputType: 'email',
          inputPlaceholder: 'Enter your email (e.g., john@gmail.com)...',
          skipOption: false
        };
        setMessages(prev => [...prev, errorMessage]);
        return;
      }
      if (!validateEmail(value.trim())) {
        const errorMessage: Message = {
          id: Date.now().toString(),
          text: "Please enter a valid email address (e.g., john@gmail.com)",
          isBot: true,
          inputType: 'email',
          inputPlaceholder: 'Enter your email (e.g., john@gmail.com)...',
          skipOption: false
        };
        setMessages(prev => [...prev, errorMessage]);
        return;
      }
    }

    // Check if required field is empty (except for optional phone)
    if (!value.trim() && !messages[messages.length - 1]?.skipOption) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: value.trim() || "Skipped",
      isBot: false
    };

    setMessages(prev => [...prev, userMessage]);

    let botResponse: Message;

    switch (currentStep) {
      case "goals":
        setUserData(prev => ({ ...prev, goals: value.trim() }));
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: `Great insights! Now, what's your budget range for this project?`,
          isBot: true,
          options: ["Under $5,000", "$5,000 - $15,000", "$15,000 - $50,000", "Above $50,000"]
        };
        setCurrentStep("budget");
        break;

      case "brandName":
        setUserData(prev => ({ ...prev, brandName: value.trim() }));
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: "Great! Now I need your email address to contact you.",
          isBot: true,
          inputType: 'email',
          inputPlaceholder: 'Enter your email (e.g., john@gmail.com)...',
          skipOption: false
        };
        setCurrentStep("email");
        break;

      case "email":
        setUserData(prev => ({ ...prev, email: value.trim() }));
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: "And your phone number? (Optional)",
          isBot: true,
          inputType: 'phone',
          inputPlaceholder: 'Enter your phone number...',
          skipOption: true
        };
        setCurrentStep("phone");
        break;

      case "phone":
        setUserData(prev => ({ ...prev, phone: value.trim() }));
        // Show summary before final submission
        const summaryText = `Perfect! Let me confirm your details:

📝 Service: ${userData.service}
🎯 Goals: ${userData.goals}
💰 Budget: ${userData.budget}
🏢 Brand: ${userData.brandName}
📧 Email: ${userData.email}${value.trim() ? `\n📞 Phone: ${value.trim()}` : ''}

Is this information correct?`;
        
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: summaryText,
          isBot: true,
          options: ["Submit", "Reset & Start Over"]
        };
        setCurrentStep("summary");
        break;

      default:
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: "Thanks for chatting! Feel free to contact us anytime.",
          isBot: true
        };
    }

    addBotMessageWithDelay(botResponse);
    setInputValue("");
  };

  const handleSkip = () => {
    handleInputSubmit("");
  };

  // Typing indicator component
  const TypingIndicator = () => (
    <div className="flex justify-start mb-1">
      <div className="flex items-start gap-2 max-w-xs">
        <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-xs flex-shrink-0 mt-1">
          🐱
        </div>
        <div className="bg-gray-700 text-white px-4 py-3 rounded-2xl rounded-bl-md">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-900 rounded-xl p-6 h-[70vh] flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
            🐱
          </div>
          <h3 className="text-xl font-bold text-white">Chat with Coco</h3>
        </div>
        <button
          onClick={resetChat}
          className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-colors"
          title="Reset chat"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>
      
      <div ref={chatContainerRef} className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
        {messages.map((message) => (
          <div key={message.id} className="space-y-1">
            <div className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
              <div className="flex items-start gap-3 max-w-sm">
                {message.isBot && (
                  <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-sm flex-shrink-0 mt-1">
                    🐱
                  </div>
                )}
                <div
                  className={`px-5 py-3 rounded-2xl ${
                    message.isBot
                      ? "bg-gray-700 text-white rounded-bl-md"
                      : "bg-black text-white rounded-br-md"
                  } max-w-full break-words`}
                >
                  {message.text}
                </div>
              </div>
            </div>
            <div className={`text-xs text-gray-500 ${message.isBot ? "text-left ml-11" : "text-right"}`}>
              Just now
            </div>
          </div>
        ))}
        
        {/* Typing Indicator */}
        {isTyping && (
          <div className="space-y-1">
            <TypingIndicator />
            <div className="text-xs text-gray-500 text-left ml-11">
              Just now
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Options */}
      {!isTyping && messages[messages.length - 1]?.options && (
        <div className="space-y-3">
          {messages[messages.length - 1].options!.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className="w-full text-left px-5 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors text-sm border border-gray-600 hover:border-gray-500"
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {/* Input Field */}
      {!isTyping && messages[messages.length - 1]?.inputType && (
        <div className="space-y-3">
          <div className="flex gap-2">
            <input
              type={messages[messages.length - 1].inputType}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={messages[messages.length - 1].inputPlaceholder}
              className="flex-1 px-5 py-3 bg-gray-800 text-white rounded-full border border-gray-600 focus:border-[#ff5722] focus:outline-none text-sm"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleInputSubmit(inputValue);
                }
              }}
              autoFocus
            />
            <button
              onClick={() => handleInputSubmit(inputValue)}
              className="px-6 py-3 bg-[#ff5722] hover:bg-[#e64a19] text-white rounded-full transition-colors font-medium text-sm"
            >
              Send
            </button>
          </div>
          {messages[messages.length - 1]?.skipOption && (
            <button
              onClick={handleSkip}
              className="w-full text-center px-4 py-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              Skip this step
            </button>
          )}
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