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
      className={`fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <ul className="relative space-y-6">
        {/* Vertical connecting line - spans full height */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-300"></div>
        
        {navItems.map((item) => (
          <li key={item.id} className="relative">
            <button
              onClick={() => scrollToSection(item.id)}
              className="group flex items-center gap-3 cursor-pointer"
              aria-label={`Navigate to ${item.label}`}
            >
              {/* Dot indicator with backdrop */}
              <div className="relative z-10 flex items-center justify-center">
                {/* Backdrop circle for visibility on any background */}
                <div className="absolute size-7 rounded-full bg-white/90 backdrop-blur-sm shadow-sm"></div>
                <div
                  className={`relative size-4 rounded-full border-2 transition-all ${
                    activeSection === item.id
                      ? 'bg-blue-600 border-blue-600 scale-110'
                      : 'bg-white border-slate-400 group-hover:border-blue-500 group-hover:scale-105'
                  }`}
                />
              </div>
              
              {/* Label - only shows on hover or when active */}
              <span
                className={`text-sm whitespace-nowrap transition-all bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-sm ${
                  activeSection === item.id
                    ? 'opacity-100 text-blue-600 font-medium translate-x-0'
                    : 'opacity-0 text-slate-600 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                }`}
              >
                {item.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}