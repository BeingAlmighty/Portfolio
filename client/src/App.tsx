import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { ReactLenis } from "lenis/react";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingChatBot from "./components/FloatingChatBot";

function App() {
  useEffect(() => {
    // Prevent automatic scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Ensure we start at the top
    window.scrollTo(0, 0);
    
    // Clear any hash navigation
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="bg-black text-white overflow-x-hidden relative">
          <ReactLenis
            root
            options={{
              lerp: 0.05,
              duration: 1.2,
              smoothWheel: true,
            }}
          >
            <Navbar />
            <Hero />
            <Services />
            <Projects />
            <ContactSection />
            <Footer />
          </ReactLenis>
        </div>
        <FloatingChatBot />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
