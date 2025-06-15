import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { ReactLenis } from "lenis/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
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
            <About />
            <Contact />
            <Footer />
          </ReactLenis>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
