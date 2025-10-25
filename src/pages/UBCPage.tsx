import React from 'react';
import { Language } from '../types/language';
import { content } from '../data/content';
import { BookOpen, Mountain, Globe, Shield, Clock, Star, Calendar, Users, MapPin, Home, Utensils, Wifi, Bath, Bed, Check, X, Plane, DollarSign } from 'lucide-react';

interface UBCPageProps {
  language: Language;
}

const UBCPage: React.FC<UBCPageProps> = ({ language }) => {
  const t = content[language];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="UBC Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/80 via-purple-400/70 to-green-400/80"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {language === 'zh' ? (
              <>
                在加拿大<span className="text-yellow-300">UBC</span>度過難忘的夏天！
              </>
            ) : (
              <>
                Experience an Unforgettable Summer at 
                <span className="text-yellow-300"> UBC, Canada!</span>
              </>
            )}
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-yellow-300" />
              <span className="text-white font-semibold">{t.hero.dates}</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-yellow-300" />
              <span className="text-white font-semibold">{t.hero.ages}</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-yellow-300" />
              <span className="text-white font-semibold">{t.hero.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t.programOverview.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.programOverview.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(t.programOverview.highlights).map(([key, highlight], index) => {
              const icons = [BookOpen, Mountain, Globe, Shield, Clock, Star];
              const Icon = icons[index];
              return (
                <div 
                  key={key}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-green-500 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t.accommodation.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.accommodation.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(t.accommodation.amenities).map(([key, amenity], index) => {
              const icons = [Bed, Utensils, Shield, Wifi, Bath, Home];
              const Icon = icons[index];
              return (
                <div 
                  key={key}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-green-500 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{amenity.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{amenity.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t.pricing.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.pricing.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-gradient-to-r from-blue-400 to-green-400">
              <div className="bg-gradient-to-r from-blue-500 to-green-500 px-8 py-6">
                <div className="flex items-center justify-center gap-3 text-white">
                  <Star className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">{t.pricing.programTitle}</h3>
                  <Star className="w-8 h-8" />
                </div>
              </div>
              
              <div className="p-8 sm:p-12">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Calendar className="w-6 h-6 text-blue-500" />
                    <span className="text-lg font-semibold text-gray-700">{t.pricing.dates}</span>
                  </div>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-gray-900">CAD $8,999</span>
                    <span className="text-xl text-gray-600">/ {language === 'zh' ? '人' : 'person'}</span>
                  </div>
                  <p className="text-blue-600 font-semibold mt-2">{t.pricing.earlyBird}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
                      <Check className="w-5 h-5" />
                      {t.pricing.included}
                    </h4>
                    <div className="space-y-3">
                      {t.pricing.inclusions.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-green-600" />
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                      <X className="w-5 h-5" />
                      {t.pricing.notIncluded}
                    </h4>
                    <div className="space-y-3">
                      {t.pricing.exclusions.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <X className="w-3 h-3 text-red-600" />
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    {t.pricing.secureSpot}
                  </button>
                  <p className="text-sm text-gray-600 mt-3">
                    {t.pricing.deposit}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UBCPage;