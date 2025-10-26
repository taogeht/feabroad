import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Heart } from 'lucide-react';
import { Language } from '../types/language';
import { content } from '../data/content';

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = content[language].footer;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/FEA.png" 
                alt="FEA Logo" 
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold text-yellow-400">
                  {language === 'zh' ? 'FEA 頂尖海外教育' : 'FEA Education'}
                </h3>
                <p className="text-sm text-gray-300">
                  {language === 'zh' ? '溫哥華留學專家' : 'Vancouver Study Experts'}
                </p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {t.description}
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">{t.contactTitle}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <a href={`mailto:${t.email}`} className="text-gray-300 hover:text-yellow-400 transition-colors">
                  {t.email}
                </a>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-lg border border-blue-500/30">
              <h5 className="font-semibold text-yellow-400 mb-3">{language === 'zh' ? '掃描QR Code聯絡我們' : 'Scan QR Code to Contact Us'}</h5>
              <div className="flex justify-center">
                <img 
                  src={`/${t.qrCode}`}
                  alt="QR Code for Contact"
                  className="w-24 h-24 bg-white rounded-lg p-2"
                  onError={(e) => {
                    // Fallback if image not found
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
