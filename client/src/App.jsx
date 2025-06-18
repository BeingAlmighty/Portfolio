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
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>        <ReactLenis root>
          <main className="relative">
            <Navbar />
            <Hero />
            <Services />
            <Projects />
            <ContactSection />
            <Footer />
          </main>
        </ReactLenis>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
