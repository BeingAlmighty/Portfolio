export default function Footer() {
  const socialLinks = [
    { icon: '🐦', href: '#', label: 'Twitter' },
    { icon: '💼', href: '#', label: 'LinkedIn' },
    { icon: '💻', href: '#', label: 'GitHub' },
    { icon: '🎨', href: '#', label: 'Dribbble' }
  ];

  return (
    <footer className="bg-black border-t border-white/10 py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="order-2 sm:order-1">
            <p className="text-gray-300 text-sm sm:text-base text-center sm:text-left">
              &copy; 2024 Digital Agency. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4 sm:gap-6 order-1 sm:order-2">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="text-gray-300 hover:text-[#ff5722] transition-colors text-xl sm:text-2xl"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
