import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../types/language';

interface LanguageSelectorProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, onLanguageChange }) => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-white/20">
        <div className="flex items-center gap-2 p-2">
          <Globe className="w-4 h-4 text-gray-600" />
          <button
            onClick={() => onLanguageChange('zh')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
              language === 'zh'
                ? 'bg-blue-500 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            中文
          </button>
          <button
            onClick={() => onLanguageChange('en')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
              language === 'en'
                ? 'bg-blue-500 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;