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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">{language === 'zh' ? '快速連結' : 'Quick Links'}</h4>
            <ul className="space-y-2">
              {t.quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">{language === 'zh' ? '支援服務' : 'Support'}</h4>
            <ul className="space-y-2">
              {t.support.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">{t.contactTitle}</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  {t.address.map((line, index) => (
                    <p key={index} className="text-gray-300">{line}</p>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <p className="text-gray-300">+1 (604) 822-2848</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <p className="text-gray-300">info@ubcsummercamp.ca</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-lg border border-blue-500/30">
              <h5 className="font-semibold text-yellow-400 mb-2">{t.officeHours}</h5>
              {t.officeTime.map((time, index) => (
                <p key={index} className="text-sm text-gray-300">{time}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <img 
                src="/FEA.png" 
                alt="FEA Logo" 
                className="h-8 w-8 rounded-full opacity-80"
              />
              <div className="flex items-center gap-2 text-gray-300">
                <span>{language === 'zh' ? '用愛為未來的全球公民製作' : t.madeWith}</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
              <span>{t.copyright}</span>
              <div className="flex gap-4">
                {t.links.map((link, index) => (
                  <a key={index} href="#" className="hover:text-yellow-400 transition-colors">{link}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;