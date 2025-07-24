import React from 'react';
import { User, Code, Laptop, Heart, Mail, Home } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Laptop },
    { id: 'hobbies', label: 'Hobbies', icon: Heart },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="bg-blue-500/10 dark:bg-yellow-500/10 backdrop-blur-lg rounded-full p-4 shadow-xl border border-blue-300/20 dark:border-yellow-400/20 animate-float">
        <ul className="space-y-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-500 to-yellow-500 text-white shadow-lg shadow-blue-500/25 animate-pulse'
                      : 'text-blue-600 dark:text-yellow-400 hover:bg-blue-500/20 dark:hover:bg-yellow-500/20 hover:rotate-12'
                  }`}
                  aria-label={item.label}
                >
                  <Icon className="w-5 h-5" />
                  <span className="absolute left-16 bg-blue-900 dark:bg-yellow-500 text-white dark:text-gray-900 px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap transform group-hover:scale-105">
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;