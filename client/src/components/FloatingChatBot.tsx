import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, RotateCcw } from "lucide-react";
import catImage from "@/assets/cat.jpg";

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

const FloatingChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState("initial");
  const [userData, setUserData] = useState<UserData>({});
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showInitialMessages, setShowInitialMessages] = useState(false);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);
  const [contactSectionInView, setContactSectionInView] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Monitor contact section visibility
  useEffect(() => {
    const contactSection = document.getElementById('contact');
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setContactSectionInView(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(contactSection);
    return () => observer.disconnect();
  }, []);

  // Don't auto-initialize chat when opened - only on reset

  const initializeChat = () => {
    setMessages([]);
    setCurrentStep("initial");
    setUserData({});
    setInputValue("");
    setIsTyping(false);
    setShowInitialMessages(false);
    setHoveredOption(null);

    // Show typing indicator before first message
    setTimeout(() => {
      setIsTyping(true);
    }, 500);

    // First message: "Meow!" with delay
    setTimeout(() => {
      setIsTyping(false);
      setMessages([{
        id: "1",
        text: "Meow!",
        isBot: true
      }]);
    }, 1500);

    // Show typing indicator before second message
    setTimeout(() => {
      setIsTyping(true);
    }, 2000);

    // Second message: "I'm Billu, Solvixx pet cat. I will guide you around." with delay
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: "2", 
        text: "I'm Billu, Solvixx pet cat. I will guide you around.",
        isBot: true
      }]);
    }, 3500);

    // Show typing indicator before third message
    setTimeout(() => {
      setIsTyping(true);
    }, 4000);

    // Third message: "What brings you here today?" with options
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: "3",
        text: "What brings you here today?",
        isBot: true,
        options: ["Looking for your services", "Just here for fun"]
      }]);
      setShowInitialMessages(true);
    }, 5500);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const resetChat = () => {
    initializeChat();
  };

  const scrollToBottom = () => {
    if (chatContainerRef.current && isOpen) {
      // Use requestAnimationFrame to ensure DOM is updated first
      requestAnimationFrame(() => {
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
      });
    }
  };

  useEffect(() => {
    if (isOpen && messages.length > 0) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

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

    let botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: "Thanks for chatting! Feel free to contact us anytime.",
      isBot: true
    };

    switch (currentStep) {
      case "initial":
        if (option === "Looking for your services") {
          botResponse = {
            id: (Date.now() + 1).toString(),
            text: "Perfect! What's your main goal?",
            isBot: true,
            options: ["Web Development", "Workflow Automation", "Digital Marketing", "AI Agents"]
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
            options: ["Web Development", "Workflow Automation", "Digital Marketing", "AI Agents"]
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
        break;
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

    let botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: "Thanks for chatting! Feel free to contact us anytime.",
      isBot: true
    };

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
        break;
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
        <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-xs flex-shrink-0 mt-1 overflow-hidden">
          <img src={catImage} alt="Cat" className="w-full h-full object-cover rounded-full" />
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
    <>
      {/* Floating Chat Icon */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-16 h-16 bg-[#ff5722] hover:bg-[#e64a19] rounded-full shadow-lg flex items-center justify-center text-2xl z-50 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ 
              scale: 0,
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
          >
            <img src={catImage} alt="Cat" className="w-12 h-12 rounded-full object-cover" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Chat Modal - MacOS Genie Effect */}
            <motion.div
              initial={{ 
                opacity: 0, 
                scale: 0.2, 
                y: 150,
                originX: 1,
                originY: 1
              }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: { 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 15,
                  duration: 0.6
                }
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.3, 
                y: 150,
                transition: { 
                  duration: 0.4, 
                  ease: "easeInOut" 
                }
              }}
              className="fixed bottom-6 right-6 w-96 h-[500px] bg-gray-900 rounded-xl shadow-2xl z-50 flex flex-col"
              style={{ maxWidth: "calc(100vw - 3rem)" }}
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center overflow-hidden">
                    <img src={catImage} alt="Cat" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Chat with Billu</h3>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={resetChat}
                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-colors"
                    title="Reset chat"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div 
                ref={chatContainerRef} 
                className="flex-1 overflow-y-auto space-y-3 p-4 chat-scrollable"
                style={{ 
                  overscrollBehavior: 'contain',
                  scrollBehavior: 'auto'
                }}
                onWheel={(e) => {
                  e.stopPropagation();
                }}
                onScroll={(e) => {
                  e.stopPropagation();
                }}
              >
                <AnimatePresence>
                  {messages.map((message, index) => (
                    <motion.div 
                      key={message.id} 
                      className="space-y-1"
                      initial={{ opacity: 0, y: 30, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.8 }}
                      transition={{ 
                        duration: 0.4,
                        delay: 0.1,
                        type: "spring",
                        stiffness: 150,
                        damping: 20
                      }}
                    >
                      <div className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                        <div className="flex items-start gap-2 max-w-xs">
                          {message.isBot && (
                            <motion.div 
                              className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-xs flex-shrink-0 mt-1 overflow-hidden"
                              initial={message.id === "1" ? { scale: 0, rotate: -180 } : false}
                              animate={message.id === "1" ? { scale: 1, rotate: 0 } : {}}
                              transition={message.id === "1" ? { 
                                delay: 0.2, 
                                duration: 0.5,
                                type: "spring",
                                stiffness: 200
                              } : {}}
                            >
                              <img src={catImage} alt="Cat" className="w-full h-full object-cover rounded-full" />
                            </motion.div>
                          )}
                          <motion.div
                            className={`px-3 py-2 rounded-2xl text-sm ${
                              message.isBot
                                ? "bg-gray-700 text-white rounded-bl-md"
                                : "bg-black text-white rounded-br-md"
                            } max-w-full break-words`}
                            initial={{ 
                              opacity: 0, 
                              scale: 0.3,
                              y: 20,
                              originX: message.isBot ? 0 : 1,
                              originY: 0.5
                            }}
                            animate={{ 
                              opacity: 1, 
                              scale: 1,
                              y: 0
                            }}
                            transition={{ 
                              delay: 0.3, 
                              duration: 0.5,
                              type: "spring",
                              stiffness: 120,
                              damping: 15
                            }}
                          >
                            {message.text}
                          </motion.div>
                        </div>
                      </div>
                      <motion.div 
                        className={`text-xs text-gray-500 ${message.isBot ? "text-left ml-8" : "text-right"}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.3 }}
                      >
                        {index < 3 ? "Just now" : "1m ago"}
                      </motion.div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="space-y-1">
                    <TypingIndicator />
                    <div className="text-xs text-gray-500 text-left ml-8">
                      Just now
                    </div>
                  </div>
                )}
                
                {/* Start Chat Button */}
                {messages.length === 0 && !isTyping && (
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center text-2xl mb-4 mx-auto overflow-hidden">
                        <img src={catImage} alt="Cat" className="w-full h-full object-cover rounded-full" />
                      </div>
                      <h3 className="text-white text-lg font-semibold mb-2">Hi! I'm Billu</h3>
                      <p className="text-gray-400 text-sm">Solvixx's pet cat. I'll help guide you around!</p>
                    </div>
                    <motion.button
                      onClick={initializeChat}
                      className="px-6 py-3 bg-[#ff5722] hover:bg-[#e64a19] text-white rounded-full font-medium transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Start Chat
                    </motion.button>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Options */}
              {!isTyping && messages[messages.length - 1]?.options && (
                <div className="p-4 pt-0">
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.5,
                      duration: 0.4,
                      type: "spring",
                      stiffness: 120
                    }}
                  >
                    {messages[messages.length - 1].options!.map((option, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        onMouseEnter={() => setHoveredOption(option)}
                        onMouseLeave={() => setHoveredOption(null)}
                        className={`w-full text-left px-4 py-3 rounded-full transition-all duration-200 text-xs border-2 flex items-center gap-2 ${
                          hoveredOption === option
                            ? "bg-gray-100 text-gray-900 border-gray-300 shadow-md transform scale-105"
                            : "bg-gray-800 text-white border-gray-600 hover:border-gray-500"
                        }`}
                        initial={{ 
                          opacity: 0, 
                          x: -30,
                          scale: 0.8
                        }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          scale: 1
                        }}
                        transition={{ 
                          delay: 0.6 + (0.1 * index),
                          duration: 0.4,
                          type: "spring",
                          stiffness: 150,
                          damping: 20
                        }}
                        whileHover={{ 
                          scale: 1.02,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ 
                          scale: 0.98,
                          transition: { duration: 0.1 }
                        }}
                      >
                        {/* Radio Button Circle */}
                        <div className={`w-3 h-3 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                          hoveredOption === option
                            ? "border-gray-900"
                            : "border-gray-400"
                        }`}>
                          {hoveredOption === option && (
                            <motion.div
                              className="w-1.5 h-1.5 rounded-full bg-gray-900"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ 
                                duration: 0.2,
                                type: "spring",
                                stiffness: 300
                              }}
                            />
                          )}
                        </div>
                        <span className="flex-1">{option}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                </div>
              )}

              {/* Input Field */}
              {!isTyping && messages[messages.length - 1]?.inputType && (
                <div className="p-4 pt-0">
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <input
                        type={messages[messages.length - 1].inputType}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder={messages[messages.length - 1].inputPlaceholder}
                        className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-full border border-gray-600 focus:border-[#ff5722] focus:outline-none text-xs"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            handleInputSubmit(inputValue);
                          }
                        }}
                        autoFocus
                      />
                      <button
                        onClick={() => handleInputSubmit(inputValue)}
                        className="px-4 py-2 bg-[#ff5722] hover:bg-[#e64a19] text-white rounded-full transition-colors font-medium text-xs"
                      >
                        Send
                      </button>
                    </div>
                    {messages[messages.length - 1]?.skipOption && (
                      <button
                        onClick={handleSkip}
                        className="w-full text-center px-3 py-1 text-gray-400 hover:text-white transition-colors text-xs"
                      >
                        Skip this step
                      </button>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChatBot;