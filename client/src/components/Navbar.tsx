import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    let lastScroll = 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const current = window.scrollY;
          setShow(current < lastScroll || current < 100);
          lastScroll = current;
          ticking = false;
        });
        ticking = true;
      }
    };

    // Enhanced IntersectionObserver for better mobile responsiveness
    const sections = document.querySelectorAll('section[id], div[id="home"]');
    const observerOptions = {
      root: null,
      rootMargin: isMobile ? '-30% 0px -30% 0px' : '-40% 0px -40% 0px',
      threshold: isMobile ? 0.1 : 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
      observer.disconnect();
    };
  }, [isMobile]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - (isMobile ? 80 : 100);
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-3 sm:top-5 left-1/2 transform -translate-x-1/2 px-4 sm:px-6 md:px-8 py-2 sm:py-3 z-50 rounded-full navbar-glass bg-white/10 border border-white/20 transition-all duration-300 hidden md:block ${
          show ? 'opacity-100' : 'opacity-0 -translate-y-5'
        }`}
      >
        <ul className="flex gap-3 sm:gap-4 lg:gap-6 text-white text-xs sm:text-sm font-semibold">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`hover:text-[#ff5722] transition-colors duration-200 px-2 py-1 rounded ${
                  activeSection === item.id ? 'text-[#ff5722]' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`fixed top-3 left-1/2 transform -translate-x-1/2 px-4 py-2 z-50 rounded-full navbar-glass bg-white/10 border border-white/20 transition-all duration-300 md:hidden ${
          show ? 'opacity-100' : 'opacity-0 -translate-y-5'
        }`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white hover:text-[#ff5722] transition-colors duration-200 p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden">
          <div className="fixed top-16 left-1/2 transform -translate-x-1/2 w-11/12 max-w-sm bg-black/90 backdrop-blur-md rounded-2xl border border-white/20 p-6">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 ${
                      activeSection === item.id 
                        ? 'text-[#ff5722] bg-[#ff5722]/10' 
                        : 'text-white hover:text-[#ff5722]'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
