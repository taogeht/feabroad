import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Language } from '../types/language';

interface HeaderProps {
  language: Language;
}

const Header: React.FC<HeaderProps> = ({ language }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

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
                {language === 'zh' ? 'FEA 頂尖海外教育' : 'FEA Frontline Education Abroad'}
              </h1>
              <p className="text-xs text-gray-600">
                {language === 'zh' ? '溫哥華留學專家' : 'Vancouver Study Abroad Experts'}
              </p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              {language === 'zh' ? '首頁' : 'Home'}
            </Link>
            <Link 
              to="/ubc" 
              className={`transition-colors ${isActive('/ubc') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              {language === 'zh' ? 'UBC夏令營' : 'UBC Summer Camp'}
            </Link>
            <Link 
              to="/bodwell" 
              className={`transition-colors ${isActive('/bodwell') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              {language === 'zh' ? 'Bodwell學校' : 'Bodwell School'}
            </Link>
            <Link 
              to="/media" 
              className={`transition-colors ${isActive('/media') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              {language === 'zh' ? '照片影片' : 'Photos & Videos'}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;