import React from 'react';
import { Language } from '../types/language';
import { content } from '../data/content';
import { BookOpen, Mountain, Globe, Shield, Clock, Star, Calendar, Users, MapPin, Home, Utensils, Wifi, Bath, Bed, Check, X, Plane, DollarSign, GraduationCap, Camera, Moon, Map } from 'lucide-react';

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


      {/* Weekly Program Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {language === 'zh' ? '每週課程安排' : 'Weekly Program Schedule'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {language === 'zh' 
                ? '學生將在週一至週五結合英語課程和每日活動，週六和週日進行全天活動。本計劃還包括一系列晚間活動。'
                : 'Students will combine English classes with daily activities from Monday to Friday and full day activities on Saturday and Sunday. This program also includes a suite of evening activities.'
              }
            </p>
            <p className="text-sm text-gray-500 italic mt-4">
              <em>*{language === 'zh' ? '確切時間可能因活動而異。' : 'Exact time may vary depending on activity.'}</em>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6">
            {/* Monday */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 shadow-lg border border-blue-100">
              <div className="bg-gradient-to-r from-blue-400 to-green-400 text-white text-center py-3 rounded-xl font-bold text-lg mb-4">
                {language === 'zh' ? '週一' : 'MON'}
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="bg-blue-100 text-blue-800 text-center py-2 rounded-lg font-semibold text-sm mb-2">
                    9AM-12PM
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-blue-500" />
                    <span className="text-gray-700 font-medium">
                      {language === 'zh' ? '一般英語' : 'General English'}
                    </span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="bg-blue-100 text-blue-800 text-center py-2 rounded-lg font-semibold text-sm mb-2">
                    1PM-4PM
                  </div>
                  <div className="flex items-center gap-3">
                    <Camera className="w-6 h-6 text-green-500" />
                    <span className="text-gray-700 font-medium">
                      {language === 'zh' ? '一般校內活動' : 'General on-site activity'}
                    </span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="bg-blue-100 text-blue-800 text-center py-2 rounded-lg font-semibold text-sm mb-2">
                    7PM-9PM
                  </div>
                  <div className="flex items-center gap-3">
                    <Moon className="w-6 h-6 text-purple-500" />
                    <span className="text-gray-700 font-medium">
                      {language === 'zh' ? '晚間活動' : 'Evening Activity'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tuesday */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 shadow-lg border border-blue-100">
              <div className="bg-gradient-to-r from-blue-400 to-green-400 text-white text-center py-3 rounded-xl font-bold text-lg mb-4">
                {language === 'zh' ? '週二' : 'TUE'}
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="bg-blue-100 text-blue-800 text-center py-2 rounded-lg font-semibold text-sm mb-2">
                    9AM-12PM
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-blue-500" />
                    <span className="text-gray-700 font-medium">
                      {language === 'zh' ? '一般英語' : 'General English'}
                    </span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="bg-blue-100 text-blue-800 text-center py-2 rounded-lg font-semibold text-sm mb-2">
                    1PM-5PM
                  </div>
                  <div className="flex items-center gap-3">
                    <Camera className="w-6 h-6 text-green-500" />
                    <div>
                      <span className="text-gray-700 font-medium block">
                        {language === 'zh' ? '一般校外活動' : 'General off-site activity'}
                      </span>
                      <span className="text-xs text-blue-600 font-semibold">
                        {language === 'zh' ? '所有學生' : 'All Students'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="bg-blue-100 text-blue-800 text-center py-2 rounded-lg font-semibold text-sm mb-2">
                    7PM-9PM
                  </div>
                  <div className="flex items-center gap-3">
                    <Moon className="w-6 h-6 text-purple-500" />
                    <span className="text-gray-700 font-medium">
                      {language === 'zh' ? '晚間活動' : 'Evening Activity'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Wednesday */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 shadow-lg border border-blue-100">
              <div className="bg-gradient-to-r from-blue-400 to-green-400 text-white text-center py-3 rounded-xl font-bold text-lg mb-4">
                {language === 'zh' ? '週三' : 'WED'}
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="bg-blue-100 text-blue-800 text-center py-2 rounded-lg font-semibold text-sm mb-2">
                    9AM-12PM
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-blue-500" />
                    <span className="text-gray-700 font-medium">
                      {language === 'zh' ? '一般英語' : 'General English'}
                    </span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="bg-blue-100 text-blue-800 text-center py-2 rounded-lg font-semibold text-sm mb-2">
                    1PM-4PM
                  </div>
                  <div className="flex items-center gap-3">
                    <Camera className="w-6 h-6 text-green-500" />
                    <span className="text-gray-700 font-medium">
                      {language === 'zh' ? '一般校內活動' : 'General on-site activity'}
                    </span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="bg-blue-100 text-blue-800 text-center py-2 rounded-lg font-semibold text-sm mb-2">
                    7PM-9PM
                  </div>
                  <div className="flex items-center gap-3">
                    <Moon className="w-6 h-6 text-purple-500" />
                    <span className="text-gray-700 font-medium">
                      {language === 'zh' ? '晚間活動' : 'Evening Activity'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Thursday */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 shadow-lg border border-blue-100">
              <div className="bg-gradient-to-r from-blue-400 to-green-400 text-white text-center py-3 rounded-xl font-bold text-lg mb-4">
                {language === 'zh' ? '週四' : 'THU'}
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="bg-blue-100 text-blue-800 text-center py-2 rounded-lg font-semibold text-sm mb-2">
                    9AM-12PM
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-blue-500" />
                    <span className="text-gray-700 font-medium">
                      {language === 'zh' ? '一般英語' : 'General English'}
                    </span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="bg-blue-100 text-blue-800 text-center py-2 rounded-lg font-semibold text-sm mb-2">
                    1PM-5PM
                  </div>
                  <div className="flex items-center gap-3">
                    <Camera className="w-6 h-6 text-green-500" />
                    <div>
                      <span className="text-gray-700 font-medium block">
                        {language === 'zh' ? '一般校外活動' : 'General off-site activity'}
                      </span>
                      <span className="text-xs text-blue-600 font-semibold">
                        {language === 'zh' ? '所有學生' : 'All Students'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="bg-blue-100 text-blue-800 text-center py-2 rounded-lg font-semibold text-sm mb-2">
                    7PM-9PM
                  </div>
                  <div className="flex items-center gap-3">
                    <Moon className="w-6 h-6 text-purple-500" />
                    <span className="text-gray-700 font-medium">
                      {language === 'zh' ? '晚間活動' : 'Evening Activity'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Friday */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 shadow-lg border border-blue-100">
              <div className="bg-gradient-to-r from-blue-400 to-green-400 text-white text-center py-3 rounded-xl font-bold text-lg mb-4">
                {language === 'zh' ? '週五' : 'FRI'}
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="bg-blue-100 text-blue-800 text-center py-2 rounded-lg font-semibold text-sm mb-2">
                    9AM-12PM
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-blue-500" />
                    <span className="text-gray-700 font-medium">
                      {language === 'zh' ? '一般英語' : 'General English'}
                    </span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="bg-blue-100 text-blue-800 text-center py-2 rounded-lg font-semibold text-sm mb-2">
                    1AM-4PM
                  </div>
                  <div className="flex items-center gap-3">
                    <Camera className="w-6 h-6 text-green-500" />
                    <div>
                      <span className="text-gray-700 font-medium block">
                        {language === 'zh' ? '一般校內活動' : 'General on-site activity'}
                      </span>
                      <span className="text-xs text-blue-600 font-semibold">
                        {language === 'zh' ? '所有學生' : 'All Students'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="bg-blue-100 text-blue-800 text-center py-2 rounded-lg font-semibold text-sm mb-2">
                    7PM–9PM
                  </div>
                  <div className="flex items-center gap-3">
                    <Moon className="w-6 h-6 text-purple-500" />
                    <span className="text-gray-700 font-medium">
                      {language === 'zh' ? '晚間活動' : 'Evening Activity'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Saturday */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 shadow-lg border border-blue-100">
              <div className="bg-gradient-to-r from-blue-400 to-green-400 text-white text-center py-3 rounded-xl font-bold text-lg mb-4">
                {language === 'zh' ? '週六' : 'SAT'}
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="bg-blue-100 text-blue-800 text-center py-2 rounded-lg font-semibold text-sm mb-2">
                    9AM-5PM
                  </div>
                  <div className="flex items-center gap-3">
                    <Camera className="w-6 h-6 text-green-500" />
                    <div>
                      <span className="text-gray-700 font-medium block">
                        {language === 'zh' ? '全天活動' : 'Full Day Activity'}
                      </span>
                      <span className="text-xs text-blue-600 font-semibold">
                        {language === 'zh' ? '所有學生' : 'All Students'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sunday */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 shadow-lg border border-blue-100">
              <div className="bg-gradient-to-r from-blue-400 to-green-400 text-white text-center py-3 rounded-xl font-bold text-lg mb-4">
                {language === 'zh' ? '週日' : 'SUN'}
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="bg-blue-100 text-blue-800 text-center py-2 rounded-lg font-semibold text-sm mb-2">
                    11AM-6PM
                  </div>
                  <div className="flex items-center gap-3">
                    <Plane className="w-6 h-6 text-blue-500" />
                    <div>
                      <span className="text-gray-700 font-medium block">
                        {language === 'zh' ? '到達和離開日' : 'Arrival and departure day'}
                      </span>
                      <span className="text-xs text-blue-600 font-semibold">
                        {language === 'zh' ? '所有繼續學生的全天活動' : 'Full day activity for all continuing students'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Attractions */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {language === 'zh' ? '溫哥華及周邊熱門景點' : 'Popular Attractions in and around Vancouver'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {language === 'zh' 
                ? '探索溫哥華周邊的驚人自然美景和標誌性景點。'
                : 'Explore Vancouver\'s amazing natural beauty and iconic landmarks.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {/* Capilano Suspension Bridge */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src="https://www.ilsc.com/hubfs/Website/Programs/Junior%20Programs/Capilano%20Suspension%20Bridge.jpg" 
                  alt="Capilano Suspension Bridge"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {language === 'zh' ? '卡皮拉諾吊橋' : 'Capilano Suspension Bridge'}
                </h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {language === 'zh' 
                    ? '體驗這個標誌性的吊橋，穿越壯觀的雨林樹冠。'
                    : 'Experience this iconic suspension bridge crossing through spectacular rainforest treetops.'
                  }
                </p>
              </div>
            </div>

            {/* English Bay */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src="https://www.ilsc.com/hubfs/Website/Destinations/Vancouver/Things%20To%20Do/English-Bay.jpg" 
                  alt="English Bay"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {language === 'zh' ? '英格蘭灣' : 'English Bay'}
                </h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {language === 'zh' 
                    ? '享受溫哥華最受歡迎的海灘，壯觀的日落和充滿活力的氛圍。'
                    : 'Enjoy Vancouver\'s most popular beach with spectacular sunsets and vibrant atmosphere.'
                  }
                </p>
              </div>
            </div>

            {/* Science World */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src="https://www.ilsc.com/hubfs/Website/Destinations/Vancouver/Things%20To%20Do/Science-World.jpg" 
                  alt="Science World"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {language === 'zh' ? '科學世界' : 'Science World'}
                </h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {language === 'zh' 
                    ? '探索這個標誌性的球形建築中的互動科學展覽。'
                    : 'Explore interactive science exhibits in this iconic geodesic dome building.'
                  }
                </p>
              </div>
            </div>

            {/* Stanley Park */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src="https://www.ilsc.com/hubfs/Website/Destinations/Vancouver/Things%20To%20Do/Stanley-Park.jpg" 
                  alt="Stanley Park"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {language === 'zh' ? '史丹利公園' : 'Stanley Park'}
                </h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {language === 'zh' 
                    ? '發現北美最大的城市公園之一，擁有海牆、森林和海灘。'
                    : 'Discover one of North America\'s largest urban parks with seawall, forests, and beaches.'
                  }
                </p>
              </div>
            </div>

            {/* Whistler & Gondola */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src="https://www.ilsc.com/hubfs/Website/Destinations/Vancouver/Things%20To%20Do/Whistler.jpg" 
                  alt="Whistler & Gondola"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {language === 'zh' ? '惠斯勒與纜車' : 'Whistler & Gondola'}
                </h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {language === 'zh' 
                    ? '體驗奧運場地山脈村莊和令人驚嘆的纜車之旅。'
                    : 'Experience Olympic mountain resort village and breathtaking gondola rides.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {language === 'zh' ? '住宿安排' : 'Accommodations'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {language === 'zh' 
                ? '學生將在UBC圖腾公園住宿內居住和用餐。'
                : 'Students live and dine within UBC Totem Park Residence.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/ubc_accommodation.webp" 
                alt="UBC Accommodation"
                className="w-full h-auto rounded-2xl shadow-lg"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Home className="w-6 h-6 text-blue-500" />
                    <h3 className="text-lg font-bold text-gray-900">
                      {language === 'zh' ? '容量' : 'CAPACITY'}
                    </h3>
                  </div>
                  <p className="text-gray-700 font-medium">300</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Bed className="w-6 h-6 text-green-500" />
                    <h3 className="text-lg font-bold text-gray-900">
                      {language === 'zh' ? '住宿安排' : 'ACCOMMODATIONS'}
                    </h3>
                  </div>
                  <p className="text-gray-700 font-medium">
                    {language === 'zh' 
                      ? '單人或共享房間（我們會盡量滿足您的房型偏好；但最終安排將根據可房情況而定）'
                      : 'Single or shared room (We will try to accommodate your room type preference; however, final placement is based on availability)'
                    }
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Bath className="w-6 h-6 text-blue-500" />
                    <h3 className="text-lg font-bold text-gray-900">
                      {language === 'zh' ? '浴室' : 'BATHROOMS'}
                    </h3>
                  </div>
                  <p className="text-gray-700 font-medium">Shared, 1:6</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Wifi className="w-6 h-6 text-green-500" />
                    <h3 className="text-lg font-bold text-gray-900">
                      {language === 'zh' ? '網路' : 'INTERNET'}
                    </h3>
                  </div>
                  <p className="text-gray-700 font-medium">
                    {language === 'zh' 
                      ? '學生公共空間提供無線網路'
                      : 'Wireless internet available in student common spaces'
                    }
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-blue-500" />
                    <h3 className="text-lg font-bold text-gray-900">
                      {language === 'zh' ? '學生與員工比例' : 'STUDENT TO STAFF RATIO'}
                    </h3>
                  </div>
                  <p className="text-gray-700 font-medium">1:15</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Utensils className="w-6 h-6 text-green-500" />
                    <h3 className="text-lg font-bold text-gray-900">
                      {language === 'zh' ? '餐飲' : 'MEALS'}
                    </h3>
                  </div>
                  <p className="text-gray-700 font-medium">
                    {language === 'zh' ? '每天3餐' : '3 meals per day'}
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-yellow-700 font-bold text-sm">*</span>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium mb-3">
                      {language === 'zh' 
                        ? '我們的「僅日間」課程為學生提供相同的包容性青少年營體驗，但不包括住宿、早餐和機場接送服務。我們在UBC的「僅日間」課程包括午餐和晚餐。'
                        : 'Our Day Only programs offer students the same inclusive Junior Camp experience without accommodation, breakfast, and airport transfer service. Our Day Only program at UBC includes lunch and dinner.'
                      }
                    </p>
                    <p className="text-gray-700 font-medium">
                      {language === 'zh' 
                        ? '**有飲食限制的學生可選擇。請洽詢更多詳情。'
                        : '**Options for students with dietary restrictions are available. Please inquire for more details.'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
                    <span className="text-5xl font-bold text-gray-900">NTD $210,000</span>
                    <span className="text-xl text-gray-600">/ {language === 'zh' ? '人' : 'person'}</span>
                  </div>
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

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UBCPage;
