import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../types/language';

interface LanguageSelectorProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, onLanguageChange }) => {
  const languages: { code: Language; label: string }[] = [
    { code: 'zh', label: '中文' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <div className="fixed top-20 right-4 z-50 md:top-4">
      <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-white/20">
        <div className="flex items-center gap-2 p-2">
          <Globe className="w-4 h-4 text-gray-600" />
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => onLanguageChange(lang.code)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                language === lang.code
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
