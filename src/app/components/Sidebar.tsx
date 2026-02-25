import { useEffect, useState } from 'react';
import { scrollToSection } from './Utils';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
];

export function Sidebar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let current = activeSection;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          current = navItems[i].id;
          break;
        }
      }

      if (current !== activeSection) {
        setActiveSection(current);

        // Update the URL hash without scrolling again
        window.history.replaceState(null, '', `/#${current}`);
      }

      // Hide sidebar when on hero section
      setIsVisible(current !== 'hero');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // call once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <nav
      className={`fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
    <div className="bg-white p-4 rounded-lg shadow-md border border-slate-200">
      <ul className="space-y-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className="group flex items-center gap-3 cursor-pointer"
              aria-label={`Navigate to ${item.label}`}
            >
              <div
                className={`h-px transition-all ${
                  activeSection === item.id
                    ? 'w-16 bg-blue-600'
                    : 'w-8 bg-slate-400 group-hover:w-12 group-hover:bg-blue-500'
                }`}
              />
              <span
                className={`text-sm transition-colors ${
                  activeSection === item.id
                    ? 'text-blue-600 font-medium'
                    : 'text-slate-600 group-hover:text-blue-500'
                }`}
              >
                {item.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
    </nav>
  );
}