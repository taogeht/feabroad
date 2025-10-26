import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users, ArrowRight, GraduationCap, School, Camera, Video } from 'lucide-react';
import { Language } from '../types/language';

interface HomePageProps {
  language: Language;
}

const HomePage: React.FC<HomePageProps> = ({ language }) => {
  const content = {
    en: {
      hero: {
        title: "Study in Beautiful Vancouver, Canada",
        subtitle: "Discover world-class education opportunities in one of the world's most livable cities. Choose from our premium programs designed specifically for Taiwanese students.",
        location: "Vancouver, BC",
        experience: "15+ Years Experience",
        students: "500+ Happy Students"
      },
      programs: {
        title: "Choose Your Perfect Program",
        subtitle: "We offer two exceptional study abroad options in Vancouver, each designed to provide unique educational experiences.",
        ubc: {
          title: "UBC Summer Camp",
          description: "Experience university life at one of Canada's top universities with our comprehensive summer program.",
          features: ["University Campus Living", "15 Hours English Classes/Week", "Outdoor Adventures", "Cultural Immersion"],
          duration: "30 Days",
          ages: "Ages 9-17",
          price: "NTD $210,000"
        },
        bodwell: {
          title: "Bodwell High School Program",
          description: "Study at a prestigious boarding school with state-of-the-art facilities and personalized care.",
          features: ["Boarding School Experience", "Academic English Program", "Waterfront Campus", "24/7 Supervision"],
          duration: "24 Days",
          ages: "Ages 9-17", 
          price: "NTD $140,000"
        }
      },
      why: {
        title: "Why Choose Vancouver?",
        reasons: [
          { title: "World-Class Education", description: "Home to top-ranked universities and schools" },
          { title: "Safe & Multicultural", description: "One of the world's safest and most diverse cities" },
          { title: "Natural Beauty", description: "Mountains, ocean, and parks all within the city" },
          { title: "English Environment", description: "Perfect setting for language immersion" }
        ]
      },
      media: {
        title: "See Our Students' Adventures",
        subtitle: "Browse through photos and videos from previous trips to Vancouver",
        button: "View Gallery"
      }
    },
    zh: {
      hero: {
        title: "在美麗的加拿大溫哥華留學",
        subtitle: "在世界最宜居城市之一發現世界級教育機會。從我們專為台灣學生設計的優質課程中選擇。",
        location: "溫哥華，卑詩省",
        experience: "15年以上經驗",
        students: "500+快樂學生"
      },
      programs: {
        title: "選擇您的完美課程",
        subtitle: "我們在溫哥華提供兩個卓越的留學選擇，每個都旨在提供獨特的教育體驗。",
        ubc: {
          title: "UBC夏令營",
          description: "在加拿大頂尖大學之一體驗大學生活，參加我們的綜合夏季課程。",
          features: ["大學校園生活", "每週15小時英語課程", "戶外冒險", "文化沉浸"],
          duration: "30天",
          ages: "9-17歲",
          price: "NTD $210,000"
        },
        bodwell: {
          title: "Bodwell高中課程",
          description: "在擁有最先進設施和個人化照護的著名寄宿學校學習。",
          features: ["寄宿學校體驗", "學術英語課程", "海濱校園", "24小時監護"],
          duration: "24天",
          ages: "9-17歲",
          price: "NTD $140,000"
        }
      },
      why: {
        title: "為什麼選擇溫哥華？",
        reasons: [
          { title: "世界級教育", description: "頂級大學和學校的所在地" },
          { title: "安全多元文化", description: "世界最安全和最多元的城市之一" },
          { title: "自然美景", description: "山脈、海洋和公園都在城市內" },
          { title: "英語環境", description: "語言沉浸的完美環境" }
        ]
      },
      media: {
        title: "看看我們學生的冒險",
        subtitle: "瀏覽以前溫哥華之旅的照片和影片",
        button: "查看相簿"
      }
    }
  };

  const t = content[language];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Vancouver Skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-green-500/70 to-blue-800/80"></div>
        </div>

        <div className="absolute top-24 right-8 z-10 opacity-20">
          <img 
            src="/FEA.png" 
            alt="FEA Logo" 
            className="h-32 w-32 rounded-full"
          />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img 
              src="/FEA.png" 
              alt="FEA Logo" 
              className="h-16 w-16 rounded-full"
            />
            <div className="text-white">
              <h2 className="text-xl font-bold">
                {language === 'zh' ? 'FEA 頂尖海外教育' : 'FEA Frontline Education Abroad'}
              </h2>
              <p className="text-sm opacity-90">
                {language === 'zh' ? '呈現' : 'Presents'}
              </p>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t.hero.title}
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-yellow-300" />
              <span className="text-white font-semibold">{t.hero.location}</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-yellow-300" />
              <span className="text-white font-semibold">{t.hero.experience}</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-yellow-300" />
              <span className="text-white font-semibold">{t.hero.students}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t.programs.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.programs.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* UBC Program */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-12 h-12 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">{t.programs.ubc.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t.programs.ubc.description}
              </p>

              <div className="space-y-3 mb-6">
                {t.programs.ubc.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {t.programs.ubc.duration}
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {t.programs.ubc.ages}
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {t.programs.ubc.price}
                </span>
              </div>

              <Link 
                to="/ubc"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
              >
                {language === 'zh' ? '了解更多' : 'Learn More'}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Bodwell Program */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-6">
                <School className="w-12 h-12 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">{t.programs.bodwell.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t.programs.bodwell.description}
              </p>

              <div className="space-y-3 mb-6">
                {t.programs.bodwell.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {t.programs.bodwell.duration}
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {t.programs.bodwell.ages}
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {t.programs.bodwell.price}
                </span>
              </div>

              <Link 
                to="/bodwell"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
              >
                {language === 'zh' ? '了解更多' : 'Learn More'}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vancouver Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t.why.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.why.reasons.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Gallery CTA */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Camera className="w-12 h-12 text-blue-600" />
              <Video className="w-12 h-12 text-green-600" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t.media.title}
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t.media.subtitle}
            </p>
            
            <Link 
              to="/media"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {t.media.button}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
