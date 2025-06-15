import { useEffect, useState } from 'react';

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
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

    // IntersectionObserver for section highlighting
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
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
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-8 py-3 z-50 rounded-full navbar-glass bg-white/10 border border-white/20 transition-all duration-300 ${
        show ? 'opacity-100' : 'opacity-0 -translate-y-5'
      }`}
    >
      <ul className="flex gap-6 text-white text-sm font-semibold">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`hover:text-[#ff5722] transition-colors duration-200 ${
                activeSection === item.id ? 'text-[#ff5722]' : 'text-white'
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
