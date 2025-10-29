import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Language } from '../types/language';
import { content } from '../data/content';

interface HeaderProps {
  language: Language;
}

const Header: React.FC<HeaderProps> = ({ language }) => {
  const t = content[language].header;

  const navLinks = [
    { to: '/', label: t.home },
    { to: '/ubc', label: t.ubc },
    { to: '/bodwell', label: t.bodwell },
    { to: '/media', label: t.media },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/FEA.png"
              alt="FEA Logo"
              className="h-10 w-10 rounded-full"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-900">
                {t.title}
              </h1>
              <p className="text-xs text-gray-600">
                {t.subtitle}
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-700 hover:text-blue-600'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;