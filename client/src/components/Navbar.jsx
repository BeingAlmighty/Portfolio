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
          // Prevent initial auto-scroll by checking if page has been scrolled
          if (window.scrollY > 50) {
            setActiveSection(entry.target.id);
          } else if (entry.target.id === 'home') {
            setActiveSection('home');
          }
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

  const scrollToSection = (sectionId) => {
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
                className={`px-3 py-1.5 rounded-full transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'bg-white/20 text-white'
                    : 'hover:bg-white/10 text-white/70'
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
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
          show ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="px-4 py-3 bg-black/80 backdrop-blur-lg border-b border-white/10">
          <div className="flex items-center justify-between">
            <h1 className="text-white font-bold">Portfolio</h1>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`bg-black/95 backdrop-blur-lg transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <ul className="p-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-white/20 text-white'
                      : 'text-white/70 hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
