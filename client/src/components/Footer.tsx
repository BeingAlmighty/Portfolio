export default function Footer() {
  const socialLinks = [
    { icon: '🐦', href: '#', label: 'Twitter' },
    { icon: '💼', href: '#', label: 'LinkedIn' },
    { icon: '💻', href: '#', label: 'GitHub' },
    { icon: '🎨', href: '#', label: 'Dribbble' }
  ];

  return (
    <footer className="bg-black border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300">&copy; 2024 Digital Agency. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="text-gray-300 hover:text-[#ff5722] transition-colors text-2xl"
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
